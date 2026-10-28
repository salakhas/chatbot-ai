📚 Study Buddy

This is an AI study partner that explains things, turns topics into flashcards, quizzes the user, and summarizes notes. It is built with Next.js and Google's Gemini API, and has a responsive layout that works on desktop and mobile.

✨ Features

Study Buddy has four modes : 

💬 Chat: ask anything and get simple explanations with examples.
🃏 Flashcards: paste a topic and get flip-able flashcards.
📝 Quiz: name a subject and get quizzed, with your answers graded.
📄 Summarize: paste notes or an article and get a clean summary.


🛠️ Tech Stack
Next.js and React
Tailwind CSS
Google Gemini API (gemini-3.6-flash)
react-markdown for rendering replies
Motion for mobile dock animation
react-icons for navigation icons


🧠 How It Works
The user sends a message from the active mode (Chat, Flashcards, Quiz, or Summarize).
The frontend sends the message, the mode, and that mode's chat history to POST /api/chat.
The API route builds a mode-specific prompt, calls Gemini, and returns the reply.
The reply is rendered as Markdown. In Flashcards mode, replies formatted as Q: / A: pairs are turned into interactive flashcards.
If anything fails, the route returns a readable error, and the UI shows it with a retry button. 

The API key stays on the server and is never sent to the browser.