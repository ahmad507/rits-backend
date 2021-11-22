var popUp=0;
var subPopUp=0;
var popUp1;
var winOpen=0;
var alarmSound = null;
var sound4Embed = null;
var _disable = false;
var _stillPlay = false;
var _first = true;

function Browser()
{
  var ua, s, i;

  this.isIE    = false;  // Internet Explorer
  this.isOP    = false;  // Opera
  this.isNS    = false;  // Netscape
  this.version = null;

  ua = navigator.userAgent;

  s = "Opera";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isOP = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  s = "Netscape6/";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  // Treat any other "Gecko" browser as Netscape 6.1.

  s = "Gecko";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = 6.1;
    return;
  }

  s = "MSIE";
  if ((i = ua.indexOf(s))) {
    this.isIE = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }
}

function popUpWin(URLStr, w, h) //using don't delete
{
  var width=w, height=h;
  var left = (screen.width/2) - width/2;
  var top = (screen.height/2) - height/2;
  var styleStr = 'width='+width+',height='+height+',left='+left+',top='+top+',screenX='+left+',screenY='+top+',copyhistory=yes';
	if (popUp) {
		if (!popUp.closed) popUp.close();
	}
  	popUp = window.open(URLStr, 'popUp', styleStr+',scrollbars=yes, resizable=yes, location=no, status=no, toolbar=no');
	popUp.focus();
	return false;
}

function popUpWin2(URLStr, w, h) //using don't delete
{
  var width=w, height=h;
  var left = (screen.width/2) - width/2;
  var top = (screen.height/2) - height/2;
  var styleStr = 'width='+width+',height='+height+',left='+left+',top='+top+',screenX='+left+',screenY='+top+',copyhistory=yes';
	if (popUp) {
		if (!popUp.closed) popUp.close();
	}
  	popUp = window.open(URLStr, 'popUp', styleStr+',scrollbars=yes, resizable=yes, location=no, status=no, toolbar=no, menubar=yes');
	popUp.focus();
	return false;
}


function windowOpen2(url,w,h) //using don't delete
{
  var width=w, height=h;
  var left = (screen.width/2) - width/2;
  var top = (screen.height/2) - height/2;
  var styleStr = 'width='+width+',height='+height+',left='+left+',top='+top+',screenX='+left+',screenY='+top;
	winOpen = window.open(url,'winOpen',styleStr+',scrollbars=no,resizable=yes')
//	"top="+ymax+",left="+xmax+",screenX="+xmax+",screenY=0,width="+w+",height="+h+",status=no,toolbar=no,menubar=no,scrollbars=no,resizeable=no,location=no");
	winOpen.focus();
	return false;
}

function doDisabled(something) {
	document.getElementById(something).disabled = true;
}

function ltrim(str)
{
	var s = '';
	for (var i=0; i < str.length; i++) {
		if (str.substr(i,1) != ' ') {
			s = str.substr(i);
			break;
		}
	}
	
	return s;
}

function checkAll(checked)
{
	var form = document.form;
	var doc;
	for (var i = 0; i < form.elements.length; i++) {
		if ((form.elements[i].type == 'checkbox') && (form.elements[i].name.substr(0,5) == 'rowid')) {
			form.elements[i].checked = checked;
			var row_id = form.elements[i].id.substr(3);
			doc = document.getElementById('rowtr'+row_id);
			if (checked) doc.className=rowColor('out',row_id); else doc.className=rowColor('out',row_id);
		}
	}
}

function rowColor(eventMouse,i)
{
	var result='';
	switch (eventMouse) {
	case 'over' :
		if (document.form['row'+i].checked) {
			result = 'childTable table_row_mouseover_checked'; //#FFE7B2';
		} else {
			result = 'childTable table_row_mouseover_notchecked'; //'#CCFFCC';
		}
		break;
	case 'out' :
		if (document.form['row'+i].checked) {
			result = 'childTable table_row_mouseout_checked'; //'#FFCC99';
		} else if (i%2 != 0) {
			result = 'childTable table_row_mouseout_notchecked_odd'; //'#EEEEFF';
		} else {
			result = 'childTable table_row_mouseout_notchecked_even'; //'#E1E1FF';
		}
		break;
	/*
	case 'overnocheckbox' :
		result = '#CCFFCC';
		break;
	case 'outnocheckbox' :
		if (i%2 !=0) {
			result = '#EEEEFF';
		} else {
			result = '#E1E1FF';
		}
		break;
	*/
	default :
		result = 'table_row_defaut'; //'#000000';
	}
	return result;
}

function sendAction(url_forward)
{
	var form = document.form;
	if ((url_forward=='') || (url_forward==undefined)) {
		alert("Please contact vendor. This module under construction !!!");
		return false;
	}
	if (!((form['multiaction'].value == 'NULL') || (form['multiaction'].value == '-1'))) {
		if (confirm('Are You Sure?')) {
			var url = url_forward + '/ajaxselect';
			var method = form.method;
			var params = 'action=' + form['multiaction'].value;
			for (var i = (form.elements.length)-1; i >= 0; i--) {
				if (form.elements[i].disabled) continue;
				if ((form.elements[i].type == 'checkbox') && (form.elements[i].name.substr(0,5) == 'rowid')) {
					if (form.elements[i].checked) {
						params = params + '&' + form.elements[i].name + '=' + form.elements[i].value;
					}
				}
			}
			var ajax = new Ajax.Updater(
				{success: 'result'},
				url,
				{method: method, parameters: params, onComplete: mainUpdateContent});
			_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
		}
	}
}

function sendManySms(url_forward, $action)
{
	var form = document.form;
	if ((url_forward=='') || (url_forward==undefined)) url_forward = form.action;
	var url = url_forward + '/smsrequest';
	var method = form.method;
	var params = 'action=' + $action;
	var j = form.elements.length-1;
	for (var i = (form.elements.length)-1; i >= 0; i--) {
		if (form.elements[i].disabled) continue;
		if ((form.elements[i].type == 'checkbox') && (form.elements[i].name.substr(0,5) == 'rowid')) {
			if (form.elements[i].checked) {
				params = params + '&' + form.elements[i].name + '=' + form.elements[i].value;
			}
		}
	}
	var ajax = new Ajax.Updater(
		{success: 'result'},
		url,
		{method: method, parameters: params, onComplete: mainUpdateContent});
	_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
}

function checkSmsSendAction(url_forward)
{
	var form = document.form;
	if (!((form['multiaction'].value == 'NULL') || (form['multiaction'].value == '-1'))) {
		switch (document.form['multiaction'].value) {
		case 'smsRs' :
			sendManySms(url_forward, 'reseller');
			break;
		default :
			sendAction(url_forward);
		}
	}
}

function checkTransactionReport()
{
	var url = '/default/traffic/ajaxwarningcount';
	var ajax = new Ajax.Updater(
		{success: 'warning_cnt'},
		url,
		{method: 'post', parameters: null});

	/*var url = '/default/view/ajaxcomplaintcount';
	var ajax = new Ajax.Updater(
		{success: 'complaint_cnt'},
		url,
		{method: 'post', parameters: null});

	var url = '/default/view/ajaxundefinecount';
	var ajax = new Ajax.Updater(
		{success: 'undefine_cnt'},
		url,
		{method: 'post', parameters: null});*/

	timer = setTimeout(checkTransactionReport,60000);
}

function checkErrorInterface()
{
//	if ((myWin == null) || (myWin.closed)) {
		var url = '/default/interface/ajaxerror';
		var ajax = new Ajax.Updater(
			{success: 'errorrpt1'},
			url,
			{method: 'post', parameters: null, onComplete: updateErrorInterface});
//	}
	timer = setTimeout(checkErrorInterface,32000);
}

function updateErrorInterface(request)
{
	var errorrpt1,  errorText;//errorrpt2,
	errorrpt1 = document.getElementById('errorrpt1');
	errorText = errorrpt1.innerHTML;
	if (errorText) {
		if (!_stillPlay) {
			this.browser = new Browser();
			if (this.browser.isIE) {
				setAlarm('On');
				_stillPlay = true;
			} else {
				setAlarmNs('On');
				_stillPlay = true;
			}
		}
	} else {
		if (_stillPlay) {
			this.browser = new Browser();
			if (this.browser.isIE) {
				setAlarm('Off');
				_stillPlay = false;
			} else {
				setAlarmNs('Off');
				_stillPlay = false;
			}
		}
	}
}

function setAlarm(cond) 
{
	if (cond == 'On') {
		rand = (Math.floor(Math.random()*9))+1;
		switch (rand) {
		case 1:
		case 6:
		case 7:
			range = 16000;
			break;
		case 8:
		case 9:
			range = 8000;
			break;
		default:
			rand = 1;
			range = 16000;
		}
		document.all.sound1.src = "/wmpaud"+rand+".wav";
		alarmSound = setTimeout("setAlarm('On')", range);
	} else {
		clearTimeout(alarmSound);
	}
}

function setAlarmNs(cond) 
{
	if (cond == 'On') {
		d = new Date();
		rand = d.getHours();
		//rand = (Math.floor(Math.random()*9))+1;
		switch (true) {
		case (rand >= 23):
			theFile = "/xfiles1.mid";
			range = 46000;
			break;
		case (rand >= 21):
			theFile = "/ghostbusters.mid";
			range = 246000;
			break;
		case (rand >= 18):
			theFile = "/MI.mid";
			range = 194000;
			break;
		case (rand >= 17):
			theFile = "/labam.mid";
			range = 23000;
			break;
		case (rand >= 15):
			theFile = "/lonerang.mid";
			range = 85000;
			break;
		case (rand >= 13):
			theFile = "/cola.mid";
			range = 25000;
			break;
		case (rand >= 12):
			theFile = "/teq.mid";
			range = 21000;
			break;
		case (rand >= 10):
			theFile = "/labam.mid";
			range = 23000;
			break;
		case (rand >= 8):
			theFile = "/cola.mid";
			range = 25000;
			break;
		case (rand >= 5):
			theFile = "/MI.mid";
			range = 194000;
			break;
		default:
			theFile = "/lonerang.mid";
			range = 85000;
		}

		var thissound = document.getElementById("sound");
		thissound.innerHTML = '<embed id="sound2" src="' + theFile + '" height="20" width="120" type="audio/mpeg" autostart="true" loop="true" enablejavascript="true" />';
	} else {
		var thissound = document.getElementById("sound2");
		thissound.Stop();
		var thissound=document.getElementById("sound");
		thissound.innerHTML = '';
	}
}

