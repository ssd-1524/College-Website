import React, { useEffect, useState } from 'react';
import '../DoctorSISU/doctorsisu.css';
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TrackAmb from '../DoctorSISU/TrackAmb/TrackAmb';

function StudentSISU() {
    const navigate = useNavigate();
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [trackAmb, setTrackAmb] = useState(false);
    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        roll_no: '',
        year: '',
        hostel: '',
        room_no: '',
        password: '',
    });
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const main = document.getElementById('main');

        if (signUpButton && signInButton && main) {
            const signUpClick = () => main.classList.add("right-panel-active");
            const signInClick = () => main.classList.remove("right-panel-active");

            signUpButton.addEventListener('click', signUpClick);
            signInButton.addEventListener('click', signInClick);

            return () => {
                signUpButton.removeEventListener('click', signUpClick);
                signInButton.removeEventListener('click', signInClick);
            };
        }
    }, []);

    const handleSavePostClick = (event) => {
        event.preventDefault();
        setPopupVisible(true);
    };

    const handleContinue = (event) =>{
        setPopupVisible(false);
        const changebutton = document.querySelector('#Ambulance-Button')
        changebutton.style.backgroundColor = "Orange";
        changebutton.innerText = "Track Your Ambulance"
    }

    const handleSignUpChange = (e) => {
        const { id, value } = e.target;
        setSignupData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };
    

    const handleLogInChange = (e) =>{
        const { id, value } = e.target; 
        setLoginData({ ...loginData, [id]: value });
    }

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/v1/students/register', signupData);
            navigate('/app/pcp');
        } catch (error) {
            alert('Error during signup:', error);
        }
    };
    

    const handleLoginSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('/api/v1/students/login', loginData);
            localStorage.setItem('studentId', response.data.id);
            navigate('/app/pcp');
        } catch (error) {
            console.error('Error during signup:', error);
        }
    }
    
    const handleCancleClick = () => {
        const changebutton = document.querySelector('#Ambulance-Button');
        changebutton.classList.remove('bg-orange-500');
        changebutton.classList.add('bg-red-600');
        changebutton.innerText = "Call an Ambulance"
        setTrackAmb(false);
    }

    return (

        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='w-full flex justify-center items-center'>
                <div className="container w-1/2" id="main">
                    <div className="sign-up">
                        <form onSubmit={handleSignUpSubmit}>
                            <p className='mb-4'>Register</p>
                            <input className='border mb-2 p-2' id="name" type="text" placeholder="Name*" required value={signupData.name} onChange={handleSignUpChange}></input>
                            <input className='border mb-2 p-2' id="email" type="email" placeholder="Email*" required value={signupData.email} onChange={handleSignUpChange}></input>
                            <input className='border mb-2 p-2' id="roll_no" type="text" placeholder="Roll_No*" required value={signupData.roll_no} onChange={handleSignUpChange}></input>
                            <input className='border mb-2 p-2' id="year" type="text" placeholder="Year*" required value={signupData.year} onChange={handleSignUpChange}></input>
                            <input className='border mb-2 p-2' id="hostel" type="text" placeholder="hostel-name*" required value={signupData.hostel} onChange={handleSignUpChange}></input>
                            <input className='border mb-2 p-2' id="room_no" type="number" placeholder="room-number*" required value={signupData.room_no} onChange={handleSignUpChange}></input>
                            <input className='border mb-2 p-2' id="password" type="password" placeholder="Password*" required value={signupData.password} onChange={handleSignUpChange}></input>
                            <button className="button pt-2 pb-2 pl-4 pr-4 w-2/4 bg-teal-500 text-white m-2 font-semibold hover:bg-teal-400">Sign Up</button>
                        </form>
                    </div>

                    <div className="sign-in">
                        <form onSubmit={handleLoginSubmit}>
                            <p className='mb-4'>Sign In</p>
                            <input className='border mb-2 p-2' type="email" name="text" placeholder="Email" required id="email" value={loginData.email} onChange={handleLogInChange}/>
                            <input className='border mb-2 p-2' type="Password" name="text" placeholder="Password" required id="password" value={loginData.password} onChange={handleLogInChange}/>
                            <button className="button pt-2 pb-2 pl-4 pr-4 w-2/4 bg-teal-500 text-white m-2 font-semibold hover:bg-teal-400">Sign In</button>
                        </form>
                    </div>

                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-left">
                                <h1 className='mb-5 text-3xl font-semibold'>Already have an account?</h1>
                                <button className='pt-2 pb-2 pl-4 pr-4 w-2/4 font-semibold' id="signIn">Sign In</button>
                            </div>

                            <div className="overlay-right">
                                <h1 className='mb-5 text-3xl font-semibold'>New User?</h1>
                                <button className='pt-2 pb-2 pl-4 pr-4 w-2/4 font-semibold' id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <button onClick={handleSavePostClick} className='bg-red-600 pt-2 pb-2 pl-4 pr-4 rounded-3xl text-white text-2xl hover:bg-red-400' id="Ambulance-Button">Call an Ambulance</button>
            </div>
            <Popup
                isVisible={isPopupVisible}
                onClose={() => setPopupVisible(false)}
                onContinue={handleContinue}
            />
            <TrackAmb
                isVisible={trackAmb}
                onClose={() => setTrackAmb(false)}
                onCancel = {handleCancleClick}
            />
        </div>
    );
}

export default StudentSISU;
