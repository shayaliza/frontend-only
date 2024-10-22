import { useState } from 'react';
import { Send, Plus, Smile, AtSign, Link, Image, Code, Bold, Italic, Search } from 'lucide-react';
import { useTheme } from '../../DarkMode/ThemeProvider';

const DirectMessageInterface = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const {theme} = useTheme();

  const users = [
    { id: 1, name: 'Kunal Dugar', timestamp: 'September 4th', status: 'joined Slack — take a second to say hello.' },
    { id: 2, name: 'Techsnap', timestamp: 'August 14th', status: 'testpro.html' },
    { id: 3, name: 'shayaliza', timestamp: 'July 31st', status: 'joined Slack — take a second to say hello.' },
    { id: 4, name: 'Ankit', timestamp: 'July 31st', status: 'joined Slack — take a second to say hello.' }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-[calc(100vh-56px)] text-gray-700 dark:text-gray-300">
      <div className="w-1/3 border-r">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-3.5" size={16} />
            <input
              type="text"
              placeholder="Find a DM"
              className={`w-full pl-10 p-2 border rounded-full focus:outline-none ${theme == "dark" ? "bg-black" : "bg-white"}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-y-auto p-2">
          {filteredUsers.map(user => (
            <div
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className="p-2 cursor-pointer"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300" />
                <div className="ml-2">
                  <div className="text-sm font-medium">{user.name}</div>
                  <div className="text-xs">{user.status}</div>
                </div>
                <div className="ml-auto text-xs">{user.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        {selectedUser ? (
          <div className="h-full flex flex-col">
            <div className="p-4 border-b">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div className="ml-3">
                  <div className="font-medium">{selectedUser.name}</div>
                  <div className="text-sm">Active</div>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
            </div>

            <div className="p-4 border-t">
              <div className="flex items-end border rounded-lg">
                <div className="flex-1 p-2">
                  <div className="flex items-center gap-2 mb-2">
                    <button className="p-1 rounded"><Bold size={16} /></button>
                    <button className="p-1 rounded"><Italic size={16} /></button>
                    <button className="p-1 rounded"><Link size={16} /></button>
                    <button className="p-1 rounded"><Code size={16} /></button>
                  </div>
                  <input
                    type="text"
                    placeholder="Message"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <div className="flex items-center p-2 gap-2">
                  <button className="p-1 rounded"><Plus size={16} /></button>
                  <button className="p-1 rounded"><Smile size={16} /></button>
                  <button className="p-1 rounded"><AtSign size={16} /></button>
                  <button className="p-1 rounded"><Image size={16} /></button>
                  <button className="p-1 rounded"><Send size={16} /></button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default DirectMessageInterface;
