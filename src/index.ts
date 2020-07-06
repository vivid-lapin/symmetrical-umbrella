const sleep = (s: number) =>
  new Promise((res) => {
    setTimeout(() => res(), s)
  })

export default sleep
