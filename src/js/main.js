import * as PIXI from 'pixi.js'
import Engine from './core/engine'
import Vec2 from './core/vec2'
import GameObject from './core/gameobject'
import Ship from './game/ship'
import Scene from './core/Scene'

const app = new PIXI.Application({
  width: 720,
  height: 1280,
  backgroundColor: 0x1099bb,
  view: document.querySelector('#scene'),
  resolution: window.devicePixelRatio || 1
}); 

const texture = PIXI.Texture.from('assets/bunny.png');

var engine = new Engine()
engine.run()

var scene = new Scene(app)
var ship = new Ship(texture)
