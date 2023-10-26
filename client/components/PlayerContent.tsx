'use client';

import { ISong } from "@/types";

interface PlayerContentProps {
    song: ISong;
    songUrl: string
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
    
    return (
        <div>
            PlayerContent
        </div>
    )
}

export default PlayerContent;