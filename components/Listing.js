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
			<div>

				<div className="left_side clearfix">
					<div className="lst_photo">
						<img src={this.props.listing.image} />
					</div>
				</div>

				<div className="right_side info clearfix">

				</div>

				<style jsx>{`
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

				`}</style>

		  </div>
    );
  }
}

export default Listing
