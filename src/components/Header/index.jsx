import {
  HeaderWrapper,
  HeaderIconContainer,
  SloganContainer,
  Slogan,
  UserHead,
} from "./style";

const Header = (props) => {
  const { slogan = "加油", userName = "User" } = props;
  return (
    <HeaderWrapper>
      <HeaderIconContainer>闲吟</HeaderIconContainer>
      <SloganContainer>
        <Slogan>
          {slogan}
          {userName}
        </Slogan>
        <UserHead>{userName.charAt(0)}</UserHead>
      </SloganContainer>
    </HeaderWrapper>
  );
};

export default Header;
