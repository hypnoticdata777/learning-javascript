// 03-odd-even/oddEven.js

/**
 * Returns "even" | "odd" with basic validation.
 * Accepts integers (negatives included). Rejects non-integers.
 */
function parityOf(n) {
  if (typeof n !== "number" || Number.isNaN(n)) return "invalid";
  if (!Number.isInteger(n)) return "not-integer";
  return (n % 2 === 0) ? "even" : "odd";
}

// CLI usage:
// node oddEven.js 42
// node oddEven.js -3
const arg = process.argv[2];

if (arg === undefined) {
  console.log("Usage: node oddEven.js <number>");
  process.exit(1);
}

const num = Number(arg);
const result = parityOf(num);

switch (result) {
  case "even":
    console.log(`${arg} is even`);
    break;
  case "odd":
    console.log(`${arg} is odd`);
    break;
  case "not-integer":
    console.log(`${arg} is not an integer (e.g., 1.5). Please enter an integer.`);
    break;
  default:
    console.log(`'${arg}' is not a valid number.`);
}
