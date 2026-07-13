import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 1000)
    const t2 = setTimeout(() => setRemoved(true), 2000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (removed) return null
  return (
    <div id="loader" className={hidden ? 'hide' : ''}>
      <span className="loader-text">Welcome<span className="loader-dots"></span></span>
    </div>
  )
}
