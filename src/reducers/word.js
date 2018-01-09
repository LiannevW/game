import word from '../fixtures/secretWord'

export default (state = word, action) => {
  console.log(state)
  return state
}
