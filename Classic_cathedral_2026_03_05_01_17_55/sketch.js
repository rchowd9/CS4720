

//create a ball class
class ball 
{
  constructor(totalWidth, totalHeight)
  {
    this.radius = Math.random()* 20 + 10
    this.xPos = Math.random() * (totalWidth - this.radius * 2) + this.radius
    this.yPos = Math.random() * (totalHeight - this.radius * 2) + this.radius
    this.xVel = Math.random() * 8 - 4
    this.yVel = Math.random() * 8 - 4
  }
  
  update()
  {
    this.xPos += this.xVel
    this.yPos += this.yVel
    
    if (this.xPos + this.radius >= width || this.xPos - this.radius <= 0) 
    {
      this.xVel *= -1
    }
    
    if (this.yPos + this.radius >= height || this.yPos - this.radius <= 0) 
    {
      this.yVel *= -1
    }
  }
  
  printBall()
  {
    console.log("Position: " + this.xPos + "," + this.yPos)
    console.log("Velocity: " + this.xVel + "," + this.yVel)
    console.log("Radius: " + this.radius)
  }
  
  drawBall()
  {
    fill(100,100,255)
    stroke(255)
    circle(this.xPos, this.yPos, this.radius * 2)
  }
  
  checkCollision(extra)
  {
    let d = dist(this.xPos, this.yPos, extra.xPos, extra.yPos)
    if (d < this.radius + extra.radius)
    {
      let tempX = this.xVel
      let tempY = this.yVel
      this.xVel = extra.xVel
      this.yVel = extra.yVel
      extra.xVel = tempX
      extra.yVel = tempY
    }
  }
}
let ballArr = []

function setup() 
{
  createCanvas(400, 600);
  frameRate(60)
  for (let i = 0; i < 8; i++)
  {
    ballArr.push(new ball(width, height))
  }
}

function draw() 
{
  background(220);
  for (let i = 0; i < ballArr.length; i++)
  {
    for (let j = i + 1; j < ballArr.length; j++)
    {
      ballArr[i].checkCollision(ballArr[j])
    }
    ballArr[i].update()
    ballArr[i].drawBall()
    
    if (frameCount % 60 === 0 && i === 0)
    {
      ballArr[i].printBall()
    }
  }
  
}