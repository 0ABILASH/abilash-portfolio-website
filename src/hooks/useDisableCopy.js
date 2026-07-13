import { useEffect } from 'react'

export function useDisableCopy(enabled = true) {
  useEffect(() => {
    if (!enabled) return

    const isFormField = el => el && ['INPUT', 'TEXTAREA'].includes(el.tagName)

    const block = e => {
      if (isFormField(e.target)) return
      e.preventDefault()
    }

    document.addEventListener('copy', block)
    document.addEventListener('cut', block)
    document.addEventListener('contextmenu', block)
    document.addEventListener('selectstart', block)

    return () => {
      document.removeEventListener('copy', block)
      document.removeEventListener('cut', block)
      document.removeEventListener('contextmenu', block)
      document.removeEventListener('selectstart', block)
    }
  }, [enabled])
}