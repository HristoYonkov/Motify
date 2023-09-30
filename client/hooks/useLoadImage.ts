import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { ISong } from "@/types";

const useLoadImage = (song: ISong) => {
    const supabaseClient = useSupabaseClient();

    if (!song) {
        return null;
    }

    const { data: imageData } = supabaseClient
        .storage
        .from('images')
        .getPublicUrl(song.image_path);

    return imageData.publicUrl;
}

export default useLoadImage;