import React from 'react';
import Card from '@/components/Card';
import Header from '@/components/layout/Header';

export default function Landing() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <section className="container mx-auto p-6">
        <h1 className="text-xl font-light mb-6 text-center">Landing Page</h1><Card />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}