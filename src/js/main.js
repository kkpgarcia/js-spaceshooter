import * as PIXI from 'pixi.js'
import Ship from './game/ship'
import EnemyShip from './game/enemyShip'
import Scene from './core/Scene'

const app = new PIXI.Application({
  width: 1280,
  height: 720,
  backgroundColor: 0x1099bb,
  view: document.querySelector('#scene'),
  resolution: window.devicePixelRatio || 1
}); 

const texture = PIXI.Texture.from('assets/bunny.png');
const texture2 = PIXI.Texture.from('assets/tank.png');

var scene = new Scene(app)
var secondShip = new EnemyShip(texture2)
var ship = new Ship(texture)
scene.add(ship)
scene.add(secondShip)

ship.transform.position.set(200, 200)
secondShip.transform.position.set(500, 500)
