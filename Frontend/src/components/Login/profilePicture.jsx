import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    // Fetch the user's profile data
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/user-profile");
        setProfilePicture(response.data.profilePicture); // Assume backend returns file path
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>My Profile</h1>
      {profilePicture ? (
        <img
          src={`http://localhost:3000${profilePicture}`}
          alt="Profile"
          width="150"
          style={{ borderRadius: "50%" }}
        />
      ) : (
        <p>No profile picture uploaded</p>
      )}
    </div>
  );
};

export default Profile;
