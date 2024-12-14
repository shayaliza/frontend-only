import React from 'react'
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

function ChatMoreOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <MoreVertical className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900"
      >
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300">
          View full profile
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300">
          Add to VIP
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300">
          Star conversation
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300">
          Move conversation
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300">
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300">
          Search in conversation
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300">
          Open in new window
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300">
          Hide
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ChatMoreOptions