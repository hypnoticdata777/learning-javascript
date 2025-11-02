// 03-odd-even/script.js

function parityOf(n) {
  if (typeof n !== "number" || Number.isNaN(n)) return "invalid";
  if (!Number.isInteger(n)) return "not-integer";
  return n % 2 === 0 ? "even" : "odd";
}

const input  = document.getElementById("numberInput");
const button = document.getElementById("checkBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const raw = input.value.trim();
  const num = Number(raw);
  const res = parityOf(num);

  if (res === "even")      show(`${raw} is even`, "ok");
  else if (res === "odd")  show(`${raw} is odd`, "ok");
  else if (res === "not-integer") show(`${raw} is not an integer.`, "error");
  else                     show(`'${raw}' is not valid.`, "error");
});

function show(msg, cls) {
  result.textContent = msg;
  result.className = cls;
}
