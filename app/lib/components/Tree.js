import { h } from 'preact'
import classNames from 'classnames'

import { tree, leaves } from '../../data/tree.json'

const Tree = ({ section }) => (
  <svg className='tree' viewBox='0 0 500 820' height='820' width='500'>
    {tree.map((branch, index) => (
      <g
        key={index}
        className={classNames('branch', {
          'branch--active': section === index
        })}
      >
        {index ? null : <path d={leaves.d} fill={leaves.color} />}
        <path d={branch.d} fill={branch.color} />
      </g>
    ))}
  </svg>
)

export default Tree
