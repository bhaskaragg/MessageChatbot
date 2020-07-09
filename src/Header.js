import React from "react";
import { headerNavLinks } from "./model";
import { IconJobs, IconMessages, IconLearn, IconProfile } from "./icons";

const Header = (props) => {
  const { isOnline, setIsOnline } = props;
  return (
    <header className="header-tab">
      <div className="d-flex d-md-none align-items-center h-100 p-1">
        <div className="header-bar d-flex">
          <img
            className="user-profile-img rounded-circle border dropdown-toggle profile-image-size"
            src="https://jobs.vahan.co/icon_min.jpg"
            alt=""
          />
          <div className="heading-title">Job Finder</div>
        </div>
      </div>
      {!isOnline ? (
        <div className="wrapper-offline">
          <div>
            <button
              className="internet-btn"
              onClick={() => {
                if (navigator.onLine) {
                  setIsOnline(true);
                }
              }}
            >
              Retry
            </button>
          </div>
          <div className="internet-text">No Internet</div>
        </div>
      ) : null}
      <div>
        <div className="d-flex w-100 h-100 overflow-auto">
          {headerNavLinks.map((item) => {
            return (
              <div className="header-nav">
                <div className="header-nav-item">
                  <span className="p-top-16">
                    {item === "CHAT" ? (
                      <IconMessages />
                    ) : item === "MY JOBS" ? (
                      <IconJobs />
                    ) : item === "PROFILE" ? (
                      <IconProfile />
                    ) : (
                      <IconLearn />
                    )}
                  </span>
                  <div className="p-bottom-12">{item}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
