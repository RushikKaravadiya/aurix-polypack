import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919979936435?text=Hi%20Aurix%20Polypack!%20I%20am%20interested%20in%20your%20PP%20woven%20fabric%20and%20packaging%20products.%20Please%20share%20more%20details.%20Thank%20you."
        target="_blank"
        rel="noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105"
      >
        <FaWhatsapp size={22} />
      </a>
      <a
        href="tel:+919979936435"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1F365C] text-white shadow-lg transition hover:scale-105"
      >
        <FiPhoneCall size={22} />
      </a>
    </div>
  );
}

export default FloatingButtons;
