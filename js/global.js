$(function(){
	//适配
	$('html').screenAdaptation();
});

//扩展jq.fn
$.extend($.fn, {

	//屏幕适配 ***
	screenAdaptation : function(){
		var that = $(this);
		var iWidth = document.documentElement.getBoundingClientRect().width;
		iWidth=iWidth>640?640:iWidth;
		iWidth=iWidth<320?320:iWidth;
		that[0].style.fontSize=iWidth/6.4+"px";
	},

	//购物车+- ***
	addlesNum : function(opts){
		var def = {
			  addCls : ".add",
			  lesCls : ".les",
			  numCls : ".num"
		};
		var that = $(this);
		var setting = $.extend(def,opts);

		that.find(setting.addCls).bind("click",fnAdd);
		that.find(setting.lesCls).bind("click",fnLes);

		function fnAdd(){
			var val = that.find(setting.numCls).val();
			that.find(setting.numCls).val(parseInt(val) + 1);
			fnKeydown();
		}

		function fnLes(){
			var val = that.find(setting.numCls).val();
			val > 1 ? that.find(setting.numCls).val(parseInt(val) - 1) : that.find(setting.numCls).val(1);
			fnKeydown();
		}

		function fnKeydown(){
			that.find(setting.numCls).keydown(function(e){
				if(e.keyCode!=8&&(e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105)){
					return false;
				}
			});
		}
	}
});