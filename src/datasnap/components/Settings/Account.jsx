import React from 'react'

function Account() {
  return (
    <div className="space-y-8">
      <h1 className='text-lg font-semibold'>General</h1>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span>Email address</span>
          <button className="flex items-center space-x-6">
            <span className='text-gray-500 dark:text-gray-400 text-sm'>vigneshreddy625@gmail.com</span>
            <span>&gt;</span>
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span>Gender</span>
          <button className="flex items-center">
            <span>&gt;</span>
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span>Location customization</span>
          <button className="flex items-center">
            <span>&gt;</span>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="font-bold">Account authorization</h2>
        <div className="flex justify-between items-center">
          <div>
            <p>Google</p>
            <p className="text-sm">Connect to log in with your Google account</p>
          </div>
          <button className="px-4 py-2 rounded-md border hover:border-2">Disconnect</button>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p>Apple</p>
            <p className="text-sm">Connect to log in with your Apple account</p>
          </div>
          <button className="px-4 py-2 rounded-full border hover:bg-gray-500">Connect</button>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p>Two-factor authentication</p>
            <p className="text-sm">Lost access to your authenticator app?</p>
          </div>
          <button className="flex items-center space-x-2">
            <span>Enable</span>
            <span>&gt;</span>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="font-bold">Subscriptions</h2>
        <div className="flex justify-between items-center">
          <span>Get Premium</span>
          <button className="flex items-center">
            <span>&gt;</span>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="font-bold">Advanced</h2>
        <div className="flex justify-between items-center">
          <span>Delete account</span>
          <button className="flex items-center">
            <span>&gt;</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Account