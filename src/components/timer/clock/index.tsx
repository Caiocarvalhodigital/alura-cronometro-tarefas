import styles from './clock.module.scss'

interface Props {
    tempo: number | undefined
}

export default function Clock({ tempo = 0 }: Props) {
    
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');


    return(
        <>
            <span className={styles.relogioNumero}>{minutoDezena}</span>
            <span className={styles.relogioNumero}>{minutoUnidade}</span>
            <span className={styles.relogioDivisao}>:</span>
            <span className={styles.relogioNumero}>{segundoDezena}</span>
            <span className={styles.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}