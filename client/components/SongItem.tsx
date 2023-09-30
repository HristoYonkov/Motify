'use client';

import { ISong } from "@/types";

interface SongItemProps {
    data: ISong;
    onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({
    data,
    onClick
}) => {

    
    return (
        <div>
            SongItem
        </div>
    )
}

export default SongItem