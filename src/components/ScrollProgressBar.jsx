import { useEffect, useState } from 'react'

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = height > 0 ? (scrollTop / height) * 100 : 0
      setProgress(scrollProgress)
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-gold" style={{ width: `${progress}%` }} />
}

export default ScrollProgressBar
