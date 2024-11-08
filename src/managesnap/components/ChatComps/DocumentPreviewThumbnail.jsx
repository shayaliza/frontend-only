import React from "react";
import getFileIcon from "./GetFileIcon";
import PreviewOverlay from "./PreviewOverlay";

const DocumentPreviewThumbnail = ({ file, onRemove }) => (
    <div className="relative w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center p-2 group">
      {getFileIcon(file.type)}
      <span className="text-xs text-center truncate w-full">
        {file.name}
      </span>
      <PreviewOverlay onRemove={() => onRemove(file.id)} />
    </div>
  );
  export default DocumentPreviewThumbnail