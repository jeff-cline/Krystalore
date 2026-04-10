'use client'

import { useState, useEffect } from 'react'
import { Users, Mail, Phone, Calendar, Filter, ChevronDown, ChevronUp, X, BarChart3, FileText, ArrowLeft } from 'lucide-react'

interface QuizLead {
  id: string
  name: string
  email: string
  phone: string
  quizTitle: string
  answers: any
  results: any
  status: 'new' | 'called' | 'not_interested'
  createdAt: string
  updatedAt: string
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<QuizLead[]>([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState<'createdAt' | 'quizTitle'>('createdAt')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedLead, setSelectedLead] = useState<QuizLead | null>(null)

  const downloadPdf = async (lead: QuizLead) => {
    const results = lead.results || {}
    const answers = lead.answers || {}
    const categories = results.categories || {}
    
    // Build Q&A HTML
    const qaHtml = Object.entries(answers).map(([qId, answer]: [string, any]) => {
      const isEnriched = answer && typeof answer === 'object' && answer.question
      const questionText = isEnriched ? answer.question : `Question ${qId}`
      const answerValue = isEnriched ? answer.answer : answer
      const answerType = isEnriched ? answer.type : (typeof answer === 'number' ? 'scale' : 'multiple-choice')
      
      let answerDisplay = String(answerValue)
      if (answerType === 'scale' || typeof answerValue === 'number') {
        const labels = ['', 'Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
        answerDisplay = `${answerValue}/5 - ${labels[Number(answerValue)] || ''}`
      }
      
      return `
        <div style="margin-bottom: 16px; padding: 12px; background: #F4F1EC; border-radius: 8px; border-left: 4px solid #34c5c5;">
          <div style="font-weight: 600; color: #1B2838; margin-bottom: 4px;">Q${qId}. ${questionText}</div>
          <div style="color: #37a6a6; font-weight: 500;">${answerDisplay}</div>
        </div>
      `
    }).join('')
    
    const categoriesHtml = Object.entries(categories).map(([name, score]: [string, any]) => `
      <div style="margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="color: #1B2838; font-weight: 500;">${name}</span>
          <span style="color: #34c5c5; font-weight: 700;">${score}%</span>
        </div>
        <div style="background: #e5e7eb; border-radius: 99px; height: 8px; overflow: hidden;">
          <div style="background: #34c5c5; height: 100%; width: ${score}%; border-radius: 99px;"></div>
        </div>
      </div>
    `).join('')
    
    // Create branded PDF HTML
    const pdfHtml = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #1B2838;">
        <!-- Header with Krystalore branding -->
        <div style="background: linear-gradient(135deg, #1B2838 0%, #2d3f52 100%); padding: 40px; text-align: center; border-radius: 12px 12px 0 0;">
          <img src="https://krystalore.com/images/krystalore/63d23c1829f84e249e2d8003.png" alt="Krystalore" style="height: 60px; margin-bottom: 16px;" />
          <h1 style="color: #E8A849; font-size: 28px; margin: 0 0 8px 0;">${lead.quizTitle}</h1>
          <p style="color: #beeaea; font-size: 16px; margin: 0;">Assessment Results for ${lead.name}</p>
          <p style="color: #84d7d7; font-size: 13px; margin: 8px 0 0 0;">Generated ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        
        <!-- Overall Score -->
        <div style="background: #F4F1EC; padding: 30px; text-align: center;">
          <div style="font-size: 64px; font-weight: 800; color: #34c5c5;">${results.overallScore || 0}%</div>
          <div style="color: #1B2838; font-size: 16px; font-weight: 500;">Overall Score</div>
        </div>
        
        <!-- Category Scores -->
        <div style="background: white; padding: 30px;">
          <h2 style="color: #1B2838; font-size: 20px; margin-bottom: 20px; border-bottom: 2px solid #E8A849; padding-bottom: 8px;">
            Category Breakdown
          </h2>
          ${categoriesHtml}
        </div>
        
        <!-- Questions & Answers -->
        <div style="background: white; padding: 30px; border-top: 1px solid #e5e7eb;">
          <h2 style="color: #1B2838; font-size: 20px; margin-bottom: 20px; border-bottom: 2px solid #34c5c5; padding-bottom: 8px;">
            Your Responses
          </h2>
          ${qaHtml}
        </div>
        
        <!-- Footer with contact -->
        <div style="background: #1B2838; padding: 30px; text-align: center; border-radius: 0 0 12px 12px;">
          <p style="color: #E8A849; font-size: 16px; font-weight: 600; margin: 0 0 8px 0;">Ready to Transform These Insights Into Action?</p>
          <p style="color: #beeaea; font-size: 14px; margin: 0 0 16px 0;">Book a consultation to discuss your personalized results</p>
          <a href="https://krystalore.com/book" style="display: inline-block; background: #E8A849; color: #1B2838; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px;">Book Your Consultation</a>
          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="color: #84d7d7; font-size: 13px; margin: 0;">Krystalore Crews | Somatic Leadership Coach</p>
            <p style="color: #84d7d7; font-size: 13px; margin: 4px 0 0 0;">krystalore@thecrewscoach.com | (716) 390-6727</p>
            <p style="color: #84d7d7; font-size: 13px; margin: 4px 0 0 0;">krystalore.com</p>
          </div>
        </div>
      </div>
    `
    
    // Open in new window for printing/saving as PDF
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${lead.quizTitle} - ${lead.name}</title>
          <style>
            body { margin: 0; padding: 20px; background: #f5f5f5; }
            @media print {
              body { padding: 0; background: white; }
            }
          </style>
        </head>
        <body>
          ${pdfHtml}
          <script>setTimeout(() => window.print(), 500)<\/script>
        </body>
        </html>
      `)
      printWindow.document.close()
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/leads')
      if (response.ok) {
        const data = await response.json()
        setLeads(data)
      } else {
        console.error('Failed to fetch leads')
      }
    } catch (error) {
      console.error('Error fetching leads:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateLeadStatus = async (leadId: string, status: string) => {
    try {
      const response = await fetch(`/api/leads/${leadId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      })

      if (response.ok) {
        setLeads(prev => 
          prev.map(lead => 
            lead.id === leadId ? { ...lead, status: status as any } : lead
          )
        )
      }
    } catch (error) {
      console.error('Error updating lead status:', error)
    }
  }

  const filteredLeads = leads
    .filter(lead => statusFilter === 'all' || lead.status === statusFilter)
    .sort((a, b) => {
      if (sortBy === 'createdAt') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      } else {
        return a.quizTitle.localeCompare(b.quizTitle)
      }
    })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'called':
        return 'bg-green-100 text-green-800'
      case 'not_interested':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new':
        return '🆕 New'
      case 'called':
        return '✅ Called'
      case 'not_interested':
        return '❌ Not Interested'
      default:
        return status
    }
  }

  // Detail View
  if (selectedLead) {
    const answers = selectedLead.answers || {}
    const results = selectedLead.results || {}
    const categories = results.categories || {}

    return (
      <div className="p-6">
        <button
          onClick={() => setSelectedLead(null)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to All Leads
        </button>

        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{selectedLead.name}</h1>
              <div className="flex items-center gap-4 mt-2 text-gray-600">
                <span className="flex items-center"><Mail className="h-4 w-4 mr-1" />{selectedLead.email}</span>
                <span className="flex items-center"><Phone className="h-4 w-4 mr-1" />{selectedLead.phone}</span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" />{new Date(selectedLead.createdAt).toLocaleString()}</span>
              </div>
            </div>
            <div className="text-right">
              <select
                value={selectedLead.status}
                onChange={(e) => {
                  updateLeadStatus(selectedLead.id, e.target.value)
                  setSelectedLead({ ...selectedLead, status: e.target.value as any })
                }}
                className={`px-3 py-1 text-sm font-medium rounded-full border-0 ${getStatusColor(selectedLead.status)}`}
              >
                <option value="new">New</option>
                <option value="called">Called</option>
                <option value="not_interested">Not Interested</option>
              </select>
            </div>
          </div>
        </div>

        {/* Overall Score */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center mb-4">
            <BarChart3 className="h-5 w-5 text-[#34c5c5] mr-2" />
            {selectedLead.quizTitle} - Results
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#34c5c5]">{results.overallScore || 0}%</div>
              <div className="text-gray-500 mt-1">Overall Score</div>
            </div>
          </div>
          
          {Object.keys(categories).length > 0 && (
            <div className="space-y-3">
              {Object.entries(categories).map(([name, score]: [string, any]) => (
                <div key={name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{name}</span>
                    <span className="font-medium text-gray-900">{score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${score}%`, backgroundColor: '#34c5c5' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PDF Download */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Download PDF Report</h2>
              <p className="text-sm text-gray-500 mt-1">Download the same branded PDF the consumer receives</p>
            </div>
            <button
              onClick={() => downloadPdf(selectedLead)}
              className="px-6 py-2.5 rounded-lg font-medium text-white transition-colors"
              style={{ backgroundColor: '#E8A849' }}
            >
              <FileText className="h-4 w-4 inline mr-2" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Individual Answers */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center mb-4">
            <FileText className="h-5 w-5 text-[#E8A849] mr-2" />
            Quiz Answers
          </h2>
          <div className="space-y-4">
            {Object.entries(answers).map(([questionId, answer]: [string, any]) => {
              // Support both enriched format (with question text) and legacy format
              const isEnriched = answer && typeof answer === 'object' && answer.question
              const questionText = isEnriched ? answer.question : `Question ${questionId}`
              const answerValue = isEnriched ? answer.answer : answer
              const answerType = isEnriched ? answer.type : (typeof answer === 'number' ? 'scale' : 'multiple-choice')
              
              return (
                <div key={questionId} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="text-sm font-medium text-[#1B2838] mb-2">
                    <span className="text-[#34c5c5] font-bold mr-2">Q{questionId}.</span>
                    {questionText}
                  </div>
                  <div className="text-gray-900 bg-[#F4F1EC] rounded-lg px-4 py-3">
                    {answerType === 'scale' || typeof answerValue === 'number' ? (
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm text-gray-600">Rating:</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((v) => (
                            <span
                              key={v}
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                v === Number(answerValue)
                                  ? 'text-white'
                                  : 'bg-gray-200 text-gray-400'
                              }`}
                              style={v === Number(answerValue) ? { backgroundColor: '#34c5c5' } : {}}
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">
                          ({Number(answerValue) <= 2 ? 'Disagree' : Number(answerValue) === 3 ? 'Neutral' : 'Agree'})
                        </span>
                      </div>
                    ) : (
                      <span className="text-[#1B2838]">{String(answerValue)}</span>
                    )}
                  </div>
                </div>
              )
            })}
            {Object.keys(answers).length === 0 && (
              <p className="text-gray-500 text-center py-4">No answer data stored for this lead.</p>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <Users className="h-7 w-7 text-[#34c5c5] mr-2" />
              Quiz Leads
            </h1>
            <p className="text-gray-600 mt-1">
              Manage leads from quiz assessments ({leads.length} total)
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="called">Called</option>
                <option value="not_interested">Not Interested</option>
              </select>
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'createdAt' | 'quizTitle')}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm"
            >
              <option value="createdAt">Sort by Date</option>
              <option value="quizTitle">Sort by Quiz</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Leads', value: leads.length, color: 'text-blue-600' },
            { 
              label: 'New Leads', 
              value: leads.filter(l => l.status === 'new').length, 
              color: 'text-green-600' 
            },
            { 
              label: 'Called', 
              value: leads.filter(l => l.status === 'called').length, 
              color: 'text-yellow-600' 
            },
            { 
              label: 'Not Interested', 
              value: leads.filter(l => l.status === 'not_interested').length, 
              color: 'text-red-600' 
            },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {filteredLeads.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No leads found</h3>
            <p>No quiz leads match your current filters.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quiz
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedLead(lead)}>
                    <td className="px-4 py-4">
                      <div>
                        <div className="font-medium text-gray-900">{lead.name}</div>
                        <div className="text-sm text-gray-500 flex items-center mt-1">
                          <Mail className="h-3 w-3 mr-1" />
                          {lead.email}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center mt-1">
                          <Phone className="h-3 w-3 mr-1" />
                          {lead.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {lead.quizTitle}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-lg font-bold text-[#34c5c5]">
                        {lead.results?.overallScore || 0}%
                      </div>
                    </td>
                    <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                        className={`px-2 py-1 text-xs font-medium rounded-full border-0 ${getStatusColor(lead.status)}`}
                      >
                        <option value="new">🆕 New</option>
                        <option value="called">✅ Called</option>
                        <option value="not_interested">❌ Not Interested</option>
                      </select>
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm text-gray-900 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(lead.createdAt).toLocaleTimeString()}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}