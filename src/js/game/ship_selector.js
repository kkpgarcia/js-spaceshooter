import * as PIXI from 'pixi.js'
import GameObject from '../core/gameobject'
import InputManager from '../core/input_handler'
import GameData from './game_data'
import Engine from '../core/engine'
import { GameState } from '../main'

export default class ShipSelector {
    constructor() {
        this.ship1Tex = PIXI.Texture.from('assets/ship.png')
        this.ship2Tex = PIXI.Texture.from('assets/ship2.png')
        this.currentIndex = 0
    
        this.ship1 = new GameObject(this.ship1Tex)
        this.ship1.transform.position.set(1280/2 - 100, 720/2 + 150)
        
        this.ship2 = new GameObject(this.ship2Tex)
        this.ship2.transform.position.set(1280/2 + 100, 720/2 + 150)

        this.inputRate = 1
        this.nextInput = 0
    }

    update() {
        if(InputManager.onKeyDown(InputManager.Keys.RIGHT)) {
            if(this.currentIndex == 1)
                this.currentIndex = 0
            else
                this.currentIndex = 1
        }

        if(InputManager.onKeyDown(InputManager.Keys.LEFT)) {
            if(this.currentIndex == 0)
                this.currentIndex = 1
            else
                this.currentIndex = 0
        }

        if(InputManager.onKeyDown(InputManager.Keys.RETURN)) {
            console.log('Pressed')
            if(this.currentIndex == 0)
                GameData.selectedShip = this.ship1Tex
            else
                GameData.selectedShip = this.ship2Tex

            Engine.stateMachine.changeState(new GameState())
        }

        this.updateSelection()
    }

    updateSelection() {
        if(this.currentIndex == 0) {
            this.ship1.transform.position.y = 720/2 + 150 - 30
            this.ship2.transform.position.y = 720/2 + 150
        } else {
            this.ship2.transform.position.y = 720/2 + 150 - 30
            this.ship1.transform.position.y = 720/2 + 150
        }
    }

    clean() {
        Engine.remove(this.ship1)
        Engine.remove(this.ship2)
    }
}