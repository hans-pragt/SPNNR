// #region Rendering Constants

const VINYL_COLOR : string          = '#3e3e3f';
const VINYL_LIGHTER_COLOR : string  = 'rgba(255, 255, 255, 0.1)';
const STEM_COLOR : string           = '#a0a0a0';
const SPINDLE_COLOR : string        = 'black';
const TEXT_FONT : string            = 'VT323';
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
export function renderLabel(context : CanvasRenderingContext2D, radius : number, cover : string) {
  const image = new Image();
  image.onload = () => {
            
    // Drab label.
    const labelSize = radius * 0.7;
    context.drawImage(image, radius - (labelSize / 2), radius - (labelSize / 2), labelSize, labelSize);

    // Spindle
    context.beginPath();
    context.arc(radius, radius, radius * 0.03, 0, 2 * Math.PI);
    context.fillStyle = SPINDLE_COLOR;
    context.fill();
  }

  image.src = cover;
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

    // Label:
    context.save();

    context.rotate(angle + (arc / 2));

    const fontSize = Math.min((radius * 1.4) / item.length, 50);

    context.font = `${fontSize}px ${TEXT_FONT}`;
    context.fillStyle = TEXT_COLOR;
    context.textAlign = 'right';
    context.fillText(item, (radius * 0.95), 6);

    context.restore();
  });

  context.restore();
}

/**
 * Renders the stem.
 */
export function renderStem(context : CanvasRenderingContext2D, radius : number) {
  const stemBaseRadius = radius * 0.15;

  // Stem:
  context.beginPath();
  context.strokeStyle = STEM_COLOR;
  context.lineWidth = 8;

  const bezierX = (radius * 2) - (stemBaseRadius * 3);
  const bezierY = 14;

  context.moveTo(radius, 12);
  context.bezierCurveTo(
    bezierX, bezierY,
    bezierX, bezierY, 
    (radius * 2) - stemBaseRadius, stemBaseRadius * 2
  );
  context.stroke();

  // Base:
  context.beginPath();
  context.fillStyle = VINYL_COLOR;

  context.arc((radius * 2) - stemBaseRadius, stemBaseRadius * 2, stemBaseRadius, 0, 2 * Math.PI);
  
  context.fill();

  // Head:
  context.beginPath();
  context.fillStyle = VINYL_COLOR;

  // Context is cast here since the github build pipeline does not recognize it.
  (context as any).roundRect(radius - stemBaseRadius * 0.8, 0, 2 * stemBaseRadius * 0.8, stemBaseRadius * 2/3, 12);

  context.fill();

  // Indicator:
  context.beginPath();
  context.fillStyle = '#e84393';

  context.moveTo(radius - stemBaseRadius / 4, stemBaseRadius / 4);
  context.lineTo(radius + stemBaseRadius / 4, stemBaseRadius / 4);
  context.lineTo(radius, stemBaseRadius / 2);

  context.fill();
}

// #endregion Rendering Utilities