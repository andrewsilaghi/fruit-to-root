import { h, render } from 'preact'

// root component
import App from './components/App'

// styles
import '../styles/style.scss'

// render app
render(<App />, document.querySelector('#root'))
