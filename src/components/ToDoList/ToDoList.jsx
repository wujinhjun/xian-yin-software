import {
  ToDoListWrapper,
  TitleWrapper,
  TitleContainer,
  Title,
  NumberCircle,
  AddItem,
  AddIcon,
  ItemList,
} from "./style";

import plus from "../../static/svg/plus.svg";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = (props) => {
  const { title, count, tasks } = props;

  return (
    <>
      <ToDoListWrapper>
        <TitleWrapper>
          <TitleContainer>
            <Title>{title}</Title>
            <NumberCircle>{count}</NumberCircle>
          </TitleContainer>
        </TitleWrapper>
        <AddItem>
          <AddIcon icon={plus}></AddIcon>
        </AddItem>
        <ItemList>
          {tasks.map((item) => {
            const { id, name, isActive, contents, startDate, endDate } = item;
            return (
              <ToDoItem
                key={id}
                name={name}
                isActive={isActive}
                contents={contents}
                startDate={startDate}
                endDate={endDate}
              ></ToDoItem>
            );
          })}
        </ItemList>
      </ToDoListWrapper>
    </>
  );
};

export default ToDoList;
