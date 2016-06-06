chrome.extension.onMessage.addListener( function(request,sender,sendResponse)
{
    console.log("got the message");
    if( request.action === "sign_in" )
    {
        
        launch_web_auth_flow_and_store_access_token();
        console.log("got the incoming action");
        sendResponse({result : 'completed'});        
    }
});