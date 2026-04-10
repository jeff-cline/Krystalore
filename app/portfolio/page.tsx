'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageItem {
  id: string
  title: string
  description: string | null
  fileUrl: string
  originalName: string
  createdAt: string
}

export default function PortfolioPage() {
  const [images, setImages] = useState<ImageItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/videos?fileType=IMAGE&limit=1000')
      const data = await response.json()
      setImages(data.videos || [])
    } catch (error) {
      console.error('Error fetching images:', error)
    } finally {
      setLoading(false)
    }
  }

  const openLightbox = (image: ImageItem, index: number) => {
    setSelectedImage(image)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % images.length
    setLightboxIndex(nextIndex)
    setSelectedImage(images[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1
    setLightboxIndex(prevIndex)
    setSelectedImage(images[prevIndex])
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, lightboxIndex])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Executive Krystalore Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A visual journey through our fitness programs, transformations, and community moments. 
              Each image tells a story of strength, determination, and the Beyond Limits mindset.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image src="/images/go9/hero.jpg" alt="Krystalore Crews professional portfolio and achievements" fill className="object-cover" sizes="100vw" />
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-24">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-6">
                <ExternalLink className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Images Yet</h3>
              <p className="text-gray-600">Check back soon as we continue to build our visual portfolio.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative w-full h-full">
                  <img
                    src={image.fileUrl}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-medium text-sm truncate">{image.title}</h3>
                    <p className="text-gray-200 text-xs mt-1">
                      {new Date(image.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Load more hint */}
        {images.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-500">
              Showing {images.length} image{images.length !== 1 ? 's' : ''} from our portfolio
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.fileUrl}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-2">{selectedImage.title}</h3>
                  {selectedImage.description && (
                    <p className="text-gray-200 text-sm mb-3">{selectedImage.description}</p>
                  )}
                  <div className="flex items-center justify-between">
                    <p className="text-gray-300 text-xs">
                      {new Date(selectedImage.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-300 text-xs">
                        {lightboxIndex + 1} of {images.length}
                      </span>
                      <a
                        href={selectedImage.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 bg-white/20 hover:bg-white/30 rounded transition-colors"
                      >
                        <Download className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}