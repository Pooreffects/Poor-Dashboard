import './User.css';
import {
  CalendarToday,
  GitHub,
  LocationOn,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  Twitter,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function User() {
  return (
    <div className="user">
      <div className="user-title--container">
        <h1 className="user-title">Edit User</h1>
        <Link to="/new-user">
          <button className="user-btn--add">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="user-show--top">
            <img
              src="https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              alt="user avatar"
              className="user-show--img"
            />
            <div className="user-show--job">
              <span className="user-show--username">Sarah Allend</span>
              <span className="user-show--role">Frontend Developer</span>
            </div>
          </div>
          <div className="user-show--bottom">
            <span className="user-show-info">Account Details</span>
            <div className="user-show--details">
              <PermIdentity
                fontSize="small"
                className="user-show-details--icon"
              />
              <span className="user-show-details--title">_sarahcodes</span>
            </div>
            <div className="user-show--details">
              <CalendarToday
                fontSize="small"
                className="user-show-details--icon"
              />
              <span className="user-show-details--title">12/04/1998</span>
            </div>
            <span className="user-show-info">Contact Details</span>
            <div className="user-show--details">
              <PhoneAndroid
                fontSize="small"
                className="user-show-details--icon"
              />
              <span className="user-show-details--title">+1 123 400 59</span>
            </div>
            <div className="user-show--details">
              <MailOutline
                fontSize="small"
                className="user-show-details--icon"
              />
              <span className="user-show-details--title">
                sarah_allend@gmail.com
              </span>
            </div>
            <div className="user-show--details">
              <LocationOn
                fontSize="small"
                className="user-show-details--icon"
              />
              <span className="user-show-details--title">Seattle | USA</span>
            </div>
            <span className="user-show-info">Social Links</span>
            <div className="user-show--details">
              <Twitter fontSize="small" className="user-show-details--icon" />
              <span className="user-show-details--title">@sarah_tweets</span>
            </div>
            <div className="user-show--details">
              <GitHub fontSize="small" className="user-show-details--icon" />
              <span className="user-show-details--title">sarah_dev</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="_sarahcodes"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Sarah Allend"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="sarah_allend@gmail.com"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 400 59"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="user-update-input"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                  src="https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                  alt="user avatar"
                  className="user-update--img"
                />
                <label htmlFor="file">
                  <Publish className="update-icon" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="user-update-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
