!function(){"use strict";var e=void 0,t=!0;onmessage=function(a){switch(a.data){case"start":t=!1,e=setInterval((function(){postMessage("tick")}),1e3);break;case"pause":t=!0,clearInterval(e);break;case"toggle":t?(t=!t,e=setInterval((function(){postMessage("tick")}),1e3)):(t=!t,clearInterval(e))}}}();
//# sourceMappingURL=797.cd38eb94.chunk.js.map