// src/components/SignupSignin/SignupSigninComponent.js
import React, { useState } from 'react';
import Input from '../Input';
import "./styles.css";
import Button from '../Button';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from '../../firebase';
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';

function SignupSigninComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loginForm, setLoginForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function signupWithEmail() {
        setLoading(true);
        if (name !== "" && email !== "" && password !== "" && confirmPassword !== "") {
            if (password === confirmPassword) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        toast.success("User Created");
                        setLoading(false);
                        setName("");
                        setEmail("");
                        setPassword("");
                        setConfirmPassword("");
                        createDoc(user);
                        navigate("/dashboard");
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        toast.error(errorMessage);
                        setLoading(false);
                    });
            } else {
                toast.error("Password and Confirm Password Don't Match");
                setLoading(false);
            }
        } else {
            toast.error("All fields required");
            setLoading(false);
        }
    }

    async function createDoc(user) {
        setLoading(true);
        if (!user) return;

        const userRef = doc(db, "users", user.uid);
        const userData = await getDoc(userRef);

        if (!userData.exists()) {
            try {
                await setDoc(doc(db, "users", user.uid), {
                    name: user.displayName ? user.displayName : name,
                    email: user.email,
                    photoUrl: user.photoURL ? user.photoURL : "",
                    createdAt: user.metadata.creationTime,
                });
                toast.success("Doc Created");
                setLoading(false);
            } catch (e) {
                toast.error(e.message);
                setLoading(false);
            }
        } else {
           // toast.error("Doc already exists");
            setLoading(false);
        }
    }

    function loginWithEmail() {
        setLoading(true);
        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    toast.success("User Logged In");
                    setLoading(false);
                    navigate("/dashboard");
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    toast.error(errorMessage);
                    setLoading(false);
                });
        } else {
            toast.error("All fields required");
            setLoading(false);
        }
    }

    function loginWithGoogle() {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                toast.success("User Logged In with Google");
                setLoading(false);
                createDoc(user);
                navigate("/dashboard");
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
                setLoading(false);
            });
    }

    return (
        <>
            {loginForm ? (
                <div className="signup-wrapper">
                    <h2 className='title'>
                        Login to <span style={{ color: "var(--theme)" }}>FinTrack.</span>
                    </h2>
                    <form>
                        <Input 
                            type="email" 
                            label={"Email"} 
                            state={email} 
                            setState={setEmail} 
                            placeholder={"Enter your email id"} 
                        />
                        <Input 
                            type="password" 
                            label={"Password"} 
                            state={password} 
                            setState={setPassword} 
                            placeholder={"Enter your password"} 
                        />
                        <Button 
                            disabled={loading}
                            text={loading ? "Loading..." : "Login Using Email and Password"} 
                            onClick={loginWithEmail} 
                        />
                        <p className='p-login'>or </p>
                        <Button 
                            text={loading ? "Loading..." : "Login Using Google"} 
                            blue={true} 
                            onClick={loginWithGoogle}
                        />
                        <p className='p-login'>
                            Don't have an account? <span onClick={() => setLoginForm(false)} style={{ color: "var(--theme)", cursor: "pointer" }}>Sign Up</span>
                        </p>
                    </form>
                </div>
            ) : (
                <div className="signup-wrapper">
                    <h2 className='title'>
                        Sign Up on <span style={{ color: "var(--theme)" }}>FinTrack.</span>
                    </h2>
                    <form>
                        <Input 
                            label={"Full Name"} 
                            state={name} 
                            setState={setName} 
                            placeholder={"Enter your full name"} 
                        />
                        <Input 
                            type="email" 
                            label={"Email"} 
                            state={email} 
                            setState={setEmail} 
                            placeholder={"Enter your email id"} 
                        />
                        <Input 
                            type="password" 
                            label={"Password"} 
                            state={password} 
                            setState={setPassword} 
                            placeholder={"Enter your password"} 
                        />
                        <Input 
                            type="password" 
                            label={"Confirm Password"} 
                            state={confirmPassword} 
                            setState={setConfirmPassword} 
                            placeholder={"Confirm your password"} 
                        />
                        <Button 
                            disabled={loading}
                            text={loading ? "Loading..." : "Signup Using Email and Password"} 
                            onClick={signupWithEmail} 
                        />
                        <p className="p-login">or </p>
                        <Button 
                            text={loading ? "Loading..." : "Signup Using Google"} 
                            blue={true} 
                            onClick={loginWithGoogle}
                        />
                        <p className="p-login">
                            Already have an account? <span onClick={() => setLoginForm(true)} style={{ color: "var(--theme)", cursor: "pointer" }}>Login</span>
                        </p>
                    </form>
                </div>
            )}
        </>
    );
}

export default SignupSigninComponent;
