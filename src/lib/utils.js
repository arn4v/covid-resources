/** @param {number} ms */
const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

const getDateArr = () => {
  return new Date()
    .toISOString()
    .slice(0, 10)
    .split("-")
    .map((i) => parseInt(i))
}

module.exports.sleep = sleep
module.exports.getDateArr = getDateArr
