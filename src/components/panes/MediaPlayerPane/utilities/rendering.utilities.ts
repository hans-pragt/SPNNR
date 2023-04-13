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
 * Renders the vinyl part of a record.
 */
export function renderVinyl(context : CanvasRenderingContext2D, radius : number) {
  // Outer circle:
  context.beginPath();
  context.arc(radius, radius, radius, 0, 2 * Math.PI);
  context.fillStyle = '#3e3e3f';
  context.fill();
}

/**
 * Renders the label of a record.
 */
export function renderLabel(context : CanvasRenderingContext2D, radius : number) {
  // Inner circle:
  context.beginPath();
  context.arc(radius, radius, radius * 0.35, 0, 2 * Math.PI);
  context.fillStyle = 'white';
  context.fill();

  // Spindle
  context.beginPath();
  context.arc(radius, radius, radius * 0.03, 0, 2 * Math.PI);
  context.fillStyle = 'black';
  context.fill();
}

/**
 * Renders a slice.
 */
export function renderSlices(context : CanvasRenderingContext2D, radius : number, items : Array<string>) {
  context.save();

  context.translate(radius, radius);
  
  items.forEach((item, index) => {
    const arc = ((2 * Math.PI) / items.length);
    const angle = arc * index;

    // Dividing Line:
    const endX = radius * Math.cos(angle);
    const endY = radius * Math.sin(angle);

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(endX, endY);
    context.closePath();
    context.stroke();

    // Label:
    context.save();

    context.rotate(angle + (arc / 2));
    context.font = '48px VT323';
    context.fillStyle = 'white';
    context.textAlign = 'right';
    context.fillText(item, (radius * 0.95), 12);

    context.restore();
  });

  context.restore();
}

// #endregion Rendering Utilities