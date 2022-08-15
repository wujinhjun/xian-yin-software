import {
  SideWrapper,
  SideButtonList,
  SideButtonWrapper,
  ButtonIcon,
  ButtonTitle,
} from "./style";

import dailyIcon from "../../static/svg/clipboard.svg";
import checkIcon from "../../static/svg/check-square.svg";
import settingIcon from "../../static/svg/settings.svg";

const SideBar = () => {
  return (
    <SideWrapper>
      <SideButtonList>
        <SideButtonWrapper className="active">
          <ButtonIcon icon={dailyIcon}></ButtonIcon>
          <ButtonTitle>日程</ButtonTitle>
        </SideButtonWrapper>
        <SideButtonWrapper>
          <ButtonIcon icon={checkIcon}></ButtonIcon>
          <ButtonTitle>ToDo</ButtonTitle>
        </SideButtonWrapper>
        <SideButtonWrapper>
          <ButtonIcon icon={settingIcon}></ButtonIcon>
          <ButtonTitle>设置</ButtonTitle>
        </SideButtonWrapper>
      </SideButtonList>
    </SideWrapper>
  );
};

export default SideBar;
