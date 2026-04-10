/**
 * GoHighLevel (GHL) Integration
 * 
 * Pushes new contacts to GHL when accounts are created.
 * Uses GHL API v2: https://highlevel.stoplight.io/docs/integrations
 */

import { readFileSync } from 'fs'
import { join } from 'path'

interface GHLContact {
  email: string
  name: string
  phone?: string
  tags: string[]
  customFields?: Record<string, string | number>
}

interface GHLConfig {
  apiKey: string
  locationId: string
}

function getGHLConfig(): GHLConfig | null {
  try {
    const data = readFileSync(join(process.cwd(), 'data', 'integrations.json'), 'utf-8')
    const integrations = JSON.parse(data)
    const ghl = integrations.gohighlevel
    if (ghl?.apiKey && ghl?.locationId) {
      return { apiKey: ghl.apiKey, locationId: ghl.locationId }
    }
    return null
  } catch {
    return null
  }
}

export async function pushContactToGHL(contact: GHLContact): Promise<{ success: boolean; contactId?: string; error?: string }> {
  const config = getGHLConfig()
  if (!config) {
    return { success: false, error: 'GoHighLevel not configured. Set API Key and Location ID in Admin > Integrations.' }
  }

  try {
    const [firstName, ...lastParts] = contact.name.split(' ')
    const lastName = lastParts.join(' ')

    const body: Record<string, unknown> = {
      email: contact.email,
      firstName,
      lastName: lastName || undefined,
      phone: contact.phone || undefined,
      tags: contact.tags,
      locationId: config.locationId,
    }

    // Add quiz results as custom field values
    if (contact.customFields) {
      body.customField = Object.entries(contact.customFields).map(([key, value]) => ({
        key,
        value: String(value),
      }))
    }

    const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return { success: false, error: `GHL API error ${response.status}: ${errorText}` }
    }

    const data = await response.json()
    return { success: true, contactId: data.contact?.id }
  } catch (err) {
    return { success: false, error: `GHL request failed: ${err instanceof Error ? err.message : String(err)}` }
  }
}

export async function testGHLConnection(): Promise<{ connected: boolean; error?: string }> {
  const config = getGHLConfig()
  if (!config) {
    return { connected: false, error: 'Not configured' }
  }

  try {
    const response = await fetch(`https://services.leadconnectorhq.com/locations/${config.locationId}`, {
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Version': '2021-07-28',
      },
    })
    return { connected: response.ok, error: response.ok ? undefined : `Status ${response.status}` }
  } catch (err) {
    return { connected: false, error: err instanceof Error ? err.message : String(err) }
  }
}
