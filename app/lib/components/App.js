import { h, Component } from 'preact'
import find from 'lodash/find'

import Leaves from './Leaves'
import Tree from './Tree'

class Root extends Component {
  state = {
    section: 0,
    fruits: [],
    trunks: []
  };

  limits = {
    trunks: 6,
    fruits: 8
  };

  onNextClick = () => {
    this.setState((prevState) => ({
      section: prevState.section + 1
    }))
  };

  onBackClick = () => {
    this.setState((prevState) => ({
      section: prevState.section - 1
    }))
  };

  onLeafClick = (leaf, collection) => {
    this.setState((prevState) => {
      const data = prevState[collection]

      if (!find(data, leaf) && data.length <= this.limits[collection]) {
        return {
          [collection]: [...data, leaf]
        }
      }
      return {
        [collection]: data.filter(({ title }) => title !== leaf.title)
      }
    })
  };

  render (props, { fruits, trunks, section }) {
    return (
      <div className='grid container'>
        <Tree section={section} />
        <Leaves
          section={section}
          data={[fruits, trunks]}
          limits={this.limits}
          onLeafClick={this.onLeafClick}
          onNextClick={this.onNextClick}
          onBackClick={this.onBackClick}
        />
      </div>
    )
  }
}

export default Root
