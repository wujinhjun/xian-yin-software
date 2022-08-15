import styled from "styled-components";
import { grayColor } from "../../styleVariable";

export const ToDoListWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-basis: 260px;
  flex-direction: column;
  background-color: ${grayColor};

  border-radius: 16px;
  height: 200px;
`;
