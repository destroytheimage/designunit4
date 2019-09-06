import * as React from 'react'

export interface IUnitHighlightProps {
    style?: React.CSSProperties
    size?: 'default' | 'small'
    newWindow?: boolean
    items: Array<{
        date?: Date,
        href: string,
        text: string,
    }>
}

export const UnitHighlight: React.FC<IUnitHighlightProps> = ({ newWindow = false, size = 'default', ...props }) => {
    const dateFormatterRef = React.useRef(new Intl.DateTimeFormat('ru-RU'))
    const fontSizeRef = React.useRef({
        default: 'var(--font-normal-size)',
        small: 'var(--font-second-size)',
    })
    const fontSize = fontSizeRef.current[size]

    return (
        <section style={props.style}>
            <style jsx>{`
                section {
                    font-size: ${fontSize};
                }

                ul {
                    padding-left: 0;
                }

                li {
                    display: flex;
                    align-items: flex-start;
                }

                .date {
                    padding-right: 1em;
                }

                .link {
                    flex: 1;
                }

                a {
                    background-color:  #ff0066;
                    color: white;
                    text-decoration: none;
                    padding: 0 8px;
                }

                a:link, a:visited {
                    color: white;
                }

                a:hover, a:active {
                    background-color: black;
                }
            `}</style>

            <ul>
                {props.items.map(x => (
                    <li key={x.href}>
                        {!x.date ? null : (
                            <span className={'date'}>
                                {dateFormatterRef.current.format(x.date)}
                            </span>
                        )}
                        <span className={'link'}>
                            <a
                                href={x.href}
                                target={newWindow ? '_blank' : null}
                            >
                                {x.text}
                            </a>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
