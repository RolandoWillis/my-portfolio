import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDiscord,
  FaTelegram,
  FaSkype,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>        
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}        
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
       {socialprofils.whatsapp && (
          <li>
            <a href={socialprofils.whatsapp}>
              <FaWhatsapp />
            </a>
          </li>
        )}
       {socialprofils.discord && (
          <li>
            <a href={socialprofils.discord}>
              <FaDiscord />
            </a>
          </li>
        )}
       {socialprofils.telegram && (
          <li>
            <a href={socialprofils.telegram}>
              <FaTelegram />
            </a>
          </li>
        )}
       {socialprofils.skype && (
          <li>
            <a href={socialprofils.twitter}>
              <FaSkype />
            </a>
          </li>
        )}
        
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
