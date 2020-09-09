import * as PIXI from 'pixi.js'
import Ship from './game/ship'
import EnemyShip from './game/enemyShip'
import Scene from './core/game_scene'

const app = new PIXI.Application({
  width: 1280,
  height: 720,
  backgroundColor: 0x1099bb,
  view: document.querySelector('#scene'),
  resolution: window.devicePixelRatio || 1
}); 

Scene.init(app)

const texture = PIXI.Texture.from('assets/ship.png');
const texture2 = PIXI.Texture.from('assets/ship3.png');

// var scene = new Scene(app)
var secondShip = new EnemyShip(texture2)
var ship = new Ship(texture)
// scene.add(ship)
// scene.add(secondShip)

ship.transform.position.set(200, 360)
secondShip.transform.position.set(1000, 360)
