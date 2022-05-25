import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Div = styled.div`
  & h1 {
    margin-bottom: 3rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  & input {
    height: 4rem;
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 5px;
    border: 1px solid #bebebe;

    &::placeholder {
      color: #bebebe;
    }
  }

  & textarea {
    height: 12rem;
    padding: 1rem;
    font-size: 1.6rem;
    font-family: system-ui;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #bebebe;

    &::placeholder {
      color: #bebebe;
    }
  }

  & button {
    height: 4rem;
    background-color: #1d1d1d;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

function Create() {
  const [state, setState] = useState({
    title: '',
    content: '',
  });

  const onChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { title, content } = state;

  return (
    <Div>
      <h1>Write something</h1>
      <Form>
        <input
          onChange={onChange}
          value={title}
          name='title'
          placeholder='Title'
          type='text'
        />
        <textarea
          onChange={onChange}
          value={content}
          name='content'
          placeholder='Content'
          type='text'
        />
        <button type='submit'>Post blog</button>
      </Form>
    </Div>
  );
}

export default Create;
