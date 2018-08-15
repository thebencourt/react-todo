import { connect } from 'react-redux';
import { addTodo, resetTodos, setFilter, toggleAddModal } from '../actions';
import { FILTERS } from '../constants';
import TodoFilter from '../components/TodoFilter';

const mapStateToProps = state => ({
  addModalActive: state.filters.addModalActive,
  filters: FILTERS,
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  resetTodos: () => dispatch(resetTodos()),
  setFilter: filter => dispatch(setFilter(filter)),
  toggleAddModal: () => dispatch(toggleAddModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFilter)