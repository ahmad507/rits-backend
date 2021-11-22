<?php

/**
 * Default home page view
 *  
 * @author
 * @version
 */

echo '<?xml version="1.0" encoding="UTF-8" ?>';
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>DEMO</title>
<meta name="Owner" content="PT. Versa Technology">
<meta name="Owner-website" content="www.versatech.co.id">
<link rel="shortcut icon" href="/tourist.ico">
<link href="/styles/stylelog2.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">
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

function checkscreen()
{
	this.browser = new Browser();
	if (!((this.browser.isNS) || (this.browser.isIE) || (this.browser.isOP))) {
		return (confirm("This page only work correctly with Internet Explorer, Firefox, Opera browser!  \r\nClick \"OK\" to view the page anyway. Click \"CANCEL\" to leave.") != 0);
	}
    if (screen.width < 1024) {
        if (screen.height < 768) {
            alert("This page better with minimal 1024x768 resolution.\r\nIt appears you aren't operating at that resolution.");
        }
    }
}

function focused()
{
	document.form['user'].focus();
}

window.onload = focused;
</script>
<script src="/js/unit1.js?ver=1.9.0B" language="JavaScript" type="text/javascript"></script>
</head>

<body>
<div id="layer01_holder">
  <div id="left"></div>
  <div id="center"></div>
  <div id="right"></div>
</div>

<div id="layer02_holder">
  <div id="left"></div>
  <div id="center"></div>
  <div id="right"></div>
</div>

<div id="layer03_holder">
  <div id="left"></div>
  <div id="center">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>LOGIN<br /><br /></td>
  </tr>
  <tr>
    <td><form id="form" name="form" method="post" action="<?= $this->url(array('controller'=>'admin'), NULL, true); ?>" >
      <label>Username  
        <input name="user" type="text" id="user" />
      </label>
      <label>Password  
      <input name="password" type="password" id="password" style="margin-top:5px;" />
      </label>
      <label>
       <input type="submit" name="loginBtn" id="loginBtn" value="Login" />
      </label>
    </form>    </td>
  </tr>
</table>
  </div>
  <div id="right"></div>
</div>

<div id="layer04_holder">
  <div id="left"></div>
  <div id="center">
  If you forgot your password, please contact administrator</div>
  <div id="right"></div>
</div>

<div id="layer05_holder">
<!--  <div align="left">Copyright &copy; 2011, Development Design (Not Release)</div>-->
  <div align="left">PT. Versa Technology  &copy; Visit our website at www.versatech.co.id</div>
</div>
<?php
	if (!empty($this->alert)) {
		echo '<script language="JavaScript">'.$this->alert.'</script>';
	}
?>
</body>
</html>

