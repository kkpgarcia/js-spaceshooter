import * as PIXI from 'pixi.js'
import Engine from './core/engine'
import Vec2 from './core/vec2'
//var Engine = require('./core/engine')
import NotificationCenter from './core/notification_center'

const app = new PIXI.Application({
  width: 720,
  height: 1280,
  backgroundColor: 0x1099bb,
  view: document.querySelector('#scene'),
  resolution: window.devicePixelRatio || 1
});

const texture = PIXI.Texture.from('assets/bunny.png');
const bunny = new PIXI.Sprite(texture);
bunny.anchor.set(0.5);
bunny.x = 160
bunny.y = 160
app.stage.addChild(bunny);

// const core = new Engine()
var callback = function (sender, args) {
  console.log(args)
}

NotificationCenter.addObserver(callback, 'TestNotification')
NotificationCenter.postNotification('TestNotification', null, 'First Hello World!')
NotificationCenter.removeObserver(callback, 'TestNotification')
NotificationCenter.postNotification('TestNotification', null, 'Second Hello World!')

app.ticker.add((delta) => {
  bunny.rotation -= 0.01 * delta;
  // core.update()
});