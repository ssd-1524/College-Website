import React,{useState} from 'react';
import profile from '../../../svgs/profile.svg'
import chat from '../../../svgs/chat.svg'
import unread from '../../../svgs/unread.svg'
import SChat from './Chat/SChat';
import SDdata from './Data/Data.json'

export default function DoctorAdvice() {
  const [chatVisible, setChatVisible] = useState(false);
  const [selectedName, setSelectedName] = useState('');

  const handleChat = (name) => {
    setSelectedName(name);
    setChatVisible(true);
  };

  const handleBack = () => {
    setChatVisible(false);
  };

  return (
    <div className='m-10'>
      <div className='w-full'>
        <h1 className='m-6 text-4xl font-bold text-teal-600 mb-4 underline' style={{ fontFamily: 'Kaisei HarunoUmi, sans-serif' }}>Dr. Advice</h1>
        <div className='w-full border rounded-3xl flex flex-col overflow-y-auto scrollbar-custom' style={{ maxHeight: '35rem' }}>
          {chatVisible ? (
            <SChat handle={handleBack} name={selectedName} />
          ) : (
            <>
            {SDdata.map((item)=>( 
              <div onClick={() => handleChat(item.name)} className='flex items-center justify-between mx-10 my-3 border rounded-xl p-4 cursor-pointer hover:bg-slate-100'>
              <div className='flex items-center gap-5'>
                <img src={profile} className='size-14' />
                <div>
                  <h1 className='text-3xl'>{item.name}</h1>
                  <div className='flex gap-2'>
                    <p>{item.query} | </p>
                    <p>{item.time}</p>
                  </div>
              </div>
              </div>
              <div className='flex relative'>
                <img src={chat} className='size-12'/>
                <img src={unread} className='absolute top-0 right-0 size-5'/>
              </div>
            </div>
            ))}
          </>
        )}
        </div>
      </div>
    </div>
  );
}
