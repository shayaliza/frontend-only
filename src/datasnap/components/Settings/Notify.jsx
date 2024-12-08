import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

function NotificationSettings() {
  const [pushNotifications, setPushNotifications] = useState(false);
  const [privateMessages, setPrivateMessages] = useState(true);
  const [chatMessages, setChatMessages] = useState(true);
  const [chatRequests, setChatRequests] = useState(true);
  const [mentions, setMentions] = useState(true);
  const [postComments, setPostComments] = useState(true);
  const [commentReplies, setCommentReplies] = useState(true);
  const [postUpvotes, setPostUpvotes] = useState(true);
  const [commentUpvotes, setCommentUpvotes] = useState(true);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-bold mb-4">General</h2>
        <div className="flex justify-between items-center">
          <p>Community notifications</p>
          <button>
            <span className="text-gray-400">&gt;</span>
          </button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p>Push Notifications</p>
          <ToggleSwitch
            isOn={pushNotifications}
            handleToggle={() => setPushNotifications((prev) => !prev)}
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Messages</h2>
        {[
          { label: "Private messages", state: privateMessages, setState: setPrivateMessages },
          { label: "Chat messages", state: chatMessages, setState: setChatMessages },
          { label: "Chat requests", state: chatRequests, setState: setChatRequests },
        ].map(({ label, state, setState }, index) => (
          <div className="flex justify-between items-center mt-4" key={index}>
            <p>{label}</p>
            <ToggleSwitch isOn={state} handleToggle={() => setState((prev) => !prev)} />
          </div>
        ))}
        <div className="flex justify-between items-center mt-4">
          <div>
            <p>Mark all as raed</p>
            <p className="text-xs text-gray-600">Mark all conversations and invites as read</p>
          </div>
          <button className="px-4 py-2 rounded-full border bg-gray-600 hover:bg-gray-500">Mark as read</button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Activity</h2>
        {[
          { label: "Mentions of u/username", state: mentions, setState: setMentions },
          { label: "Comments on your posts", state: postComments, setState: setPostComments },
          { label: "Replies to your comments", state: commentReplies, setState: setCommentReplies },
          { label: "Upvotes on your posts", state: postUpvotes, setState: setPostUpvotes },
          { label: "Upvotes on your comments", state: commentUpvotes, setState: setCommentUpvotes },
        ].map(({ label, state, setState }, index) => (
          <div className="flex justify-between items-center mt-4" key={index}>
            <p>{label}</p>
            <ToggleSwitch isOn={state} handleToggle={() => setState((prev) => !prev)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationSettings;
