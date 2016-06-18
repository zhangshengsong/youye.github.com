$(function(){
    $("#main_dclt_nav").find("li").on("click",function(){
        var $index=$(this).index()/2;
        $(this).addClass("action").siblings().removeClass("action");
        $(".main_dcl_box").hide();
        $(".main_dcl_box").eq($index).show();
        $("body,html").animate({"scrollTop":"557"},10);
    });
    
    $(window).on("scroll",function(evt){
    	if($(this).scrollTop()>$(".main_deta_contail").position().top&&$(this).scrollTop()<$(".main_deta_contail").position().top+$(".main_dc_left").outerHeight()){
    		$(".main_dcl_top").css({"position":"fixed","top":"0"});
    	}else{
    		$(".main_dcl_top").css({"position":"","top":""});
    	}
    });
    
    
    $.ajax({
    	type:"get",
    	url:"../data/detail.json",
    	async:true,
    	success:function(res){
    		var data=res.data;
    		var html='';
    		for(var i in data){
    			if($.cookie("GoodID")==data[i].id){
    				$(".main_d_tit").eq(0).html(data[i].tit);
    				$(".main_d_left").find("img").attr("src",data[i].imgurl);
    				html+='<span class="main_d_price">￥'+data[i].price+'</span><div class="main_d_smlcon"><em>';
    				html+=data[i].disc+'</em><span>￥'+data[i].old_price+'</span></div>';
    				$(".main_d_box").eq(0).html(html);
    				html='';
                    var main_db_pingtit=Math.ceil(12*Number(data[i].score));
                    html+='<span class="main_db_pingtit">商品评价:</span><em class="main_db_xing"><em class="main_db_xingkong" style="width: '+main_db_pingtit+'px;"></em></em><i class="main_db_fen">';
    				html+=data[i].score+'分</i><div class="main_db_ping"><i>'+data[i].commit+'</i>人评论</div>';
    				$(".main_d_box").eq(1).html(html);
    				html='';
    				$(".main_d_buypeo").find("em").html(data[i].buy);
    				
    				$(".main_dclt_buy").find("em").html(data[i].buy);
    				$("#main_dclt_nav li").eq(1).html('用户点评('+data[i].commit+')<em class="new"></em>');
    				
    				for(var j=0;j<6;j++){
    					if(data[i][j]){
    						html+='<dd>'+data[i][j]+'</dd>';
    					}
    					
    				}
 
    				$(".main_dclb_ta").html(html);
    				html='';
    				for(var j=0;j<data[i].showimg.length;j++){
    					html+='<img src="'+data[i].showimg[j]+'" />';
    				}
    				$("#main_dclb_show").html(html);
    				html='';
    			}
    		}
    	}
    	
    });
    
    
    
    
});