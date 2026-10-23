function LoadingSkeleton() {
  return <div className="skeleton-layout" aria-label="Carregando dados" aria-busy="true"><div className="skeleton skeleton-profile" /><div className="skeleton-stats">{Array.from({ length: 4 }, (_, index) => <div className="skeleton" key={index} />)}</div><div className="skeleton-repositories">{Array.from({ length: 6 }, (_, index) => <div className="skeleton" key={index} />)}</div></div>
}

export default LoadingSkeleton
