	$(".filter").change(function(){
	var checked = document.querySelector("#kitten").checked;
	if(checked != true){
		console.log("unchecked")
		$(".img1").addClass("hidden")
	} 
	else {
		$(".img1").removeClass("hidden")
	}
});
