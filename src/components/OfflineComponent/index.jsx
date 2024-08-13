import React from "react";
import { WEBSITE_URL } from "../../configs/website";

function OfflineComponent()  {

		return (
		<>
				<div className="bg-white">
					<div className="d-flex justify-content-center mt-100 mb-20">
						<img
							className="offline-mode-img text-center"
							src={WEBSITE_URL + "/assets/img/various/offline.png"}
							alt={"You Are Offline"}
						/>
					</div>
					<h2 className="text-center font-w700 mb-3">{localStorage.getItem("offlineTitleMessage")}</h2>
					<h2 className="text-muted text-center font-size-md">
					Please check your internet connection.
					</h2>
				</div>
				</>
		);
	}


export default OfflineComponent;
