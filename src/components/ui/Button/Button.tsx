import { FC, PropsWithChildren } from 'react'

type Props = {
    onClick: () => void
}

export const Button: FC<PropsWithChildren<Props>> = ({ children, onClick }) => {
    return <button>{children}</button>
}
