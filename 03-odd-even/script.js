// 03-odd-even/script.js

function parityOf(n) {
  if (typeof n !== "number" || Number.isNaN(n)) return "invalid";
  if (!Number.isInteger(n)) return "not-integer";
  return n % 2 === 0 ? "even" : "odd";
}

// Grab elements
const input  = document.getElementById("numberInput");
const check  = document.getElementById("checkBtn");
const clear  = document.getElementById("clearBtn");
const result = document.getElementById("result");

// Safety: if any element is missing, log it so we know immediately
if (!input || !check || !clear || !result) {
  console.error("Missing DOM elements:", {
    input: !!input, check: !!check, clear: !!clear, result: !!result
  });
}

// Focus on load
window.onload = () => input && input.focus();

// Helpers
function show(msg, kind = "ok") {
  if (!result) return;
  result.textContent = msg;
  result.className = kind === "error" ? "error" : "ok";
}

// Range parser: "-3..3"
function parseRange(raw) {
  const m = raw.match(/^\s*([+-]?\d+)\s*\.\.\s*([+-]?\d+)\s*$/);
  if (!m) return null;
  return [Number(m[1]), Number(m[2])];
}

function parityList(a, b) {
  const [start, end] = a <= b ? [a, b] : [b, a];
  const out = [];
  for (let n = start; n <= end; n++) {
    out.push(`${n}: ${n % 2 === 0 ? "even" : "odd"}`);
  }
  return out.join(", ");
}

// Events
check?.addEventListener("click", () => {
  const raw = (input?.value ?? "").trim();
  if (raw === "") return show("Please enter a number.", "error");

  const range = parseRange(raw);
  if (range) {
    const [a, b] = range;
    show(parityList(a, b));
    input?.focus();
    return;
    }

  const num = Number(raw);
  const res = parityOf(num);

  if (res === "even") show(`${raw} is even`);
  else if (res === "odd") show(`${raw} is odd`);
  else if (res === "not-integer") show(`${raw} is not an integer.`, "error");
  else show(`'${raw}' is not a valid number.`, "error");

  input?.focus();
});

clear?.addEventListener("click", () => {
  if (!input || !result) return;
  input.value = "";
  result.textContent = "";
  input.focus();
});

input?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") check?.click();
});
