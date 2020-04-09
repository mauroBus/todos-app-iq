import React, { PureComponent, ReactNode } from 'react'
import t from 'format-message'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { TodoItem } from '../todo-item'
import styles from './index.css'

type Props = {
  todos: ToDo[]
  statuses: StateFieldProp<'todos', 'statuses'>
  usersById: Map<number, UserType>
}

export class TodoList extends PureComponent<Props> {
  renderList(): ReactNode {
    const { todos, usersById } = this.props

    return (
      <List component="ul" className={styles.list}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            creator={usersById.get(todo.userId)}
          />
        ))}
      </List>
    )
  }

  renderEmptyCard(): ReactNode {
    return (
      <Card className={styles.emptyCard} variant="outlined" component="h2">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {t('There are no items to display.')}
          </Typography>
        </CardContent>
      </Card>
    )
  }

  render() {
    return (
      <Paper elevation={3}>
        {this.props.todos.length ? this.renderList() : this.renderEmptyCard()}
      </Paper>
    )
  }
}
