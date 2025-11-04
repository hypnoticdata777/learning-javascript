// ---Absolute zero constants ---
const ABS_ZERO_C = -273.15;
const ABS_ZERO_K = 0;
const ABS_ZERO_F = -459.67;

// --- Helpers ---
function roundTo(value, digits = 2) {
    const p = Math.pow(10, digits);
    return Math.round((Number(value) + Number.EPSILON) * p) / p;
}

function belowAbsoluteZero(value, unit) {
    if (value === "" || value === null || isNan(value)) return false;
    const v = Number(value);
    switch (unit) {
        case "C": return v < ABS_ZERO_C;
        case "F": return v < ABS_ZERO_F;
        case "K": return v < ABS_ZERO_K;
        default: return false;
    }
}

// --- Pairwise converters ---
function cToF(c) { return (c*9) / 5 + 32; }
function fToC(f) { return (f - 32)* 5 / 9; }
function cToK(c) { return c + 273.15; }
function kToC(k) { return k - 273.15; }

// Generic convert: value (number), from ('C' | 'F' | 'K'), to ('C' | 'F' | 'K')
function convert(value, from, to) {
    if (from === to) return value;
    let c;

    switch (from) { 
        case "C":
            c = value;
            break;
            case "F":
                c = fToC(value);
                break;
                case "K":
                    c = kToC(value);
                    break;
                    default:
                        throw new Error("Unknown from-unit");
    }
    switch (to) {
        case "C": return c;
        case "F": return cToF(c);
        case "K": return cToK(c);
        default: throw new Error("Unknown to-unit");
    }
}
// --- Quick console tests ---
if (typeof window === "undefined") {
    // Node or console run
    console.log("32°F -> C:", roundTo(convert(32, "F", "C")));  //0
    console.log("0°C -> F:", roundTo(convert(0, "C", "F")));  //32
    console.log("0 K -> C:", roundTo(convert(0, "K", "C")));   //-273.15
    console.log("100°C -> K:", roundTo(convert(100, "C", "K"))); // 373.15
}
export {
    ABS_ZERO_C, ABS_ZERO_F, ABS_ZERO_K,
    roundTo, belowAbsoluteZero,
    cToF, fToC, cToK, kToC,
    convert
};
