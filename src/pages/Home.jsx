import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addTodo, deleteTodo, switchTodo } from "../redux/modules/todos";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const todos = useSelector((store) => store.todos);

  const addClick = () => {
    dispatch(addTodo(title, content));
    setTitle("");
    setContent("");
  };

  const deleteClick = (id) => dispatch(deleteTodo(id))
  const swichClick = (id) => dispatch(switchTodo(id))

  return (
    <HomeBox>
      <TitleBox>
        <TitleInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        ></TitleInput>
        <TitleInput
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        ></TitleInput>
        <button onClick={() => addClick()}>추가</button>
      </TitleBox>
      할일
      {todos
      .filter((todo) => todo.isDone === false)
      .map((todo, index) => (
        <TodoCard>
          <div>제목{todo.title}</div>
          <div>내용{todo.content}</div>
          <button onClick={() => deleteClick(todo.id)}>삭제</button>
          <button onClick={() => swichClick(todo.id)}>완료</button>
          <button onClick={() => navigate(`detail/${todo.id}`)}>상세히보기</button>
        </TodoCard>
      ))}
      완료
      {todos
      .filter((todo) => todo.isDone === true)
      .map((todo, index) => (
        <TodoCard>
          <div>제목 {todo.title}</div>
          <div>내용 {todo.content}</div>
          <button onClick={() => deleteClick(todo.id)}>삭제</button>
          <button onClick={() => swichClick(todo.id)}>완료</button>
          <button onClick={() => navigate(`detail/${todo.id}`)}>상세히보기</button>
        </TodoCard>
        ))}
    </HomeBox>
  );
};

const HomeBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  background-color: lavender;
`;

const TitleBox = styled.div`
 margin: 10px;`;

const TitleInput = styled.input`
  padding-left: 10px;
  margin-right: 10px;
`;

const TodoCard = styled.div`
  border: 2px solid purple;
  margin: 10px;
  padding: 10px;
`;
export default Home;
