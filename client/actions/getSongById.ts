import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { ISong } from "@/types";

const getSongById = async (id: string): Promise<ISong> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getSongById;
