import DashboardLayout from '@/components/layout/dashboard-layout'
import { ArrowLeft, Star, Clock, Users, Target, CheckCircle, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function BombshellBootcampPage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Navigation */}
        <Link 
          href="/dashboard/courses" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Link>

        {/* Course Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] p-8 text-white">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Bombshell Bootcamp</h1>
                <p className="text-white/90 text-lg mb-4">
                  An intensive confidence and presence transformation program - Coming Soon!
                </p>
                <div className="flex items-center gap-6 text-white/90">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    8-week program
                  </div>
                  <div className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Personal transformation
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-400" />
                    Premium content
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            {/* Coming Soon Notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <div className="flex items-center">
                <BookOpen className="h-6 w-6 text-amber-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-amber-900">Course in Development</h3>
                  <p className="text-amber-800 text-sm mt-1">
                    We're crafting an incredible learning experience for this signature program. 
                    Check back soon for updates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Coming */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">What's Coming in Bombshell Bootcamp</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Target className="h-5 w-5 mr-2 text-[#FF8900]" />
                Course Modules
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Foundation of Confidence
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Body Language Mastery
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Voice and Presence
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Overcoming Self-Doubt
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Professional Presence
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Star className="h-5 w-5 mr-2 text-[#34c5c5]" />
                Advanced Modules
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Networking with Confidence
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Public Speaking Foundations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Handling Difficult Conversations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Leadership Presence
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Maintaining Your Bombshell Status
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Course Description */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Program</h2>
          <div className="prose text-gray-600">
            <p className="mb-4">
              The Bombshell Bootcamp will be an intensive 8-week program designed to transform your confidence, 
              presence, and personal brand. Whether you're stepping into a leadership role, changing careers, 
              or simply want to show up more powerfully in your life, this program will give you the tools and 
              mindset shifts you need.
            </p>
            <p className="mb-4">
              Through a combination of video lessons, practical exercises, and real-world applications, 
              you'll learn to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Build unshakeable confidence from the inside out</li>
              <li>Master your body language and vocal presence</li>
              <li>Overcome imposter syndrome and self-doubt</li>
              <li>Develop a magnetic personal brand</li>
              <li>Network effectively and build meaningful connections</li>
              <li>Handle difficult conversations with grace</li>
              <li>Speak publicly with confidence and authority</li>
            </ul>
            <p className="mb-6">
              By the end of this bootcamp, you'll have the confidence and presence of a true bombshell - 
              someone who commands attention, respect, and gets results.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">🚀 Be the First to Know</h3>
              <p className="text-white/90 text-sm mb-4">
                Get notified when the Bombshell Bootcamp launches, plus receive exclusive preview content 
                and early-bird pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                />
                <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Content */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-4">In the Meantime...</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link 
              href="/dashboard/fitness" 
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#FF8900] transition-colors"
            >
              <div className="flex items-center">
                <BookOpen className="h-6 w-6 text-[#FF8900] mr-3" />
                <div>
                  <h4 className="font-medium text-gray-900">Video Vault</h4>
                  <p className="text-sm text-gray-600">Explore existing confidence and leadership content</p>
                </div>
              </div>
            </Link>
            <Link 
              href="/dashboard/courses" 
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#34c5c5] transition-colors"
            >
              <div className="flex items-center">
                <Target className="h-6 w-6 text-[#34c5c5] mr-3" />
                <div>
                  <h4 className="font-medium text-gray-900">Other Courses</h4>
                  <p className="text-sm text-gray-600">Check out available course categories</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}