window.Segment = class Segment extends Ray {
    constructor(lineColor, center, secondPoint) {
        super(lineColor, center, secondPoint);
    }

    draw(){
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        context.strokeStyle = this.getLineColor().toString();
        context.moveTo(this.firstPoint.x, this.firstPoint.y);
        context.lineTo(this.secondPoint.x, this.secondPoint.y);
        context.stroke();
    }
}