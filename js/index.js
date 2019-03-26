function filter(){
	$(".filter").change(function(e){
		var id = $("#"+e.target.id);
		var group = $("."+e.target.id);
		var check = id.prop("checked");
		if(check === true){
			group.addClass("visible");
		} 

		else if(check === false){
			group.removeClass("visible");
		}
	});
}

filter();
