// import AdvantagesCard from "./components/AdvantagesCard/AdvantagesCard"
// import pic from "./assets/image/ok-circle.svg"

import textContent from "./assets/data/text.json"
import Layout from "./components/Layout"
import OpportunitiesComponent from "./components/OpportunitiesComponent/index"
import Button from "./components/Button"
import Modal from "./components/Modal"
import { useState } from "react"


const App = () => {

    const [openModal, setOpenModal] = useState(false)

    return <><Layout
        className="opportunities"
        name="Возможности Ed Space"
        description="Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка."
        >
            <div className="wrapper-card">
                <OpportunitiesComponent/>   
            </div>
        <Button setOpenModal={setOpenModal}>ПОПРОБОВАТЬ БЕСПЛАТНО</Button>
    </Layout>
    <Modal openModal={openModal} setOpenModal={setOpenModal}/>
    </>
}

export default App