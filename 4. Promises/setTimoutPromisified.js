// https://petal-estimate-4e9.notion.site/Callback-hell-2ff7dfd10735801bbcb9c9b21dd4845d

function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// again we end up in callback hell
setTimeoutPromisified(1000).then(function() {
  console.log("hi");
  setTimeoutPromisified(3000).then(function() {
    console.log("hello");
    setTimeoutPromisified(5000).then(function() {
      console.log("hello");
    })
  })
})

// a better way for promisie chaining is to return the promise from the then callback
setTimeoutPromisified(1000)
  .then(function() {
    console.log("hi");
    return setTimeoutPromisified(3000)
  }).then(function() {
    console.log("hello");
    return setTimeoutPromisified(5000)
  }).then(function() {
    console.log("hello");
  })