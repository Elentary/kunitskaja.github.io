window.Triangle = class Triangle extends Polygon {
  constructor(lineColor, fillColor, ...points) {
    super(lineColor, fillColor, points[0], points[1], points[2]);
  }
};