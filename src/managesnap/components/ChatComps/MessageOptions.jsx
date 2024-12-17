import React,{useState} from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {MoreVertical, Pin, Edit, Copy, Save, Bell, Forward, Reply, Star, Trash} from "lucide-react";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

export default function MessageOptions({ message, onEdit, onPin, isCurrentUser, onDelete, onReply }) {
    return (
      <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger >
        <DropdownMenuContent align="end">
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
          {/* <DropdownMenuItem>
            <Bell className="mr-2 h-4 w-4" /> Read later
          </DropdownMenuItem> */}
          {isCurrentUser && (
            <DropdownMenuItem onClick={() => onEdit(message.id, message.content)}>
              <Edit className="mr-2 h-4 w-4" /> Edit
            </DropdownMenuItem>
          )}
          <DropdownMenuItem onClick={() => onDelete(message.id, message.content)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
          {!isCurrentUser && (
            <DropdownMenuItem>
            <FaRegMessage className="mr-2 h-4 w-4" /> Mark as Unread
          </DropdownMenuItem>
          )}
          <DropdownMenuItem>
            <IoMdAdd className="mr-2 h-4 w-4" /> Add to list
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </>
    );
  }