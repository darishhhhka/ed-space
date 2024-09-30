// import AdvantagesCard from "./components/AdvantagesCard/AdvantagesCard"
// import pic from "./assets/image/ok-circle.svg"

import OpportunitiesSection from "./components/OpportunitiesSection"
import Banner from "./components/Banner/index"
import banner from "./assets/data/banner"
import { useState } from "react"
import Modal from "./components/Modal"


const App = () => {

    const [openModal, setOpenModal] = useState(false)
    // const [banner, swipeBanner] = useState(0)

    // const swipeBannerLeft= () =>{
    // }

    
    return <>
        <Banner setOpenModal={setOpenModal}/>
        <OpportunitiesSection setOpenModal={setOpenModal}/>
        <Modal openModal={openModal} setOpenModal={setOpenModal}/>
    </>
}

export default App