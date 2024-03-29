import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { ACTIONS, useTodoDispatch } from '../context/TodoContext';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  cursor: pointer;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  font-size: 60px;
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  transition: all 0.125s ease-out;

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const uuidv4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

const TodoCreate = () => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen((open) => !open);

  const dispatch = useTodoDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.CREATE,
      todo: {
        id: uuidv4(),
        text,
        done: false,
      },
    });
    setText('');
    setOpen(false);
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={handleSubmit}>
            <Input
              onChange={handleInputChange}
              value={text}
              placeholder="할 일을 입력 후, Enter를 누르세요"
              autoFocus
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton open={open} onClick={onToggle}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default React.memo(TodoCreate);
