// public/src/App.js
import React from 'react'
import MenuComponent from './container/MenuComponent' // Adjust path to MenuComponent
import TabsComponent from './container/TabsComponent' // Adjust path to TabsComponent
import './container/style.css' // Import style.css from the container directory

const App = () => {
  return (
    <div className="app-container">
      <MenuComponent />
      <TabsComponent />
    </div>
  )
}

export default App
