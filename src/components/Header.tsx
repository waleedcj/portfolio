import { motion } from 'framer-motion'
import ThemeToggle from './ToggleTheme';


export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className=" flex justify-end">
        <ThemeToggle />
      </div>
    </motion.header>
  )
}
