// public/src/container/TabsComponent.js
import { Menu, Tabs } from 'antd'
import React from 'react'
import CardsComponent from './CardsComponent' // Import the CardsComponent
import './tabs.css' // Import tab-specific styles

const { TabPane } = Tabs

const sideMenu = (
  <Menu
    mode="inline"
    className="tab-side-menu"
  >
    <Menu.Item key="1">Menu Item 1</Menu.Item>
    <Menu.Item key="2">Menu Item 2</Menu.Item>
    <Menu.Item key="3">Menu Item 3</Menu.Item>
    {/* Add more menu items as needed */}
  </Menu>
)

const TabsComponent = () => {
  return (
    <div className="tabs-container">
      <div className="tabs-header-menu">
        {/* Header Menu */}
        <Menu
          mode="horizontal"
          className="header-menu"
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </div>
      <div className="tabs-body">
        <div className="tabs-side-menu">{sideMenu}</div>
        <div className="tabs-main-content">
          <Tabs defaultActiveKey="1">
            <TabPane
              tab="Tab 1"
              key="1"
            >
              <div className="tab-content">
                <div className="tab-main-content">
                  <CardsComponent /> {/* Render the CardsComponent here */}
                </div>
              </div>
            </TabPane>
            <TabPane
              tab="Tab 2"
              key="2"
            >
              <div className="tab-content">
                <div className="tab-main-content">
                  <CardsComponent /> {/* Render the CardsComponent here */}
                </div>
              </div>
            </TabPane>
            <TabPane
              tab="Tab 3"
              key="3"
            >
              <div className="tab-content">
                <div className="tab-main-content">
                  <CardsComponent /> {/* Render the CardsComponent here */}
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <div className="school-name">SCHOOL NAME</div>
    </div>
  )
}

export default TabsComponent
