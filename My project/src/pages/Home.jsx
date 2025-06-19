import React from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card title="Feature 1">
          <p>This is a sample card with some content.</p>
          <Button variant="primary" className="mt-4">Learn More</Button>
        </Card>
        
        <Card title="Feature 2">
          <p>Another card showing the reusable component.</p>
          <Button variant="secondary" className="mt-4">Get Started</Button>
        </Card>
      </div>
      
      <div className="space-x-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
      </div>
    </div>
  );
};

export default Home;