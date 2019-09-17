/**
 * 
 * 恭喜您找到了我!!!
 * 如果您是vc,微信我可以帮你转介绍到我老板!
 * 如果您是前端、后端、大数据、算法攻城狮;直接微信我,
 * 相信有不错的职位等着您!
 * ....
 * 此处省略1万字项目介绍
 * ....
 * 不管怎么说,看到这里,说明
 * 您还是对我们的项目感兴趣，请联系我吧！
 * 水信负责人联系方式，姓名:杨家荣，电话微信同号:18817592927。
 * 
 * 嗨,
 * 但是,
 * 果然,
 * 这么隐蔽,
 * 都被你发现了,确实,写这么多,怕您找不我,
 * 若您把json传参的意义搞明白了,
 * 我公司有更好的职位等着您!
 * @Email:yangjiarong@forcetv.com.cn
 * 速来!
 * 
 * 算了,给您讲讲吧,后台集成了一套负载均衡算法,红包加载引擎,自动结算引擎;
 * 另外还有一套对nosql 数据库用到极致的算法;
 * 一套分布式后台框架!
 * 算了!
 * 就这么多吧,有机会见面聊!
 * 
 */
  console.log("恭喜您找到了我!!!");
  console.log("如果您是vc,微信我可以帮你转介绍到我老板!");
  console.log("如果您是前端、后端、大数据、算法攻城狮;直接微信我,");
  console.log("相信有不错的职位等着您!");
  console.log(" ....     ");
  console.log("此处省略1万字项目介绍");
  console.log(" ....     ");
  console.log("不管怎么说,看到这里,说明");
  console.log("您还是对我们的项目感兴趣，请联系我吧！");
  console.log("水信负责人联系方式，姓名:杨家荣，电话微信同号:18817592927");

$(function(){

		   var array = [""];
			inputFn('.cy-adv-tit input', 0);
		  function inputFn(ele, num) {
		    $(ele).keyup(function(){
		      var val = $(this).val().trim();
		      array[num] = val;
		      inputArray();
		    });
		  }
		  function inputArray() {
		    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
		      if (array[i] == "" ||　array[i] == null) {
		        $(".cy-redQ-btn").css("background",'#C1C1C4');
		        return;
		      }
		    }
		    $(".cy-redQ-btn").css("background",'#FC3768');
		  }
})
var code=GetQueryString("code");
 new_msg=GetQueryString("new_msg");
$('title').html('第'+code+'次,悄悄告诉你,这个一个现金红包,水信APP口令红包输入<<'+new_msg+'>>领取更大支付宝现金红包!');
$('.waterchat').html('水信APP口令红包输入\'\''+new_msg+'\'\'领取更大支付宝现金红包')
		
$(".cy-redQ-btn").click(function(){
		var url="http://c1.waterchat.com.cn:9264/gateway-service/pay/pay-service/pay/getpay";
	  	var payphone = $(".cy-adv-tit input").val();
	  	var fid="0";
		var gid="0";
		var mac=r
		var prize_msg=GetQueryString("msg");
		var token="ypjggtt";
		var uid="0"
	  	var params={"fid":"0","uid":"0","payphone":payphone, "gid":"0","prize_msg":prize_msg,"mac":r,"token":token,};
		$.ajaxSettings.async = false;
		$.post(url,params,function(result){
			if(result.state==1){
				console.log(result.data);
				var getmonkey = result.data.getmonkey;
				var prize_msg = result.data.prize_msg;
                setTimeout(function(){
	$(".falseTip span").css('display','inline-block').html('支付宝现金红包领取成功,请查看支付宝;试试下载水信APP输入红包口令,领取更大支付宝现金红包');
                },500);
			}else{	
			 	$(".falseTip span").css('display','inline-block').html(result.message+'试试下载水信APP输入红包口令,领取更大支付宝现金红包');
                setTimeout(function(){
                  $(".falseTip span").css('display','none');
                },2000);
			}
		})

})


function GetQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if(r != null) return decodeURI(r[2]);
			return null;
		}
var r=now_data()
function now_data(){
	var myDate = new Date()
	return myDate.getTime();
}
//var r=randomNum(10000,10000000)
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 

