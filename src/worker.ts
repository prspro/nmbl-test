// import { expose } from 'comlink';

// const ticker = {
//   // tickerList: new Array(),
//   counter: 0,
//   // addTicker() {
//   //   this.tickerList.push("ticker")
//   // },
//   inc() {
//     this.counter++;
//   },
//   start() {
//     const self =  this;
//     setInterval(() => {
//       // self.tickerList.forEach(ticker => console.log(ticker));
//       self.counter++;
//       console.log(self.counter);
//     }, 1e3);
//   }
// };



// export type MyFirstWorker = typeof exports;
// expose(ticker);

let list = new Array();

onmessage = function(e) {
  list.push(e.data);
}


setInterval(() => {
  postMessage("tick");
  console.log(list);
}, 1e3);

export {}
