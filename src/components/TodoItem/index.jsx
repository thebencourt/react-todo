import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format'
import distanceInWords from 'date-fns/distance_in_words'
import { Item, Title, Created } from './index.styled';

const TodoItem = ({
  id,
  createdAt,
  title,
  isDone,
  getTodo,
  toggleTodo,
}) => {
  const d = new Date(createdAt);

  return (
    <Item isDone={isDone}>
      <input type="checkbox" defaultChecked={isDone} onClick={() => toggleTodo(id, !isDone)} />
      <Title onClick={() => getTodo(id)}>
        { title }
      </Title>
      <Created title={ format(d) }>
        { distanceInWords(d, new Date()) } ago
      </Created>
    </Item>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  title: PropTypes.string.isRequired,
  getTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  isDone: false,
};

export default TodoItem;