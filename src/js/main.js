import * as PIXI from 'pixi.js'
import Ship from './game/ship'
import EnemyShip from './game/enemyShip'
import Engine from './core/engine'
import GameObject from './core/gameobject';
import ShipSelector from './game/ship_selector';
import GameData from './game/game_data'

const app = new PIXI.Application({
  width: 1280,
  height: 720,
  backgroundColor: 0xf5f5f5,
  view: document.querySelector('#scene'),
  resolution: window.devicePixelRatio || 1
}); 

Engine.init(app)

const logoTexture = PIXI.Texture.from('assets/logo.png')

// const texture = PIXI.Texture.from('assets/ship.png');
const texture2 = PIXI.Texture.from('assets/ship3.png');

export class SplashScreenState {
  enter () {
    //Create objects
    console.log('Starting Game')
    this.logo = new GameObject(logoTexture)
    this.logo.transform.position.set(640, 360)
    this.logo.renderer.sprite.width = 350
    this.logo.renderer.sprite.height = 350
    //Start Timer
    var counter = 0;
    var interval = setInterval(function() {
        counter++;
        if (counter == 2) {
          console.log('Transitioning')
          Engine.stateMachine.changeState(new MenuScreenState)
          clearInterval(interval);
        }
    }, 1000);
  }
  update() {}
  exit () {
    Engine.remove(this.logo)
  }
}

export class MenuScreenState {
  enter() {
    this.logo = new GameObject(logoTexture)
    this.logo.transform.position.set(640, 260)
    this.logo.renderer.sprite.width = 350
    this.logo.renderer.sprite.height = 350

    this.selection = new ShipSelector()
  }

  update() {
    this.selection.update()
  }

  exit() {
    Engine.remove(this.logo)
    this.selection.clean()
  }
}

export class GameState {
  enter () {
    this.ship = new Ship(GameData.selectedShip),
    this.enemyShip = new EnemyShip(texture2),
    this.ship.transform.position.set(200, 360)
    this.enemyShip.transform.position.set(1000, 360)
  }
  update() {}
  exit () {
    Engine.remove(this.ship)
    Engine.remove(this.enemyShip)
  }
}

export class GameEndState {
  enter () {}
  update() {}
  exist() {}
}

Engine.stateMachine.changeState(new SplashScreenState())