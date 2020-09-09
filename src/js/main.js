import * as PIXI from 'pixi.js'
import Ship from './game/ship'
import EnemyShip from './game/enemyShip'
import Engine from './core/engine'
import GameObject from './core/gameobject';
import Time from './core/time'

const app = new PIXI.Application({
  width: 1280,
  height: 720,
  backgroundColor: 0xffffff,
  view: document.querySelector('#scene'),
  resolution: window.devicePixelRatio || 1
}); 

Engine.init(app)

const logoTexture = PIXI.Texture.from('assets/logo.png')

const texture = PIXI.Texture.from('assets/ship.png');
const texture2 = PIXI.Texture.from('assets/ship3.png');

class SplashScreenState {
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
  exit () {
    Engine.remove(this.logo)
  }
}

class MenuScreenState {
  enter() {}
  exit() {}
}

class GameState {
  enter () {
    this.ship = new Ship(texture),
    this.enemyShip = new EnemyShip(texture2),
    this.ship.transform.position.set(200, 360)
    this.enemyShip.transform.position.set(1000, 360)
  }
  exit () {
    Engine.remove(this.ship)
    Engine.remove(this.enemyShip)
  }
}

Engine.stateMachine.changeState(new SplashScreenState())
// Engine.stateMachine.changeState(new SplashScreenState())
// Engine.stateMachine.changeState(new MenuScreenState())