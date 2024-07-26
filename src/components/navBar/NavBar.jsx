import { TiSocialGithub } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiMail } from "react-icons/ti";

const NavBar = () => {
  return (
    <>
      <header>
        <h2>Jose Daniel </h2>
        <ul className="socialList" >
          <li>
            <a>
              <TiSocialGithub />
            </a>
          </li>
          <li>
            <a>
              <TiSocialLinkedin />
            </a>
          </li>
          <li>
            <a>
              <TiSocialTwitter />
            </a>
          </li>
          <li>
            <a href="mailto:jdanaconar@gmail.com?subject=Solicitud de información&body=Hola, me gustaría obtener más información sobre...">
              <TiMail />
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default NavBar;
