chrome.extension.onMessage.addListener( function(request,sender,sendResponse)
{

    if( request.action === "sign_up" ){

         get_auth_details(function(auth_details){

            launch_web_auth_flow_and_store_access_token(auth_details,function(){

                    sendResponse({result : 'completed'});

            });

         });
 
    }
    else if(request.action === "check_auth_token"){
    	get_auth_details(function(auth_t){
    		var q = {token : auth_t};
    		sendResponse(q);
    	});
    	
    }
    else if(request.action === "get_user"){
        get_user();
        sendResponse({result : 'completed'});
    }

    return true;
});