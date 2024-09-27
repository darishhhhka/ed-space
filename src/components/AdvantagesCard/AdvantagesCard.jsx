import "./style.css"

// {
    //     "cardType" : "AdvantagesCard",
    //     "cardText" : [
    //         "Неограниченное колличество учеников",
    //         "Трансляции",
    //         "Точнуя статистика",
    //         "Производительную видеосвязь с учениками",
    //         "Продукт с ежемесячной подпиской",
    //         "Лучшая конфиденциальность и защита",
    //         "Готовый шаблон для организации обучения",
    //         "Сообщества",
    //         "Любое количество уроков и учебных программ"
    //     ]   
    // },

const AdvantagesCard = ({text, img}) =>{
    return <div className="card">
        <p className="card__text">{text}</p>
        <img className="card__img" src={img} alt="" />
    </div>
}

export default AdvantagesCard

