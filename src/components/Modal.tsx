import ModalCloseIcon from '../images/ModalCloseIcon.svg';

const Modal = (props: any) => {
const { handleClose, open } = props;
  return open ? (
    <div className="modal">
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="modal-container-close" onClick={handleClose}>
                    <img src={ModalCloseIcon} alt={"Close Icon"}/>
                </button>
                <h3>Get started with DeepSync</h3>
                <form>
                    <div className="input-container">
                        <label>Email *</label>
                        <input id="email" type="text" name="email" value=""></input>
                    </div>
                    <div className="input-container">
                        <label>Occupation</label>
                        <input id="Occupation" type="text" name="Occupation" value=""></input>
                    </div>
                    <div className="input-container">
                        <label>Website URL</label>
                        <input id="URL" type="text" name="URL" value=""></input>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  ): null;
}

export default Modal;
