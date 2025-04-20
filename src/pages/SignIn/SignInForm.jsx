import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the icons
import '../../styles/SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate('/'); 
  };

  // State to toggle visibility of the password
  const [showPassword, setShowPassword] = useState(false);

  // Toggle function for password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center main-container">
      <button className="btn back-btn" onClick={goBack}>
        <img src="/assets/weui_back-outlined.png" alt="" /> Back 
      </button>
      <h2>Welcome</h2>
      <div className='container lg-toggle'>
        <Link to="/signin"><button className='lg'>Log In</button></Link>
        <button className='su'><Link className='lnk' to="/signup">Sign Up</Link></button>
      </div>

      <div className="mb-3 fw-bold small-label w-100">
        <label htmlFor="email" className="form-label d-block text-start">Email Address</label>
        <input 
          type="email" 
          id="email" 
          placeholder="example@gmail.com" 
          className="form-control" 
        />
      </div>

      <div className="mb-3 fw-bold small-label w-100">
        <label htmlFor="password" className="form-label d-block text-start">Password</label>
        <div className="input-group">
          <input 
            type={showPassword ? "text" : "password"} 
            id="password"
            placeholder="password" 
            className="form-control no-right-border" 
          />
          <span className="input-group-text" onClick={togglePassword} style={{cursor: 'pointer'}}>
            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Show/hide icon */}
          </span>
        </div>
      </div>

      <p className='fgp'>Forgot Password?</p>

      <button className="btn w-100 log-btn">Log In</button>
      
      <div className='horizontal-line'>
        <hr /> Or Login With <hr />
      </div>
      
      <div className='fga'>
        <div className='boxes'><img src="/assets/jam_facebook.png" alt="" /></div>
        <div className='boxes'><img src="/assets/devicon_google.png" alt="" /></div>
        <div className='boxes'><img src="/assets/ic_round-apple.png" alt="" /></div>
      </div>
      
      <p className="mt-2 lns">
        Don&apos;t have an account? <Link className='sgnu' to="/signup">Sign Up</Link>
      </p>

    
      
      {/* Back Button */}
    </div>
  );
};

export default SignIn;
