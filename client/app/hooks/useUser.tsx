import { createContext, useState } from "react";
import { useSessionContext, useUser as useSupaUser } from "@supabase/auth-helpers-react";
import { Subscription } from "@supabase/gotrue-js";
import { User } from "@supabase/auth-helpers-nextjs";

import { ISubscription, IUserDetails } from "@/types";


type UserContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: IUserDetails | null;
    isLoading: boolean;
    subscription: Subscription | null;
}

export const UserContext = createContext<UserContextType | undefined>(
    undefined
);

export interface IProps {
    [propName: string]: any
};

export const MyUserContextProvider = (props: IProps) => {
    const {
        session,
        isLoading: isLoadingUser,
        supabaseClient: supabase
    } = useSessionContext();

    const user = useSupaUser();
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [userDetails, setUserDetails] = useState<IUserDetails | null>(null);
    const [subscription, setSubscription] = useState<ISubscription| null>(null)
}