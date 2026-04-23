var maxProfit = function(prices) {

    let max = 0;

    for(let i = 0; i<prices.length; i++){

        for(let j = i+1; j<prices.length; j++){

            let price = prices[j] - prices[i]

            if(price > max){
                max = price
            }

        }
    }

    return max;
    
};

// This is good but havinge O(n^2) time complexity