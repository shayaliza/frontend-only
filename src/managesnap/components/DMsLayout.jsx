import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import DMs from "./DMs"

function DMsLayout() {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <div className="fixed top-0 left-0 right-0 h-16 z-50">
        <Header />
      </div>
      <div className="flex flex-grow overflow-hidden pt-16">
        <Sidebar />
        <div className="flex-grow overflow-hidden">
          <DMs/>
        </div>
      </div>
    </div>
  )
}

export default DMsLayout
