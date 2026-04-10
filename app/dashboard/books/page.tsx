import DashboardLayout from '@/components/layout/dashboard-layout'
import { Book, Star, Clock, Bookmark } from 'lucide-react'

export default function BooksPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Library</h1>
          <p className="text-gray-600 mt-2">
            Your digital library of books and resources
          </p>
        </div>

        {/* Coming Soon State */}
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <Book className="h-16 w-16 text-gray-400 mx-auto mb-6" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Library Coming Soon</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're working on bringing you a comprehensive digital library with books, 
            guides, and resources to support your executive development journey. 
            Stay tuned for an amazing reading experience!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <Book className="h-8 w-8 text-[#FF8900] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Digital Books</h4>
              <p className="text-sm text-gray-600">Access a growing collection of leadership and development books.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Bookmark className="h-8 w-8 text-[#34c5c5] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Reading Progress</h4>
              <p className="text-sm text-gray-600">Track your reading progress and maintain reading streaks.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Recommendations</h4>
              <p className="text-sm text-gray-600">Get personalized book recommendations based on your interests.</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <Clock className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Reading Time</h4>
              <p className="text-sm text-gray-600">Monitor your reading habits and set daily reading goals.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FF8900] to-[#34c5c5] rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">📚 What's Coming</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/90">
              <div>• Krystal Clear Life Planner</div>
              <div>• Road to Resilience</div>
              <div>• Men's Tactical Life Planner</div>
              <div>• Leave No Milspouse Behind</div>
              <div>• Mindset and Manifestation Guides</div>
              <div>• Interactive Reading Experience</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}