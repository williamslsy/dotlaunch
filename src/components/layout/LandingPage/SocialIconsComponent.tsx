import React from 'react';
import { SocialIcons } from '../../common/Icons';

export const SocialIconsComponent = () => {
  return (
    <div className="flex space-x-5 w-full justify-center">
      <SocialIcons
        href="https://twitter.com/"
        target="_blank"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <i className="lab la-twitter"></i>
      </SocialIcons>
      <SocialIcons
        href="https://reddit.com/"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <i className="lab la-reddit"></i>
      </SocialIcons>
      <SocialIcons href="mailto:" data-aos="fade-right" data-aos-delay="400">
        <i className="las la-envelope"></i>
      </SocialIcons>
      <SocialIcons
        href="https://discord.com/"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <i className="lab la-discord"></i>
      </SocialIcons>
      <SocialIcons
        href="https://t.me/"
        target="_blank"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <i className="lab la-telegram"></i>
      </SocialIcons>
    </div>
  );
};
