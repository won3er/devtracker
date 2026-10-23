import FeedbackState from '../components/FeedbackState'
import LanguageChart from '../components/LanguageChart'
import LoadingSkeleton from '../components/LoadingSkeleton'
import ProfileCard from '../components/ProfileCard'
import RepositoryList from '../components/RepositoryList'
import SearchBar from '../components/SearchBar'
import StatsGrid from '../components/StatsGrid'
import { useGithub } from '../hooks/useGithub'

function Home() {
  const { data, error, isLoading, searchUser } = useGithub()

  return (
    <main className="app-shell">
      <header className="topbar"><a className="brand" href="/"><span>&lt;/&gt;</span> DevTracker</a><a className="github-link" href="https://github.com" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></header>
      <section className="hero-section"><p className="eyebrow">GitHub profile explorer</p><h1>Seu radar para<br /><em>devs e projetos.</em></h1><p className="hero-copy">Pesquise perfis, explore repositórios e acompanhe o que a comunidade está construindo.</p><SearchBar onSearch={searchUser} isLoading={isLoading} /></section>
      <div className="content-area">
        {isLoading && <LoadingSkeleton />}
        {!isLoading && error && <FeedbackState type="error" message={error} />}
        {!isLoading && !error && !data && <FeedbackState message="Comece pesquisando um usuário do GitHub para ver seu perfil e seus projetos recentes." />}
        {!isLoading && data && <><ProfileCard user={data.user} /><StatsGrid user={data.user} repositories={data.repositories} /><LanguageChart repositories={data.repositories} /><RepositoryList repositories={data.repositories} /></>}
      </div>
      <footer className="app-footer">Desenvolvido para explorar a comunidade <a href="https://docs.github.com/en/rest" target="_blank" rel="noreferrer">GitHub REST API ↗</a></footer>
    </main>
  )
}

export default Home
