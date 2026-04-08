import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

export default function LoginForm({ onSubmit, isLoading }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input 
        label="Email Address" 
        type="email" 
        required 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="you@example.com"
      />
      <Input 
        label="Password" 
        type="password" 
        required 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="••••••••"
      />
      <Button type="submit" className="w-full mt-2" isLoading={isLoading}>
        Sign In
      </Button>
    </form>
  );
}