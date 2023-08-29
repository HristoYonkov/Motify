"use client";

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

interface SidebarProps {
    children: React.ReactNode;
}


const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {

    const pathName = usePathname();
    const routes = useMemo(() => [
        {
            label: 'Home',
            active: pathName !== '/search',
            href: '/',
        },
        {
            label: 'Search',
            active: pathName === '/search',
            href: '/search',
        }
    ], [])

    return (
        <div>{children}</div>
    )
}

export default Sidebar