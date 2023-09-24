Page({
  data: {
    msgList: [], // 存储对话内容的数组
    inputMsg: '', // 用户输入的消息
  },

  // 用户输入消息
  handleInputMsg(e) {
    this.setData({
      inputMsg: e.detail.value,
    });
  },

  // 发送消息
  sendMessage() {
    const inputMsg = this.data.inputMsg;
    if (inputMsg.trim() === '') {
      return;
    }

    // 添加用户发送的消息到对话列表
    this.addMessage({
      content: inputMsg,
      isUser: true,
    });

    // 发送请求到ChatGPT服务器
    wx.request({
      url: 'https://chat.tgbot.co/', // ChatGPT API的URL
      method: 'POST',
      data: {
        message: inputMsg,
      },
      success: (res) => {
        if (res.statusCode === 200) {
          const response = res.data.response;

          // 添加ChatGPT返回的消息到对话列表
          this.addMessage({
            content: response,
            isUser: false,
          });
        }
      },
      fail: (err) => {
        console.error('Failed to send message:', err);
      },
    });

    // 清空输入框
    this.setData({
      inputMsg: '',
    });
  },

  // 将消息添加到对话列表
  addMessage(message) {
    const msgList = this.data.msgList;
    msgList.push(message);
    this.setData({
      msgList: msgList,
    });
  },
});