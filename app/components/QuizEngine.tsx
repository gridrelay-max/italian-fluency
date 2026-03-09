'use client'

import { useState } from 'react'

const QUIZ_QUESTIONS = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Penso che tu ___ italiano.',
    options: [
      { text: 'parli', correct: true },
      { text: 'parla', correct: false },
      { text: 'parlare', correct: false },
      { text: 'parliamo', correct: false },
    ],
    explanation: 'After "Penso che" (I think that), we use subjunctive: tu parli',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which is NOT a subjunctive trigger?',
    options: [
      { text: 'Spero che', correct: false },
      { text: 'So che', correct: true },
      { text: 'Voglio che', correct: false },
      { text: 'Dubito che', correct: false },
    ],
    explanation: '"So che" (I know that) is indicative because it expresses certainty.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Coniuga "essere" in seconda persona singolare del congiuntivo:',
    options: [
      { text: 'sei', correct: false },
      { text: 'sia', correct: true },
      { text: 'sarai', correct: false },
      { text: 'eri', correct: false },
    ],
    explanation: 'Tu sia is the correct subjunctive form of essere.',
  },
  {
    id: 4,
    type: 'fill-blank',
    question: 'Spero che loro ___ (venire) domani.',
    answer: 'vengano',
    explanation: 'The subjunctive form of venire for loro (they) is "vengano".',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Complete: "È importante che tu ___..."',
    options: [
      { text: 'studii', correct: true },
      { text: 'studi', correct: false },
      { text: 'studiare', correct: false },
      { text: 'studieresti', correct: false },
    ],
    explanation: 'After "è importante che", use subjunctive: tu studi (present subjunctive).',
  },
]

export default function QuizEngine({ setProgress }: any) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<any[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const question = QUIZ_QUESTIONS[currentQuestion]
  const isAnswered = answers[currentQuestion] !== undefined

  const handleMultipleChoice = (optionIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = optionIndex
    setAnswers(newAnswers)
  }

  const handleFillBlank = (value: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value.trim().toLowerCase()
    setAnswers(newAnswers)
  }

  const handleSubmit = () => {
    const newAnswers = [...answers]
    let correctCount = 0

    QUIZ_QUESTIONS.forEach((q: any, idx) => {
      if (q.type === 'multiple-choice') {
        const selectedIndex = newAnswers[idx]
        if (selectedIndex !== undefined && q.options && q.options[selectedIndex]?.correct) {
          correctCount++
        }
      } else if (q.type === 'fill-blank') {
        const userAnswer = newAnswers[idx]
        if (userAnswer && userAnswer === q.answer) {
          correctCount++
        }
      }
    })

    const finalScore = Math.round((correctCount / QUIZ_QUESTIONS.length) * 100)
    setScore(finalScore)
    setSubmitted(true)

    // Update progress
    if (finalScore >= 70) {
      setProgress((p: any) => ({
        ...p,
        totalPoints: p.totalPoints + Math.round(finalScore / 10),
      }))
    }
  }

  const handleRetake = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setSubmitted(false)
    setScore(0)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="card text-center">
          <div className="text-6xl mb-4">
            {score >= 80 ? '🎉' : score >= 70 ? '✓' : '💪'}
          </div>
          <h1 className="text-4xl font-bold mb-2">Quiz Complete!</h1>
          <div className="text-5xl font-bold gradient-text mb-4">{score}%</div>
          <p className="text-slate-400 mb-2">
            {score >= 80
              ? 'Excellent! You have mastered this topic!'
              : score >= 70
              ? 'Great job! Keep practicing.'
              : 'Review the material and try again!'}
          </p>
          <div className="text-slate-500 text-sm mb-6">
            You answered correctly on {Math.round((score / 100) * QUIZ_QUESTIONS.length)} out of {QUIZ_QUESTIONS.length} questions.
          </div>
          <button onClick={handleRetake} className="btn-primary">
            Retake Quiz
          </button>
        </div>

        <div className="space-y-3">
          {QUIZ_QUESTIONS.map((q: any, idx: number) => {
            let isCorrect = false
            if (q.type === 'multiple-choice') {
              isCorrect = answers[idx] !== undefined && q.options && q.options[answers[idx]]?.correct
            } else {
              isCorrect = answers[idx] === q.answer
            }

            return (
              <div
                key={q.id}
                className={`card ${isCorrect ? 'border-green-600' : 'border-red-600'}`}
              >
                <div className="flex items-start gap-3">
                  <span className={`text-2xl flex-shrink-0 ${isCorrect ? '✓' : '✗'}`}>
                    {isCorrect ? '✓' : '✗'}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold mb-2">{q.question}</p>
                    <p className="text-slate-400 text-sm">{q.explanation}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
          </h2>
          <div className="text-slate-400">
            {Math.round(((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100)}%
          </div>
        </div>

        <div className="w-full bg-slate-700 rounded-full h-2 mb-6">
          <div
            className="h-full bg-blue-600 rounded-full transition-all"
            style={{
              width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%`,
            }}
          ></div>
        </div>

        <h3 className="text-xl font-semibold mb-6">{question.question}</h3>

        {question.type === 'multiple-choice' && (
          <div className="space-y-3 mb-6">
            {(question as any).options?.map((option: any, idx: number) => (
              <button
                key={idx}
                onClick={() => handleMultipleChoice(idx)}
                className={`w-full p-4 text-left rounded-lg transition-all ${
                  answers[currentQuestion] === idx
                    ? 'bg-blue-600 border-blue-500'
                    : 'bg-slate-700 border-slate-600 hover:bg-slate-600'
                } border`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === idx
                        ? 'border-blue-300 bg-blue-600'
                        : 'border-slate-400'
                    }`}
                  >
                    {answers[currentQuestion] === idx && (
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    )}
                  </div>
                  <span>{option.text}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {question.type === 'fill-blank' && (
          <input
            type="text"
            placeholder="Type your answer here..."
            value={answers[currentQuestion] || ''}
            onChange={(e) => handleFillBlank(e.target.value)}
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 mb-6 focus:outline-none focus:border-blue-500"
          />
        )}

        <div className="flex gap-4">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="btn-secondary disabled:opacity-50"
          >
            ← Previous
          </button>

          {currentQuestion < QUIZ_QUESTIONS.length - 1 ? (
            <button
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
              disabled={!isAnswered}
              className="flex-1 btn-primary disabled:opacity-50"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isAnswered}
              className="flex-1 btn-primary disabled:opacity-50"
            >
              Submit Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
