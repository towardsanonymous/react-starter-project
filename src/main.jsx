import React from 'react'
import ReactDOM from 'react-dom/client'
import CustomRoute from './CustomRoute.jsx'
import '../src/assets/css/main.css'
import '../src/assets/css/custom.css'
import '../src/assets/css/fonts.css'
// import '../src/assets/css/delivery-app-light.css'
import Root from './Root.jsx'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'
import { SnackbarProvider } from 'notistack'
import jQuery from 'jquery';


// Add all solid icons to the library
library.add(fab, fas, far);

// This line is necessary for icon styles to work properly
dom.watch();
window.$ = window.jQuery = jQuery;

ReactDOM.createRoot(document.getElementById('root')).render(

  <Root>
    <SnackbarProvider autoHideDuration={2000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <CustomRoute />
    </SnackbarProvider>
  </Root>

)