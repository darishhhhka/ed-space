import "./style.css"



export default ({children, setOpenModal, func, className}) =>{
    return <button 
    className={`button ${className}`}
    onClick={setOpenModal ? () => setOpenModal(true) : func}
    >
        {children}
    </button>
}