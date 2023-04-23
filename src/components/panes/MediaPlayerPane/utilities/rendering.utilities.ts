// #region Rendering Constants

const VINYL_COLOR : string          = '#3e3e3f';
const VINYL_LIGHTER_COLOR : string  = 'rgba(255, 255, 255, 0.1)';
const SPINDLE_COLOR : string        = 'black';
const DIVIDING_LINE_COLOR : string  = '#171717';
const TEXT_FONT : string            = '32px VT323';
const TEXT_COLOR : string           = 'rgba(255, 255, 255, 0.6)'

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
  context.fillStyle = VINYL_COLOR;
  context.arc(radius, radius, radius, 0, 2 * Math.PI);
  context.fill();

  // Botttom-right highlight:
  context.beginPath();
  context.moveTo(radius, radius);
  context.fillStyle = VINYL_LIGHTER_COLOR;
  context.arc(radius, radius, radius, 0, Math.PI / 4);
  context.lineTo(radius, radius);
  context.fill();

  // Top-left highlight:
  context.beginPath();
  context.moveTo(radius, radius);
  context.fillStyle = VINYL_LIGHTER_COLOR;
  context.arc(radius, radius, radius, Math.PI, Math.PI + Math.PI / 4);
  context.lineTo(radius, radius);
  context.fill();
}

/**
 * Renders the label of a record.
 */
export function renderLabel(context : CanvasRenderingContext2D, radius : number) {
  const image = new Image();
  image.onload = () => {
    context.save();

    // Clip circle from label.
    context.beginPath();
    context.arc(radius, radius, radius * 0.35, 0, 2 * Math.PI);
    context.clip();
    
    // Drab label.
    const labelSize = radius * 0.7;
    context.drawImage(image, radius - (labelSize / 2), radius - (labelSize / 2), labelSize, labelSize);

    context.restore();

    // Spindle
    context.beginPath();
    context.arc(radius, radius, radius * 0.03, 0, 2 * Math.PI);
    context.fillStyle = SPINDLE_COLOR;
    context.fill();
  }

  image.src = 'images/faultlines_label.jpg';
}

/**
 * Renders a slice.
 */
export function renderSlices(context : CanvasRenderingContext2D, radius : number, items : Array<string>) {
  context.save();

  const arc = ((2 * Math.PI) / items.length);

  context.translate(radius, radius);
  context.rotate(-(Math.PI / 2) - (arc / 2));
  
  items.forEach((item, index) => {
    const angle = arc * index;

    // Dividing Line:
    /*
    const endX = radius * Math.cos(angle);
    const endY = radius * Math.sin(angle);

    context.beginPath();
    context.lineWidth = 3;
    context.moveTo(0, 0);
    context.lineTo(endX, endY);
    context.closePath();
    context.strokeStyle = DIVIDING_LINE_COLOR;
    context.stroke();
    */

    // Label:
    context.save();

    context.rotate(angle + (arc / 2));
    context.font = TEXT_FONT;
    context.fillStyle = TEXT_COLOR;
    context.textAlign = 'right';
    context.fillText(item, (radius * 0.95), 12);

    context.restore();
  });

  context.restore();
}

// #endregion Rendering Utilities