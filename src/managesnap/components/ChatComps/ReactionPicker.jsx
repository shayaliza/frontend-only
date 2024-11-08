import React from "react";

const REACTION_TYPES = [
    { emoji: "👍", label: "Like" },
    { emoji: "😄", label: "Haha" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😄", label: "Haha" },
    { emoji: "😢", label: "Sad" },
  ];
  
export default function ReactionPicker({ onReact }) {
    return (
      <div className="flex gap-1 p-1">
        {REACTION_TYPES.map((reaction) => (
          <button
            key={reaction.label}
            onClick={() => onReact(reaction.emoji)}
            className="hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 rounded-full transition-colors"
            title={reaction.label}
          >
            {reaction.emoji}
          </button>
        ))}
      </div>
    );
  }