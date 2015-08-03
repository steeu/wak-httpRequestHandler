
addHttpRequestHandler('/', 'redirect.js', 'redirectToHttps');

/**
 * redirect to https
 */

function redirectToHttps(request, response){
  // validate request
	if (!request.isSSL && application.httpServer.ssl.enabled) { 
	  // if the current request is not ssl, but the server has ssl enabled
		response.contentType = "text/html; charset=UTF-8";
		response.statusCode = 307;
		
		var $port = application.httpServer.ssl.port;
		var $h = request.host.split(':');
		var $host = $h[0];
		var $url = 'https://' + $host + ':' + $port+request.urlPath;
		
		response.headers["Location"] = $url;
	}
	return null;
}
