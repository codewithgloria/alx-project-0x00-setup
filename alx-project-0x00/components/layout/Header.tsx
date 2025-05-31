import Link from 'next/link';
import Pill from '../Pill';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">ALX Airbnb Clone</div>
        <ul className="flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/posts">Posts</Link></li>
          <li><Link href="/users">Users</Link></li>
        </ul>
      </nav>
    </header>
  );
}