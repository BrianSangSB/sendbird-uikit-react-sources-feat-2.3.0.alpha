'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SendbirdProvider = require('./SendbirdProvider.js');
var App = require('./App.js');
var ChannelSettings = require('./ChannelSettings.js');
var ChannelList = require('./ChannelList.js');
var Channel = require('./Channel.js');
var LocalizationContext = require('./LocalizationContext-14d24cb7.js');
var OpenChannel = require('./OpenChannel.js');
var OpenChannelSettings = require('./OpenChannelSettings.js');
var MessageSearch = require('./MessageSearch.js');
var index = require('./index-1e924a4d.js');
var React = require('react');
require('prop-types');
require('sendbird');
require('./actionTypes-efea75ee.js');
require('css-vars-ponyfill');
require('./index-b03b74fe.js');
require('./LeaveChannel-fba4c512.js');
require('./index-7b394c5c.js');
require('./index-86ba32dd.js');
require('./utils-700439fa.js');
require('./index-33d7fc20.js');
require('./index-45785a68.js');
require('./index-9df562e1.js');
require('./utils-9e4d1f9f.js');
require('./type-8bd9849b.js');
require('./index-d79147db.js');
require('react-dom');
require('./utils-ba5ae7bb.js');

/**
 * Example:
 * const MyComponent = () => {
 *  const context = useSendbirdStateContext();
 *  const sdk = sendbirdSelectors.getSdk(context);
 *  return (<div>...</div>);
 * }
 */

function useSendbirdStateContext() {
  var context = React.useContext(LocalizationContext.SendbirdSdkContext);
  return context;
}

exports.SendBirdProvider = SendbirdProvider;
exports.App = App;
exports.ChannelSettings = ChannelSettings;
exports.ChannelList = ChannelList;
exports.Channel = Channel['default'];
exports.getAllEmojisFromEmojiContainer = Channel.getAllEmojisFromEmojiContainer;
exports.getEmojiCategoriesFromEmojiContainer = Channel.getEmojiCategoriesFromEmojiContainer;
exports.getEmojisFromEmojiContainer = Channel.getEmojisFromEmojiContainer;
exports.getStringSet = LocalizationContext.getStringSet;
exports.withSendBird = LocalizationContext.withSendbirdContext;
exports.OpenChannel = OpenChannel['default'];
exports.OpenChannelSettings = OpenChannelSettings;
exports.MessageSearch = MessageSearch;
exports.sendBirdSelectors = index.selectors;
exports.useSendbirdStateContext = useSendbirdStateContext;
//# sourceMappingURL=index.js.map
