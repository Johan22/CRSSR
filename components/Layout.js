import Header from './Header'
import Stalker from './Stalker'

const layoutStyle = {
  padding: 20,
  border: '0px solid #DDD',
	margin: '60px auto',
	width: 1004
}

const Layout = (props) => (
  <div className="content">
		<Stalker />
    {props.children}

    <style jsx>{`
      .content {
        padding: 20px;
        border: 0 solid #DDD;
      	margin: 60px auto;
      	width: 1004px;

        @media only screen and (max-width: 1560px) {
          padding-left: 276px;
          margin-left: inherit;
          margin-right: inherit;
        }
      }
    `}</style>
  </div>
)

export default Layout
