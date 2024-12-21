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
  }

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
          className="fixed inset-0 z-50 h-screen w-screen flex justify-center items-center"
          onClick={(e) => closeModal(e)}
        >
          <div
            ref={hamburgerMenu}
            className="hamburger-menu fixed slide-in-from-right z-50 absolute w-60 pl-5 h-dvh text-zinc-200 top-14 right-0 bg-emerald-950"
          >
            <NavLinks withinHamburger={true} />
          </div>
        </div>
        //  <div
        //   className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
        //   onClick={closeModal}
        // >
        //   {/* Modal content */}
        //   <div
        //     className="bg-white w-11/12 md:w-1/3 rounded-lg p-6 relative animate-fade-in"
        //     onClick={(e) => e.stopPropagation()} // Prevent click from closing the modal
        //   >
        //     {/* Close button */}
        //     <button
        //       className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        //       onClick={closeModal}
        //     >
        //       ✕
        //     </button>

        //     <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        //     <p className="mb-4 text-gray-700">
        //       This is a simple modal using Tailwind CSS. You can customize the text, buttons, and animations as needed.
        //     </p>

        //     <button
        //       onClick={closeModal}
        //       className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        //     >
        //       Close Modal
        //     </button>
        //   </div>
        // </div>
      )}
    </div>
  );
}
