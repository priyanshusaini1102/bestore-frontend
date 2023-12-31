// components/LoginForm.tsx
import { Input, Button, Spacer } from '@nextui-org/react';
import { useState } from 'react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    // For example, you can make an API call to authenticate the user
    // For simplicity, let's just show a toast for now
    console.log("hogya handle");
    
  };

  return (
    <div>
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
      <Button onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
