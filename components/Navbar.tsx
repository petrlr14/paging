import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <header className="bg-white sticky top-0 flex flex-col w-full">
      <div className="flex justify-between w-full py-2 px-10">
        <div className="w-1/3 flex justify-center">
          <input
            className="border-b p-1 border-primary"
            placeholder="Search..."
          />
        </div>
        <div className="w-1/3 h- relative">
          <Image
            src="https://www.luxedressing.com/assets/images/icon/logo-luxe.svg"
            alt="luxe dressing"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex justify-center items-center gap-4 w-1/3">
          <span>Log in</span>
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faBagShopping} />
        </div>
      </div>
      <nav className="hidden sm:flex border-y border-ghost w-full">
        <ul className="flex flex-wrap justify-evenly w-full py-2">
          <li className="font-semibold">Women</li>
          <li className="font-semibold">Men</li>
          <li className="font-semibold">Designers</li>
          <li className="font-semibold">How it works</li>
          <li className="font-semibold">Item to sell</li>
          <li className="font-semibold">Blog</li>
          <li className="font-semibold">FAQ</li>
          <li className="font-semibold">My Account</li>
          <li className="font-semibold">Meet Us</li>
          <li className="font-semibold">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}
