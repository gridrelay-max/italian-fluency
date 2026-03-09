# Italian Fluency Platform

A professional Italian language learning platform with interactive lessons, quizzes, and progress tracking.

## Features

✅ **Small Daily Lessons** (5-10 minutes)
- Focused, bite-sized content
- Build consistent learning habits
- Progress saved automatically

✅ **Interactive Quizzes**
- Auto-graded multiple choice
- Fill-in-the-blank exercises
- Real-time feedback

✅ **Progress Tracking**
- Daily streak counter
- Points system
- Mastery percentage
- Weekly milestones

✅ **Professional UI**
- Dark theme (easy on eyes)
- Responsive design (mobile/tablet/desktop)
- Print to PDF functionality

## Getting Started

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment to Vercel

1. Push to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Deploy to Vercel:
   - Visit [vercel.com](https://vercel.com)
   - Import the GitHub repository
   - Vercel will auto-detect the Next.js project
   - Deploy with one click

## Technology Stack

- **Frontend:** React 18 + Next.js 14
- **Styling:** Tailwind CSS
- **State Management:** React hooks + localStorage
- **Hosting:** Vercel

## Lesson Structure

### Lesson 1: Il Congiuntivo (The Subjunctive Mood)
- Part 1: What is the Subjunctive?
- Part 2: Present Subjunctive Conjugation
- Part 3: The WEDDING Rule
- Part 4: Common Trigger Phrases
- Part 5: Real Examples

### Quiz System
- 5 questions per quiz
- Mix of multiple choice and fill-in-the-blank
- Auto-graded with instant feedback
- Points awarded for 70%+ scores

## User Progress

Progress is automatically saved to localStorage:
- Daily streak
- Total points earned
- Lessons completed
- Overall mastery percentage

## Customization

To add new lessons:

1. Create a new lesson object in `app/components/LessonViewer.tsx`
2. Add quiz questions in `app/components/QuizEngine.tsx`
3. Update the navigation in `app/page.tsx`

## License

MIT

## Author

Built with ❤️ for Italian language learners
