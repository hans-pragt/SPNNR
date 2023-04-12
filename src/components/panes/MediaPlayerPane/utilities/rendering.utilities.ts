// #region Rendering Constants



// #endregion Rendering Constants

// #region Rendering Utilities

/**
 * Clears the entire canvas.
 */
export function clear(context : CanvasRenderingContext2D) {
  context.clearRect(
    0,
    0,
    context.canvas.width,
    context.canvas.height
  );
}

/**
 * Renders a record. 
 */
export function drawBackground(context : CanvasRenderingContext2D, radius : number) {
  // Outer circle:
  context.beginPath();
  context.arc(radius, radius, radius, 0, 2 * Math.PI);
  context.fillStyle = '#3e3e3f';
  context.fill();

  // Inner circle:
  context.beginPath();
  context.arc(radius, radius, radius * 0.6, 0, 2 * Math.PI);
  context.fillStyle = 'white';
  context.fill();
}

// #endregion Rendering Utilities