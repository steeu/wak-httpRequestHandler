
addHttpRequestHandler('/download', 'httpRequestHandler.js', 'download');

/**
 * download httprequest handler
 *
 * @return {Blob} file
 */

function download(request, response) {
	try {
	    var file = File(ds.getDataFolder().path + request.urlPath),
	    	blob;
	    
	    // validate file
	    if (!file.exists) {
	        response.statusCode = '404';
	        return;
	    }
	    // add headers to force download
		response.headers['Content-Type'] = 'application/octet-stream';
	    response.headers['Content-Disposition'] = 'attachment; filename="' + file.name +'"';
		// convert to blob
		blob = file.toBuffer().toBlob();
		// remove file from server
		file.remove();
			
	    return blob;		
	} catch (e) {
		WAKTOOLS.log(e);
		return e;		
	}
};
