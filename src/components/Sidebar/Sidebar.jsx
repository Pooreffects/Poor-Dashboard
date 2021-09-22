import './Sidebar.css';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  ChatBubble,
  DynamicFeed,
  Mail,
  PeopleAlt,
  Storefront,
  AttachMoney,
  Timelapse,
  BugReport,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-container--menu">
          <h3 className="menu-title">Dashboard</h3>
          <ul className="menu-list">
            <Link to="/" className="link">
              <li className="menu-list--item">
                <LineStyle fontSize="small" className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="menu-list--item">
              <Timeline fontSize="small" className="sidebarIcon" />
              Analytics
            </li>
            <li className="menu-list--item">
              <TrendingUp fontSize="small" className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-container--menu">
          <h3 className="menu-title">Quick Menu</h3>
          <ul className="menu-list">
            <Link to="/users" className="link">
              <li className="menu-list--item">
                <PeopleAlt fontSize="small" className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="menu-list--item">
                <Storefront fontSize="small" className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="menu-list--item">
              <AttachMoney fontSize="small" className="sidebarIcon" />
              Transactions
            </li>
            <li className="menu-list--item">
              <Timelapse fontSize="small" className="sidebarIcon" />
              Deadline
            </li>
            <li className="menu-list--item">
              <BugReport fontSize="small" className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-container--menu">
          <h3 className="menu-title">Notifications</h3>
          <ul className="menu-list">
            <li className="menu-list--item">
              <Mail fontSize="small" className="sidebarIcon" />
              Mail
            </li>
            <li className="menu-list--item">
              <DynamicFeed fontSize="small" className="sidebarIcon" />
              Feedback
            </li>
            <li className="menu-list--item">
              <ChatBubble fontSize="small" className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
