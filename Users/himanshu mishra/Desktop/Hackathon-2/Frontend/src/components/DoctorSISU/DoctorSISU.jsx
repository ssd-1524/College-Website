import React, {useEffect, useState} from 'react'
import './doctorsisu.css'
import Popup from '../Popup/Popup';

function DoctorSISU() {
    const [isPopupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const main = document.getElementById('main');
    
        if (signUpButton && signInButton && main) {
          signUpButton.addEventListener('click', () => {
            main.classList.add("right-panel-active");
          });
    
          signInButton.addEventListener('click', () => {
            main.classList.remove("right-panel-active");
          });
    
          // Clean up event listeners on component unmount
          return () => {
            signUpButton.removeEventListener('click', () => {
              main.classList.add("right-panel-active");
            });
    
            signInButton.removeEventListener('click', () => {
              main.classList.remove("right-panel-active");
            });
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

  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-blue-500'>
        <div className='w-full flex justify-center items-center bg-blue-500'>
        <div className="container w-1/2" id="main">
            <div className="sign-up">
                <form action="profile_card.html">
                    <p className='mb-4' >Sign Up</p>
                    <input className='border mb-2 p-2' id="name" type="text" placeholder="Name*" required=""></input>
                    <input className='border mb-2 p-2' id="email-signup" type="text" placeholder="Email*" required=""></input>
                    <input className='border mb-2 p-2' id="password-signup" type="password" placeholder="Password*" required=""></input>
                    <input className='border mb-2 p-2' id="qualification" type="text" placeholder="qualification*" required=""></input>
                    <input className='border mb-2 p-2' id="experience" type="text" placeholder="experience*" required=""></input>
                    <input className='border mb-2 p-2' type="file" id="img" name="img" accept="image/*" placeholder="upload a profile photo*"></input>
                    <button className="button pt-2 pb-2 pl-4 pr-4 w-2/4 bg-blue-500 text-white m-2 font-semibold hover:bg-blue-400">Sign Up</button>
                </form>
            </div>

            <div className="sign-in">
                <form action="profile_card.html">
                    <p className='mb-4'>Sign In</p>
                    <input className='border mb-2 p-2' type="email" name="text" placeholder="Email" required="" id="email"/>
                    <input className='border mb-2 p-2' type="Password" name="text" placeholder="Password" required="" id="password"/>
                    <button className="button pt-2 pb-2 pl-4 pr-4 w-2/4 bg-blue-500 text-white m-2 font-semibold hover:bg-blue-400">Sign In</button>
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
    </div>
  )
}

export default DoctorSISU
