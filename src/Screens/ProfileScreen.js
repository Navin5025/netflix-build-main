import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profileimg"
          />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <p>Plans (Current Plan: premium)</p>
            <div className="profileScreen__plans">
              <div className="profileScreen__plans">
                <div className="profile1080">
                  <h2>Subscribe</h2>
                  <button>Subscribe</button>
                </div>
                <div className="profile720"></div>
                <div className="profile480"></div>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
