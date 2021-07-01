import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function LoginPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div className="main-wrapper login">
      <section className="login-section">
        <h2>Choose your user!</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/logged-in/${user.id}`}>
                <button className="user-selection">
                  <img
                    className="avatar"
                    width="50"
                    height="50"
                    src={user.avatar}
                    alt={`${user.firstName} ${user.lastName}`}
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
