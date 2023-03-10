import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const Modal = props => {
    const [active, setActive] = useState(false);

    useEffect(() => {
      setActive(props.active);
    }, [props.active]);


  return (
    <div id={props.id} className={`model ${active ? 'active' : null}`}>
        {props.children}
    </div>
  )
}

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}

export const ModalContent = props => {
    const contentRef = useRef(null);
    const modalClose = () => {
        contentRef.current.classList.remove('active');
        if (props.onClose){
            props.onClose();
        }
    }
    return (
        <div ref={contentRef} className='modal-content'>
            {props.children}
            <div className="modal-close" onClick={modalClose}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    )
}
ModalContent.propTypes = {
    onClose: PropTypes.func
}

export default Modal