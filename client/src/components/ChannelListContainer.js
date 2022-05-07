import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import {ChannelSearch,TeamChannelList,TeamChannelPreview} from './';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';
import Cookies from "universal-cookie";

const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital Icon" width="30"/>
            </div>
        </div>
        <div className="channel-list__sidebar__icon1">
            <div className="icon2__inner">
                <img src={LogoutIcon} alt="Logout Icon" width="30"/>
            </div>
        </div>
    </div>
)

const Companyheader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Text Messaging web App</p>
    </div>
)

 const ChannelListContainer = () =>{
     return(
         <>
             <SideBar/>
             <div className="channel-list__list__wrapper">
                <Companyheader/>
             </div>
         </>
     )
 }

 export default ChannelListContainer;