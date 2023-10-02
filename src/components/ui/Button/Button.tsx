import { FC, MouseEventHandler, PropsWithChildren } from 'react'

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<PropsWithChildren<Props>> = ({ children, onClick }) => {
    return <button onClick={onClick}>{children}</button>
}
