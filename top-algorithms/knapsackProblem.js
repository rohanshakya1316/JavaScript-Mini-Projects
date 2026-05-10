// * A classical optimization problem where the goal is to select items in a way that maximizes the total value without exceeding a given weight.

// ? Dynamic Programming Solution (best)
const knapsackDP = (weights, values, capacity) => {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => {
    return Array(capacity + 1).fill(0);
  });

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w],
        );
      } else {
        dp[i][w] = dp[i-1][w];
      }
    }
  }
  return dp[n][capacity];
};

// ? Recursive Solution (Easy to understand)
function knapsack(weights, values, capacity, n) {
    // base case
    if (n === 0 || capacity === 0) {
        return 0;
    }

    // item too heavy
    if (weights[n - 1] > capacity) {
        return knapsack(weights, values, capacity, n - 1);
    }

    // choose max
    return Math.max(
        values[n - 1] + knapsack(
            weights,
            values,
            capacity - weights[n - 1],
            n - 1
        ),
        knapsack(weights, values, capacity, n - 1)
    );
}


// Example
const weights = [1, 3, 4, 5];
const values = [1, 4, 5, 7];
const capacity = 7;

console.log(
    knapsackDP(weights, values, capacity)
);

console.log(
    knapsack(weights, values, capacity, weights.length)
);