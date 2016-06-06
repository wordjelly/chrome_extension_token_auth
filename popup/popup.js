$(document).on('click','#sign_in',function(){
	chrome.extension.sendMessage({action: "sign_in"},
        function (response) {
    });
});
$(document).ready(function(){
	
	chrome.extension.sendMessage({action: "check_auth_token"},function(response){
		console.log(response);
		if(response["token"] == null){
			$("#auth_token_status").html("the token is null");
		}
		else{
			$("#auth_token_status").html(response["token"]);
		}
		
	});
})
