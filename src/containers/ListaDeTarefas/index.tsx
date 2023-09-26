import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => (
  <Container>
    <p>2 Tarefas marcada como &quot;Categoria e &quot;termo</p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas
