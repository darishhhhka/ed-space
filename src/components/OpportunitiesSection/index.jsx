import Layout from "../Layout"
import OpportunitiesComponent from "../OpportunitiesComponent"
import Button from "../Button"
import Modal from "../Modal/index"
import { useState } from "react"
import "./style.css"
import {setOpenModal, openModal} from "../../App"

export default ({setOpenModal}) => {

    

    return <Layout
    className="opportunities"
    name="Возможности Ed Space"
    description="Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка."
    >
        <div className="wrapper-card">
            <OpportunitiesComponent/>   
        </div>
        <Button setOpenModal={setOpenModal}>ПОПРОБОВАТЬ БЕСПЛАТНО</Button>
        
    </Layout>
}