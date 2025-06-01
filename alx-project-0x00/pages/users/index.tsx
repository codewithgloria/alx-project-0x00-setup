import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import UserCard from '../../components/common/UserCard';
import UserModal from '../../components/common/UserModal';

const sampleUsers = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    address: {
      city: "New York",
      zipcode: "10001"
    },
    phone: "123-456-7890",
    website: "example.com",
    company: {
      name: "ABC Corp"
    }
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    email: "jane@example.com",
    address: {
      city: "Los Angeles",
      zipcode: "90001"
    },
    phone: "987-654-3210",
    website: "jane.dev",
    company: {
      name: "XYZ Inc."
    }
  }
];

const UsersPage = () => {
  const [users, setUsers] = useState(sampleUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={() => setIsModalOpen(true)}
        >
          Add User
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
        <UserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddUser={addUser}
        />
      </main>
    </div>
  );
};

export default UsersPage;