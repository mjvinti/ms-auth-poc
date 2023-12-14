import { useAuth } from 'react-oidc-context';

import logo from './logo.svg';
import './App.css';

function App() {
  const {
    activeNavigator,
    error,
    isAuthenticated,
    isLoading,
    removeUser,
    signinRedirect,
    user
  } = useAuth();

  switch (activeNavigator) {
    case 'signinSilent':
      return <div>Signing you in...</div>;
    case 'signoutRedirect':
      return <div>Signing you out...</div>;
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Opps... {error.message}</div>
  ) : isAuthenticated ? (
    <div>
      <div>Hello {user.profile.sub}</div>
      <button onClick={removeUser}>Log out</button>
    </div>
  ) : (
    <button onClick={signinRedirect}>Log in</button>
  );
}

export default App;
