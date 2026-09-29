mkdir -p premiumstore
cp IMG_20260523_231432.jpg premiumstore/ 2>/dev/null || true
cd premiumstore && cat > index.html <<'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="0">
<title>Aviator Ultra-Premium Casino Jet Console</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>
:root {
    --bg-color: #08090b;
    --panel-black: #0f1013;
    --card-surface: #17181d;
    --aviator-green: #24a148;
    --safe-green: #28a745;
    --warning-yellow: #f59e0b;
    --border-color: #1c1e24;
    --danger-red: #e02424;
}
* { margin: 0; padding: 0; box-sizing: border-box; font-family: sans-serif; -webkit-tap-highlight-color: transparent; }
*:focus, *:active { outline: none !important; }

/* FIX: Ensure body and html cover full exact viewport across all mobile browsers */
html, body { width: 100%; height: 100%; position: fixed; overflow: hidden; background: var(--bg-color); color: #fff; font-size: 13px; margin: 0; padding: 0; }

/* LOGIN SCREEN STYLES */
#loginScreenPanel {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: radial-gradient(circle at top center, #c80011 0%, #4a0000 100%);
    z-index: 9999999; display: flex; flex-direction: column; align-items: center; justify-content: center;
    overflow-y: auto; padding: 20px 0;
}
.login-badge-corner {
    position: absolute; top: 0px; left: 20px; background: #d31a1a; padding: 12px 10px;
    border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.4); border: 1px dashed rgba(255,255,255,0.4); border-top: none;
}
.login-container {
    width: 90%; max-width: 360px; z-index: 10; margin-left: auto; margin-right: 20px;
    background: rgba(120, 0, 0, 0.2); padding: 25px 20px; border-radius: 12px;
}
@media (max-width: 600px) {
    .login-container { margin: 0 auto; margin-top: 40px; }
}
.login-title { font-size: 22px; font-weight: 900; color: #fff; margin-bottom: 20px; text-align: center; }

/* ANIMATED RED PLANE STYLES */
.plane-hero-box {
    width: 100%; height: 120px; background: linear-gradient(180deg, rgba(139,0,0,0.15) 0%, rgba(0,0,0,0.3) 100%);
    border: 2px solid rgba(139, 0, 0, 0.4); border-radius: 12px; display: flex; justify-content: center; align-items: center;
    margin-bottom: 20px; box-shadow: inset 0 0 30px rgba(139,0,0,0.2), 0 5px 15px rgba(0,0,0,0.3); overflow: hidden; position: relative;
}

.jet-icon-single {
    font-size: 85px; color: #8B0000; background: -webkit-linear-gradient(#ff1a1a, #5e0a0a); -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; filter: drop-shadow(0px 8px 10px rgba(0,0,0,0.6)) drop-shadow(0px 0px 20px rgba(139, 0, 0, 0.8));
    animation: flyJetSingle 3s ease-in-out infinite;
}

@keyframes flyJetSingle {
    0% { transform: scale(1) translateY(5px); }
    50% { transform: scale(1.1) translateY(-10px) rotateY(10deg); filter: drop-shadow(0px 12px 15px rgba(0,0,0,0.5)) drop-shadow(0px 0px 20px rgba(139, 0, 0, 0.8)); }
    100% { transform: scale(1) translateY(5px); }
}

.input-group { display: flex; background: #660000; border: 1px solid #990000; border-radius: 6px; margin-bottom: 12px; overflow: hidden; }
.input-group input { flex: 1; background: transparent; border: none; color: #fff; padding: 12px; outline: none; font-size: 13px; }
.input-group input::placeholder { color: #ff9999; }
.country-code { background: #4a0000; padding: 12px 10px; color: #ff9999; border-right: 1px solid #990000; font-size: 13px; display: flex; align-items: center; gap: 6px; }
.btn-login-main {
    position: relative; width: 100%; background: #ffd700; color: #000; border: none; padding: 14px;
    border-radius: 8px; font-size: 15px; font-weight: bold; cursor: pointer; margin-bottom: 5px; transition: all 0.3s ease;
}
.get-50-tag {
    position: absolute; top: -10px; left: -5px; background: #ff4d00; color: #fff; font-size: 10px;
    padding: 2px 8px; border-radius: 4px; border: 1px solid #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.3);
}

.login-footer { position: relative; margin-top: 25px; display: flex; flex-wrap: wrap; gap: 8px; font-size: 10px; font-weight: bold; align-items: center; width: 95%; max-width: 400px; justify-content: center; }
.sec-badge { background: rgba(0,0,0,0.4); padding: 5px 8px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1); font-size: 9px; display: flex; align-items: center; gap: 4px; letter-spacing: 0.5px; }

#appLauncherSplashPanel { display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: #050608; z-index: 99999; flex-direction: column; justify-content: center; align-items: center; }
.app-icon-wrapper { width: 90px; height: 90px; background: var(--danger-red); border-radius: 24px; display: flex; justify-content: center; align-items: center; cursor: pointer; box-shadow: 0 0 45px rgba(224, 36, 36, 0.6); animation: neonPulseHover 1.5s infinite; }
@keyframes neonPulseHover { 0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(224, 36, 36, 0.4); } 50% { transform: scale(1.05); box-shadow: 0 0 50px rgba(224, 36, 36, 0.7); } }

.game-master-wrapper { display: none; flex-direction: column; height: 100%; background: #000; width: 100%; transition: all 0.3s ease; }
.navbar-header { height: 50px; width: 100%; box-sizing: border-box; background: var(--panel-black); display: flex; justify-content: space-between; align-items: center; padding: 0 15px; border-bottom: 1px solid var(--border-color); flex-shrink: 0; }
.nav-left-section { display: flex; align-items: center; gap: 10px; }
.nav-actions { display: flex; align-items: center; gap: 10px; }
.audio-ctrl-toggle { font-size: 16px; color: #9ca3af; cursor: pointer; padding: 6px; }

/* UNIQUE PROFILE STYLES */
.top-corner-profile { display: flex; align-items: center; gap: 8px; background: var(--card-surface); padding: 4px 12px; border-radius: 20px; border: 1px solid var(--border-color); cursor: pointer; transition: background 0.2s; }
.top-corner-profile:hover { background: #23252d; }
.avatar-frame { width: 26px; height: 26px; border-radius: 50%; background: #2f313a; display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid rgba(255,255,255,0.2); flex-shrink: 0; }
.avatar-frame img { width: 100%; height: 100%; object-fit: cover; }
.profile-meta-text { display: flex; flex-direction: column; line-height: 1.2; flex-shrink: 0; min-width: 50px; }
.lbl-username { font-size: 11px; font-weight: bold; color: #fff; white-space: nowrap; max-width: 65px; overflow: hidden; text-overflow: ellipsis; display: block; }
.lbl-userid { font-size: 9px; color: #9ca3af; white-space: nowrap; display: block; }

/* WALLET & ADD CASH BUTTON */
.wallet-box { background: #000; border: 1px solid var(--border-color); border-radius: 20px; padding: 4px 6px 4px 14px; font-weight: bold; color: var(--warning-yellow); display: flex; align-items: center; gap: 10px; }

.btn-deposit-top { 
    background: linear-gradient(45deg, #ffd700, #ff8c00, #ffd700); 
    background-size: 200% 200%; 
    color: #000; border: none; padding: 6px 12px; border-radius: 15px; 
    font-weight: 900; font-size: 11px; cursor: pointer; text-transform: uppercase; 
    box-shadow: 0 0 12px rgba(255, 215, 0, 0.7); 
    animation: goldenShine 3s ease infinite; 
    text-shadow: 1px 1px 1px rgba(255,255,255,0.4);
}
@keyframes goldenShine { 0% { background-position: 0% 50%; box-shadow: 0 0 10px rgba(255, 215, 0, 0.5); } 50% { background-position: 100% 50%; box-shadow: 0 0 20px rgba(255, 215, 0, 1); } 100% { background-position: 0% 50%; box-shadow: 0 0 10px rgba(255, 215, 0, 0.5); } }

/* REFER & EARN BUTTON */
.refer-earn-btn {
    background: linear-gradient(45deg, #0052d4, #4364f7, #6fb1fc);
    background-size: 200% 200%;
    color: #fff; border: 1px solid #6fb1fc;
    padding: 4px 10px; border-radius: 15px;
    font-weight: 900; font-size: 9px; cursor: pointer; text-transform: uppercase;
    box-shadow: 0 0 12px rgba(67, 100, 247, 0.7);
    animation: blueShine 3s ease infinite;
    display: flex; align-items: center; gap: 6px;
}
@keyframes blueShine { 0% { background-position: 0% 50%; box-shadow: 0 0 10px rgba(67, 100, 247, 0.5); } 50% { background-position: 100% 50%; box-shadow: 0 0 20px rgba(67, 100, 247, 1); } 100% { background-position: 0% 50%; box-shadow: 0 0 10px rgba(67, 100, 247, 0.5); } }

/* WITHDRAW BUTTON STYLES */
.btn-withdraw-top { 
    background: linear-gradient(45deg, #e02424, #ff4d4d, #e02424); 
    background-size: 200% 200%; 
    color: #fff; border: none; padding: 6px 12px; border-radius: 15px; 
    font-weight: 900; font-size: 11px; cursor: pointer; text-transform: uppercase; 
    box-shadow: 0 0 12px rgba(224, 36, 36, 0.7); 
    animation: redShine 3s ease infinite; 
}
@keyframes redShine { 0% { background-position: 0% 50%; box-shadow: 0 0 10px rgba(224, 36, 36, 0.5); } 50% { background-position: 100% 50%; box-shadow: 0 0 20px rgba(224, 36, 36, 1); } 100% { background-position: 0% 50%; box-shadow: 0 0 10px rgba(224, 36, 36, 0.5); } }

.withdraw-input-box { background: rgba(0,0,0,0.4); border: 1px solid #5e0a13; padding: 10px; border-radius: 6px; margin-bottom: 10px; }
.withdraw-input-box input { width: 100%; background: transparent; border: none; color: #fff; font-size: 14px; outline: none; font-weight: bold; }
.withdraw-save-btn { background: var(--safe-green); color: #000; border: none; padding: 5px 10px; border-radius: 4px; font-weight: bold; font-size: 11px; cursor: pointer; margin-top: 5px; }

/* Withdrawal Rules UI Styling */
.withdraw-rules-container { background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 6px; padding: 12px; margin-bottom: 12px; font-size: 11px; color: #cbd5e1; line-height: 1.5; }
.withdraw-rules-container strong { color: var(--warning-yellow); display: block; margin-bottom: 6px; font-size: 12px; text-align: center; }
.rule-item { display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 3px 0; font-weight: bold; }
.rule-item:last-child { border-bottom: none; }

/* MOBILE RESPONSIVE FIX FOR NAVBAR */
@media (max-width: 650px) {
    .navbar-header { padding: 0 4px; height: 45px; }
    .top-corner-profile { padding: 2px 6px; gap: 4px; }
    .nav-actions { gap: 2px; }
    .wallet-box { padding: 2px 4px 2px 6px; font-size: 10px; gap: 4px; }
    .btn-deposit-top, .btn-withdraw-top { padding: 4px 6px; font-size: 8px; }
    .lbl-username { font-size: 10px; }
    .lbl-userid { font-size: 8px; }
    .refer-earn-btn { padding: 4px 6px; font-size: 8px; gap: 4px; }
    .avatar-frame { width: 22px; height: 22px; }
    .admin-btn-node { padding: 4px 6px !important; font-size: 8px !important; }
}

.workspace-grid { flex: 1; display: grid; grid-template-columns: 280px 1fr; gap: 4px; padding: 4px; overflow: hidden; background: #060709; min-height: 0; }
@media (max-width: 900px) { .workspace-grid { grid-template-columns: 1fr; } .sidebar-panel { display: none !important; } }

.sidebar-panel { background: var(--panel-black); border-radius: 8px; border: 1px solid var(--border-color); display: flex; flex-direction: column; overflow: hidden; }
.feed-tabs { display: flex; background: #000; padding: 4px; gap: 4px; }
.feed-tab { flex: 1; text-align: center; padding: 6px; border-radius: 4px; color: #9ca3af; font-size: 11px; cursor: pointer; font-weight: bold; }
.feed-tab.active { background: var(--card-surface); color: #fff; }
.feed-header-info { padding: 8px 12px; display: flex; justify-content: space-between; color: #9ca3af; font-size: 11px; font-weight: bold; border-bottom: 1px solid var(--border-color); }
.feed-scroll-rows { flex: 1; overflow-y: auto; padding: 2px; display: flex; flex-direction: column; gap: 4px; min-height: 0; }
.feed-scroll-rows::-webkit-scrollbar { width: 4px; }
.feed-scroll-rows::-webkit-scrollbar-thumb { background: #374151; border-radius: 4px; }

.feed-row { display: flex; align-items: center; justify-content: space-between; padding: 6px 10px; background: rgba(255,255,255,0.01); border-radius: 4px; font-size: 12px; min-height: 32px; flex-shrink: 0; }
.feed-row.cashed-out { background: rgba(40, 167, 72, 0.15); border: 1px solid rgba(40, 167, 72, 0.25); }
.user-profile-meta { display: flex; align-items: center; gap: 6px; flex: 2; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.user-avatar-icon { width: 18px; height: 18px; border-radius: 5px; background: #1a1c23; display: flex; justify-content: center; align-items: center; font-size: 10px; flex-shrink: 0; }
.badge-mult { padding: 2px 6px; border-radius: 12px; font-size: 10px; font-weight: bold; background: #000; color: #9ca3af; }
.feed-row.cashed-out .badge-mult { background: var(--safe-green); color: #000; }

.main-arena { display: flex; flex-direction: column; gap: 4px; overflow: hidden; min-height: 0; }
.history-strip { background: var(--panel-black); padding: 6px 12px; border-radius: 8px; display: flex; gap: 8px; overflow-x: auto; align-items: center; border: 1px solid var(--border-color); flex-shrink: 0; }
.history-strip::-webkit-scrollbar { display: none; }
.hist-pill { font-size: 11px; font-weight: bold; padding: 2px 9px; border-radius: 10px; min-width: 54px; text-align: center; }
.pill-under-two { background: rgba(224, 36, 36, 0.15); color: #f87171; border: 1px solid rgba(224, 36, 36, 0.3); }
.pill-above-two { background: rgba(40, 167, 72, 0.2); color: #34d399; border: 1px solid rgba(40, 167, 72, 0.4); }

.canvas-container-box { flex: 1; background: #000000; border-radius: 8px; border: 1px solid var(--border-color); position: relative; overflow: hidden; min-height: 160px; }
.realtime-canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; display: block; }
.canvas-hud-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; z-index: 5; pointer-events: none; }
.mult-counter-canvas { font-size: 72px; font-weight: 900; text-align: center; color: #ffffff; text-shadow: 0 4px 15px rgba(0,0,0,0.85); transition: transform 0.05s ease; }

.control-hud-bar { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; flex-shrink: 0; }
@media (max-width: 600px) { .control-hud-bar { grid-template-columns: 1fr; } }
.hud-bet-box { background: var(--panel-black); border: 1px solid var(--border-color); border-radius: 8px; padding: 10px; display: flex; flex-direction: column; justify-content: space-between; gap: 6px; }
.inputs-action-row { display: flex; gap: 8px; flex: 1; align-items: center; }
.stepper-input-container { display: flex; align-items: center; background: #000; border-radius: 20px; padding: 4px 10px; border: 1px solid var(--border-color); width: 120px; height: 38px; justify-content: space-between; }
.stepper-input-container button { width: 22px; height: 22px; border-radius: 50%; background: var(--card-surface); border: 1px solid var(--border-color); color: #fff; font-weight: bold; cursor: pointer; }
.stepper-input-container input { width: 50px; background: transparent; border: none; text-align: center; color: #fff; font-weight: bold; font-size: 14px; outline: none; }

.bet-action-btn { flex: 1; height: 44px; border: none; border-radius: 8px; font-weight: bold; color: #000; text-transform: uppercase; font-size: 15px; background: var(--safe-green); cursor: pointer; display: flex; flex-direction: column; justify-content: center; align-items: center; line-height: 1.2; }
.action-waiting { background: var(--warning-yellow) !important; color: #000 !important; }
.action-cashout { background: var(--danger-red) !important; color: #fff !important; }
.action-locked { background: #16171d !important; color: #4b5563 !important; cursor: not-allowed !important; }

.automation-toggles-row { display: flex; gap: 15px; padding: 2px 4px; align-items: center; }
.toggle-item { display: flex; align-items: center; gap: 6px; font-size: 11px; color: #9ca3af; font-weight: bold; cursor: pointer; }
.toggle-item input[type="checkbox"] { width: 15px; height: 15px; accent-color: var(--safe-green); cursor: pointer; }
.auto-cash-val { width: 45px; background: #000; border: 1px solid var(--border-color); color: #fff; text-align: center; border-radius: 4px; font-size: 11px; font-weight: bold; padding: 2px; outline: none; }

.live-bets-bottom-panel { background: var(--panel-black); border: 1px solid var(--border-color); border-radius: 8px; padding: 10px; display: flex; flex-direction: column; gap: 6px; flex-shrink: 0; height: auto; }
#bottomLiveBetsList { max-height: 105px; overflow-y: auto; }
.bottom-bets-header { display: flex; color: #9ca3af; font-size: 11px; font-weight: bold; border-bottom: 1px solid var(--border-color); padding-bottom: 6px; }

/* CASHOUT RED DESIGN DEPOSIT MODAL */
.deposit-modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.9); z-index: 100000; justify-content: center; align-items: center; backdrop-filter: blur(5px); }
.deposit-modal-box { background: linear-gradient(135deg, #4d050d 0%, #200206 100%); border: 2px solid #8f1322; border-radius: 16px; width: 95%; max-width: 720px; padding: 15px; box-shadow: 0 0 50px rgba(143,19,34,0.5); display: flex; flex-direction: column; position: relative; max-height: 95vh; overflow-y: auto; }
.deposit-top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-shrink: 0; }
.support-tag { display: flex; align-items: center; gap: 6px; font-size: 11px; color: #ffb3b9; background: rgba(0,0,0,0.3); padding: 4px 8px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05); cursor: pointer; }
.modal-main-title { font-size: 18px; font-weight: 900; color: #fff; letter-spacing: 1px; text-transform: uppercase; text-align: center; flex: 1; }
.modal-close-icon { color: #ff4d5a; font-size: 24px; cursor: pointer; }

.network-notice-bar { background: rgba(0,0,0,0.4); border-radius: 4px; padding: 6px 12px; font-size: 11px; color: #ff9da6; text-align: center; margin-bottom: 12px; border-left: 3px solid var(--warning-yellow); }

.deposit-dashboard-layout { display: grid; grid-template-columns: 140px 1fr; gap: 12px; }
@media(max-width: 600px) { .deposit-dashboard-layout { grid-template-columns: 1fr; } }

.gateways-sidebar { display: flex; flex-direction: column; gap: 6px; padding-top: 10px; padding-left: 5px; }
@media(max-width: 600px) { .gateways-sidebar { flex-direction: row !important; overflow-x: auto; } }

.gateway-pill-btn { position: relative; background: linear-gradient(90deg, #ff9d02 0%, #ff6b00 100%); color: #000; border: 1px solid #ffbe4d; font-weight: bold; padding: 10px; border-radius: 6px; text-align: center; cursor: pointer; font-size: 12px; box-shadow: 0 0 15px rgba(255,157,2,0.4); }
.hot-tag { position: absolute; top: -10px; left: -2px; background: linear-gradient(45deg, #ff0000, #ff5f00); color: #fff; font-size: 8px; padding: 1px 4px; border-radius: 4px; font-weight: bold; border: 1px solid #fff; z-index: 10; }

.coins-grid-panel { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; max-height: 230px; overflow-y: auto; padding-right: 4px; }
@media(max-width: 500px) { .coins-grid-panel { grid-template-columns: repeat(2, 1fr); } }

.coin-pack-card { background: #1c0205; border: 1px solid #5e0a13; border-radius: 8px; padding: 12px 6px; text-align: center; position: relative; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; }
.coin-pack-card.selected { border: 2px solid #ffbc00; background: #36040a; box-shadow: 0 0 15px rgba(255,188,0,0.3); }
.coin-pack-card .fallback-coin-icon { font-size: 24px; color: #ffcc00; text-shadow: 0 0 10px rgba(255,204,0,0.5); }
.coin-amt-label { font-size: 16px; font-weight: bold; color: #fff; }
.extra-bonus-badge { position: absolute; top: -6px; left: -4px; background: linear-gradient(135deg, #ff003c 0%, #9e001b 100%); color: #fff; font-size: 8px; font-weight: bold; padding: 2px 5px; border-radius: 4px; border: 1px solid #ff4d73; }

.deposit-summary-footer { background: rgba(0,0,0,0.4); border-radius: 8px; padding: 10px; margin-top: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; border: 1px solid rgba(255,255,255,0.05); }
.summary-math-flex { display: flex; gap: 15px; font-size: 12px; color: #ffb3b9; }
.summary-math-flex span { color: #fff; font-weight: bold; }
.total-get-highlight { font-size: 14px; color: var(--warning-yellow) !important; font-weight: 900 !important; }

.action-trigger-add-cash { background: linear-gradient(180deg, #ffbc00 0%, #d48800 100%); color: #000; border: none; padding: 10px 24px; border-radius: 6px; font-weight: 900; font-size: 14px; text-transform: uppercase; cursor: pointer; box-shadow: 0 4px 15px rgba(212,136,0,0.4); }

/* SCREENSHOT VERIFICATION SCREEN MODIFIED FOR FIXES */
.screenshot-upload-overlay { 
    display: none; 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    background: #200206; 
    border-radius: 14px; 
    padding: 20px 20px 80px 20px; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: center; 
    z-index: 10; 
    overflow-y: auto; 
    box-sizing: border-box;
}
.admin-upi-box { background: #000; padding: 10px; border-radius: 6px; width: 100%; max-width: 320px; text-align: center; border: 1px solid #5e0a13; margin-bottom: 12px; flex-shrink: 0; }
.upi-string-node { font-size: 16px; font-weight: bold; color: #ffbc00; margin: 4px 0; }
.file-dropzone { border: 2px dashed #ffbc00; background: rgba(0,0,0,0.3); border-radius: 8px; width: 100%; max-width: 320px; padding: 15px; text-align: center; position: relative; cursor: pointer; color: #ffb3b9; margin-bottom: 15px; flex-shrink: 0; }
.file-dropzone input[type="file"] { position: absolute; top:0; left:0; width:100%; height:100%; opacity:0; cursor:pointer; }

/* DYNAMIC CUSTOM SUCCESS/ERROR POPUP MODAL WITH BEST ANIMATION */
.custom-alert-overlay {
    display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0, 0, 0, 0.85); justify-content: center; align-items: center;
    z-index: 99999999; backdrop-filter: blur(5px);
}
.custom-alert-box {
    background: var(--card-surface); border: 2px solid var(--safe-green); border-radius: 16px;
    padding: 25px; width: 90%; max-width: 350px; text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.7); animation: popIn 0.3s ease;
}
@keyframes popIn { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
@keyframes shakeError {
    0% { transform: scale(1) translateX(0); }
    20% { transform: scale(1) translateX(-10px); }
    40% { transform: scale(1) translateX(10px); }
    60% { transform: scale(1) translateX(-10px); }
    80% { transform: scale(1) translateX(10px); }
    100% { transform: scale(1) translateX(0); }
}
.error-shake { animation: shakeError 0.4s ease-in-out !important; }
.custom-alert-icon { font-size: 50px; color: var(--safe-green); margin-bottom: 15px; }
.custom-alert-title { font-size: 18px; font-weight: 900; color: #fff; margin-bottom: 12px; text-transform: uppercase; }
.custom-alert-text { color: #cbd5e1; font-size: 12px; line-height: 1.6; margin-bottom: 20px; font-weight: bold; }
.custom-alert-btn {
    background: var(--safe-green); color: #000; border: none; padding: 12px; width: 100%;
    border-radius: 8px; font-weight: 900; font-size: 14px; cursor: pointer; text-transform: uppercase;
    box-shadow: 0 4px 15px rgba(40,167,69,0.4);
}

/* CLOUDFLARE PUBLIC LINK PERFORMANCE PATCH */
html,body{
overscroll-behavior:none;
touch-action:manipulation;
}
canvas{
image-rendering:auto;
transform:translateZ(0);
backface-visibility:hidden;
will-change:transform;
}
.canvas-container-box,
.realtime-canvas{
contain:layout paint size;
}

</style>
</head>
<body>

<div id="loginScreenPanel">
    <div class="login-badge-corner">
        <div style="font-size: 18px; font-weight: 900; color: #fff;">2025</div>
        <div style="font-size: 10px; font-weight: bold; color: #ffd700; line-height: 1.2; margin: 2px 0;">INDIA'S BEST<br>BOARD GAME</div>
        <div style="color: #ffd700; font-size: 8px; margin-top: 3px;">
            <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
        </div>
    </div>
    
    <div style="position: absolute; top: 25px; left: 110px; font-size: 18px; font-weight: 900; color: #ffffff; letter-spacing: 1px; z-index: 10; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
        AVIATOR PRO MINT
    </div>

    <div class="login-container">
        <h2 class="login-title">Aviator Login Account</h2>
        
        <div class="plane-hero-box">
            <i class="fa fa-jet-fighter jet-icon-single"></i>
        </div>
        
        <div class="input-group">
            <div class="country-code"><i class="fa fa-mobile-screen"></i> +91</div>
            <input type="tel" id="loginPhoneInput" placeholder="Input phone number here" maxlength="10" autocomplete="off" spellcheck="false">
        </div>
        
        <div class="input-group">
            <input type="text" id="loginCaptchaInput" placeholder="Enter Captcha Code" maxlength="4" autocomplete="off" spellcheck="false">
            <div id="captchaCodeBox" onclick="generateCaptchaCode()" style="background: #4a0000; color: #ffd700; padding: 12px; font-weight: bold; font-size: 16px; letter-spacing: 3px; cursor: pointer; user-select: none; display: flex; align-items: center; justify-content: center; min-width: 90px; border-left: 1px solid #990000;">4826</div>
        </div>
        
        <button class="btn-login-main" id="mainLoginBtnNode" onclick="validateCaptchaAndLogin()">
            <span class="get-50-tag">Get ₹50</span>
            Phone Number Login
        </button>
    </div>

    <div class="login-footer">
        <span class="sec-badge" style="color: #fff; border-color: #ff4d4d; background: #cc0000;">18+</span>
        <span class="sec-badge" style="color: #ffd700;"><i class="fa fa-check-square"></i> RNG CERTIFIED</span>
        <span class="sec-badge" style="color: #00cc00;"><i class="fa fa-shield-halved"></i> 100% SECURE</span>
        <span class="sec-badge" style="color: #00e6e6;"><i class="fa fa-credit-card"></i> 100% SAFE PAYMENT</span>
        <span class="sec-badge" style="color: #ff99cc;"><i class="fa fa-headset"></i> 24H SUPPORT</span>
    </div>
</div>

<div id="appLauncherSplashPanel">
    <div class="app-icon-wrapper" onclick="triggerClientBootstrapper()">
        <i class="fa fa-jet-fighter" style="font-size:38px; color:#000;"></i>
    </div>
    <div style="margin-top:16px; font-weight:bold; letter-spacing:3px; font-size:11px; color:var(--danger-red);">LOADING AVIATOR CASINO REALM</div>
</div>

<div class="game-master-wrapper" id="masterAppContainer">
    <div class="navbar-header">
        
        <div class="nav-left-section">
            <div class="top-corner-profile" onclick="openProfileEditModal()">
                <div class="avatar-frame">
                    <img id="userProfileHeaderLogo" style="display:none;" src="">
                    <i id="userProfileFallbackIcon" class="fa fa-user" style="font-size:12px; color:#fff;"></i>
                </div>
                <div class="profile-meta-text">
                    <span id="userProfileHeaderName" class="lbl-username">Player</span>
                    <span id="userProfileHeaderId" class="lbl-userid">ID-00000000</span>
                </div>
                <input type="file" id="profilePicHiddenInput" accept="image/*" style="display:none;" onchange="uploadProfilePicFromGallery(this)">
            </div>

            <div onclick="openReferEarnModal()" class="refer-earn-btn">
                <i class="fa fa-gift"></i> <span>Refer & earn ₹300</span>
            </div>
        </div>

        <div class="nav-actions">
            <div class="wallet-box">
                ₹ <span id="walletCoinsDynamic">50.00</span>
                <div style="display:flex; gap: 4px;">
                    <button class="btn-withdraw-top" onclick="openWithdrawModal()">WITHDRAW</button>
                    <button class="btn-deposit-top" onclick="openDepositDashboardModal()">ADD CASH</button>
                </div>
            </div>
        </div>
    </div>

    <div class="workspace-grid">
        <div class="sidebar-panel">
            <div class="feed-tabs">
                <div class="feed-tab active">All Bets</div>
                <div class="feed-tab">My Bets</div>
            </div>
            <div class="feed-header-info">
                <div>User</div><div>Bet</div><div>Cashout</div>
            </div>
            <div class="feed-scroll-rows" id="sidebarLiveBetsList"></div>
        </div>

        <div class="main-arena">
            <div class="history-strip" id="historyRibbonNodeTape"></div>
            
            <div class="canvas-container-box" id="arenaBoxContainer">
                <canvas id="aviatorCanvas" class="realtime-canvas"></canvas>
                <div class="canvas-hud-overlay">
                    <div class="mult-counter-canvas" id="canvasTextDisplay">1.00x</div>
                </div>
            </div>

            <div class="control-hud-bar">
                <div class="hud-bet-box" id="panel_hud_1">
                    <div class="inputs-action-row">
                        <div class="stepper-input-container">
                            <button onclick="modifyInputBetValue(1, -10)">-</button>
                            <input type="number" id="stakeAmountField1" value="10">
                            <button onclick="modifyInputBetValue(1, 10)">+</button>
                        </div>
                        <button class="bet-action-btn" id="btnBetActionTrigger1" onclick="submitClientBetPlacement(1)">
                            <div>BET</div><div style="font-size:11px; font-weight:normal; opacity:0.85;">₹10.00</div>
                        </button>
                    </div>
                    <div class="automation-toggles-row">
                        <label class="toggle-item"><input type="checkbox" id="autoBetToggleState1"> Auto Bet</label>
                        <label class="toggle-item"><input type="checkbox" id="autoCashToggleState1"> Auto Cash out <input type="number" id="autoCashOutVal1" class="auto-cash-val" value="1.20" step="0.05"></label>
                    </div>
                </div>

                <div class="hud-bet-box" id="panel_hud_2">
                    <div class="inputs-action-row">
                        <div class="stepper-input-container">
                            <button onclick="modifyInputBetValue(2, -10)">-</button>
                            <input type="number" id="stakeAmountField2" value="10">
                            <button onclick="modifyInputBetValue(2, 10)">+</button>
                        </div>
                        <button class="bet-action-btn" id="btnBetActionTrigger2" onclick="submitClientBetPlacement(2)">
                            <div>BET</div><div style="font-size:11px; font-weight:normal; opacity:0.85;">₹10.00</div>
                        </button>
                    </div>
                    <div class="automation-toggles-row">
                        <label class="toggle-item"><input type="checkbox" id="autoBetToggleState2"> Auto Bet</label>
                        <label class="toggle-item"><input type="checkbox" id="autoCashToggleState2"> Auto Cash out <input type="number" id="autoCashOutVal2" class="auto-cash-val" value="1.20" step="0.05"></label>
                    </div>
                </div>
            </div>

            <div class="live-bets-bottom-panel">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                    <div style="font-weight:bold; font-size:12px; color:var(--safe-green);"><i class="fa fa-users"></i> LIVE PLAYERS CASHOUT FEED</div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <button id="graphicsMenuBtnNode" class="admin-btn-node" onclick="openGraphicsModal()" style="background: #17181d; color: #6fb1fc; border: 1px solid var(--border-color); padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 10px; cursor: pointer; text-transform: uppercase;">Graphics</button>
                        <button id="adminMenuBtnNode" class="admin-btn-node" onclick="openAdminPanelPrompt()" style="display: none; background: #17181d; color: #ff4d5a; border: 1px solid var(--border-color); padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 10px; cursor: pointer; text-transform: uppercase;">Admin</button>
                        <div class="audio-ctrl-toggle" id="audioToggleBtnNode" onclick="toggleAudioMuteState()" style="padding: 2px 8px; background: #17181d; border-radius: 4px; border: 1px solid var(--border-color); color: #9ca3af; font-size: 14px;"><i class="fa fa-volume-high"></i></div>
                    </div>
                </div>
                <div class="bottom-bets-header">
                    <div style="flex:2">User</div>
                    <div style="flex:1; text-align:center;">Bet Amount</div>
                    <div style="flex:1; text-align:center;">Cashout At</div>
                    <div style="flex:1; text-align:right;">Total Winnings</div>
                </div>
                <div class="feed-scroll-rows" id="bottomLiveBetsList"></div>
            </div>

        </div>
    </div>
</div>

<div class="deposit-modal-overlay" id="graphicsModalContainer" style="z-index: 1000002;">
    <div class="deposit-modal-box" style="max-width: 320px; text-align: center;">
        <div class="deposit-top-bar">
            <div class="modal-main-title" style="color: #6fb1fc;">GRAPHICS SETTINGS</div>
            <div class="modal-close-icon" onclick="closeGraphicsModal()">&times;</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px; padding: 10px 5px;">
            <button class="action-trigger-add-cash" id="btnGraphVeryLow" style="background: #374151; color: #fff; font-size: 11px; padding: 12px;" onclick="setGraphicsQuality('verylow')">VERY LOW QUALITY<br><span style="font-size: 9px; font-weight: normal;">(Super Smooth for 2GB RAM)</span></button>
            <button class="action-trigger-add-cash" id="btnGraphLow" style="background: #374151; color: #fff; font-size: 11px; padding: 12px;" onclick="setGraphicsQuality('low')">LOW QUALITY<br><span style="font-size: 9px; font-weight: normal;">(Smooth for 4GB RAM or less)</span></button>
            <button class="action-trigger-add-cash" id="btnGraphMedium" style="background: #374151; color: #fff; font-size: 11px; padding: 12px;" onclick="setGraphicsQuality('medium')">MEDIUM QUALITY<br><span style="font-size: 9px; font-weight: normal;">(Smooth for 6GB RAM)</span></button>
            <button class="action-trigger-add-cash" id="btnGraphHigh" style="background: #374151; color: #fff; font-size: 11px; padding: 12px;" onclick="setGraphicsQuality('high')">HIGH QUALITY<br><span style="font-size: 9px; font-weight: normal;">(Smooth for 8GB+ RAM)</span></button>
            <button class="action-trigger-add-cash" style="background: linear-gradient(45deg, #0052d4, #4364f7); color: #fff; font-size: 11px; padding: 12px; margin-top: 5px; border: 1px solid #6fb1fc;" onclick="autoFitScreen()"><i class="fa fa-expand"></i> AUTO FIT SCREEN</button>
        </div>
    </div>
</div>

<div class="deposit-modal-overlay" id="profileEditModalContainer">
    <div class="deposit-modal-box" style="max-width: 320px;">
        <div class="deposit-top-bar">
            <div class="modal-main-title">EDIT PROFILE</div>
            <div class="modal-close-icon" onclick="closeProfileEditModal()">&times;</div>
        </div>
        <div style="padding: 15px 5px; display: flex; flex-direction: column; gap: 15px; align-items: center;">
            <div class="avatar-frame" style="width: 70px; height: 70px; cursor: pointer; border: 2px solid var(--warning-yellow);" onclick="document.getElementById('profilePicHiddenInput').click()">
                <img id="editProfilePreview" style="display:none; width:100%; height:100%; object-fit:cover;" src="">
                <i id="editProfileFallback" class="fa fa-user" style="font-size:35px; color:#fff;"></i>
            </div>
            <div style="font-size: 10px; color: #ffb3b9; margin-top:-8px;">Tap icon to change picture</div>
            
            <div style="background: rgba(0,0,0,0.4); border: 1px solid #5e0a13; padding: 8px 15px; border-radius: 6px; text-align: center; width: 100%;">
                <span style="color: #ffb3b9; font-size: 12px; font-weight: bold;">User ID: </span>
                <span id="modalDisplayUserId" style="color: var(--warning-yellow); font-size: 15px; font-weight: 900; letter-spacing: 1px;">ID-00000000</span>
            </div>

            <div style="width: 100%;">
                <label style="color: #ffb3b9; font-size: 12px; font-weight: bold;">Player Name (Max 8 Chars):</label>
                <input type="text" id="editPlayerNameInput" placeholder="Enter Name" maxlength="8" style="width: 100%; background: #000; border: 1px solid #5e0a13; color: #fff; padding: 10px; border-radius: 6px; outline: none; font-weight: bold; text-align: center; margin-top: 5px;">
            </div>
            <button class="action-trigger-add-cash" onclick="saveProfileDetails()" style="width: 100%;">SAVE PROFILE</button>
        </div>
    </div>
</div>

<div class="deposit-modal-overlay" id="referEarnModalContainer" style="z-index: 1000000;">
    <div class="deposit-modal-box" style="max-width: 350px;">
        <div class="deposit-top-bar">
            <div class="modal-main-title" style="color: #6fb1fc;">REFER & EARN ₹300</div>
            <div class="modal-close-icon" onclick="closeReferEarnModal()">&times;</div>
        </div>
        <div style="padding: 15px 5px; text-align: center; color: #fff;">
            <div style="font-size: 40px; color: #6fb1fc; margin-bottom: 15px;"><i class="fa fa-gift"></i></div>
            <p style="font-size: 13px; color: #cbd5e1; margin-bottom: 15px; font-weight: bold; line-height: 1.6;">
                Share your referral link and earn up to <span style="color: var(--warning-yellow);">₹300</span> per friend!
            </p>
            <div style="background: rgba(0,0,0,0.4); border: 1px solid #1c1e24; border-radius: 8px; padding: 12px; text-align: left; margin-bottom: 15px;">
                <div style="color: var(--safe-green); font-size: 12px; font-weight: bold; margin-bottom: 8px;">
                    <i class="fa fa-check-circle"></i> Rule 1: Instant ₹100
                </div>
                <div style="color: #9ca3af; font-size: 11px; margin-bottom: 12px; padding-left: 18px; line-height: 1.4;">
                    When you refer someone and they register for the game using their number, you will instantly receive ₹100.
                </div>
                <div style="color: var(--warning-yellow); font-size: 12px; font-weight: bold; margin-bottom: 8px;">
                    <i class="fa fa-coins"></i> Rule 2: Extra ₹200
                </div>
                <div style="color: #9ca3af; font-size: 11px; padding-left: 18px; line-height: 1.4;">
                    After registering, if they deposit ₹100 into their game wallet, you will get an additional ₹200.
                </div>
            </div>
            <div id="referLinkText" style="width: 100%; background: #000; border: 1px dashed #6fb1fc; color: #6fb1fc; padding: 10px; border-radius: 6px; font-weight: bold; font-size: 12px; margin-bottom: 15px; word-break: break-all;">
                https://aviatorpromint.com/?ref=0000000000
            </div>
            <button class="action-trigger-add-cash" onclick="copyReferralLink()" style="width: 100%; background: linear-gradient(45deg, #0052d4, #4364f7); color: white; box-shadow: 0 4px 15px rgba(67,100,247,0.4); border:none;"><i class="fa fa-copy"></i> COPY REFERRAL LINK</button>
        </div>
    </div>
</div>

<div class="deposit-modal-overlay" id="premiumDepositModalContainer">
    <div class="deposit-modal-box">
        
        <div class="deposit-top-bar">
            <div class="modal-close-icon" onclick="closeDepositDashboardModal()"><i class="fa fa-arrow-left"></i></div>
            <div class="modal-main-title">ADD CASH</div>
            <div class="support-tag" onclick="document.getElementById('telegramSupportModal').style.display='flex'"><i class="fa fa-headset"></i> Support</div>
        </div>

        <div class="network-notice-bar">
            Due to bank network issues, your recharge may be delayed by 1-30 minutes. <i class="fa fa-chevron-down" style="font-size:10px;"></i>
        </div>

        <div class="deposit-dashboard-layout">
            <div class="gateways-sidebar">
                <div class="gateway-pill-btn active"><span class="hot-tag">Hot</span>UPI-45</div>
            </div>

            <div class="coins-grid-panel">
                <div class="coin-pack-card selected" onclick="selectCoinPackCard(this, 100, 0)">
                    <div class="fallback-coin-icon"><i class="fa fa-coins"></i></div>
                    <div class="coin-amt-label">100</div>
                </div>
                <div class="coin-pack-card" onclick="selectCoinPackCard(this, 300, 0)">
                    <div class="fallback-coin-icon"><i class="fa fa-coins"></i></div>
                    <div class="coin-amt-label">300</div>
                </div>
                <div class="coin-pack-card" onclick="selectCoinPackCard(this, 500, 5)">
                    <span class="extra-bonus-badge">5% EXTRA</span>
                    <div class="fallback-coin-icon"><i class="fa fa-coins"></i></div>
                    <div class="coin-amt-label">500</div>
                </div>
                <div class="coin-pack-card" onclick="selectCoinPackCard(this, 1000, 5)">
                    <span class="extra-bonus-badge">5% EXTRA</span>
                    <div class="fallback-coin-icon"><i class="fa fa-coins"></i></div>
                    <div class="coin-amt-label">1000</div>
                </div>
                <div class="coin-pack-card" onclick="selectCoinPackCard(this, 2000, 10)">
                    <span class="extra-bonus-badge">10% EXTRA</span>
                    <div class="fallback-coin-icon"><i class="fa fa-coins"></i></div>
                    <div class="coin-amt-label">2000</div>
                </div>
                <div class="coin-pack-card" onclick="selectCoinPackCard(this, 5000, 15)">
                    <span class="extra-bonus-badge">15% EXTRA</span>
                    <div class="fallback-coin-icon"><i class="fa fa-coins"></i></div>
                    <div class="coin-amt-label">5000</div>
                </div>
                <div class="coin-pack-card" onclick="selectCoinPackCard(this, 10000, 15)">
                    <span class="extra-bonus-badge">15% EXTRA</span>
                    <div class="fallback-coin-icon"><i class="fa fa-coins"></i></div>
                    <div class="coin-amt-label">10000</div>
                </div>
                <div class="coin-pack-card" onclick="selectCoinPackCard(this, 20000, 15)">
                    <span class="extra-bonus-badge">15% EXTRA</span>
                    <div class="fallback-coin-icon"><i class="fa fa-coins"></i></div>
                    <div class="coin-amt-label">20000</div>
                </div>
            </div>
        </div>

        <div class="deposit-summary-footer">
            <div class="summary-math-flex">
                <div>Cash: <span id="summaryCashLabel">₹100</span></div>
                <div>+</div>
                <div>Bonus: <span id="summaryBonusLabel">₹0</span></div>
                <div>=</div>
                <div>Total Get: <span id="summaryTotalLabel" class="total-get-highlight">₹100</span></div>
            </div>
            <button class="action-trigger-add-cash" id="addCashActionBtnNode" onclick="openScreenshotUploadSubPanel()">ADD CASH ₹100</button>
        </div>

        <div class="screenshot-upload-overlay" id="screenshotSubModalPanel">
            
            <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; max-width: 320px; flex-shrink: 0;">
                <div class="modal-close-icon" onclick="closeScreenshotUploadSubPanel()"><i class="fa fa-arrow-left"></i></div>
                <div style="background: rgba(255, 188, 0, 0.15); border: 1px solid var(--warning-yellow); color: var(--warning-yellow); padding: 6px 12px; border-radius: 6px; font-size: 11px; font-weight: bold; cursor: pointer;" onclick="openDepositStatusModal()"><i class="fa fa-list-check"></i> Deposit Status</div>
            </div>
            
            <div style="font-weight:900; color:#fff; font-size:15px; margin-bottom:10px; text-transform:uppercase; flex-shrink: 0;"><i class="fa fa-shield-halved" style="color:var(--warning-yellow)"></i> Screenshot Verification</div>
            
            <div class="admin-upi-box">
                <div style="font-size:10px; color:#ffb3b9; margin-bottom:5px;">Pay Exact Amount via QR or UPI:</div>
                
                <img id="qrImageNode" src="/IMG_20260523_231432.jpg" onerror="this.onerror=null; this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=93155xxxx@ibl';" alt="QR Code" style="width: 120px; height: 120px; border-radius: 8px; border: 2px solid var(--warning-yellow); margin-bottom: 5px; object-fit: contain; background: white;">
                <div>
                    <button onclick="downloadAdminQR()" style="background: var(--safe-green); color: #000; padding: 4px 10px; border-radius: 4px; font-size: 10px; font-weight: bold; border: none; cursor: pointer; display: inline-block; margin-bottom: 10px;"><i class="fa fa-download"></i> Download QR</button>
                </div>
                
                <div style="font-size: 12px; color: var(--warning-yellow); margin-bottom: 5px; text-align: center; font-weight: bold;">Copy this UPI ID to make your payment</div>
                <div style="display:flex; justify-content:center; align-items:center; gap:8px;">
                    <div class="upi-string-node" id="adminUpiIdText">93155xxxx@ibl</div>
                    <button onclick="copyAdminUpi()" style="background:#374151; color:#fff; border:none; padding:4px 8px; border-radius:4px; font-size:10px; cursor:pointer;"><i class="fa fa-copy"></i> Copy</button>
                </div>
                
                <div style="font-size:11px; color:var(--warning-yellow); font-weight:bold; margin-top:8px;">Required Payment: ₹<span id="targetRequiredPayLabel">100</span></div>
                
                <div style="display: flex; justify-content: center; gap: 15px; margin-top: 15px;">
                    <div onclick="openPaymentApp('paytm')" style="display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                        <div style="width:35px; height:35px; background:#fff; border-radius:8px; display:flex; justify-content:center; align-items:center; box-shadow: 0 2px 5px rgba(0,0,0,0.5);"><img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" style="width:25px; height:auto;"></div>
                        <div style="font-size:9px; color:#ffb3b9; margin-top:4px; font-weight:bold;">Paytm</div>
                    </div>
                    <div onclick="openPaymentApp('gpay')" style="display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                        <div style="width:35px; height:35px; background:#fff; border-radius:8px; display:flex; justify-content:center; align-items:center; box-shadow: 0 2px 5px rgba(0,0,0,0.5);"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" style="width:25px; height:auto;"></div>
                        <div style="font-size:9px; color:#ffb3b9; margin-top:4px; font-weight:bold;">GPay</div>
                    </div>
                    <div onclick="openPaymentApp('phonepe')" style="display:flex; flex-direction:column; align-items:center; cursor:pointer;">
                        <div style="width:35px; height:35px; background:#fff; border-radius:8px; display:flex; justify-content:center; align-items:center; box-shadow: 0 2px 5px rgba(0,0,0,0.5);"><img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" style="width:30px; height:auto;"></div>
                        <div style="font-size:9px; color:#ffb3b9; margin-top:4px; font-weight:bold;">PhonePe</div>
                    </div>
                </div>
            </div>
            
            <div style="background: rgba(0,0,0,0.4); border: 1px solid #5e0a13; padding: 12px; border-radius: 8px; margin-bottom: 15px; width: 100%; max-width: 320px; text-align: left; flex-shrink: 0;">
                <div style="color: var(--warning-yellow); margin-bottom: 10px; font-size: 13px; font-weight: 900; text-transform: uppercase; text-align: center; letter-spacing: 1px;">HOW TO MAKE PAYMENT</div>
                <div style="margin-bottom: 8px; font-size: 11px; color: #cbd5e1; line-height: 1.5;">
                    <strong style="color: #fff; font-size: 12px;">Step:-1</strong> First, you need to download the QR code or copy the UPI ID. After that, click on the app you want to use for the payment, such as Paytm, GPay, or PhonePe.
                </div>
                <div style="font-size: 11px; color: #cbd5e1; line-height: 1.5;">
                    <strong style="color: #fff; font-size: 12px;">Step:-2</strong> After the payment is complete, you must upload your payment screenshot and UTR ID below. Only then will the balance be added to your game wallet.
                </div>
            </div>

            <div class="file-dropzone">
                <i class="fa fa-image" style="font-size:24px; margin-bottom:5px;"></i>
                <div id="dropzoneTextLabel">Click to Upload Payment Screenshot</div>
                <input type="file" id="depositProofFileSelector" accept="image/*" onchange="handleProofFileSelection(this)">
            </div>

            <div style="margin-bottom: 15px; width: 100%; max-width: 320px; text-align: left; flex-shrink: 0;">
                <label style="font-size: 11px; color: #ffb3b9; display: block; margin-bottom: 4px; font-weight: bold;">Enter 12-Digit UTR Number:</label>
                <input type="text" id="utrNumberInput" placeholder="12 Digit UTR Number" maxlength="12" style="width: 100%; background: #000; border: 1px solid #5e0a13; color: #fff; padding: 8px; border-radius: 6px; outline: none; font-weight: bold; text-align: center;">
            </div>

            <div style="display:flex; gap:10px; width:100%; max-width:320px; margin-bottom: 30px; flex-shrink: 0;">
                <button class="action-trigger-add-cash" style="background:#540912; color:#fff; flex:1;" onclick="closeScreenshotUploadSubPanel()">Back</button>
                <button class="action-trigger-add-cash" style="flex:1;" onclick="processFinalVerificationVerification()">Verify Pay</button>
            </div>
        </div>
    </div>
</div>

<div class="deposit-modal-overlay" id="depositStatusModalContainer" style="z-index: 1000000;">
    <div class="deposit-modal-box" style="max-width: 320px;">
        <div class="deposit-top-bar">
            <div class="modal-close-icon" onclick="closeDepositStatusModal()"><i class="fa fa-arrow-left"></i></div>
            <div class="modal-main-title">DEPOSIT STATUS</div>
            <div style="width:20px;"></div>
        </div>
        <div id="depositStatusContent" style="padding: 20px 10px; text-align: center; color: #fff;">
            </div>
    </div>
</div>

<div id="dynamicCustomAlert" class="custom-alert-overlay">
    <div class="custom-alert-box" id="dynamicAlertBox">
        <div class="custom-alert-icon" id="dynamicAlertIcon"><i class="fa fa-check-circle"></i></div>
        <div class="custom-alert-title" id="dynamicAlertTitle">Notice</div>
        <div class="custom-alert-text" id="dynamicAlertText">...</div>
        <button onclick="document.getElementById('dynamicCustomAlert').style.display='none'" class="custom-alert-btn" id="dynamicAlertBtn">OK</button>
    </div>
</div>

<div class="deposit-modal-overlay" id="withdrawModalContainer">
    <div class="deposit-modal-box">
        <div class="deposit-top-bar">
            <div style="display:flex; align-items:center; gap:10px;">
                <div class="modal-close-icon" onclick="closeWithdrawModal()"><i class="fa fa-arrow-left"></i></div>
                <div style="color: #ffb3b9; font-size: 11px; cursor: pointer; font-weight:bold; border: 1px solid rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 20px; background: rgba(0,0,0,0.3);" onclick="document.getElementById('withdrawSupportModal').style.display='flex'"><i class="fa fa-headset"></i> Support</div>
            </div>
            <div class="modal-main-title">WITHDRAW</div>
            <div style="color: #ffb3b9; font-size: 12px; cursor: pointer; font-weight:bold; border: 1px solid rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 4px;" onclick="openWithdrawRecords()">Records</div>
        </div>

        <div class="withdraw-rules-container">
            <strong><i class="fa fa-exclamation-triangle"></i> Official Withdrawal Policy & Limits</strong>
            <div class="rule-item"><span>Daily Limit:</span> <span>Only 1 withdrawal per day</span></div>
            <div class="rule-item"><span>1st Withdrawal:</span> <span>Exactly ₹200</span></div>
            <div class="rule-item"><span>2nd Withdrawal:</span> <span>Max ₹300 or less</span></div>
            <div class="rule-item"><span>3rd Withdrawal:</span> <span>Max ₹500 or less</span></div>
            <div class="rule-item"><span>4th Withdrawal:</span> <span>Max ₹1,000 or less</span></div>
            <div class="rule-item"><span>5th Withdrawal:</span> <span>Max ₹2,000 or less</span></div>
            <div class="rule-item"><span>Subsequent:</span> <span>Max ₹5,000 or less</span></div>
        </div>

        <div style="text-align: center; margin-bottom: 15px;">
            <div style="color: #9ca3af; font-size: 12px; font-weight: bold;">Available Balance</div>
            <div style="font-size: 32px; font-weight: 900; color: var(--warning-yellow);">₹ <span id="withdrawAvailBal">1000.00</span></div>
        </div>

        <div class="withdraw-input-box">
            <div style="color: #ffb3b9; font-size: 11px; margin-bottom: 5px; font-weight:bold;">Withdraw To UPI</div>
            <input type="text" id="withdrawUpiInput" placeholder="Enter UPI ID (e.g. user@ybl)">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
                <span id="savedUpiLabel" style="font-size: 11px; color: var(--safe-green); font-weight:bold;">No UPI Saved</span>
                <button class="withdraw-save-btn" onclick="saveWithdrawUpi()">Save UPI</button>
            </div>
        </div>

        <div class="withdraw-input-box">
            <div style="color: #ffb3b9; font-size: 11px; margin-bottom: 5px; font-weight:bold;">Withdrawal Amount</div>
            <input type="number" id="withdrawAmtInput" placeholder="Enter Amount" oninput="clearWithdrawSelection()">
        </div>

        <div class="coins-grid-panel" style="margin-bottom: 15px; grid-template-columns: repeat(3, 1fr);">
            <div class="coin-pack-card w-amt-btn" onclick="selectWithdrawAmt(200, this)"><div class="coin-amt-label">₹200</div></div>
            <div class="coin-pack-card w-amt-btn" onclick="selectWithdrawAmt(300, this)"><div class="coin-amt-label">₹300</div></div>
            <div class="coin-pack-card w-amt-btn" onclick="selectWithdrawAmt(500, this)"><div class="coin-amt-label">₹500</div></div>
            <div class="coin-pack-card w-amt-btn" onclick="selectWithdrawAmt(1000, this)"><div class="coin-amt-label">₹1000</div></div>
            <div class="coin-pack-card w-amt-btn" onclick="selectWithdrawAmt(5000, this)"><div class="coin-amt-label">₹5000</div></div>
            <div class="coin-pack-card w-amt-btn" onclick="selectWithdrawAmt(10000, this)"><div class="coin-amt-label">₹10000</div></div>
        </div>

        <button class="action-trigger-add-cash" style="width: 100%; background: linear-gradient(180deg, #ffbc00 0%, #d48800 100%);" onclick="processWithdrawalSubmit()">WITHDRAW NOW</button>
    </div>
</div>

<div class="deposit-modal-overlay" id="withdrawRecordsModalContainer">
    <div class="deposit-modal-box" style="height: 80vh; max-height: 600px;">
        <div class="deposit-top-bar" style="width: 100%;">
            <div class="modal-close-icon" onclick="closeWithdrawRecords()"><i class="fa fa-arrow-left"></i></div>
            <div class="modal-main-title">RECORDS</div>
            <div style="width:20px;"></div>
        </div>
        <div id="withdrawRecordsList" style="flex:1; overflow-y:auto; width: 100%; display:flex; flex-direction:column; gap:8px; margin-top:10px; padding-right: 4px;">
            </div>
    </div>
</div>

<div class="deposit-modal-overlay" id="adminLoginModalContainer">
    <div class="deposit-modal-box" style="max-width: 400px;">
        <div class="deposit-top-bar">
            <div class="modal-main-title">ADMIN LOGIN</div>
            <div class="modal-close-icon" onclick="closeAdminLoginModal()">&times;</div>
        </div>
        <div style="padding: 15px 5px; display: flex; flex-direction: column; gap: 12px;">
            <label style="color: #ffb3b9; font-size: 12px; font-weight: bold;">Enter Admin Password:</label>
            <input type="text" id="adminPasswordInput" placeholder="Enter Password" autocomplete="off" spellcheck="false" style="width: 100%; background: #000; border: 1px solid #5e0a13; color: #fff; padding: 10px; border-radius: 6px; outline: none; font-weight: bold; text-align: center; -webkit-text-security: disc;">
            <button class="action-trigger-add-cash" onclick="verifyAdminPassword()" style="width: 100%; margin-top: 5px;">LOGIN</button>
        </div>
    </div>
</div>

<div class="deposit-modal-overlay" id="adminDashboardModalContainer">
    <div class="deposit-modal-box" style="max-width: 500px; max-height: 95vh; overflow-y: auto;">
        <div class="deposit-top-bar">
            <div class="modal-main-title">ADMIN CONTROL</div>
            <div class="modal-close-icon" onclick="closeAdminDashboardModal()">&times;</div>
        </div>
        <div style="padding: 5px; display: flex; flex-direction: column; gap: 10px; align-items: center;">
            
            <div style="width: 100%; background: rgba(0,0,0,0.4); padding: 10px; border-radius: 6px; border: 1px solid #5e0a13;">
                <div style="color: #ffd700; font-size: 12px; margin-bottom: 8px; font-weight: bold; text-align: center; text-transform:uppercase;"><i class="fa fa-server"></i> Server System Mode</div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="color: #ffb3b9; font-size: 10px;">Keep server ON in background</div>
                    <button id="adminServerToggleBtn" class="action-trigger-add-cash" style="background: var(--safe-green); color: #000; padding: 6px 12px; font-size: 11px;" onclick="toggleAdminServerStatus()">ON</button>
                </div>
            </div>

            <div style="width: 100%; background: rgba(0,0,0,0.4); padding: 10px; border-radius: 6px; border: 1px solid #5e0a13;">
                <div style="color: #ffd700; font-size: 12px; margin-bottom: 8px; font-weight: bold; text-align: center; text-transform:uppercase;"><i class="fa fa-image"></i> User Deposit Requests</div>
                <div id="adminDepositRequestsList" style="max-height: 200px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; font-size: 11px; padding-right: 4px;">
                    <div style="text-align:center; color:#9ca3af; padding: 10px;">No pending deposits.</div>
                </div>
            </div>

            <div style="width: 100%; background: rgba(0,0,0,0.4); padding: 10px; border-radius: 6px; border: 1px solid #5e0a13; margin-top: 5px;">
                <div style="color: #ffd700; font-size: 12px; margin-bottom: 8px; font-weight: bold; text-align: center; text-transform:uppercase;"><i class="fa fa-money-bill-transfer"></i> Users Withdraw Requests</div>
                <div id="adminWithdrawRequestsList" style="max-height: 150px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; font-size: 11px; padding-right: 4px;">
                    <div style="text-align:center; color:#9ca3af; padding: 10px;">No pending withdrawals.</div>
                </div>
            </div>

            <div style="width: 100%; background: rgba(0,0,0,0.4); padding: 10px; border-radius: 6px; border: 1px solid #5e0a13; margin-top: 5px;">
                <div style="color: #ffb3b9; font-size: 11px; margin-bottom: 8px; font-weight: bold; text-align: center;">Manual Coin Transfer:</div>
                <div style="display: flex; gap: 6px; margin-bottom: 8px;">
                    <input type="text" id="adminManualUserId" placeholder="User ID (8-digit)" maxlength="8" style="flex: 1; background: #000; border: 1px solid #1c1e24; color: #fff; padding: 8px; border-radius: 4px; text-align: center; font-size: 11px; outline: none; font-weight:bold;">
                    <input type="number" id="adminManualCoinAmount" placeholder="Amount" style="flex: 1; background: #000; border: 1px solid #1c1e24; color: #fff; padding: 8px; border-radius: 4px; text-align: center; font-size: 11px; outline: none; font-weight:bold;">
                </div>
                <button class="action-trigger-add-cash" style="width: 100%; font-size: 11px; padding: 8px; background: linear-gradient(90deg, #ff9d02 0%, #ff6b00 100%); border:none;" onclick="adminManualAddCoins()">Transfer Coins</button>
            </div>

            <div style="width: 100%; background: rgba(0,0,0,0.4); padding: 10px; border-radius: 6px; border: 1px solid #5e0a13; margin-top: 5px;">
                <div style="color: #ffd700; font-size: 12px; margin-bottom: 8px; font-weight: bold; text-align: center; text-transform:uppercase;"><i class="fa fa-fighter-jet"></i> Fly Control Option</div>
                <div style="display: flex; gap: 6px; margin-bottom: 8px;">
                    <button id="btnFlyLow" class="action-trigger-add-cash" style="flex: 1; padding: 6px; font-size: 10px; background: #374151; color: #fff; border: 1px solid #1c1e24;" onclick="setAdminFlyMode('low')">LOW<br>(1-1.5x)</button>
                    <button id="btnFlyMedium" class="action-trigger-add-cash" style="flex: 1; padding: 6px; font-size: 10px; background: #374151; color: #fff; border: 1px solid #1c1e24;" onclick="setAdminFlyMode('medium')">MED<br>(1-5x)</button>
                    <button id="btnFlyHigh" class="action-trigger-add-cash" style="flex: 1; padding: 6px; font-size: 10px; background: #374151; color: #fff; border: 1px solid #1c1e24;" onclick="setAdminFlyMode('high')">HIGH<br>(1-49x)</button>
                    <button id="btnFlyCrash2x" class="action-trigger-add-cash" style="flex: 1; padding: 6px; font-size: 10px; background: #374151; color: #fff; border: 1px solid #1c1e24;" onclick="setAdminFlyMode('crash2x')">Crash2x<br>(Logic)</button>
                </div>
                <button id="btnFlyDefault" class="action-trigger-add-cash" style="width: 100%; padding: 6px; font-size: 10px; background: var(--safe-green); color: #000;" onclick="setAdminFlyMode('default')">DEFAULT (Random Auto)</button>
            </div>

            <div style="width: 100%; background: rgba(0,0,0,0.4); padding: 10px; border-radius: 6px; border: 1px solid #5e0a13; margin-top: 5px;">
                <div style="color: #ffd700; font-size: 12px; margin-bottom: 8px; font-weight: bold; text-align: center; text-transform:uppercase;"><i class="fa fa-users"></i> Users Details & Live Stats</div>
                <div style="display:flex; justify-content:space-around; background:#000; padding:8px; border-radius:4px; margin-bottom:10px; border:1px solid #1c1e24;">
                    <div style="color:var(--safe-green); font-size:12px; font-weight:bold;">🟢 Online: <span id="adminStatOnline">0</span></div>
                    <div style="color:var(--warning-yellow); font-size:12px; font-weight:bold;">🔥 Betting: <span id="adminStatBetting">0</span></div>
                </div>
                <div id="adminUsersDetailsList" style="max-height: 150px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; font-size: 11px; padding-right: 4px;">
                    <div style="text-align:center; color:#9ca3af; padding: 10px;">Loading users data...</div>
                </div>
            </div>

            <div style="width: 100%; background: rgba(0,0,0,0.4); padding: 10px; border-radius: 6px; border: 1px solid #5e0a13; margin-top: 5px;">
                <div style="color: #ffd700; font-size: 12px; margin-bottom: 8px; font-weight: bold; text-align: center; text-transform:uppercase;"><i class="fa fa-gift"></i> Refer & Earn Stats</div>
                <div id="adminReferralsList" style="max-height: 150px; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; font-size: 11px; padding-right: 4px;">
                    <div style="text-align:center; color:#9ca3af; padding: 10px;">Loading referrals data...</div>
                </div>
            </div>

            <button class="action-trigger-add-cash" style="background: #540912; color: #fff; width: 100%; padding: 8px; font-size: 11px; margin-top: 5px;" onclick="closeAdminDashboardModal()">Close Dashboard</button>
        </div>
    </div>
</div>

<div id="adminScreenshotModal" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.95); z-index:10000000; justify-content:center; align-items:center; flex-direction:column;">
    <div style="position:absolute; top:20px; right:20px; font-size:40px; color:white; cursor:pointer;" onclick="document.getElementById('adminScreenshotModal').style.display='none'">&times;</div>
    <img id="adminScreenshotViewImg" style="max-width:90%; max-height:80vh; border:2px solid #5e0a13; border-radius:8px;">
</div>

<div class="deposit-modal-overlay" id="telegramSupportModal" style="z-index: 1000001;">
    <div class="deposit-modal-box" style="max-width: 320px; text-align: center; padding: 25px 20px;">
        <div class="modal-close-icon" onclick="document.getElementById('telegramSupportModal').style.display='none'" style="position: absolute; right: 15px; top: 15px;">&times;</div>
        <div style="font-size: 18px; font-weight: 900; color: var(--warning-yellow); margin-bottom: 15px; text-transform: uppercase;">Payment Support</div>
        <p style="color: #cbd5e1; font-size: 12px; line-height: 1.5; margin-bottom: 20px; font-weight: bold;">
            If your balance is not added to your game wallet even after making the payment, you can click on the Telegram logo below and tell us your problem. You will be helped as soon as possible.
        </p>
        <a href="https://t.me/Aviatorpromint" target="_blank" style="display: inline-block; text-decoration: none;">
            <i class="fab fa-telegram" style="color: #2AABEE; font-size: 60px;"></i>
            <div style="color: #2AABEE; margin-top: 8px; font-weight: 900; font-size: 16px;">@Aviatorpromint</div>
        </a>
    </div>
</div>

<div class="deposit-modal-overlay" id="withdrawSupportModal" style="z-index: 1000001;">
    <div class="deposit-modal-box" style="max-width: 320px; text-align: center; padding: 25px 20px;">
        <div class="modal-close-icon" onclick="document.getElementById('withdrawSupportModal').style.display='none'" style="position: absolute; right: 15px; top: 15px;">&times;</div>
        <div style="font-size: 18px; font-weight: 900; color: var(--warning-yellow); margin-bottom: 15px; text-transform: uppercase;">Withdrawal Support</div>
        <p style="color: #cbd5e1; font-size: 12px; line-height: 1.5; margin-bottom: 20px; font-weight: bold;">
            If your money is not credited to your account even after 24 hours of placing the withdrawal, you can click on the Telegram logo below and tell us your problem. You will be helped as soon as possible.
        </p>
        <a href="https://t.me/Aviatorpromint" target="_blank" style="display: inline-block; text-decoration: none;">
            <i class="fab fa-telegram" style="color: #2AABEE; font-size: 60px;"></i>
            <div style="color: #2AABEE; margin-top: 8px; font-weight: 900; font-size: 16px;">@Aviatorpromint</div>
        </a>
    </div>
</div>

<script data-cfasync="false">
let depositBalance = 50.00;
let winningBalance = 0.00;
let isAudioMuted = false;
let bypassUnload = false; 
window.currentAdminDeposits = [];

let currentGraphicsQuality = localStorage.getItem('graphics_quality') || 'medium';

function openGraphicsModal() {
    updateGraphicsButtonsUI(currentGraphicsQuality);
    document.getElementById('graphicsModalContainer').style.display = 'flex';
}

function closeGraphicsModal() {
    document.getElementById('graphicsModalContainer').style.display = 'none';
}

function setGraphicsQuality(level) {
    currentGraphicsQuality = level;
    localStorage.setItem('graphics_quality', level);
    updateGraphicsButtonsUI(level);
    closeGraphicsModal();
}

function autoFitScreen() {
    let winW = window.innerWidth;
    let winH = window.innerHeight;
    let scale = 1;
    
    if (winW < 380) { scale = (winW / 380); } 
    else if (winW > 800) {
        document.getElementById('masterAppContainer').style.maxWidth = "800px";
        document.getElementById('masterAppContainer').style.margin = "0 auto";
        document.getElementById('masterAppContainer').style.borderLeft = "1px solid var(--border-color)";
        document.getElementById('masterAppContainer').style.borderRight = "1px solid var(--border-color)";
    }
    
    if (scale !== 1) {
        document.body.style.zoom = scale;
        document.body.style.transform = `scale(${scale})`;
        document.body.style.transformOrigin = "top left";
        document.body.style.width = (100 / scale) + "%";
        document.body.style.height = (100 / scale) + "%";
    } else {
        document.body.style.zoom = 1;
        document.body.style.transform = "none";
        document.body.style.width = "100%";
        document.body.style.height = "100%";
    }

    window.scrollTo(0, 0);
    
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(e => console.log(e));
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    }
    
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        showCustomAlert("Screen Optimized", "AUTO FIT SCREEN ACTIVATED! UI is now properly optimized for your display.", "success");
        closeGraphicsModal();
    }, 500);
}

function updateGraphicsButtonsUI(level) {
    let btnVLow = document.getElementById('btnGraphVeryLow');
    let btnLow = document.getElementById('btnGraphLow');
    let btnMed = document.getElementById('btnGraphMedium');
    let btnHigh = document.getElementById('btnGraphHigh');
    if(btnVLow) {
        btnVLow.style.background = level === 'verylow' ? 'var(--warning-yellow)' : '#374151';
        btnVLow.style.color = level === 'verylow' ? '#000' : '#fff';
        btnLow.style.background = level === 'low' ? 'var(--warning-yellow)' : '#374151';
        btnLow.style.color = level === 'low' ? '#000' : '#fff';
        btnMed.style.background = level === 'medium' ? 'var(--warning-yellow)' : '#374151';
        btnMed.style.color = level === 'medium' ? '#000' : '#fff';
        btnHigh.style.background = level === 'high' ? 'var(--warning-yellow)' : '#374151';
        btnHigh.style.color = level === 'high' ? '#000' : '#fff';
    }
}

// CENTRAL DYNAMIC POPUP ALERT FUNCTION
function showCustomAlert(title, text, type) {
    document.getElementById('dynamicAlertTitle').innerText = title;
    document.getElementById('dynamicAlertText').innerText = text;
    let box = document.getElementById('dynamicAlertBox');
    let icon = document.getElementById('dynamicAlertIcon');
    let btn = document.getElementById('dynamicAlertBtn');
    
    box.classList.remove('error-shake');
    
    if(type === 'error' || type === 'withdraw_error') {
        box.style.borderColor = 'var(--danger-red)';
        icon.innerHTML = '<i class="fa fa-exclamation-triangle"></i>';
        icon.style.color = type === 'withdraw_error' ? 'var(--safe-green)' : 'var(--danger-red)';
        btn.style.background = 'var(--danger-red)';
        btn.style.color = '#fff';
        btn.style.boxShadow = '0 4px 15px rgba(224,36,36,0.4)';
        
        void box.offsetWidth; 
        box.classList.add('error-shake');
    } else {
        box.style.borderColor = 'var(--safe-green)';
        icon.innerHTML = '<i class="fa fa-check-circle"></i>';
        icon.style.color = 'var(--safe-green)';
        btn.style.background = 'var(--safe-green)';
        btn.style.color = '#000';
        btn.style.boxShadow = '0 4px 15px rgba(40,167,69,0.4)';
    }

    // Fix overlap issues by ensuring absolute highest Z-index dynamically
    document.getElementById('dynamicCustomAlert').style.zIndex = "99999999";
    document.getElementById('dynamicCustomAlert').style.display = 'flex';
}

/* --- LOGIN SYSTEM LOGIC --- */
let currentCaptchaCode = "";
let currentLoggedInUser = "";
let currentLoggedInUserId = "";
let localBetCount = 0; 

function generateCaptchaCode() {
    currentCaptchaCode = Math.floor(1000 + Math.random() * 9000).toString();
    let box = document.getElementById('captchaCodeBox');
    if(box) box.innerText = currentCaptchaCode;
}

function simulateSimVerification(phoneNumber) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if(phoneNumber.startsWith('0') || phoneNumber.startsWith('1') || phoneNumber === '9999999999') {
                resolve(false);
            } else {
                resolve(true);
            }
        }, 600);
    });
}

function initializeUserProfile(phone) {
    let storedName = localStorage.getItem("aviator_uname_" + phone);
    let storedId = localStorage.getItem("aviator_uid_" + phone);
    let storedPic = localStorage.getItem("aviator_upic_" + phone);
    
    if(!storedName) {
        let randInt = Math.floor(100 + Math.random() * 899);
        storedName = "Player" + randInt; 
        localStorage.setItem("aviator_uname_" + phone, storedName);
    }
    if(!storedId) {
        storedId = Math.floor(10000000 + Math.random() * 90000000).toString();
        localStorage.setItem("aviator_uid_" + phone, storedId);
    }
    currentLoggedInUserId = storedId;
    
    document.getElementById("userProfileHeaderName").innerText = storedName;
    document.getElementById("userProfileHeaderId").innerText = "ID-" + storedId;
    
    let imgNode = document.getElementById("userProfileHeaderLogo");
    let iconNode = document.getElementById("userProfileFallbackIcon");
    if(storedPic) {
        imgNode.src = storedPic;
        imgNode.style.display = "block";
        iconNode.style.display = "none";
    } else {
        imgNode.style.display = "none";
        iconNode.style.display = "block";
    }
}

function openProfileEditModal() {
    let currentName = document.getElementById("userProfileHeaderName").innerText;
    document.getElementById("editPlayerNameInput").value = currentName;
    
    let currentId = document.getElementById("userProfileHeaderId").innerText;
    let modalIdNode = document.getElementById("modalDisplayUserId");
    if (modalIdNode) { modalIdNode.innerText = currentId; }

    let imgNode = document.getElementById("userProfileHeaderLogo");
    let previewNode = document.getElementById("editProfilePreview");
    let fallbackNode = document.getElementById("editProfileFallback");

    if(imgNode.style.display !== "none" && imgNode.src) {
        previewNode.src = imgNode.src;
        previewNode.style.display = "block";
        fallbackNode.style.display = "none";
    } else {
        previewNode.style.display = "none";
        fallbackNode.style.display = "block";
    }
    document.getElementById('profileEditModalContainer').style.display = 'flex';
}

function closeProfileEditModal() {
    document.getElementById('profileEditModalContainer').style.display = 'none';
}

function saveProfileDetails() {
    let newName = document.getElementById("editPlayerNameInput").value.trim();
    if(newName.length === 0 || newName.length > 8) {
        showCustomAlert("Invalid Name", "Please enter 1 to 8 characters. Special characters are allowed.", "error");
        return;
    }
    document.getElementById("userProfileHeaderName").innerText = newName;
    if(currentLoggedInUser) {
        localStorage.setItem("aviator_uname_" + currentLoggedInUser, newName);
    }
    closeProfileEditModal();
}

function uploadProfilePicFromGallery(input) {
    if (input.files && input.files[0]) {
        let fileReader = new FileReader();
        fileReader.onload = function(e) {
            let base64Image = e.target.result;
            if (currentLoggedInUser) {
                localStorage.setItem("aviator_upic_" + currentLoggedInUser, base64Image);
            }
            document.getElementById("userProfileHeaderLogo").src = base64Image;
            document.getElementById("userProfileHeaderLogo").style.display = "block";
            document.getElementById("userProfileFallbackIcon").style.display = "none";

            let previewNode = document.getElementById("editProfilePreview");
            if(previewNode) {
                previewNode.src = base64Image;
                previewNode.style.display = "block";
                document.getElementById("editProfileFallback").style.display = "none";
            }
        };
        fileReader.readAsDataURL(input.files[0]);
    }
}

function openReferEarnModal() {
    let currentLiveLink = window.location.origin + window.location.pathname;
    if(currentLiveLink.endsWith('/')) currentLiveLink = currentLiveLink.slice(0, -1);
    document.getElementById('referLinkText').innerText = currentLiveLink + "/?ref=" + (currentLoggedInUserId || "00000000");
    document.getElementById('referEarnModalContainer').style.display = 'flex';
}

function closeReferEarnModal() {
    document.getElementById('referEarnModalContainer').style.display = 'none';
}

function copyReferralLink() {
    let text = document.getElementById('referLinkText').innerText;
    navigator.clipboard.writeText(text).then(() => {
        showCustomAlert("Link Copied", "Referral Link Copied Successfully!", "success");
    }).catch(err => {
        showCustomAlert("Link Copied", "Copied: " + text, "success");
    });
}

function syncClientStats() {
    if(!currentLoggedInUser || !currentLoggedInUserId) return;
    let currentActiveBet = (betPool[1].placed ? betPool[1].amount : 0) + (betPool[2].placed ? betPool[2].amount : 0);
    
    let pName = document.getElementById("userProfileHeaderName").innerText;
    let pPic = localStorage.getItem("aviator_upic_" + currentLoggedInUser) || "";
    
    let cleared = window.processedCreditIds ? Object.keys(window.processedCreditIds) : [];

    let abortCtrl = new AbortController();
    setTimeout(() => abortCtrl.abort(), 4000);

    // CLOUDFLARE FIX: Add Cache Busting ?t=Date.now()
    fetch('/api/sync-user-stats?t=' + Date.now(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            phone: currentLoggedInUser, 
            userId: currentLoggedInUserId, 
            balance: depositBalance + winningBalance, 
            depositBalance: depositBalance,
            winningBalance: winningBalance,
            profileName: pName,
            profilePic: pPic,
            betCount: localBetCount,
            activeBet: currentActiveBet,
            clearedCredits: cleared
        }),
        signal: abortCtrl.signal
    }).catch(e=>{});
}
setInterval(syncClientStats, 5000); 

async function validateCaptchaAndLogin() {
    let phoneInput = document.getElementById('loginPhoneInput').value.trim();
    let captchaInput = document.getElementById('loginCaptchaInput').value.trim();
    let loginBtn = document.getElementById('mainLoginBtnNode');
    
    if(phoneInput.length !== 10 || isNaN(phoneInput)) {
        showCustomAlert("Invalid Number", "Please enter a valid 10-digit mobile number.", "error"); return;
    }
    if(captchaInput !== currentCaptchaCode) {
        showCustomAlert("Wrong Captcha", "The captcha code you entered is incorrect. Please try again.", "error");
        generateCaptchaCode();
        return;
    }
    
    let originalHtml = loginBtn.innerHTML;
    loginBtn.innerHTML = "Verifying Device SIM <i class='fa fa-spinner fa-spin'></i>";
    loginBtn.style.opacity = "0.8";
    loginBtn.disabled = true;

    let isSimValid = await simulateSimVerification(phoneInput);

    if(!isSimValid) {
        showCustomAlert("SIM Verification Failed", "The SIM for this number is not detected in your device. Please insert the correct SIM card.", "error");
        loginBtn.innerHTML = originalHtml;
        loginBtn.style.opacity = "1";
        loginBtn.disabled = false;
        generateCaptchaCode();
        document.getElementById('loginCaptchaInput').value = "";
        return;
    }
    
    try {
        let refCode = new URLSearchParams(window.location.search).get('ref') || "";
        // CLOUDFLARE FIX: Bypass fetch caching
        let ipResponse = await fetch('/api/login?t=' + Date.now() + '&phone=' + phoneInput + (refCode ? '&ref=' + refCode : ''));
        let ipData = await ipResponse.json();
        if(!ipData.success) {
            let heading = ipData.message.includes('2 numbers') ? "Only 2 Numbers Allowed" : "Login Failed";
            showCustomAlert(heading, ipData.message, "error");
            loginBtn.innerHTML = originalHtml;
            loginBtn.style.opacity = "1";
            loginBtn.disabled = false;
            generateCaptchaCode();
            return;
        }
        
        if(ipData.userData) {
            if(ipData.userData.profileName) localStorage.setItem("aviator_uname_" + phoneInput, ipData.userData.profileName);
            if(ipData.userData.userId) localStorage.setItem("aviator_uid_" + phoneInput, ipData.userData.userId);
            if(ipData.userData.profilePic) localStorage.setItem("aviator_upic_" + phoneInput, ipData.userData.profilePic);
            if(ipData.userData.depositBalance !== undefined) localStorage.setItem("user_dep_bal_" + phoneInput, ipData.userData.depositBalance);
            if(ipData.userData.winningBalance !== undefined) localStorage.setItem("user_win_bal_" + phoneInput, ipData.userData.winningBalance);
            if(ipData.userData.betCount !== undefined) localStorage.setItem("user_bet_count_" + phoneInput, ipData.userData.betCount);
        }
    } catch(e) {
        console.error("IP Check Connection Error:", e);
    }
    
    loginBtn.innerHTML = "<i class='fa fa-check-circle'></i> Number Verified ✅";
    loginBtn.style.background = "var(--safe-green)";
    loginBtn.style.color = "#fff";
    loginBtn.style.opacity = "1";

    setTimeout(() => {
        currentLoggedInUser = phoneInput;
        initializeUserProfile(phoneInput);

        localBetCount = parseInt(localStorage.getItem('user_bet_count_' + phoneInput)) || 0;

        let adminBtnNodeRef = document.getElementById("adminMenuBtnNode");
        if (adminBtnNodeRef) {
            if (phoneInput === "9315515945") {
                adminBtnNodeRef.style.display = "inline-block";
            } else {
                adminBtnNodeRef.style.display = "none";
            }
        }

        let savedDep = localStorage.getItem('user_dep_bal_' + phoneInput);
        let savedWin = localStorage.getItem('user_win_bal_' + phoneInput);
        
        if (savedDep !== null) {
            depositBalance = parseFloat(savedDep);
        } else {
            depositBalance = 50.00; 
            localStorage.setItem('user_dep_bal_' + phoneInput, depositBalance.toString());
        }
        
        if (savedWin !== null) {
            winningBalance = parseFloat(savedWin);
        } else {
            winningBalance = 0.00;
            localStorage.setItem('user_win_bal_' + phoneInput, winningBalance.toString());
        }
        
        document.getElementById('loginScreenPanel').style.display = 'none';
        document.getElementById('appLauncherSplashPanel').style.display = 'flex';
        syncWalletUIElements();
        syncClientStats(); 

        loginBtn.innerHTML = originalHtml;
        loginBtn.style.background = "#ffd700";
        loginBtn.style.color = "#000";
        loginBtn.disabled = false;

        setTimeout(() => {
            if (document.getElementById('appLauncherSplashPanel').style.display === 'flex') {
                triggerClientBootstrapper();
            }
        }, 1500);

    }, 800); 
}

setTimeout(generateCaptchaCode, 100);

let engineParticlesArray = [];
let crashFragmentsArray = [];
let takeoffFrameTickCount = 0;
let lastRenderTime = 0;

let selectedCoinsAmount = 100;
let selectedCoinsBonus = 0;

const namePrefixesArray = ["ajay", "vikas", "rahul", "neha", "surya", "mohit", "amit", "priya", "raj", "karan", "sonu", "monu", "ravi", "anil", "pooja", "arti", "rohit", "sumit", "yash", "aman", "nisha", "kavya", "deep", "alok"];
let persistentPlayersPool = [];
let lastPoolUpdateTime = 0;
let generatedActiveRoundBetsData = [];

function getDynamic8CharName() {
    let prefix = namePrefixesArray[Math.floor(Math.random() * namePrefixesArray.length)];
    let randomChars = "0123456789_x";
    while(prefix.length < 8) {
        prefix += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return prefix.substring(0, 8);
}

// ADMIN / WITHDRAW SYNC VARIABLES
let localScreenshotData = null;
let adminUsersInterval = null; 

function openDepositStatusModal() {
    let container = document.getElementById('depositStatusContent');
    let depStr = localStorage.getItem('dep_status_' + currentLoggedInUser);
    
    if(!depStr) {
        container.innerHTML = "<div style='color:#9ca3af; font-size:12px;'>No recent deposit requests found.</div>";
    } else {
        let dep = JSON.parse(depStr);
        let now = Date.now();
        let diffMins = (now - dep.time) / (1000 * 60);
        
        let isSuccess = false;
        
        if(dep.approved === true) {
            isSuccess = true;
        }

        if(isSuccess) {
            container.innerHTML = `
                <div style="font-size:45px; color:var(--safe-green); margin-bottom:15px;"><i class="fa fa-check-circle"></i></div>
                <div style="font-size:20px; font-weight:900; color:var(--safe-green);">SUCCESS</div>
                <div style="font-size:16px; font-weight:bold; margin-top:10px;">Amount: ₹${dep.amount}</div>
                <div style="font-size:12px; color:#ffb3b9; margin-top:12px;">Your payment has been successfully verified and added to your game wallet.</div>
            `;
        } else if(diffMins < 5) {
            container.innerHTML = `
                <div style="font-size:45px; color:var(--warning-yellow); margin-bottom:15px;"><i class="fa fa-clock"></i></div>
                <div style="font-size:20px; font-weight:900; color:var(--warning-yellow);">Payment Verification</div>
                <div style="font-size:16px; font-weight:bold; margin-top:10px;">Amount: ₹${dep.amount}</div>
                <div style="font-size:12px; color:#ffb3b9; margin-top:12px;">It may take up to 5 minutes.</div>
            `;
        } else {
            container.innerHTML = `
                <div style="font-size:45px; color:#f59e0b; margin-bottom:15px;"><i class="fa fa-spinner fa-spin"></i></div>
                <div style="font-size:20px; font-weight:900; color:#f59e0b;">Pending</div>
                <div style="font-size:16px; font-weight:bold; margin-top:10px;">Amount: ₹${dep.amount}</div>
                <div style="font-size:12px; color:#ffb3b9; margin-top:12px;">Your payment verification is taking longer than expected. It is pending and will be credited soon.</div>
            `;
        }
    }
    document.getElementById('depositStatusModalContainer').style.display = 'flex';
}

function closeDepositStatusModal() {
    document.getElementById('depositStatusModalContainer').style.display = 'none';
}

// ================= WITHDRAW SYSTEM LOGIC =================
function openWithdrawModal() {
    document.getElementById('withdrawAvailBal').innerText = (depositBalance + winningBalance).toFixed(2);
    loadWithdrawUpi();
    document.getElementById('withdrawModalContainer').style.display = 'flex';
}
function closeWithdrawModal() {
    document.getElementById('withdrawModalContainer').style.display = 'none';
    document.getElementById('withdrawAmtInput').value = "";
    clearWithdrawSelection();
}
function saveWithdrawUpi() {
    let upi = document.getElementById('withdrawUpiInput').value.trim();
    if(!upi || !upi.includes('@')) {
        showCustomAlert("Invalid UPI ID", "Please enter a valid UPI ID (e.g. name@bank)", "error");
        return;
    }
    if(currentLoggedInUser) {
        localStorage.setItem('user_upi_' + currentLoggedInUser, upi);
        document.getElementById('savedUpiLabel').innerText = "Saved: " + upi;
        showCustomAlert("UPI ID Saved", "Your UPI ID has been saved successfully!", "success");
    }
}
function loadWithdrawUpi() {
    if(currentLoggedInUser) {
        let saved = localStorage.getItem('user_upi_' + currentLoggedInUser);
        if(saved) {
            document.getElementById('withdrawUpiInput').value = saved;
            document.getElementById('savedUpiLabel').innerText = "Saved: " + saved;
        } else {
            document.getElementById('withdrawUpiInput').value = "";
            document.getElementById('savedUpiLabel').innerText = "No UPI Saved";
        }
    }
}
function selectWithdrawAmt(amt, el) {
    clearWithdrawSelection();
    el.classList.add('selected');
    document.getElementById('withdrawAmtInput').value = amt;
}
function clearWithdrawSelection() {
    document.querySelectorAll('.w-amt-btn').forEach(btn => btn.classList.remove('selected'));
}
function processWithdrawalSubmit() {
    let amt = parseFloat(document.getElementById('withdrawAmtInput').value);
    let upi = document.getElementById('withdrawUpiInput').value.trim();
    
    if(!upi) { showCustomAlert("Missing UPI ID", "Please enter and save your UPI ID first.", "withdraw_error"); return; }
    if(isNaN(amt) || amt <= 0) { showCustomAlert("Invalid Amount", "Please enter a valid amount.", "withdraw_error"); return; }
    if(amt > (depositBalance + winningBalance)) { showCustomAlert("Low Balance", "You do not have enough balance to proceed.", "withdraw_error"); return; }
    
    if(amt > winningBalance) {
        showCustomAlert("Insufficient Winning Balance", "You can only withdraw winning money. Your current winning balance is ₹" + winningBalance.toFixed(2) + ". You need to win ₹" + (amt - winningBalance).toFixed(2) + " more to withdraw this amount.", "withdraw_error");
        return;
    }
    
    fetch('/api/submit-withdraw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            phone: currentLoggedInUser, 
            userId: currentLoggedInUserId, 
            upi: upi, 
            amount: amt, 
            date: new Date().toLocaleString() 
        })
    }).then(res => res.json()).then(data => {
        if(!data.success) {
            let heading = "Withdrawal Error";
            if (data.message.includes("minimum of ₹100")) heading = "Minimum Deposit Required";
            showCustomAlert(heading, data.message, "withdraw_error"); 
        } else {
            winningBalance -= amt;
            syncWalletUIElements();
            syncClientStats(); 
            
            document.getElementById('withdrawAvailBal').innerText = (depositBalance + winningBalance).toFixed(2);
            document.getElementById('withdrawAmtInput').value = "";
            clearWithdrawSelection();
            
            showCustomAlert("Success", data.message + "\n\nYour amount will be credited to your account within 24 hours.", "success");
        }
    }).catch(e => {
        showCustomAlert("Error", "Connection Error. Check your internet.", "error");
    });
}

function openWithdrawRecords() {
    let container = document.getElementById('withdrawRecordsList');
    container.innerHTML = `<div style="text-align:center; color:#9ca3af; padding: 20px;">Loading...</div>`;
    document.getElementById('withdrawRecordsModalContainer').style.display = 'flex';
    
    // CLOUDFLARE FIX
    fetch('/api/user-withdraws?t=' + Date.now() + '&phone=' + currentLoggedInUser)
    .then(res => res.json())
    .then(records => {
        container.innerHTML = "";
        if(records.length === 0) {
            container.innerHTML = `<div style="text-align:center; color:#9ca3af; padding: 20px;">No withdrawal records found.</div>`;
        } else {
            records.forEach(r => {
                let badgeColor = r.status === 'Success' ? 'var(--safe-green)' : (r.status === 'Rejected' ? 'var(--danger-red)' : 'var(--warning-yellow)');
                container.innerHTML += `
                    <div style="background: rgba(0,0,0,0.4); border: 1px solid #5e0a13; padding: 12px; border-radius: 8px; display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <div style="font-size:16px; font-weight:900; color:var(--warning-yellow);">₹${r.amount.toFixed(2)}</div>
                            <div style="font-size:10px; color:#ffb3b9; margin-top:4px;">${r.date}</div>
                            <div style="font-size:10px; color:#9ca3af; margin-top:2px; font-weight:bold;">To: ${r.upi}</div>
                        </div>
                        <div style="background: rgba(0,0,0,0.4); color: ${badgeColor}; padding: 5px 10px; border-radius: 4px; font-size: 11px; font-weight: bold; border: 1px solid ${badgeColor};">
                            ${r.status}
                        </div>
                    </div>
                `;
            });
        }
    }).catch(e => {
        container.innerHTML = `<div style="text-align:center; color:#9ca3af; padding: 20px;">Error loading records.</div>`;
    });
}
function closeWithdrawRecords() {
    document.getElementById('withdrawRecordsModalContainer').style.display = 'none';
}
// =======================================================

function openDepositDashboardModal() {
    document.getElementById('premiumDepositModalContainer').style.display = 'flex';
    closeScreenshotUploadSubPanel();
}
function closeDepositDashboardModal() {
    document.getElementById('premiumDepositModalContainer').style.display = 'none';
}

function selectCoinPackCard(element, amount, bonusPercent) {
    document.querySelectorAll('.coin-pack-card').forEach(card => card.classList.remove('selected'));
    element.classList.add('selected');
    
    selectedCoinsAmount = amount;
    selectedCoinsBonus = Math.floor((amount * bonusPercent) / 100);
    
    document.getElementById('summaryCashLabel').innerText = '₹' + amount;
    document.getElementById('summaryBonusLabel').innerText = '₹' + selectedCoinsBonus;
    document.getElementById('summaryTotalLabel').innerText = '₹' + (amount + selectedCoinsBonus);
    document.getElementById('addCashActionBtnNode').innerText = 'ADD CASH ₹' + amount;
}

function openScreenshotUploadSubPanel() {
    document.getElementById('targetRequiredPayLabel').innerText = selectedCoinsAmount;
    document.getElementById('screenshotSubModalPanel').style.display = 'flex';
}

function closeScreenshotUploadSubPanel() {
    document.getElementById('screenshotSubModalPanel').style.display = 'none';
    document.getElementById('depositProofFileSelector').value = "";
    document.getElementById('utrNumberInput').value = "";
    document.getElementById('dropzoneTextLabel').innerText = "Click to Upload Payment Screenshot";
    localScreenshotData = null;
}

// CUSTOM ANIMATED SUCCESS COPY FUNCTION
function copyAdminUpi() {
    let text = document.getElementById('adminUpiIdText').innerText;
    navigator.clipboard.writeText(text).then(() => {
        showCustomAlert("UPI ID Copied!", "The merchant UPI ID has been copied to your clipboard successfully. Please complete the payment.", "success");
    }).catch(err => {
        showCustomAlert("Copy Failed", "Failed to copy UPI ID. Please copy it manually.", "error");
    });
}

// UNIVERSAL BLOB FETCH METHOD TO FORCE DOWNLOAD IN ANY BROWSER
function downloadAdminQR() {
    const imageUrl = document.getElementById('qrImageNode').src;
    const fileName = 'Payment_QR_Code.jpg';
    
    fetch(imageUrl)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.blob();
        })
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
        })
        .catch(error => {
            console.error('Download failed, trying fallback method:', error);
            const link = document.createElement('a');
            let downloadUrl = imageUrl;
            if(imageUrl.includes('IMG_20260523_231432.jpg')) {
                downloadUrl = imageUrl.split('?')[0] + '?download=1';
            }
            link.href = downloadUrl;
            link.download = fileName;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
}

function openPaymentApp(app) {
    bypassUnload = true;
    
    if(app === 'paytm') {
        window.location.href = "https://p.paytm.me/xCTH";
    } else if(app === 'gpay') {
        window.location.href = "https://pay.google.com/intl/en_in/about/";
    } else if(app === 'phonepe') {
        window.location.href = "https://phon.pe/9je9smxr";
    }
    
    setTimeout(() => { bypassUnload = false; }, 3000);
}

// UI payload fix for Cloudflare: Auto resize image to bypass limits
function handleProofFileSelection(input) {
    if(input.files && input.files[0]) {
        let file = input.files[0];
        let name = file.name;
        if(name.length > 22) name = name.substring(0, 19) + '...';
        document.getElementById('dropzoneTextLabel').innerHTML = "<i class='fa fa-check-circle' style='color:var(--safe-green)'></i> " + name;

        let reader = new FileReader();
        reader.onload = function(e) {
            let img = new Image();
            img.onload = function() {
                let canvas = document.createElement('canvas');
                let max_size = 600;
                let width = img.width; let height = img.height;
                if (width > height) { if (width > max_size) { height *= max_size / width; width = max_size; } }
                else { if (height > max_size) { width *= max_size / height; height = max_size; } }
                canvas.width = width; canvas.height = height;
                let ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                localScreenshotData = canvas.toDataURL('image/jpeg', 0.6);
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

// CUSTOM ANIMATED VALIDATION AND SUCCESS ENGINE
function processFinalVerificationVerification() {
    let fileSelector = document.getElementById('depositProofFileSelector');
    if(!fileSelector.files || fileSelector.files.length === 0) {
        showCustomAlert("Verification Failed", "Please select and upload your payment screenshot first before submitting.", "error");
        return;
    }
    if(!localScreenshotData) {
        showCustomAlert("Processing Image", "Please wait a second for the image to process completely.", "error");
        return;
    }
    
    let utrInput = document.getElementById('utrNumberInput').value.trim();
    if (utrInput.length !== 12 || isNaN(utrInput) || !/^\d{12}$/.test(utrInput)) {
        showCustomAlert("Invalid UTR Number", "Please enter a valid 12-digit UTR or Reference Number from your payment receipt.", "error");
        return;
    }
    
    fetch('/api/submit-deposit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            submittedUTR: utrInput,
            submittedAmount: selectedCoinsAmount,
            uploadedScreenshotData: localScreenshotData,
            submittedUserId: currentLoggedInUserId,
            submittedPhone: currentLoggedInUser
        })
    }).then(res => res.json()).then(resData => {
        if(resData.success) {
            let depData = {
                amount: selectedCoinsAmount,
                time: Date.now(),
                startBalance: depositBalance + winningBalance,
                approved: false
            };
            localStorage.setItem('dep_status_' + currentLoggedInUser, JSON.stringify(depData));

            showCustomAlert("Verification Request Sent", "Your payment screenshot and UTR number are being verified. It may take 2 to 5 minutes. You can check the status in the Deposit Status above.", "success");
            
            closeScreenshotUploadSubPanel();
            closeDepositDashboardModal();
        }
    }).catch(err => {
        showCustomAlert("Connection Error", "Server Connection Sync Error. Please try again.", "error");
    });
}

function fetchAdminServerStatus() {
    // CLOUDFLARE FIX
    fetch('/api/server-status?t=' + Date.now()).then(res=>res.json()).then(data => {
        let btn = document.getElementById('adminServerToggleBtn');
        if(btn) {
            if(data.status === 'on') {
                btn.innerText = "ON";
                btn.style.background = "var(--safe-green)";
                btn.style.color = "#000";
            } else {
                btn.innerText = "OFF";
                btn.style.background = "var(--danger-red)";
                btn.style.color = "#fff";
            }
        }
    }).catch(e=>{});
}

function toggleAdminServerStatus() {
    let btn = document.getElementById('adminServerToggleBtn');
    let nextStatus = btn.innerText === "ON" ? "off" : "on";
    
    if(nextStatus === 'off') {
        if(!confirm("Kya aap sach me server OFF karna chahte hain? Iske baad aapko Termux se dubara start command dena padega!")) return;
    }

    fetch('/api/toggle-server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus })
    }).then(res=>res.json()).then(data => {
        if(data.success) {
            if(nextStatus === 'on') {
                btn.innerText = "ON";
                btn.style.background = "var(--safe-green)";
                btn.style.color = "#000";
                showCustomAlert("Server ON", "Server background me active rahega.", "success");
            } else {
                btn.innerText = "OFF";
                btn.style.background = "var(--danger-red)";
                btn.style.color = "#fff";
                showCustomAlert("Server OFF", "Server successfully stopped. Dubara on karne ke liye Termux check karein.", "success");
                setTimeout(() => window.location.reload(), 2000);
            }
        }
    }).catch(e => showCustomAlert("Error", "Server connection failed.", "error"));
}

function openAdminPanelPrompt() {
    document.getElementById('adminPasswordInput').value = "";
    document.getElementById('adminLoginModalContainer').style.display = 'flex';
}
function closeAdminLoginModal() {
    document.getElementById('adminLoginModalContainer').style.display = 'none';
}
function verifyAdminPassword() {
    let pwd = document.getElementById('adminPasswordInput').value;
    if(pwd === "admin123") {
        closeAdminLoginModal();
        openAdminDashboard();
    } else {
        showCustomAlert("Error", "Incorrect Admin Password!", "error");
    }
}

function adminFetchDepositData() {
    // CLOUDFLARE FIX
    fetch('/api/admin-deposit-data?t=' + Date.now())
    .then(res => res.json())
    .then(data => {
        let container = document.getElementById('adminDepositRequestsList');
        container.innerHTML = "";
        if(data.length === 0) {
            container.innerHTML = `<div style="text-align:center; color:#9ca3af; padding: 10px;">No pending deposits.</div>`;
        } else {
            data.forEach(req => {
                container.innerHTML += `
                    <div style="background: rgba(0,0,0,0.6); padding: 8px; border-radius: 4px; border: 1px solid #5e0a13; display:flex; flex-direction:column; gap:6px;" id="deposit-request-row-${req.id}">
                        <div style="display:flex; justify-content:space-between;">
                            <div style="color:var(--warning-yellow); font-weight:bold; font-size:13px;">₹${req.submittedAmount}</div>
                            <div style="color:#ffb3b9;">ID: ${req.submittedUserId}</div>
                        </div>
                        <div style="color:#4ade80;">UTR: ${req.submittedUTR}</div>
                        <div style="display:flex; gap:4px;">
                            <button onclick="viewAdminScreenshot('${req.id}')" style="flex:1; background:#374151; color:#fff; border:none; padding:6px; border-radius:4px; font-size:10px;">View Screenshot</button>
                            <button onclick="executeInstantAdminApproveAction('${req.id}', '${req.submittedPhone}', ${req.submittedAmount})" style="flex:1; background:var(--safe-green); color:#000; border:none; padding:6px; border-radius:4px; font-size:10px; font-weight:bold;">Approve</button>
                            <button onclick="executeInstantAdminRemoveAction('${req.id}')" style="flex:1; background:var(--danger-red); color:#fff; border:none; padding:6px; border-radius:4px; font-size:10px; font-weight:bold;">Remove</button>
                        </div>
                    </div>
                `;
            });
            window.currentAdminDeposits = data;
        }
    }).catch(e => console.error(e));
}

function viewAdminScreenshot(id) {
    let req = window.currentAdminDeposits.find(r => r.id === id);
    if(req && req.uploadedScreenshotData) {
        document.getElementById('adminScreenshotViewImg').src = req.uploadedScreenshotData;
        document.getElementById('adminScreenshotModal').style.display = 'flex';
    } else {
        showCustomAlert("Error", "No screenshot available.", "error");
    }
}

function executeInstantAdminApproveAction(reqId, targetPhone, amount) {
    let targetRowNode = document.getElementById("deposit-request-row-" + reqId);
    if(targetRowNode) {
        targetRowNode.style.opacity = '0.3';
        targetRowNode.style.pointerEvents = 'none';
        setTimeout(() => targetRowNode.remove(), 50);
    }
    fetch('/api/admin-approve-deposit', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: reqId, phone: targetPhone, amount: amount })
    }).then(res => res.json()).then(resData => {
        if(resData.success) {
            adminFetchUsersDetails(); 
        }
    });
}

function executeInstantAdminRemoveAction(reqId) {
    let targetRowNode = document.getElementById("deposit-request-row-" + reqId);
    if(targetRowNode) {
        targetRowNode.style.opacity = '0.3';
        targetRowNode.style.pointerEvents = 'none';
        setTimeout(() => targetRowNode.remove(), 50);
    }
    fetch('/api/delete-deposit', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: reqId }) 
    }).then(res => res.json());
}

function filterAdminUserListRows() {
    let searchBox = document.getElementById('adminUserSearchBoxField');
    if(searchBox) {
        let q = searchBox.value.trim().toLowerCase();
        let rows = document.querySelectorAll('.admin-user-row');
        rows.forEach(r => {
            let uid = r.getAttribute('data-userid') || '';
            if(uid.toLowerCase().includes(q)) {
                r.style.display = 'flex';
            } else {
                r.style.display = 'none';
            }
        });
    }
}

function openAdminDashboard() {
    document.getElementById('adminDashboardModalContainer').style.display = 'flex';
    adminFetchDepositData();
    adminFetchWithdrawals();
    adminFetchUsersDetails();
    adminFetchReferrals();
    // CLOUDFLARE FIX
    fetch('/api/admin-fly-mode?t=' + Date.now()).then(res=>res.json()).then(data => updateFlyButtonsUI(data.mode)).catch(e=>{});
    fetchAdminServerStatus();
    
    if(adminUsersInterval) clearInterval(adminUsersInterval);
    adminUsersInterval = setInterval(() => {
        adminFetchUsersDetails();
        adminFetchDepositData();
        adminFetchWithdrawals();
        adminFetchReferrals();
    }, 3000); 
}
function closeAdminDashboardModal() {
    document.getElementById('adminDashboardModalContainer').style.display = 'none';
    if(adminUsersInterval) clearInterval(adminUsersInterval);
}

function adminFetchUsersDetails() {
    // CLOUDFLARE FIX
    fetch('/api/admin-users-details?t=' + Date.now())
    .then(res => res.json())
    .then(data => {
        document.getElementById('adminStatOnline').innerText = data.onlineCount;
        document.getElementById('adminStatBetting').innerText = data.bettingCount;
        
        let tb = document.getElementById('adminStatTotalBet');
        if(tb) tb.innerText = "₹" + parseFloat(data.totalBettingAmount || 0).toFixed(2);

        let container = document.getElementById('adminUsersDetailsList');
        
        // Save current search if any
        let searchBox = document.getElementById('adminUserSearchBoxField');
        let currentSearch = searchBox ? searchBox.value.trim().toLowerCase() : '';

        // Inject Search box if not present
        if(!document.getElementById('adminUserSearchBoxField')) {
            container.innerHTML = `<input type="text" id="adminUserSearchBoxField" placeholder="🔍 Search by User ID instantly..." oninput="filterAdminUserListRows()" style="width:100%; padding:6px 10px; background:#000; border:1px solid #333; color:#fff; border-radius:4px; font-size:12px; outline:none; margin-bottom:10px;">
            <div id="actualUserRows"></div>`;
        }
        
        let rowsContainer = document.getElementById('actualUserRows');
        if(!rowsContainer) rowsContainer = container; // fallback
        
        rowsContainer.innerHTML = "";
        if(data.users.length === 0) {
            rowsContainer.innerHTML = `<div style="text-align:center; color:#9ca3af; padding: 10px;">No users found.</div>`;
        } else {
            data.users.forEach(u => {
                let onlineStatus = u.isOnline ? '<span style="color:#4ade80;">● Online</span>' : '<span style="color:#ef4444;">● Offline</span>';
                let displayStyle = (currentSearch !== '' && !(u.userId||'').toLowerCase().includes(currentSearch)) ? 'none' : 'flex';
                
                rowsContainer.innerHTML += `
                    <div class="admin-user-row" data-userid="${u.userId}" style="background: rgba(0,0,0,0.6); padding: 8px; border-radius: 4px; border: 1px solid #5e0a13; display:${displayStyle}; flex-direction:column; gap:4px; margin-bottom:4px;">
                        <div style="display:flex; justify-content:space-between;">
                            <span style="color:#fff; font-weight:bold;">ID: ${u.userId} ${onlineStatus}</span>
                            <span style="color:var(--warning-yellow); font-weight:bold;">Bal: ₹${u.balance.toFixed(2)}</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; font-size:10px; color:#ffb3b9;">
                            <span>Dep: ₹${u.totalDeposit}</span>
                            <span>With: ₹${u.totalWithdraw}</span>
                            <span>Bets: ${u.betCount}</span>
                        </div>
                        <div style="font-size:10px; color:#4ade80; margin-top:2px;">Current Active Bet: ₹${u.activeBet || 0}</div>
                    </div>
                `;
            });
        }
        
        // Reapply search text
        let newSearchBox = document.getElementById('adminUserSearchBoxField');
        if(newSearchBox && currentSearch !== '') {
            newSearchBox.value = currentSearch;
            // newSearchBox.focus();
        }
        
    }).catch(e => console.error(e));
}

function adminFetchReferrals() {
    // CLOUDFLARE FIX
    fetch('/api/admin-referrals?t=' + Date.now())
    .then(res => res.json())
    .then(data => {
        let container = document.getElementById('adminReferralsList');
        if(!container) return;
        container.innerHTML = "";
        if(data.length === 0) {
            container.innerHTML = `<div style="text-align:center; color:#9ca3af; padding: 10px;">No referral data found.</div>`;
        } else {
            data.forEach(r => {
                container.innerHTML += `
                    <div style="background: rgba(0,0,0,0.6); padding: 8px; border-radius: 4px; border: 1px solid #5e0a13; display:flex; flex-direction:column; gap:4px; margin-bottom:4px;">
                        <div style="display:flex; justify-content:space-between;">
                            <span style="color:#fff; font-weight:bold;">ID: ${r.userId}</span>
                            <span style="color:var(--safe-green); font-weight:bold;">Joined: ${r.referralCount} Users</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; font-size:10px; color:#ffb3b9;">
                            <span>Wallet: ₹${r.balance.toFixed(2)}</span>
                            <span>Total Dep: ₹${r.totalDeposit}</span>
                        </div>
                    </div>
                `;
            });
        }
    }).catch(e => console.error(e));
}

function adminFetchWithdrawals() {
    // CLOUDFLARE FIX
    fetch('/api/get-withdraws?t=' + Date.now())
    .then(res => res.json())
    .then(data => {
        let container = document.getElementById('adminWithdrawRequestsList');
        container.innerHTML = "";
        let pendingFound = false;
        data.forEach(req => {
            if(req.status !== "Pending") return;
            pendingFound = true;
            container.innerHTML += `
                <div style="background: rgba(0,0,0,0.6); padding: 8px; border-radius: 4px; border: 1px solid #5e0a13; display:flex; flex-direction:column; gap:4px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div style="color:var(--warning-yellow); font-weight:bold; font-size:13px;">₹${req.amount}</div>
                        <div style="color:#ffb3b9;">User ID: ${req.userId}</div>
                    </div>
                    <div style="color:#4ade80; font-size:10px;">UPI: ${req.upi}</div>
                    <div style="display:flex; gap:6px; margin-top:4px;">
                        <button onclick="adminApproveWithdrawal('${req.id}')" style="flex:1; background:var(--safe-green); color:#000; border:none; padding:6px; border-radius:4px; font-weight:bold; font-size:10px; cursor:pointer;">Approve</button>
                        <button onclick="adminRejectWithdrawal('${req.id}')" style="flex:1; background:var(--danger-red); color:#fff; border:none; padding:6px; border-radius:4px; font-weight:bold; font-size:10px; cursor:pointer;">Reject</button>
                    </div>
                </div>
            `;
        });
        if(!pendingFound) {
            container.innerHTML = `<div style="text-align:center; color:#9ca3af; padding: 10px;">No pending withdrawals.</div>`;
        }
    }).catch(e => console.error(e));
}

function adminApproveWithdrawal(id) {
    fetch('/api/approve-withdraw', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id: id, status: 'Success'}) }).then(() => adminFetchWithdrawals());
}
function adminRejectWithdrawal(id) {
    fetch('/api/approve-withdraw', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id: id, status: 'Rejected'}) }).then(() => adminFetchWithdrawals());
}

function adminManualAddCoins() {
    let targetId = document.getElementById('adminManualUserId').value.trim();
    let amountStr = document.getElementById('adminManualCoinAmount').value.trim();
    let amount = parseFloat(amountStr);

    if(!targetId || targetId.length !== 8) {
        showCustomAlert("Error", "❌ Please enter a valid 8-digit User ID.", "error");
        return;
    }
    if(isNaN(amount) || amount <= 0) {
        showCustomAlert("Error", "❌ Please enter a valid coin amount.", "error");
        return;
    }

    fetch('/api/admin-manual-credit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: targetId, amount: amount })
    }).then(res => res.json()).then(resData => {
        if (resData.success) {
            showCustomAlert("Success", "✅ Successfully added " + amount + " coins to User ID: " + targetId, "success");
            document.getElementById('adminManualUserId').value = "";
            document.getElementById('adminManualCoinAmount').value = "";
            adminFetchUsersDetails(); 
        } else {
            showCustomAlert("Error", "❌ User ID not found in database.", "error");
        }
    });
}

function setAdminFlyMode(mode) {
    fetch('/api/admin-fly-mode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: mode })
    }).then(res => res.json()).then(data => {
        if(data.success) {
            showCustomAlert("Success", "✅ Fly Mode Updated to: " + mode.toUpperCase() + "\nApply to the next round immediately.", "success");
            updateFlyButtonsUI(mode);
        }
    }).catch(e=>{});
}

function updateFlyButtonsUI(mode) {
    let lowBtn = document.getElementById('btnFlyLow');
    let medBtn = document.getElementById('btnFlyMedium');
    let highBtn = document.getElementById('btnFlyHigh');
    let crashBtn = document.getElementById('btnFlyCrash2x');
    let defBtn = document.getElementById('btnFlyDefault');
    if(lowBtn) {
        lowBtn.style.background = mode === 'low' ? 'var(--warning-yellow)' : '#374151';
        lowBtn.style.color = mode === 'low' ? '#000' : '#fff';
        medBtn.style.background = mode === 'medium' ? 'var(--warning-yellow)' : '#374151';
        medBtn.style.color = mode === 'medium' ? '#000' : '#fff';
        highBtn.style.background = mode === 'high' ? 'var(--warning-yellow)' : '#374151';
        highBtn.style.color = mode === 'high' ? '#000' : '#fff';
        crashBtn.style.background = mode === 'crash2x' ? 'var(--danger-red)' : '#374151';
        crashBtn.style.color = mode === 'crash2x' ? '#fff' : '#fff';
        defBtn.style.background = mode === 'default' ? 'var(--safe-green)' : '#374151';
        defBtn.style.color = mode === 'default' ? '#000' : '#fff';
    }
}

function triggerClientBootstrapper() {
    document.getElementById('appLauncherSplashPanel').style.display = 'none';
    document.getElementById('masterAppContainer').style.display = 'flex';
    syncWalletUIElements();
    populateHistoryRibbonTape();
    initializeAudioNodeContext();
}

function syncWalletUIElements() { 
    let total = depositBalance + winningBalance;
    document.getElementById('walletCoinsDynamic').innerText = total.toFixed(2); 
    if (currentLoggedInUser) {
        localStorage.setItem('user_dep_bal_' + currentLoggedInUser, depositBalance.toString());
        localStorage.setItem('user_win_bal_' + currentLoggedInUser, winningBalance.toString());
    }
}

function toggleAudioMuteState() {
    isAudioMuted = !isAudioMuted;
    let iconNode = document.getElementById('audioToggleBtnNode');
    if(isAudioMuted) {
        iconNode.innerHTML = `<i class="fa fa-volume-xmark" style="color:var(--danger-red)"></i>`;
        terminateJetEngineLoop();
    } else {
        iconNode.innerHTML = `<i class="fa fa-volume-high"></i>`;
        if(globalState.status === "FLYING") { startContinuousJetEngineLoop(); }
    }
}

let betPool = {
    1: { placed: false, amount: 0, cashed: false },
    2: { placed: false, amount: 0, cashed: false }
};
let globalState = { timer: 10, status: "BETTING", aviatorMult: 1.00 };
let clientLocalTrackMult = 1.00;
let clientLocalTrackTimer = 10.0;
let historyRecordArray = [1.62, 2.85, 1.05, 4.10, 1.20, 9.15, 1.35, 2.02, 1.12];

let audioCtx = null, soundLoopOsc = null, soundGainNode = null;
function initializeAudioNodeContext() { try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e){} }

function playEventAudioCue(type) {
    if(!audioCtx || isAudioMuted) return; let now = audioCtx.currentTime;
    if(type === 'ignition') { startContinuousJetEngineLoop(); }
    else if(type === 'success') {
        let osc = audioCtx.createOscillator(); let gain = audioCtx.createGain();
        osc.type = 'sine'; osc.frequency.setValueAtTime(950, now); gain.gain.setValueAtTime(0.55, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now+0.3); osc.connect(gain); gain.connect(audioCtx.destination);
        osc.start(); osc.stop(now+0.3);
    } else if(type === 'explosion') {
        terminateJetEngineLoop();
        let oscBurst = audioCtx.createOscillator(); let gainBurst = audioCtx.createGain(); let filter = audioCtx.createBiquadFilter();
        oscBurst.type = 'triangle'; oscBurst.frequency.setValueAtTime(280, now); oscBurst.frequency.exponentialRampToValueAtTime(40, now + 0.45); 
        filter.type = 'bandpass'; filter.frequency.setValueAtTime(190, now); filter.Q.setValueAtTime(3.0, now);
        gainBurst.gain.setValueAtTime(2.0, now); gainBurst.gain.exponentialRampToValueAtTime(0.001, now + 0.60);
        oscBurst.connect(filter); filter.connect(gainBurst); gainBurst.connect(audioCtx.destination);
        oscBurst.start(now); oscBurst.stop(now + 0.75);
    }
}

function startContinuousJetEngineLoop() {
    if(isAudioMuted || !audioCtx) return; terminateJetEngineLoop();
    let now = audioCtx.currentTime; soundLoopOsc = audioCtx.createOscillator(); soundGainNode = audioCtx.createGain();
    soundLoopOsc.type = 'sawtooth'; soundLoopOsc.frequency.setValueAtTime(125, now); soundGainNode.gain.setValueAtTime(0.35, now); 
    let filter = audioCtx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.setValueAtTime(420, now);
    soundLoopOsc.connect(filter); filter.connect(soundGainNode); soundGainNode.connect(audioCtx.destination); soundLoopOsc.start();
}
function adjustJetSoundFrequencyPitch(mult) {
    if(!soundLoopOsc || isAudioMuted) return;
    let m = Math.min(mult, 5.00);
    soundLoopOsc.frequency.setValueAtTime(Math.min(125 + (m * 55), 800), audioCtx.currentTime);
    soundGainNode.gain.setValueAtTime(Math.min(0.35 + (m * 0.025), 0.65), audioCtx.currentTime);
}
function terminateJetEngineLoop() { if(soundLoopOsc) { try { soundLoopOsc.stop(); soundLoopOsc.disconnect(); }catch(e){} soundLoopOsc = null; } }

// Lock state fetch for Cloudflare overload fix
let isSyncingState = false;
window.lastServerSyncTime = Date.now();
function processCentralServerSyncHandshake() {
    if(document.getElementById('masterAppContainer').style.display === 'none') return;
    
    // Anti-Deadlock for Cloudflare silent connection drops (Frees the queue if hung over 2.5s)
    if(isSyncingState) {
        if(Date.now() - window.lastServerSyncTime > 2500) {
            isSyncingState = false;
        } else {
            return;
        }
    }
    isSyncingState = true;

    // CLOUDFLARE FIX: Add AbortController for hanging requests so browser connection limit isn't reached
    let abortCtrl = new AbortController();
    let fetchTimeout = setTimeout(() => abortCtrl.abort(), 2000);

    // CLOUDFLARE FIX: Add Cache Busting ?cf_byp=Date.now() and strict no-cache headers
    fetch('/api/game-state?cf_byp=' + Date.now(), { 
        headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate', 'Pragma': 'no-cache', 'Expires': '0' },
        signal: abortCtrl.signal
    })
    .then(res => { clearTimeout(fetchTimeout); return res.json(); })
    .then(data => {
        isSyncingState = false;
        window.lastServerSyncTime = Date.now();
        let pastStatus = globalState.status; globalState = data;
        
        // PERSISTENT HISTORY SYNC
        if (data.history && JSON.stringify(historyRecordArray) !== JSON.stringify(data.history)) {
            historyRecordArray = data.history;
            populateHistoryRibbonTape();
        }

        if (data.remoteCredits && data.remoteCredits[currentLoggedInUser]) {
            let credits = data.remoteCredits[currentLoggedInUser];
            if (!window.processedCreditIds) window.processedCreditIds = {};
            
            let hasNew = false;
            credits.forEach(c => {
                if (!window.processedCreditIds[c.id]) {
                    window.processedCreditIds[c.id] = true;
                    depositBalance += c.amount;
                    hasNew = true;
                }
            });

            if (hasNew) {
                syncWalletUIElements();
                syncClientStats(); 
                
                let depStr = localStorage.getItem('dep_status_' + currentLoggedInUser);
                if(depStr) {
                    let dep = JSON.parse(depStr);
                    dep.approved = true;
                    localStorage.setItem('dep_status_' + currentLoggedInUser, JSON.stringify(dep));
                }
            }
        }

        if(pastStatus !== globalState.status) {
            if(globalState.status === "FLYING") {
                playEventAudioCue('ignition'); 
                clientLocalTrackMult = 1.00; 
                takeoffFrameTickCount = 0; 
                crashFragmentsArray = [];
            }
            if(globalState.status === "CRASHED") {
                playEventAudioCue('explosion'); 
                enforceCrashLockdownSequence();
            }
            if(globalState.status === "BETTING") {
                clientLocalTrackTimer = globalState.timer; // Reset local timer engine
                clearRoundContextAndResetButtons(); generateMockActivePlayerRowsData(); evaluateAutoBetTriggerPlacements();
            }
        } else if (globalState.status === "BETTING") {
            if (Math.abs(clientLocalTrackTimer - globalState.timer) > 1.5) {
                clientLocalTrackTimer = globalState.timer;
            }
        }
    }).catch(()=>{ 
        clearTimeout(fetchTimeout); 
        isSyncingState = false; 
    });
}
// 800ms network polling, completely separated from visual animations!
setInterval(processCentralServerSyncHandshake, 800);

function populateHistoryRibbonTape() {
    let container = document.getElementById('historyRibbonNodeTape'); if(!container) return; container.innerHTML = "";
    historyRecordArray.slice(0, 10).forEach(val => {
        let styleClass = (val <= 2.00) ? "pill-under-two" : "pill-above-two";
        container.innerHTML += `<div class="hist-pill ${styleClass}">${parseFloat(val).toFixed(2)}x</div>`;
    });
}

function generateMockActivePlayerRowsData() {
    let now = Date.now();
    if(persistentPlayersPool.length === 0 || now - lastPoolUpdateTime > 300000) {
        persistentPlayersPool = [];
        let poolSize = Math.floor(Math.random() * 80) + 120; 
        for(let i=0; i<poolSize; i++) {
            persistentPlayersPool.push(getDynamic8CharName());
        }
        lastPoolUpdateTime = now;
    } else {
        let leaveCount = Math.floor(Math.random() * 10);
        for(let i=0; i<leaveCount; i++) {
            if(persistentPlayersPool.length > 50) persistentPlayersPool.shift();
        }
        let joinCount = Math.floor(Math.random() * 10);
        for(let i=0; i<joinCount; i++) {
            persistentPlayersPool.push(getDynamic8CharName());
        }
    }

    generatedActiveRoundBetsData = [];
    let randomPlayersCount = Math.floor(Math.random() * 50) + 50; 
    let shuffledPool = [...persistentPlayersPool].sort(() => Math.random() - 0.5);
    let activeBettors = shuffledPool.slice(0, randomPlayersCount);

    for(let i = 0; i < activeBettors.length; i++) {
        let name = activeBettors[i];
        let stake = [10, 20, 50, 100, 200, 500, 1000][Math.floor(Math.random() * 7)];
        let target = parseFloat((Math.random() * 3.5 + 1.05).toFixed(2));
        generatedActiveRoundBetsData.push({ name: name, stake: stake, targetMult: target, cashed: false });
    }
    generatedActiveRoundBetsData.sort(() => Math.random() - 0.5);
    renderLiveBetsLists();
}

function renderLiveBetsLists() {
    let sidebarList = document.getElementById('sidebarLiveBetsList');
    let bottomList = document.getElementById('bottomLiveBetsList');
    
    let htmlArr = []; let bottomHtmlArr = [];

    generatedActiveRoundBetsData.forEach(player => {
        if(player.cashed) {
            let winSum = Math.floor(player.stake * player.targetMult);
            htmlArr.push(`<div class="feed-row cashed-out"><div class="user-profile-meta"><div class="user-avatar-icon"><i class="fa fa-user"></i></div> <span>${player.name}</span></div><div style="color:#9ca3af;">₹${player.stake}</div><div style="display:flex; align-items:center; gap:6px;"><span class="badge-mult" style="background:var(--safe-green); color:#000;">${player.targetMult.toFixed(2)}x</span></div></div>`);
            bottomHtmlArr.push(`<div class="feed-row cashed-out"><div class="user-profile-meta" style="flex:2"><div class="user-avatar-icon"><i class="fa fa-check" style="color:var(--safe-green)"></i></div> <span>${player.name}</span></div><div style="flex:1; text-align:center; color:#9ca3af;">₹${player.stake}</div><div style="flex:1; text-align:center;"><span class="badge-mult" style="background:var(--safe-green); color:#000;">${player.targetMult.toFixed(2)}x</span></div><div style="flex:1; text-align:right; color:var(--safe-green); font-weight:bold;">₹${winSum}</div></div>`);
        } else {
            htmlArr.push(`<div class="feed-row"><div class="user-profile-meta"><div class="user-avatar-icon"><i class="fa fa-user"></i></div> <span>${player.name}</span></div><div style="color:#9ca3af;">₹${player.stake}</div><div><span class="badge-mult">--</span></div></div>`);
            bottomHtmlArr.push(`<div class="feed-row"><div class="user-profile-meta" style="flex:2"><div class="user-avatar-icon"><i class="fa fa-user"></i></div> <span>${player.name}</span></div><div style="flex:1; text-align:center; color:#9ca3af;">₹${player.stake}</div><div style="flex:1; text-align:center;"><span class="badge-mult">--</span></div><div style="flex:1; text-align:right; color:#9ca3af;">--</div></div>`);
        }
    });

    if(sidebarList) sidebarList.innerHTML = htmlArr.join('');
    if(bottomList) bottomList.innerHTML = bottomHtmlArr.join('');
}

function updateMockBetsListTransitions(currentMult) {
    let changeFlag = false;
    generatedActiveRoundBetsData.forEach(player => {
        if(!player.cashed && currentMult >= player.targetMult) { player.cashed = true; changeFlag = true; }
    });
    
    let now = Date.now();
    if(changeFlag && (now - lastRenderTime > 200)) { 
        renderLiveBetsLists();
        lastRenderTime = now;
    }
}

// -------------------------------------------------------------
// ADVANCED INDEPENDENT PREDICTIVE PHYSICS ENGINE FOR NO LAG
// -------------------------------------------------------------
function executeContinuousFrameAnimations() {
    requestAnimationFrame(executeContinuousFrameAnimations);
    
    if (!window.lastAnimFrameTime) window.lastAnimFrameTime = performance.now();
    let nowTime = performance.now();
    let delta = nowTime - window.lastAnimFrameTime;
    window.lastAnimFrameTime = nowTime;
    
    let timeToSimulate = delta;
    
    // Handle tab minimized or heavy lag seamlessly
    if (timeToSimulate > 2000) {
        timeToSimulate = 0; 
        if(globalState.status === "FLYING") {
            clientLocalTrackMult = globalState.aviatorMult;
        }
    }

    let viewTextHUD = document.getElementById('canvasTextDisplay'); if(!viewTextHUD) return;
    let mainBoxNode = document.getElementById('arenaBoxContainer');
    
    if(globalState.status === "BETTING") {
        window.highestSeenMult = 1.00; // Reset for new round
        clientLocalTrackMult = 1.00;
        
        clientLocalTrackTimer -= delta / 1000.0;
        if (clientLocalTrackTimer < 0) clientLocalTrackTimer = 0;
        
        if(mainBoxNode) mainBoxNode.style.transform = "none";
        viewTextHUD.style.color = "var(--warning-yellow)";
        viewTextHUD.style.fontSize = "24px"; viewTextHUD.style.transform = "none";
        
        let displayTimer = Math.ceil(clientLocalTrackTimer);
        if (displayTimer < 0) displayTimer = 0;
        viewTextHUD.innerText = "WAITING FOR NEXT ROUND\n" + displayTimer + "s";
        drawVectorGraphicsWorkspaceCanvas(1.00);
    }
    else if(globalState.status === "FLYING") {
        viewTextHUD.style.fontSize = "72px"; viewTextHUD.style.color = "#ffffff";
        
        let tempMult = clientLocalTrackMult;

        // 1. Advance Prediction locally smoothly (TIME BASED - NO STUTTER)
        // CLOUDFLARE FIX: Network lag restriction removed. Local engine handles smooth flying entirely!
        while (timeToSimulate > 0) {
            let stepDelta = Math.min(timeToSimulate, 55);
            let timeRatio = stepDelta / 55.0;
            tempMult += (0.0085 + tempMult * 0.0048) * timeRatio;
            timeToSimulate -= stepDelta;
        }

        // 2. Smooth Network Catch-up (Lerp to exact server multiplier if drifted)
        if (globalState.aviatorMult > tempMult) {
            tempMult += (globalState.aviatorMult - tempMult) * 0.05;
        }

        // 3. Absolute ceiling: never fly past the exact predetermined server crash point
        if (globalState.crashPoint && tempMult >= globalState.crashPoint) {
            tempMult = globalState.crashPoint;
        }

        // 4. FORWARD ONLY Lock (Fixes "plane atak raha hai")
        if (!window.highestSeenMult) window.highestSeenMult = 1.00;
        if (tempMult < window.highestSeenMult) {
            tempMult = window.highestSeenMult;
        } else {
            window.highestSeenMult = tempMult;
        }

        clientLocalTrackMult = tempMult;

        viewTextHUD.innerText = clientLocalTrackMult.toFixed(2) + "x";
        
        let textScale = 1.0 + Math.min((clientLocalTrackMult - 1) * 0.03, 0.15);
        viewTextHUD.style.transform = `scale(${textScale})`;
        
        drawVectorGraphicsWorkspaceCanvas(clientLocalTrackMult);
        synchronizeInteractiveControlPanelsAndAutoCashout();
        updateMockBetsListTransitions(clientLocalTrackMult);
        adjustJetSoundFrequencyPitch(clientLocalTrackMult);
    }
    else if(globalState.status === "CRASHED") {
        // Visual catch-up: If plane crashed on server but local animation was lagging
        let catchUpNeeded = (globalState.crashPoint - clientLocalTrackMult);
        
        if (catchUpNeeded > 0.02) {
            // Rapidly & smoothly fast-forward the plane to the exact crash point
            clientLocalTrackMult += catchUpNeeded * 0.35;
            viewTextHUD.innerText = clientLocalTrackMult.toFixed(2) + "x";
            
            let textScale = 1.0 + Math.min((clientLocalTrackMult - 1) * 0.03, 0.15);
            viewTextHUD.style.transform = `scale(${textScale})`;
            
            drawVectorGraphicsWorkspaceCanvas(clientLocalTrackMult);
        } else {
            // Once properly caught up visually, trigger the final explosion at the EXACT value
            clientLocalTrackMult = globalState.crashPoint;
            window.highestSeenMult = globalState.crashPoint;
            
            if(mainBoxNode) mainBoxNode.style.transform = "none";
            viewTextHUD.style.fontSize = "36px"; viewTextHUD.style.color = "var(--danger-red)"; viewTextHUD.style.transform = "none";
            viewTextHUD.innerText = "FLEW AWAY\n@" + globalState.crashPoint.toFixed(2) + "x";
            
            drawVectorGraphicsWorkspaceCanvas(-1);
        }
    }
}
requestAnimationFrame(executeContinuousFrameAnimations);

function drawVectorGraphicsWorkspaceCanvas(mult) {
    let canvas = document.getElementById('aviatorCanvas'); if(!canvas) return;
    let ctx = canvas.getContext('2d');
    let baseDpr = window.devicePixelRatio || 1;
    let dpr = 1;
    if(currentGraphicsQuality === 'high') dpr = baseDpr;
    else if(currentGraphicsQuality === 'medium') dpr = Math.min(baseDpr, 1.5);
    else if(currentGraphicsQuality === 'low') dpr = Math.min(baseDpr, 1.0);
    else dpr = Math.min(baseDpr, 0.5); 

    let rectWidth = canvas.parentElement.clientWidth; let rectHeight = canvas.parentElement.clientHeight;
    
    if (canvas.width !== rectWidth * dpr || canvas.height !== rectHeight * dpr) {
        canvas.width = rectWidth * dpr; canvas.height = rectHeight * dpr;
        canvas.style.width = rectWidth + "px"; canvas.style.height = rectHeight + "px";
    }
    ctx.save(); ctx.scale(dpr, dpr);
    let w = rectWidth, h = rectHeight;
    
    let bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, "#050608"); bgGrad.addColorStop(0.6, "#0d0e12"); bgGrad.addColorStop(1, "#1c0606"); 
    ctx.fillStyle = bgGrad; ctx.fillRect(0, 0, w, h);
    
    ctx.strokeStyle = "rgba(255, 255, 255, 0.02)"; ctx.lineWidth = 1.0;
    for (let index = 0; index <= 30; index++) {
        let theta = (Math.PI / 2) * (index / 30);
        ctx.beginPath(); ctx.moveTo(0, h); ctx.lineTo(w * Math.cos(theta), h - (h * Math.sin(theta))); ctx.stroke();
    }

    if(mult === -1) { renderActiveFragmentsBlastCore(ctx, w, h); ctx.restore(); return; }
    if(globalState.status === "FLYING") { takeoffFrameTickCount++; } else { takeoffFrameTickCount = 0; }
    
    let takeoffProgress = Math.min(takeoffFrameTickCount / 65, 1.0); 
    let growthFactor = Math.min((mult - 1) / 5.0, 0.92);
    let startX = w * 0.08, startY = h * 0.90;
    let planeX = startX + ((startX + (w * 0.78 * growthFactor)) - startX) * takeoffProgress;
    let planeY = startY + ((startY - (h * 0.74 * Math.pow(growthFactor, 1.25))) - startY) * takeoffProgress;

    if(globalState.status === "BETTING") { planeX = startX; planeY = startY; }

    if(globalState.status === "FLYING" && takeoffFrameTickCount > 0) {
        let areaFill = ctx.createLinearGradient(startX, planeY, planeX, h);
        areaFill.addColorStop(0, "rgba(224, 36, 36, 0.0)"); areaFill.addColorStop(1, "rgba(224, 36, 36, 0.18)");
        ctx.fillStyle = areaFill; 
        
        ctx.beginPath(); 
        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(startX + (planeX - startX) * 0.5, startY, planeX, planeY);
        ctx.lineTo(planeX, h); 
        ctx.lineTo(startX, h); 
        ctx.closePath(); 
        ctx.fill();

        ctx.strokeStyle = "#ff0000"; 
        ctx.lineWidth = 4.0; 
        ctx.lineCap = "round"; 
        ctx.lineJoin = "round"; 
        ctx.shadowBlur = 0;
        
        ctx.beginPath(); 
        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(startX + (planeX - startX) * 0.5, startY, planeX, planeY);
        ctx.stroke();

        generateAndInjectEngineStreamParticles(planeX, planeY); processAndRenderEngineParticles(ctx);
    }
    globalState.lastPlaneX = planeX; globalState.lastPlaneY = planeY;

    ctx.save(); ctx.translate(planeX, planeY); ctx.rotate(-0.12); ctx.scale(w < 600 ? 0.75 : 1.0, w < 600 ? 0.75 : 1.0);
    let fuselageGradients = ctx.createLinearGradient(-35, 0, 35, 0);
    fuselageGradients.addColorStop(0, "#6a0808"); fuselageGradients.addColorStop(0.5, "#ff1a1a"); fuselageGradients.addColorStop(1, "#e60000"); 
    ctx.fillStyle = fuselageGradients; ctx.beginPath(); ctx.moveTo(42, 0); ctx.quadraticCurveTo(22, -11, -8, -9); ctx.lineTo(-34, -4); ctx.lineTo(-34, 4); ctx.quadraticCurveTo(-8, 9, 22, 11); ctx.lineTo(42, 0); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = "#ffffff"; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = "#3a414f"; ctx.beginPath(); ctx.moveTo(28, -3); ctx.quadraticCurveTo(20, -11, 10, -7); ctx.lineTo(14, -2); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#990000"; ctx.beginPath(); ctx.moveTo(6, -4); ctx.lineTo(-14, -36); ctx.lineTo(-24, -36); ctx.lineTo(-10, -4); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(6, 4); ctx.lineTo(-14, 36); ctx.lineTo(-24, 36); ctx.lineTo(-10, 4); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#800000"; ctx.beginPath(); ctx.moveTo(-18, -3); ctx.lineTo(-32, -18); ctx.lineTo(-26, -18); ctx.lineTo(-12, -3); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#ffaa00"; ctx.beginPath(); ctx.arc(-34, 0, 4.5, 0, Math.PI * 2); ctx.fill();
    ctx.restore(); ctx.restore();
}

function generateAndInjectEngineStreamParticles(px, py) {
    if (currentGraphicsQuality === 'verylow' || currentGraphicsQuality === 'low') return;
    let threshold = currentGraphicsQuality === 'high' ? 0.2 : 0.4;
    if (Math.random() > threshold) {
        engineParticlesArray.push({
            x: px - 35, y: py + (Math.random() - 0.5) * 3,
            vx: -4.0 - Math.random() * 2, vy: (Math.random() - 0.5) * 1.0,
            size: 2.5 + Math.random() * 2.0, life: 1.0, decay: 0.08 + Math.random() * 0.02,
            color: Math.random() > 0.5 ? "#8B0000" : "#660000"
        });
    }
}
function processAndRenderEngineParticles(ctx) {
    for (let i = engineParticlesArray.length - 1; i >= 0; i--) {
        let p = engineParticlesArray[i]; p.x += p.vx; p.y += p.vy; p.life -= p.decay;
        if (p.life <= 0) { engineParticlesArray.splice(i, 1); continue; }
        ctx.save(); ctx.fillStyle = p.color; ctx.globalAlpha = p.life; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    }
}
function renderActiveFragmentsBlastCore(ctx, w, h) {
    if(crashFragmentsArray.length === 0) {
        let cx = globalState.lastPlaneX || w*0.5, cy = globalState.lastPlaneY || h*0.4;
        let pCount = currentGraphicsQuality === 'verylow' ? 3 : (currentGraphicsQuality === 'low' ? 10 : (currentGraphicsQuality === 'medium' ? 30 : 60));
        for(let i=0; i<pCount; i++) {
            let angle = Math.random() * Math.PI * 2, speed = 3.0 + Math.random() * 6;
            crashFragmentsArray.push({ x: cx, y: cy, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, size: 6 + Math.random() * 8, life: 1.0, decay: 0.03 + Math.random()*0.02, color: ["#8B0000", "#ff0000", "#cc0000"][Math.floor(Math.random()*3)] });
        }
    }
    for (let i = crashFragmentsArray.length - 1; i >= 0; i--) {
        let p = crashFragmentsArray[i]; p.x += p.vx; p.y += p.vy; p.life -= p.decay;
        if(p.life <= 0) { crashFragmentsArray.splice(i, 1); continue; }
        ctx.save(); ctx.globalAlpha = Math.max(p.life, 0.3); ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    }
}

function modifyInputBetValue(id, value) {
    let field = document.getElementById('stakeAmountField' + id); let explicitParsedVal = parseInt(field.value);
    if(explicitParsedVal + value >= 10) {
        field.value = explicitParsedVal + value; let actionBtn = document.getElementById('btnBetActionTrigger' + id);
        if(!actionBtn.classList.contains('action-waiting') && !actionBtn.classList.contains('action-cashout')) {
            actionBtn.innerHTML = `<div>BET</div><div style="font-size:11px; font-weight:normal; opacity:0.85;">₹${field.value}.00</div>`;
        }
    } else {
        field.value = 10;
        let actionBtn = document.getElementById('btnBetActionTrigger' + id);
        if(!actionBtn.classList.contains('action-waiting') && !actionBtn.classList.contains('action-cashout')) {
            actionBtn.innerHTML = `<div>BET</div><div style="font-size:11px; font-weight:normal; opacity:0.85;">₹10.00</div>`;
        }
    }
}

function evaluateAutoBetTriggerPlacements() {
    [1, 2].forEach(id => {
        let isAutoBetBoxChecked = document.getElementById('autoBetToggleState' + id).checked;
        if(isAutoBetBoxChecked && !betPool[id].placed) {
            let structuredAmtVal = parseInt(document.getElementById('stakeAmountField' + id).value);
            if(structuredAmtVal < 10 || isNaN(structuredAmtVal)) {
                structuredAmtVal = 10;
                document.getElementById('stakeAmountField' + id).value = 10;
            }
            if((depositBalance + winningBalance) >= structuredAmtVal) {
                if(depositBalance >= structuredAmtVal) { depositBalance -= structuredAmtVal; } 
                else { let rem = structuredAmtVal - depositBalance; depositBalance = 0; winningBalance -= rem; }
                syncWalletUIElements();
                
                betPool[id].placed = true; betPool[id].amount = structuredAmtVal; betPool[id].cashed = false;
                let btnNode = document.getElementById('btnBetActionTrigger' + id);
                btnNode.className = "bet-action-btn action-cashout"; 
                btnNode.innerHTML = "<div>CANCEL</div><div style='font-size:11px;'>Refund Bet</div>";
                
                localBetCount++;
                if(currentLoggedInUser) localStorage.setItem('user_bet_count_' + currentLoggedInUser, localBetCount.toString());
                syncClientStats();
            }
        }
    });
}

function submitClientBetPlacement(id) {
    let node = betPool[id]; let targetAmtValue = parseInt(document.getElementById('stakeAmountField' + id).value);
    
    if(targetAmtValue < 10 || isNaN(targetAmtValue)) {
        showCustomAlert("Invalid Bet Amount", "The minimum bet amount is ₹10.", "error");
        document.getElementById('stakeAmountField' + id).value = 10;
        return;
    }

    let btnElement = document.getElementById('btnBetActionTrigger' + id);
    if(globalState.status === "BETTING" && !node.placed) {
        if((depositBalance + winningBalance) < targetAmtValue) return; 
        
        if(depositBalance >= targetAmtValue) { depositBalance -= targetAmtValue; } 
        else { let rem = targetAmtValue - depositBalance; depositBalance = 0; winningBalance -= rem; }
        syncWalletUIElements();
        
        node.placed = true; node.amount = targetAmtValue;
        btnElement.className = "bet-action-btn action-cashout"; 
        btnElement.innerHTML = "<div>CANCEL</div><div style='font-size:11px;'>Refund Bet</div>";
        
        localBetCount++;
        localStorage.setItem('user_bet_count_' + currentLoggedInUser, localBetCount.toString());
        syncClientStats();
    } else if(globalState.status === "BETTING" && node.placed) {
        depositBalance += node.amount; syncWalletUIElements();
        node.placed = false; node.amount = 0;
        btnElement.className = "bet-action-btn"; 
        let fallbackAmt = document.getElementById('stakeAmountField' + id).value;
        btnElement.innerHTML = `<div>BET</div><div style='font-size:11px;'>₹${fallbackAmt}.00</div>`;
        syncClientStats();
    } else if(globalState.status === "FLYING" && node.placed && !node.cashed) {
        executeClientCashoutClaimSequence(id);
    }
}

// FIX 1: ZERO-LATENCY CASHOUT (Uses exact client multiplier)
function executeClientCashoutClaimSequence(id) {
    let node = betPool[id]; let btnElement = document.getElementById('btnBetActionTrigger' + id);
    if(node.placed && !node.cashed) {
        node.cashed = true; playEventAudioCue('success');
        
        // BUG FIX: Accurate Winnings based on what user actually sees on screen, ignoring network lag!
        let accurateWinningsPayoutSum = Math.floor(node.amount * clientLocalTrackMult);
        
        winningBalance += accurateWinningsPayoutSum; syncWalletUIElements();
        syncClientStats(); // Instantly syncs the new exact balance to server database
        btnElement.className = "bet-action-btn action-locked"; btnElement.innerHTML = `<div>CASHED</div><div style='font-size:11px;'>+₹${accurateWinningsPayoutSum}</div>`;
    }
}

function synchronizeInteractiveControlPanelsAndAutoCashout() {
    [1, 2].forEach(id => {
        let node = betPool[id]; let btnElement = document.getElementById('btnBetActionTrigger' + id);
        if(node.placed && !node.cashed) {
            btnElement.className = "bet-action-btn action-cashout";
            btnElement.innerHTML = `<div>CASHOUT</div><div style='font-size:12px;'>₹${Math.floor(node.amount * clientLocalTrackMult)}</div>`;
            let isAutoCashChecked = document.getElementById('autoCashToggleState' + id).checked;
            let targetAutoCashLimit = parseFloat(document.getElementById('autoCashOutVal' + id).value);
            if(isAutoCashChecked && !isNaN(targetAutoCashLimit) && clientLocalTrackMult >= targetAutoCashLimit) {
                executeClientCashoutClaimSequence(id);
            }
        }
    });
}

function enforceCrashLockdownSequence() {
    [1, 2].forEach(id => { let btn = document.getElementById('btnBetActionTrigger' + id); if(btn) { btn.className = "bet-action-btn action-locked"; btn.innerHTML = "<div>ENDED</div>"; } });
}

function clearRoundContextAndResetButtons() {
    [1, 2].forEach(id => {
        betPool[id] = { placed: false, amount: 0, cashed: false };
        let btn = document.getElementById('btnBetActionTrigger' + id); let fallbackAmt = document.getElementById('stakeAmountField' + id).value;
        if(btn) { btn.className = "bet-action-btn"; btn.innerHTML = `<div>BET</div><div style='font-size:11px;'>₹${fallbackAmt}.00</div>`; }
    });
    syncClientStats();
}

window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    var confirmExit = confirm("Are you sure you want to exit the game?");
    if (confirmExit) {
        bypassUnload = true; 
        window.history.back(); 
    } else {
        window.history.pushState(null, null, window.location.href);
    }
};

window.addEventListener("beforeunload", function (e) {
    if (bypassUnload) return; 
    var confirmationMessage = "Are you sure you want to exit the game?";
    e.preventDefault();
    e.returnValue = confirmationMessage;
    return confirmationMessage;
});

</script>

<script data-cfasync="false">
(function(){
const _raf = window.requestAnimationFrame;
window.requestAnimationFrame=function(cb){
 return _raf((t)=>setTimeout(()=>cb(t),0));
};
window.addEventListener("load",()=>{
 document.body.style.transform="translateZ(0)";
});
})();
</script>

</body>
</html>
EOF

cat > server.js <<'EOF'
const fs = require('fs');
const http = require('http');
const path = require('path');

let serverSystemStateObj = { timer: 10, status: "BETTING", aviatorMult: 1.00, crashPoint: 2.35 };
let ipToPhonesMap = {}; 

let remoteCredits = {};

// --- PERSISTENT DB & SETTINGS LOGIC START ---
let usersDatabase = {};
let serverHistory = [1.62, 2.85, 1.05, 4.10, 1.20, 9.15, 1.35, 2.02, 1.12]; // Persistent History Array
const DB_FILE = 'users_db.json';
const SETTINGS_FILE = 'server_settings.json';
const DEPOSITS_FILE = 'server_deposits.json';
const WITHDRAWS_FILE = 'server_withdraws.json';
const CREDITS_FILE = 'credits_db.json';
const SERVER_STATE_FILE = 'server_state.txt';

if (!fs.existsSync(SERVER_STATE_FILE)) fs.writeFileSync(SERVER_STATE_FILE, 'on');

let currentFlyMode = "default";
let crash2xFlightCounter = 0;
let crash2xTargetBigFlight = Math.floor(Math.random() * 3) + 11; 

let depositRequests = [];
let withdrawRequests = [];

try {
    if(fs.existsSync(DB_FILE)) {
        let fileData = fs.readFileSync(DB_FILE, 'utf-8');
        if(fileData.trim() !== '') usersDatabase = JSON.parse(fileData);
    }
    if(fs.existsSync(SETTINGS_FILE)) {
        let settings = JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf-8'));
        if(settings.currentFlyMode) currentFlyMode = settings.currentFlyMode;
        if(settings.serverHistory) serverHistory = settings.serverHistory;
    }
    if(fs.existsSync(DEPOSITS_FILE)) depositRequests = JSON.parse(fs.readFileSync(DEPOSITS_FILE, 'utf-8'));
    if(fs.existsSync(WITHDRAWS_FILE)) withdrawRequests = JSON.parse(fs.readFileSync(WITHDRAWS_FILE, 'utf-8'));
    if(fs.existsSync(CREDITS_FILE)) remoteCredits = JSON.parse(fs.readFileSync(CREDITS_FILE, 'utf-8'));
} catch(err) {
    console.error("DB Load Error:", err);
}

// ASYNC DEBOUNCED SAVING (Prevents Node Event Loop Blocking - SUPER FAST NOW)
let pendingSaves = { db: false, settings: false, deposits: false, withdraws: false, credits: false };

function saveDB() { pendingSaves.db = true; }
function saveSettings() { pendingSaves.settings = true; }
function saveDeposits() { pendingSaves.deposits = true; }
function saveWithdraws() { pendingSaves.withdraws = true; }
function saveCredits() { pendingSaves.credits = true; }

setInterval(() => {
    if(pendingSaves.db) { pendingSaves.db = false; fs.writeFile(DB_FILE + '.tmp', JSON.stringify(usersDatabase, null, 2), () => { fs.rename(DB_FILE + '.tmp', DB_FILE, ()=>{}); }); }
    if(pendingSaves.settings) { pendingSaves.settings = false; fs.writeFile(SETTINGS_FILE, JSON.stringify({ currentFlyMode, serverHistory }), ()=>{}); }
    if(pendingSaves.deposits) { pendingSaves.deposits = false; fs.writeFile(DEPOSITS_FILE, JSON.stringify(depositRequests, null, 2), ()=>{}); }
    if(pendingSaves.withdraws) { pendingSaves.withdraws = false; fs.writeFile(WITHDRAWS_FILE, JSON.stringify(withdrawRequests, null, 2), ()=>{}); }
    if(pendingSaves.credits) { pendingSaves.credits = false; fs.writeFile(CREDITS_FILE, JSON.stringify(remoteCredits, null, 2), ()=>{}); }
}, 2000); 

function getTodayDateString() {
    const d = new Date(); return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}

// Queue based exact credit system
function addRemoteCredit(phone, amount) {
    if(!remoteCredits[phone]) remoteCredits[phone] = [];
    remoteCredits[phone].push({ id: Date.now().toString() + Math.floor(Math.random()*10000), amount: amount });
    saveCredits();
}

let lastServerTick = Date.now();

function advanceServerStateEngine() {
    setTimeout(() => {
        let nowTimeDate = Date.now();
        let delta = nowTimeDate - lastServerTick;
        lastServerTick = nowTimeDate;

        if(serverSystemStateObj.status === "BETTING") {
            serverSystemStateObj.timer -= (delta / 1000);
            if(serverSystemStateObj.timer <= 0) {
                serverSystemStateObj.status = "FLYING"; serverSystemStateObj.aviatorMult = 1.00;
                
                let maxActiveBet = 0;
                let nowTime = Date.now();
                
                for (let phone in usersDatabase) {
                    let u = usersDatabase[phone];
                    if (u.lastPing && (nowTime - u.lastPing < 15000)) { 
                        if (u.activeBet > maxActiveBet) {
                            maxActiveBet = u.activeBet;
                        }
                    }
                }

                if (currentFlyMode === "low") {
                    serverSystemStateObj.crashPoint = parseFloat((Math.random() * 0.50 + 1.00).toFixed(2));
                } else if (currentFlyMode === "medium") {
                    serverSystemStateObj.crashPoint = parseFloat((Math.random() * 4.00 + 1.00).toFixed(2));
                } else if (currentFlyMode === "high") {
                    serverSystemStateObj.crashPoint = parseFloat((Math.random() * 48.00 + 1.00).toFixed(2));
                } else if (currentFlyMode === "crash2x") {
                    if (maxActiveBet > 10) {
                        serverSystemStateObj.crashPoint = parseFloat((Math.random() * 0.95 + 1.00).toFixed(2));
                    } else if (maxActiveBet > 0 && maxActiveBet <= 10) {
                        serverSystemStateObj.crashPoint = parseFloat((Math.random() * 9.45 + 1.00).toFixed(2));
                    } else {
                        crash2xFlightCounter++;
                        if (crash2xFlightCounter >= crash2xTargetBigFlight) {
                            serverSystemStateObj.crashPoint = parseFloat((Math.random() * 34.00 + 15.00).toFixed(2));
                            crash2xFlightCounter = 0;
                            crash2xTargetBigFlight = Math.floor(Math.random() * 3) + 11;
                        } else {
                            serverSystemStateObj.crashPoint = parseFloat((Math.random() * 11.00 + 1.00).toFixed(2));
                        }
                    }
                } else {
                    let randomFactorSeed = Math.random();
                    if (randomFactorSeed > 0.65) { serverSystemStateObj.crashPoint = parseFloat((Math.random() * 15.0 + 4.50).toFixed(2)); }
                    else if (randomFactorSeed > 0.15) { serverSystemStateObj.crashPoint = parseFloat((Math.random() * 3.3 + 1.80).toFixed(2)); }
                    else { serverSystemStateObj.crashPoint = parseFloat((Math.random() * 0.4 + 1.15).toFixed(2)); }
                }
                
                if(serverSystemStateObj.crashPoint < 1.00) serverSystemStateObj.crashPoint = 1.00;
                
                for (let phone in usersDatabase) {
                    usersDatabase[phone].activeBet = 0;
                }
            }
        } 
        else if(serverSystemStateObj.status === "FLYING") {
            let timeToSimulate = delta;
            if (timeToSimulate > 2000) timeToSimulate = 2000;

            while (timeToSimulate > 0) {
                let stepDelta = Math.min(timeToSimulate, 55);
                let timeRatio = stepDelta / 55.0;
                serverSystemStateObj.aviatorMult += (0.0085 + serverSystemStateObj.aviatorMult * 0.0048) * timeRatio;
                timeToSimulate -= stepDelta;
            }
            
            if(serverSystemStateObj.aviatorMult >= serverSystemStateObj.crashPoint) {
                serverSystemStateObj.aviatorMult = serverSystemStateObj.crashPoint; 
                serverSystemStateObj.status = "CRASHED"; serverSystemStateObj.timer = 4;
                
                serverHistory.unshift(parseFloat(serverSystemStateObj.crashPoint.toFixed(2)));
                if(serverHistory.length > 20) serverHistory.pop();
                saveSettings();
            }
        } 
        else if(serverSystemStateObj.status === "CRASHED") {
            serverSystemStateObj.timer -= (delta / 1000);
            if(serverSystemStateObj.timer <= 0) {
                serverSystemStateObj.status = "BETTING"; serverSystemStateObj.timer = 10; 
            }
        }
        advanceServerStateEngine();
    }, serverSystemStateObj.status === "FLYING" ? 55 : 1000); 
}
advanceServerStateEngine();

const server = http.createServer((req, res) => {
    // Cloudflare Header IP Track fix
    let ip = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress || "";
    if (ip && ip.includes(',')) ip = ip.split(',')[0].trim();

    let basePath = req.url.split('?')[0]; // FIX FOR ?ref= URL routing

    // --> CLOUDFLARE ANTI-BUFFER FIX ADDED HERE <--
    res.setHeader('X-Accel-Buffering', 'no'); // Disables Cloudflare waiting/buffering
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');

    if (basePath === '/' || basePath === '/index.html') {
        res.writeHead(200, { 'Content-Type': 'text/html', 'Connection': 'keep-alive' }); fs.createReadStream('index.html').pipe(res);
    } 
    else if (req.url.startsWith('/IMG_20260523_231432.jpg')) {
        let imgPath = path.join(__dirname, 'IMG_20260523_231432.jpg');
        if(fs.existsSync(imgPath)) {
            let headers = { 'Content-Type': 'image/jpeg', 'Connection': 'keep-alive' };
            if(req.url.includes('download=1')) {
                headers['Content-Disposition'] = 'attachment; filename="Payment_QR.jpg"';
            }
            res.writeHead(200, headers);
            fs.createReadStream(imgPath).pipe(res);
        } else {
            res.writeHead(404); res.end();
        }
    }
    else if (basePath === '/api/server-status' && req.method === 'GET') {
        let currentStatus = 'on';
        try { if(fs.existsSync(SERVER_STATE_FILE)) currentStatus = fs.readFileSync(SERVER_STATE_FILE, 'utf8').trim(); } catch(e){}
        res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
        res.end(JSON.stringify({ status: currentStatus }));
    }
    else if (basePath === '/api/toggle-server' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                let data = JSON.parse(body);
                if(data.status === 'off') {
                    fs.writeFileSync(SERVER_STATE_FILE, 'off');
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                    res.end(JSON.stringify({ success: true }));
                    setTimeout(() => process.exit(0), 1000);
                } else {
                    fs.writeFileSync(SERVER_STATE_FILE, 'on');
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                    res.end(JSON.stringify({ success: true }));
                }
            } catch(e) { res.writeHead(400); res.end(); }
        });
    }
    else if (basePath === '/api/game-state') {
        res.writeHead(200, { 
            'Content-Type': 'application/json', 
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store',
            'Connection': 'keep-alive'
        });
        res.end(JSON.stringify({
            timer: serverSystemStateObj.timer,
            status: serverSystemStateObj.status,
            aviatorMult: serverSystemStateObj.aviatorMult,
            crashPoint: serverSystemStateObj.crashPoint,
            remoteCredits: remoteCredits,
            history: serverHistory
        }));
    } 
    else if (basePath === '/api/admin-deposit-data' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
        res.end(JSON.stringify(depositRequests));
    }
    else if (basePath === '/api/admin-fly-mode' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
        res.end(JSON.stringify({ mode: currentFlyMode }));
    }
    else if (basePath === '/api/admin-fly-mode' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                let data = JSON.parse(body);
                if(data.mode) { 
                    currentFlyMode = data.mode; 
                    saveSettings();
                }
                res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                res.end(JSON.stringify({ success: true, mode: currentFlyMode }));
            } catch(e) { res.writeHead(400); res.end(); }
        });
    }
    else if (basePath === '/api/sync-user-stats' && req.method === 'POST') {
        let body = ''; req.on('data', c => body += c);
        req.on('end', () => {
            try {
                let data = JSON.parse(body);
                if(data.phone && usersDatabase[data.phone]) {
                    usersDatabase[data.phone].userId = data.userId;
                    usersDatabase[data.phone].balance = data.balance;
                    if(data.depositBalance !== undefined) usersDatabase[data.phone].depositBalance = data.depositBalance;
                    if(data.winningBalance !== undefined) usersDatabase[data.phone].winningBalance = data.winningBalance;
                    if(data.profileName) usersDatabase[data.phone].profileName = data.profileName;
                    if(data.profilePic !== undefined) usersDatabase[data.phone].profilePic = data.profilePic;
                    usersDatabase[data.phone].betCount = data.betCount;
                    usersDatabase[data.phone].activeBet = data.activeBet || 0;
                    usersDatabase[data.phone].lastPing = Date.now();
                    
                    // CLEAR THE QUEUE ONLY IF SYNC IS RECEIVED
                    if (data.clearedCredits && data.clearedCredits.length > 0 && remoteCredits[data.phone]) {
                        remoteCredits[data.phone] = remoteCredits[data.phone].filter(c => !data.clearedCredits.includes(c.id));
                        saveCredits();
                    }
                    
                    saveDB();
                }
                res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' }); 
                res.end(JSON.stringify({ success: true }));
            } catch(e) { res.writeHead(400); res.end(); }
        });
    }
    else if (basePath === '/api/admin-users-details' && req.method === 'GET') {
        let result = [];
        let onlineCount = 0;
        let bettingCount = 0;
        let now = Date.now();
        
        for(let phone in usersDatabase) {
            let u = usersDatabase[phone];
            if(u.userId) { 
                let isOnline = u.lastPing && (now - u.lastPing < 15000);
                if (isOnline) onlineCount++;
                if (isOnline && u.activeBet > 0) bettingCount++;
                
                result.push({
                    userId: u.userId,
                    balance: u.balance || 0,
                    totalDeposit: u.totalDepositAmt || 0,
                    totalWithdraw: u.totalWithdrawAmt || 0,
                    betCount: u.betCount || 0,
                    activeBet: u.activeBet || 0,
                    isOnline: isOnline
                });
            }
        }
        res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
        res.end(JSON.stringify({ users: result, onlineCount: onlineCount, bettingCount: bettingCount }));
    }
    else if (basePath === '/api/admin-referrals' && req.method === 'GET') {
        let result = [];
        for(let phone in usersDatabase) {
            let u = usersDatabase[phone];
            if(u.referralCount && u.referralCount > 0) {
                result.push({
                    userId: u.userId,
                    balance: u.balance || 0,
                    totalDeposit: u.totalDepositAmt || 0,
                    referralCount: u.referralCount
                });
            }
        }
        res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
        res.end(JSON.stringify(result));
    }
    else if (basePath === '/api/submit-deposit' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                let data = JSON.parse(body);
                data.id = Date.now().toString();
                data.status = "Pending";
                depositRequests.push(data);
                saveDeposits();
                
                res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                res.end(JSON.stringify({ success: true }));
            } catch(e) {
                res.writeHead(400); res.end();
            }
        });
    }
    else if (basePath === '/api/admin-approve-deposit' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                let data = JSON.parse(body);
                let index = depositRequests.findIndex(r => r.id === data.id);
                if(index > -1) {
                    let reqData = depositRequests[index];
                    let phone = reqData.submittedPhone;
                    let amt = reqData.submittedAmount || 0;
                    
                    let bonusPercent = 0;
                    if(amt === 500 || amt === 1000) bonusPercent = 5;
                    else if(amt === 2000) bonusPercent = 10;
                    else if(amt === 5000 || amt === 10000 || amt === 20000) bonusPercent = 15;
                    let totalGet = amt + Math.floor((amt * bonusPercent) / 100);
                    
                    if(phone && amt >= 100) {
                        if(!usersDatabase[phone]) {
                            usersDatabase[phone] = { depositApproved: true, withdrawAttemptsToday: 0, lastWithdrawDate: getTodayDateString(), totalWithdrawals: 0, totalDepositAmt: 0, totalWithdrawAmt: 0, betCount: 0, balance: 50, depositBalance: 50, winningBalance: 0, userId: "", activeBet: 0, referralCount: 0, referredBy: "", referralBonusPaid: false, depositBonusPaid: false };
                        } else {
                            usersDatabase[phone].depositApproved = true;
                        }
                        usersDatabase[phone].totalDepositAmt = (usersDatabase[phone].totalDepositAmt || 0) + totalGet;
                        
                        let referrerPhone = usersDatabase[phone].referredBy;
                        if (referrerPhone && usersDatabase[referrerPhone] && !usersDatabase[phone].depositBonusPaid) {
                            // Add 200 to referrer
                            addRemoteCredit(referrerPhone, 200);
                            usersDatabase[phone].depositBonusPaid = true;
                        }
                        saveDB();
                        
                        // Add totalGet to the depositing user
                        addRemoteCredit(phone, totalGet);
                    }
                    
                    depositRequests.splice(index, 1);
                    saveDeposits();
                    
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                    res.end(JSON.stringify({ success: true }));
                } else {
                    res.writeHead(400); res.end();
                }
            } catch(e) { res.writeHead(400); res.end(); }
        });
    }
    else if (basePath === '/api/delete-deposit' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                let data = JSON.parse(body);
                depositRequests = depositRequests.filter(r => r.id !== data.id);
                saveDeposits();
                res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                res.end(JSON.stringify({ success: true }));
            } catch(e) { res.writeHead(400); res.end(); }
        });
    }
    else if (basePath === '/api/submit-withdraw' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                let data = JSON.parse(body);
                let phone = data.phone;
                let amt = data.amount;
                
                if(!usersDatabase[phone]) {
                    usersDatabase[phone] = { depositApproved: false, withdrawAttemptsToday: 0, lastWithdrawDate: getTodayDateString(), totalWithdrawals: 0, totalDepositAmt: 0, totalWithdrawAmt: 0, betCount: 0, balance: 50, depositBalance: 50, winningBalance: 0, userId: "", activeBet: 0, referralCount: 0, referredBy: "", referralBonusPaid: false, depositBonusPaid: false };
                    saveDB();
                }
                let user = usersDatabase[phone];
                
                if(!user.depositApproved) {
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                    return res.end(JSON.stringify({ success: false, message: "You need to deposit a minimum of ₹100 to withdraw." }));
                }

                let today = getTodayDateString();
                if(user.lastWithdrawDate !== today) {
                    user.withdrawAttemptsToday = 0;
                    user.lastWithdrawDate = today;
                }

                if(user.withdrawAttemptsToday >= 1) {
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                    return res.end(JSON.stringify({ success: false, message: "Only 1 withdrawal is allowed per day!" }));
                }

                let tierCount = user.totalWithdrawals || 0;

                if(tierCount === 0 && amt !== 200) {
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                    return res.end(JSON.stringify({ success: false, message: "Your 1st withdrawal must be exactly ₹200." }));
                } 
                else if(tierCount === 1 && amt > 300) {
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                    return res.end(JSON.stringify({ success: false, message: "Your 2nd withdrawal must be ₹300 or less." }));
                } 
                else if(tierCount === 2 && amt > 500) {
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                    return res.end(JSON.stringify({ success: false, message: "Your 3rd withdrawal must be ₹500 or less." }));
                } 
                else if(tierCount === 3 && amt > 1000) {
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                    return res.end(JSON.stringify({ success: false, message: "Your 4th withdrawal must be ₹1,000 or less." }));
                } 
                else if(tierCount === 4 && amt > 2000) {
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                    return res.end(JSON.stringify({ success: false, message: "Your 5th withdrawal must be ₹2,000 or less." }));
                } 
                else if(tierCount >= 5 && amt > 5000) {
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                    return res.end(JSON.stringify({ success: false, message: "Subsequent withdrawals must be ₹5,000 or less." }));
                }

                user.withdrawAttemptsToday += 1;
                user.totalWithdrawals = tierCount + 1;
                user.totalWithdrawAmt = (user.totalWithdrawAmt || 0) + amt; 
                saveDB();

                data.id = Date.now().toString(); 
                data.status = "Pending";
                withdrawRequests.push(data);
                saveWithdraws();
                
                res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                res.end(JSON.stringify({ success: true, message: "Withdrawal request submitted successfully!" }));
            } catch(e) { res.writeHead(400); res.end(); }
        });
    }
    else if (basePath === '/api/get-withdraws' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
        res.end(JSON.stringify(withdrawRequests));
    }
    else if (basePath === '/api/user-withdraws' && req.method === 'GET') {
        const urlParts = req.url.split('?');
        let phone = '';
        if(urlParts[1]) {
            const params = new URLSearchParams(urlParts[1]);
            phone = params.get('phone');
        }
        let userReqs = withdrawRequests.filter(r => r.phone === phone);
        res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
        res.end(JSON.stringify(userReqs.reverse()));
    }
    else if (basePath === '/api/approve-withdraw' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                let data = JSON.parse(body);
                let index = withdrawRequests.findIndex(r => r.id === data.id);
                if(index > -1) {
                    withdrawRequests[index].status = data.status;
                    saveWithdraws();
                }
                res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                res.end(JSON.stringify({ success: true }));
            } catch(e) { res.writeHead(400); res.end(); }
        });
    }
    else if (basePath === '/api/delete-withdraw' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                let data = JSON.parse(body);
                withdrawRequests = withdrawRequests.filter(req => req.id !== data.id);
                saveWithdraws();
                res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                res.end(JSON.stringify({ success: true }));
            } catch(e) { res.writeHead(400); res.end(); }
        });
    }
    else if (basePath === '/api/admin-manual-credit' && req.method === 'POST') {
        let body = ''; req.on('data', c => body += c);
        req.on('end', () => {
            try {
                let data = JSON.parse(body);
                let targetPhone = null;
                for (let phone in usersDatabase) {
                    if (usersDatabase[phone].userId === data.userId) {
                        targetPhone = phone; break;
                    }
                }
                if (targetPhone) {
                    addRemoteCredit(targetPhone, data.amount);
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                    res.end(JSON.stringify({ success: true }));
                } else {
                    res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
                    res.end(JSON.stringify({ success: false }));
                }
            } catch(e) { res.writeHead(400); res.end(); }
        });
    }
    else if (basePath === '/api/login') {
        const urlParts = req.url.split('?');
        let phone = '';
        let refCode = '';
        if(urlParts[1]) {
            const params = new URLSearchParams(urlParts[1]);
            phone = params.get('phone');
            refCode = params.get('ref');
        }
        
        if(!ipToPhonesMap[ip]) {
            ipToPhonesMap[ip] = [];
        }

        function createNewUser(ph, ref) {
            let referrerPhone = null;
            if(ref) {
                referrerPhone = Object.keys(usersDatabase).find(p => usersDatabase[p].userId === ref);
            }
            
            usersDatabase[ph] = { 
                depositApproved: false, 
                withdrawAttemptsToday: 0, 
                lastWithdrawDate: getTodayDateString(), 
                totalWithdrawals: 0, 
                totalDepositAmt: 0, 
                totalWithdrawAmt: 0, 
                betCount: 0, 
                balance: 50, 
                depositBalance: 50,
                winningBalance: 0,
                userId: Math.floor(10000000 + Math.random() * 90000000).toString(),
                profileName: "Player" + Math.floor(100 + Math.random() * 899),
                profilePic: "",
                activeBet: 0,
                referralCount: 0,
                referredBy: referrerPhone || "",
                referralBonusPaid: false,
                depositBonusPaid: false
            };
            
            if(referrerPhone && !usersDatabase[ph].referralBonusPaid) {
                usersDatabase[referrerPhone].referralCount = (usersDatabase[referrerPhone].referralCount || 0) + 1;
                addRemoteCredit(referrerPhone, 100);
                usersDatabase[ph].referralBonusPaid = true;
            }
            saveDB();
        }
        
        if(phone && ipToPhonesMap[ip].includes(phone)) {
            if(!usersDatabase[phone]) {
                createNewUser(phone, refCode);
            }
            res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
            return res.end(JSON.stringify({ success: true, userData: usersDatabase[phone] }));
        }
        
        if(ipToPhonesMap[ip].length >= 2) {
            res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
            return res.end(JSON.stringify({ 
                success: false, 
                message: "You can only login up to 2 numbers on one phone." 
            }));
        }
        
        if(phone) {
            ipToPhonesMap[ip].push(phone);
            if(!usersDatabase[phone]) {
                createNewUser(phone, refCode);
            }
        }
        res.writeHead(200, { 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
        return res.end(JSON.stringify({ success: true, userData: usersDatabase[phone] }));
    }
    else { res.writeHead(404); res.end(); }
});

// VERY IMPORTANT: Keep-Alive Server settings to bypass Cloudflare Tunnels Lag
server.keepAliveTimeout = 60000;
server.headersTimeout = 65000;

server.listen(8080, '0.0.0.0', () => {
    console.log('Premium High-Ratio Engine Running On: http://localhost:8080');
});
EOF

# --- PROPER BACKGROUND START FOR TERMUX ---
echo "on" > server_state.txt

# Create robust runner shell script
cat > run_server.sh << 'RUNSCRIPT'
#!/bin/bash
while true; do
    if [ -f server_state.txt ] && [ "$(cat server_state.txt)" = "off" ]; then
        echo "Server explicitly stopped by admin."
        exit 0
    fi
    node server.js
    sleep 2
done
RUNSCRIPT

chmod +x run_server.sh

# Stop any previously stuck node processes to avoid Port conflicts
pkill -f "run_server.sh" || true
pkill -f "node server.js" || true

# Start cleanly in background
nohup ./run_server.sh > server_log.txt 2>&1 &

echo "========================================================="
echo " SERVER SUCCESSFULLY STARTED IN ALWAYS-ON MODE"
echo " (Ek baar apna browser Refresh / Reload zarur kar le)"
echo " Aap ab apna Termux close kar sakte hain!"
echo "========================================================="
