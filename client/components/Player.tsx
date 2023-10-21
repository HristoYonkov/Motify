'use client';

import useGetSongById from "@/hooks/useGetSongById";
import usePlayer from "@/hooks/usePlayer";


const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById();


    return (
        <div>
            Player
        </div>
    )
}

export default Player;