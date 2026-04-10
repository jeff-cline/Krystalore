'use client'

import React, { useEffect, useRef, useCallback } from 'react'

/**
 * KrystaloreDiamond — Reusable 3D rotating brilliant-cut diamond.
 * Canvas-based with real 3D projection, face sorting, text on facets, and sparkles.
 *
 * Crown (top 5 wide facets):  Core, Confidence, Consistency, Community, Celebration
 * Pavilion (bottom 15 triangle facets): Services
 */

interface Vec3 { x: number; y: number; z: number }
interface Face {
  verts: Vec3[]
  label: string
  link: string
  color: string
  type: 'crown' | 'pavilion' | 'table'
}

const TEAL = { r: 45, g: 212, b: 191 }

// 5 Crown labels
const CROWN_LABELS = ['Core', 'Confidence', 'Consistency', 'Community', 'Celebration']
const CROWN_LINKS = ['#core', '#confidence', '#consistency', '/community', '#celebration']

// 15 Pavilion labels
const PAV_LABELS = [
  'Fitness', 'Speaking', 'Corp. Retreats', 'Private', 'Books',
  'Podcast', 'Courses', 'Veterans', 'Real Estate', 'Gypsy Tours',
  'Business', 'Retreats', 'Nonprofits', 'Partners', 'Boot Camp',
]
const PAV_LINKS = [
  '/fitness', '/keynote-speaker', '/corporate-retreat-planning', '/private', '/books',
  '/podcasts', '/courses', '/veteran-coaching', '/partners', '/gypsy-tours',
  '/bootcamp', '/retreat', '/community', '/partners', '/bootcamp',
]

function rotateY(v: Vec3, angle: number): Vec3 {
  const c = Math.cos(angle), s = Math.sin(angle)
  return { x: v.x * c + v.z * s, y: v.y, z: -v.x * s + v.z * c }
}
function rotateX(v: Vec3, angle: number): Vec3 {
  const c = Math.cos(angle), s = Math.sin(angle)
  return { x: v.x, y: v.y * c - v.z * s, z: v.y * s + v.z * c }
}

function project(v: Vec3, cx: number, cy: number, fov: number): { x: number; y: number; scale: number } {
  const z = v.z + fov
  const scale = fov / z
  return { x: cx + v.x * scale, y: cy + v.y * scale, scale }
}

function faceNormal(verts: Vec3[]): Vec3 {
  const a = verts[0], b = verts[1], c = verts[2]
  const ux = b.x - a.x, uy = b.y - a.y, uz = b.z - a.z
  const vx = c.x - a.x, vy = c.y - a.y, vz = c.z - a.z
  return { x: uy * vz - uz * vy, y: uz * vx - ux * vz, z: ux * vy - uy * vx }
}

function faceCenter(verts: Vec3[]): Vec3 {
  const n = verts.length
  let x = 0, y = 0, z = 0
  for (const v of verts) { x += v.x; y += v.y; z += v.z }
  return { x: x / n, y: y / n, z: z / n }
}

interface DiamondProps {
  size?: number
  className?: string
  speed?: number
}

interface Sparkle {
  angle: number
  yPos: number
  phase: number
  speed: number
  size: number
}

