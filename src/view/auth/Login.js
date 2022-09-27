import React from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import SyncLoader from "react-spinners/SyncLoader";
import fire from "../../config/config";
import { useAuth } from "../../hooks/useAuth";
import "./AuthForm.css";

function Login() {
  const { user, login } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const handleClick = () => {
    setLoading(true);
    if (values.email == "") {
      alert("Enter your email");
    } else if (values.password == "") {
      alert("Enter your new password");
    } else {
      fire
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then((e) => {
          fire
            .firestore()
            .collection("users")
            .where("userId", "==", e.user.uid)
            .onSnapshot((query) => {
              if (query.size === 0) {
                alert("No User Found");
                setLoading(false);
              } else {
                query.forEach((doc) => {
                  login({
                    userId: doc.data().userId,
                    authToken: doc.data().token,
                  });
                  setLoading(false);
                });
              }
            });
        })
        .catch((e) => {
          alert(e.message);
          setLoading(false);
        });
    }
  };
  return (
    <div className="main">
      <h2>LOGIN</h2>
      <div className="form">
        <div className="form-col">
          <label>Email</label>
          <input
            value={values.email}
            onChange={(e) =>
              setValues({
                ...values,
                email: e.target.value,
              })
            }
            type="email"
            placeholder="Enter your registered email address"
          />
        </div>
        <div className="form-col">
          <label>Password</label>
          <input
            value={values.password}
            onChange={(e) =>
              setValues({
                ...values,
                password: e.target.value,
              })
            }
            type="password"
            placeholder="Enter password"
          />
        </div>
        <div className="form-col">
          <button onClick={handleClick}>
            {!loading && "LOGIN"}
            <SyncLoader color="#ffffff" loading={loading} size={5} />
          </button>
        </div>
      </div>
      Create a new aacount?<Link to="/signup">Signup</Link>
    </div>
  );
}

export default Login;
