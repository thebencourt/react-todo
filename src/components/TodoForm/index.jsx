import React from 'react';
import PropTypes from 'prop-types';
import { FormField, Label, Input, Text, Note } from './index.styled';

const TodoForm = ({ saveTodo, toggleAddModal }) => (
  <form onSubmit={ev => {
    ev.preventDefault();

    const todo = {
      title: ev.target.title.value.trim(),
      description: ev.target.description.value.trim(),
    };

    const priority = ev.target.priority.value.trim();
    const tags = ev.target.tags.value.trim();
    
    if (priority.length && !isNaN(parseInt(priority, 10))) {
      todo.priority = parseInt(priority, 10);
    }

    if (tags.length) {
      todo.tags = tags.split(',');
    }
    
    saveTodo(todo);
  }}>
    <FormField>
      <Label htmlFor="title">
        Title
      </Label>
      <Input type="text" id="title" name="title" placeholder="Title" required />
    </FormField>
    <FormField>
      <Label htmlFor="description">
        Description
      </Label>
      <Text name="description" id="description" cols="30" rows="10" placeholder="Description" required></Text>
    </FormField>
    <FormField>
      <Label htmlFor="priority">
        Priority
      </Label>
      <Input type="number" name="priority" id="priority" min="0" max="10" step="1" />
    </FormField>
    <FormField>
      <Label htmlFor="tags">
        Tags
      </Label>
      <Input type="text" name="tags" id="tags" placeholder="Tags" />
      <Note>
        Seperate multiple tags with a comma
      </Note>
    </FormField>
    <button type="submit">Save</button>
    {' '}
    <button type="button" onClick={() => toggleAddModal()}>Cancel</button>
  </form>
);

TodoForm.propTypes = {
  saveTodo: PropTypes.func.isRequired,
  toggleAddModal: PropTypes.func.isRequired,
}

export default TodoForm;