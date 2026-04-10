'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    height: '',
    weight: '',
    goal: '',
    commitmentLevel: '',
    nutrition: '',
    trainingRegimen: '',
    facilities: '',
    exerciseLimitations: '',
    lifestyle: '',
    whatsYourWhy: '',
    gdprConsent: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - could integrate with GoHighLevel or other CRM
    console.log('Form submitted:', formData)
    alert('Thank you for your application! We will review it and get back to you within 24 hours.')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Apply for Coaching
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward transformation. Complete this application to help us understand your goals and determine the best coaching approach for you.
          </p>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-8 space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Physical Information */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
                Height
              </label>
              <input
                type="text"
                id="height"
                name="height"
                placeholder="e.g., 5'6&quot;"
                value={formData.height}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
                Weight
              </label>
              <input
                type="text"
                id="weight"
                name="weight"
                placeholder="e.g., 150 lbs"
                value={formData.weight}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Goals and Commitment */}
          <div>
            <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-2">
              What is your primary goal? *
            </label>
            <textarea
              id="goal"
              name="goal"
              required
              rows={3}
              value={formData.goal}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Describe what you want to achieve through coaching..."
            />
          </div>

          <div>
            <label htmlFor="commitmentLevel" className="block text-sm font-medium text-gray-700 mb-2">
              Commitment Level (1-5 scale) *
            </label>
            <select
              id="commitmentLevel"
              name="commitmentLevel"
              required
              value={formData.commitmentLevel}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">Select your commitment level</option>
              <option value="1">1 - Just exploring options</option>
              <option value="2">2 - Somewhat interested</option>
              <option value="3">3 - Moderately committed</option>
              <option value="4">4 - Very committed</option>
              <option value="5">5 - Fully committed to transformation</option>
            </select>
          </div>

          {/* Lifestyle and Health */}
          <div>
            <label htmlFor="nutrition" className="block text-sm font-medium text-gray-700 mb-2">
              Current Nutrition Habits
            </label>
            <textarea
              id="nutrition"
              name="nutrition"
              rows={3}
              value={formData.nutrition}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Describe your current eating patterns, dietary restrictions, etc."
            />
          </div>

          <div>
            <label htmlFor="trainingRegimen" className="block text-sm font-medium text-gray-700 mb-2">
              Current Training Regimen
            </label>
            <textarea
              id="trainingRegimen"
              name="trainingRegimen"
              rows={3}
              value={formData.trainingRegimen}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Describe your current exercise routine, frequency, types of activities..."
            />
          </div>

          <div>
            <label htmlFor="facilities" className="block text-sm font-medium text-gray-700 mb-2">
              Available Facilities
            </label>
            <textarea
              id="facilities"
              name="facilities"
              rows={2}
              value={formData.facilities}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="What equipment or facilities do you have access to?"
            />
          </div>

          <div>
            <label htmlFor="exerciseLimitations" className="block text-sm font-medium text-gray-700 mb-2">
              Exercise Limitations or Health Concerns
            </label>
            <textarea
              id="exerciseLimitations"
              name="exerciseLimitations"
              rows={3}
              value={formData.exerciseLimitations}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Any injuries, medical conditions, or physical limitations we should know about?"
            />
          </div>

          <div>
            <label htmlFor="lifestyle" className="block text-sm font-medium text-gray-700 mb-2">
              Lifestyle Factors
            </label>
            <textarea
              id="lifestyle"
              name="lifestyle"
              rows={3}
              value={formData.lifestyle}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Work schedule, family commitments, stress levels, sleep patterns, etc."
            />
          </div>

          <div>
            <label htmlFor="whatsYourWhy" className="block text-sm font-medium text-gray-700 mb-2">
              What's Your Why? *
            </label>
            <textarea
              id="whatsYourWhy"
              name="whatsYourWhy"
              required
              rows={4}
              value={formData.whatsYourWhy}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="What is driving you to make this change? What will achieving your goals mean to you and those you care about?"
            />
          </div>

          {/* GDPR Consent */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="gdprConsent"
                name="gdprConsent"
                type="checkbox"
                required
                checked={formData.gdprConsent}
                onChange={handleInputChange}
                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="gdprConsent" className="text-gray-700">
                I consent to the processing of my personal data for the purpose of this coaching application and understand that I can withdraw this consent at any time. *
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>

      <Footer />
      
      {/* JC Easter Egg */}
      <div className="text-center py-2">
        <a 
          href="https://jeff-cline.com" 
          className="text-[6px] opacity-[0.08] hover:opacity-20 transition-opacity"
        >
          JC
        </a>
      </div>
    </div>
  )
}