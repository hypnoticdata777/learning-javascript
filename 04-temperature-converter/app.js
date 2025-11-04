// ================= CORE LOGIC =================
const ABS_ZERO_C = -273.15;
const ABS_ZERO_F = -459.67;
const ABS_ZERO_K = 0;

function roundTo(value, digits = 2) {
  const p = Math.pow(10, digits);
  return Math.round((Number(value) + Number.EPSILON) * p) / p;
}

function belowAbsoluteZero(value, unit) {
  if (value === "" || value === null || isNaN(value)) return false;
  const v = Number(value);
  switch (unit) {
    case "C": return v < ABS_ZERO_C;
    case "F": return v < ABS_ZERO_F;
    case "K": return v < ABS_ZERO_K;
    default:  return false;
  }
}

function cToF(c) { return (c * 9) / 5 + 32; }
function fToC(f) { return (f - 32) * 5 / 9; }
function cToK(c) { return c + 273.15; }
function kToC(k) { return k - 273.15; }

function convert(value, from, to) {
  if (from === to) return value;
  let c;

  switch (from) {
    case "C": c = value; break;
    case "F": c = fToC(value); break;
    case "K": c = kToC(value); break;
    default: throw new Error("Unknown from-unit");
  }

  switch (to) {
    case "C": return c;
    case "F": return cToF(c);
    case "K": return cToK(c);
    default: throw new Error("Unknown to-unit");
  }
}

// ================= UI WIRING =================
window.addEventListener("DOMContentLoaded", () => {
  console.log("app.js loaded & DOM ready");

  const $c = document.getElementById("celsius");
  const $f = document.getElementById("fahrenheit");
  const $k = document.getElementById("kelvin");
  const $msg = document.getElementById("message");
  const $clear = document.getElementById("clearBtn");

  if (!$c || !$f || !$k) {
    console.error("Inputs not found. Check IDs in index.html.");
    return;
  }

  let isSyncing = false;

  function parseInput(raw) {
    if (raw == null) return "";
    const trimmed = String(raw).trim();
    if (trimmed === "") return "";
    const normalized = trimmed.replace(",", ".");
    const n = Number(normalized);
    return Number.isFinite(n) ? n : NaN;
  }

  function setMessage(text) {
    if ($msg) $msg.textContent = text || "";
  }

  function markError(el, on) {
    if (el) el.classList.toggle("error", !!on);
  }

  function syncFrom(source) {
    if (isSyncing) return;
    isSyncing = true;

    const raw = source.value;
    const unit = source === $c ? "C" : source === $f ? "F" : "K";
    const num = parseInput(raw);

    setMessage("");
    [$c, $f, $k].forEach(inp => markError(inp, false));

    if (raw === "") {
      $c.value = ""; $f.value = ""; $k.value = "";
      isSyncing = false; return;
    }

    if (Number.isNaN(num)) {
      setMessage("Please enter a valid number (e.g., 25 or 25.5).");
      markError(source, true);
      isSyncing = false; return;
    }

    if (belowAbsoluteZero(num, unit)) {
      setMessage("Below absolute zero is physically impossible. Check the value.");
      markError(source, true);
      isSyncing = false; return;
    }

    const cVal = roundTo(convert(num, unit, "C"));
    const fVal = roundTo(convert(num, unit, "F"));
    const kVal = roundTo(convert(num, unit, "K"));

    $c.value = cVal;
    $f.value = fVal;
    $k.value = kVal;

    isSyncing = false;
  }

  [$c, $f, $k].forEach(input => {
    input.addEventListener("input", e => syncFrom(e.target));
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") e.currentTarget.blur();
      if (e.key === "Escape") {
        e.preventDefault();
        e.currentTarget.value = "";
        syncFrom(e.currentTarget);
      }
    });
    input.addEventListener("focus", e => setTimeout(() => e.target.select(), 0));
  });
//this ensures that when you click or tab into a field, its text highlights instantly, ready for replacement
  if ($clear) {
    $clear.addEventListener("click", () => {
      $c.value = ""; $f.value = ""; $k.value = "";
      setMessage("");
      [$c, $f, $k].forEach(inp => markError(inp, false));
      $c.focus();
    });
  }
});
