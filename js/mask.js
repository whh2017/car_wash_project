
var noscroll = function eventHandler(e) {
   		e.preventDefault();
   	}
/* 设置遮罩层 */
function MaskIt(obj){
	var hoverdiv = '<div class="div-mask" style="position: fixed; width: 100%; height: 100%; left: 0; top: 0; background-color: #000; opacity: .7; z-index:5; filter:Alpha(Opacity=80);"></div>';
	$('body').on('touchmove',noscroll);
	$('body').css("overflow-y","hidden");
	$(obj).before(hoverdiv);
	$(obj).data("mask",true);
}

/* 取消遮罩层 */
function UnMaskIt(obj){
	if($(obj).data("mask")==true){
		$(obj).parent().find(".div-mask").remove();

		$(obj).data("mask",false);
	}
	$('body').off('touchmove',noscroll);
	$('body').css("overflow-y","auto");
	$(obj).data("mask",false);
}
