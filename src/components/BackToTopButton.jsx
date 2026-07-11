import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-[165px] right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1F365C] text-white shadow-lg transition ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <FiArrowUp size={22} />
    </button>
  )
}

export default BackToTopButton
