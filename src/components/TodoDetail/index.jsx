import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format'
import distanceInWords from 'date-fns/distance_in_words'
import { List, Item, Tag } from './index.styled';

const TodoDetail = ({
  todo: {
    createdAt,
    description,
    priority,
    tags,
  }
}) => {
  const d = new Date(createdAt);

  return (
    <List>
      <Item>
        <strong>
          Added:
        </strong>
        {' '}
        <span title={ format(d) }>
          { distanceInWords(d, new Date()) } ago
        </span>
      </Item>
      <Item>
        <strong>
          Priority:
        </strong>
        {' '}
        { priority }
      </Item>
      {!!tags.length && (
        <Item>
          <strong>
            Tags:
          </strong>
          {' '}
          { tags.map((tag, index) => <Tag key={ index }>{ tag }</Tag>) }
        </Item>
      )}
      <Item>
        <strong>
          Description:
        </strong>
        {' '}
        { description }
      </Item>
    </List>
  )
};

TodoDetail.propTypes = {
  todo: PropTypes.shape({
    createdAt: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

export default TodoDetail;