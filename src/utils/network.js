function request(url, data, method) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method,
      dataType: 'json',
      success(res) {
        resolve(res);
      },
      fail(res) {
        reject(res);
      },
    });
  });
}

function get(url, data) {
  return request(url, data, 'GET');
}

export {
  get,
  request,
};
