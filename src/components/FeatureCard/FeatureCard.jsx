const FeatureCard = ({title, content, children, color}) => {
  return (
    <div className="card" style={color ? {borderTopColor: color} : {}}>
      <div className="card-title">{title}</div>
      <div className="card-content">{content}</div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default FeatureCard