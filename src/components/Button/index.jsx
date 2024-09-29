import "./style.css"



export default ({children, setOpenModal, func}) =>{
    return <button 
    className="button"
    onClick={setOpenModal ? () => setOpenModal(true) : func}
    >
        {children}
    </button>
}