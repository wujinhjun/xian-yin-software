import {
  ToDoListWrapper,
  TitleWrapper,
  TitleContainer,
  Title,
  NumberCircle,
  AddItem,
  AddIcon,
} from "./style";

import plus from "../../static/svg/plus.svg";

const ToDoList = (props) => {
  return (
    <ToDoListWrapper>
      <TitleWrapper>
        <TitleContainer>
          <Title>To Do</Title>
          <NumberCircle>5</NumberCircle>
        </TitleContainer>
      </TitleWrapper>
      <AddItem>
        <AddIcon icon={plus}></AddIcon>
      </AddItem>
    </ToDoListWrapper>
  );
};

export default ToDoList;
