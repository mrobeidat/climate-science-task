import { useEffect, useState } from "react";

export default function Frame13() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
			setInterval(() => {
				setChecked(true);
			}, 2500);
			setInterval(() => {
				setChecked(false);
			}, 1500);
		}, [setChecked]);

	return (
		<>
			<div id="frame13" className="container">
				<p>
					Which of the below statements
					<br /> about electricity is not true?
				</p>
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
							{...checked && { checked: true }}
						/>
						<div className="rad-design"></div>
						<div className="rad-text">
							Electricity is a primary energy source
						</div>
					</label>
				</div>
			</div>
		</>
	);
}