import "./style.css"

export default ({title, description, img}) => {
    return <div className="banner">
        <h2 className="banner__title">{title}</h2>
        <p className="banner__description">{description}</p>
    </div>
}