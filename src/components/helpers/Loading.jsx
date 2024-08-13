import React, { Component } from "react";
import { WEBSITE_URL } from "../../configs/website";

function Loading() {

		return (
			<>
			{localStorage.getItem("useSimpleSpinner") === "true" ? (
					<div className="height-100 overlay-loading ongoing-payment-spin">
						<div className="spin-load" />
					</div>
				) : (
					<div className="height-100 overlay-loading">
						<div>
							<img src={WEBSITE_URL + "/assets/img/loading-food.gif"} alt={localStorage.getItem("pleaseWaitText")} />
						</div>
					</div>
				)}
			</>
		);
	
}

export default Loading;
