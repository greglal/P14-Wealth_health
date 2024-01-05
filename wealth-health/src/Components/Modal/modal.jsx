import '../../Styles/modal.css';

export default function Modal({showModal, closeModal, message}) {
    return (
        <>
            {
                showModal &&
                <div className="modal" >
                    <div className="modal-content">
                        <span className="modal-close-icon" onClick={closeModal}>✖</span>
                        <span className="message">{message}</span>
                    </div>
                </div>
            }
        </>
    );
}
