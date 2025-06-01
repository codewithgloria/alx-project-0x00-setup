import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import PostCard from '../../components/common/PostCard';
import PostModal from '../../components/common/PostModal';

const samplePosts = [
  { id: 1, title: "Post 1", body: "First post", userId: 101 },
  { id: 2, title: "Post 2", body: "Second post", userId: 102 },
];

const PostsPage = () => {
  const [posts, setPosts] = useState(samplePosts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={() => setIsModalOpen(true)}
        >
          Add Post
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddPost={addPost}
        />
      </main>
    </div>
  );
};

export default PostsPage;