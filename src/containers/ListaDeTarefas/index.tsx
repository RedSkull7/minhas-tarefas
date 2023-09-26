import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'Importante',
    status: 'Pendente'
  },
  {
    titulo: 'Pagar conta da internet',
    descricao: 'Baixar fatura no gmail',
    prioridade: 'Urgente',
    status: 'Concluída'
  },
  {
    titulo: 'Ir para academia',
    descricao: 'Fazer treino de perna',
    prioridade: 'Importante',
    status: 'Pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 Tarefas marcada como &quot;Categoria e &quot;termo</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
