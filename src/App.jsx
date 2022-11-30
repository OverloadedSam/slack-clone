import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Loader from './components/Loader';
import Login from './screens/Login';
import Navbar from './components/Navbar';
import Home from './screens/Home';

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loader />;

  return !user ? (
    <Login />
  ) : (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
