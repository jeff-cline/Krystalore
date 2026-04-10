'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

interface Event {
  id: string
  title: string
  description?: string
  date: string
  type: 'Virtual' | 'In-Person'
  status: 'upcoming' | 'past'
}

export default function EventsPage() {
  const { data: session, status } = useSession()
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) return

    const fetchEvents = async () => {
      try {
        setLoading(true)
        // Try to fetch events from API if it exists
        const response = await fetch('/api/events')
        if (response.ok) {
          const data = await response.json()
          setEvents(data.events || [])
        }
        // If API doesn't exist, we'll show empty state
      } catch (err) {
        // API might not exist, that's okay - we'll show empty state
        console.log('Events API not available')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [session, status])

  if (status === 'loading' || loading) {
    return (
      <DashboardLayout>
        <div className="space-y-6 animate-pulse">
          <div className="bg-gray-200 rounded-lg h-32"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-24"></div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    )
  }

  if (!session) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please sign in</h2>
          <p className="text-gray-600">You need to be signed in to view events.</p>
        </div>
      </DashboardLayout>
    )
  }

  if (error) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error</h2>
          <p className="text-red-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </DashboardLayout>
    )
  }

  // Show events if they exist
  if (events.length > 0) {
    const upcomingEvents = events.filter(event => event.status === 'upcoming')
    const pastEvents = events.filter(event => event.status === 'past')

    return (
      <DashboardLayout>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Events</h1>
            <p className="text-gray-600 mt-2">
              Live sessions, workshops, and community events
            </p>
          </div>

          {/* Upcoming Events */}
          {upcomingEvents.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#FF8900]" /> Upcoming Events
              </h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">{event.title}</h3>
                        {event.description && (
                          <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                        )}
                        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> 
                            {new Date(event.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> 
                            {event.type}
                          </span>
                        </div>
                      </div>
                      <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium ${
                        event.type === 'Virtual' 
                          ? 'bg-[#34c5c5]/10 text-[#34c5c5]' 
                          : 'bg-[#FF8900]/10 text-[#FF8900]'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Events */}
          {pastEvents.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-400" /> Past Events
              </h2>
              <div className="space-y-4">
                {pastEvents.map((event) => (
                  <div key={event.id} className="bg-gray-50 rounded-lg border border-gray-100 p-5 opacity-75">
                    <h3 className="font-bold text-gray-700">{event.title}</h3>
                    {event.description && (
                      <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                    )}
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> 
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DashboardLayout>
    )
  }

  // Show empty state
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-600 mt-2">
            Live sessions, workshops, and community events
          </p>
        </div>

        {/* Empty State */}
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Events Scheduled</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay tuned for upcoming live sessions, workshops, and community events. 
            We'll be announcing exciting opportunities for you to connect and learn 
            with other members of the Executive Krystalore community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <Calendar className="h-8 w-8 text-[#FF8900] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Live Sessions</h4>
              <p className="text-sm text-gray-600">Join interactive workshops and coaching sessions with Krystalore.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Users className="h-8 w-8 text-[#34c5c5] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Community Events</h4>
              <p className="text-sm text-gray-600">Network with fellow executives and leaders in exclusive gatherings.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <MapPin className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Retreats</h4>
              <p className="text-sm text-gray-600">Immersive experiences for deep transformation and breakthrough.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-4">🗓️ Coming Soon</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/90">
              <div>• Monday Motivation Live Sessions</div>
              <div>• Freedom Friday Community Calls</div>
              <div>• Executive Leadership Workshops</div>
              <div>• Quarterly Business Retreats</div>
              <div>• Wellness & Mindset Bootcamps</div>
              <div>• VIP Member Exclusive Events</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}