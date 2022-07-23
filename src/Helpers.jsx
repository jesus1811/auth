import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    FacebookAuthProvider,
  } from "firebase/auth";
  import { useState } from "react";
  import GoogleButton from "react-google-button";
  import { auth } from "./auth/firebase";
  
  const App = () => {
    const [user, setUser] = useState("usuario desconocido");
    const [email, setEmail] = useState("email desconocido");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async () => {
      console.log("hello world");
      const googleAuth = new GoogleAuthProvider();
      await signInWithPopup(auth, googleAuth).then(({ user }) => {
        console.log(user);
        setUser(user.displayName);
        setEmail(user.email);
        setPhoto(user.photoURL);
      });
    };
    const handleChangeCorreo = (e) => {
      setEmail(e.target.value);
      console.log(e.target.value);
    };
    const handleChangePassword = (e) => {
      setPassword(e.target.value);
      console.log(e.target.value);
    };
    const handleClickLogin = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log(error);
      }
    };
    const handleClickLogin2 = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("redirecionando");
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div>
        <h1>Hello world</h1>
        <h1>Bienvenido {user}</h1>
        <h2>Email:{email}</h2>
        <img src={photo} alt="" />
        <input type="text" onChange={handleChangeCorreo} />
        <input type="text" onChange={handleChangePassword} />
        <button onClick={handleClickLogin}>registrar</button>
        <button onClick={handleClickLogin2}>ingresar</button>
        <GoogleButton onClick={handleLogin} />
      </div>
    );
  };
  
  export default App;
  