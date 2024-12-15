import React from "react";

import {FileIcon} from "lucide-react";
import { FaFilePdf, FaFileWord } from "react-icons/fa6";
const getFileIcon = (fileType) => {
    if (fileType?.includes('pdf')) {
      return (
        <FaFilePdf className="w-8 h-8 text-red-500" />
      );
    } else if (fileType?.includes('doc')) {
      return (
        <FaFileWord className="w-8 h-8 text-blue-500" />
      );
    }
    return <FileIcon className="w-8 h-8 text-gray-500" />;
  };

  export default getFileIcon;