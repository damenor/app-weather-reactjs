import { useState, useEffect } from 'react'

const fetchPromise = (url: RequestInfo, options?: RequestInit) => fetch(url, { ...options })

const fetchJson = (url: RequestInfo, options?: RequestInit) => fetchPromise(url, options).then(res => res.json())
const fetchText = (url: RequestInfo, options?: RequestInit) => fetchPromise(url, options).then(res => res.text())
const fetchBlob = (url: RequestInfo, options?: RequestInit) => fetchPromise(url, options).then(res => res.blob())

export const useHttpClientJson = (url: RequestInfo, options?: RequestInit) => {

  const [data, setData] = useState<any>(null)
  const [status, setStatus] = useState<number | null>(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url, { ...options })
      .then(res => {
        setStatus(res.status)
        if(res.status !== 200) return null
        return res.json()
      })
      .then(res => setData(res))
      .catch(e => setError(e))
  }, [url, options])
  return [data, status, error];

}