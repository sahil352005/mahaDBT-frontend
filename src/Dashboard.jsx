import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Function to fetch profile data
  const fetchProfile = async () => {
    try {
      const response = await axios.get('http://localhost:8080/profile', {
        withCredentials: true,
      });
      setUser(response.data.user);
    } catch (err) {
      console.log(err.response ? err.response.data.message : 'Failed to fetch profile');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
    <h1>Dashboard</h1>
    <div>
      {user ? (
        // If user is not null, go to profile section
        <button onClick={() => navigate('/profile')}>Profile</button>
      ) : (
        // If user is null, go to login
        <button onClick={() => navigate('/login')}>Login</button>
      )}
    </div>
  </div>
  )
}

export default Dashboard