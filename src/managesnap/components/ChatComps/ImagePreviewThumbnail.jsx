import PreviewOverlay from "./PreviewOverlay";

const ImagePreviewThumbnail = ({ file, onRemove }) => (
    <div className="relative w-24 h-24">
      <img
        src={file.preview}
        alt={file.name}
        className="w-full h-full object-cover rounded-lg"
      />
      <PreviewOverlay onRemove={() => onRemove(file.id)} />
    </div>
  );
export default ImagePreviewThumbnail