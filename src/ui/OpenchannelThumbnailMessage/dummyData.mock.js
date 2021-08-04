export const mockMessage = {
  messageId: 16131097,
  messageType: "file",
  channelUrl: "sendbird_group_channel_12373168_f986d10807a7cc7c184e22ca8ac2137bc32bc57c",
  data: "",
  customType: "",
  createdAt: 1583415812675,
  updatedAt: 0,
  channelType: "group",
  mentionType: "users",
  url: "https://sendbird-staging.s3.amazonaws.com/26FA710D-A7F6-4483-ABEA-1F07A07A112E/upload/n/e49e0a4111d4445a8840bd51f3c9d933.png",
  name: "sent-mail (1).png",
  size: 9250,
  type: "image/png",
  sender: {
    nickname: "hoon102",
    profileUrl: "https://static.sendbird.com/sample/profiles/profile_15_512px.png",
    userId: "hoon102",
    connectionStatus: "nonavailable",
    lastSeenAt: 0,
  },
  reqId: "1583413644783",
  requireAuth: false,
  requestState: "succeeded",
  errorCode: 0,
};

export const mockMessageVideo = {
  messageId: 16131097,
  messageType: "file",
  channelUrl: "sendbird_group_channel_12373168_f986d10807a7cc7c184e22ca8ac2137bc32bc57c",
  data: "",
  customType: "",
  createdAt: 1583415812675,
  updatedAt: 0,
  channelType: "group",
  mentionType: "users",
  url: "https://sendbird-upload.s3.amazonaws.com/2D7B4CDB-932F-4082-9B09-A1153792DC8D/upload/n/5a66f56bb5ed481aaf435b55bc209190.mp4",
  name: "sent-mail (1).png",
  size: 9250,
  type: "video/mp4",
  sender: {
    nickname: "hoon102",
    profileUrl: "https://static.sendbird.com/sample/profiles/profile_15_512px.png",
    userId: "hoon102",
    connectionStatus: "nonavailable",
    lastSeenAt: 0,
  },
  reqId: "1583413644783",
  requireAuth: false,
  requestState: "succeeded",
  errorCode: 0,
};

export const getMockMessage = (callback) => {
  const message = { ...mockMessage };
  if (callback && typeof callback === 'function') {
    callback(message);
  }
  return message;
};

export const getMockMessageWithVideo = (callback) => {
  const message = { ...mockMessageVideo };
  if (callback && typeof callback === 'function') {
    callback(message);
  }
  return message;
};

export default mockMessage;
