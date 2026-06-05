(function () {
  if (document.getElementById('__cc-menu')) return;

  // ── Helpers ────────────────────────────────────────────────────────────────
  const G = () => window.Game;
  const ok = () => typeof window.Game !== 'undefined';

  function status(msg, type) {
    const el = document.getElementById('__cc-status');
    if (!el) return;
    el.textContent = msg;
    el.style.color = type === 'err' ? '#e06c75' : type === 'ok' ? '#4caf7d' : '#9b8cff';
    clearTimeout(el._t);
    el._t = setTimeout(() => { el.textContent = ''; }, 2500);
  }

  function need() {
    if (!ok()) { status('Game not found — run this on Cookie Clicker!', 'err'); return false; }
    return true;
  }

  // ── Styles ─────────────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #__cc-menu *, #__cc-menu *::before, #__cc-menu *::after {
      box-sizing: border-box; margin: 0; padding: 0;
      font-family: 'Segoe UI', sans-serif;
    }
    #__cc-menu {
      position: fixed; top: 60px; right: 20px;
      z-index: 2147483647;
      width: 310px;
      background: #111;
      border: 1px solid #2a2a2a;
      border-radius: 14px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.85);
      overflow: hidden;
    }
    #__cc-header {
      background: #181818;
      padding: 10px 14px;
      display: flex; align-items: center; justify-content: space-between;
      cursor: move;
      border-bottom: 1px solid #222;
    }
    #__cc-title { font-size: 13px; font-weight: 700; color: #eee; letter-spacing: 0.4px; }
    #__cc-hint {
      font-size: 11px; color: #555;
      background: #1e1e1e; border: 1px solid #2a2a2a;
      border-radius: 5px; padding: 2px 7px;
    }
    #__cc-close {
      background: none; border: none; color: #555;
      font-size: 18px; cursor: pointer; padding: 0 0 0 8px; line-height: 1;
    }
    #__cc-close:hover { color: #eee; }
    #__cc-body { padding: 12px; display: flex; flex-direction: column; gap: 10px; max-height: 80vh; overflow-y: auto; }
    #__cc-body::-webkit-scrollbar { width: 4px; }
    #__cc-body::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }

    .cc-section { display: flex; flex-direction: column; gap: 6px; }
    .cc-label {
      font-size: 10px; font-weight: 700; letter-spacing: 1px;
      color: #555; text-transform: uppercase;
      padding-bottom: 4px;
      border-bottom: 1px solid #1e1e1e;
    }
    .cc-row { display: flex; gap: 6px; align-items: center; }
    .cc-input {
      flex: 1;
      background: #0d0d0d;
      border: 1px solid #2a2a2a;
      border-radius: 7px;
      padding: 7px 10px;
      font-size: 12px;
      color: #eee;
      outline: none;
      min-width: 0;
    }
    .cc-input:focus { border-color: #7c6df0; }
    .cc-input::placeholder { color: #444; }
    .cc-btn {
      background: #1e1e1e;
      border: 1px solid #2a2a2a;
      border-radius: 7px;
      padding: 7px 11px;
      font-size: 12px;
      font-weight: 600;
      color: #bbb;
      cursor: pointer;
      white-space: nowrap;
      transition: background 0.12s, color 0.12s, border-color 0.12s;
    }
    .cc-btn:hover { background: #2a2a2a; border-color: #444; color: #eee; }
    .cc-btn:active { transform: scale(0.97); }
    .cc-btn.purple { background: #2a1f5e; border-color: #7c6df0; color: #c4b8ff; }
    .cc-btn.purple:hover { background: #3a2a7a; }
    .cc-btn.red { background: #2a1212; border-color: #e06c75; color: #f0a0a8; }
    .cc-btn.red:hover { background: #3a1818; }
    .cc-btn.green { background: #0f2a1a; border-color: #4caf7d; color: #80d4a8; }
    .cc-btn.green:hover { background: #183a24; }
    .cc-btn.full { width: 100%; }
    .cc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
    #__cc-status {
      font-size: 11px; text-align: center;
      min-height: 16px; color: #555;
      transition: color 0.2s;
    }
  `;
  document.head.appendChild(style);

  // ── HTML ───────────────────────────────────────────────────────────────────
  const menu = document.createElement('div');
  menu.id = '__cc-menu';
  menu.innerHTML = `
    <div id="__cc-header">
      <span id="__cc-title">🍪 Cookie Clicker Cheats</span>
      <div style="display:flex;align-items:center;gap:8px;">
        <span id="__cc-hint">Ctrl+Q</span>
        <button id="__cc-close">✕</button>
      </div>
    </div>
    <div id="__cc-body">

      <!-- Cookies -->
      <div class="cc-section">
        <div class="cc-label">Cookies</div>
        <div class="cc-row">
          <input class="cc-input" id="cc-amt" type="number" placeholder="Amount e.g. 1000000000" />
        </div>
        <div class="cc-grid">
          <button class="cc-btn purple" id="cc-set">Set cookies</button>
          <button class="cc-btn purple" id="cc-add">Add cookies</button>
          <button class="cc-btn green"  id="cc-max">Max cookies</button>
          <button class="cc-btn red"    id="cc-zero">Set to 0</button>
        </div>
      </div>

      <!-- Auto clicker -->
      <div class="cc-section">
        <div class="cc-label">Auto clicker</div>
        <div class="cc-row">
          <input class="cc-input" id="cc-cps" type="number" placeholder="Clicks per second (e.g. 50)" />
          <button class="cc-btn green" id="cc-ac-start">Start</button>
          <button class="cc-btn red"   id="cc-ac-stop">Stop</button>
        </div>
      </div>

      <!-- Buildings -->
      <div class="cc-section">
        <div class="cc-label">Buildings</div>
        <div class="cc-row">
          <input class="cc-input" id="cc-bamt" type="number" placeholder="Amount per building (e.g. 500)" />
        </div>
        <div class="cc-grid">
          <button class="cc-btn purple full" id="cc-buy-all" style="grid-column:span 2">Buy all buildings (set amount)</button>
          <button class="cc-btn green"  id="cc-max-all">Max all (9999)</button>
          <button class="cc-btn red"    id="cc-reset-all">Reset all to 0</button>
        </div>
      </div>

      <!-- Upgrades -->
      <div class="cc-section">
        <div class="cc-label">Upgrades</div>
        <div class="cc-grid">
          <button class="cc-btn green full" id="cc-all-upgrades" style="grid-column:span 2">Unlock all upgrades</button>
          <button class="cc-btn green full" id="cc-all-achieve"  style="grid-column:span 2">Unlock all achievements</button>
        </div>
      </div>

      <!-- Milk & Prestige -->
      <div class="cc-section">
        <div class="cc-label">Milk & Prestige</div>
        <div class="cc-row">
          <input class="cc-input" id="cc-milk" type="number" placeholder="Milk value (0–1)" step="0.01" />
          <button class="cc-btn purple" id="cc-set-milk">Set milk</button>
        </div>
        <div class="cc-row">
          <input class="cc-input" id="cc-prestige" type="number" placeholder="Prestige level" />
          <button class="cc-btn purple" id="cc-set-prestige">Set prestige</button>
        </div>
      </div>

      <!-- Multipliers -->
      <div class="cc-section">
        <div class="cc-label">Multipliers & Speed</div>
        <div class="cc-grid">
          <button class="cc-btn green" id="cc-godmode">Cookie godmode (x1000 CpS)</button>
          <button class="cc-btn green" id="cc-golden">Spawn golden cookie</button>
          <button class="cc-btn purple" id="cc-lucky">Trigger luck bonus</button>
          <button class="cc-btn purple" id="cc-frenzy">Trigger frenzy</button>
        </div>
      </div>

      <!-- Season / buffs -->
      <div class="cc-section">
        <div class="cc-label">Season & Buffs</div>
        <div class="cc-grid">
          <button class="cc-btn" id="cc-s-christmas">🎄 Christmas</button>
          <button class="cc-btn" id="cc-s-halloween">🎃 Halloween</button>
          <button class="cc-btn" id="cc-s-valentines">💝 Valentines</button>
          <button class="cc-btn" id="cc-s-easter">🐣 Easter</button>
        </div>
      </div>

      <!-- Misc -->
      <div class="cc-section">
        <div class="cc-label">Misc</div>
        <div class="cc-grid">
          <button class="cc-btn red" id="cc-wipe">Wipe save (hard reset)</button>
          <button class="cc-btn"     id="cc-save">Force save</button>
          <button class="cc-btn"     id="cc-nuke">Cookie nuke (pop wrinklers)</button>
          <button class="cc-btn green" id="cc-sugar">Max sugar lumps</button>
        </div>
      </div>

      <div id="__cc-status"></div>
    </div>
  `;
  document.body.appendChild(menu);

  // ── Logic ──────────────────────────────────────────────────────────────────
  let acInterval = null;

  function getAmt(id, fallback) {
    const v = parseFloat(document.getElementById(id).value);
    return isNaN(v) ? fallback : v;
  }

  // Cookies
  document.getElementById('cc-set').onclick = () => {
    if (!need()) return;
    const n = getAmt('cc-amt', 0);
    G().cookies = n;
    G().cookiesEarned = Math.max(G().cookiesEarned, n);
    G().CalculateGains();
    G().RefreshStore();
    status(`Cookies set to ${n.toLocaleString()}`, 'ok');
  };

  document.getElementById('cc-add').onclick = () => {
    if (!need()) return;
    const n = getAmt('cc-amt', 0);
    G().cookies += n;
    G().cookiesEarned += n;
    G().CalculateGains();
    G().RefreshStore();
    status(`Added ${n.toLocaleString()} cookies`, 'ok');
  };

  document.getElementById('cc-max').onclick = () => {
    if (!need()) return;
    const big = 999999999999999;
    G().cookies = big;
    G().cookiesEarned = big;
    G().CalculateGains();
    G().RefreshStore();
    status('Cookies maxed!', 'ok');
  };

  document.getElementById('cc-zero').onclick = () => {
    if (!need()) return;
    G().cookies = 0;
    G().CalculateGains();
    G().RefreshStore();
    status('Cookies set to 0', 'ok');
  };

  // Auto clicker
  document.getElementById('cc-ac-start').onclick = () => {
    if (!need()) return;
    if (acInterval) clearInterval(acInterval);
    const cps = getAmt('cc-cps', 20);
    const delay = Math.max(10, Math.round(1000 / cps));
    acInterval = setInterval(() => {
      if (ok()) G().ClickCookie();
    }, delay);
    status(`Auto clicker: ${cps} clicks/sec`, 'ok');
  };

  document.getElementById('cc-ac-stop').onclick = () => {
    clearInterval(acInterval);
    acInterval = null;
    status('Auto clicker stopped', 'ok');
  };

  // Buildings
  document.getElementById('cc-buy-all').onclick = () => {
    if (!need()) return;
    const n = getAmt('cc-bamt', 100);
    G().ObjectsById.forEach(b => { b.amount = n; b.bought = n; });
    G().CalculateGains();
    G().RefreshStore();
    status(`All buildings set to ${n}`, 'ok');
  };

  document.getElementById('cc-max-all').onclick = () => {
    if (!need()) return;
    G().ObjectsById.forEach(b => { b.amount = 9999; b.bought = 9999; });
    G().CalculateGains();
    G().RefreshStore();
    status('All buildings maxed to 9999!', 'ok');
  };

  document.getElementById('cc-reset-all').onclick = () => {
    if (!need()) return;
    G().ObjectsById.forEach(b => { b.amount = 0; b.bought = 0; });
    G().CalculateGains();
    G().RefreshStore();
    status('All buildings reset to 0', 'ok');
  };

  // Upgrades
  document.getElementById('cc-all-upgrades').onclick = () => {
    if (!need()) return;
    G().UpgradesById.forEach(u => { G().Unlock(u.name); u.bought = 1; });
    G().CalculateGains();
    G().RefreshStore();
    status('All upgrades unlocked!', 'ok');
  };

  document.getElementById('cc-all-achieve').onclick = () => {
    if (!need()) return;
    G().AchievementsById.forEach(a => { if (!a.won) a.Won(); });
    status('All achievements unlocked!', 'ok');
  };

  // Milk & Prestige
  document.getElementById('cc-set-milk').onclick = () => {
    if (!need()) return;
    const v = getAmt('cc-milk', 1);
    G().milkProgress = v;
    G().CalculateGains();
    status(`Milk set to ${v}`, 'ok');
  };

  document.getElementById('cc-set-prestige').onclick = () => {
    if (!need()) return;
    const v = getAmt('cc-prestige', 1000);
    G().prestige = v;
    G().CalculateGains();
    status(`Prestige set to ${v}`, 'ok');
  };

  // Multipliers
  document.getElementById('cc-godmode').onclick = () => {
    if (!need()) return;
    G().cookiesPs = G().cookiesPs * 1000 || 1e9;
    status('Godmode: CpS x1000!', 'ok');
  };

  document.getElementById('cc-golden').onclick = () => {
    if (!need()) return;
    const g = new G().goldenCookie.constructor();
    G().shimmer(g);
    status('Golden cookie spawned!', 'ok');
  };

  document.getElementById('cc-lucky').onclick = () => {
    if (!need()) return;
    G().cookies += G().cookiesPs * 60 * 20;
    G().cookiesEarned += G().cookiesPs * 60 * 20;
    G().CalculateGains();
    status('Lucky bonus applied!', 'ok');
  };

  document.getElementById('cc-frenzy').onclick = () => {
    if (!need()) return;
    G().gainBuff('frenzy', 77, 7);
    status('Frenzy triggered! (x7 CpS for 77s)', 'ok');
  };

  // Seasons
  const seasons = {
    'cc-s-christmas': 'christmas',
    'cc-s-halloween': 'halloween',
    'cc-s-valentines': 'valentines',
    'cc-s-easter': 'easter',
  };
  Object.entries(seasons).forEach(([id, season]) => {
    document.getElementById(id).onclick = () => {
      if (!need()) return;
      G().season = season;
      G().CalculateGains();
      status(`Season set to ${season}!`, 'ok');
    };
  });

  // Misc
  document.getElementById('cc-wipe').onclick = () => {
    if (!need()) return;
    if (confirm('Hard reset the game? This cannot be undone!')) {
      G().HardReset(2);
      status('Game wiped!', 'ok');
    }
  };

  document.getElementById('cc-save').onclick = () => {
    if (!need()) return;
    G().WriteSave(1);
    status('Game saved!', 'ok');
  };

  document.getElementById('cc-nuke').onclick = () => {
    if (!need()) return;
    G().wrinklers.forEach(w => { if (w.phase === 2) w.hp = 0; });
    status('Wrinklers nuked — cookies popped!', 'ok');
  };

  document.getElementById('cc-sugar').onclick = () => {
    if (!need()) return;
    G().lumpT = Date.now() - 1000 * 60 * 60 * 24 * 100;
    G().gainLumps(100);
    status('Sugar lumps maxed!', 'ok');
  };

  // ── Close / toggle ─────────────────────────────────────────────────────────
  document.getElementById('__cc-close').onclick = () => {
    menu.style.display = 'none';
  };

  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'q') {
      e.preventDefault();
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }
  });

  // ── Drag ───────────────────────────────────────────────────────────────────
  const hdr = document.getElementById('__cc-header');
  let drag = false, ox = 0, oy = 0;
  hdr.addEventListener('mousedown', e => {
    drag = true;
    const r = menu.getBoundingClientRect();
    ox = e.clientX - r.left;
    oy = e.clientY - r.top;
    menu.style.transform = 'none';
    menu.style.top  = r.top + 'px';
    menu.style.left = r.left + 'px';
    menu.style.right = 'auto';
  });
  document.addEventListener('mousemove', e => {
    if (drag) {
      menu.style.top  = (e.clientY - oy) + 'px';
      menu.style.left = (e.clientX - ox) + 'px';
    }
  });
  document.addEventListener('mouseup', () => { drag = false; });

})();
