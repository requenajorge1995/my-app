import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function useBrowserNavitagion({
  onGoingForward,
  onGoingBackward,
}) {
  const previousIdxRef = useRef(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);

    function handleRouteChange() {
      console.log({
        previousIdx: previousIdxRef.current,
        currentIdx: window.history.state.idx,
        windowHistory: window.history.state,
      });
      previousIdxRef.current = window.history.state.idx;
    }
  }, [router]);

  useEffect(() => {
    window.addEventListener("popstate", popstateEventHandler);
    return () => window.removeEventListener("popstate", popstateEventHandler);

    function popstateEventHandler(event) {
      const nextIdx = event.state.idx;
      const previousIdx = previousIdxRef.current;
      const goingBackward = nextIdx < previousIdx;

      if (goingBackward) onGoingBackward && onGoingBackward();
      else onGoingForward && onGoingForward();
    }
  }, [onGoingForward, onGoingBackward]);
}
