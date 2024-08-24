// public/src/container/MenuComponent.js
import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import './style.css' // Import style.css from the same directory

const MenuComponent = () => {
  return (
    <Menu
      mode="horizontal"
      className="custom-menu"
    >
      <Menu.Item
        key="home"
        icon={<HomeOutlined />}
      >
        Home
      </Menu.Item>
      <Menu.Item
        key="about"
        icon={<UserOutlined />}
      >
        About
      </Menu.Item>
      <Menu.Item
        key="services"
        icon={<AppstoreOutlined />}
      >
        Services
      </Menu.Item>
    </Menu>
  )
}

export default MenuComponent
