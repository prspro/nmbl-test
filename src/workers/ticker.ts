let i: ReturnType<typeof setInterval> | undefined = undefined;
let isPaused = true;

onmessage = function (e) {
  switch (e.data) {
    case "start":
      isPaused = false;
      i = setInterval(() => {
        postMessage("tick");
      }, 1e3);
      break;
    case "pause":
      isPaused = true;
      clearInterval(i);
      break;
    case "toggle":
      if (isPaused) {
        isPaused = !isPaused;
        i = setInterval(() => {
          postMessage("tick");
        }, 1e3);
      } else {
        isPaused = !isPaused;
        clearInterval(i);
      }
      break;
    default:
      break;
  }
};

export {};