function mainUpdateContent(request)
{
	_disable = false;$('loadContent').innerHTML = '';
	var response = request.responseText.parseJSON();
	if (response['result'] == 'ok') {
		if (response['info'] != undefined) {
			alert(response['info']);
		}
		loadView(null, '/home');
	} else if (response['result'] == 'error') {
		alert(response['reason']);
		$('okBtn').disabled = false;
		$('applyBtn').disabled = false;
	} else if (response['result'] == 'CAPTCHA') {
		$('_dialog').innerHTML = response['message'];
		sm(response['id'], 140, 90);
	} else {
		alert('-=  FATAL ERROR ! =-\r\nPLEASE CONTACT VENDOR !!! \r\n');
		//loadView(null, '/home');
	}
}

function updateContent(request)
{
	var response = request.responseText.parseJSON();
	if (response['result'] == 'ok') {
		if (response['info'] != undefined) {
			alert(response['info']);
		}
		opener.loadView(null, '/home');
		self.close();
	} else if (response['result'] == 'error') {
		alert(response['reason']);
		$('okBtn').disabled = false;
	} else {
		alert('-=  FATAL ERROR ! =-\r\nPLEASE CONTACT VENDOR !!! \r\n');
		opener.loadView(null, '/home');
		self.close();
	}
}

function _convert(res)
{
	try {
		var output = new Array();
		output = res.split('~',2);
		if (output[0] == '<!--') {
			return output[1];
		} else {
			return null;
		}
	} catch (e) {
		return null;
	}
}

function loadJavascript(file) 
{
	var oScript = document.createElement("script");
	oScript.src = file;
	document.body.appendChild(oScript);
}

function loadView(event, url)
{
	//alert('Dalam beberapa menit ke depan, kami akan melakukan maintenance, harap maklum......');
	if (_disable) {
		alert('Please wait until this screen is completely loaded !');
		return false;
	}
	_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
	params = 'ver=1.9.21';
	if (url == '/orderpulsa/list')
	{
		var host = window.location.host;
		params += '&token=' + localStorage.getItem("token");
	}
	var ajax = new Ajax.Updater(
		{success: 'views'},
		url,
		{method: 'post', parameters: params, onComplete: enableHref});
	MenuBar.resetAll();
}

function enableHref(request)
{
	_disable = false;$('loadContent').innerHTML = '';
	var response = _convert(request.responseText);
	if ((response != null) || (response != undefined)) {
		var output = new Array();
		output = response.split('|');
		count_res = output.length;
		for (i=0; i<count_res; i++) {
			loadJavascript(output[i]);
		}
		//jQuery("select").each(function () {
			//jQuery(this).combobox();
		//})
	}
}

function submitRequest(url)
{
	if (_disable) {
		alert('Please wait until this screen is completely loaded !');
		return false;
	}
	var form = document.form;
	var method = form.method;
	var params = null;
	var j = form.elements.length-1;
	for (var i = (form.elements.length)-1; i >= 0; i--) {
		if ((form.elements[i].disabled) || (form.elements[i].type == undefined) || ((form.elements[i].type == 'radio') && (!form.elements[i].checked))) continue;
		if ((form.elements[i].type == 'checkbox') && (!form.elements[i].checked)) {
			form.elements[i].value = 0;
		}
		params = params + '&' + form.elements[i].name + '=' + form.elements[i].value;
	}
	_disable = true;$('loadContent').innerHTML = 'Loading content.. <img src="/images/loading.gif" alt="loading.." />';
	var ajax = new Ajax.Updater(
		{success: 'views'},
		url,
		{method: 'post', parameters: params, onComplete: enableHref});
	MenuBar.resetAll();
}

function noReturn(evt)
{
    evt = (evt) ? evt : ((window.event) ? event : null);
    if (evt) {
       var elem = (evt.target) ? evt.target : 
          ((evt.srcElement) ? evt.srcElement : null);
       if (elem) {
           var charCode = (evt.charCode) ? evt.charCode : 
               ((evt.which) ? evt.which : evt.keyCode);
		   if (charCode != 13) {
               return true;
           } else {
               return false;
           }
       }
    }
	return false;
}

function copytext() 
{
	window.clipboardData.setData('text','This has been copied to your clipboard.');
}

function openManual(user_id)
{
	var host = "http://"+window.location.hostname+":1234/";
	window.open(host, "popUp");
}
