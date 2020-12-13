// miniprogram/pages/map/map.js
const devicesId = "657054151" 
const api_key = "lJOULFScfN5Xvn2Df4Lg4t3G9Pc=" 
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
  onLoad: function(loc_you,e) {
   var that =this
   wx.getLocation({
     success:function(res){
       //console.log(res)
       that.setData({
        markers:[{
          id:0,
          longitude:res.longitude,
          latitude:res.latitude,
          title :"您的位置",
          iconPath:"../../image/you.png",
          width:30,
          height:30
      }]
       })
     }
   })
   },

getlongitude_car:function(){
  var longitude_car=116.39
  wx.request({
    url: 'https://api.heclouds.com/devices/657054151/datastreams/longitude',
    header: {
     'content-type': 'application/json',
     'api-key': api_key,
   }, method:"GET",
   success: (res) => {
     this.setData({
       longitude_car:res.data.data.current_value
     })
   }
  })
  return this.data.longitude_car
},
getlatitude_car:function(){
    var latitude_car=39.90
  var that=this
  wx.request({
    url: 'https://api.heclouds.com/devices/657054151/datastreams/latitude',
    header: {
     'content-type': 'application/json',
     'api-key': api_key,
   }, method:"GET",
   success: (res) => {
    this.setData({
      latitude_car:res.data.data.current_value
    })
   }
  })
  return this.data.latitude_car
},





   search:function(){
    var that =this
    var longitude_you=this.data.markers[0].longitude;
    var latitude_you=this.data.markers[0].latitude;
    //var longitude_car=this.getlongitude_car()
    //console.log(longitude_car)
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
        longitude:this.getlongitude_car(),
        latitude:this.getlatitude_car(),
        title :"车的位置",
        iconPath:"../../image/car.png",
        width:30,
        height:30
      }]
     })
    /*
     wx.request({
       url: 'https://api.heclouds.com/devices/657054151/datastreams/longitude',
       header: {
        'content-type': 'application/json',
        'api-key': api_key,
      }, method:"GET",
      success: (res) => {
          //console.log(res)
          
          console.log(res.data.data.current_value)
          that.setData({
            longitude_car:res.data.data.current_value,
            markers:[{ id:0,
             longitude:longitude_you,
             latitude:latitude_you,
             title :"您的位置",
             iconPath:"../../image/you.png",
             width:30,
             height:30},
            {
              id:1,
              longitude:res.data.data.current_value,
              latitude:latitude_car,
              title :"车的位置",
              iconPath:"../../image/car.png",
              width:30,
              height:30
            }]
           })
           console.log(longitude_car)
           
      }
     })
     wx.request({
       url: 'https://api.heclouds.com/devices/657054151/datastreams/latitude',
       header: {
        'content-type': 'application/json',
        'api-key': api_key,
      }, method:"GET",
      success: (res) =>{
        console.log(res.data.data.current_value)
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
            longitude:longitude_car,
            latitude:res.data.data.current_valu,
            title :"车的位置",
            iconPath:"../../image/car.png",
            width:30,
            height:30
          }]
         })
      }
     }) 
     */
    //console.log("search")
  },
})
