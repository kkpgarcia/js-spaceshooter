import Vec2 from './vec2'
import MathEx from './math'

/** Debug Purposes */
import * as PIXI from 'pixi.js'
import NotificationCenter from './notification_center'

let _this = null

export default class Aabb2D {
    constructor(v1, v2, bounds) {
        this.min = new Vec2()
        this.max = new Vec2()
        this.bounds = bounds
        this.empty()
        
        this.addToContain(v1)
        this.addToContain(v2)
        /** Debug Purposes */
        _this = this
        this.collisionGraph = new PIXI.Graphics() 
        NotificationCenter.postNotification('CORE_INSTANTIATION', _this.collisionGraph, _this.collisionGraph)
    }

    empty() {
        this.min.x = Number.MAX_VALUE
        this.min.y = Number.MAX_VALUE
        this.max.x = -Number.MAX_VALUE
        this.max.y = -Number.MAX_VALUE
    }

    update() {
        console.log(this.bounds)
    }

    isEmpty() {
        return(this.min.x > this.max.x) && (this.min.y > this.max.y)
    }

    getMinimum() {
        return this.min
    }

    getMaximum() {
        return this.max
    }

    getCenter() {
        return (this.min + this.max) * 0.5
    }

    getSize() {
        return this.max - this.min
    }

    getRadiusVector() {
        return this.getSize() * 0.5
    }

    getRadius() {
        return this.getRadiusVector().magnitude
    }

    getTopLeft() {
        let v = new Vec2()
        v.x = this.min.x
        v.y = this.max.y
        return v
    }

    getBottomLeft() {
        return this.min
    }

    getTopRight() {
        return this.max 
    }

    getBottomRight() {
        let v = new Vec2()
        v.x = this.max.x
        v.y = this.min.y
        return v
    }

    addToContain(v) {
		if (v.x < this.min.x) {
			this.min.x = v.x;
		}

		if (v.y < this.min.y) {
			this.min.y = v.y;
		}

		if (v.x > this.max.x) {
			this.max.x = v.x;
		}

		if (v.y > this.max.y) {
			this.max.y = v.y;
		}
    }

    setPosition(pos) {
        let center = this.getCenter()
        // this.min.x = pos.x - center.x
        // this.min.y = pos.y - center.y

        // this.max.x = pos.y + center.x
        // this.max.y = pos.y + center.y
    }

    translate(translation) {
        if(this.isEmpty())
            return

        let center = this.getCenter()
        this.min.sub(center)
        this.max.sub(center)

        this.min.add(translation)
        this.max.add(translation)
    }

    contains(v) {
        reutrn (MathEx.tolerantLesserThanOrEquals(min.x, v.x) && MathEx.tolerantLesserThanOrEquals(v.x, max.x))
                && (MathEx.tolerantLesserThanOrEquals(min.y, v.y) && MathEx.tolerantLesserThanOrEquals(v.y, max.y))
    }

    isOverlapping(other) {
        return this.contains(other.getTopLeft())
                || this.contains(other.getBottomLeft())
                || this.contains(other.getTopRight())
                || this.contains(other.getBottomRight)
    }

    drawAabb() {
        // console.log('Top Left: ' + this.getTopLeft().x + ',' + this.getTopLeft().y)
        // console.log('Top Right: ' + this.getTopRight().x + ',' + this.getTopRight().y)
        // console.log('Bottom Left: ' + this.getBottomLeft().x + ',' + this.getBottomLeft().y)
        // console.log('Bottom Right: ' + this.getBottomRight().x + ',' + this.getBottomRight().y)
  
        this.collisionGraph.lineStyle(1, 0xffffff)
        // .moveTo(100, 100)
        // .lineTo(200, 100)
        // .lineTo(200, 200)
        // .lineTo(100, 200)
        // .lineTo(100, 100)
        .moveTo(this.getTopLeft().x, this.getTopLeft().y)
        .lineTo(this.getTopRight().x, this.getTopRight().y)
        .lineTo(this.getBottomRight().x, this.getBottomRight().y)
        .lineTo(this.getBottomLeft().x, this.getBottomLeft().y)
        .lineTo(this.getTopLeft().x, this.getTopLeft().y)

        
    }
}