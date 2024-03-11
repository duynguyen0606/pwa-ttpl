import { Typography } from 'antd';
import { Post } from '../common';

function SearchPostResult({ listPost }: { listPost: Array<any> }) {
  return (
    <>
      {listPost && (
        <div>
          <Typography.Title level={4}>Bài viết</Typography.Title>
          {listPost.map((post) => (
            <Post post={post} key={post?.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default SearchPostResult;
