$(function(){
    // 通过设置本flag动态判断显示区域状态
    var disFlag = false;
    // 判断顶部浮动区域的个人信息显示
    var disFlagFloat = false;
    $("#personInfoArea").hide();
    $("#floatPersonInfoArea").hide();
    $("#topFloat").hide();
    $("#returnTop").hide();
    $("#personInfo,#headView,#floatHeadView,#floatPersonInfo").click(function(e){
        var thisId = $(this).attr("id");
        if(thisId == "personInfo" || thisId == "headView"){
            $("#personInfoArea").slideToggle();
            disFlag = true;
        }else{
            $("#floatPersonInfoArea").slideToggle();
            disFlagFloat = true;
        }
        e.stopPropagation(); //跳过本次事件：点击body时不执行
    })
    // $("#personInfoArea").hover(function(){},function(e){
    // 	$("#personInfoArea").slideToggle();
    // 	e.stopPropagation();
    // 	disFlag = false;
    // })
    // $("#floatPersonInfoArea").hover(function(){},function(e){
    // 	$("#floatPersonInfoArea").slideToggle();
    // 	e.stopPropagation();
    // 	disFlag = false;
    // })
    // 当鼠标点击个人信息区域外时关闭该区域
    $("body").click(function(){
        if(disFlag){
            $("#personInfoArea").slideUp();
            disFlag = false;
        }
        if(disFlagFloat){
            $("#floatPersonInfoArea").slideUp();
            disFlagFloat = false;
        }
    })
    // 返回页面顶部按钮点击事件
    $("#returnTop").click(function(){
        // window.location.href = "#";
        // 设置界面滑动到顶端，上面代码无滑动，表现的太生硬了
        $("html,body").animate({
            scrollTop: 0
        });		//在该位置添加  },'slow');  页面会缓慢的滑动
    })
    // 检测用户滚动页面事件
    $(window).scroll(function(){
        var topHeight = $(window).scrollTop();
        if(topHeight > 250){
            // alert(1);
            $("#topFloat").slideDown();
        }else{
            $("#topFloat").hide();
        }
        // 用于显示返回顶部按钮
        if(topHeight > 350){
            $("#returnTop").fadeIn();
        }else{
            $("#returnTop").fadeOut();
        }
    })
})
