import { formatDate, formatNumber } from '../utils/formatters'

function RepositoryList({ repositories }) {
  return (
    <section className="repositories-section">
      <div className="section-heading"><div><p className="eyebrow">Projetos</p><h2>Repositórios recentes</h2></div><span>Até 10 resultados</span></div>
      {repositories.length ? <div className="repository-grid">{repositories.map((repository) => (
        <article className="repository-card surface" key={repository.id}>
          <div className="repository-top"><span className="repository-icon">⌘</span><a href={repository.html_url} target="_blank" rel="noreferrer" aria-label={`Abrir ${repository.name} no GitHub`}>↗</a></div>
          <h3><a href={repository.html_url} target="_blank" rel="noreferrer">{repository.name}</a></h3>
          <p>{repository.description || 'Sem descrição disponível.'}</p>
          <footer>{repository.language && <span className="language"><i />{repository.language}</span>}<span>★ {formatNumber(repository.stargazers_count)}</span><span>⑂ {formatNumber(repository.forks_count)}</span><span className="updated">Atualizado {formatDate(repository.updated_at)}</span></footer>
        </article>
      ))}</div> : <div className="empty-repositories surface"><span>⌘</span><h3>Este usuário ainda não possui repositórios públicos.</h3><p>Quando houver projetos públicos, eles aparecerão aqui.</p></div>}
    </section>
  )
}

export default RepositoryList
