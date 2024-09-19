import AdvantagesCard from "./components/AdvantagesCard/AdvantagesCard"
import pic from "./assets/image/ok-circle.svg"

import textContent from "./assets/data/text.json"

const App = () => {
    return <div className="wrapper-card">
        {textContent.map(element => element.cardType === "AdvantagesCard" &&
         element.cardText.map((item, index) => <AdvantagesCard
         key={index}
         text={item}
         img={pic}
         />)
        )}
        
    </div>
}

export default App