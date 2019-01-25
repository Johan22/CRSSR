import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const stalkerStyle =  {
  visibility: 'visible',
	opacity: 1
}

const Stalker = () => (
	<div className="w_stalker _lsr"  style={stalkerStyle}>
	<div className="w_stalker_container clearfix">
		<div className="main">
			<div className="main_actions_wrapper clearfix ">
				<div className="main_actions clearfix">
					<div className="message">
													<b>Brokers &amp; Owners: </b><a href="/nyc/add-your-listings">Promote your listings &amp; more!</a>
											</div>


<div className="w_user_tools clearfix">

		<div className="tool user _has_dropdown ">

<span className="tool_label 1">
	<span>Broker’s Center</span>
</span>

<div className="dropdown user_menu">

	<ul>
								<li className="_mls">
				<a href="/my-cityrealty/my-listings">
					<span><i className="fa fa-check"></i>My Listings</span>
				</a>
			</li>
											<li className="_mst">
				<a href="/my-cityrealty/settings-account-info">
					<span><i className="fa fa-check"></i>Settings</span>
				</a>
			</li>
																<li className="_msa">
				<a href="/my-cityrealty/saved-apartments">
					<span><i className="fa fa-check"></i>Saved</span>
				</a>
			</li>
											<li className="_mrv">
				<a href="/my-cityrealty/recently-viewed">
					<span><i className="fa fa-check"></i>Viewed Listings</span>
				</a>
			</li>

		<li><a data-track-link="true" data-track-category="Nav Bar" data-track-action="Log Out" data-track-label="Click" href="/site/logout"><span>Sign Out</span></a></li>
	</ul>

</div>

			<div className="members_center_notification" style={{display: 'none'}}>
				<h2>This is your brokers center</h2>
				Here you will find your folders where you can <b>save listings</b> and communicate with your agent.
				<br />
				<span className="mobile">Available on mobile as well</span>

				<div className="button">Got it</div>
			</div>
		</div>
				<div className="tool contact _has_dropdown" data-action="Nav" data-label="Contact Finish" data-rpc="/rpc/email-us-form">
		<span className="tool_label">
			<span>Contact Us</span>
		</span>
		<div className="dropdown">
			<div className="rpc_content">
				<div className="tools_loader"></div>
			</div>
		</div>
	</div>

</div>
				</div>
			</div>
			<div className="main_nav_wrapper clearfix">
				<div className="main_nav clearfix">
					<a className="branding" href="/">
						<i className="icomoon-C cr-letter-font" aria-hidden="true"></i>
						<i className="icomoon-I cr-letter-font" aria-hidden="true"></i>
						<i className="icomoon-T cr-letter-font" aria-hidden="true"></i>
						<i className="icomoon-Y cr-letter-font" aria-hidden="true"></i>
						<i className="icomoon-R cr-letter-font" aria-hidden="true"></i>
						<i className="icomoon-E cr-letter-font" aria-hidden="true"></i>
						<i className="icomoon-A cr-letter-font" aria-hidden="true"></i>
						<i className="icomoon-L cr-letter-font" aria-hidden="true"></i>
						<i className="icomoon-T cr-letter-font" aria-hidden="true"></i>
						<i className="icomoon-Y cr-letter-font" aria-hidden="true"></i>
					</a>


<ul className="nav clearfix" data-location="stalker">
  <li className="">
    <Link href="/">
      <a>
        <span data-sub-nav="1">CITYREALTY</span>
      </a>
    </Link>
  </li>
	<li className="selected">
    <Link href="/search">
      <a>
        <span data-sub-nav="1">Buy</span>
      </a>
    </Link>
	</li>

	<li className="">
		<span data-sub-nav="2">Rent</span>
	</li>

	<li className="">
		<span><a href="/nyc/sell">Sell</a></span>
	</li>

	<li className="">
		<span data-sub-nav="4">Buildings</span>
	</li>

	<li className="">
		<span data-sub-nav="5">Insights</span>
	</li>
</ul>
				</div>


<div className="w_user_tools clearfix">
					<div className="tool recent_searches _has_dropdown" cr-nav-recent-searches="" data-rpc-url="/rpc/search/recent-searches" data-delete-item-url="/rpc/search/recent-search-delete" data-delete-all-url="/rpc/search/recent-searches-delete-all" data-recent-search-url="/nyc/recent-search">
			<div className="agent ng-hide" ng-show="!!agent">
				<span className="tooltip ng-binding"></span>
			</div>
			<span className="tool_label ng-binding">
				Recent Searches (3)<i className="fa fa-sort-desc" aria-hidden="true"></i>
			</span>
			<div className="dropdown user_menu">
				<ul>
					<li ng-repeat="item in items" className="ng-scope">
						<a ng-href="/nyc/recent-search?h=f87fcf79cdd396c7a8cabd4c2309a8e8" href="/nyc/recent-search?h=f87fcf79cdd396c7a8cabd4c2309a8e8">
							<span ng-bind-html="item.title" className="ng-binding">For Sale: <b>$100K - $1.4M,</b>  in all NYC neighborhoods</span>
							&nbsp;
							<span className="date ng-binding">(Today at 9:52 AM)</span></a>
						<i className="fa fa-times-circle-o" aria-hidden="true" ng-click="deleteItem($event, $index, item)"></i>

					</li><li ng-repeat="item in items" className="ng-scope">
						<a ng-href="/nyc/recent-search?h=b878d2878cbcd9e144244523e71a2244" href="/nyc/recent-search?h=b878d2878cbcd9e144244523e71a2244">
							<span ng-bind-html="item.title" className="ng-binding">For Sale: <b>$100K - $1.4M,</b>  in Hamilton Heights</span>
							&nbsp;
							<span className="date ng-binding">(Today at 9:44 AM)</span></a>
						<i className="fa fa-times-circle-o" aria-hidden="true" ng-click="deleteItem($event, $index, item)"></i>

					</li><li ng-repeat="item in items" className="ng-scope">
						<a ng-href="/nyc/recent-search?h=b1ff66a3b8d3758335d034975095072a" href="/nyc/recent-search?h=b1ff66a3b8d3758335d034975095072a">
							<span ng-bind-html="item.title" className="ng-binding">For Sale: <b>$3M - $50M,</b>  in Hamilton Heights</span>
							&nbsp;
							<span className="date ng-binding">(Today at 9:44 AM)</span></a>
						<i className="fa fa-times-circle-o" aria-hidden="true" ng-click="deleteItem($event, $index, item)"></i>

					</li>
					<li className="clear clearfix">
						<span ng-click="deleteItem($event, -1)" className="right">Clear All Searches</span>
					</li><li>

				</li></ul>

			</div>
		</div>

				<div className="tool search ">
			<form className="w_limousine _any ng-pristine ng-valid" method="GET" data-submit="/building/search?query=" data-rpc="/rpc/autocomplete-search?properties=1">
	<div className="background">
		<input type="text" className="w_limousine_autocomplete _behind" autoComplete="off" disabled="" value="" />
		<input type="text" className="w_limousine_autocomplete _front" name="query" title="Search by Neighborhood / Address" self-overtext="true" data-overtext="Search by Neighborhood / Address" autoComplete="off" placeholder="Search by Neighborhood / Address" />

				<span className="w_limousine_btn_container">
			<input type="submit" className="w_limousine_btn" name="" value="" />
			<i className="fa fa-search big"></i>
		</span>
	</div>
<div className="w_limousine_results_wrapper"><div className="w_limousine_results_scroller"><div className="w_limousine_results" style={{visibility: 'hidden', opacity: 0}}></div></div></div></form>
		</div>

</div>
			</div>
			<div className="persist_nav clearfix _short ">

															<a className="branding" href="/">
							<img alt="CityRealty Logo" src="http://jj-resources.local.cityrealty.com/neo/i/w/stalker/logo-name.png" />

						</a>

						<div className="nav_title">
							<div className="_content">
								<span className="_name">
								New York City Apartments for Sale								</span>
															</div>
						</div>

												</div>
							<div className="jump_links clearfix">
									</div>
					</div>
	</div>

	<div className="cmp-listview in_stalker"><div className="cmp-table"></div></div>


	<style jsx>{`
		.clearfix:before,
		.clearfix:after {
			content: " ";
			display: table;
		}
		.clearfix:after {
			clear: both;
		}

		.w_stalker{
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 30;
			visibility: hidden;
			opacity: 0;

			.main{
				position: relative;
				min-width: 1182px;
			}
			.main_nav_wrapper{
				border-top: 4px solid #ccc;
				background-color: rgba(255,255,255, 0.95);
				border-bottom: 1px solid #999;
				.w_user_tools{
					.tool{
						&.search{
							.w_limousine._any{
								&._stretch{
									margin-left: -270px;
								}
							}
						}
						&.user{
							.members_center_notification {
								left: -210px;
							}
						}
					}
				}
			}
			.persist_nav{
				border-bottom: 1px solid #999;
				border-top: 1px solid #999;
			}
			.main_actions_wrapper{
				background-color: #333;

				&.broker-notverified {
					background-color: #c03e62;

					.resend-validation-link {
						cursor: pointer;
						margin-right: 10px;
						text-decoration: underline;
					}

					.message-email-sent {
						float: right;
						margin-left: 5px;
					}

					.w_user_tools{
						.tool{
							&.user,
							&.contact{
								&._active,
								&:hover{
									.tool_label{
										display: block;
										color: #fff;
									}
								}
							}
						}
					}

				}

				.message {
					float: left;
					padding: 5px 10px;
					font-size: 12px;
					color: #fff;
					a{
						color: #fff;
						text-decoration: underline;
						&:hover{
							color: #c03e62;
						}
					}
				}

				.w_user_tools{
					.tool{
						&.user,
						&.contact{
							border: 0;
							padding: 5px 10px;
							width: auto;
							text-transform: none;
							font-size: 12px;
							.tool_label{
								color: #fff;
								text-decoration: underline;

								i {
									display: none;
								}
							}
							&._active,
							&:hover{

								.tool_label{
									display: block;
									color: #ef4a75;
								}
							}
							.dropdown{
								right: 0;
								left: auto;
							}
						}
					}
				}
			}

			&._down {
				border-top: none;
				.main_nav_wrapper{
					border: none;
				}
			}

			&._hide_listview_sort{
				.w_divtable,
				.w_results_table,
				.cmp-listview{
					visibility: hidden;
				}
			}

			.w_user_tools,
			.main_nav{
				display: block;
				position: relative;
			}
			.persist_nav,
			.jump_links{
				display: none;
				border-bottom: 1px solid #999;
				height: 20px;
				background-color: #f1f1f2;
				ul{
					line-height: 20px;
					display: inline-block;
				}
				li{
					text-transform: capitalize;
					display: inline-block;
					margin: 0 10px;

					&.form_item{
						margin: 0;
					}
				}
				a{
					color: #777;
					&._active{
						color: #c03e62;
					}
					&:hover,
					&:hover *{
						text-decoration: none;
						color: #c03e62;

						.iconmoon-Logo-CR-1 {
							color: #333;
						}
					}
				}
			}
			.jump_links{
				text-align: center;
				a{
					color: #000;
				}
			}

			.branding{
				display: flex;
				align-items: center;
				text-align: center;
				height: 100%;
				float: left;
				&:before {    /* create a full-height inline block pseudo=element */
					content: ' ';
					display: inline-block;
					vertical-align: middle;  /* vertical alignment of the inline element */
					height: 100%;
				}
				&:hover{
					text-decoration: none;
				}
				img{
					display: inline-block;
					vertical-align: middle;
					margin: auto;
				}
			}

			.persist_nav{
				.branding{
					border-right: 1px solid #999;
					width: 130px;
				}
				.nav_title{
					font-family: Arial, Helvetica, sans-serif !important;
					color: #333;
					padding-left: 15px;
					float: left;
					height: 100%;
					&:before {    /* create a full-height inline block pseudo=element */
						content: ' ';
						display: inline-block;
						vertical-align: middle;  /* vertical alignment of the inline element */
						height: 100%;
					}
					._content{
						display: inline-block;
						vertical-align: middle;
						._name{
							display: block;
							font-size: 20px;
						}
						._info{
							font-size: 14px;
							._address{
								padding-right: 8px;
								border-right: 1px solid #999;
							}
							._type{
								padding: 0 8px;
								border-right: 1px solid #999;
								&._first{
									padding-left: 0;
								}
							}
							._type{
								border-right: 1px solid #999;
							}
							._map{
								background: rgba(0, 0, 0, 0) url("/neo/i/w/homesearch/map-icon.png") no-repeat scroll 8px center;
								background-size: auto 17px;
								color: #008c99;
								padding-left: 25px;
								cursor: pointer;
							}
						}
					}
				}

				.overview{
					float: right;
					height: 100%;

					._aval_apts{
						width: auto;
						border: 2px solid #008c99;
						border-radius: 30px;
						cursor: pointer;
						display: inline-block;
						color: #008c99;
						padding: 12px 20px;
						font-size: 13px;
						margin: 13px 10px 0 0;
						font-weight: bold;
						text-transform: uppercase;
						float: left;

						i{
							position: relative;
							bottom: 1px;
							left: 6px;
						}
						&:hover,
						&:hover *{
							border-color: #c03e62;
							background-color: #c03e62;
							color: #fff;
						}
					}

					._sale,
					._rent,
					._closed{
						width: 214px;
						border-left: 1px solid #999;
						height: 100%;
						text-align: center;
						float: left;
						cursor: pointer;
						display: block;
						color: #333;

						._content{
							display: inline-block;
							height: 100%;
							._value,
							._text{
								display: block;
							}
							._value{
								font-family: Georgia, serif !important;
								font-size: 22px;
								margin-top: 15px;
							}
							._text{
								font-size: 13px;
								font-weight: bold;
								text-transform: capitalize;
								margin-top: 5px;
							}

							&._apts{
								color: #008c99;
								margin-right: 10px;
							}
						}
					}

					.w_user_tools{
						display: block;
						float: left;
						height: 100%;
						.contact{
							color: #fff;
							&.tool{
								border: 0;
								font-weight: bold;
								.dropdown{
									border: 3px solid #c03e62;
									right: 0px;
									top: 70px;
									font-weight: normal;
									cursor: default;
									text-align: left;
									.w_popup.email{
										width: 100%;
									}
									.sign_up{
										display: none;
									}
								}
							}
						}
					}
				}
			}
			.main_nav{
				padding-left: 15px;
				font-size: 11px;
				float: left;
				position: relative;
				height: 44px;
				.dropdown{
					left: -15px;
				}

				.nav{
					float: left;
					list-style-type: none;
					white-space: nowrap;
					font-weight: bold;
				}

				li{
					float: left;
					position: relative;
					margin-right: 30px;

					span{
						display: block;
						margin: 15px 0;
						color: #777;
						font-size: 13px;
						cursor: pointer;
						a{
							color: inherit;
							&:hover,
							&:visited{
								text-decoration: none;
								color: inherit;
							}
						}
						&:hover,
						&.selected{
							color: #c03e62;
						}
					}

					&.selected {
						&:before {
							display: block;
							content: " ";
							position: absolute;
							left: 0;
							right: 0;
							bottom: 100%;
							height: 4px;
							background-color: #c03e62;
						}
					}
				}
			}

			&._down{
				.main_nav_wrapper{
					display: none;
				}
				.persist_nav{
					display: block;
					height: 70px;
					&._short{
						height: 44px;
						._content{
							padding: 0;
							._name{
								font-size: 16px;
							}
						}
					}

					&.persist_nav_new {
						height: 50px;
						.overview {
							.w_user_tools {
								.contact {
									padding: 18px 25px 17px 25px;
									width: auto;
									background-color: #008c99;
									.fa-arrow-right{
										margin-left: 5px;
									}
									&.tool{
										.dropdown{
											left: auto;
											top: 50px;
										}
									}
								}
							}

							.links-icons {
								border-left: 1px solid #999;
								float: left;
								line-height: 50px;
								height: 50px;
								font-weight: bold;
								margin: 0;
								color: #008c99;

								.cr-save-to-profile{
									display: inline;
									.link-icon{
										height: 50px;
										margin: 0;
									}
									.label{
										padding: 0 20px;
										line-height: 50px;

										.link-label{
											height: auto;
										}
									}

									.success_message{
										bottom: inherit;
										top: 100%;
									}
								}
							}

							.links-icons {
								border-left: 1px solid #999;
								float: left;
								line-height: 50px;
								height: 50px;
								font-weight: bold;
								margin: 0;
								color: #008c99;

								&._last_item .cr-save-to-profile .portfolio{
									left: inherit;
									right: 0;
								}

								.cr-save-to-profile{
									.link-icon{
										height: 50px;
										margin: 0;
									}

									.link-icon{
										padding: 0;
										border-left: none;
									}
									.label{
										padding: 0 20px;
										line-height: 50px;

										.link-label{
											height: auto;
										}
									}

									.portfolio{
										left: 0;
										margin-top: 7px;
									}

									.success_message{
										bottom: inherit;
										top: 100%;
									}
								}
							}

							._sale,
							._rent,
							._closed {
								._content {
									._value {
										font-size: 16px;
										margin-top: 8px;
									}
									._text {
										margin-top: 3px;
									}
								}

								._init {
									margin-top: 12px;
								}

								._update {
									margin-top: 2px;
								}
							}
						}

						.nav_title {
							._content {
								._name{
									display: inline-block;
									font-size: 16px;
									text-transform: capitalize;
									font-weight: bold;
								}
								._info{
									margin-top: 4px;
									font-size: 11px;
									display: block;
									line-height: normal;

									._type{
										padding-left: 0;
										padding-right: 0;
										border-right: none;
									}
									._map{
										background: none;
										padding-left: 0;
										border-right: none;
									}
									._aval_apts {
										color: #008c99;
										border-right: none;
									}
									li {
										border-right: 1px solid #999;
										padding: 0 10px;
										margin: 0;
										text-transform: none;
										float: left;
										a:hover {
											color: #c03e62;
										}
										&:first-child {
											padding-left: 0;
										}
										&:last-child {
											border-right: none;
											padding-right: 0;
										}
									}
								}
							}
						}
					}
				}
			}

			&._bov,
			&._npr,
			&._lst{
				&._down{
					.jump_links{
						display: block;
					}
				}
			}
			&._npr{
				.overview{
					._sale,
					._rent,
					._closed{
						width: 125px;
					}
				}
			}

			&._bov,
			&._lst{
				.overview{
					._sale{
						width: auto;
						padding: 0 10px;
						cursor: inherit;
						._init,
						._update{
							display: block;
							text-transform: none;
							font-size: 12px;
							text-align: left;
						}
						._init{
							margin-top: 23px;
						}
					}
				}

				&._down {

					.persist_nav .overview{
						.tool.contact,
						.links-icons .cr-save-to-profile .link-icon{
							margin: 5px;
							border-radius: 5px;
						}

						.links-icons .cr-save-to-profile .link-icon{
							margin: 5px 0 5px 10px;
							height: calc(100% - 14px);
							border: 2px solid #008c99;
							background-color: transparent;
							border-radius: 5px;
							color: #008c99;

							&.save .label{
								color: #008c99;
							}

							&:hover{
								background-color: #008c99;
								.label{
									color: #fff;
								}
							}

							.label{
								line-height: 36px;
							}
						}

						.tool.contact{
							margin-right: 10px;
							margin-left: 10px;
							padding: 12px 20px;
							background-color: #c03e62;
							height: calc(100% - 10px);
							width: 150px;
							text-align: center;
						}
					}
				}

				.inactive_message{
					background-color: #c03e62;
					padding: 4px 0;
					color: #fff;
					text-align: center;
					font-size: 14px;
					display: none;

					.fa-ban{
						font-size: 24px;
						transform: rotate(90deg);
					}
				}
			}

			&._bov {
				&._down {
					.persist_nav .overview {
						.tool.contact {
							width: 170px;
						}
					}
				}
			}

			&._on_map_view{
				.cmp-listview{
					display: none;
				}
			}

			&.show_back_button{/* for map view to show back button */
				.w_fsmap_close{
					display: block;
				}
			}

			&.show_filter{/* for map view to show the filter */
				.w_fsmap_filter{
					display: block;
				}
			}

			.w_divtable{
				position: absolute;
				border: none;
				top: 100%;
				padding: 0;
				left: 0;
				right: 0;
				margin-top: 1px;
				transition: 0.20s ease all;
				-webkit-transition: 0.20s ease all;

				&._move_to_right{
					padding-left: 300px;
				}

				.thead{
					width: 1004px;
					margin: 0 auto;
					padding: 0 20px;
					.tr{
						float: left;
						width: 736px;
						background-color: #e0e0e0;
						border-radius: 0 0 8px 8px;
					}
				}
			}
		}


		.w_user_tools{
			float: right;

			.tool{
				width: auto;
				float: left;
				.dropdown{
					display: none;
					position: absolute;
					top: calc(100% + 1px);
					left: -1px;
					padding: 20px;
					z-index: 1000;
					border: 1px solid #999;
					border-top:0;
					background-color: #fff;
					.tools_loader{
						display: block;
						background: rgba(255, 255, 255, 0.5) url("/neo/i/w/delayr/loader.gif") no-repeat scroll center center;
					    min-height: 30px;
					   	min-width: 200px;
					    z-index: 2;
					}
					&.user_menu{
						padding: 0;
					}

				}

				&._active{
					.dropdown{
						display: block;
					}
				}
				&.user,
				&.contact,
				&.recent_searches{
					cursor: pointer;
					display: block;
					font-size: 13px;
					padding: 9px 14px;
					text-align: center;
					text-transform: capitalize;
					border-left: 1px solid #777;
					height: 100%;
					box-sizing: border-box;
					text-align: left;
					position: relative;
					.tool_label{
						color: #777;
						display: block;
						white-space: nowrap;
					}

					&._active,
					&:hover{
						.tool_label{
							color: #c03e62;
						}
					}
				}
				&.search{
					margin: 0;
					padding-left: 0;
					width: 390px;
					position: relative;
					z-index: 100;
					float: left;
					white-space: nowrap;
					height: 40px;
					.dropdown{
						width: 705px;
						padding: 0px;
						right: 78px;
						top: 0px;
						border: 0;
						font-family: Arial, Helvetica, sans-serif !important;
					}
					.w_limousine._any{
						.w_limousine_btn{
							width: 44px;
						}
					}
				}
				&.contact{
					color: #666;
					width: 125px;
					.dropdown{
						width: 300px;
					}
					span.tool_label{
						&:before{
							display: none;
						}
						.w_limousine_btn{
							width: 44px;
						}
						&._stretch{
							margin-left: -270px;
						}


					}
					&._active,
					&:hover{
						span.tool_label{
							display: none;
						}
					}

					h2{
						font-size: 34px;
						font-weight: 100;
						color: #c03e62 !important;

						a{
							color: #c03e62;
						}
					}

					.w_popup.email{
						width: 300px;
						min-width: 300px;
						cursor: default;
					}
					.w_popup_body{
						border: 0;
						.w_form{
							margin-top: 10px;
							.button{
								background-position: 60% center;
							}
						}
					}
					h3{
						padding: 0 25px;
					}
					.w_popup_close{
						display: none;
					}
				}
				&.recent_searches{
					position: static;
					padding: 15px 14px;
					text-transform: none;
					font-size: 12px;
					&._with_agent{
						padding-left: 50px;
					}
					.agent{
						position: absolute;
						top: 5px;
						left: 10px;
						.tooltip{
							background-color: rgba(0, 0, 0, 0.8);
							position: absolute;
							top: -30px;
							left: -10px;
							padding: 1px 7px;
							font-size: 11px;
							display: none;
							color: #ffffff;
							line-height: 17px;
							white-space: nowrap;
							overflow: visible;
							&:after{
								content: '';
								position: absolute;
								display: block;
								width: 0;
								height: 0;
								border-top: 8px solid rgba(0, 0, 0, 0.8);
								border-bottom: 0;
								border-left: 8px solid transparent;
								border-right: 8px solid transparent;
								top: 100%;
								left: 19px;
							}
						}
						&:hover{
							.tooltip{
								display: block;
							}
						}
						img{
							border-radius: 35px;
							width: 35px;
							height: 35px;

						}
					}
					.tool_label{
						.fa-sort-desc{
							margin: 0;
							margin-left: 10px;
							top: -4px;
							position: relative;
						}
					}
					.dropdown{
						background-color: rgba(255,255,255, 0.95);
						width: 100%;
						left: 0;
						max-height: 500px;
						overflow-y: auto;
						ul {
							li {
								text-transform: none;
								position: relative;
								a{
									padding: 10px 30px 10px 20px;
									display: block;
								}
								span{
									color: #333;
									padding: 0;
									display: inline;
									&.date{
										color: #999;
									}
								}
								&:hover{
									background-color: #008c99;
								}
								i{
									position: absolute;
									top: 10px;
									right: 10px;
									cursor: pointer;
									font-size: 14px;
									color: #999;
								}
								&.clear{
									cursor: auto;
									span{
										display: inline-block;
										&.right{
											padding: 10px;
											color: #008c99;
											cursor: pointer;
										}
										&.left{
											padding: 10px 20px;
										}
									}
									&:hover{
										background-color: inherit;
									}
								}
							}
						}

					}
				}
				&.user{
					padding: 12px 14px;

					.dropdown{
						text-align: left;
						&.user_menu{
							width: 255px;
							text-transform: capitalize;
							font-size: 12px;
							padding: 0 !important;

							&.broker_or_seller {
								ul ._mpr {
									display: none;
								}
							}

							a{
								color: #666;
								&:hover{
									color: #fff;
								}
								span{
									padding: 10px 40px;
									display: block;
								}
							}
							ul{
								display: block;
								list-style-type: none;
								padding: 5px 0;
								border-bottom: 1px solid #ccc;

								li{
									display: block;

									&:last-child{
										padding-top: 5px;
										margin-top: 5px;
										border-top: 1px solid #ccc;
									}

									&:hover a{
										background-color: #008c99;
										color: #fff;
										font-weight: bold;
										display: block;
										text-decoration: none;
									}
								}
							}
						}
					}
					.members_center_notification {
						position: absolute;
						width: 300px;
						padding: 15px;
						border: 3px solid #ccc;
						border-radius: 5px;
						background: #fff;
						top: 100%;
						margin-top: 10px;
						right: 0;
						text-align: left;
						text-transform: none;
						color: #000;
						font-size: 12px;
						z-index: 1000;
						cursor: default;
						font-family: Arial, Helvetica, sans-serif !important;

						&::before,
						&::after {
							content: '';
							display: block;
							width: 0;
							height: 0;
							position: absolute;
							bottom: 100%;
							right: inherit;
						}
						&::before {
							border-left: 17px solid transparent;
							border-right: 17px solid transparent;
							border-bottom: 17px solid #ccc;
							right: 25px;
						}

						&::after {
							border-left: 12px solid transparent;
							border-right: 12px solid transparent;
							border-bottom: 12px solid white;
							right: 30px;
						}

						h2{
							font-size: 16px;
							font-weight: bold;
						}

						.mobile{
							margin-top: 8px;
							font-style: italic;
							display: block;

							i{
								font-size: 16px;
						    margin-right: 5px;
						    line-height: 21px;
						    vertical-align: middle;

							}
						}

						.button{
							background: transparent;
					    border: 3px solid #008c99;
					    display: inline-block;
					    padding: 5px 10px;
					    font-size: 12px;
					    color: #008c99;
					    font-weight: bold;
							float: right;

							&:hover{
								color: #fff;
								background-color: #008C99;
							}
						}
					}
				}
				.w_popup{
					background: none;
					padding: 0;
					box-shadow: none;
					-moz-box-shadow: none;
					-webkit-box-shadow: none;

					&_header{
						display: none;
					}

					&_body{
						padding: 0;
						background: none;
					}

					&_close{
						display: none;
					}

					&_success{
						border: none;
					}

					.button{
						font-size: 14px;
					}

					&_success_message{
						color: #008c99;
					}
				}
			}

			.user_menu{
				width: 245px;
				text-transform: uppercase;
				font-size: 12px;
				a{
					color: #333;

					span{
						padding: 10px 20px;
						display: block;
					}
				}

				ul{
					display: block;
					list-style-type: none;
					padding: 5px 0;
					border-bottom: 1px solid #ccc;

					&.last{
						border-bottom: none;
					}

					li{
						display: block;

						i.fa-check{
							display: none;
							position: absolute;
							left: 10px;
						}

						&:hover{
							a{
								color: #fff;
								text-decoration: none;
							}
						}
					}
				}

				.pointer{
					position: absolute;
					background: url("/neo/i/l/footer/menu-pointer.png") center center no-repeat;
					height: 36px;
					width: 14px;
					right: -1px;
					bottom: 9px;
				}
			}

			.broker_item{
				font-weight: bold;
				color: #c03e62 !important;

				a{
					color: #c03e62;
				}
			}

		}

	`}</style>
</div>
)

export default Stalker
