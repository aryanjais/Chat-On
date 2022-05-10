import React from 'react';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import cookies from 'universal-cookie';

import {ChannelListContainer,ChannelContainer, Auth} from './components';

import './App.css';

const apikey = 'qvuu6sk64qsy';
const client = StreamChat.getInstance(apikey);

const authToken=false;

const App = () => {
    if(!authToken) return <Auth/>
  return (
      <div className='app__wrapper'>
          <Chat client={client} theme="team light">
              <ChannelListContainer/>
              <ChannelContainer/>
          </Chat>
      </div>
  );
}

export default App