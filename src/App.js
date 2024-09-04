import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Route from './components/Route';
import AcoordionPage from './pages/AcoordionPage';
import DropdownPage from './pages/DropdownPage';
import Buttonpage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import FaEntryPage from './pages/FaEntryPage';
import FaTablePage from './pages/FaTablePage';
import ChangePasswordPage from './pages/ChangePasswordPage';


import { AuthContext } from './context/Authcontext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  let navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/auth/auth', {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    })
    .then((response) => {
      if (response.data.error) {
        setAuthState({ ...authState, status: false });
      } else {
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
      }
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
    navigate("login");

    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <div className="container mx-auto grid grid-cols-8 gap-4 w-full">
        <Sidebar />
        <div className="col-span-5  w-full">
          {/* Logout button and welcome message fixed to top right */}
          {authState.status && (
            <div className="absolute top-0 right-0 flex items-center space-x-4 p-4">
              <h1 className="text-gray-800">Welcome {authState.username}!</h1>
              <button onClick={logout} className="bg-blue-500 text-white p-2 rounded">
                Logout
              </button>
            </div>
          )}
          
          {/* Routes */}
          <Route path="/accordion">
            <AcoordionPage />
          </Route>
          <Route path="/dropdown">
            <DropdownPage /> 
          </Route>
          <Route path="/buttons">
            <Buttonpage />
          </Route>
          <Route path="/modal">
            <ModalPage />
          </Route>
          <Route path="/table">
            <TablePage />
          </Route>
          <Route path="/counter">
            <CounterPage initialCount={100} />
          </Route>
          <Route path="/faentry">
            <FaEntryPage />
          </Route>
          <Route path="/fatable">
            <FaTablePage />
          </Route>
          <Route path="/changepassword">
            <ChangePasswordPage />
          </Route>
          {!authState.status && (
            <>
              <Route path="/">
                <RegisterPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
            </>
          )}
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
