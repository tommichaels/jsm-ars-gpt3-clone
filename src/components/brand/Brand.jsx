import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='google_png'/>
    </div>
    <div>
      <img src={slack} alt='slack_png'/>
    </div>
    <div>
      <img src={atlassian} alt='atlassian_png'/>
    </div>
    <div>
      <img src={dropbox} alt='dropbox_png'/>
    </div>
    <div>
      <img src={shopify} alt='shopify_png'/>
    </div>
  </div>
);

export default Brand;
