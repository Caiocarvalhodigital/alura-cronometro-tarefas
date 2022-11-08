import { ITarefa } from "../../types/tarefa";
import Item from "./item";
import styles from './list.module.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada:ITarefa) => void
}

function List({tarefas, selecionaTarefa}:Props) {
    return(
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
            {tarefas.map(item => (
                <Item
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                    {...item}
                />
            ))}
            </ul>
        </aside>
    )
}

export default List;