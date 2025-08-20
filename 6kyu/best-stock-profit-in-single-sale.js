// Description:

// You're a buyer/seller and your business is at stake .. You need to make a profit .. Or at least, you need to lose the least amount of money!
// Knowing a list of prices for buy/sell operations, you need to pick two of them. Buy/sell market is evolving across time and the list represent this evolution. First, you need to buy one item, then sell it later. Find the best profit you can do.
// Example:

// Given an array of prices [3, 10, 8, 4], the best profit you could make would be 7 because you buy at 3 first, then sell at 10.
// Input:

// A list of prices (integers), of length 2 or more.
// Output:

// The result of the best buy/sell operation, as an integer.
// Note:

// Be aware you'll face lists with several thousands of elements, so think about performance.


//arr numbers, at least two always
//return the profit
//[3,10,8,4] => 7
//[3,4] => 1
//[9,9] => 0
//[10,7,5,4,1] => -1
//need to find the highest profit first buy then sell
//for each price from the second one onward
//calculate profit current price - min price
//if profit > max profit assign that to max profit
//if current is less than min price set current to min price
//return max profit



function maxProfit(prices) {
    let minPrice = prices[0]
    let maxProfit = prices[1] - prices[0]

    //we start at index 1 because starting at 0 will compare the first price to itself
    for(let i = 1; i < prices.length; i++){

        let currentPrice = prices[i]
        let profit = currentPrice - minPrice

        if(profit > maxProfit){
            maxProfit = profit}

        if(currentPrice < minPrice){ 
            minPrice = currentPrice}
    }

    return maxProfit
}



//Codewars
function maxProfit(prices) {
  let m = prices[0], res = prices[1] - prices[0];
  for (let i = 1; i < prices.length; i++) {
    const x = prices[i];
    res = Math.max(res, x - m);
    m = Math.min(m, x);
  }
  return res;
}



//Codewars
const maxProfit = (prices) => {
  let leastPrice = prices[0],
    maxProfit = prices[1] - prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - leastPrice > maxProfit) maxProfit = prices[i] - leastPrice;
    if (leastPrice > prices[i]) leastPrice = prices[i];
  }

  return maxProfit;
};




//Codewars
const maximum = xs => xs.reduce( (x,y) => Math.max(x,y) ) ;
const zipWith = fn => xs => ys => Array.from( { length: Math.min(xs.length,ys.length) }, (_,i) => fn(xs[i],ys[i]) ) ;
const subtract = (x,y) => y - x ;
const scanl1 = fn => function([...xs]) {
  for ( let i=1; i in xs; i++ ) xs[i] = fn(xs[i-1],xs[i]);
  return xs;
} ;

function maxProfit(prices) { return maximum (zipWith (subtract) (scanl1 (Math.min) (prices)) (prices.slice(1))) }