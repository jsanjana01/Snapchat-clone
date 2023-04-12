import React, { useEffect } from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import Preview from "./Preview";
import Chats from "./Chats";
import ChatView from "./ChatView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/appSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { login, logout } from "./features/appSlice";
import snapchat from "./snapchat.png";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  });

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img className="app_logo" src={snapchat} alt="" />
            <div className="app_body">
              <div className="app_bodyBG">
                <Routes>
                  <Route
                    exact
                    path="/chats/view"
                    element={<ChatView />}
                  ></Route>
                  <Route exact path="/chats" element={<Chats />}></Route>
                  <Route exact path="/preview" element={<Preview />}></Route>
                  <Route exact path="/" element={<WebcamCapture />}></Route>
                </Routes>
              </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
