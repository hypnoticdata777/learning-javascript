# 🧠 learning-javascript

Daily JavaScript learning journey (fundamentals → mastery).  
Each folder = one focused project/day. Goal: **consistency, clarity, progression**.

![GitHub last commit](https://img.shields.io/github/last-commit/hypnoticdata777/learning-javascript?color=brightgreen)
![GitHub repo size](https://img.shields.io/github/repo-size/hypnoticdata777/learning-javascript?color=blue)
![GitHub stars](https://img.shields.io/github/stars/hypnoticdata777/learning-javascript?style=social)

---

## Structure

Each project folder contains:
- A single `index.js` or `app.js` file  
- Optional HTML/CSS if UI-based  
- Step-by-step commits showing concept mastery  

## Progress Log

| # | Date | Project / Focus | Core Concepts | Status |
|---|------|------------------|----------------|---------|
| 1 | Oct 30, 2025 | **Console Logs + VS Code Setup** | Node basics, console output, keyboard shortcuts | ✅ Completed |
| 2 | Nov 1, 2025 | **Basic Calculator** | Variables, conditionals, switch statements, modular functions | ✅ Completed |
| 3 | Nov 2, 2025 | **Odd/Even Checker (UI Integration)** | Conditionals, validation, modularization, DOM manipulation | ✅ Completed |
| 4 | Nov 3, 2025 | **Temperature Converter** | Event-driven programming, validation, UX feedback, DOM updates | ✅ Completed |
| 5 | Nov 4, 2025 | **Multiplication Table Generator** | Loops, dynamic HTML generation, table rendering, input validation | ✅ Completed |
| 6 | Nov 5, 2025 | **Smart To-Do List** | Arrays, objects, loops, filtering, event delegation, state management | ✅ Completed |
| 7 | Nov 7, 2025 | **Random Quote Generator** | Arrays of objects, Math.random(), do-while loops, animations, duplicate prevention | ✅ Completed |

---

##  How to Run
```bash
# Run console-based apps
cd 02-basic-calculator
node index.js

# Run browser-based apps
cd 04-temperature-converter
start index.html  # or open manually
```

---

## Projects Summary

### Project 02 – Basic Calculator

**Date:** Nov 1, 2025  
**Concepts:** Variables, conditionals, switch statements, modular functions.  
**Highlights:**
- Core logic fully modularized.
- Clean console interface with user input simulation.

**Reflection:**  
I learned how to design a system of reusable logic blocks. Each calculation branch acts as a separate module, just like functions in larger applications.

---

### Project 03 – Odd/Even Checker (UI Edition)

**Date:** Nov 2, 2025  
**Concepts:** Conditionals, modular thinking, DOM logic, validation.  
**Highlights:**
- Console logic evolved into a browser UI app.
- Added instant feedback, reset button, and input guards.
- Introduced CSS for a clean visual layer.

**Reflection:**  
Translating code to UI taught me how JavaScript interacts with the DOM — every action can trigger logic, giving programs "life" through user events.

---

### Project 04 – Temperature Converter

**Date:** Nov 3, 2025  
**Concepts:** Bi-directional syncing, event listeners, validation, UX polish.  
**Highlights:**
- Real-time two-way updates across Celsius, Fahrenheit, Kelvin.
- Absolute-zero validation + aria-live user messages.
- Enter/Esc keyboard shortcuts and auto-focus select.

**Reflection:**  
This project showed how small details like keyboard shortcuts and validation transform a script into a real user experience.

---

### Project 05 – Multiplication Table Generator

**Date:** Nov 4, 2025  
**Concepts:** Loops, dynamic HTML generation, table rendering, input validation.  
**Highlights:**
- Interactive table generation with customizable number and range.
- Dynamic HTML string building using loops.
- Responsive table design with hover effects and animations.
- Enter key support and real-time input validation.

**Reflection:**  
This project deepened my understanding of loops and dynamic content generation. Building HTML strings programmatically showed me how JavaScript can construct entire UI elements on the fly. The hover effects and transitions also reinforced how CSS and JS work together to create polished, interactive experiences.

---

### Project 06 – Smart To-Do List

**Date:** Nov 5, 2025  
**Concepts:** Arrays, objects, loops, filtering, event delegation, state management.  
**Highlights:**
- Task storage using an array of objects with unique IDs.
- Dynamic rendering with for loops iterating through filtered data.
- Toggle complete and delete functionality using event delegation.
- Filter system (All/Active/Completed) with live task counter.
- Smooth slide-in animations and hover effects.

**Reflection:**  
This project leveled up my understanding of data structures. Working with arrays of objects showed me how real applications organize information. The filter methods taught me how to transform data on the fly, and event delegation revealed how to handle clicks on elements that don't exist yet. This is where JavaScript starts feeling like a real tool for building apps, not just running scripts.

---

### Project 07 – Random Quote Generator

**Date:** Nov 7, 2025  
**Concepts:** Arrays of objects, Math.random(), do-while loops, CSS animations, duplicate prevention.  
**Highlights:**
- Array of 12 inspirational quotes stored as objects with text and author properties.
- Random selection using Math.random() and Math.floor() for array indexing.
- Smart duplicate prevention using do-while loop to avoid consecutive repeats.
- Smooth fade-in animations triggered on each quote change.
- Auto-load random quote on page initialization.

**Reflection:**  
This project solidified my understanding of working with arrays and randomization. The do-while loop for preventing duplicates taught me how to add intelligent constraints to random behavior. Combining JavaScript class manipulation with CSS animations showed me how to create smooth, polished UI transitions. Most importantly, this reinforced that good UX isn't just about functionality—it's about the small details like not showing the same quote twice in a row.

---

## Skills Reinforced

- DOM manipulation & reactive events
- Input validation & modular design
- Real-time data synchronization
- UI polish & user feedback design
- Consistent commit discipline & semantic logging
- Loop iteration & dynamic content generation
- Table structures & semantic HTML
- CSS animations & state transitions
- **Array manipulation & data filtering**
- **Object-oriented thinking with task objects**
- **Event delegation patterns**
- **State management fundamentals**
- **Random number generation & array indexing**
- **Duplicate prevention logic**
- **CSS animations triggered via JavaScript**