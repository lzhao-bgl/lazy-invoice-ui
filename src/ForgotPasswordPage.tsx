import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);

  const handleForgotPassword = async () => {
    try {
      await Auth.forgotPassword(email);
      setStep(2);
    } catch (err) {
      console.error('Error requesting password reset:', err);
    }
  };

  const handleResetPassword = async () => {
    try {
      await Auth.forgotPasswordSubmit(email, code, newPassword);
      alert('Password reset successful!');
      setStep(1);
    } catch (err) {
      console.error('Error resetting password:', err);
    }
  };

  return (
    <div>
      {step === 1 && (
      <div>
        <h2>Forgot Password</h2>
  <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  />
  <button onClick={handleForgotPassword}>Request Code</button>
  </div>
)}
  {step === 2 && (
    <div>
      <h2>Reset Password</h2>
  <input
    type="text"
    placeholder="Enter code"
    value={code}
    onChange={(e) => setCode(e.target.value)}
    />
    <input
    type="password"
    placeholder="Enter new password"
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
    />
    <button onClick={handleResetPassword}>Reset Password</button>
  </div>
  )}
  </div>
);
};

export default ForgotPasswordPage;
