import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "./NavLinks";

export default function Hamburger() {
  const [toggle, setToggle] = useState<Boolean>(false);
  const hamburgerMenu = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setToggle(true);
    hamburgerMenu.current?.classList.toggle("slide-out-to-right");
    hamburgerMenu.current?.classList.toggle("slide-in-from-right");
  };

  const closeModal = (e: React.MouseEvent) => {
    setToggle(false);
    hamburgerMenu.current?.classList.toggle("slide-out-to-right");
    hamburgerMenu.current?.classList.toggle("slide-in-from-right");
  };

  return (
    <div className="hamburger-container relative">
      <GiHamburgerMenu
        className="sm:hidden pop-from-bottom-delay hover:scale-125 hover:text-zinc-200 hover:cursor-pointer"
        onClick={(e) => {
          setToggle((prev) => !prev);
        }}
      />

      {toggle && (
        <div
          className="fixed inset-0 h-screen w-screen flex justify-center items-center"
          onClick={(e) => {
            e.stopPropagation();
            closeModal(e);
          }}
        >
          <div
            ref={hamburgerMenu}
            className="hamburger-menu fixed slide-in-from-right absolute w-60 pl-5 h-dvh text-zinc-200 top-14 right-0 bg-emerald-950"
          >
            <NavLinks withinHamburger={true} />
          </div>
        </div>
      )}
    </div>
  );
}
