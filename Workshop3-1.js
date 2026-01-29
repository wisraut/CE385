let even= 0;
let odd= 1;

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        even += i;
    }
}

for (let i = 1; i < 50; i++) {
    if (i % 2 !== 0) {
        odd += i;
    }
}

console.log("ผลรวมของเลขคู่ 2-50: " +even);
console.log("ผลรวมของเลขคี่ 1-10: " +odd);