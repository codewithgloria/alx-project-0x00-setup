import React from 'react';
import Header from '../components/layout/Header';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function Landing() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      <section className="container mx-auto p-6">
        <h1 className="text-xl font-light mb-6 text-center">Landing Page</h1>

        <div className="flex gap-4 justify-center mb-8">
          <Button title="Small Rounded" shape="rounded-sm" />
          <Button title="Medium Rounded" shape="rounded-md" />
          <Button title="Large Rounded" shape="rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}