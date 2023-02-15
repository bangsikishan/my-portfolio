import { useState } from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const handleClick = () => {
        setShowNav(!showNav);
    }

    const closeNav = () => {
        setShowNav(false);
    }

    return (
        <nav className="relative w-full px-10 py-4 flex justify-between z-10 text-white bg-[#111111]">
            <a href="#" className="text-3xl font-bold">Kishan</a>
            <div onClick={handleClick} className="w-fit cursor-pointer md:hidden">
                <RxHamburgerMenu className="text-3xl" />
            </div>
            <div className="hidden space-x-10 font-medium md:flex md:flex-row">
                <a href="#main" className="my-auto hover:text-[#20c997] transition ease-in-out duration-300">Home</a>
                <a href="#about-me" className="my-auto hover:text-[#20c997] transition ease-in-out duration-300">About</a>
                <a href="#resume" className="my-auto hover:text-[#20c997] transition ease-in-out duration-300">Resume</a>
                <a href="#work" className="my-auto hover:text-[#20c997] transition ease-in-out duration-300">Portfolio</a>
                <a href="#" className="my-auto hover:text-[#20c997] transition ease-in-out duration-300">Contact</a>
            </div>
            {showNav ? 
                (
                    <div className="absolute top-16 left-0 flex flex-col items-center w-full space-y-4 py-8 font-medium bg-[#111111]">
                        <a onClick={closeNav} href="#main" className="my-auto hover:text-[#20c997] transition ease-in-out duration-300">Home</a>
                        <a onClick={closeNav} href="#about-me" className="my-auto hover:text-[#20c997] transition ease-in-out duration-300">About</a>
                        <a onClick={closeNav} href="#resume" className="my-auto hover:text-[#20c997] transition ease-in-out duration-300">Resume</a>
                        <a onClick={closeNav} href="#work" className="my-auto hover:text-[#20c997] transition ease-in-out duration-300">Portfolio</a>
                        <a onClick={closeNav} href="#" className="my-auto hover:text-[#20c997] transition ease-in-out duration-300">Contact</a>
                    </div>
                ) : 
                (
                    ''
                )
            }
        </nav>
    );
}
 
export default Navbar;