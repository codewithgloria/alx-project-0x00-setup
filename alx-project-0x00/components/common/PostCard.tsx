import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<{ post: PostProps }> = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p>{post.body}</p>
      <div className="mt-2 text-sm text-gray-600">
        <p>User ID: {post.userId}</p>
        <p>Post ID: {post.id}</p>
      </div>
    </div>
  );
};

export default PostCard;