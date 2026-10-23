function FeedbackState({ type, message }) {
  const isError = type === 'error'
  return <section className={`feedback-state ${isError ? 'feedback-error' : ''} surface`}><span>{isError ? '!' : '⌕'}</span><h2>{isError ? 'Algo não saiu como esperado' : 'Encontre seu próximo perfil'}</h2><p>{message}</p></section>
}

export default FeedbackState
