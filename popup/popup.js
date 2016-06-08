$(document).on('click','#sign_up',function(){
	chrome.extension.sendMessage({action: "sign_up"},
        function (response) {
    });
});

$(document).on('click','#get_user',function(){
	chrome.extension.sendMessage({action: "get_user"},
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
