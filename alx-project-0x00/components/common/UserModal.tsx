import React from 'react';
import { UserModalProps } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const handleAdd = () => {
    const newUser = {
      id: Date.now(),
      name: "New User",
      username: "new_user",
      email: "new@user.com",
      address: {
        city: "New City",
        zipcode: "12345"
      },
      phone: "123-456-7890",
      website: "example.com",
      company: {
        name: "New Company"
      }
    };
    onAddUser(newUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Add New User</h2>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">X</button>
        <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2 rounded">
          Add User
        </button>
      </div>
    </div>
  );
};

export default UserModal;