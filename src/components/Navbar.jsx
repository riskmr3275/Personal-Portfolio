import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';
import { MdOutlineWavingHand } from 'react-icons/md';
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg  ">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="">
          <div className="flex text-white font-semibold text-2xl  gap-2">
            <MdOutlineWavingHand className="text-yellow-300" />
            Hello{' '}
          </div>{' '}
          <div className="text-white font-serif text-3xl mt-3 mr-5">I am Risu Gupta</div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
