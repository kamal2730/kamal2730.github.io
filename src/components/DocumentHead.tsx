import { useEffect } from 'react'

export default function DocumentHead() {
  useEffect(() => {
    document.title = 'TellATale'
  }, [])

  return null
} 