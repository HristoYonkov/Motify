import { useState, useEffect } from 'react';
import { useSessionContext } from '@supabase/auth-helpers-react';
import toast from 'react-hot-toast';

import { ISong } from '@/types';

const useGetSongById = (id?: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [song, setSong] = useState<ISong | undefined>(undefined);
    const { supabaseClient } = useSessionContext();

    useEffect(() => {
        if (!id) {
            return;
        }

        setIsLoading(true);

        const fetchSong = async () => {
            const { data, error } = await supabaseClient
            .from('songs')
            .select('*')
            .eq('id', id)
            .single();

            if (error) {
                setIsLoading(false);
                return toast.error(error.message);
            }

            setSong(data as ISong);
            setIsLoading(false);
        }

        fetchSong();
    }, [id, supabaseClient])
}

export default useGetSongById