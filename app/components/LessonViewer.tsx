'use client'

import { useState } from 'react'

const LESSON_1 = {
  id: 1,
  title: 'Il Congiuntivo (The Subjunctive Mood)',
  duration: '8 min read',
  sections: [
    {
      id: 1,
      title: 'What is the Subjunctive?',
      content: `The congiuntivo expresses:
• Wishes, desires, doubts
• Possibilities, hypotheticals
• Emotions, opinions
• Commands (formal)
• Uncertainty (things NOT 100% certain)

The Critical Difference:
Indicative (Facts): "Io so che sei intelligente" (I KNOW you're smart)
Subjunctive (Opinions): "Penso che tu sia intelligente" (I THINK you're smart)`,
    },
    {
      id: 2,
      title: 'Present Subjunctive Conjugation',
      content: `-ARE Verbs (PARLARE - to speak):
io parli / tu parli / lui/lei parli / noi parliamo / voi parliate / loro parlino

-ERE Verbs (CREDERE - to believe):
io creda / tu creda / lui/lei creda / noi crediamo / voi crediate / loro credano

-IRE Verbs (SENTIRE - to feel/hear):
io senta / tu senta / lui/lei senta / noi sentiamo / voi sentiate / loro sentano`,
    },
    {
      id: 3,
      title: 'The WEDDING Rule',
      content: `When to use Subjunctive:

W = Why (Purpose): "So that..." → affincheché
E = Emotion: Hope, fear, sad → spero, temo, mi dispiace
D = Doubt: "I doubt, not sure" → dubito, non sono sicuro
D = Desire: "I want, prefer" → voglio, preferisco, desidero
I = Impossibility: "It's impossible" → è impossibile
N = Negation: "I don't think/believe" → non penso, non credo
G = Guessing: "Maybe, perhaps" → forse, probabilmente`,
    },
    {
      id: 4,
      title: 'Common Trigger Phrases',
      content: `Penso che - I think that → Subjunctive
Credo che - I believe that → Subjunctive
Spero che - I hope that → Subjunctive
Voglio che - I want that → Subjunctive
Mi piace che - I like that → Subjunctive
È possibile che - It's possible → Subjunctive
Dubito che - I doubt → Subjunctive
È importante che - It's important → Subjunctive`,
    },
    {
      id: 5,
      title: 'Real Examples',
      content: `1. "Penso che il congiuntivo sia difficile."
   I think the subjunctive is difficult.

2. "Spero che tu vada in Italia quest'estate."
   I hope you go to Italy this summer.

3. "È importante che studiate ogni giorno."
   It's important that you study every day.

4. "Non credo che sia possibile."
   I don't believe it's possible.

5. "Voglio che tu parli italiano con me."
   I want you to speak Italian with me.`,
    },
  ],
}

export default function LessonViewer({ setProgress }: any) {
  const [activeSection, setActiveSection] = useState(0)
  const [completed, setCompleted] = useState(false)

  const handleComplete = () => {
    setCompleted(true)
    setProgress((p: any) => ({
      ...p,
      lessonsCompleted: p.lessonsCompleted + 1,
      totalPoints: p.totalPoints + 50,
      streak: p.streak + 1,
      masteryPercentage: Math.min(p.masteryPercentage + 5, 100),
    }))
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{LESSON_1.title}</h1>
            <p className="text-slate-400">{LESSON_1.duration}</p>
          </div>
          <button
            onClick={handlePrint}
            className="btn-secondary"
          >
            🖨️ Print PDF
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {LESSON_1.sections.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(idx)}
              className={`p-3 rounded-lg text-left transition-all ${
                activeSection === idx
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              <div className="text-sm font-semibold">Part {idx + 1}</div>
              <div className="text-xs">{section.title}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="card p-8">
        <h2 className="text-2xl font-bold mb-6">
          {LESSON_1.sections[activeSection].title}
        </h2>
        <div className="prose prose-invert max-w-none">
          <pre className="bg-slate-900 p-6 rounded-lg overflow-x-auto text-sm leading-relaxed whitespace-pre-wrap">
            {LESSON_1.sections[activeSection].content}
          </pre>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
          disabled={activeSection === 0}
          className="btn-secondary disabled:opacity-50"
        >
          ← Previous
        </button>
        <button
          onClick={() => setActiveSection(Math.min(LESSON_1.sections.length - 1, activeSection + 1))}
          disabled={activeSection === LESSON_1.sections.length - 1}
          className="btn-secondary disabled:opacity-50"
        >
          Next →
        </button>
        {activeSection === LESSON_1.sections.length - 1 && (
          <button
            onClick={handleComplete}
            disabled={completed}
            className={`flex-1 ${completed ? 'btn-secondary opacity-50' : 'btn-primary'}`}
          >
            {completed ? '✓ Lesson Completed' : 'Complete Lesson & Earn 50 pts'}
          </button>
        )}
      </div>

      {completed && (
        <div className="card bg-green-900/20 border-green-700">
          <div className="text-green-400 font-semibold">✓ Lesson Completed!</div>
          <p className="text-slate-300 mt-2">You earned 50 points and kept your daily streak alive!</p>
        </div>
      )}
    </div>
  )
}
