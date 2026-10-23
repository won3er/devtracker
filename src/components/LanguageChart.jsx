import { getLanguageDistribution } from '../utils/formatters'

const chartColors = ['#8b5cf6', '#38bdf8', '#34d399', '#f59e0b', '#f472b6']

function LanguageChart({ repositories }) {
  const languages = getLanguageDistribution(repositories)
  const total = languages.reduce((sum, language) => sum + language.count, 0)

  if (!languages.length) return null

  return (
    <section className="language-card surface">
      <div className="section-heading"><div><p className="eyebrow">Tecnologias</p><h2>Linguagens principais</h2></div><span>Nos repositórios carregados</span></div>
      <div className="language-bar">{languages.map((language, index) => <span key={language.name} style={{ width: `${(language.count / total) * 100}%`, backgroundColor: chartColors[index] }} />)}</div>
      <div className="language-list">{languages.map((language, index) => <div key={language.name}><i style={{ backgroundColor: chartColors[index] }} /><span>{language.name}</span><strong>{language.count}</strong></div>)}</div>
    </section>
  )
}

export default LanguageChart
