<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="{$charset}" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{if $kbarticle.title}{$kbarticle.title} - {/if}{$pagetitle} - {$companyname}</title>

    {include file="$template/includes/head.tpl"}

    {$headoutput}

</head>
<body data-phone-cc-input="{$phoneNumberInputStyle}">

{$headeroutput}

    <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    
    <!-- Preloader Start -->
    <div id="preloader">
        <!-- Logo Start -->
        <div class="preloader-logo"><i class="fa fa-black-tie"></i> <span class="first">Mat</span><span class="second">Roz</span><span class="third">Hosting</span></div>
        <!-- Logo End -->
        <div class="mdl-progress mdl-progress__indeterminate">
            <div class="progressbar bar bar1" style="width: 0%;"></div>
            <div class="bufferbar bar bar2" style="width: 0%;"></div>
            <div class="auxbar bar bar3" style="width: 0%;"></div>
        </div>
    </div>
    <!-- Preloader End -->
    
    <!-- Primary Navbar Start -->
    <div id="primaryNavbar">
        <div class="container">
            <!-- Primary Menu Links Start -->
            <ul class="primary-menu-links nav navbar-nav">
                <li><span class="phone"><i class="fa fa-flip-horizontal fa-phone"></i> 123 - 456 - 12348</span></li>
                <li><span class="email"><i class="fa fa-envelope"></i> info@example.com</span></li>
            </ul>
            <!-- Primary Menu Links End -->
            <!-- Primary Social Links Start -->
            <ul class="primary-social-menu-links">
                <li><a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect"><i class="fab fa-google-plus-g"></i></a></li>
                <li><a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect"><i class="fab fa-linkedin-in"></i></a></li>
            </ul>
            <!-- Primary Social Links End -->
        </div>
    </div>
    <!-- Primary Navbar End -->

    <section id="header" class="bdb-whitesmoke">
        <div class="container">
			<ul class="top-nav">
				{if $languagechangeenabled && count($locales) > 1}
					<li>
						<a href="#" class="choose-language" data-toggle="popover" id="languageChooser">
							{$activeLocale.localisedName}
							<b class="caret"></b>
						</a>
						<div id="languageChooserContent" class="hidden">
							<ul>
								{foreach $locales as $locale}
									<li>
										<a href="{$currentpagelinkback}language={$locale.language}">{$locale.localisedName}</a>
									</li>
								{/foreach}
							</ul>
						</div>
					</li>
				{/if}
				{if $loggedin}
					<li>
						<a href="#" data-toggle="popover" id="accountNotifications" data-placement="bottom">
							{$LANG.notifications}
                            {if count($clientAlerts) > 0}
                                <span class="label label-info">{lang key='notificationsnew'}</span>
                            {/if}
							<b class="caret"></b>
						</a>
						<div id="accountNotificationsContent" class="hidden">
							<ul class="client-alerts">
							{foreach $clientAlerts as $alert}
								<li>
									<a href="{$alert->getLink()}">
										<i class="fas fa-fw fa-{if $alert->getSeverity() == 'danger'}exclamation-circle{elseif $alert->getSeverity() == 'warning'}exclamation-triangle{elseif $alert->getSeverity() == 'info'}info-circle{else}check-circle{/if}"></i>
										<div class="message">{$alert->getMessage()}</div>
									</a>
								</li>
							{foreachelse}
								<li class="none">
									{$LANG.notificationsnone}
								</li>
							{/foreach}
							</ul>
						</div>
					</li>
					<li class="primary-action">
						<a href="{$WEB_ROOT}/logout.php" class="btn">
							{$LANG.clientareanavlogout}
						</a>
					</li>
				{else}
					<li>
						<a href="{$WEB_ROOT}/clientarea.php">{$LANG.login}</a>
					</li>
					{if $condlinks.allowClientRegistration}
						<li>
							<a href="{$WEB_ROOT}/register.php">{$LANG.register}</a>
						</li>
					{/if}
					<li class="primary-action">
						<a href="{$WEB_ROOT}/cart.php?a=view" class="btn">
							{$LANG.viewcart}
						</a>
					</li>
				{/if}
				{if $adminMasqueradingAsClient || $adminLoggedIn}
					<li>
						<a href="{$WEB_ROOT}/logout.php?returntoadmin=1" class="btn btn-logged-in-admin" data-toggle="tooltip" data-placement="bottom" title="{if $adminMasqueradingAsClient}{$LANG.adminmasqueradingasclient} {$LANG.logoutandreturntoadminarea}{else}{$LANG.adminloggedin} {$LANG.returntoadminarea}{/if}">
							<i class="fas fa-sign-out-alt"></i>
						</a>
					</li>
				{/if}
			</ul>
        </div>
    </section>
    
    <!-- Top Navigation Bar Start -->
    <div id="topNavSticky">
        <nav id="topNav">
            <div class="navbar">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#topNavbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <!-- Logo Start -->
                        <a class="navbar-brand" href="http://themelooks.us/demo/matroz/html/hosting/index.html"><i class="fa fa-black-tie"></i> <span class="first">Mat</span><span class="second">Roz</span><span class="third">Hosting</span></a>
                        <!-- Logo End -->
                    </div>
                    <div id="topNavbar" class="navbar-collapse collapse navbar-right">
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="http://themelooks.us/demo/matroz/html/hosting/index.html">Home</a></li>
                            <li class="dropdown">
                                <a href="#">Hosting <i class="more-icon">...</i></a>
                                <ul>
                                    <li><a href="http://themelooks.us/demo/matroz/html/hosting/shared-hosting.html">Shared</a></li>
                                    <li><a href="http://themelooks.us/demo/matroz/html/hosting/reseller-hosting.html">Reseller</a></li>
                                    <li><a href="http://themelooks.us/demo/matroz/html/hosting/vps-hosting.html">VPS Hosting</a></li>
                                    <li><a href="http://themelooks.us/demo/matroz/html/hosting/dedicated-hosting.html">Dedicated Hosting</a></li>
                                </ul>
                            </li>
                            <li><a href="http://themelooks.us/demo/matroz/html/hosting/domains.html">Domains</a></li>
                            <li class="dropdown">
                                <a href="#">Pages <i class="more-icon">...</i></a>
                                <ul>
                                    <li><a href="http://themelooks.us/demo/matroz/html/hosting/about.html">About</a></li>
                                    <li><a href="http://themelooks.us/demo/matroz/html/hosting/testimonial.html">Testimonial</a></li>
                                    <li><a href="http://themelooks.us/demo/matroz/html/hosting/login.html">Login</a></li>
                                    <li><a href="http://themelooks.us/demo/matroz/html/hosting/404.html">404</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#">Blog <i class="more-icon">...</i></a>
                                <ul>
                                    <li><a href="http://themelooks.us/demo/matroz/html/hosting/blog.html">Blog</a></li>
                                    <li><a href="http://themelooks.us/demo/matroz/html/hosting/blog_sidebar-left.html">Blog Sidebar Left</a></li>
                                    <li><a href="http://themelooks.us/demo/matroz/html/hosting/blog_sidebar-right.html">Blog Sidebar Right</a></li>
                                </ul>
                            </li>
                            <li><a href="http://themelooks.us/demo/matroz/html/hosting/contact.html">Contact</a></li>
                        </ul>
                        {if $loggedin}
                        {else}
                        <a href="#" class="login--btn mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent" data-toggle="popover" id="loginOrRegister" data-placement="bottom">{$LANG.login}</a>
                            <div id="loginOrRegisterContent" class="hidden">
                                <form action="{if $systemsslurl}{$systemsslurl}{else}{$systemurl}{/if}dologin.php" method="post" role="form">
                                    <div class="form-group">
                                        <input type="email" name="username" class="form-control" placeholder="{$LANG.clientareaemail}" required />
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <input type="password" name="password" class="form-control" placeholder="{$LANG.loginpassword}" autocomplete="off" required />
                                            <span class="input-group-btn">
                                                <input type="submit" class="btn btn-primary" value="{$LANG.login}" />
                                            </span>
                                        </div>
                                    </div>
                                    <label class="checkbox-inline">
                                        <input type="checkbox" name="rememberme" /> {$LANG.loginrememberme} &bull; <a href="{$WEB_ROOT}/pwreset.php">{$LANG.forgotpw}</a>
                                    </label>
                                </form>
                                {if $condlinks.allowClientRegistration}
                                    <hr />
                                    {$LANG.newcustomersignup|sprintf2:"<a href=\"$WEB_ROOT/register.php\">":"</a>"}
                                {/if}
                            </div>
                        {/if}
                    </div>
                </div>
            </div>

            <section id="main-menu">
                <nav id="nav" class="navbar navbar-default navbar-main" role="navigation">
                    <div class="container">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#primary-nav">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse" id="primary-nav">

                            <ul class="nav navbar-nav">

                                {include file="$template/includes/navbar.tpl" navbar=$primaryNavbar}

                            </ul>

                            <ul class="nav navbar-nav navbar-right">

                                {include file="$template/includes/navbar.tpl" navbar=$secondaryNavbar}

                            </ul>

                        </div><!-- /.navbar-collapse -->
                    </div>
                </nav>
            </section>
        </nav>
    </div>
    <!-- Top Navigation Bar End -->

