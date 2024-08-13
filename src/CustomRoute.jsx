import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import Loading from './components/helpers/Loading';
import ScrollToTop from './components/helpers/ScrollToTop';


import App from "./components/App";


export const CustomRoute = (props) => {
  return (
    <>
      <span>
        <Router>
        <ScrollToTop />
          <Suspense fallback={<Loading />}>
            <Routes element={<ScrollToTop />} >
              <Route path="/" element={<App />} />
           

            </Routes>
          </Suspense>
        </Router>

      </span>
    </>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CustomRoute)