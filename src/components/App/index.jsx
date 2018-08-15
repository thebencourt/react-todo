import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Header from '../Header';
import TodoListContainer from '../../containers/TodoListContainer';
import TodoFilterContainer from '../../containers/TodoFilterContainer';
import { Container } from './index.styled';
import { getTodos } from '../../actions';

const App = ({ store }) => {
  store.dispatch(getTodos());

  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <Container>
          <TodoListContainer />
          <TodoFilterContainer />
        </Container>
      </Fragment>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.shape().isRequired,
};

export default App;
