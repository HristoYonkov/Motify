'use client';

import Image from "next/image";

import useLoadImage from "@/hooks/useLoadImage";
import { ISong } from "@/types";

interface MediaItemProps {
    data: ISong;
    onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
    const imageUrl = useLoadImage(data);

    const handleClick = () => {
        if (onClick) {
            return onClick(data.id)
        }

        // TODO: Default turn on player!
    }


    return (
        <div className="
            flex
            items-center
            gap-x-3
            cursor-pointer
            hover:bg-neutral-800/50
            w-full
            p-2
            rounded-md
        "
            onClick={handleClick}
        >
            <div className="
                relative
                rounded-md
                min-h-[48px]
                min-w-[48px]
                overflow-hidden
            ">
                <Image
                    fill
                    src={imageUrl || '/images/liked.png'}
                    alt="Media Item"
                    className="object-cover"
                    sizes="fill"
                    priority={false}
                />
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
                <p className="text-white truncate">
                    {data.title}
                </p>
                <p className="text-neutral-400 text-sm truncate">
                    {data.author}
                </p>
            </div>
        </div>
    )
}

export default MediaItem;