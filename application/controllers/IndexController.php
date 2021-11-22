<?php

class IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
	    if ((APPLICATION_ENV == 'development') || (AGENT_CLIENT == 'si-jali')) {
		    $this->render('test');
	    } else if (DATABASE == 'owwie') {
		    $this->render('maintenance');
	    } else if (AGENT_CLIENT == 'asia_wisata') {
		    $this->render('ibe');
	    } else if (AGENT_CLIENT == 'voc') {
		    $this->render('indexviolet');
	    } else {
		    $this->render('index');
	    }
    }


}

