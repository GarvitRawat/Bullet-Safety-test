var bullet, wall
var speed = 0
var weight = 0
var Damage = 0
var thickness = 0
quality = ""

function setup(){
  createCanvas(1600, 400)

  thickness = random(22, 83)
  weight = random(30, 52)
  speed = random(223, 321)

  wall = createSprite(1200, 200, thickness, height/2)
  bullet = createSprite(200, 200, 50, 10)
  bullet.shapeColor = "white"
  wall.shapeColor = "white"

  Damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

  bullet.velocityX = speed

}

function draw(){
  background(0)

  bullet.collide(wall)

  if (Damage > 10 ){
    wall.shapeColor = "red"
    quality = "bad"
    fill("red")
  }

  if (Damage < 10 ){
    wall.shapeColor = "green"
    quality = "good"
    fill("green")
  }

  textSize(32);
  text("Wall Quality is "+ quality, 800, 50)

  drawSprites()
}
