function changeTrans(url, action, id, status)
{
	switch (action) {
		case 'success':
			if (status != 'S')
			if (confirm('Change to Success ?')) {
				var form = document.form;
				var method = form.method;
				var params = 'transorder_id='+id;
				_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
				var ajax = new Ajax.Updater(
					{success: 'result'},
					url,
					{method: method, parameters: params, onComplete: mainUpdateContent});
			}
			break;
		case 'cancel':
			if (status != 'U')
			if (confirm('Cancel this transaction ?')) {
				var form = document.form;
				var method = form.method;
				var params = 'transorder_id='+id;
				_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
				var ajax = new Ajax.Updater(
					{success: 'result'},
					url,
					{method: method, parameters: params, onComplete: mainUpdateContent});
			}
			break;
		case 'retry':
			if (confirm('Retry this transaction ?')) {
				var form = document.form;
				var method = form.method;
				var params = 'transorder_id='+id;
				_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
				var ajax = new Ajax.Updater(
					{success: 'result'},
					url,
					{method: method, parameters: params, onComplete: mainUpdateContent});
			}
			break;
		case 'complaintR':
			if (status != 'A') return false;
			var form = document.form;
			var method = form.method;
			var params = 'complaint_id='+id;
			_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
			var ajax = new Ajax.Updater(
				{success: 'result'},
				url,
				{method: method, parameters: params, onComplete: mainUpdateContent});
			break;
		case 'undefineR':
			if (status != 'A') return false;
			var form = document.form;
			var method = form.method;
			var params = 'undefine_id='+id;
			_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
			var ajax = new Ajax.Updater(
				{success: 'result'},
				url,
				{method: method, parameters: params, onComplete: mainUpdateContent});
			break;
		case 'undefineDel':
			if (confirm('Delete this undefine ?')) {
				var form = document.form;
				var method = form.method;
				var params = 'undefine_id='+id;
				_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
				var ajax = new Ajax.Updater(
					{success: 'result'},
					url,
					{method: method, parameters: params, onComplete: mainUpdateContent});
			}
			break;
		case 'delete':
			if (confirm('Delete! Are you sure ? ')) {
				var form = document.form;
				var method = form.method;
				var params = 'id='+id;
				_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
				var ajax = new Ajax.Updater(
					{success: 'result'},
					url,
					{method: method, parameters: params, onComplete: mainUpdateContent});
			}
			break;
		case 'active':
			if (status == 'A') return false;
			if (confirm('Set to Active ? ')) {
				var form = document.form;
				var method = form.method;
				var params = 'id='+id;
				_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
				var ajax = new Ajax.Updater(
					{success: 'result'},
					url,
					{method: method, parameters: params, onComplete: mainUpdateContent});
			}
			break;
		case 'inactive':
			if (status == 'I') return false;
			if (confirm('Set to Inactive ? ')) {
				var form = document.form;
				var method = form.method;
				var params = 'id='+id;
				_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
				var ajax = new Ajax.Updater(
					{success: 'result'},
					url,
					{method: method, parameters: params, onComplete: mainUpdateContent});
			}
			break;
		default:
			if (confirm('Set to '+ action + ' ? ')) {
				var form = document.form;
				var method = form.method;
				var params = 'id='+id;
				_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
				var ajax = new Ajax.Updater(
					{success: 'result'},
					url,
					{method: method, parameters: params, onComplete: mainUpdateContent});
			}
	}
}

function changeStatus(url, action, id, status)
{
	switch (action) {
		case 'available':
			if (status != 'A')
			if (confirm('Change to Available ?')) {
				var form = document.form;
				var method = form.method;
				var params = 'id='+id;
				_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
				var ajax = new Ajax.Updater(
					{success: 'result'},
					url,
					{method: method, parameters: params, onComplete: mainUpdateContent});
			}
			break;
		case 'unavailable':
			if (status != 'U')
			if (confirm('Change to Unavailable ?')) {
				var form = document.form;
				var method = form.method;
				var params = 'id='+id;
				_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
				var ajax = new Ajax.Updater(
					{success: 'result'},
					url,
					{method: method, parameters: params, onComplete: mainUpdateContent});
			}
			break;
		case 'problem':
			if (status != 'P')
			if (confirm('Set status problem ?')) {
				var form = document.form;
				var method = form.method;
				var params = 'id='+id;
				_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
				var ajax = new Ajax.Updater(
					{success: 'result'},
					url,
					{method: method, parameters: params, onComplete: mainUpdateContent});
			}
			break;
		default:
			return false;
	}
	
}

