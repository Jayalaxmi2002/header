import React from "react";
import "./header.css";
import { LiaAngleDownSolid } from "react-icons/lia";
import { RiMailUnreadLine } from "react-icons/ri";
import { GiMegaphone } from "react-icons/gi";
import { LuBellRing } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";


const Header = () => {
    return (
        <div>
            <header className="header-container">
                <div className="logo">
                    <span className="highlight">Just</span>dial
                </div>
                <nav className="nav-links">
                    <div style={{ color: "b" }}>EN <LiaAngleDownSolid /></div>
                    <a href="#">We are Hiring</a>
                    <a href="#">Investor Relations</a>
                    <a href="#"> <RiMailUnreadLine />Leads</a>
                    <a href="#"> <GiMegaphone /> Advertise</a>
                    <a href="#"> <FaChartLine />
                        Free Listing</a>
                    <LuBellRing /> <button className="login-btn">Login / Sign Up</button>
                </nav>

            </header>
            <div className="flex items-center space-x-2">
                <div className="bg-gray-200 px-4 py-2 rounded-full">
                    <span className="font-bold">Betkuli, Karwar</span>
                    <BiChevronDown className="inline-block ml-2 text-gray-500" />
                </div>
                <input
                    type="text"
                    placeholder="Search in Karwar"
                    className="border rounded-full px-4 py-2 flex-1 text-gray-700 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center space-x-1">
                    <FaMicrophone />
                    <span>Search</span>
                </button>
            </div>

            {/* Right Section */}
            <div>
                <button className="bg-gray-100 px-4 py-2 rounded-lg border">Download App</button>
            </div>
        </div>



    );
};

export default Header;
