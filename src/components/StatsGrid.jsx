import { formatNumber } from '../utils/formatters'

function StatsGrid({ user, repositories }) {
  const stars = repositories.reduce((total, repository) => total + repository.stargazers_count, 0)
  const stats = [
    { label: 'Repositórios públicos', value: user.public_repos, icon: '◫' },
    { label: 'Seguidores', value: user.followers, icon: '◎' },
    { label: 'Seguindo', value: user.following, icon: '◌' },
    { label: 'Stars carregadas', value: stars, icon: '✦' },
  ]

  return <section className="stats-grid">{stats.map((stat) => <article className="stat-card surface" key={stat.label}><span className="stat-icon">{stat.icon}</span><strong>{formatNumber(stat.value)}</strong><span>{stat.label}</span></article>)}</section>
}

export default StatsGrid
