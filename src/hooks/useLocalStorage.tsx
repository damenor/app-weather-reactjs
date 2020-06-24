import { useState } from 'react'

export const useLocalStorage = (key: string, initialValue: any) => {

  const [error, setError] = useState(null)

  const [storedValue, setStoredValue] = useState(() => {
    try{
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item): initialValue
    }catch (e) {
      setError(e)
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error(error)
      setError(e)
    }
  }

  return [storedValue, setValue, error];

}