function info(url, id, status)
{
	var form = document.form;
	var params = 'id=' + encodeURIComponent(id)
				;
	_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
	var ajax = new Ajax.Updater(
		{success: 'views'},
		url,
		{method: 'post', parameters: params, onComplete: infoUpdate});
}

function infoUpdate()
{
	_disable = false;$('loadContent').innerHTML = '';
}
/*
function share(url, w, h)
{
	if (confirm('Share Booking Code ? ')) {
		$('okBtn').disabled = true;
		popUpWin(url,w,h);
	}

}
*/
function changeStyle()
{
	var form = document.form;
	var method = form.method;
	var params = 'style='+form['style'].value;
	var url = '/user/ajaxchangeprofile';
	var ajax = new Ajax.Updater(
		{success: 'result'},
		url,
		{method: method, parameters: params, onComplete: refreshContent});
}

function goHistory(page)
{
	this.browser = new Browser();
	if (this.browser.isNS) {
		if (page == 0) {
			window.location.reload(true);
		} else {
			history.go(page);
		}
	} else {
		history.go(page);
	}
}

function refreshContent(request)
{
	var response = request.responseText.parseJSON();
	if (response['result'] == 'ok') {
		goHistory(0);
	} else if (response['result'] == 'error') {
		alert(response['reason']);	
	}
}

function selectInfo(url, id, page)
{
	var form = document.form;
	var params = 'id=' + encodeURIComponent(id)
				+ '&page=' + page
				;
	_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
	var ajax = new Ajax.Updater(
		{success: 'views'},
		url,
		{method: 'post', parameters: params, onComplete: enableHref});
}

function selectInfoUpdate()
{
	_disable = false;$('loadContent').innerHTML = '';
}

function updatedeposit(url)
{
	var form = document.form;
	var method = form.method;
	//var //params = 'id='+id;
	//url,
	//{method: method, parameters: params, onComplete: mainUpdateContent});
	var _disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
	var ajax = new Ajax.Updater(
		{success: 'result'},
		url,
		{method: method, parameters: params, onComplete: refreshContent });
}

var lion_loading = false;
function openExpand(url)
{
	//switch (target) {
	//case 'lion' :
		//if (lion_loading) {
		//	alert('Please wait until this screen is completely loaded !');
		//	return false;
		//}
		$('lionload').style.display = 'inline';
		$('lionload').innerHTML = '<img src="/images/loading-small.gif" />';
		lion_loading = true;
		//last_chk['0']=new Array();last_chk['50']=new Array();
		//last_choice['0']=new Array();last_choice['50']=new Array();
		//last_class['0']=new Array();last_class['50']=new Array();
		var ajax = new Ajax.Updater(
			{success: 'lionexpand'},
			url,
			{method: 'post', parameters: params, onComplete: lionUpdate});
		///break;
	//}
}
function lionUpdate(request)
{
	var response = request.responseText.parseJSON();
	if (response) {	
		if (response['result'] == 'CAPTCHA') {
			$('lionexpand').innerHTML = response['message'];
			sm(response['id'], 140, 90);
		} else {
			$('lionload').innerHTML = '';
			$('lionload').style.display = 'none';
			lion_loading = false;
		}
	} else {
		$('lionload').innerHTML = '';
		$('lionload').style.display = 'none';
		lion_loading = false;
	}
}
function lionCaptcha(type)
{
	var form = document.form;
	var url = '/bookingairlines/captcha';
	var params = 'captcha=' + encodeURIComponent($('captcha').value);
	if (type == 'search') {
		$('lionload').style.display = 'inline';
		$('lionload').innerHTML = '<img src="/images/loading-small.gif" />';
		var lion_loading = true;
		var ajax = new Ajax.Updater(
			{success: 'lionexpand'},
			url,
			{method: 'post', parameters: params, onComplete: captchaExpandUpdate});
	}
	return false;
}


