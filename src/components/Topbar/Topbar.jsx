import React from 'react';
import './Topbar.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-container--left">
          <span className="logo">POOR-dash</span>
        </div>
        <div className="topbar-container--right">
          <div className="topbar-container--icons">
            <NotificationsNone />
            <span className="badge">2</span>
          </div>
          <div className="topbar-container--icons">
            <Language />
            <span className="badge">2</span>
          </div>
          <div className="topbar-container--icons">
            <Settings />
          </div>
          <img
            src="https://github.com/pooreffects.png"
            alt="avatar"
            className="topbar-avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
