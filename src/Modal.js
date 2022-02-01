import './Modal.css'

function Modal({ children, show, setShow }) {
  const handleClick = () => setShow(!show)
  const handlePropagation = e => e.stopPropagation()
  return show && (
    <div className="modal-bg" onClick={handleClick}>
      <div className="modal-fg" onClick={handlePropagation}>
        {children}
      </div>
    </div>
  )
}

export default Modal
