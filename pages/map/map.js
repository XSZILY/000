Page({
  data: {
    latitude: 36.0647630416,
    longitude: 120.3785458683,
    markers: [{
      iconPath: '/images/navi.png',
      id: 0,
      latitude: 36.0647630416,
      longitude: 120.3785458683,
      width: 50,
      height: 50
    }]

  },
  markertap: function () {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name: '香格里拉大酒店',
      address: '青岛市 市南区 香港中路'
    })
  }
})