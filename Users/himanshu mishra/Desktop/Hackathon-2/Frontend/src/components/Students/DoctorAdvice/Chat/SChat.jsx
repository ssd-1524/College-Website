import React, { useEffect, useRef } from 'react';
import { FaArrowLeft, FaPaperPlane } from 'react-icons/fa';
import profile from '../../../../svgs/profile.svg';
import './schat.css'

function SChat({ handle, name }) {
    const mainRef = useRef(null);

    const handleChat = (message, className) => {
        const chatLi = document.createElement('li');
        chatLi.classList.add('chat', className);
        let chatContent = className === 'outgoing'
            ? '<p></p>'
            : `<img src="${profile}" className='size-10'/><p></p>`;
        chatLi.innerHTML = chatContent;
        chatLi.querySelector('p').textContent = message;
        const chatBox = document.querySelector('.chatbox');
        chatBox.appendChild(chatLi);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll the chat box container
        document.querySelector('textarea').value = ''; // Clear the textarea
        return chatLi;
    };

    useEffect(() => {
        const sendButton = document.getElementById('sent-btn');
        const handleSendClick = () => {
            const textarea = document.querySelector('textarea');
            const message = textarea.value.trim(); // Trim whitespace
            if (message) {
                handleChat(message, 'outgoing');
            }
        };

        sendButton.addEventListener('click', handleSendClick);

        return () => {
            sendButton.removeEventListener('click', handleSendClick);
        };
    }, []);

    return (
        <div>
            <div className='w-full'>
                <header className='w-full sticky border shadow-b-2xl mt-0'>
                    <nav className='w-full flex justify-between pl-10 pr-10 pt-3 pb-3'>
                        <div className='flex justify-center items-center gap-6'>
                            <FaArrowLeft onClick={handle} className='cursor-pointer size-8' />
                            <img src={profile} className='size-14' />
                            <h1 className='flex text-4xl'>{name}</h1>
                        </div>
                    </nav>
                </header>
                <main className='h-96 border overflow-y-auto p-5 scrollbar-custom relative overflow-x-hidden' ref={mainRef}>
                    <ul className="chatbox h-full overflow-y-auto scrollbar-custom ">
                        <li className="chat incoming">
                            <img src={profile} className='size-10' />
                            <p>Hey There <br /> How can I help you today?</p>
                        </li>
                        <li className="chat outgoing">
                            <p>Hey There <br /> How can I help you today?</p>
                        </li>
                        <li className="chat incoming">
                            <img src={profile} className='size-10' />
                            <p>Hey There <br /> How can I help you today?</p>
                        </li>
                        <li className="chat outgoing">
                            <p>Hey There <br /> How can I help you today?</p>
                        </li>
                    </ul>
                </main>
                <div className="w-full flex items-center gap-4">
                    <textarea placeholder="Enter the message here.." required className='w-full border p-2 rounded-3xl text-2xl' />
                    <button id="sent-btn" className='border-none'><FaPaperPlane className='size-12 cursor-pointer mr-3' /></button>
                </div>
            </div>
        </div>
    );
}

export default SChat;
