(function () {
  if (document.getElementById('__dino-menu')) return;

  // ── Wait for Runner to be ready then init ─────────────────────────────────
  function waitForRunner(cb, attempts) {
    attempts = attempts || 0;
    if (attempts > 100) { console.warn('[Dino Cheats] Runner not found after 10s'); return; }
    if (window.Runner && window.Runner.instance_) {
      cb(window.Runner.instance_);
    } else {
      setTimeout(() => waitForRunner(cb, attempts + 1), 100);
    }
  }

  function R() { return window.Runner && window.Runner.instance_; }
  function T() { return R() && R().tRex; }

  function status(msg, type) {
    const el = document.getElementById('__dino-status');
    if (!el) return;
    el.textContent = msg;
    el.className = '__dino-status ' + (type || '');
    clearTimeout(el._t);
    el._t = setTimeout(() => { el.textContent = ''; el.className = '__dino-status'; }, 2500);
  }

  function need() {
    if (!R()) { status('Runner not ready — click the page first to start!', 'err'); return false; }
    return true;
  }

  // ── Styles ─────────────────────────────────────────────────────────────────
  const sty = document.createElement('style');
  sty.textContent = `
    #__dino-menu *, #__dino-menu *::before, #__dino-menu *::after {
      box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', sans-serif;
    }
    #__dino-menu {
      position: fixed; top: 60px; right: 20px; z-index: 2147483647;
      width: 320px; background: #111; border: 1px solid #2a2a2a;
      border-radius: 14px; box-shadow: 0 20px 60px rgba(0,0,0,0.85); overflow: hidden;
    }
    #__dino-header {
      background: #181818; padding: 10px 14px;
      display: flex; align-items: center; justify-content: space-between;
      cursor: move; border-bottom: 1px solid #222;
    }
    #__dino-title { font-size: 13px; font-weight: 700; color: #eee; }
    #__dino-hint {
      font-size: 11px; color: #555; background: #1e1e1e;
      border: 1px solid #2a2a2a; border-radius: 5px; padding: 2px 7px;
    }
    #__dino-close {
      background: none; border: none; color: #555;
      font-size: 18px; cursor: pointer; padding: 0 0 0 8px; line-height: 1;
    }
    #__dino-close:hover { color: #eee; }
    #__dino-body {
      padding: 12px; display: flex; flex-direction: column; gap: 10px;
      max-height: 82vh; overflow-y: auto;
    }
    #__dino-body::-webkit-scrollbar { width: 4px; }
    #__dino-body::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
    #__dino-scorebar {
      display: flex; justify-content: space-between;
      background: #0d0d0d; border: 1px solid #222; border-radius: 8px; padding: 8px 12px;
    }
    .ds-item { display: flex; flex-direction: column; align-items: center; gap: 2px; }
    .ds-lbl  { font-size: 10px; color: #555; letter-spacing: 0.8px; text-transform: uppercase; }
    .ds-val  { font-size: 18px; font-weight: 700; color: #eee; font-variant-numeric: tabular-nums; }
    .d-sec   { display: flex; flex-direction: column; gap: 6px; }
    .d-lbl   {
      font-size: 10px; font-weight: 700; letter-spacing: 1px; color: #555;
      text-transform: uppercase; padding-bottom: 4px; border-bottom: 1px solid #1e1e1e;
    }
    .d-row   { display: flex; gap: 6px; align-items: center; }
    .d-input {
      flex: 1; background: #0d0d0d; border: 1px solid #2a2a2a; border-radius: 7px;
      padding: 7px 10px; font-size: 12px; color: #eee; outline: none; min-width: 0;
    }
    .d-input:focus { border-color: #7c6df0; }
    .d-input::placeholder { color: #444; }
    .d-btn {
      background: #1e1e1e; border: 1px solid #2a2a2a; border-radius: 7px;
      padding: 7px 11px; font-size: 12px; font-weight: 600; color: #bbb;
      cursor: pointer; white-space: nowrap;
      transition: background 0.12s, color 0.12s, border-color 0.12s;
    }
    .d-btn:hover  { background: #2a2a2a; border-color: #444; color: #eee; }
    .d-btn:active { transform: scale(0.97); }
    .d-btn.pu { background: #2a1f5e; border-color: #7c6df0; color: #c4b8ff; }
    .d-btn.pu:hover { background: #3a2a7a; }
    .d-btn.gr { background: #0f2a1a; border-color: #4caf7d; color: #80d4a8; }
    .d-btn.gr:hover { background: #183a24; }
    .d-btn.rd { background: #2a1212; border-color: #e06c75; color: #f0a0a8; }
    .d-btn.rd:hover { background: #3a1818; }
    .d-btn.am { background: #2a1e00; border-color: #e0a040; color: #f0c880; }
    .d-btn.am:hover { background: #3a2a00; }
    .d-btn.on { outline: 2px solid #7c6df0; }
    .d-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
    .d-full { grid-column: span 2; }
    .__dino-status {
      font-size: 11px; text-align: center; min-height: 16px; color: #555;
    }
    .__dino-status.ok  { color: #4caf7d; }
    .__dino-status.err { color: #e06c75; }
    .__dino-status.run { color: #9b8cff; }
  `;
  document.head.appendChild(sty);

  // ── HTML ───────────────────────────────────────────────────────────────────
  const menu = document.createElement('div');
  menu.id = '__dino-menu';
  menu.innerHTML = `
    <div id="__dino-header">
      <span id="__dino-title">🦕 Dino Cheats</span>
      <div style="display:flex;align-items:center;gap:8px;">
        <span id="__dino-hint">Ctrl+Q</span>
        <button id="__dino-close">✕</button>
      </div>
    </div>
    <div id="__dino-body">

      <div id="__dino-scorebar">
        <div class="ds-item"><span class="ds-lbl">Score</span><span class="ds-val" id="ds-score">—</span></div>
        <div class="ds-item"><span class="ds-lbl">High Score</span><span class="ds-val" id="ds-hi">—</span></div>
        <div class="ds-item"><span class="ds-lbl">Speed</span><span class="ds-val" id="ds-spd">—</span></div>
      </div>

      <div class="d-sec">
        <div class="d-lbl">Fly Mode</div>
        <div class="d-row">
          <span style="font-size:11px;color:#555;flex:1">Height (lower # = higher up, try 30–80)</span>
          <input class="d-input" id="d-fly-y" type="number" value="40" style="width:64px;flex:none" />
        </div>
        <div class="d-grid">
          <button class="d-btn gr" id="d-fly-on">▲ Fly ON</button>
          <button class="d-btn rd" id="d-fly-off">▼ Fly OFF</button>
        </div>
      </div>

      <div class="d-sec">
        <div class="d-lbl">Score</div>
        <div class="d-row">
          <input class="d-input" id="d-score-in" type="number" placeholder="Set score to..." />
          <button class="d-btn pu" id="d-set-score">Set</button>
        </div>
        <div class="d-row">
          <input class="d-input" id="d-hi-in" type="number" placeholder="Set high score to..." />
          <button class="d-btn pu" id="d-set-hi">Set</button>
        </div>
        <div class="d-grid">
          <button class="d-btn am" id="d-rst-score">Reset score</button>
          <button class="d-btn am" id="d-rst-hi">Reset hi score</button>
        </div>
      </div>

      <div class="d-sec">
        <div class="d-lbl">Speed</div>
        <div class="d-row">
          <input class="d-input" id="d-spd-in" type="number" placeholder="Speed (default ~6)" step="0.5" />
          <button class="d-btn pu" id="d-set-spd">Set</button>
        </div>
        <div class="d-grid">
          <button class="d-btn gr" id="d-spd-max">Max (50)</button>
          <button class="d-btn am" id="d-spd-slow">Slow (1)</button>
          <button class="d-btn rd" id="d-spd-stop">Stop (0)</button>
          <button class="d-btn"   id="d-spd-rst">Reset</button>
        </div>
      </div>

      <div class="d-sec">
        <div class="d-lbl">Auto Jump</div>
        <div class="d-grid">
          <button class="d-btn gr" id="d-aj-on">Auto Jump ON</button>
          <button class="d-btn rd" id="d-aj-off">Auto Jump OFF</button>
        </div>
      </div>

      <div class="d-sec">
        <div class="d-lbl">God Mode (no crash)</div>
        <div class="d-grid">
          <button class="d-btn gr" id="d-god-on">God Mode ON</button>
          <button class="d-btn rd" id="d-god-off">God Mode OFF</button>
        </div>
      </div>

      <div class="d-sec">
        <div class="d-lbl">Jump Power</div>
        <div class="d-row">
          <input class="d-input" id="d-jump-in" type="number" placeholder="Velocity (default -10)" step="1" />
          <button class="d-btn pu" id="d-set-jump">Set</button>
        </div>
        <div class="d-grid">
          <button class="d-btn gr" id="d-jump-super">Super jump</button>
          <button class="d-btn am" id="d-jump-rst">Reset</button>
        </div>
      </div>

      <div class="d-sec">
        <div class="d-lbl">Game Control</div>
        <div class="d-grid">
          <button class="d-btn gr" id="d-start">Start</button>
          <button class="d-btn rd" id="d-stop">Stop</button>
          <button class="d-btn am d-full" id="d-restart">Restart</button>
        </div>
      </div>

      <div id="__dino-status" class="__dino-status"></div>
    </div>
  `;
  document.body.appendChild(menu);

  // ── State ──────────────────────────────────────────────────────────────────
  let flyInt = null, ajInt = null, godInt = null, origSpeed = null;

  // ── Live score ticker ──────────────────────────────────────────────────────
  setInterval(() => {
    const r = R();
    const sc  = document.getElementById('ds-score');
    const hi  = document.getElementById('ds-hi');
    const spd = document.getElementById('ds-spd');
    if (!r) return;
    if (sc)  sc.textContent  = Math.floor(r.distanceRan || 0);
    if (hi)  hi.textContent  = r.distanceMeter ? Math.floor(r.distanceMeter.highScore || 0) : '—';
    if (spd) spd.textContent = r.currentSpeed  ? r.currentSpeed.toFixed(1) : '—';
  }, 200);

  // ── Fly ────────────────────────────────────────────────────────────────────
  document.getElementById('d-fly-on').onclick = () => {
    if (!need()) return;
    clearInterval(flyInt);
    const yInput = () => parseFloat(document.getElementById('d-fly-y').value) || 40;
    flyInt = setInterval(() => {
      const t = T(); if (!t) return;
      const y = yInput();
      t.yPos = y;
      t.groundYPos = y;
      t.jumping = false;
      t.jumpVelocity = 0;
      t.jumped = false;
    }, 16);
    status('Fly mode ON!', 'ok');
    document.getElementById('d-fly-on').classList.add('on');
    document.getElementById('d-fly-off').classList.remove('on');
  };

  document.getElementById('d-fly-off').onclick = () => {
    clearInterval(flyInt); flyInt = null;
    const t = T();
    if (t) {
      t.groundYPos = t.config ? (t.config.START_Y_POS || 93) : 93;
    }
    status('Fly mode OFF', 'ok');
    document.getElementById('d-fly-off').classList.add('on');
    document.getElementById('d-fly-on').classList.remove('on');
  };

  // ── Score ──────────────────────────────────────────────────────────────────
  document.getElementById('d-set-score').onclick = () => {
    if (!need()) return;
    const v = parseFloat(document.getElementById('d-score-in').value) || 0;
    R().distanceRan = v;
    status('Score set to ' + v, 'ok');
  };

  document.getElementById('d-set-hi').onclick = () => {
    if (!need()) return;
    const v = parseFloat(document.getElementById('d-hi-in').value) || 0;
    const dm = R().distanceMeter;
    if (dm) { dm.highScore = v; if (dm.setHighScore) dm.setHighScore(v); }
    status('High score set to ' + v, 'ok');
  };

  document.getElementById('d-rst-score').onclick = () => {
    if (!need()) return; R().distanceRan = 0; status('Score reset', 'ok');
  };

  document.getElementById('d-rst-hi').onclick = () => {
    if (!need()) return;
    const dm = R().distanceMeter;
    if (dm) { dm.highScore = 0; if (dm.setHighScore) dm.setHighScore(0); }
    status('High score reset', 'ok');
  };

  // ── Speed ──────────────────────────────────────────────────────────────────
  function setSpd(v) {
    if (!need()) return;
    const r = R();
    if (origSpeed === null) origSpeed = r.currentSpeed;
    r.currentSpeed = v;
    if (v > r.config.MAX_SPEED) r.config.MAX_SPEED = v + 10;
    status('Speed set to ' + v, 'ok');
  }

  document.getElementById('d-set-spd').onclick   = () => { const v = parseFloat(document.getElementById('d-spd-in').value); if (!isNaN(v)) setSpd(v); };
  document.getElementById('d-spd-max').onclick   = () => setSpd(50);
  document.getElementById('d-spd-slow').onclick  = () => setSpd(1);
  document.getElementById('d-spd-stop').onclick  = () => setSpd(0);
  document.getElementById('d-spd-rst').onclick   = () => { if (!need()) return; R().currentSpeed = origSpeed || 6; status('Speed reset', 'ok'); };

  // ── Auto jump ──────────────────────────────────────────────────────────────
  document.getElementById('d-aj-on').onclick = () => {
    if (!need()) return;
    clearInterval(ajInt);
    ajInt = setInterval(() => {
      const t = T(); const r = R(); if (!t || !r || r.crashed) return;
      if (!t.jumping && !t.ducking) {
        t.startJump(r.currentSpeed);
      }
    }, 500);
    status('Auto jump ON!', 'ok');
    document.getElementById('d-aj-on').classList.add('on');
    document.getElementById('d-aj-off').classList.remove('on');
  };

  document.getElementById('d-aj-off').onclick = () => {
    clearInterval(ajInt); ajInt = null;
    status('Auto jump OFF', 'ok');
    document.getElementById('d-aj-off').classList.add('on');
    document.getElementById('d-aj-on').classList.remove('on');
  };

  // ── God mode ───────────────────────────────────────────────────────────────
  document.getElementById('d-god-on').onclick = () => {
    if (!need()) return;
    clearInterval(godInt);
    godInt = setInterval(() => {
      const t = T(); const r = R(); if (!t || !r) return;
      t.crashed = false;
      r.crashed  = false;
      if (!r.playing) r.play();
    }, 50);
    status('God mode ON — you cannot die!', 'ok');
    document.getElementById('d-god-on').classList.add('on');
    document.getElementById('d-god-off').classList.remove('on');
  };

  document.getElementById('d-god-off').onclick = () => {
    clearInterval(godInt); godInt = null;
    status('God mode OFF', 'ok');
    document.getElementById('d-god-off').classList.add('on');
    document.getElementById('d-god-on').classList.remove('on');
  };

  // ── Jump power ────────────────────────────────────────────────────────────
  document.getElementById('d-set-jump').onclick = () => {
    if (!need()) return;
    const v = parseFloat(document.getElementById('d-jump-in').value) || -10;
    const t = T(); if (t && t.config) t.config.INITIAL_JUMP_VELOCITY = v;
    status('Jump velocity set to ' + v, 'ok');
  };
  document.getElementById('d-jump-super').onclick = () => {
    if (!need()) return;
    const t = T(); if (t && t.config) t.config.INITIAL_JUMP_VELOCITY = -25;
    status('Super jump ON!', 'ok');
  };
  document.getElementById('d-jump-rst').onclick = () => {
    if (!need()) return;
    const t = T(); if (t && t.config) t.config.INITIAL_JUMP_VELOCITY = -10;
    status('Jump reset', 'ok');
  };

  // ── Game control ──────────────────────────────────────────────────────────
  document.getElementById('d-start').onclick   = () => { if (!need()) return; R().play();    status('Game started!', 'ok'); };
  document.getElementById('d-stop').onclick    = () => { if (!need()) return; R().stop();    status('Game stopped', 'ok'); };
  document.getElementById('d-restart').onclick = () => { if (!need()) return; R().restart(); status('Game restarted!', 'ok'); };

  // ── Close / Ctrl+Q ────────────────────────────────────────────────────────
  document.getElementById('__dino-close').onclick = () => { menu.style.display = 'none'; };

  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'q') {
      e.preventDefault();
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }
  });

  // ── Drag ──────────────────────────────────────────────────────────────────
  const hdr = document.getElementById('__dino-header');
  let drag = false, ox = 0, oy = 0;
  hdr.addEventListener('mousedown', e => {
    drag = true;
    const r = menu.getBoundingClientRect();
    ox = e.clientX - r.left; oy = e.clientY - r.top;
    menu.style.transform = 'none';
    menu.style.top = r.top + 'px'; menu.style.left = r.left + 'px'; menu.style.right = 'auto';
  });
  document.addEventListener('mousemove', e => {
    if (drag) { menu.style.top = (e.clientY - oy) + 'px'; menu.style.left = (e.clientX - ox) + 'px'; }
  });
  document.addEventListener('mouseup', () => { drag = false; });

  // ── Init message ──────────────────────────────────────────────────────────
  waitForRunner(() => status('Runner detected — ready!', 'ok'));

})();
