import React, { useState } from 'react'
import { Tab, Nav } from 'react-bootstrap'

export default function App() {
  const [activeTab, setActiveTab] = useState('tab1')

  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey)
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
        <Nav variant="tabs" className="mb-4">
          <Nav.Item>
            <Nav.Link eventKey="tab1">Tab 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tab2">Tab 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tab3">Tab 3</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="tab1">
            <p>This is the content of Tab 1.</p>
          </Tab.Pane>
          <Tab.Pane eventKey="tab2">
            <p>This is the content of Tab 2.</p>
          </Tab.Pane>
          <Tab.Pane eventKey="tab3">
            <p>This is the content of Tab 3.</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  )
}
