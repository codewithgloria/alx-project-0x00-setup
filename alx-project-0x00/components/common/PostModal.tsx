import React from 'react';
import { PostModalProps } from '@/interfaces';

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onAddPost }) => {
  const handleAdd = () => {
    const newPost = {
      id: Date.now(),
      title: "New Post",
      body: "This is a new post"
    };
    onAddPost(newPost);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Add New Post</h2>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">X</button>
        <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2 rounded">
          Add Post
        </button>
      </div>
    </div>
  );
};

export default PostModal;