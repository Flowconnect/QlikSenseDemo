/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
 var prefix = '/vp/';
 var config = {
 	host: 'sense.flowconnect.nl',
 	prefix: prefix,
 	port: 443,
 	isSecure: true
 };
 require.config( {
 	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
 } );

 require( ["js/qlik"], function ( qlik ) {
 	qlik.setOnError( function ( error ) {
 		$( '#popupText' ).append( error.message + "<br>" );
 		$( '#popup' ).fadeIn( 1000 );
 	} );
 	$( "#closePopup" ).click( function () {
 		$( '#popup' ).hide();
 	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('6aeb4aa7-fb64-48bd-be28-c939cc4f13e3', config);

	//get objects -- inserted here --
	app.getObject('CurrentSelections','CurrentSelections');
	app.getObject('QV01','jLtqUHA');
	//create cubes and lists -- inserted here --

} );
