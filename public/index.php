<?php
//Get Extention Fnction
function getExtention()
{
	$server_name = explode('.',$_SERVER['SERVER_NAME']);
	unset($server_name[0]);
	unset($server_name[1]);

	return array_values($server_name);
}
//Get Client
function getAgentClient()
{
	$extention = getExtention();
	//check client server, hostname, ip
	if(in_array($_SERVER['SERVER_NAME'],['localhost','127.0.0.1'])) return 'demo';//for development mode/local host

	if (empty($extention))
	{
		$result = str_replace('-', '_', explode('.', $_SERVER['SERVER_NAME'])[1]) . '-';
	}else{
		$result = str_replace('-', '_', explode('.', $_SERVER['SERVER_NAME'])[1]) . ($extention[0] != 'com' ? '-' . implode('-', $extention) : '');
	}

	return $result;
}
if ( in_array($_SERVER["REMOTE_ADDR"],  array('167.99.79.157','36.78.248.180','118.151.221.206','103.10.104.4')) ) { echo ''; exit(); }


// Define path to application directory
defined('APPLICATION_PATH')
    || define('APPLICATION_PATH', realpath(dirname(__FILE__) . '/../application'));

// Define application environment
defined('APPLICATION_ENV')
    || define('APPLICATION_ENV', (getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') : 'production'));

// Ensure library/ is on include_path
if (APPLICATION_ENV != 'production') {
	set_include_path(dirname(dirname(dirname(__FILE__))).'/ZendFramework-1.12.20/library');
}
set_include_path(implode(PATH_SEPARATOR, array(
    realpath(APPLICATION_PATH . '/../library'),realpath(APPLICATION_PATH . '/models'),
    get_include_path(),
)));

/** Zend_Application */
//require_once 'Zend/Application.php';
//require_once 'Zend/Config/Xml.php';
require_once 'Zend/View.php';
require_once 'Zend/Controller/Action/HelperBroker.php';
require_once 'Zend/Session.php';
require_once 'Zend/Date.php';
require_once 'Zend/Config/Ini.php';
require_once 'Zend/Db.php';
require_once 'Zend/Controller/Front.php';
require_once 'Zend/Db/Table.php';

$config = new Zend_Config_Ini(APPLICATION_PATH . DIRECTORY_SEPARATOR . 'configs/'. getAgentClient() . '.ini', APPLICATION_ENV);
// OPEN DATABASES
$params = array (
	'host'		=> $config->database->host,
	'username'	=> base64_decode($config->database->username),
	'password'	=> base64_decode($config->database->password),
	'dbname'	=> $config->database->dbname
);

$db = Zend_Db::factory($config->database->adapter, $params);
Zend_Db_Table::setDefaultAdapter($db);

define('NISP_ACCOUNT', $config->nisp->account);
define('ALIAS', $config->alias->data);
define('DATABASE', $params['dbname']);
define('MAYBANK_ACCOUNT', $config->maybank->account);
define('KARTUKU_ACCOUNT', $config->kartuku->account);
define('NICEPAY_ACCOUNT', $config->nicepay->account);
define('DOKU_ACCOUNT', $config->doku->account);
define('TMONEY_ACCOUNT', $config->tmoney->account);
define('AGENT_CLIENT', $config->agent->client);
define('LOGIN_URL', $config->url->login);

// VIEWRENDERER HELPER
$viewRenderer = Zend_Controller_Action_HelperBroker::getStaticHelper('viewRenderer');
//$viewRenderer->setView(new Zend_View);
$viewRenderer->setViewSuffix('php');
$viewRenderer->setNeverRender(true);

$front = Zend_Controller_Front::getInstance();
$front->setControllerDirectory(array(
	'default' => '../application/controllers',
));

$front->dispatch();




// Create application, bootstrap, and run
//$application = new Zend_Application(APPLICATION_ENV, APPLICATION_PATH . '/configs/application.ini');
//$application->bootstrap()
//            ->run();