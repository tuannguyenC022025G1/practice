// Khởi tạo các biến
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = 800;
canvas.height = 500;
let score = 0;

// Tạo Ball
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    dx: 3,
    dy: -3,

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "gray";
        ctx.fill();
        ctx.closePath();
    },

    move() {
        this.x += this.dx;
        this.y += this.dy;

        // Xử lý va chạm với viền
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx *= -1;
        }
        if (this.y - this.radius < 0) {
            this.dy *= -1;
        }
    },

    reset() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 3;
        this.dx = 3;
        this.dy = -3;
    }
};

// Tạo Bar
const bar = {
    width: 100,
    height: 10,
    x: (canvas.width - 100) / 2,
    speed: 5,
    movingLeft: false,
    movingRight: false,

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, canvas.height - this.height - 10, this.width, this.height);
    },

    move() {
        if (this.movingLeft && this.x > 0) {
            this.x -= this.speed;
        }
        if (this.movingRight && this.x + this.width < canvas.width) {
            this.x += this.speed;
        }
    }
};

// gán phím
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        bar.movingLeft = true;
    }
    if (event.key === "ArrowRight") {
        bar.movingRight = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowLeft") {
        bar.movingLeft = false;
    }
    if (event.key === "ArrowRight") {
        bar.movingRight = false;
    }
});

// kiểm tra va chạm
function checkCollision() {
    if (
        ball.y + ball.radius >= canvas.height - bar.height - 10 &&
        ball.x >= bar.x &&
        ball.x <= bar.x + bar.width
    ) {
        ball.dy *= -1;
        score++;
    }
    if (ball.y + ball.radius >= canvas.height) { //bóng chạm viền dưới
        alert(`Game Over! Your score: ${score}. Press OK to restart.`);
        score = 0;
        ball.reset();
    }
}


// Vòng lặp game
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Vẽ khung
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // điểm số
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 10, 30);

    ball.draw();
    ball.move();
    bar.move();
    bar.draw();
    checkCollision();
    requestAnimationFrame(gameLoop);
}

gameLoop();
