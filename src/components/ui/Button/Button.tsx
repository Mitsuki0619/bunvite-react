import { FC, PropsWithChildren } from 'react'

type Props = {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const Button: FC<PropsWithChildren<Props>> = ({ children, onClick }) => {
    return <button onClick={onClick}>{children}</button>
}
