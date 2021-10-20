import './WidgetS.css';
import { Visibility } from '@mui/icons-material';
function WidgetS() {
  return (
    <div className="widget-s">
      <h3 className="widget-s-title">Newly Joined Users</h3>
      <ul className="widget-s-list">
        <li className="widget-s-list--item">
          <img
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=386&q=80"
            alt="user"
            className="widget-s-img"
          />
          <div className="widget-s-user">
            <span className="widget-s-user--name">Sofi Kamel</span>
            <span className="widget-s-user--job">UI/UX Designer</span>
          </div>
          <button className="widget-s-btn">
            <Visibility className="widget-s-icon" />
            Display
          </button>
        </li>
        <li className="widget-s-list--item">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
            alt="user"
            className="widget-s-img"
          />
          <div className="widget-s-user">
            <span className="widget-s-user--name">John Turner</span>
            <span className="widget-s-user--job">Software Engineer</span>
          </div>
          <button className="widget-s-btn">
            <Visibility className="widget-s-icon" />
            Display
          </button>
        </li>
        <li className="widget-s-list--item">
          <img
            src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=399&q=80"
            alt="user"
            className="widget-s-img"
          />
          <div className="widget-s-user">
            <span className="widget-s-user--name">Eden Forge</span>
            <span className="widget-s-user--job">Product Manager</span>
          </div>
          <button className="widget-s-btn">
            <Visibility className="widget-s-icon" />
            Display
          </button>
        </li>
        <li className="widget-s-list--item">
          <img
            src="https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
            alt="user"
            className="widget-s-img"
          />
          <div className="widget-s-user">
            <span className="widget-s-user--name">Sarah Allend</span>
            <span className="widget-s-user--job">Frontend Developer</span>
          </div>
          <button className="widget-s-btn">
            <Visibility className="widget-s-icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetS;