export default function KrystaloreDiamond({ size = 500, className = '', speed = 12 }: DiamondProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const sparklesRef = useRef<Sparkle[]>([])
  const facesRef = useRef<Face[]>([])
  const hoverRef = useRef<string | null>(null)
  const clickMapRef = useRef<{ path: Path2D; link: string }[]>([])

  // Build diamond geometry (in local space, Y-up)
  const buildGeometry = useCallback(() => {
    const R = size * 0.28 // girdle radius
    const tableR = R * 0.55 // table radius (smaller)
    const crownH = -size * 0.1 // crown height above girdle (negative Y = up)
    const tableH = -size * 0.18 // table height
    const pavilionH = size * 0.32 // pavilion depth below girdle

    const faces: Face[] = []

    // Generate girdle vertices (shared between crown and pavilion)
    const girdleVerts: Vec3[] = []
    const tableVerts: Vec3[] = []

    // Use 15 girdle points (LCM of 5 and 15 for alignment)
    for (let i = 0; i < 15; i++) {
      const a = (i / 15) * Math.PI * 2
      girdleVerts.push({ x: Math.cos(a) * R, y: 0, z: Math.sin(a) * R })
    }

    // 5 table vertices
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 + Math.PI / 5 // offset for alignment
      tableVerts.push({ x: Math.cos(a) * tableR, y: tableH, z: Math.sin(a) * tableR })
    }

    // Crown facets: 5 large trapezoids from table to girdle
    // Each crown facet spans 3 girdle vertices
    for (let i = 0; i < 5; i++) {
      const g1 = i * 3
      const g2 = ((i * 3) + 3) % 15
      const t1 = i
      const t2 = (i + 1) % 5

      // Main crown facet (quad: table edge to girdle edge)
      faces.push({
        verts: [
          tableVerts[t1],
          tableVerts[t2],
          girdleVerts[g2],
          girdleVerts[g1],
        ],
        label: CROWN_LABELS[i],
        link: CROWN_LINKS[i],
        color: 'crown',
        type: 'crown',
      })

      // Star facets (small triangles between main crown facets)
      // Triangle from girdle midpoint up to table vertex
      const gMid = girdleVerts[(g1 + 1) % 15]
      const gMid2 = girdleVerts[(g1 + 2) % 15]
      faces.push({
        verts: [tableVerts[t1], girdleVerts[g1], gMid],
        label: '',
        link: CROWN_LINKS[i],
        color: 'star',
        type: 'crown',
      })
      faces.push({
        verts: [tableVerts[t2], gMid2, girdleVerts[g2]],
        label: '',
        link: CROWN_LINKS[(i + 1) % 5],
        color: 'star',
        type: 'crown',
      })
    }

    // Table face (pentagon)
    faces.push({
      verts: [...tableVerts],
      label: '',
      link: '#',
      color: 'table',
      type: 'table',
    })

    // Pavilion facets: 15 triangles from girdle to culet (bottom point)
    const culet: Vec3 = { x: 0, y: pavilionH, z: 0 }
    for (let i = 0; i < 15; i++) {
      const g1 = girdleVerts[i]
      const g2 = girdleVerts[(i + 1) % 15]
      faces.push({
        verts: [g1, g2, culet],
        label: PAV_LABELS[i],
        link: PAV_LINKS[i],
        color: 'pavilion',
        type: 'pavilion',
      })
    }

    facesRef.current = faces

    // Init sparkles
    const sparkles: Sparkle[] = []
    for (let i = 0; i < 25; i++) {
      sparkles.push({
        angle: Math.random() * Math.PI * 2,
        yPos: -0.3 + Math.random() * 0.9,
        phase: Math.random() * Math.PI * 2,
        speed: 0.8 + Math.random() * 2,
        size: 2 + Math.random() * 4,
      })
    }
    sparklesRef.current = sparkles
  }, [size])

  useEffect(() => {
    buildGeometry()
  }, [buildGeometry])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    const cx = size / 2
    const cy = size * 0.38 // shift diamond up slightly
    const fov = size * 1.8

    let start: number | null = null

    const render = (ts: number) => {
      if (!start) start = ts
      const elapsed = (ts - start) / 1000
      const rotAngle = (elapsed / speed) * Math.PI * 2
      const tiltAngle = 0.15 // slight tilt toward viewer

      ctx.clearRect(0, 0, size, size)

      // Transform all faces
      const transformed: {
        face: Face
        projected: { x: number; y: number; scale: number }[]
        avgZ: number
        normal: Vec3
        center: Vec3
      }[] = []

      for (const face of facesRef.current) {
        // Rotate vertices
        const rotated = face.verts.map(v => {
          let r = rotateY(v, rotAngle)
          r = rotateX(r, tiltAngle)
          return r
        })

        const normal = faceNormal(rotated)
        const center = faceCenter(rotated)

        // Back-face culling (only draw faces pointing toward camera)
        // Camera is at z = -fov, so face normal z should be negative
        if (normal.z > 0 && face.type !== 'table') continue

        const proj = rotated.map(v => project(v, cx, cy, fov)) as { x: number; y: number; scale: number }[]
        const avgZ = rotated.reduce((s, v) => s + v.z, 0) / rotated.length

        transformed.push({
          face,
          projected: proj,
          avgZ,
          normal,
          center,
        })
      }

      // Sort by depth (painter's algorithm - draw far first)
      transformed.sort((a, b) => b.avgZ - a.avgZ)

      // Clear click map
      const clickMap: { path: Path2D; link: string }[] = []

      // Draw faces
      for (const { face, projected, normal, center } of transformed) {
        const path = new Path2D()
        path.moveTo(projected[0].x, projected[0].y)
        for (let i = 1; i < projected.length; i++) {
          path.lineTo(projected[i].x, projected[i].y)
        }
        path.closePath()

        // Calculate lighting
        // Light from upper-right-front
        const lightDir = { x: 0.3, y: -0.5, z: -0.8 }
        const len = Math.sqrt(normal.x ** 2 + normal.y ** 2 + normal.z ** 2)
        const nx = normal.x / len, ny = normal.y / len, nz = normal.z / len
        const dot = -(nx * lightDir.x + ny * lightDir.y + nz * lightDir.z)
        const brightness = 0.35 + Math.max(0, dot) * 0.65

        // Color based on face type
        let r: number, g: number, b: number, alpha: number

        if (face.color === 'table') {
          // Brightest, most reflective
          r = Math.round(80 + brightness * 120)
          g = Math.round(230 + brightness * 25)
          b = Math.round(225 + brightness * 30)
          alpha = 0.75
        } else if (face.color === 'crown' || face.color === 'star') {
          // Crown: brighter teal
          r = Math.round(TEAL.r * (0.6 + brightness * 0.5))
          g = Math.round(TEAL.g * (0.6 + brightness * 0.4))
          b = Math.round(TEAL.b * (0.6 + brightness * 0.5))
          alpha = 0.7 + brightness * 0.25

          if (face.color === 'star') {
            // Star facets slightly different shade
            r = Math.round(r * 0.85)
            g = Math.round(g * 0.95)
            b = Math.round(b * 1.05)
          }
        } else {
          // Pavilion: deeper teal
          r = Math.round(TEAL.r * (0.4 + brightness * 0.5))
          g = Math.round(TEAL.g * (0.5 + brightness * 0.45))
          b = Math.round(TEAL.b * (0.5 + brightness * 0.5))
          alpha = 0.65 + brightness * 0.3
        }

        // Fill face
        ctx.fillStyle = `rgba(${Math.min(255, r)}, ${Math.min(255, g)}, ${Math.min(255, b)}, ${alpha})`
        ctx.fill(path)

        // Specular highlight
        if (brightness > 0.7) {
          const specAlpha = (brightness - 0.7) * 1.5
          ctx.fillStyle = `rgba(255, 255, 255, ${specAlpha * 0.25})`
          ctx.fill(path)
        }

        // Edge lines
        ctx.strokeStyle = `rgba(180, 255, 250, ${0.15 + brightness * 0.35})`
        ctx.lineWidth = 0.8
        ctx.stroke(path)

        // Store click area
        if (face.link !== '#') {
          clickMap.push({ path, link: face.link })
        }

        // Draw label text — aligned along the LEFT EDGE of each facet
        // This follows the actual facet line (near-vertical for crown, angled for pavilion)
        if (face.label) {
          let edgeTopX: number, edgeTopY: number
          let edgeBotX: number, edgeBotY: number

          if (face.type === 'crown') {
            // Crown quad: [tableVert1, tableVert2, girdleVert2, girdleVert1]
            // Left edge runs from tableVert1 (index 0) down to girdleVert1 (index 3)
            edgeTopX = projected[0].x
            edgeTopY = projected[0].y
            edgeBotX = projected[3].x
            edgeBotY = projected[3].y
          } else {
            // Pavilion triangle: [girdleVert1, girdleVert2, culet]
            // Left edge runs from girdleVert1 (index 0) down to culet (index 2)
            edgeTopX = projected[0].x
            edgeTopY = projected[0].y
            edgeBotX = projected[2].x
            edgeBotY = projected[2].y
          }

          // Angle of the facet edge line
          const edgeAngle = Math.atan2(edgeBotY - edgeTopY, edgeBotX - edgeTopX)

          // Position text centered along the edge, offset slightly into the face
          const textFrac = face.type === 'crown' ? 0.5 : 0.35
          const edgePtX = edgeTopX + (edgeBotX - edgeTopX) * textFrac
          const edgePtY = edgeTopY + (edgeBotY - edgeTopY) * textFrac

          // Offset slightly into the face (perpendicular to the edge, toward center)
          let fcx = 0, fcy = 0
          for (const p of projected) { fcx += p.x; fcy += p.y }
          fcx /= projected.length
          fcy /= projected.length
          const insetFrac = face.type === 'crown' ? 0.35 : 0.25
          const textX = edgePtX + (fcx - edgePtX) * insetFrac
          const textY = edgePtY + (fcy - edgePtY) * insetFrac

          // Scale text size with projection
          const avgScale = projected.reduce((s, p) => s + p.scale, 0) / projected.length
          const fontSize = face.type === 'crown'
            ? Math.max(9, Math.min(14, 12 * avgScale))
            : Math.max(6, Math.min(10, 8 * avgScale))

          // Text visibility based on face orientation
          const textAlpha = Math.max(0, Math.min(1, brightness * 1.5))

          ctx.save()
          ctx.translate(textX, textY)

          // Rotate text to follow the edge line angle
          // Keep text readable — if it would render upside-down, flip it
          let drawAngle = edgeAngle
          if (drawAngle < -Math.PI / 2) drawAngle += Math.PI
          if (drawAngle > Math.PI / 2) drawAngle -= Math.PI
          ctx.rotate(drawAngle)

          ctx.font = `bold ${fontSize}px 'Inter', 'Segoe UI', sans-serif`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'

          // Black text with subtle white stroke for readability
          ctx.fillStyle = `rgba(0, 0, 0, ${textAlpha * 0.9})`
          ctx.strokeStyle = `rgba(255, 255, 255, ${textAlpha * 0.4})`
          ctx.lineWidth = 2.5
          ctx.strokeText(face.label, 0, 0)
          ctx.fillText(face.label, 0, 0)
          ctx.restore()
        }
      }

      clickMapRef.current = clickMap

      // ===== SPARKLE EFFECTS =====
      for (const s of sparklesRef.current) {
        s.phase += s.speed * 0.016
        const osc = Math.sin(s.phase)
        if (osc > 0.3) {
          const sparkleAlpha = (osc - 0.3) / 0.7

          // Position sparkle on diamond surface
          const sa = s.angle + rotAngle * 0.3
          const sr = size * 0.22 * (0.3 + Math.abs(s.yPos) * 0.5)
          let sv: Vec3 = {
            x: Math.cos(sa) * sr,
            y: s.yPos * size * 0.25,
            z: Math.sin(sa) * sr,
          }
          sv = rotateY(sv, rotAngle)
          sv = rotateX(sv, tiltAngle)

          // Only draw if in front
          if (sv.z < fov * 0.3) {
            const sp = project(sv, cx, cy, fov)

            ctx.save()
            ctx.globalAlpha = sparkleAlpha * 0.9

            // Star sparkle
            const ss = s.size * sparkleAlpha
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(sp.x - ss, sp.y); ctx.lineTo(sp.x + ss, sp.y)
            ctx.moveTo(sp.x, sp.y - ss); ctx.lineTo(sp.x, sp.y + ss)
            ctx.moveTo(sp.x - ss * 0.5, sp.y - ss * 0.5); ctx.lineTo(sp.x + ss * 0.5, sp.y + ss * 0.5)
            ctx.moveTo(sp.x + ss * 0.5, sp.y - ss * 0.5); ctx.lineTo(sp.x - ss * 0.5, sp.y + ss * 0.5)
            ctx.stroke()

            // Glow
            const glow = ctx.createRadialGradient(sp.x, sp.y, 0, sp.x, sp.y, ss * 2)
            glow.addColorStop(0, `rgba(255, 255, 255, ${sparkleAlpha * 0.5})`)
            glow.addColorStop(1, 'rgba(255, 255, 255, 0)')
            ctx.fillStyle = glow
            ctx.beginPath()
            ctx.arc(sp.x, sp.y, ss * 2, 0, Math.PI * 2)
            ctx.fill()

            ctx.restore()
          }
        }

        if (s.phase > Math.PI * 4) {
          s.phase = 0
          s.angle = Math.random() * Math.PI * 2
          s.yPos = -0.3 + Math.random() * 0.9
        }
      }

      // Ambient glow around diamond
      const glowPulse = 0.06 + Math.sin(elapsed * 1.5) * 0.03
      const ambientGlow = ctx.createRadialGradient(cx, cy, size * 0.05, cx, cy, size * 0.45)
      ambientGlow.addColorStop(0, `rgba(45, 212, 191, ${glowPulse})`)
      ambientGlow.addColorStop(1, 'rgba(45, 212, 191, 0)')
      ctx.fillStyle = ambientGlow
      ctx.fillRect(0, 0, size, size)

      frameRef.current = requestAnimationFrame(render)
    }

    frameRef.current = requestAnimationFrame(render)
    return () => cancelAnimationFrame(frameRef.current)
  }, [size, speed])

  // Handle clicks on facets
  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    const x = (e.clientX - rect.left) * dpr
    const y = (e.clientY - rect.top) * dpr

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Check click map in reverse order (top faces first)
    for (let i = clickMapRef.current.length - 1; i >= 0; i--) {
      if (ctx.isPointInPath(clickMapRef.current[i].path, x, y)) {
        const link = clickMapRef.current[i].link
        if (link.startsWith('#')) {
          window.location.hash = link
        } else {
          window.location.href = link
        }
        break
      }
    }
  }, [])

  // Cursor change on hover
  const handleMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    const x = (e.clientX - rect.left) * dpr
    const y = (e.clientY - rect.top) * dpr

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let found = false
    for (let i = clickMapRef.current.length - 1; i >= 0; i--) {
      if (ctx.isPointInPath(clickMapRef.current[i].path, x, y)) {
        found = true
        break
      }
    }
    canvas.style.cursor = found ? 'pointer' : 'default'
  }, [])

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size }}
        className="absolute inset-0"
        onClick={handleClick}
        onMouseMove={handleMove}
      />
    </div>
  )
}
