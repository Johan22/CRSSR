// This is the Link API
import Link from 'next/link'

import Header from '../components/Header.js'
import Layout from '../components/Layout.js'

import fetch from 'isomorphic-unfetch'


// const PostLink = (props) => (
//   <li>
//     <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )

// const Index = () => (
// 	<Layout>
// 		<h1>My Blog</h1>
//     <ul>
//       <PostLink id="hello-nextjs" title="Hello Next.js"/>
//       <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
//       <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
//     </ul>
// 	</Layout>
// )

// export default Index


const Index = (props) => (
  <Layout>
    <h1>Apartments For Sale - Search Results</h1>
    <ul>
      {props.listings.map((listing) => (
        <li key={listing.listing_id}>
					<span>{listing.listing_id}</span><br/>
					<span>{listing.building_address}</span>
        </li>
      ))}
    </ul>
		<style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
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
)

Index.getInitialProps = async function() {

	const res = await fetch('http://jj.local.cityrealty.com/rpc/search/get-sale-listings?f%5B%5D=priceRangeSale&f%5B%5D=location&f%5B%5D=bedroomFullMulti&f%5B%5D=saleBuildingTypeMulti&f%5B%5D=doorman&f%5B%5D=inContract&f%5B%5D=dateListed&f%5B%5D=priceChange&f%5B%5D=searchTerm&f%5B%5D=subHoods&s%5B%5D=salePrice&s%5B%5D=dateListed&s%5B%5D=ppsqft&s%5B%5D=neighborhood2&s%5B%5D=type2&type=json&uniqueid=1541713539344')
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()


  console.log(`Show data fetched. Count: ${data.items.length}`)

  return {
    listings: data.items
  }
}

export default Index


// import Layout from '../components/Layout.js'
// import Link from 'next/link'
//
// function getPosts () {
//   return [
//     { id: 'hello-nextjs', title: 'Hello Next.js'},
//     { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
//     { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
//   ]
// }
//
// const PostLink = ({ post }) => (
//   <li>
//     <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
//       <a>{post.title}</a>
//     </Link>
// 		<style jsx>{`
//       li {
//         list-style: none;
//         margin: 5px 0;
//       }
//
//       a {
//         text-decoration: none;
//         color: blue;
//       }
//
//       a:hover {
//         opacity: 0.6;
//       }
//     `}</style>
//   </li>
// )
//
// export default () => (
//   <Layout>
//     <h1>My Blog</h1>
//     <ul>
//       {getPosts().map((post) => (
//         <PostLink key={post.id} post={post}/>
//       ))}
//     </ul>
//     <style jsx>{`
//       h1, a {
//         font-family: "Arial";
//       }
//
//       ul {
//         padding: 0;
//       }
//
//       li {
//         list-style: none;
//         margin: 5px 0;
//       }
//
//       a {
//         text-decoration: none;
//         color: blue;
//       }
//
//       a:hover {
//         opacity: 0.6;
//       }
//     `}</style>
//   </Layout>
// )
