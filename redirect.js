
/**
 * redirect to https
 * addHttpRequestHandler('/', 'HttpRequestHandler/redirect.js', 'redirectToHttps');
 */

function redirectToHttps(request, response){
	try {
		// validate if the current request is not ssl but the server has ssl enabled
		if (!request.isSSL && application.httpServer.ssl.enabled) {
			var port = application.httpServer.ssl.port;
			var h = request.host.split(':');
			var host = h[0];
			var url = 'https://' + host + ':' + port + request.urlPath;
			
			// response
			response.statusCode = 307;
			response.headers['Content-Type'] = 'text/html; charset=UTF-8';
			response.headers['Location'] = url;
		}
		
		return null;		
	} catch (e) {
		WAKTOOLS.log(e);
		return e;		
	}
}
