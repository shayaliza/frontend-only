import React from 'react'
import BottomBar from './BottomBar'
import { Outlet } from 'react-router-dom'

function BBLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="h-16">
      <BottomBar />
      </div>
    </div>
  )
}

export default BBLayout