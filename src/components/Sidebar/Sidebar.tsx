import { FC, PropsWithChildren } from 'react'

export const Sidebar: FC<PropsWithChildren> = ({ children }) => {
    return (
        <aside>
            sidebar
            {children}
        </aside>
    )
}
