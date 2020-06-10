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
      <TodoItem id="0" text="hello" />
      <TodoItem id="1" text="hihihi" done />
      <TodoItem id="1" text="hello!!!" />
    </TodoListBlock>
  );
};

export default TodoList;
