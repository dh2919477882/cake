$(function(){
  function task(){
    //获取到有active属性的图片
	var img=$(".active");
	  img.removeClass("active")
	var a=$(".show")
		  a.removeClass("show")
	if(img.next().length==0){
	  var next=img.parent().children("img:first-child")
	  var index=0
	}else{
	  var next=img.next()
	  var index=next.index()
	}
      next.addClass("active")
	  $("div.anniu").children(`:eq(${index})`).addClass("show")
		                                    .siblings().removeClass("show")
  }
	  var timer=setInterval(task,3000)
	/*鼠标移入移出*/
   $("div.main3").mouseover(function(){
      clearInterval(timer)
   })
   $("div.main3").mouseout(function(){
      timer=setInterval(task,3000)
   })
    /*左右箭头*/
	var left=$("div.nav1")
    var right=$("div.nav2")
	right.click(function(e){
		e.preventDefault();
		e.stopPropagation();
	  task()
	})
	left.click(function(e){
		e.preventDefault();
		e.stopPropagation();
		var img=$(".active")
			img.removeClass("active")
	    var a=$(".show")
			a.removeClass("show")
		if(img.prev().length==0){
		  var prev=img.parent().children("img:last-child")
		  var index=img.parent().children().length-1
		}else{
		  var prev=img.prev()  
		  var index=prev.index()
		}
          prev.addClass("active")
		  $("div.anniu").children(`:eq(${index})`).addClass("show")
		                                    .siblings().removeClass("show")
	})
	/*下面四个点*/
	$("div.anniu").on("click","a",function(){
	    var a=$(this).addClass("show")
			a.siblings().removeClass("show")
		var index=a.index();
		   $("div.lunbo").children(`:eq(${index})`).addClass("active").siblings().removeClass("active")
		
		
	})
})