import { formatDate, formatNumber, normalizeUrl } from '../utils/formatters'

function ProfileCard({ user }) {
  const website = normalizeUrl(user.blog)

  return (
    <section className="profile-card surface">
      <img className="avatar" src={user.avatar_url} alt={`Avatar de ${user.login}`} />
      <div className="profile-content">
        <p className="eyebrow">Perfil GitHub</p>
        <h2>{user.name || user.login}</h2>
        <a className="username" href={user.html_url} target="_blank" rel="noreferrer">@{user.login}</a>
        {user.bio && <p className="bio">{user.bio}</p>}
        <div className="profile-meta">
          {user.location && <span>⌖ {user.location}</span>}
          {website && <a href={website} target="_blank" rel="noreferrer">↗ {user.blog}</a>}
          <span>◷ Desde {formatDate(user.created_at)}</span>
        </div>
      </div>
      <a className="github-button" href={user.html_url} target="_blank" rel="noreferrer">Ver no GitHub <span>↗</span></a>
      <div className="profile-numbers">
        <div><strong>{formatNumber(user.followers)}</strong><span>Seguidores</span></div>
        <div><strong>{formatNumber(user.following)}</strong><span>Seguindo</span></div>
        <div><strong>{formatNumber(user.public_repos)}</strong><span>Repositórios</span></div>
      </div>
    </section>
  )
}

export default ProfileCard
