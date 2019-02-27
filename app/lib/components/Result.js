import { h } from 'preact'

import computeResult from '../utils/result'
import createPdf from '../utils/pdf'

import { motives } from '../../data/motives.json'

const Result = ({ branch, data: [fruits, trunks] }) => {
  const motive = trunks ? computeResult(trunks) : null

  if (branch) {
    return null
  }
function refreshPage(){ window.parent.location = window.parent.location.href; }
  return (
    <div>
    <div className='result'>
      <h1 className='result-heading'>Your suggested Root/Heart Condition is:</h1>
      <h2>{motives[motive].title}</h2>
      <br/>
      <button
        onClick={() => createPdf({ fruits, trunks }, motives[motive].title)}
      >
        Get a PDF
      </button>
          </div>

    <div className='btn-wrapper' >
      <button className='restart-button'type='button' onClick={refreshPage}>
      Reset
      </button>
  </div>
  </div>
  )
}

export default Result
