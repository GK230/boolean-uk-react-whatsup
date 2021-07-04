import { Link } from "react-router-dom";

function LoginPage({ users, logIn }) {
  return (
    <div className="main-wrapper login">
      <section className="login-section">
        <h2>Choose your user!</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={"/logged-in"}>
                <button className="user-selection">
                  <img
                    className="avatar"
                    width="50"
                    height="50"
                    src={user.avatar}
                    alt={`${user.firstName} ${user.lastName}`}
                    onClick={() => logIn(user.id)} className="user-selection"
                  />
                  <h3>{`${user.firstName} ${user.lastName}`}</h3>
                </button>
              </Link>
            </li>
          ))}

          <li>
            <button className="user-selection">
              <h3>+ Add a new user</h3>
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default LoginPage;
