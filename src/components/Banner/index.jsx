import "./style.css"
import { useState } from "react"
import banner from "../../assets/data/banner.json"
import Button from "../Button/index.jsx"


export default ({setOpenModal}) => {

     const [title, changeTitle] = useState(banner[0].name)
     const [description, changeDescroption] = useState(banner[0].description)
     const [img, changeImg] = useState(banner[0].img)
     const [index, changeIndex] = useState(0)

    const swipeBannerLeft= () =>{

        if(index === 0){
            changeIndex(index + 2)
        }
        else{
            changeIndex(index - 1)

        }
        
        changeTitle(banner[index].name)
        changeDescroption(banner[index].description)
        changeImg(banner[index].img)
        
    }

    const swipebannerRight = () => {
        if(index === 2){
            changeIndex(index - 2)
        }
        else{
            changeIndex(index + 1)
        }
        changeTitle(banner[index].name)
        changeDescroption(banner[index].description)
        changeImg(banner[index].img)
    }

    return <div className="banner-wrraper">
        <div className="banner">

            <div onClick={swipeBannerLeft} className="banner__arrow">
                <img src="/image/arrow-left.svg" alt="" />
            </div>
            <div className="banner__content">
                <div className="banner__content_text">
                    <h2 className="banner__content_text_title">{title}</h2>
                    <p className="banner__content_text_description">{description}</p>
                </div>
                <div className="banner__content_img">
                    <img src={img} alt="" />
                </div>
            </div>
            <div onClick={swipebannerRight} className="banner__arrow">
                <img src="/image/arrow-right.svg" alt="" />
            </div>
        </div>
        <Button setOpenModal={setOpenModal} className="banner-wrapper__btn">ПОПРОБОВАТЬ БЕСПЛАТНО</Button>
    </div>
}