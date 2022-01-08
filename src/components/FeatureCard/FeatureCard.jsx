const FeatureCard = ({title, content, children}) => {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default FeatureCard