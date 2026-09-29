mkdir -p premiumstore
cd premiumstore
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Aviator Ultra-Premium Working Game</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>
:root { --bg-color: #08090b; --panel-black: #0f1013; --safe-green: #28a745; --danger-red: #e02424; --warning-yellow: #f59e0b; }
* { margin: 0; padding: 0; box-sizing: border-box; font-family: sans-serif; }
html, body { width: 100%; height: 100%; background: var(--bg-color); color: #fff; overflow: hidden; }

/* Login Screen */
#loginScreenPanel {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: radial-gradient(circle at top center, #c80011 0%, #4a0000 100%);
    z-index: 9999999; display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.login-container { width: 90%; max-width: 360px; background: rgba(0,0,0,0.5); padding: 25px 20px; border-radius: 12px; border: 1px solid #ff4d4d; }
.login-title { font-size: 22px; font-weight: 900; margin-bottom: 20px; text-align: center; }
.input-group { display: flex; background: #330000; border: 1px solid #990000; border-radius: 6px; margin-bottom: 12px; overflow: hidden; }
.input-group input { flex: 1; background: transparent; border: none; color: #fff; padding: 12px; outline: none; }
.btn-login-main { width: 100%; background: #ffd700; color: #000; border: none; padding: 14px; border-radius: 8px; font-size: 15px; font-weight: bold; cursor: pointer; margin-top: 10px; }

/* Game UI */
.game-master-wrapper { display: none; flex-direction: column; height: 100vh; width: 100vw; background: #000; }
.navbar-header { height: 55px; background: var(--panel-black); display: flex; justify-content: space-between; align-items: center; padding: 0 15px; border-bottom: 1px solid #1c1e24; }
.wallet-box { background: #000; border: 1px solid #1c1e24; border-radius: 20px; padding: 6px 14px; font-weight: bold; color: var(--warning-yellow); display: flex; align-items: center; gap: 10px; font-size: 16px; }

.main-arena { display: flex; flex-direction: column; flex: 1; padding: 10px; gap: 10px; max-width: 800px; margin: 0 auto; width: 100%; }
.canvas-container-box { flex: 1; background: #111; border-radius: 12px; border: 2px solid #1c1e24; display: flex; justify-content: center; align-items: center; position: relative; overflow: hidden; }
.mult-counter-canvas { font-size: 80px; font-weight: 900; color: #fff; text-shadow: 0 5px 15px rgba(0,0,0,1); text-align: center; line-height: 1; z-index: 10; }
.plane-animation { position: absolute; font-size: 50px; color: #e02424; z-index: 5; transition: all 0.1s linear; }

.control-hud-bar { background: var(--panel-black); border-radius: 12px; border: 1px solid #1c1e24; padding: 15px; display: flex; gap: 15px; flex-direction: column; }
.stepper-input-container { display: flex; align-items: center; background: #000; border-radius: 8px; padding: 5px; border: 1px solid #333; justify-content: space-between; height: 50px; }
.stepper-input-container button { width: 40px; height: 100%; background: #222; border: none; color: #fff; font-weight: bold; cursor: pointer; border-radius: 4px; font-size: 20px; }
.stepper-input-container input { width: 100px; background: transparent; border: none; text-align: center; color: #fff; font-weight: bold; font-size: 20px; outline: none; }

.bet-action-btn { height: 60px; border: none; border-radius: 8px; font-weight: 900; color: #000; font-size: 20px; background: var(--safe-green); cursor: pointer; transition: 0.2s; box-shadow: 0 4px 10px rgba(40,167,69,0.4); }
</style>
</head>
<body>

<!-- 1. LOGIN SCREEN -->
<div id="loginScreenPanel">
    <div class="login-container">
        <h2 class="login-title">AVIATOR PRO MINT</h2>
        <div class="input-group">
            <span style="background:#4a0000; padding:12px; border-right:1px solid #990000;">+91</span>
            <input type="tel" placeholder="Enter Mobile Number" maxlength="10">
        </div>
        <button class="btn-login-main" id="mainLoginBtnNode">LOGIN & PLAY</button>
    </div>
</div>

<!-- 2. MAIN GAME INTERFACE -->
<div class="game-master-wrapper" id="gameUI">
    <div class="navbar-header">
        <div style="font-weight:900; color:#e02424; font-size:18px;">AVIATOR</div>
        <div class="wallet-box">
            <i class="fa fa-wallet"></i> 
            <span id="balanceDisplay">₹50.00</span>
        </div>
    </div>

    <div class="main-arena">
        <div class="canvas-container-box">
            <i class="fa fa-jet-fighter plane-animation" id="flyingPlane"></i>
            <div class="mult-counter-canvas" id="multCounter">1.00x</div>
        </div>

        <div class="control-hud-bar">
            <div class="stepper-input-container">
                <button onclick="changeBet(-10)">-</button>
                <input type="number" id="betAmount" value="10" readonly>
                <button onclick="changeBet(10)">+</button>
            </div>
            <button class="bet-action-btn" id="betBtn">BET</button>
        </div>
    </div>
</div>

<!-- 3. FULL GAME LOGIC (JAVASCRIPT) -->
<script>
    let balance = 50.00;
    let multiplier = 1.00;
    let isPlaying = false;
    let hasPlacedBet = false;
    let crashed = false;
    let gameTimer;
    let planeX = 0, planeY = 0;

    const betBtn = document.getElementById('betBtn');
    const betInput = document.getElementById('betAmount');
    const multCounter = document.getElementById('multCounter');
    const balDisplay = document.getElementById('balanceDisplay');
    const plane = document.getElementById('flyingPlane');

    document.getElementById('mainLoginBtnNode').addEventListener('click', () => {
        document.getElementById('loginScreenPanel').style.display = 'none';
        document.getElementById('gameUI').style.display = 'flex';
        setTimeout(startNewRound, 2000);
    });

    function changeBet(amount) {
        if(!isPlaying && !hasPlacedBet) {
            let current = parseInt(betInput.value);
            if(current + amount >= 10) betInput.value = current + amount;
        }
    }

    function updateBalance() {
        balDisplay.innerText = '₹' + balance.toFixed(2);
    }

    betBtn.addEventListener('click', () => {
        let betVal = parseFloat(betInput.value);
        
        if (!isPlaying && !hasPlacedBet) {
            if (balance >= betVal) {
                balance -= betVal;
                updateBalance();
                hasPlacedBet = true;
                betBtn.innerText = 'WAITING...';
                betBtn.style.background = '#f59e0b';
                betBtn.style.color = '#000';
            } else {
                alert("Low Balance!");
            }
        } 
        else if (isPlaying && hasPlacedBet && !crashed) {
            let winAmount = betVal * multiplier;
            balance += winAmount;
            updateBalance();
            hasPlacedBet = false;
            
            betBtn.innerText = 'CASHED OUT\n₹' + winAmount.toFixed(2);
            betBtn.style.background = '#16171d';
            betBtn.style.color = '#fff';
        }
    });

    function startNewRound() {
        multiplier = 1.00;
        crashed = false;
        isPlaying = true;
        planeX = -50; planeY = 50;
        
        multCounter.innerText = '1.00x';
        multCounter.style.color = '#fff';
        plane.style.transform = `translate(${planeX}px, ${planeY}px) rotate(-15deg)`;
        
        if (hasPlacedBet) {
            betBtn.innerText = 'CASHOUT';
            betBtn.style.background = '#e02424';
            betBtn.style.color = '#fff';
        } else {
            betBtn.innerText = 'BET (WAIT NEXT)';
            betBtn.style.background = '#16171d';
            betBtn.style.color = '#555';
        }

        let crashPoint = (Math.random() * 5 + 1.10).toFixed(2); 

        gameTimer = setInterval(() => {
            multiplier += 0.01;
            multCounter.innerText = multiplier.toFixed(2) + 'x';
            
            if(planeX < 150) planeX += 1.5;
            if(planeY > -100) planeY -= 1;
            plane.style.transform = `translate(${planeX}px, ${planeY}px) rotate(-15deg)`;

            if (multiplier >= crashPoint) {
                clearInterval(gameTimer);
                crashed = true;
                isPlaying = false;
                hasPlacedBet = false;
                
                multCounter.style.color = '#e02424';
                multCounter.innerText = 'FLEW AWAY\n' + multiplier.toFixed(2) + 'x';
                plane.style.transform = `translate(500px, -500px)`;
                
                betBtn.innerText = 'BET';
                betBtn.style.background = '#28a745';
                betBtn.style.color = '#000';
                
                setTimeout(startNewRound, 4000); 
            }
        }, 50);
    }
</script>
</body>
</html>
EOF
npx -y serve -s . -p ${PORT:-8080}
