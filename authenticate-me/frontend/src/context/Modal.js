import {
    createContext,
    createRef,
    useContext,
    useEffect,
    useState
} from "react";
import { createPortal } from "react-dom";

import './Modal.css';

const ModalContext = createContext();

const ModalProvider = (props) => {
    const modalRef = createRef(null);
    const [value, setValue] = useState(null);

    useEffect(() => {
        setValue(modalRef.current);
    }, [modalRef]);

    return (
      <div>
        <ModalContext.Provider value={value}>
            {props.children}
        </ModalContext.Provider>
        <div ref={modalRef}>
        </div>
      </div>
    );
};

export function Modal({ onClose, children }) {
    const modalNode = useContext(ModalContext);

    if (!modalNode) return null;

    const modalElements = (
        <div id="modal">
            <div id="modal-background" onClick={onClose}>
            </div>
            <div id="modal-content">
                {children}
            </div>
        </div>
    );

    return createPortal(modalElements, modalNode);
};

export default ModalProvider;
