import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import StyledTodoList from './index.styled';
import TodoItem from '../TodoItem';
import Modal from '../Modal';
import TodoDetail from '../TodoDetail';

const TodoList = ({ activeTodo, closeModal, getTodo, todos, toggleTodo }) => (
  <Fragment>
    <StyledTodoList>
      {todos.map(todo =>
        <TodoItem
          key={todo.id}
          {...todo}
          getTodo={getTodo}
          toggleTodo={toggleTodo}
        />
      )}
    </StyledTodoList>
    {activeTodo && (
      <Modal
        title={activeTodo.title}
        handleClose={closeModal}
      >
        <TodoDetail todo={activeTodo} />
      </Modal>
    )}
  </Fragment>
);

TodoList.propTypes = {
  activeTodo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    priority: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    isDone: PropTypes.bool,
    title: PropTypes.string.isRequired,
  }),
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      priority: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      isDone: PropTypes.bool,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  closeModal: PropTypes.func,
  getTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;