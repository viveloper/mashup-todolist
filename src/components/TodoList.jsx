import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem key={1} id={1} text={'할 일 1'} done={true} />
      <TodoItem key={2} id={2} text={'할 일 2'} done={false} />
    </TodoListBlock>
  );
};

export default TodoList;
