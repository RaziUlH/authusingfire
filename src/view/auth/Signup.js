import React from "react";
import { Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import fire from "../../config/config";
import { useAuth } from "../../hooks/useAuth";

function Signup() {
  const { signup } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const handleClick = () => {
    setLoading(true);

    if (values.name == "") {
      alert("Enter your name");
    } else if (values.number == "") {
      alert("Enter your phone number");
    } else if (values.email == "") {
      alert("Enter your email");
    } else if (values.password == "") {
      alert("Enter your new password");
    } else {
      fire
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((e) =>
          fire
            .firestore()
            .collection("users")
            .doc(e.user.uid)
            .set({
              name: values.name,
              number: values.number,
              email: values.email,
              userId: e.user.uid,
              authToken: e.user.refreshToken,
            })
            .then(() => {
              signup({
                userId: e.user.uid,
                authToken: e.user.refreshToken,
              });
              console.log("FIRESTORE DONE");
              setLoading(false);
            })
            .catch((data) => {
              console.log("Failed", data);
              alert(data.message);
              setLoading(false);
            })
        )
        .catch((e) => console.log(e));
    }
  };

  return (
    <div className="main">
      <h2>SIGNUP</h2>
      <div className="form">
        <div className="form-col">
          <label>Name</label>
          <input
            value={values.name}
            onChange={(e) =>
              setValues({
                ...values,
                name: e.target.value,
              })
            }
            placeholder="Enter your name"
          />
        </div>
        <div className="form-col">
          <label>Phone Number</label>
          <input
            value={values.number}
            onChange={(e) =>
              setValues({
                ...values,
                number: e.target.value,
              })
            }
            type="tel"
            placeholder="Enter your phone number"
          />
        </div>
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
            placeholder="Enter your email address"
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
            placeholder="Create new password"
          />
        </div>
        <div className="form-col">
          <button onClick={handleClick}>
            {!loading && "SIGNUP"}
            <SyncLoader color="#ffffff" loading={loading} size={5} />
          </button>
        </div>
      </div>
      Already have an account?<Link to="/login">Login</Link>
    </div>
  );
}

export default Signup;
