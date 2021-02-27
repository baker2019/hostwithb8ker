
                </div><!-- /.main-content -->
                {if !$inShoppingCart && $secondarySidebar->hasChildren()}
                    <div class="col-md-3 pull-md-left sidebar sidebar-secondary">
                        {include file="$template/includes/sidebar.tpl" sidebar=$secondarySidebar}
                    </div>
                {/if}
            <div class="clearfix"></div>
        </div>
    </div>
</section>

<!-- Footer Area Start -->
<footer>
	<!-- Footer Widgets Area Start -->
	<div id="footer">
		<div class="container">
			<div class="row">
				<!-- Footer Image Start -->
				<div class="col-md-3 hidden-sm hidden-xs">
					<div class="footer-img">
						<img src="{$WEB_ROOT}/templates/{$template}/img/footer-img/01.png" alt="" class="img-responsive">
					</div>
				</div>
				<!-- Footer Image End -->
				<!-- Footer Widget Start -->
				<div class="col-md-3 col-sm-4 footer-widget">
					<div class="footer-about">
						<h2 class="footer-title">About US</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quod mollitia quisquam. Architecto quam in atque sint voluptatem, consequatur consectetur ab ipsum maxime quod consequuntur excepturi illum dolorem ex modi.</p>
						<a href="about.html" class="read-more mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent">Read More</a>
					</div>
				</div>
				<!-- Footer Widget End -->
				<!-- Latest Tweets Widget Start -->
				<div class="col-md-3 col-sm-4">
					<section class="latest-tweets-widget">
						<h2 class="footer-title">latest tweets</h2>
						<div id="footerTwitter" data-user-name="themelooks"></div>
					</section>
				</div>
				<!-- Latest Tweets Widget End -->
				<!-- Useful Links Start -->
				<div class="col-md-3 col-sm-4">
					<section class="links-widget">
						<h2 class="footer-title">Useful Links</h2>
						<ul>
							<li><a href="#">Shared Hosting</a></li>
							<li><a href="#">Reseller Hosting</a></li>
							<li><a href="#">VPS Hosting</a></li>
							<li><a href="#">Dedicated Server</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</section>
				</div>
				<!-- Useful Links End -->
			</div>
		</div>
	</div>
	<!-- Footer Widgets Area End -->

	<!-- Copyright Area Start -->
	<div id="copyright" class="text-center">
		<p>{lang key="copyrightFooterNotice" year=$date_year company=$companyname}</p>
	</div>
	<!-- Copyright Area End -->
</footer>
<!-- Footer Area End -->

<!-- MatRozHost Scripts -->
<script src="{$WEB_ROOT}/templates/{$template}/js/material.min.js"></script>
<script src="https://platform.twitter.com/widgets.js"></script>
<script src="{$WEB_ROOT}/templates/{$template}/js/matrozhost-main.js"></script>

<div id="fullpage-overlay" class="hidden">
	<div class="outer-wrapper">
		<div class="inner-wrapper">
			<img src="{$WEB_ROOT}/assets/img/overlay-spinner.svg">
			<br>
			<span class="msg"></span>
		</div>
	</div>
</div>
  
<div class="modal system-modal fade" id="modalAjax" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content panel-primary">
            <div class="modal-header panel-heading">
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                    <span class="sr-only">{$LANG.close}</span>
                </button>
                <h4 class="modal-title"></h4>
            </div>
            <div class="modal-body panel-body">
                {$LANG.loading}
            </div>
            <div class="modal-footer panel-footer">
                <div class="pull-left loader">
                    <i class="fas fa-circle-notch fa-spin"></i>
                    {$LANG.loading}
                </div>
                <button type="button" class="btn btn-default" data-dismiss="modal">
                    {$LANG.close}
                </button>
                <button type="button" class="btn btn-primary modal-submit">
                    {$LANG.submit}
                </button>
            </div>
        </div>
    </div>
</div>

{include file="$template/includes/generate-password.tpl"}

{$footeroutput}

</body>
</html>
