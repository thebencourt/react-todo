import { connect } from 'react-redux';
import { closeModal, getTodo, toggleTodo } from '../actions';
import TodoList from '../components/TodoList/index';
import { FILTERS } from '../constants';

const filterTodos = (todos, filter) => {
  switch (filter) {
    case FILTERS.SHOW_COMPLETE:
      return todos.filter(x => x.isDone);
    case FILTERS.SHOW_INCOMPLETE:
      return todos.filter(x => !x.isDone);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  activeTodo: state.todos.activeTodo,
  todos: filterTodos(state.todos.todos, state.filters.filter),
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  getTodo: id => dispatch(getTodo(id)),
  toggleTodo: (id, isDone) => dispatch(toggleTodo(id, isDone)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)