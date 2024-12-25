import React, {useState, useEffect} from 'react'
import BottomBar from './BottomBar'
import { Outlet } from 'react-router-dom'

function BBLayout() {
  const [isIOS, setIsIOS] = useState(false);
  
    useEffect(() => {
      const checkIsIOS = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
      };
      setIsIOS(checkIsIOS());
    }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <main className={`flex-grow`}>
        <Outlet />
      </main>
      <div className="h-16">
      <BottomBar />
      </div>
    </div>
  )
}

export default BBLayout