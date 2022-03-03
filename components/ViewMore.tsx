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
            {isViewMore ? Logo?.slice(0, 1) : Logo}
            {' '}
            <br/>
            <button onClick={toggleViewMore} className="show">
                {isViewMore ? "View more" : " View less"}
            </button>
        </div>
    );
};
export default function  Content  () {
    return (
        <>
        <div className="Viewcontainer">
                <ViewMore >
                    {Array(4).fill('/partnerLogo.png').map((logo, i) => (<img src={logo} alt="logo" key={i} />))}
                    <p> Campaign partners</p>
                    <hr />
                    {Array(12).fill('/partnerLogo.png').map((logo, i) => (<img src={logo} alt="logo" key={i} />))}
                    <p> Media partners</p>
                    {Array(12).fill('/partnerLogo.png').map((logo, i) => (<img src={logo} alt="logo" key={i} />))}
                    <hr />
                    <p> Education partners</p>
                    {Array(12).fill('/partnerLogo.png').map((logo, i) => (<img src={logo} alt="logo" key={i} />))}
                    <hr />
                    <p> Organisation partners</p>
                    {Array(12).fill('/partnerLogo.png').map((logo, i) => (<img src={logo} alt="logo" key={i} />))}
               <p>Want to become a CSO partner? <Link href='#'>Apply here.</Link></p>
                </ViewMore>
        </div>
        </>
    );
};

