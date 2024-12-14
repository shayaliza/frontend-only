import React,{useState} from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {MoreVertical, Pin, Edit, Copy, Save, Bell, Forward, Reply, Star, Trash} from "lucide-react";
import { Alert } from "@mui/material";
import ForwardMessage from "./ForwardMessage";

export default function MessageOptions({ message, onEdit, onPin, isCurrentUser, onDelete, onReply }) {
  const [isForwardOpen, setIsForwardOpen] = useState(false);
    return (
      <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger >
        <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setIsForwardOpen(true)}>
            <Forward className="mr-2 h-4 w-4" /> Forward
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onReply(message)}>
            <Reply className="mr-2 h-4 w-4" /> Reply
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(message.content)}
          >
            <Copy className="mr-2 h-4 w-4" /> Copy Text
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onPin(message.id)}>
            <Pin className="mr-2 h-4 w-4" /> {message.isPinned ? "Unpin" : "Pin"}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Star className="mr-2 h-4 w-4" /> Star
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell className="mr-2 h-4 w-4" /> Read later
          </DropdownMenuItem>
          {isCurrentUser && (
            <DropdownMenuItem onClick={() => onEdit(message.id, message.content)}>
              <Edit className="mr-2 h-4 w-4" /> Edit
            </DropdownMenuItem>
          )}
          <DropdownMenuItem onClick={() => onDelete(message.id, message.content)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell className="mr-2 h-4 w-4" /> Remind me about this
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ForwardMessage message={message} isOpen={isForwardOpen} onClose={() => setIsForwardOpen(false)} />
      </>
    );
  }