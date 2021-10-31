import React, { createContext, useContext, useReducer } from 'react';

const initialTodo = [
  {
    id: '1',
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: '2',
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: '3',
    text: 'Context 만들기',
    done: false,
  },
  {
    id: '4',
    text: '기능 구현하기',
    done: false,
  },
];

export const ACTIONS = {
  CREATE: 'CREATE',
  TOGGLE: 'TOGGLE',
  REMOVE: 'REMOVE',
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CREATE:
      return [...state, action.todo];
    case ACTIONS.TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case ACTIONS.REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodo);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
};
