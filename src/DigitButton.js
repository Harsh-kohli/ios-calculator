import { ACTIONS } from "./App"

export function DigitButton({ dispatch, digit }) {
  return (
    <button className="rounded "
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}
export function SpecialButton({ dispatch, digit }) {
  return (
    <button className="span-two"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}