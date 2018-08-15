import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import TodoForm from '../TodoForm/'
import { StyledFilter } from './index.styled';

const TodoFilter = ({
  addTodo,
  addModalActive,
  filters,
  resetTodos,
  setFilter,
  toggleAddModal
}) => (
  <Fragment>
    <StyledFilter>
      <button onClick={() => toggleAddModal()}>+ Add Todo</button>
      <div>
        <label>Show:</label>
        {' '}
        {Object.keys(filters).map(filter => (
          <button key={filter} type="button" onClick={() => setFilter(filter)}>
            { filter.split('_')[1] }
          </button>
        ))}
      </div>
      <button onClick={resetTodos}>Reset</button>
    </StyledFilter>
    {addModalActive && (
      <Modal
        title="Add Todo"
        handleClose={toggleAddModal}
      >
        <TodoForm
          saveTodo={addTodo}
          toggleAddModal={toggleAddModal}
        />
      </Modal>
    )}
  </Fragment>
);

TodoFilter.propTypes = {
  addModalActive: PropTypes.bool,
  addTodo: PropTypes.func.isRequired,
  filters: PropTypes.shape().isRequired,
  resetTodos: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  toggleAddModal: PropTypes.func.isRequired,
};

TodoFilter.defaultProps = {
  addModalActive: false,
};

export default TodoFilter;