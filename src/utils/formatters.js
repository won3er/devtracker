export function formatNumber(value) {
  return new Intl.NumberFormat('pt-BR', { notation: 'compact', maximumFractionDigits: 1 }).format(value || 0)
}

export function formatDate(value) {
  if (!value) return 'Não informado'
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(value))
}

export function normalizeUrl(url) {
  if (!url) return ''
  return /^https?:\/\//i.test(url) ? url : `https://${url}`
}

export function getLanguageDistribution(repositories) {
  const totals = repositories.reduce((accumulator, repository) => {
    if (repository.language) accumulator[repository.language] = (accumulator[repository.language] || 0) + 1
    return accumulator
  }, {})

  return Object.entries(totals)
    .map(([name, count]) => ({ name, count }))
    .sort((first, second) => second.count - first.count)
    .slice(0, 5)
}
