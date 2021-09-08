import React, { useContext} from 'react';
import { AuthContext } from '../../../context/AuthContext';
import './Backdrop.css'


const Backdrop = () => {
  const {modalHook} = useContext(AuthContext);
  return (
    <div onClick={() => modalHook.closeModal()} className={"modal-overlay open__backdrop"}></div>
  );
}

export default Backdrop;
