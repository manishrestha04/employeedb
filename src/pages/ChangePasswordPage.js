import React, { useState } from 'react';
import axios from "axios";
import Button from '../components/Button';

function ChangePasswordPage() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const changePassword = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.put("http://localhost:3001/auth/changepassword", 
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        }, 
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      );

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setSuccess("Password successfully changed.");
        // Reset the form after success
        setOldPassword("");
        setNewPassword("");
      }
    } catch (error) {
      setError("Old Password is Incorrect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginContainer">
      <h1>Change Your Password</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <input 
        type="password" 
        placeholder="Old Password ..." 
        value={oldPassword}
        onChange={(event) => setOldPassword(event.target.value)} 
      />
      <input 
        type="password" 
        placeholder="New Password ..."
        value={newPassword} 
        onChange={(event) => setNewPassword(event.target.value)} 
      />
      <Button onClick={changePassword} disabled={loading}>
        {loading ? "Saving..." : "Save Changes"}
      </Button>
    </div>
  );
}

export default ChangePasswordPage;
