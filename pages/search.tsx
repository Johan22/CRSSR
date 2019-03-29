import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import Listing from '../components/Listing.tsx'
import Filters from '../components/Filters.js'

// const Search = (props) => (
class Search extends React.Component {
  constructor(props) {
    super(props);
		this.state = {};
		this.state.test = "plop";

		if (props.data) {
			this.state.donnees = props.data;
			this.state.filters = props.filters;
		} else {
			this.loadResults();
		}

  }

	async loadResults() {
		const isBrowser = process.browser;

		let res = await fetch('https://a22d8b99-8ac2-4e32-92b1-8cfc23ff8b07.mock.pstmn.io/listings1')
		let data = await res.json()

		this.setState({
			donnees: data,
			filters: data.tableTools.filters
		});
	}

  async loadOtherResults() {
		let res = await fetch('https://aac9da40-35c0-4e8c-aab3-045c28aca076.mock.pstmn.io/listings6')
		this.setState({
			donnees: await res.json()
		});
  }

	componentDidMount() {

	}


  render() {
    return (
      <Layout>
        <h1>Apartments For Sale - Search Results {this.state.test}</h1>

        <div>
          <button onClick={this.loadOtherResults.bind(this)}>
            Load Other Results
          </button>
          <Filters
            filters={this.state.filters}
          >
          </Filters>
        </div>

        <div>
					{this.state.donnees && this.state.donnees.items && this.state.donnees.items.map((listing) => (
						<div className="listing-container" key={listing.listing_id}>
							<Listing listing={listing}></Listing>
						</div>

					))}


        </div>
        <style jsx>{`
          h1, a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }

          .listing-container {
            border-top: 1px solid #ccc;
            padding: 20px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </Layout>
    );
  }
}


Search.getInitialProps = async function() {
	const isBrowser = process.browser;

	if (!isBrowser) {
		let res = await fetch('https://a22d8b99-8ac2-4e32-92b1-8cfc23ff8b07.mock.pstmn.io/listings1')
		// let resFilters = await fetch('https://a22d8b99-8ac2-4e32-92b1-8cfc23ff8b07.mock.pstmn.io/listings1');

	  let data = await res.json()
	  // let dataFilters = await resFilters.json()

	  console.log(`Show data fetched. Count: ${data.items.length}`)



	  return {
	    data,
			filters: data.tableTools.filters
	    // filters: dataFilters.tableTools.filters
  	}
	}

	return {}
}

export default Search
