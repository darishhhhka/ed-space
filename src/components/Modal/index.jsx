import "./style.css"
import Button from "../Button"
import { useState } from "react"

export default ({openModal, setOpenModal}) => {

    const [name, setName] = useState("")
    const [name_organization, setNameOrganization] = useState("")
    const [post, setPost] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState()

    const closehandler = () => {
        setName("")
        setNameOrganization("")
        setPost("")
        setEmail("")
        setPhone("")
        setOpenModal(false)
    }

    const handler = (e) =>{
        const data = {
            name,
            name_organization,
            post,
            email,
            phone
        }
        console.log(data)
        closehandler()
    }

    return <div className={openModal ? "modal-wrapper active" : "modal-wrapper"}>
        <div className="modal">
            <div className="modal__close" onClick={e => closehandler()}>
                <img src="image/modalClose.png" alt="" />
            </div>
            <div className="modal__img">
                <img src="image/modalLogo.png" alt="" />
            </div>
            <div className="modal__content">
                <input 
                    className="modal__content_input"
                    type="text" 
                    placeholder="Имя Фамилия"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input type="text" 
                    placeholder="Название организации"
                    className="modal__content_input"
                    value={name_organization}
                    onChange={e => setNameOrganization(e.target.value)}
                />

                <input type="text" 
                    placeholder="Должность"
                    className="modal__content_input"
                    value={post}
                    onChange={e => setPost(e.target.value)}
                />

                <input type="email" 
                    placeholder="Email"
                    className="modal__content_input"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input type="phone"
                    placeholder="Телефон" 
                    className="modal__content_input"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                 />

                <div className="checkbox">
                    <input className="checkbox__btn" type="checkbox" />
                    <label>
                        <p className="checkbox__text">Я согласен на обработку моих <span className="checkbox__text_b">персональных данных</span>
                        </p>
                    </label>
                </div>
                <Button func={handler}>ОТПРАВИТЬ</Button>
            </div>
        </div>
    </div>
}