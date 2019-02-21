// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let money = {};
    let H, Q, D, N, P;

    H = Math.floor(currency / 50);
    let cash = currency % 50;
    if (H > 0) money.H = H;

    Q = Math.floor(cash / 25);
    cash = cash % 25;
    if (Q > 0) money.Q = Q;

    D = Math.floor(cash / 10);
    cash = cash % 10;
    if (D > 0) money.D = D;

    N = Math.floor(cash / 5);
    if (N > 0) money.N = N;

    P = cash % 5;
    if (P > 0) money.P = P;

    if (currency <= 0) {
        return money;
    } else if (currency > 10000) {
        return money = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
        return money;
}
