import { useState } from "react";

import { ContentWrapper, ContentStatus, Content } from "./style";

const ContCentContainer = (props) => {
  const { isCompleted, content } = props;
  const [completed, setCompleted] = useState(isCompleted);

  const completeTask = () => {
    setCompleted(!completed);
  };
  return (
    <ContentWrapper>
      <ContentStatus
        onClick={() => completeTask()}
        className={completed ? "active" : ""}
      />
      <Content>{content}</Content>
    </ContentWrapper>
  );
};

export default ContCentContainer;
