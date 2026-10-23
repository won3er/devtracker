const API_URL = 'https://api.github.com'

class GithubApiError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'GithubApiError'
    this.status = status
  }
}

async function request(endpoint, signal) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    signal,
    headers: { Accept: 'application/vnd.github+json' },
  })

  if (!response.ok) {
    if (response.status === 404) throw new GithubApiError('Usuário não encontrado. Confira o nome e tente novamente.', 404)
    if (response.status === 403 && response.headers.get('x-ratelimit-remaining') === '0') {
      throw new GithubApiError('O limite de consultas da GitHub API foi atingido. Aguarde alguns minutos e tente novamente.', 403)
    }
    throw new GithubApiError('Não foi possível carregar os dados do GitHub. Tente novamente.', response.status)
  }

  return response.json()
}

export async function getGithubUser(username, signal) {
  const encodedUsername = encodeURIComponent(username.trim())
  const [user, repositories] = await Promise.all([
    request(`/users/${encodedUsername}`, signal),
    request(`/users/${encodedUsername}/repos?sort=updated&direction=desc&per_page=10`, signal),
  ])

  return { user, repositories }
}

export { GithubApiError }
