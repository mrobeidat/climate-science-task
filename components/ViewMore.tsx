import Link from "next/link";
import React, { useState } from "react";


const ViewMore = ({ children }: any) => {
    const Logo = children;
    const [isViewMore, setIsViewMore] = useState(true);
    const toggleViewMore = () => {
        setIsViewMore(!isViewMore);
    };
    return (
        <div className="logo">
            {isViewMore ? Logo.slice(0, 1) : Logo}
            <button onClick={toggleViewMore} className="show-or-hide">
                {isViewMore ? "...View more" : " View less"}
            </button>
          
        </div>
    );
};
export default function  Content  () {
    return (
        <div className="container">
          
                <ViewMore className="viewmore-btn">
                    {Array(4).fill('/logo.svg').map((logo, i) => (<img src={logo} alt="logo" key={i} />))}
                    <p> Campaign partners</p>
                    <hr />
                    {Array(12).fill('/logo.svg').map((logo, i) => (<img src={logo} alt="logo" key={i} />))}
                    <p> Media partners</p>
                    {Array(12).fill('/logo.svg').map((logo, i) => (<img src={logo} alt="logo" key={i} />))}
                    <hr />
                    <p> Education partners</p>
                    {Array(12).fill('/logo.svg').map((logo, i) => (<img src={logo} alt="logo" key={i} />))}
                    <hr />
                    <p> Organisation partners</p>
                    {Array(12).fill('/logo.svg').map((logo, i) => (<img src={logo} alt="logo" key={i} />))}
               <p>Want to become a CSO partner? <Link href='#'>Apply here.</Link></p>
                </ViewMore>

           
        </div>
    );
};

