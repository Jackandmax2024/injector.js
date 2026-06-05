(function () {
  if (document.getElementById('__inj')) return;

  // ════════════════════════════════════════════════════════════
  //  PASTE YOUR SCRIPTS HERE
  //  Each key must match a GAMES entry below
  // ════════════════════════════════════════════════════════════

  const SCRIPTS = {

    script1: function () {
   javascript:fetch('https://raw.githubusercontent.com/Jackandmax2024/injector.js/main/ANTIMATTER DIMENSIONS and A DARK ROOMs cheats.js').then(r=>r.text()).then(t=>eval(t))
    },

    script2: function () {
   javascript:fetch('https://raw.githubusercontent.com/Jackandmax2024/injector.js/main/cookie clicker cheats.js').then(r=>r.text()).then(t=>eval(t))   
    },

    script3: function () {
javascript:fetch('https://raw.githubusercontent.com/Jackandmax2024/injector.js/main/factionsvr.js').then(r=>r.text()).then(t=>eval(t))
    },

    script4: function () {
      
    },

    script5: function () {
    
    },

    script6: function () {
    
    },

    script7: function () {
      
    },

    script8: function () {
     
    },

    script9: function () {
    
    },

    script10: function () {
     
    },

  };

  // ════════════════════════════════════════════════════════════
  //  GAME LIST — edit label, icon, and group for each slot
  //  group: buttons in the same group collapse together
  // ════════════════════════════════════════════════════════════

  const GROUPS = [
    {
      label: 'Group 1',         // ← rename this group
      games: [
        { key: 'script1',  icon: '🎮', label: 'a dark room and annimater'  },
        { key: 'script2',  icon: '🎮', label: 'cookie clicker'  },
        { key: 'script3',  icon: '🎮', label: 'factionsvr'  },
        { key: 'script4',  icon: '🎮', label: 'Script 4'  },
      ],
    },
    {
      label: 'Group 2',         // ← rename this group
      games: [
        { key: 'script5',  icon: '🎮', label: 'Script 5'  },
        { key: 'script6',  icon: '🎮', label: 'Script 6'  },
        { key: 'script7',  icon: '🎮', label: 'Script 7'  },
      ],
    },
    {
      label: 'Group 3',         // ← rename this group
      games: [
        { key: 'script8',  icon: '🎮', label: 'Script 8'  },
        { key: 'script9',  icon: '🎮', label: 'Script 9'  },
        { key: 'script10', icon: '🎮', label: 'Script 10' },
      ],
    },
  ];

  // ════════════════════════════════════════════════════════════
  //  MENU — do not edit below this line
  // ════════════════════════════════════════════════════════════

  const style = document.createElement('style');
  style.textContent = `
    #__inj *, #__inj *::before, #__inj *::after {
      box-sizing: border-box; margin: 0; padding: 0;
      font-family: 'Segoe UI', sans-serif;
    }
    #__inj {
      position: fixed; top: 60px; right: 20px;
      z-index: 2147483647;
      width: 300px;
      background: #111;
      border: 1px solid #2a2a2a;
      border-radius: 14px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.85);
      overflow: hidden;
    }
    #__inj-header {
      background: #181818;
      padding: 10px 14px;
      display: flex; align-items: center; justify-content: space-between;
      cursor: move; border-bottom: 1px solid #222;
    }
    #__inj-title { font-size: 13px; font-weight: 700; color: #eee; }
    #__inj-hint {
      font-size: 11px; color: #555;
      background: #1e1e1e; border: 1px solid #2a2a2a;
      border-radius: 5px; padding: 2px 7px;
    }
    #__inj-close {
      background: none; border: none; color: #555;
      font-size: 18px; cursor: pointer; padding: 0 0 0 8px; line-height: 1;
    }
    #__inj-close:hover { color: #eee; }
    #__inj-body {
      padding: 12px; display: flex; flex-direction: column; gap: 8px;
      max-height: 80vh; overflow-y: auto;
    }
    #__inj-body::-webkit-scrollbar { width: 4px; }
    #__inj-body::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }

    /* ── Collapsible group ── */
    .inj-group { display: flex; flex-direction: column; gap: 0; }
    .inj-group-header {
      display: flex; align-items: center; justify-content: space-between;
      background: #181818; border: 1px solid #2a2a2a; border-radius: 8px;
      padding: 7px 10px; cursor: pointer; user-select: none;
      font-size: 11px; font-weight: 700; color: #666; letter-spacing: 0.8px;
      text-transform: uppercase; transition: color 0.12s, border-color 0.12s;
    }
    .inj-group-header:hover { color: #bbb; border-color: #444; }
    .inj-group-header.open { color: #eee; border-color: #444; border-radius: 8px 8px 0 0; }
    .inj-group-arrow { font-size: 10px; transition: transform 0.2s; }
    .inj-group-header.open .inj-group-arrow { transform: rotate(180deg); }
    .inj-group-body {
      display: none; padding: 8px;
      background: #161616; border: 1px solid #2a2a2a; border-top: none;
      border-radius: 0 0 8px 8px;
    }
    .inj-group-body.open { display: block; }
    .inj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }

    /* ── Buttons ── */
    .inj-btn {
      background: #1a1a1a; border: 1px solid #2a2a2a;
      border-radius: 10px; padding: 14px 10px;
      cursor: pointer; text-align: center; color: #aaa;
      transition: background 0.12s, border-color 0.12s, color 0.12s;
      display: flex; flex-direction: column; align-items: center; gap: 6px;
      width: 100%;
    }
    .inj-btn:hover { background: #222; border-color: #444; color: #eee; }
    .inj-btn:active { transform: scale(0.97); }
    .inj-btn .icon { font-size: 22px; line-height: 1; }
    .inj-btn .name { font-size: 12px; font-weight: 600; }

    /* ── Status ── */
    #__inj-status {
      font-size: 11px; text-align: center;
      min-height: 16px; color: #555;
    }
    #__inj-status.ok  { color: #4caf7d; }
    #__inj-status.err { color: #e06c75; }
    #__inj-status.run { color: #9b8cff; }
  `;
  document.head.appendChild(style);

  // ── Build HTML ──────────────────────────────────────────────
  const menu = document.createElement('div');
  menu.id = '__inj';

  const groupsHTML = GROUPS.map((group, gi) => `
    <div class="inj-group">
      <div class="inj-group-header" data-group="${gi}">
        <span>${group.label}</span>
        <span class="inj-group-arrow">▼</span>
      </div>
      <div class="inj-group-body" data-group-body="${gi}">
        <div class="inj-grid">
          ${group.games.map(g => `
            <button class="inj-btn" data-game="${g.key}">
              <span class="icon">${g.icon}</span>
              <span class="name">${g.label}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  menu.innerHTML = `
    <div id="__inj-header">
      <span id="__inj-title">⚡ Injector</span>
      <div style="display:flex;align-items:center;gap:8px;">
        <span id="__inj-hint">Ctrl+Q</span>
        <button id="__inj-close">✕</button>
      </div>
    </div>
    <div id="__inj-body">
      ${groupsHTML}
      <div id="__inj-status"></div>
    </div>
  `;
  document.body.appendChild(menu);

  // ── Collapsible logic ───────────────────────────────────────
  document.querySelectorAll('.inj-group-header').forEach(header => {
    header.addEventListener('click', () => {
      const gi = header.dataset.group;
      const body = menu.querySelector(`[data-group-body="${gi}"]`);
      const open = body.classList.toggle('open');
      header.classList.toggle('open', open);
    });
  });

  // Open the first group by default
  const firstHeader = menu.querySelector('.inj-group-header');
  const firstBody   = menu.querySelector('.inj-group-body');
  if (firstHeader && firstBody) {
    firstHeader.classList.add('open');
    firstBody.classList.add('open');
  }

  // ── Status helper ───────────────────────────────────────────
  const statusEl = document.getElementById('__inj-status');
  function setStatus(msg, type) {
    statusEl.textContent = msg;
    statusEl.className = type || '';
    clearTimeout(statusEl._t);
    statusEl._t = setTimeout(() => { statusEl.textContent = ''; statusEl.className = ''; }, 2500);
  }

  // ── Button clicks ───────────────────────────────────────────
  document.querySelectorAll('.inj-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.game;
      const label = btn.querySelector('.name').textContent;
      if (typeof SCRIPTS[key] !== 'function') {
        setStatus(`No script for "${label}" yet`, 'err');
        return;
      }
      setStatus(`Running ${label}...`, 'run');
      try {
        SCRIPTS[key]();
        setStatus(`✓ ${label} ran!`, 'ok');
      } catch (e) {
        setStatus('Error: ' + e.message, 'err');
      }
    });
  });

  // ── Close / Ctrl+Q ──────────────────────────────────────────
  document.getElementById('__inj-close').addEventListener('click', () => {
    menu.style.display = 'none';
  });

  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'q') {
      e.preventDefault();
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }
  });

  // ── Drag ────────────────────────────────────────────────────
  const hdr = document.getElementById('__inj-header');
  let drag = false, ox = 0, oy = 0;
  hdr.addEventListener('mousedown', e => {
    drag = true;
    const r = menu.getBoundingClientRect();
    ox = e.clientX - r.left; oy = e.clientY - r.top;
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
