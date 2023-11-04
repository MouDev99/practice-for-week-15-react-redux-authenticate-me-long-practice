import { useState } from "react";
import LoginForm from "./LoginForm";
import { Modal } from '../../context/Modal';

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    if (!showModal) return (
        <button
          onClick={() => setShowModal(true)}
          style={{
            margin: "0 6px", border: "none", borderRadius: "6px",
            color: "white", backgroundColor: "#d8363a"
          }}
        >
            Log In
        </button>
    );

    return (
        <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
        </Modal>
    );
};

export default LoginFormModal;
