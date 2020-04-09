import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import { getFirstLetter } from '../../../utils/get-first-letter'
import styles from './index.css'

type Props = {
  creator: UserType | undefined
  todo: ToDo
}

export const TodoItem = ({ todo, creator }: Props) => (
  <ListItem className={styles.todo} divider>
    <div className={styles.title}>{todo.title}</div>
    <div className={styles.body}>{todo.body}</div>
    {creator && (
      <div className={styles.creatorWrapper}>
        <Avatar className={styles.avatar}>
          {getFirstLetter(creator.username)}
        </Avatar>
        <div>
          <Typography variant="body1" component="div">
            {creator.username}
          </Typography>
          <Typography component="div" variant="body2" color="textSecondary">
            {creator.address.city}
          </Typography>
        </div>
      </div>
    )}
  </ListItem>
)
