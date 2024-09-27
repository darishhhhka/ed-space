import "./style.css"



export default ({children, setOpenModal, func}) =>{
    return <button 
    className="button"
    onClick={setOpenModal ? e => setOpenModal(true) : func}
    >
        {children}
    </button>
}