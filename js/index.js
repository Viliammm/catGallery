function filter(){
	$(".filter").change(function(e){
		var id = $("#"+e.target.id);
		var group = $("."+e.target.id);
		var check = id.prop("checked");
		if(check === true){
			group.fadeIn(1000);
		} 

		else if(check === false){
			group.fadeOut(750);
		}
	});
}

filter();
