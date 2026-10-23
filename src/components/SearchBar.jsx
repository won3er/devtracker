import { useState } from 'react'

function SearchBar({ onSearch, isLoading }) {
  const [username, setUsername] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(username)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="github-username">Usuário do GitHub</label>
      <span className="search-icon" aria-hidden="true">⌕</span>
      <input id="github-username" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Digite um usuário do GitHub..." autoComplete="off" />
      <button type="submit" disabled={isLoading}>{isLoading ? 'Buscando...' : 'Pesquisar'}</button>
    </form>
  )
}

export default SearchBar
