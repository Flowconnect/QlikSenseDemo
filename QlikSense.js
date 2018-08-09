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

var config = {
  host: 'branch.qlik.com',
  isSecure: true,
  prefix: '/anon/'
}
var qBase = 'https://branch.qlik.com/anon/resources';

require.config({
  paths: {
    'qlik': 'https://branch.qlik.com/anon/resources/js/qlik'
  },
  baseUrl: qBase
});

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
	app.getObject('QV07','XneNmFw');
	app.getObject('QV06','jjdpbG');
	app.getObject('QV05','jUVFryt');
	app.getObject('QV04','pUVPTx');
	app.getObject('QV03','SsbXFv');
	app.getObject('QV02','naeEJf');
	app.getObject('QV01','jLtqUHA');
	//create cubes and lists -- inserted here --
	 	var $exportButton = $('<button />');
  $exportButton.html('Export Data')
	$exportButton.click(function() {
		object.then(function(model) {
			 qlik.table(model).exportData({download: true})
    })
  })
  
  $exportButton.appendTo('#chartarea')
} );
