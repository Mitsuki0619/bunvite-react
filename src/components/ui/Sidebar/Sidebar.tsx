import { FC, PropsWithChildren } from 'react'

export const Sidebar: FC<PropsWithChildren> = ({ children }) => {
    return (
        <aside>
            <h1>

                BunVite
            </h1>
            {children}
        </aside>
    )
}
