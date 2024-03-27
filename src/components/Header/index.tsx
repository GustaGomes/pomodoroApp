import { HeaderContainer } from "./styles";
import Logo from "../../assets/img/Logo.svg";
import { Timer, Scroll, Paperclip } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo da aplicação" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24}/>
        </NavLink>
        <NavLink to="/History" title="Histórico">
          <Scroll size={24} />
        </NavLink>
        <NavLink to="/StudiesReact" title="Estudos">
          <Paperclip size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
