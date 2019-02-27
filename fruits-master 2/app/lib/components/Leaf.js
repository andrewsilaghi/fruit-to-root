import { h } from 'preact'
import classNames from 'classnames'

const Leaf = ({ title, active, disabled, onLeafClick }) => (
  <li
    onClick={onLeafClick}
    className={classNames('leaf', {
      'leaf--active': active,
      'leaf--disabled': !active && disabled
    })}
  >
    <svg width='6' height='6' viewBox='0 0 24 24'>
      <circle cx='12' cy='12' r='12' />
    </svg>
    {title}
  </li>
)

export default Leaf
