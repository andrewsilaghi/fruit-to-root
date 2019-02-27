const orderSelected = (data) =>
  data.reduce(
    (accumulator, { category }) => ({
      ...accumulator,
      [category]: accumulator[category] ? accumulator[category] + 1 : 1
    }),
    {}
  )

const computeResult = (selected) => {
  const ordered = orderSelected(selected)
  const motives = Object.keys(ordered)
  const scores = Object.values(ordered)
  const highest = Math.max(...scores)

  return motives[scores.indexOf(highest)]
}

export default computeResult
