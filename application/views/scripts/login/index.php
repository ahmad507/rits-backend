<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php

/**
 * Default home page view
 *
 * @author
 * @version
 */

?>
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
<?php
// echo file_get_contents(LOGIN_URL);

if (!empty($this->alert)) {
	echo '<script language="JavaScript">'.$this->alert.'</script>';
}
echo "<script>window.location.href='" .  LOGIN_URL . "'</script>";
?>
<!--
PT. Versa Technology
Visit our website at www.versatech.co.id
-->
