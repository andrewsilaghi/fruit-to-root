import { h } from 'preact'

const Helper = ({ title, description, selected, onNextClick }) => (
  <div className='helper'>
    <h3>{title}</h3>
    <p>{description}</p>
    <button disabled={!selected.length} onClick={onNextClick}>
      {selected.length ? 'Continue >' : 'Select fruits'}
    </button>
  </div>
)

export default Helper
