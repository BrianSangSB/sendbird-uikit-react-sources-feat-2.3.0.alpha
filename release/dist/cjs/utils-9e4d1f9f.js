'use strict';

var type = require('./type-8bd9849b.js');

var truncate = function truncate(fullStr, strLen) {
  if (fullStr === null || fullStr === undefined) return '';
  if (fullStr.length <= strLen) return fullStr;
  var separator = '...';
  var sepLen = separator.length;
  var charsToShow = strLen - sepLen;
  var frontChars = Math.ceil(charsToShow / 2);
  var backChars = Math.floor(charsToShow / 2);
  return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
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

exports.getIsSentFromSendingStatus = getIsSentFromSendingStatus;
exports.getIsSentFromStatus = getIsSentFromStatus;
exports.truncate = truncate;
//# sourceMappingURL=utils-9e4d1f9f.js.map
