alert("why is this shit not working")
function filter(){
	$(".filter").change(function(e){
		var id = $("#"+e.target.id);
		var group = $("."+e.target.id);
		var check = id.prop("checked");
		if(check === true){
			console.log("unchecked")
			group.addClass("visible")
		} 
		else {
			group.removeClass("visible")
		}
	});
}

filter();
