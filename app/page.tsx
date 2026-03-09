'use client'

import { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import LessonViewer from './components/LessonViewer'
import QuizEngine from './components/QuizEngine'

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'lesson' | 'quiz'>('dashboard')
  const [progress, setProgress] = useState({
    streak: 0,
    totalPoints: 0,
    lessonsCompleted: 0,
    masteryPercentage: 0,
  })

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('italianProgress')
    if (saved) {
      setProgress(JSON.parse(saved))
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('italianProgress', JSON.stringify(progress))
  }, [progress])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🇮🇹</span>
            <h1 className="text-xl font-bold gradient-text">Italian Fluency</h1>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === 'dashboard'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentPage('lesson')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === 'lesson'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Learn
            </button>
            <button
              onClick={() => setCurrentPage('quiz')}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === 'quiz'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Quiz
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {currentPage === 'dashboard' && (
          <Dashboard progress={progress} setProgress={setProgress} />
        )}
        {currentPage === 'lesson' && (
          <LessonViewer setProgress={setProgress} />
        )}
        {currentPage === 'quiz' && (
          <QuizEngine setProgress={setProgress} />
        )}
      </main>
    </div>
  )
}
