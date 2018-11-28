const layoutStyle = {
  padding: 20,
  border: '0px solid #DDD',
	margin: '60px auto',
	width: 1004
}


class Listing extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
			<div className="clearfix">

				<div className="left_side">
					<div className="lst_photo">
						<img src={this.props.listing.image} />
					</div>
				</div>

				<div className="right_side info">
					<div className="lst_name">
						<div className="name">{this.props.listing.displayName}</div>
					</div>
					<div className="infos">{this.props.listing.building_type} in {this.props.listing.hood}</div>
					<div className="price">
						<div className="price big">{this.props.listing.price}</div>
					</div>
					<div className="">{this.props.listing.display_bedrooms} | {this.props.listing.display_bathrooms} {this.props.listing.estimatedPayment ? ' | Est. $' + this.props.listing.estimatedPayment + ' /mo' : ''}</div>

					<ul className="links-icons clearfix">
						<li className="link-icon"><i className="fa fa-map-marker" aria-hidden="true"></i> Map</li>
						<li className="link-icon"><i className="fa fa-heart-o" aria-hidden="true"></i> Save</li>
					</ul>
				</div>

				<style jsx>{`

					.clearfix:before,
					.clearfix:after {
					  content: " ";
					  display: table;
					}

					.clearfix:after {
					  clear: both;
						display: block;
						height: 0;
						content: ".";
						visibility: hidden;
					}

					.left_side,
					.right_side{
						float: left;
						position: relative;
					}

					.left_side{
						width: 260px;
						padding-bottom: 0;

						.lst_photo{
							width: 250px;
							height: 150px;
							background-color: #f4f4f4;
							position: relative;

							img{
								width: 100%;
								height: 100%;
								object-fit: contain;
							}
						}
					}

					.right_side{
						min-height: 160px;
						padding-left: 10px;
						width: calc(100% - 285px);

						.w_blimp_link{
							display: block;
							margin-bottom: 0;
							line-height: 20px;
						}

						.flag_container{
							margin-bottom: 15px;
							height: 25px;
						}

						.listed_managed_by{
							display: block;
							color: #999;

							&.dynamic_width{
								max-width: calc(100% - 185px);
							}

							.managed_by,
							.listed_by{
								float: left;
							}

							.listed_managed_data{
								margin-left: 3px;

								.broker_link{
									white-space: nowrap;

									span {
										display: inline-block;
										color: #008c99;
										&:hover {
											text-decoration: underline;
										}
									}
								}
							}
						}

						.open_house{
							display: block;
							color: #999;
							margin-top: 20px;

							.title 	{
								font-size: 13px;
							}

							.box {
								ul {
									list-style: none;
								}
							}
						}

						.lst_name{
							display: block;

							.name,
							a {
								display: block;
							}

							a {
								text-decoration: none;
							}

							.name {
								color: #333;
								font-size: 22px;
								line-height: 28px;
								font-family: 'Georgia';

								&:hover {
									color: #c03e62;
								}
							}
						}

						.building_logo{
							img{
								margin: 0 0 15px 15px;
								max-width: 150px;
								max-height: 100px;
								float: right;
							}
						}

						.price {
							margin-top: 18px;
							.price.big {
								font-size: 22px;
							}
						}

						.infos {
							margin-top: 5px;
							font-size: 13px;
							color: #666;
							line-height: 20px;
						}

						.links-icons {
							margin: 20px 0 0 0;

							&.links-inline li {
								margin-right: 10px;

								&:last-child {
									margin-right: 0;
								}
							}
						}
					}

					.links-icons {
						margin: 20px 0 0;
						list-style: none;
						padding-inline-start: 0;
						.link-icon {
							float: left;
							margin-right: 10px;
						}
					}

					.beds_baths_sqft {
						font-weight: 700;
						font-size: 13px;
						color: #333;
						line-height: 20px;
					}


				`}</style>

		  </div>
    );
  }
}

export default Listing
