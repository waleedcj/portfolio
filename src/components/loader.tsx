

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const greetings = [
  'Hello', 'Bonjour', 'Hola', 'Ciao', 'Olá', 'Namaste', 'Konnichiwa', 'Guten Tag', 'Salam', 'Zdravstvuyte'
]

export function Loader() {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 300)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <motion.div
            key={currentGreeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-4xl font-bold text-primary"
          >
            {greetings[currentGreeting]}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

