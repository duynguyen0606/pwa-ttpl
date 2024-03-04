import CommentModel from '@/src/models/Comment';
import CommentItem from './CommentItem';
import CreateComment from './CreateComment';

function CommentCom({ commentList }: { commentList: Array<CommentModel> }) {
  return (
    <div className='py-4 w-full'>
      {commentList.map((item) => (
        <CommentItem key={item.created_at} data={item} />
      ))}
    </div>
  );
}

export default CommentCom;
