"use client";

import Modal from "./Modal";

const AuthModal = () => {
    return (
        <Modal
            title="Welcome Back"
            description="Log in to your account"
            isOpen
            onChange={() => { }}
        >
            Auth Modal children!
        </Modal>
    )
}

export default AuthModal;