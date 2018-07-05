function Go() {
    console.log("Go");
}

function GoSteps(n) {
    let count = (n === undefined) ? 1 : new Number(n);
    if (count < 0 || isNaN(count)) {
        count = 0;
    }
    count = Math.floor(count);
    while (count--) {
        Go();
    }
}

// test case
GoSteps(5); // 5
GoSteps(1); // 1
GoSteps(); // 1
GoSteps(0);  // 0
GoSteps(-1);  // 0
GoSteps(1.4);  // Go 1
GoSteps(1.6);  // Go 1
GoSteps(-1);  // 0
GoSteps(true);  // Go 1
GoSteps(false);  // 0
GoSteps("Test");  // 0
GoSteps(NaN);  // 0
GoSteps(null);  // 0