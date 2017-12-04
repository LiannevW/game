export default (state = [], action) => {
  if (action.type === 'GUESS' ) {
    const { input, word } = action.payload

    if ( input === word) {
    return state.concat(input.split(''))
    }

  return state.concat(input)
  }

return state

}
