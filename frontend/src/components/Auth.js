import React, { useState } from 'react';
import firebase from './firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Frontpage from './frontpage';
const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate= useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            // Handle login logic
            try {
                const user = await firebase.auth().signInWithEmailAndPassword(email, password);
                if (user) {
                    alert("Login Successful");
                    navigate('/Frontpage')
                    setEmail([])
                    setPassword([])
                }
            } catch (error) {
                alert('This is not Valid Email or Valid Password');
                setEmail([])
                setPassword([])
            }
        } else {
            // Handle sign-up logic
            if (password === confirmPassword) {
                try {
                    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
                    if (user) {
                        alert("Account Created Successfully");
                        setEmail([])
                        setPassword([])
                        setConfirmPassword([])
                        navigate('/Frontpage')
                    }
                } catch (error) {
                    alert(error.message);
                    setEmail([])
                    setPassword([])
                    setConfirmPassword([])
                }
            } else {
                alert("Passwords do not match");
                setPassword([])
                setConfirmPassword([])

            }
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 overflow-hidden">
            <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 w-full max-w-md">
                <h2 className="text-4xl text-center font-bold mb-6">{isLogin ? 'Login' : 'Sign Up'} to ZigZag</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                        />
                    </div>
                    {!isLogin && (
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                            />
                        </div>
                    )}
                    <button type="submit" className="w-full py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-300 hover:scale-110">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <p className="text-center mt-4">
                    {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-purple-500 hover:underline focus:outline-none ml-2 transition duration-300 hover:text-purple-700">
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthForm;