{if $templatefile == 'homepage'}
    <section id="home-banner" data-bg-path="{$WEB_ROOT}/templates/{$template}/img/pattern-bg.png">
        <div class="container text-center">
            {if $registerdomainenabled || $transferdomainenabled}
                <h2>{$LANG.homebegin}</h2>
                <form method="post" action="domainchecker.php" id="frmDomainHomepage">
                    <input type="hidden" name="transfer" />
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                            <div class="input-group input-group-lg">
                                <input type="text" class="form-control" name="domain" placeholder="{$LANG.exampledomain}" autocapitalize="none" data-toggle="tooltip" data-placement="left" data-trigger="manual" title="{lang key='orderForm.required'}" />
                                <span class="input-group-btn">
                                    {if $registerdomainenabled}
                                        <input type="submit" class="btn search{$captcha->getButtonClass($captchaForm)}" value="{$LANG.search}" />
                                    {/if}
                                    {if $transferdomainenabled}
                                        <input type="submit" id="btnTransfer" class="btn transfer{$captcha->getButtonClass($captchaForm)}" value="{$LANG.domainstransfer}" />
                                    {/if}
                                </span>
                            </div>
                        </div>
                    </div>

                    {include file="$template/includes/captcha.tpl"}
                </form>
            {else}
                <h2>{$LANG.doToday}</h2>
            {/if}
        </div>
    </section>
    <div class="home-shortcuts">
        <div class="container">
            <div class="row">
                <div class="col-md-4 hidden-sm hidden-xs text-center">
                    <p class="lead">
                        {$LANG.howcanwehelp}
                    </p>
                </div>
                <div class="col-sm-12 col-md-8">
                    <ul>
                        {if $registerdomainenabled || $transferdomainenabled}
                            <li>
                                <a id="btnBuyADomain" href="domainchecker.php">
                                    <i class="fas fa-globe"></i>
                                    <p>
                                        {$LANG.buyadomain} <span>&raquo;</span>
                                    </p>
                                </a>
                            </li>
                        {/if}
                        <li>
                            <a id="btnOrderHosting" href="cart.php">
                                <i class="far fa-hdd"></i>
                                <p>
                                    {$LANG.orderhosting} <span>&raquo;</span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a id="btnMakePayment" href="clientarea.php">
                                <i class="fas fa-credit-card"></i>
                                <p>
                                    {$LANG.makepayment} <span>&raquo;</span>
                                </p>
                            </a>
                        </li>
                        <li>
                            <a id="btnGetSupport" href="submitticket.php">
                                <i class="far fa-envelope"></i>
                                <p>
                                    {$LANG.getsupport} <span>&raquo;</span>
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
{/if}

{include file="$template/includes/verifyemail.tpl"}

<section id="main-body">
    <div class="container{if $skipMainBodyContainer}-fluid without-padding{/if}">
        <div class="row">

        {if !$inShoppingCart && ($primarySidebar->hasChildren() || $secondarySidebar->hasChildren())}
            {if $primarySidebar->hasChildren() && !$skipMainBodyContainer}
                <div class="col-md-9 pull-md-right">
                    {include file="$template/includes/pageheader.tpl" title=$displayTitle desc=$tagline showbreadcrumb=true}
                </div>
            {/if}
            <div class="col-md-3 pull-md-left sidebar">
                {include file="$template/includes/sidebar.tpl" sidebar=$primarySidebar}
            </div>
        {/if}
        <!-- Container for main page display content -->
        <div class="{if !$inShoppingCart && ($primarySidebar->hasChildren() || $secondarySidebar->hasChildren())}col-md-9 pull-md-right{else}col-xs-12{/if} main-content">
            {if !$primarySidebar->hasChildren() && !$showingLoginPage && !$inShoppingCart && $templatefile != 'homepage' && !$skipMainBodyContainer}
                {include file="$template/includes/pageheader.tpl" title=$displayTitle desc=$tagline showbreadcrumb=true}
            {/if}
