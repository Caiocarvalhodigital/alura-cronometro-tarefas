import React from 'react';
import Form from '../components/form';
import List from '../components/list';
import Timer from '../components/timer';
import { ITarefa } from '../types/tarefa';
import styles from './app.module.scss';

function App() {
  const [tarefas, setTarefas] = React.useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = React.useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Timer
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
