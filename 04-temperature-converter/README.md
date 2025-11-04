#  04 – Temperature Converter

A simple, accurate **temperature converter** built in vanilla JavaScript with **bi-directional syncing** across Celsius, Fahrenheit, and Kelvin.

---

##  How It Works
Each time a user enters a value in one field, the app:
1. Detects which unit is being used (`C`, `F`, or `K`).
2. Validates that the input is a valid number.
3. Checks if it’s below absolute zero:
   - **-273.15°C**, **-459.67°F**, or **0 K**.
4. Converts the temperature using clean mathematical formulas.
5. Updates the other two fields in real time.

No “Convert” button needed — it reacts instantly as you type.

---

##  Core Functions
| Function | Purpose |
|-----------|----------|
| `convert(value, from, to)` | Converts between any of the three temperature scales. |
| `belowAbsoluteZero(value, unit)` | Prevents physically impossible inputs. |
| `roundTo(value, digits)` | Rounds to a defined precision (default 2). |

---

##  Features
 Real-time, two-way data syncing  
 Absolute-zero validation  
 Input auto-selection on focus  
 Enter/Esc keyboard shortcuts  
 Clear button for quick reset  
 Subtle user messages via `aria-live` for accessibility  

---

##  Edge Cases
| Case | Expected Behavior |
|------|--------------------|
| Empty input | Clears all fields |
| Non-numeric | Shows warning and highlights field |
| Below absolute zero | Blocks input and warns user |

---

## Reflection
 All temperature conversions can be expressed through Celsius as a universal bridge.  
 Converting everything first to Celsius keeps logic clean, predictable, and reusable.

**Key takeaway:**  
I learned how **event-driven programming** works in the browser. The DOM isn’t just static — you can wire logic that *reacts* instantly to user input.

**Technical insight:**  
Adding an `isSyncing` flag prevents infinite loops when inputs trigger each other.  
UI behavior like focus-selection and Enter/Esc shortcuts make even a small project feel “complete.”

**Next steps:**  
- Add dropdowns for source → target conversion.  
- Include precision control (0–6 decimals).  
- Save last input via `localStorage`.

---

##  Author
**Carlos Sanchez Gonzalez**  
