import { ACTIONS } from "./App"

export function OperationButton({ dispatch, operation }) {
  return (
    <button className="rounded roundedOps"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}
export function OperationPercent({ dispatch, operation }) {
  return (
    <button className="rounded special"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}