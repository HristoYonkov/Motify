"use client";

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import Modal from "./Modal";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { session } = useSessionContext();

    return (
        <Modal
            title="Welcome Back"
            description="Log in to your account"
            isOpen
            onChange={() => { }}
        >
            <Auth 
                supabaseClient={supabaseClient}
                appearance={{
                    theme: ThemeSupa
                }}
            />
        </Modal>
    )
}

export default AuthModal;