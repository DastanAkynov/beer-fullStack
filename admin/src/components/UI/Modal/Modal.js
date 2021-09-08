import React, {useContext} from 'react';
import { AuthContext } from '../../../context/AuthContext';
import './Modal.css'

const Modal = (props) => {
  const {modalHook} = useContext(AuthContext);

  console.log(props)

  return (
    <div id="modal1" className="modal open__modal" >
      <div className="modal-content" style={{wordWrap: 'break-word'}}>
        {props.children}
      </div>
      <div className="modal-footer">
       <button onClick={() => modalHook.closeModal()} className="btn waves-effect waves-light red lighten-2">Закрыть</button>
      </div>
    </div>
  );
}

export default Modal;
