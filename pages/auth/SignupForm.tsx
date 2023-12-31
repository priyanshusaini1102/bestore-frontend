// components/SignupForm.tsx
import { Input, Button, Spacer } from '@nextui-org/react';
import { useState } from 'react';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add your signup logic here
    // For simplicity, let's just show a toast for now
    console.log("handle signup");
    
  };

  return (
    <div className="">
      <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        width="100%"
      />
      <Spacer y={1} />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        width="100%"
      />
      <Spacer y={2} />
      <Button onClick={handleSignup}>
        Sign Up
      </Button>
    </div>
  );
};

export default SignupForm;
