var base_url = "http://localhost:3000/";
var sign_up_url = base_url + "users/sign_up";
var post_jmaps_url = base_url + "jmaps/create";
var auth_token_key = "authentication_token";
/****
Makes the xhr call to the requested url.
@param url[String] : target url.
@param headers[Object] : a set of key value pairs to be added as headers to the request.
@param method[String] : 'GET'/'POST' etc.
@param flag[Boolean] : the flag to pass to the xhr request.
@param post_params[Object] : set of key value pairs to be used as params in the request body of a post request.
@param get_params[Object] : set of key value pairs, to be used as params in the get url.
****/
function xhr_call(){

}


/****
Launches the chrome_web_auth_flow and gets the access token.
//expects a parameter called 
authentication_token=
****/
function launch_web_auth_flow_and_store_access_token(){
	redirect_url = chrome.identity.getRedirectURL();

    chrome.identity.launchWebAuthFlow(
        {'url': sign_up_url + "?redirect_url="+ redirect_url, 'interactive': true},
        function(redir) { 
            
        	set_auth_token($.url('?authentication_token',redir));
        	

     });
}

/***
adds the access token to the xhr call headers,
if the auth token is not present, adds nothing.
***/
function add_authorization_headers(){

}

/***
posts the jmap as a json object to the jmaps website.
if the authorization fails, prompts the user to launch the web auth flow.
****/
function post_jmap(){

}


/***
@return : auth_token[String] - string or null.
****/
function get_auth_token(){

	chrome.storage.local.get(auth_token_key, function (result) {
        if(result.auth_token_key == null){
        	return null
        }
        else{
        	return result.auth_token_key
        }
    });

}

/****
@param: auth_token[String] - the authentication token.
@return: null.
****/
function set_auth_token(auth_token){
	if(auth_token != null){
		chrome.storage.sync.set({auth_token_key: auth_token}, function() {
		         	
		});
	}
}