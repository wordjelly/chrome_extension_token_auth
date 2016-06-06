chrome.extension.onMessage.addListener( function(request,sender,sendResponse)
{

    if( request.action === "sign_in" ){
        launch_web_auth_flow_and_store_access_token();
        sendResponse({result : 'completed'});  
        return false;      
    }
    else if(request.action === "check_auth_token"){
    	get_auth_token(function(auth_t){
    		var q = {token : auth_t};
    		sendResponse(q);
    	});
    	return true;
    }
});