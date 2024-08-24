// public/src/container/CardComponent.js
import { Card } from 'antd'
import React from 'react'
import './cards.css' // Import card-specific styles

const cardStyle = {
  width: '100%', // Make cards take up the full width of the content area
}

const CardComponent = () => {
  return (
    <div className="cards-container">
      <Card
        style={cardStyle}
        title="Card 1"
        bordered={false}
      >
        Content of Card 1
      </Card>
      <Card
        style={cardStyle}
        title="Card 2"
        bordered={false}
      >
        Content of Card 2
      </Card>
      {/* Add more cards as needed */}
    </div>
  )
}

export default CardComponent
