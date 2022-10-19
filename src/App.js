import React, { useEffect, useState } from 'react';
import '../src/Component/Style/style.css';
import Meme from './Component/Meme/index.jsx';

function App() {
  const [meme, setmeme] = useState([]);
  const [fetching, setfetching] = useState("false");

  useEffect(() => {
    async function fetchMeme() {
      // const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
      const requestUrl = 'https://api.imgflip.com/get_memes';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      const data = responseJSON.data;
      const memes = data.memes;
      const itemmeme = [];
      const pick = Math.floor(Math.random()*memes.length);
      itemmeme.push(memes[pick]);
      console.log(memes[pick]);
      setmeme(itemmeme);
    }
    fetchMeme();
  },
  [fetching]);

  return (
    <div className="App">
      <h3 className='title'>RANDOM MEME EVERYDAY</h3>
      <h3 className='description'>ENJOY YOUR FUNNY MOMENT WITH YOUR SOULMATE!</h3>
      <Meme posts = {meme}></Meme>
      <button className="btn" onClick={()=> setfetching(!fetching)} > Ramdom Meme</button>
    </div>
  );
}

export default App;
