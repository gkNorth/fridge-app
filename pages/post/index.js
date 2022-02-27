const putValues = () => {
  fetch('../api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      params: {
        id: 'f30e27a1-90c6-4e25-b000-3e08df23415f',
        name: 'これは長芋...!'
      }
    })
  })
}

const Post = () => {
  return (
    <>
      <p><button onClick={putValues}>ボタン</button></p>
    </>
  )
}
export default Post