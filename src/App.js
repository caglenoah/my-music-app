import './App.css';

import React, { useState } from "react";
import Header from "./components/Header"
import SignIn from "./components/SignIn"
import MasterVolume from './components/MasterVolume';
import SoundQuality from './components/SoundQuality';
import OnlineMode from "./components/OnlineMode"



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isOnline, setIsOnline] = useState(false)
  const [volume, setVolume] = useState(20);
  const [quality, setQuality] = useState('1'); // not correct
  {/*
  i think i have to define three seperate state, or maybe just add a label. But i am sleepy. Will update before class in the morning. 
*/}


  
  
  return (
    <div className="App">
      <Header />
      {isLoggedIn ? (
        <div  className='container'>
        
          <p>you are logged in</p>
          <div className='cardsToStyle'>
          <OnlineMode isOnline={isOnline} setIsOnline={setIsOnline} />
            <MasterVolume volume={volume} setVolume={setVolume} />
            <SoundQuality quality={quality} setQuality={setQuality} />
          </div>
          <h3>System Notifications</h3>
          {!isOnline && (
          <p>Your application is offline. You won't be able to share or stream music to other devices</p>
            )}
            { volume > 80 && (
              <p>Listening to music at a high volume could cause long-term stoke, hearing aid tech has come a long way, you will be fine</p>
          )}
          {quality == 1 && (
            <p>Your not actually listening to choppy EDM, the Music quality is degraded. Increase quality if your connection allows it.</p>
          )}

          </div>
      ) : (
          <SignIn setIsLoggedIn = { setIsLoggedIn } />
      )
    }
    </div>
  );
}

export default App;
