import { ISong } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

const getLikedSongs = async (): Promise<ISong[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const {
        data: {
            session
        }
    } = await supabase.auth.getSession();

    const { data, error } = await supabase
        .from('liked_songs')
        .select('*, songs(*)')
        .eq('user_id', session?.user?.id)
        .order('created_at', { ascending: false });

    if (error) {
        console.log(error);
    }

    return (data as any) || [];
};

export default getLikedSongs;