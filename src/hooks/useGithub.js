import { useCallback, useRef, useState } from 'react'
import { getGithubUser } from '../services/githubApi'

export function useGithub() {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const controllerRef = useRef(null)

  const searchUser = useCallback(async (username) => {
    const sanitizedUsername = username.trim()

    if (!sanitizedUsername) {
      setData(null)
      setError('Digite um nome de usuário para começar a busca.')
      return
    }

    controllerRef.current?.abort()
    const controller = new AbortController()
    controllerRef.current = controller

    setIsLoading(true)
    setError('')

    try {
      const result = await getGithubUser(sanitizedUsername, controller.signal)
      if (!controller.signal.aborted) setData(result)
    } catch (requestError) {
      if (requestError.name !== 'AbortError') {
        setData(null)
        setError(requestError.message || 'Ocorreu um erro inesperado.')
      }
    } finally {
      if (!controller.signal.aborted) setIsLoading(false)
    }
  }, [])

  return { data, error, isLoading, searchUser }
}
