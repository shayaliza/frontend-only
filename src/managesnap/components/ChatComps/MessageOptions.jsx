import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {MoreVertical, Pin, Edit, Copy, Save, Bell} from "lucide-react";
import { Alert } from "@mui/material";

export default function MessageOptions({ message, onEdit, onPin, isCurrentUser }) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {isCurrentUser && (
            <DropdownMenuItem onClick={() => onEdit(message.id, message.content)}>
              <Edit className="mr-2 h-4 w-4" /> Edit
            </DropdownMenuItem>
          )}
          <DropdownMenuItem onClick={() => onPin(message.id)}>
            <Pin className="mr-2 h-4 w-4" /> {message.isPinned ? "Unpin" : "Pin"}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(message.content)}
          >
            <Copy className="mr-2 h-4 w-4" /> Copy Text
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell className="mr-2 h-4 w-4" /> Remind me later
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Save className="mr-2 h-4 w-4" /> Save for later
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }