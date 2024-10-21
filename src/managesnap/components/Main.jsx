import React from 'react';
import Routing from './Mobileview/Routing';
import DesktopRoutes from './DesktopRoutes';

function Main() {
 
  return (
    <>
    <div className="hidden lg:block">
    <DesktopRoutes/>
    </div>
    <div className="lg:hidden min-h-screen overflow-hidden">
      <Routing/>
    </div>
    </>
  );
}

export default Main;
