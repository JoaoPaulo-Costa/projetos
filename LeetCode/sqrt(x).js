// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

let x = 0;

function sqrt(x) {
    let lo = 0, hi = x;

    while(lo < hi) {
        const mid = parseInt((lo + hi)/2);
        if(mid * mid ===x) {
            return mid;
        }
        if ( x < mid * mid) {
            hi = mid - 1;
        }
        else {
            lo = mid + 1;
        }
    }
    return x < hi * hi ? hi - 1 : hi;
}

function sqrt2(x) {
    for (let i = 0; i < x; i++) {
        if (i*i === x) {
            return i;
        }
        else if (i*i > x) {
            return i-1;
        }
    }
}