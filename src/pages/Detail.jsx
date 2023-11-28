import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();
  const paramId = useParams().id;
  const todos = useSelector((state) => state.todos);
  const filteredTodo = todos.filter((todo) => todo.id === paramId)[0];


  return (
    <DetailBox>
      <h2>상세보기</h2>
       
      <div>제목: {filteredTodo.title}</div>
      <div>내용: {filteredTodo.content}</div>
      <div>완료여부: {filteredTodo.isDone.toString()}</div>
      <div>
        <button>삭제</button>
        <button on onClick={() => navigate("/")}>
          이전화면
        </button>
      </div>
    </DetailBox>
  );
};

export default Detail;

const DetailBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  background-color: lavender;
`;
