//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    shopInfo:{
      shopIcon:'http://p3.pstatp.com/large/10240002d824ed67d625',
      shopName:'e家政朝阳分店',
      shopGonggao:'哈哈哈哈'
    }, 
    cates:[
      {cateId:'01',cateName:'家庭保洁',active:'1'},
      {cateId:'02',cateName:'专业保洁',active:'0'},
      {cateId:'03',cateName:'家电清洗',active:'0'}
    ],
    products:[
      {pSn:'101333',pName:'2小时家庭保洁',pRemark:'',pSales:'10',pCateId:'01',price:'10',icon:'/images/header-icon.jpg'},
      {pSn:'101333',pName:'3小时家庭保洁',pRemark:'',pSales:'13',pCateId:'01',price:'50',icon:'/images/header-icon.jpg'},
      {pSn:'101333',pName:'上门服务专业清洗',pRemark:'',pSales:'15',pCateId:'01',price:'60',icon:'/images/header-icon.jpg'}
    ],
    cartStatus:'n'
  },
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
  },

  //点击左边分类
  menuClick(event){ 
     var id=event.target.dataset.id; 
     var cates=this.data.cates;
     console.log("click==="+id);
     for(var i=0;i<cates.length;i++){
        if(cates[i].cateId==id){
           cates[i].active='1'; //点击后的
        }else{
           cates[i].active='0';
        }
     }
     this.setData({
       cates:cates
     })
  },


  //单个点击
  itemClick(){
    wx.navigateTo({
      url: '../detail/detail'
    })
  },

  //展示或隐藏cart
  switchCart(){
    var nowStatus=this.data.cartStatus;
    if(nowStatus=="show"){
      nowStatus="n";
    }else{
      nowStatus="show";
    }
    this.setData({
      cartStatus:nowStatus
    })
  },


 

})
