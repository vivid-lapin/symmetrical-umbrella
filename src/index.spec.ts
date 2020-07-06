import sleep from "./index"

test(
  "sleep 5 seconds",
  async () => {
    const prev = new Date().getTime()

    await sleep(5000)

    const next = new Date().getTime()

    expect(Math.round((next - prev) / 100)).toEqual(50)
  },
  1000 * 10
)
