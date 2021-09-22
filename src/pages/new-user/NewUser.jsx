import './NewUser.css';

function NewUser() {
  return (
    <div className="new-user">
      <h1 className="new-user-title">New User</h1>
      <form className="new-user-form">
        <div className="new-user-item">
          <label>Username</label>
          <input
            className="new-user-item--input"
            type="text"
            placeholder="Dede"
          />
        </div>
        <div className="new-user-item">
          <label>Full Name</label>
          <input
            className="new-user-item--input"
            type="text"
            placeholder="MedBen"
          />
        </div>
        <div className="new-user-item">
          <label>Email</label>
          <input
            className="new-user-item--input"
            type="email"
            placeholder="dede@gmail.com"
          />
        </div>
        <div className="new-user-item">
          <label>Password</label>
          <input
            className="new-user-item--input"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="new-user-item">
          <label>Phone</label>
          <input
            className="new-user-item--input"
            type="text"
            placeholder="+1 234 560 09"
          />
        </div>
        <div className="new-user-item">
          <label>Address</label>
          <input
            className="new-user-item--input"
            type="text"
            placeholder="Medea | DZ"
          />
        </div>
        <div className="new-user-item">
          <label>Gender</label>
          <div className="new-user-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="new-user-item">
          <label>Active</label>
          <select className="new-user-select" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
      <button className="new-user-btn">Create</button>
    </div>
  );
}

export default NewUser;
