export { default as SendBirdProvider } from './SendbirdProvider.js';
export { default as App } from './App.js';
export { default as ChannelSettings } from './ChannelSettings.js';
export { default as ChannelList } from './ChannelList.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import { S as SendbirdSdkContext } from './LocalizationContext-c94736a2.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-c94736a2.js';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';
export { default as MessageSearch } from './MessageSearch.js';
export { s as sendBirdSelectors } from './index-9bb01cad.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-abf2fa18.js';
import 'css-vars-ponyfill';
import './index-2ea6248c.js';
import './LeaveChannel-7c841873.js';
import './index-26ba57ac.js';
import './index-5ffe6961.js';
import './utils-5c44e544.js';
import './index-e092d6ec.js';
import './index-868a7a21.js';
import './index-11176810.js';
import './utils-74daa949.js';
import './type-eb216f18.js';
import './index-5830f9e1.js';
import 'react-dom';
import './utils-d2d14068.js';

/**
 * Example:
 * const MyComponent = () => {
 *  const context = useSendbirdStateContext();
 *  const sdk = sendbirdSelectors.getSdk(context);
 *  return (<div>...</div>);
 * }
 */

function useSendbirdStateContext() {
  var context = useContext(SendbirdSdkContext);
  return context;
}

export { useSendbirdStateContext };
//# sourceMappingURL=index.js.map
