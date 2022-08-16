import {
  SideContainer,
  SideWrapper,
  SideButtonList,
  SideButtonWrapper,
  ButtonIcon,
  ButtonTitle,
  SideBottom,
} from "./style";

import dailyIcon from "../../static/svg/clipboard.svg";
import checkIcon from "../../static/svg/check-square.svg";
import settingIcon from "../../static/svg/settings.svg";

const SideBar = () => {
  return (
    <SideContainer>
      <SideWrapper>
        <SideButtonList>
          <SideButtonWrapper className="active">
            <ButtonIcon icon={checkIcon}></ButtonIcon>
            <ButtonTitle>ToDo</ButtonTitle>
          </SideButtonWrapper>
          <SideButtonWrapper>
            <ButtonIcon icon={dailyIcon}></ButtonIcon>
            <ButtonTitle>日程</ButtonTitle>
          </SideButtonWrapper>
        </SideButtonList>
        <SideBottom>
          <SideButtonWrapper id="settings">
            <ButtonIcon icon={settingIcon}></ButtonIcon>
            <ButtonTitle>设置</ButtonTitle>
          </SideButtonWrapper>
        </SideBottom>
      </SideWrapper>
    </SideContainer>
  );
};

export default SideBar;
