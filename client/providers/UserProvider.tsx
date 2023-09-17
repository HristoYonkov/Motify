'use client';
import { MyUserContextProvider } from "@/hooks/useUser";

interface IUserProviderProps {
    children: React.ReactNode;
};

const UserProvider: React.FC<IUserProviderProps> = ({
    children
}) => {

    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
};

export default UserProvider;