import { useEffect, useState, useMemo } from "react";

const initWorker = () => {
  console.log("worker init");

  return new Worker(new URL("../workers/ticker.ts", import.meta.url));
};

const useTicker = () => {
  const ticker = useMemo(() => initWorker(), []);

  return { ticker };
};

export default useTicker;
