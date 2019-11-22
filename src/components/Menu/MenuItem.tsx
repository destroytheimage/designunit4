import * as React from 'react'

import { LinkActive } from '../LinkActive'

export interface IMenuItemProps {
    href: string
    text: string
}

export const MenuItem: React.FC<IMenuItemProps> = ({ href, text }) => {
    return (
        <li>
            <style jsx>{`
            li {
                margin: 0;
                margin-bottom: 5px;
            }

            li a {
                color: var(--color-text);
                text-decoration: none;
            }

            li a:hover {
                color: var(--link-color-active);
            }

            li a:active {
                color: var(--link-color-active);
            }

            .link-body {
                font-family: var(--font-second-family);
                font-size: var(--font-second-size);
                padding: 3px 10px;
            }

            .link-body.active {
                background-color: var(--color-background-opposite);
                color: var(--color-text-opposite);
            }
        `}</style>

            <LinkActive href={href} passHref>
                {active => active
                    ? (
                        <span className='link-body active'>
                            {text}
                        </span>
                    ) : (
                        <a className='link-body'>
                            {text}
                        </a>
                    )
                }
            </LinkActive>
        </li>
    )
}
