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

				<div class="left_side clearfix">
					<img src={this.props.listing.image} />
				</div>

				<div class="right_side info clearfix">

				</div>

		  </div>
    );
  }
}

export default Listing
