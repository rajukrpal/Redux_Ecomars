import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from './Navbar'
import { Provider } from 'react-redux'
import store from './store/store'

const RootLayout = () => {
  return (
    <div>
      <Provider store={store}>
     <NavbarComponent />
     <main>
        <Outlet />
     </main>
     </Provider>
    </div>
  )
}

export default RootLayout
