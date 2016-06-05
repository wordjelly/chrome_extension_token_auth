$(document).on('click','#sign_in',function(){
	if(get_auth_token()){
		//the token exists.
	}
	else{
		launch_web_auth_flow_and_store_access_token();
	}
});

$(document).ready(function(){

	//just checks if the auth token exists, and if yes, then says so
	var auth_token = get_auth_token();
	if(auth_token!=null){
		$("#auth_token_status").html("THE TOKEN IS:" + auth_token);
	}
	else{
		$("#auth_token_status").html("there is no token.")
	}
	
});

