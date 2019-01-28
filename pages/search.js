import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import Listing from '../components/Listing.js'
import Filters from '../components/Filters.js'

// const Search = (props) => (
class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  async loadOtherResults() {
    console.log('loadOtherResults');

    const res = await fetch('http://dev.cityrealty.com/rpc/search/get-sale-listings?f%5B%5D=priceRangeSale&f%5B%5D=location&f%5B%5D=bedroomFullMulti&f%5B%5D=saleBuildingTypeMulti&f%5B%5D=doorman&f%5B%5D=inContract&f%5B%5D=dateListed&f%5B%5D=priceChange&f%5B%5D=searchTerm&f%5B%5D=subHoods&s%5B%5D=salePrice&s%5B%5D=dateListed&s%5B%5D=ppsqft&s%5B%5D=neighborhood2&s%5B%5D=type2&type=json&uniqueid=1548455410809')
    const data = await res.json()
    // this.props.data = data;
  }

  render() {
    return (
      <Layout>
        <h1>Apartments For Sale - Search Results</h1>

        <div>
          <button onClick={this.loadOtherResults}>
            Load Other Results
          </button>
          <Filters
            filters={this.props.filters}
          >
          </Filters>
        </div>

        <div>
          {this.props.data.items.map((listing) => (
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

	const res = await fetch('http://jj.local.cityrealty.com/rpc/search/get-sale-listings?f%5B%5D=priceRangeSale&f%5B%5D=location&f%5B%5D=bedroomFullMulti&f%5B%5D=saleBuildingTypeMulti&f%5B%5D=doorman&f%5B%5D=inContract&f%5B%5D=dateListed&f%5B%5D=priceChange&f%5B%5D=searchTerm&f%5B%5D=subHoods&s%5B%5D=salePrice&s%5B%5D=dateListed&s%5B%5D=ppsqft&s%5B%5D=neighborhood2&s%5B%5D=type2&type=json&uniqueid=1541713539344')
  // const res = await fetch('http://dev.cityrealty.com/rpc/search/get-sale-listings?f%5B%5D=priceRangeSale&f%5B%5D=location&f%5B%5D=bedroomFullMulti&f%5B%5D=saleBuildingTypeMulti&f%5B%5D=doorman&f%5B%5D=inContract&f%5B%5D=dateListed&f%5B%5D=priceChange&f%5B%5D=searchTerm&f%5B%5D=subHoods&s%5B%5D=salePrice&s%5B%5D=dateListed&s%5B%5D=ppsqft&s%5B%5D=neighborhood2&s%5B%5D=type2&type=json&uniqueid=1548455410809')
  // const res = await fetch('http://dev.cityrealty.com/rpc/search/get-sale-listings?f%5B%5D=priceRangeSale&f%5B%5D=location&f%5B%5D=bedroomFullMulti&f%5B%5D=saleBuildingTypeMulti&f%5B%5D=doorman&f%5B%5D=inContract&f%5B%5D=dateListed&f%5B%5D=priceChange&f%5B%5D=searchTerm&f%5B%5D=subHoods&s%5B%5D=salePrice&s%5B%5D=dateListed&s%5B%5D=ppsqft&s%5B%5D=neighborhood2&s%5B%5D=type2&type=json&uniqueid=1548455527189')
  const resFilters = await fetch('http://dev.cityrealty.com/rpc/search/get-sale-listings?f%5B%5D=priceRangeSale&f%5B%5D=location&f%5B%5D=bedroomFullMulti&f%5B%5D=saleBuildingTypeMulti&f%5B%5D=doorman&f%5B%5D=inContract&f%5B%5D=dateListed&f%5B%5D=priceChange&f%5B%5D=searchTerm&f%5B%5D=subHoods&s%5B%5D=salePrice&s%5B%5D=dateListed&s%5B%5D=ppsqft&s%5B%5D=neighborhood2&s%5B%5D=type2&type=json&uniqueid=1541713539344')


  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  const dataFilters = await resFilters.json()

  console.log(`Show data fetched. Count: ${data.items.length}`)

  return {
    data,
    filters: dataFilters.tableTools.filters
  }
}

export default Search
