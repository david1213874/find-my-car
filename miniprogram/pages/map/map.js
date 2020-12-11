// miniprogram/pages/map/map.js
const devicesId = "657062777" // 填写在OneNet上获得的devicesId 形式就是一串数字 例子:9939133
const api_key = "WlTQD2RhkW3DG=kslg5cXfiZmUk=" // 填写在OneNet上的 api-key 例子: VeFI0HZ44Qn5dZO14AuLbWSlSlI=

Page({
  data: {
    longitude_you:116.39,
    latitude_you:39.90,
    markers:[]
 },
  return: function () {
    wx.navigateTo({
      url: '../start/start',
    })
  },
  /*
 get_your_loc:function (e) {
   var that =this
   wx.getLocation({
     success:function(res){
       //console.log(res)
       that.setData({
        longitude_you:res.longitude,
        latitude_you:res.latitude,
        markers:[{
          id:0,
          longitude:res.longitude,
          latitude:res.latitude,
          title :"您的位置",
          iconPath:"../../image/you.png",
          width:30,
          height:30
      },
        {id:1,
          longitude:116.39,
          latitude:39.90,
          title :"车的位置",
          iconPath:"../../image/car.png",
          width:30,
          height:30
        }]
       })
     }
   })
  //console.log("get_you_loc")
  },
  */
  
  onLoad: function(loc_you,e) {
   var that =this
   wx.getLocation({
     success:function(res){
       //console.log(res)
       that.setData({
        longitude_you:res.longitude,
        latitude_you:res.latitude,
        markers:[{
          id:0,
          longitude:res.longitude,
          latitude:res.latitude,
          title :"您的位置",
          iconPath:"../../image/you.png",
          width:30,
          height:30
      },
        {id:1,
          longitude:116.39,
          latitude:39.90,
          title :"车的位置",
          iconPath:"../../image/car.png",
          width:30,
          height:30
        }]
       })
     }
   })
  //console.log("get_you_loc")
   },search:function(){
    var that =this
    var longitude_you=this.data.markers[0].longitude;
    var latitude_you=this.data.markers[0].latitude;
     wx.request({
       url: 'https://api.heclouds.com/devices/657062777/datastreams/location',
       header: {
        'content-type': 'application/json',
        'api-key': api_key,
      }, method:"GET",
      success: (res) => {
          //console.log(res)
          //console.log(res.data.data.current_value)
         that.setData({
           markers:[{ id:0,
            longitude:longitude_you,
            latitude:latitude_you,
            title :"您的位置",
            iconPath:"../../image/you.png",
            width:30,
            height:30},
           {
             id:1,
             longitude:res.data.data.current_value.lon,
             latitude:res.data.data.current_value.lat,
             title :"车的位置",
             iconPath:"../../image/car.png",
             width:30,
             height:30
           }]
          })
      }
     })
        
    console.log("search")
  },
})