'use client';
import { useState, useEffect } from 'react';
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

interface LikedButtonProps {
    songId: string;
}

const LikeButton: React.FC<LikedButtonProps> = ({ songId }) => {
    const [isLiked, setIsLiked] = useState(false);

    const router = useRouter();
    const { supabaseClient } = useSessionContext();

    const authModal = useAuthModal();
    const { user } = useUser();

    useEffect(() => {
        if (!user?.id) {
            return;
        }

        const fetchData = async () => {
            const {data, error} = await supabaseClient
                .from('liked_songs')
                .select('*')
                .eq('user_id', user.id)
                .eq('song_id', songId)
                .single();
            
            if (!error && data) {
                setIsLiked(true);
            }
        }
    }, [songId, supabaseClient, user?.id]);

    const Icon = isLiked ? AiFillHeart : AiOutlineHeart;
    return (
        <button>
            <Icon color={isLiked ? '#22c55e' : 'white'} size={25} />
        </button>
    )
}

export default LikeButton