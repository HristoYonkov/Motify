'use client';

import { useUser } from "@/hooks/useUser";
import { ISong } from "@/types";
import { useRouter } from "next/navigation";

interface LikedContentProps {
    songs: ISong[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
    const router = useRouter();
    const { user, isLoading } = useUser();

    return (
        <div>LikedContent</div>
    );
}

export default LikedContent;