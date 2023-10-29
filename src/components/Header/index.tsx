import { HeaderContainer, HeaderContent, Title } from "./styles";

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" width={"40px"} />
        <Title>Space X</Title>
      </HeaderContent>
    </HeaderContainer>
  );
}
