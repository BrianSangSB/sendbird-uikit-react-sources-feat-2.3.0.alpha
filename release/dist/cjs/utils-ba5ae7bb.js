'use strict';

var index = require('./index-b03b74fe.js');
var type = require('./type-8bd9849b.js');

var copyToClipboard = function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
    return window.clipboardData.setData('Text', text);
  }

  if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
    var textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.

    document.body.appendChild(textarea);
    textarea.select();

    try {
      return document.execCommand('copy'); // Security exception may be thrown by some browsers.
    } catch (ex) {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }

  return false;
};
var getMessageCreatedAt = function getMessageCreatedAt(message) {
  return index.format(message.createdAt || 0, 'p');
};
var getSenderName = function getSenderName(message) {
  return message.sender && (message.sender.friendName || message.sender.nickname || message.sender.userId);
};
var getSenderProfileUrl = function getSenderProfileUrl(message) {
  return message.sender && message.sender.profileUrl;
};
var getIsSentFromStatus = function getIsSentFromStatus(status) {
  return status === type.MessageStatusType.SENT || status === type.MessageStatusType.DELIVERED || status === type.MessageStatusType.READ;
};
var getIsSentFromSendingStatus = function getIsSentFromSendingStatus() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (message.sendingStatus && typeof message.sendingStatus === 'string') {
    return message.sendingStatus === 'none' || message.sendingStatus === 'succeeded';
  }

  return false;
};

exports.copyToClipboard = copyToClipboard;
exports.getIsSentFromSendingStatus = getIsSentFromSendingStatus;
exports.getIsSentFromStatus = getIsSentFromStatus;
exports.getMessageCreatedAt = getMessageCreatedAt;
exports.getSenderName = getSenderName;
exports.getSenderProfileUrl = getSenderProfileUrl;
//# sourceMappingURL=utils-ba5ae7bb.js.map
