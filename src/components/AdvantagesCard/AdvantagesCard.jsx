import "./style.css"

const AdvantagesCard = ({text, img}) =>{
    return <div className="card">
        <p className="card__text">{text}</p>
        <img className="card__img" src={img} alt="" />
    </div>
}

export default AdvantagesCard

