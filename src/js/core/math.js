// import { EPSILON } from "core-js/fn/number"

import Vec2 from './vec2'

export default class MathEx {
    // EPSILON = 0.0002
    // EPSILON_SQ = EPSILON * EPSILON
    // BIAS_RELATIVE = 0.95
    // BIAS_ABSOLUTE = 0.01
    // DT = 1 / 60
    // GRAVITY = Vec2(0.0, 100.0)
    
    // PENETRATION_ALLOWANCE = 0.05
    // PENETRATION_CORRECTION = 0.4

    static tolerantEquals(a, b) {
        return (Math.abs(a - b)) <= 0.0002
    }

    static tolerantGreaterThanOrEquals(a, b) {
        return a > b || this.tolerantEquals(a, b)
    }

    static tolerantLesserThanOrEquals(a, b) {
        return a < b || this.tolerantEquals(a, b)
    }

    static clamp(min, max, a) {
        return a < min ? min : a > max ? max : a 
    }
}