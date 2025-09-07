# Etch-a-Sketch 🎨

A browser-based Etch-a-Sketch game. 
Users can hover over a grid of squares to "draw" a pixelated trail, just like a digital sketchpad.

---

## Features
- Default **16x16 grid** of squares.
- Hover over squares to change their color, leaving a trail.
- Button to reset the grid with a custom size (up to **100x100**) using a prompt.
- Grid always resizes to fit within a fixed **960px container**.

---

## What I Learned
- Dynamically creating and appending DOM elements with JavaScript.
- Using **for loops** to generate grids programmatically instead of hardcoding HTML.
- Adding event listeners to multiple elements with `forEach`.
- Using **Flexbox** (`display: flex; flex-wrap: wrap;`) to align square divs into a grid.
- Managing user input with `prompt()`.
- Clearing and replacing DOM nodes with `.replaceChildren()`.

---

## Live Demo
👉 [View on GitHub Pages](https://shoiyan.github.io/odin-Etch_a_Sketch/)

---

## Extra Credit (Future Improvements)
- Randomize the color of squares with each hover.
- Add progressive darkening (opacity decreases by 10% with each hover until fully black).
- Make the grid responsive with relative units (`vh`, `vw`, etc.).

