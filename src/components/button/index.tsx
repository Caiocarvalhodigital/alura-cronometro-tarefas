import React from 'react';
import styles from './button.module.scss'

interface Props {
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

export default function Button({ onClick, type, children }: Props) {
    return(
        <button onClick={onClick} className={styles.botao} type={type}>
            {children}
        </button>
    )
}