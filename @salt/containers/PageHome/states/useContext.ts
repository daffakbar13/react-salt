import React from "react";
import { useQuery } from "react-query";
import { getYoutubeApi } from "../../../api/youtube";
import { baseHandler } from "./handler";
import { baseReducer } from "./reducer";
import { StateType } from "./state";

interface CtxType {
  state: StateType;
  handler: ReturnType<typeof baseHandler>;
}

const ctx = React.createContext<CtxType>(undefined as unknown as CtxType);

export function useHomeProvider() {
  const videosData = useQuery("videosData", getYoutubeApi);
  const initialValue: StateType = { videosData };
  const [state, dispatch] = React.useReducer(baseReducer, initialValue);
  const handler = baseHandler(state, dispatch);
  const { Provider } = ctx;

  return { Provider, state, handler };
}

export function useHomeContext() {
  return React.useContext(ctx);
}
