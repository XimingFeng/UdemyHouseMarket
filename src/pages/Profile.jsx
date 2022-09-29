import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

function Profile() {
  const auth = getAuth();
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);
  return user ? <h1>{user.displayName}</h1> : "Not Logged In";
}

export default Profile;
