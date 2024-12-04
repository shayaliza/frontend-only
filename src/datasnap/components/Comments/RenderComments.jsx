import Commentstructure from "./CommentStructure";

const RenderComments = ({ comments, depth = 0, maxDepth, isAllCollapsed, lastReplyRef }) => {
    return comments.map((comment) => (
      <Commentstructure key={comment.id} {...comment} depth={depth} maxDepth={maxDepth} isAllCollapsed={isAllCollapsed}  />
    ));
  };

export default RenderComments;