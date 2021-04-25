require("dotenv").config()
const { getDateArr } = require("../src/lib/utils")
const { store } = require("../src/lib/firebase-admin")

;(async () => {
  const date = getDateArr().join("-")
  const ref = store.doc("tweets/" + date)
  const tweets = (await ref.get()).data()
  await ref.set(
    Object.values(tweets)
      .filter((i) => {
        const postedAt = i.postedAt.toDate()
        const current = new Date()
        const hours = Math.abs(postedAt - current) / 36e5
        if (hours > 8) return false
        return true
      })
      .reduce((acc, cur) => {
        acc[cur.tweetId] = cur
        return acc
      }, {}),
    {
      merge: false,
    }
  )
})()
