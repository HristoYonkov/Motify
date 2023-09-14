import { createContext, useEffect, useState } from "react";
import { useSessionContext, useUser as useSupaUser } from "@supabase/auth-helpers-react";
import { Subscription } from "@supabase/gotrue-js";
import { User } from "@supabase/auth-helpers-nextjs";

import { ISubscription, IUserDetails } from "@/types";


type UserContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: IUserDetails | null;
    isLoading: boolean;
    subscription: ISubscription | null;
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
    const [subscription, setSubscription] = useState<ISubscription | null>(null);

    const getUserDetails = () => supabase.from('users').select('*').single();
    const getSubscription = () =>
        supabase.from('subscriptions')
            .select('*, prices(*, products(*))')
            .in('status', ['trailing', 'active'])
            .single();

    useEffect(() => {
        if (user && !isLoadingData && !userDetails && !subscription) {
            setIsLoadingData(true);
            Promise.allSettled([getUserDetails(), getSubscription()]).then(
                (results) => {
                    const userDetailsPromise = results[0];
                    const subscriptionPromise = results[1];

                    if (userDetailsPromise.status === 'fulfilled') {
                        setUserDetails(userDetailsPromise.value.data as IUserDetails);
                    }

                    if (subscriptionPromise.status === 'fulfilled') {
                        setSubscription(subscriptionPromise.value.data as ISubscription);
                    }

                    setIsLoadingData(false);
                }
            );
        } else if (!user && !isLoadingUser && !isLoadingData) {
            setUserDetails(null);
            setSubscription(null);
        }
    }, [user, isLoadingUser]);

    const value = {
        accessToken,
        user,
        userDetails,
        isLoading: isLoadingUser || isLoadingData,
        subscription
    };

    return <UserContext.Provider value={value} {...props} />
}