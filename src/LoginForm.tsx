import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// Define the interface for form data
interface LoginForm {
  email: string;
  password: string;
}

// LoginPage component
const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({email: '', password: ''});
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  // Password validation function
  const validatePassword = (password: string): boolean => {
    // Check if password meets requirements (minimum 8 characters and at least one special character)
    const passwordRegex = /^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters and include a special character.');
      return false;
    }
    setPasswordError(null);
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate the password before submitting
    if (!validatePassword(formData.password)) {
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    try {
      // Replace with your actual login API call
      console.log('Logging in with', formData);
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert('Login successful!');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <form onSubmit={handleSubmit} style={{maxWidth: '400px', width: '100%'}}>
        <h2>Login</h2>
        <div style={{marginBottom: '1rem'}}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{width: '100%', padding: '0.5rem', marginTop: '0.5rem'}}
          />
        </div>
        <div style={{marginBottom: '1rem'}}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{width: '100%', padding: '0.5rem', marginTop: '0.5rem'}}
          />
          {passwordError && <p style={{color: 'red'}}>{passwordError}</p>}
        </div>
        <button type="submit" disabled={isSubmitting} style={{width: '100%', padding: '0.5rem'}}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
        <div style={{marginTop: '1rem', textAlign: 'center'}}>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;