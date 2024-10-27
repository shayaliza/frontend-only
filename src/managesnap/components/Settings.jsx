import React, { useState, useEffect, useRef } from 'react';
import { 
  Bell, Moon, Volume2, Lock, Globe, Palette, User, Monitor, 
  ChevronRight, Camera, Mic, Headphones, Keyboard, CloudOff,
  Database, Wifi, Laptop, Shield, MessageCircle, Image,
  UserPlus, Settings, Mail, Phone
} from 'lucide-react';
import img from "../assets/img1.png"

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [notificationSound, setNotificationSound] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [messagePreview, setMessagePreview] = useState(true);
  const [volume, setVolume] = useState(80);

  const sections = [
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'appearance', icon: Palette, label: 'Appearance' },
    { id: 'privacy', icon: Lock, label: 'Privacy & Security' },
    { id: 'audio', icon: Headphones, label: 'Audio & Video' },
    { id: 'messages', icon: MessageCircle, label: 'Messages' },
    { id: 'language', icon: Globe, label: 'Language & Region' },
    { id: 'storage', icon: Database, label: 'Storage & Data' },
    { id: 'devices', icon: Laptop, label: 'Connected Devices' },
    { id: 'keyboard', icon: Keyboard, label: 'Keyboard Shortcuts' },
    { id: 'advanced', icon: Settings, label: 'Advanced' },
  ];

  const [isResizingLeft, setIsResizingLeft] = useState(false);
  const [isResizingRight, setIsResizingRight] = useState(false);
  const [dmListWidth, setDmListWidth] = useState(350);
  const [profileSectionWidth, setProfileSectionWidth] = useState(300);
  const [isProfileSectionVisible, setIsProfileSectionVisible] = useState(false);

  const dmListRef = useRef(null);
  const messageSectionRef = useRef(null);
  const profileSectionRef = useRef(null);
  const leftDividerRef = useRef(null);
  const rightDividerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizingLeft) {
        const newWidth = e.clientX - dmListRef.current.getBoundingClientRect().left;
        if (newWidth > 200 && newWidth < 400) {
          setDmListWidth(newWidth);
        }
      } else if (isResizingRight) {
        const containerWidth = messageSectionRef.current.parentElement.offsetWidth;
        const newWidth = containerWidth - e.clientX;
        if (newWidth > 230 && newWidth < 400) {
          setProfileSectionWidth(newWidth);
        }
      }
    };

    const handleMouseUp = () => {
      setIsResizingLeft(false);
      setIsResizingRight(false);
    };

    if (isResizingLeft || isResizingRight) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      document.body.classList.add('selecting-none');
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('selecting-none');
    };
  }, [isResizingLeft, isResizingRight]);

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div className="space-y-8 text-gray-700 dark:text-gray-300">
            <div className="flex items-start space-x-6">
              <div className="relative">
                <img src={img} alt="Profile" className="rounded-full" />
                <button className="absolute bottom-0 right-0 p-2 rounded-full border">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Vignesh</h3>
                <p className="text-gray-600 dark:text-gray-400">Active Status: Online</p>
                <button className="text-blue-600 hover:underline">Edit Profile Picture</button>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-lg font-medium">Personal Information</h4>
              <div className="grid grid-cols-2 gap-6 max-w-2xl">
                <div>
                  <label className="block text-sm font-medium mb-2">Display Name</label>
                  <input type="text" defaultValue="Vignesh" className="w-full p-2 border rounded bg-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Username</label>
                  <input type="text" defaultValue="@vicky" className="w-full p-2 border rounded bg-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" defaultValue="vignesh@gmail.com" className="w-full p-2 border rounded bg-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input type="tel" defaultValue="+1 234 567 8900" className="w-full p-2 border rounded bg-transparent" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Account Settings</h4>
              <div className="space-y-4 max-w-2xl">
                <button className="flex items-center justify-between w-full p-3 border rounded">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5" />
                    <span>Account Security</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-between w-full p-3 border rounded">
                  <div className="flex items-center gap-3">
                    <UserPlus className="w-5 h-5" />
                    <span>Connected Accounts</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-between w-full p-3 border rounded">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>Email Notifications</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Status & Availability</h4>
              <div className="space-y-4 max-w-2xl">
                <select className="w-full p-2 border rounded bg-transparent">
                  <option>Available</option>
                  <option>Away</option>
                  <option>Do Not Disturb</option>
                  <option>Invisible</option>
                </select>
                <textarea 
                  placeholder="Set a custom status message..." 
                  className="w-full p-2 border rounded h-24 bg-transparent"
                ></textarea>
              </div>
            </div>
          </div>
        );

      case 'audio':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Input Devices</h4>
              <div className="space-y-6 max-w-2xl">
                <div>
                  <label className="block mb-2">Microphone</label>
                  <div className="space-y-4">
                    <select className="w-full p-2 border rounded bg-transparent">
                      <option>Built-in Microphone</option>
                      <option>External Microphone</option>
                      <option>Headset Microphone</option>
                    </select>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Input Volume</span>
                        <span>80%</span>
                      </div>
                      <input type="range" className="w-full bg-transparent" defaultValue={80}  />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block mb-2">Camera</label>
                  <div className="space-y-4">
                    <select className="w-full p-2 border rounded bg-transparent">
                      <option>Built-in Webcam</option>
                      <option>External Camera</option>
                    </select>
                    <div className="flex justify-between items-center border rounded p-3">
                      <span>Video Preview</span>
                      <button className="text-blue-600 hover:underline">Test Camera</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Output Devices</h4>
              <div className="space-y-6 max-w-2xl">
                <div>
                  <label className="block mb-2">Speakers</label>
                  <div className="space-y-4">
                    <select className="w-full p-2 border rounded bg-transparent">
                      <option>Built-in Speakers</option>
                      <option>External Speakers</option>
                      <option>Headphones</option>
                    </select>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Output Volume</span>
                        <span>75%</span>
                      </div>
                      <input type="range" className="w-full bg-transparent" defaultValue={75} />
                    </div>
                    <button className="text-blue-600 hover:underline">Test Speakers</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Advanced Settings</h4>
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded bg-transparent" defaultChecked />
                    Echo Cancellation
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded bg-transparent" defaultChecked />
                    Noise Suppression
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded bg-transparent" defaultChecked />
                    Automatic Gain Control
                  </label>
                </div>
              </div>
            </div>
          </div>
        );

      case 'storage':
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Storage Usage</h4>
              <div className="max-w-2xl space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Used Storage</span>
                    <span>2.4 GB of 5 GB</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="w-1/2 h-full bg-blue-600 rounded"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span>Images</span>
                      <Image className="w-4 h-4" />
                    </div>
                    <p className="text-2xl font-semibold">1.2 GB</p>
                  </div>
                  <div className="p-4 border rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span>Documents</span>
                      <Database className="w-4 h-4" />
                    </div>
                    <p className="text-2xl font-semibold">0.8 GB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Data Management</h4>
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    Automatically download media
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded bg-transparent" defaultChecked />
                    Save media to gallery
                  </label>
                </div>
                <button className="flex items-center text-blue-600 hover:underline">
                  Clear Cache
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Offline Access</h4>
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <CloudOff className="w-4 h-4" />
                    Enable offline mode
                  </label>
                  <input type="checkbox" className="rounded bg-transparent" defaultChecked />
                </div>
                <select className="w-full p-2 border rounded">
                  <option>Keep last 30 days</option>
                  <option>Keep last 7 days</option>
                  <option>Keep last 24 hours</option>
                </select>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center text-gray-500 mt-8">
            Select a section from the sidebar
          </div>
        );
    }
  };

  return (
    <div className="flex h-[calc(100vh-56px)] text-gray-700 dark:text-gray-300">
      <div className="w-64"
      ref={dmListRef} 
      style={{ width: `${dmListWidth}px` }}>
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
        <nav className="p-2">
          {sections.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left ${
                activeSection === id
                  ? 'text-blue-600 font-medium'
                  : 'hover:bg-gray-400 hover:text-black'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </nav>
      </div>
      <div
        ref={leftDividerRef}
        className="w-1 bg-gray-600 cursor-col-resize hover:bg-blue-500 transition-colors"
        onMouseDown={() => setIsResizingLeft(true)}
      />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">
              {sections.find(s => s.id === activeSection)?.label}
            </h2>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;