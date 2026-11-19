import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          iTriangle Data Analyzer
        </h1>

        <p className="mt-4 text-gray-500">
          Telematics Data Analysis Platform
        </p>

        <p className="mt-6 text-green-600 font-semibold">
          Frontend is running successfully
        </p>
      </div>
    </div>
  )
}

export default App