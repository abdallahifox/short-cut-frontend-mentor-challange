import React from "react";

import Logo from "./../../assets/images/logofooter.svg";
import { footerLinks, socialMedia } from "../../contains";

function footer() {
  return (
    <footer id="Resources">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center mx-20">
        <img src={Logo} alt="Logo" />
        {footerLinks.map((item) => {
          return (
            <div
              className="links flex flex-col items-center mt-5 md:mt-0"
              key={item.title}
            >
              <h5 className="mb-5 text-white text-md">{item.title}</h5>
              {item.links.map((link) => {
                return (
                  <ul key={link.name}>
                    <li className="hover:text-cyan-400 cursor-pointer pharaghraph text-xs mb-5">
                      <a href={`${link.web}`} target="_blank">
                        {link.name}
                      </a>
                    </li>
                  </ul>
                );
              })}
            </div>
          );
        })}

        <div className="links flex flex-col items-center mt-5 md:mt-0">
          <h5 className="mb-5 text-white text-md">Social Media</h5>
          <ul className="flex">
            {socialMedia.map((item) => {
              return (
                <li
                  key={item.id}
                  className="hover:text-cyan-400 cursor-pointer pharaghraph text-xs mx-3"
                >
                  <a href={item.link} target="_blank">
                    <img src={item.icon} alt="" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default footer;
