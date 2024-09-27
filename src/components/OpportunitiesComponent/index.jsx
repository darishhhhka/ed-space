import data from "../../assets/data/text.json"
import "./style.css"

export default ({img, title, content}) => {
    return data.map((item, index) => (
        <article className="opportunities-card" key={index}>
            <img className="opportunities-card__img" src={item.img} alt="" />
            <h3 className="opportunities-card__title">{item.title}</h3>
            <p className="opportunities-card__description">{item.description}</p>
        </article>
        )
    )
}