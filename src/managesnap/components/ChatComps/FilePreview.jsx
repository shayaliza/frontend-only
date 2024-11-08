import ImagePreviewThumbnail from "./ImagePreviewThumbnail";
import DocumentPreviewThumbnail from "./DocumentPreviewThumbnail";

function FilePreview({ file, onRemove }) {
    return (
      <div className="relative group">
        {file.type.startsWith('image/') ? (
          <ImagePreviewThumbnail file={file} onRemove={onRemove} />
        ) : (
          <DocumentPreviewThumbnail file={file} onRemove={onRemove} />
        )}
      </div>
    );
  }
export default FilePreview;