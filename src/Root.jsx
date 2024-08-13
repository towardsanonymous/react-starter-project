

import React, { useEffect, useState } from "react";
import { Offline, Online } from "react-detect-offline";
import OfflineComponent from './components/OfflineComponent';
import { Provider } from "react-redux"
import store from "./services/store"

import { WEBSITE_URL } from "./configs/website";
import "./assets/fonts/Simple-Line-Icons.eot"
import "./assets/fonts/Simple-Line-Icons.svg"
import "./assets/fonts/Simple-Line-Icons.ttf"
import "./assets/fonts/Simple-Line-Icons.woff"
import "./assets/fonts/Simple-Line-Icons.woff2"
import "./assets/fonts/Inter/Inter-Thin.ttf"; // 100
import "./assets/fonts/Inter/Inter-ExtraLight.ttf"; // 200
import "./assets/fonts/Inter/Inter-Light.ttf"; // 300
import "./assets/fonts/Inter/Inter-Regular.ttf"; // 400
import "./assets/fonts/Inter/Inter-Medium.ttf"; // 500
import "./assets/fonts/Inter/Inter-SemiBold.ttf"; // 600
import "./assets/fonts/Inter/Inter-Bold.ttf"; // 700
import "./assets/fonts/Inter/Inter-ExtraBold.ttf"; // 800
import "./assets/fonts/Inter/Inter-Black.ttf"; // 900

import 'typeface-fira-sans';
import 'typeface-inter';

const polling = {
  enabled: false,
};


function Root({ children }) {
  return (
    <>
    <Provider store={store}>
   
			<div
				className="height-100 overlay-loading hidden"
				style={{ backgroundColor: "rgba(96, 125, 139, 0.45)" }}
				id="gpsLoadingScreen"
			>
				<div className="spin-load" />
			</div>

      <Online polling={polling}>
      <img className="cart-empty-img hidden" src={WEBSITE_URL + "/assets/img/various/offline.png"} alt="offline" />
      {/* <CheckVersion/> */}
        {children}
      </Online>
      <Offline polling={polling}>
        <OfflineComponent />
      </Offline>
      </Provider>
    </>
  )
}


// serviceWorker.register();
export default (Root)