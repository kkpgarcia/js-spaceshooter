import { EPSILON } from "core-js/fn/number"

import Vec2 from './vec2'

export default class MathEx {
    static EPSILON = 0.0002
    static EPSILON_SQ = EPSILON * EPSILON
    static BIAS_RELATIVE = 0.95
    static BIAS_ABSOLUTE = 0.01
    static DT = 1 / 60
    static GRAVITY = Vec2(0.0, 100.0)
    
    static PENETRATION_ALLOWANCE = 0.05
    static PENETRATION_CORRECTION = 0.4

    static tolerantEquals(a, b) {
        return (Math.abs(a - b)) <= EPSILON
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