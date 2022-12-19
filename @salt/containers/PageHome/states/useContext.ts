import * as React from "react";
import { baseHandler } from "./handler";
import { baseReducer } from "./reducer";
import { StateType } from "./state";

interface CtxType {
  state: StateType;
  handler: ReturnType<typeof baseHandler>;
}

const ctx = React.createContext<CtxType>(undefined as unknown as CtxType);

export function useHomeProvider() {
  const initialValue: StateType = {};
  const [state, dispatch] = React.useReducer(baseReducer, initialValue);
  const handler = baseHandler(state, dispatch);
  const { Provider } = ctx;

  return { Provider, state, handler };
}

export function useHomeContext() {
  return React.useContext(ctx);
}
