import { useState } from "react";

import handleIcon from "../../static/svg/chevron-down.svg";
import {
  ItemWrapper,
  ItemContainer,
  ItemContent,
  ItemIcon,
  ContentsContainer,
  ContentWrapper,
  ContentStatus,
  Content,
  DateGap,
} from "./style";

const ToDoItem = (props) => {
  const { name, isActive, contents, startDate, endDate } = props;
  const [active, setActive] = useState(isActive);

  const changeActive = () => {
    console.log(active);
    setActive(!active);
  };
  return (
    <ItemWrapper className={active ? "active" : ""}>
      <ItemContainer>
        <ItemContent>{name}</ItemContent>
        <ItemIcon
          onClick={() => {
            changeActive();
          }}
          className={active ? "active" : ""}
          icon={handleIcon}
        />
      </ItemContainer>
      {active && (
        <ContentsContainer>
          {contents.map((item) => {
            return (
              <ContentWrapper key={item.id}>
                <ContentStatus className={item.isCompleted ? "active" : ""} />
                <Content>{item.content}</Content>
              </ContentWrapper>
            );
          })}

          <DateGap>
            {startDate}-{endDate}
          </DateGap>
        </ContentsContainer>
      )}
    </ItemWrapper>
  );
};

export default ToDoItem;