function cancelCaptcha(type)
{
	switch (type) {
	case 'search' :
		$('lionload').innerHTML = '';
		$('lionload').style.display = 'none';
		lion_loading = false;
		break;
	}

	var form = document.form;
	var url = '/bookingairlines/cancelcaptcha';
	var params = null;
	var ajax = new Ajax.Updater(
			{success: 'result'},
			url,
			{method: 'post', parameters: params, onComplete: enableHref});
}
function captchaExpandUpdate(request)
{
//	lionUpdate(request);
	test('/bookingairlines/lion');
}


function test(url)
{
//	switch (target) {
//	case 'lion' :
		if (lion_loading) {
			alert('Please wait until this screen is completely loaded !');
			return false;
		}
		$('lionload').style.display = 'inline';
		$('lionload').innerHTML = '<img src="/images/loading-small.gif" />';
		lion_loading = true;
		//last_chk['0']=new Array();last_chk['50']=new Array();
		//last_choice['0']=new Array();last_choice['50']=new Array();
		//last_class['0']=new Array();last_class['50']=new Array();
		var ajax = new Ajax.Updater(
			{success: 'lionload'},
			url,
			{method: 'post', parameters: params, onComplete: refreshContent});
		//break;
	//}
}
function byPass(url)
{
	_disable = false;
	loadView('event', url);
}

function changestatusvoucher(url, w, h)
{
	$('okBtn').disabled = true;
	popUpWin(url,w,h);
}

function invoicevoucher(url, id)
{
		var form = document.form;
		var method = form.method;
		var params = 'id=' + id
					;
		var ajax = new Ajax.Updater(
			{success: 'views'},
			url,
			{method: 'get', parameters: params, onComplete: enableHref});
		
}


//jQuery( document ).ready(generateCaptcha);
jQuery( document ).ready(getToken);

function getToken()
{
	var host = window.location.host;
	var params = 'token=' + localStorage.getItem("token");
	//var params = 'token'+host+'=' + localStorage.getItem("token"+host);
	var url = '/admin/checktoken';
	var ajax = new Ajax.Updater(
	{success: 'result'},
	url,
	{method: 'post', parameters: params});
}

function deleteToken(request)
{
	var response = request.responseText.parseJSON();
	var host = window.location.host;
	if (response['result'] == 'error') {
		localStorage.removeItem('token'+host);
	}
	loadView(event,'/home/home');
}

function generateCaptcha()
{
	var url = '/admin/testcaptcha';
	var ajax = new Ajax.Updater(
	{success: 'result'},
	url,
	{method: 'post', parameters: params, onComplete: showCaptcha});
}

function showCaptcha(request)
{
	var response = request.responseText.parseJSON();
	if (response) {	
		if (response['result'] == 'CAPTCHA') {
			$('captchaRits').innerHTML = response['message'];
			sm(response['id'], 160, 90);
			timeout = setInterval(function() {
				hm('box');
				cancelCaptcha();
				alert('Captcha Timeout')
				if (timeout != null) {
					clearInterval(timeout);
					timeout = null;
					testdulu();
				}
			}, 30000)
		}
	}
}

function testdulu()
{
	var url = '/admin/logout';
	var ajax = new Ajax.Updater(
	{success: 'result'},
	url,
	{method: 'post', parameters: params});
}

function ritsCaptcha(type)
{
	if (timeout != null) {
		clearInterval(timeout);
		timeout = null;
	}
	var form = document.form;
	var url = '/admin/captcha';
	var params = 'captcha=' + encodeURIComponent($('captcha').value) 
	
	if (type == 'search') {
		//$('loadContent').style.display = 'inline';
		//$('loadContent').innerHTML = '<img src="/images/loading-small.gif" />';
		//loadContent = true;
		var ajax = new Ajax.Updater(
			{success: 'result'},
			url,
			{method: 'post', parameters: params, onComplete: checkCaptcha});
	
	}
	return false;
}

function checkCaptcha(request)
{
	var response = request.responseText.parseJSON();
	if (response) {	
		if (response['result'] == 'ok') {
			alert('oke');
		} else {
			generateCaptcha();
		}
	}
}
