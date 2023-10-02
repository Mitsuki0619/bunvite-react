import { ROUTES } from '@/const/routes'
import { FC } from 'react'
import { Link, LinkProps, NavLink, NavLinkProps } from 'react-router-dom'

type Props = {
    to: (typeof ROUTES)[keyof typeof ROUTES]
}

type RouterProps =
    | ({
          as?: 'Link'
      } & Omit<LinkProps, 'to'>)
    | ({
          as: 'NavLink'
      } & Omit<NavLinkProps, 'to'>)

export const CustomLink: FC<Props & RouterProps> = (props) => {
    if (props.as === 'NavLink') {
        return (
            <NavLink {...props} to={props.to}>
                {props.children}
            </NavLink>
        )
    }
    return (
        <Link {...props} to={props.to}>
            {props.children}
        </Link>
    )
}
