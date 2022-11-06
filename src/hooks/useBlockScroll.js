/* global document */
// CUSTOM HOOK
// Stops user from scrolling the window up and down or side to side
import { useEffect } from "react";

const doBlock = (blocked) => {
  if (typeof document !== "undefined") {
    document.querySelector("html").style.overflow = blocked
      ? "hidden"
      : "initial";
    document.querySelector("body").style.overflow = blocked
      ? "hidden"
      : "initial";
  }
};

export default function useBlockScroll(blocked) {
  useEffect(() => {
    doBlock(blocked);

    return () => {
      doBlock(false);
    };
  }, [blocked]);
}
