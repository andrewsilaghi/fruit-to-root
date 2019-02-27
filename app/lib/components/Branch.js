import { h } from 'preact'
import find from 'lodash/find'
import classNames from 'classnames'

import Helper from './Helper'
import Leaf from './Leaf'

import { tree } from '../../data/tree.json'

const Branch = ({
  data,
  section,
  limits,
  selected,
  onLeafClick,
  onNextClick,
  onBackClick
}) => (
  <div className="grid grid--wrap">
    {data.map((group) => (
      <div
        key={group.title}
        className={classNames('branch', { 'branch--fruit': !section })}
      >
        {group.title ? <h2>{group.title}</h2> : null}
        <ul className="grid grid--column">
          {group.leaves.map((leaf) => (
            <Leaf
              title={leaf.title}
              active={find(selected, leaf)}
              disabled={limits[group.collection] === selected.length}
              onLeafClick={() => onLeafClick(leaf, group.collection)}
            />
          ))}
        </ul>
      </div>
    ))}
    <Helper
      section={section}
      selected={selected}
      title={tree[section].title}
      description={tree[section].description}
      onNextClick={onNextClick}
    />
    {section ? (
      <button className="back" onClick={onBackClick}>
        Go Back
      </button>
    ) : null}
  </div>
)

export default Branch
