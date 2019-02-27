import { h } from 'preact'
import classNames from 'classnames'

import Branch from './Branch'
import Result from './Result'

import { branches } from '../../data/branches.json'

const Leaves = ({
  data,
  section,
  limits,
  onLeafClick,
  onNextClick,
  onBackClick
}) => (
  <div>
    <div className={classNames('leaves', {
      'leaves--large': section
    })}>
      {branches[section] ? (
        <Branch
          limits={limits}
          section={section}
          selected={data[section]}
          data={branches[section]}
          onLeafClick={onLeafClick}
          onNextClick={onNextClick}
          onBackClick={onBackClick}
        />
      ) : null}
    </div>
    <Result data={data} branch={branches[section]} />
  </div>
)

export default Leaves
