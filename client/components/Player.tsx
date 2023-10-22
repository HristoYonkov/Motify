'use client';

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";


const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);
    const songUrl = useLoadSongUrl(song!);

    return (
        <div>
            Player
        </div>
    )
}

export default Player;