import * as React from "react";
import { useQuery } from "react-query";
import { getYoutubeApi } from "../../api/youtube";
import { useHomeProvider } from "./states";

export default function HomeProvider(props: React.PropsWithChildren) {
  const { children } = props;
  const videosData = useQuery(["videosData"], getYoutubeApi);
  const { Provider, handler, state } = useHomeProvider();

  return (
    <Provider value={{ handler, state: { ...state, videosData } }}>
      {children}
    </Provider>
  );
}
