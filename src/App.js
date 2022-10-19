import React, { useEffect, useState } from 'react';
import './App.css';
import PostList from './Component/PostList/index.jsx';

function App() {
  const [postList, setpostList] = useState([]);
  const [fetching, setfetching] = useState("false");

  useEffect(() => {
    async function fetchPostList() {
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
      setpostList(itemmeme);
    }
    fetchPostList();
  },
  [fetching]);

  return (
    <div className="App">
      <button className="btn" onClick={()=> setfetching(!fetching)} > Ramdom Meme</button>
      <PostList posts = {postList}></PostList>
    </div>
  );
}

export default App;
