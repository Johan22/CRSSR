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
    <h1>Welcome to Cityrealty!</h1>
  </Layout>
)

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
