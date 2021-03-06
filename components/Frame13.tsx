import { useEffect, useState } from "react";

export default function Frame13() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        const int: any = setInterval(() => {
            setChecked(!checked);
            console.log(checked);
        }, 8000);
        return () => {
            clearInterval(int);
        }
    });

    return (
        <>
            <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
                              
            className="frame">
                <div  className="container">
                    <p>Which of the below statements
                        <br /> about electricity is not true?
                    </p>
                    <div className={!checked ? "innerDiv" : "inner"}>

                        <div className="choices">
                            <label className="rad-label">
                                <input type="radio" className="rad-input" name="rad" />
                                <div className="rad-design"></div>
                                <div className="rad-text">
                                    Electricity is measured in units called watts
                                </div>
                            </label>

                            <label className="rad-label">
                                <input type="radio" className="rad-input" name="rad" />
                                <div className="rad-design"></div>
                                <div className="rad-text">
                                    Electricity flows at the speed of light
                                </div>
                            </label>

                            <label className="rad-label">
                                <input
                                    type="radio"
                                    className="rad-input"
                                    name="thechecked"
                                    {...(checked && { checked: true })}
                                />
                                <div className="rad-design"></div>
                                <div className="rad-text">
                                    Electricity is a primary energy source
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}