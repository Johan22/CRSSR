import Header from './Header'
import Stalker from './Stalker'

const layoutStyle = {
  padding: 20,
  border: '0px solid #DDD',
	margin: '60px auto',
	width: 1004
}

const Layout = (props) => (
  <div style={layoutStyle}>
		<Stalker />
    {props.children}
  </div>
)

export default Layout
