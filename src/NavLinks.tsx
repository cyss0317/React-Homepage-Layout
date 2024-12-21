import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

interface NavLinksProps {
  children?: React.ReactNode;
  withinHamburger?: boolean;
}

export default function NavLinks(props: NavLinksProps) {
  const { withinHamburger, children } = props;
  const navClass = withinHamburger ? "flex-col gap-2" : "sm:flex hidden flex-row gap-6";
  const animationClass = withinHamburger
    ? "slide-in-from-right"
    : "pop-from-bottom";
  // const backgroundColor =
  const textColor = withinHamburger ? "text-teal-900" : "text-zinc-50";

  return (
    <nav className={`flex align ${animationClass}`}>
      <ul className={`flex flex-initial align  ${navClass}`}>
        <li className="hover:scale-125">
          <a href="#about">About</a>
        </li>
        <li className="hover:scale-125">
          <a href="#services">Services</a>
        </li>
        <li className="hover:scale-125">
          <a href="#contact">Contact</a>
        </li>
        <li className="hover:scale-125">
          <a href="Facebook">
            <FaFacebook />
          </a>
        </li>
        <li className="hover:scale-125">
          <a href="Instagram">
            <FaInstagram />
          </a>
        </li>
        <li className="hover:scale-125">
          <a href="Twitter">
            <FaTwitter />
          </a>
        </li>
      </ul>
      {children}
    </nav>
  );
}
