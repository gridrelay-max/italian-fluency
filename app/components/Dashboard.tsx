'use client'

import { useEffect, useState } from 'react'

export default function Dashboard({ progress }: any) {
  const [dailyDate, setDailyDate] = useState('')

  useEffect(() => {
    const today = new Date().toLocaleDateString('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    setDailyDate(today)
  }, [])

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Benvenuto! 🇮🇹</h2>
        <p className="text-slate-400 text-lg">Your Italian Fluency Journey</p>
        <p className="text-slate-500 text-sm mt-2">{dailyDate}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Streak Card */}
        <div className="card">
          <div className="text-slate-400 text-sm font-semibold mb-2">Daily Streak</div>
          <div className="text-4xl font-bold gradient-text">{progress.streak}</div>
          <div className="text-slate-500 text-xs mt-2">Days in a row</div>
        </div>

        {/* Points Card */}
        <div className="card">
          <div className="text-slate-400 text-sm font-semibold mb-2">Total Points</div>
          <div className="text-4xl font-bold text-green-400">{progress.totalPoints}</div>
          <div className="text-slate-500 text-xs mt-2">Earned</div>
        </div>

        {/* Lessons Card */}
        <div className="card">
          <div className="text-slate-400 text-sm font-semibold mb-2">Lessons Done</div>
          <div className="text-4xl font-bold text-blue-400">{progress.lessonsCompleted}</div>
          <div className="text-slate-500 text-xs mt-2">Completed</div>
        </div>

        {/* Mastery Card */}
        <div className="card">
          <div className="text-slate-400 text-sm font-semibold mb-2">Mastery</div>
          <div className="text-4xl font-bold text-purple-400">{progress.masteryPercentage}%</div>
          <div className="text-slate-500 text-xs mt-2">Overall</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">5-Month Progress</h3>
        <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500"
            style={{ width: `${Math.min(progress.lessonsCompleted / 20 * 100, 100)}%` }}
          ></div>
        </div>
        <div className="text-slate-400 text-sm mt-2">
          {progress.lessonsCompleted} / 20 weeks completed
        </div>
      </div>

      {/* Quick Start */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">📚 Today's Lesson</h3>
          <p className="text-slate-400 mb-4">
            Lesson 1: Il Congiuntivo (The Subjunctive Mood)
          </p>
          <p className="text-slate-500 text-sm mb-4">Master the subjunctive mood with real examples and interactive quizzes.</p>
          <button className="btn-primary w-full">Start Learning →</button>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-4">🎯 Challenge Quiz</h3>
          <p className="text-slate-400 mb-4">
            Test your knowledge of subjunctive conjugations
          </p>
          <p className="text-slate-500 text-sm mb-4">5 questions • 5 minutes • Auto-graded</p>
          <button className="btn-primary w-full">Take Quiz →</button>
        </div>
      </div>

      {/* Milestones */}
      <div className="card">
        <h3 className="text-xl font-semibold mb-6">🎯 5-Month Milestones</h3>
        <div className="space-y-3">
          <MilestoneItem
            week="Week 4"
            title="Hold 10-min conversation"
            status={progress.lessonsCompleted >= 4}
          />
          <MilestoneItem
            week="Week 8"
            title="Understand 80% of news broadcast"
            status={progress.lessonsCompleted >= 8}
          />
          <MilestoneItem
            week="Week 12"
            title="Watch full movie without subtitles (85%+)"
            status={progress.lessonsCompleted >= 12}
          />
          <MilestoneItem
            week="Week 16"
            title="Write 500-word email confidently"
            status={progress.lessonsCompleted >= 16}
          />
          <MilestoneItem
            week="Week 20"
            title="1-hour native conversation, fluent"
            status={progress.lessonsCompleted >= 20}
          />
        </div>
      </div>
    </div>
  )
}

function MilestoneItem({ week, title, status }: any) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
        status ? 'bg-green-500' : 'bg-slate-600'
      }`}>
        {status && <span className="text-white text-sm">✓</span>}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-sm">{week}</div>
        <div className="text-slate-400 text-sm">{title}</div>
      </div>
    </div>
  )
}
