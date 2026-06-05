// ============================================================
//  IDLE GAME CHEAT MENU
//  Tab 1: Antimatter Dimensions  (https://ivark.github.io/)
//  Tab 2: A Dark Room            (https://adarkroom.doublespeakgames.com/)
//
//  Paste into F12 console while on the game page.
//  All cheats use verified real globals — no guessing.
// ============================================================

(function () {
  if (document.getElementById('__idle_cheat_root')) {
    console.warn('[Cheats] Already injected!'); return;
  }

  // ── detect which game we're on ───────────────────────────
  const isAD  = typeof player !== 'undefined' && typeof Currency !== 'undefined';
  const isADR = typeof $SM   !== 'undefined' && typeof Notifications !== 'undefined';
  const game  = isAD ? 'AD' : isADR ? 'ADR' : 'UNKNOWN';

  // ══════════════════════════════════════════════════════════
  //  ANTIMATTER DIMENSIONS — cheat functions
  // ══════════════════════════════════════════════════════════
  const AD = {
    addAntimatter: () => {
      Currency.antimatter.add(new Decimal('1e1000'));
      log('⚛️ Added 1e1000 antimatter');
    },
    addIP: () => {
      Currency.infinityPoints.add(new Decimal('1e300'));
      log('∞ Added 1e300 Infinity Points');
    },
    addEP: () => {
      Currency.eternityPoints.add(new Decimal('1e300'));
      log('⏳ Added 1e300 Eternity Points');
    },
    addRM: () => {
      if (typeof Currency.realityMachines !== 'undefined') {
        Currency.realityMachines.add(new Decimal('1e6'));
        log('🌌 Added 1e6 Reality Machines');
      } else log('⚠ Reality not unlocked yet', 'warn');
    },
    maxAllDims: () => {
      for (let i = 1; i <= 8; i++) {
        if (typeof AntimatterDimension === 'function' || typeof AntimatterDimensions !== 'undefined') {
          try { AntimatterDimension(i).buyMax(); } catch(e) {}
        }
      }
      log('📐 Bought max all 8 dimensions');
    },
    unlockAllAchieves: () => {
      Achievements.all.filter(a => !a.isUnlocked).forEach(a => {
        try { a.unlock(); } catch(e) {}
      });
      log('🏆 Unlocked all achievements');
    },
    completeAllChallenges: () => {
      NormalChallenges.all.forEach(c => {
        try { c.complete(); } catch(e) {}
      });
      log('✅ Completed all normal challenges');
    },
    addInfinities: () => {
      player.infinities = player.infinities.add(1e6);
      log('∞ Added 1,000,000 infinities');
    },
    addEternities: () => {
      player.eternities = player.eternities.add(1e6);
      log('⏳ Added 1,000,000 eternities');
    },
    bigCrunch: () => {
      try { bigCrunchReset(true); log('💥 Big Crunched!'); }
      catch(e) { log('⚠ Big Crunch not available yet', 'warn'); }
    },
    eternity: () => {
      try { eternityReset(true, true); log('⏳ Eternity reset done!'); }
      catch(e) { log('⚠ Eternity not available yet', 'warn'); }
    },
    tickspeedMax: () => {
      try {
        const cost = Tickspeed.continuumValue !== undefined ? 0 : 1;
        Currency.antimatter.add(new Decimal('1e999'));
        Tickspeed.buyMax();
        log('⚡ Maxed tickspeed');
      } catch(e) { log('⚠ Could not max tickspeed', 'warn'); }
    },
    printStats: () => {
      const am = player.antimatter ? player.antimatter.toString() : '?';
      const ip = player.infinityPoints ? player.infinityPoints.toString() : '?';
      const ep = player.eternityPoints ? player.eternityPoints.toString() : '?';
      log(`📊 AM: ${am} | IP: ${ip} | EP: ${ep}`);
      console.table({ antimatter: am, infinityPoints: ip, eternityPoints: ep, infinities: player.infinities?.toString(), eternities: player.eternities?.toString() });
    }
  };

  // ══════════════════════════════════════════════════════════
  //  A DARK ROOM — cheat functions (using real $SM, World, Path globals)
  // ══════════════════════════════════════════════════════════
  const ADR_RESOURCES = ['wood','fur','meat','cured meat','leather','iron','coal','steel','sulphur','scales','teeth','cloth','charm','torch','bullets','medicine','bait','compass','energy cell','alien alloy','glowstone','hypo','stim'];
  const ADR_WEAPONS   = ['bone spear','iron sword','steel sword','bayonet','rifle','laser rifle','plasma rifle','energy blade','grenade','bolas','disruptor'];
  const ADR_PERKS     = ['barbarian','boxer','desert rat','evasive','gastronome','martial artist','scout','slow metabolism','stealthy','unarmed master'];
  const ADR_BLUEPRINTS= ['energy blade','fluid recycler','cargo drone','kinetic armour','disruptor','hypo','stim','plasma rifle','glowstone'];

  let _intervals = { stoke:null, gather:null, traps:null, attack:null, heal:null, ship:null };

  const ADR = {
    giveResources: (amt=10000) => {
      ADR_RESOURCES.forEach(r => $SM.add(`stores["${r}"]`, amt));
      $SM.set('stores.compass', 1);
      log(`🪵 Gave ${amt} of every resource`);
    },
    giveWeapons: (amt=100) => {
      ADR_WEAPONS.forEach(w => $SM.add(`stores["${w}"]`, amt));
      log(`⚔️ Gave ${amt} of every weapon`);
    },
    giveBlueprints: () => {
      ADR_BLUEPRINTS.forEach(b => $SM.set(`character.blueprints["${b}"]`, true));
      log('📋 Unlocked all blueprints');
    },
    givePerks: () => {
      ADR_PERKS.forEach(p => $SM.set(`character.perks["${p}"]`, true));
      log('⭐ Gave all perks');
    },
    maxHP: () => {
      if (typeof World === 'undefined') { log('⚠ Go to Dusty Path first', 'warn'); return; }
      World.BASE_HEALTH = 999999;
      World.health = World.getMaxHealth();
      log('❤️ Set base HP to 999,999');
    },
    bigBag: () => {
      if (typeof Path === 'undefined') { log('⚠ Go to Dusty Path first', 'warn'); return; }
      Path.DEFAULT_BAG_SPACE = 999999;
      log('🎒 Set bag space to 999,999');
    },
    noFoodWater: () => {
      if (typeof World === 'undefined') { log('⚠ Go to Dusty Path first', 'warn'); return; }
      World.MOVES_PER_FOOD  = 999999;
      World.MOVES_PER_WATER = 999999;
      log('💧 Food/water consumption disabled');
    },
    superHeal: () => {
      if (typeof World === 'undefined') { log('⚠ Go to Dusty Path first', 'warn'); return; }
      World.MEAT_HEAL = 999999;
      World.MEDS_HEAL = 999999;
      log('💊 Meat & meds now heal 999,999 HP');
    },
    resetDeathTimer: () => {
      const btn = document.getElementById('embarkButton');
      if (btn && typeof Button !== 'undefined') { Button.clearCooldown($(btn)); log('⏱ Death cooldown cleared'); }
      else log('⚠ No death cooldown active', 'warn');
    },
    toggleAutoStoke: () => {
      if (_intervals.stoke) {
        clearInterval(_intervals.stoke); _intervals.stoke = null; log('Auto Stoke OFF');
      } else {
        _intervals.stoke = setInterval(() => {
          const sb = document.getElementById('stokeButton');
          if (sb) sb.click();
        }, 200);
        log('🔥 Auto Stoke ON');
      }
    },
    toggleAutoGather: () => {
      if (_intervals.gather) {
        clearInterval(_intervals.gather); _intervals.gather = null; log('Auto Gather OFF');
      } else {
        _intervals.gather = setInterval(() => {
          const gb = document.getElementById('gatherButton');
          if (gb) gb.click();
        }, 200);
        log('🪵 Auto Gather ON');
      }
    },
    toggleAutoTraps: () => {
      if (_intervals.traps) {
        clearInterval(_intervals.traps); _intervals.traps = null; log('Auto Traps OFF');
      } else {
        _intervals.traps = setInterval(() => {
          const tb = document.getElementById('trapsButton');
          if (tb) tb.click();
        }, 500);
        log('🪤 Auto Check Traps ON');
      }
    },
    toggleAutoAttack: () => {
      if (_intervals.attack) {
        clearInterval(_intervals.attack); _intervals.attack = null; log('Auto Attack OFF');
      } else {
        const allAttack = ['fists','bone-spear','iron-sword','steel-sword','bayonet','energy-blade','disruptor','rifle','laser-rifle','grenade','bolas','plasma-rifle'];
        _intervals.attack = setInterval(() => {
          allAttack.forEach(id => { const el = document.getElementById('attack_'+id); if (el) el.click(); });
        }, 100);
        log('⚔️ Auto Attack ON');
      }
    },
    toggleAutoHeal: () => {
      if (_intervals.heal) {
        clearInterval(_intervals.heal); _intervals.heal = null; log('Auto Heal OFF');
      } else {
        _intervals.heal = setInterval(() => {
          ['eat','meds','hypo','use-stim','shld'].forEach(id => { const el = document.getElementById(id); if (el) el.click(); });
        }, 100);
        log('💊 Auto Heal ON');
      }
    },
    toggleAutoShip: () => {
      if (_intervals.ship) {
        clearInterval(_intervals.ship); _intervals.ship = null; log('Auto Ship OFF');
      } else {
        _intervals.ship = setInterval(() => {
          const rb = document.getElementById('reinforceButton');
          const eb = document.getElementById('engineButton');
          if (rb) rb.click();
          if (eb) eb.click();
        }, 100);
        log('🚀 Auto Ship Upgrade ON');
      }
    }
  };

  // ══════════════════════════════════════════════════════════
  //  BUILD UI
  // ══════════════════════════════════════════════════════════
  const root = document.createElement('div');
  root.id = '__idle_cheat_root';

  // Colour themes per game
  const theme = {
    AD:  { accent: '#7b5ff5', bg: '#09060f', panel: '#110b1c', border: '#2a1a5e', text: '#d4c4ff', dim: '#4a3a7a', glow: '#7b5ff522' },
    ADR: { accent: '#c8781a', bg: '#0f0900', panel: '#1a0f00', border: '#4a2800', text: '#f5ddb0', dim: '#6a4010', glow: '#c8781a22' },
    UNKNOWN: { accent: '#00ff88', bg: '#0a0c10', panel: '#0d1a13', border: '#1e3a2f', text: '#c8ffd4', dim: '#3a6e52', glow: '#00ff8822' }
  }[game];

  root.innerHTML = `
<style>
  #__idle_cheat_root {
    position:fixed; top:20px; right:20px; z-index:999999;
    width:320px; background:${theme.bg}; border:1px solid ${theme.border};
    border-radius:12px; font-family:'Courier New',monospace;
    color:${theme.text}; box-shadow:0 0 24px ${theme.glow};
    user-select:none; max-height:90vh; display:flex; flex-direction:column;
  }
  #__ic_titlebar {
    background:${theme.panel}; border-bottom:1px solid ${theme.border};
    padding:12px 16px; display:flex; justify-content:space-between; align-items:center;
    border-radius:12px 12px 0 0; cursor:move; flex-shrink:0;
  }
  #__ic_title { font-size:13px; color:${theme.accent}; letter-spacing:.1em; display:flex; align-items:center; gap:8px; }
  #__ic_dot { width:8px; height:8px; border-radius:50%; background:${theme.accent}; animation:icpulse 1.5s infinite; }
  @keyframes icpulse { 0%,100%{opacity:1} 50%{opacity:.2} }
  #__ic_close { cursor:pointer; color:#ff6666; font-size:18px; line-height:1; }
  #__ic_tabs { display:flex; background:${theme.panel}; border-bottom:1px solid ${theme.border}; flex-shrink:0; }
  .ic-tab {
    flex:1; padding:9px 6px; text-align:center; font-size:11px; cursor:pointer;
    letter-spacing:.06em; color:${theme.dim}; border-bottom:2px solid transparent;
    transition:.15s;
  }
  .ic-tab:hover { color:${theme.text}; }
  .ic-tab.active { color:${theme.accent}; border-bottom-color:${theme.accent}; }
  #__ic_body { padding:12px 14px; overflow-y:auto; flex:1; display:flex; flex-direction:column; gap:8px; }
  .ic-page { display:none; flex-direction:column; gap:8px; }
  .ic-page.active { display:flex; }
  .ic-section { font-size:9px; letter-spacing:.2em; color:${theme.dim}; margin:4px 0 1px; }
  .ic-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px; }
  .ic-btn {
    background:${theme.panel}; border:1px solid ${theme.border};
    border-radius:7px; color:${theme.text}; font-family:inherit; font-size:11px;
    padding:9px 10px; cursor:pointer; text-align:left; transition:.15s;
    display:flex; align-items:center; gap:6px; letter-spacing:.02em;
  }
  .ic-btn:hover { border-color:${theme.accent}88; color:${theme.accent}; background:${theme.panel}ee; }
  .ic-btn:active { transform:scale(.97); }
  .ic-btn.wide { grid-column:1/-1; }
  .ic-btn.toggle-on { border-color:${theme.accent}; color:${theme.accent}; background:${theme.accent}11; }
  .ic-row {
    background:${theme.panel}; border:1px solid ${theme.border}; border-radius:7px;
    padding:9px 12px; display:flex; justify-content:space-between; align-items:center;
    font-size:12px;
  }
  .ic-toggle { position:relative; width:36px; height:19px; cursor:pointer; }
  .ic-toggle input { opacity:0; width:0; height:0; }
  .ic-track {
    position:absolute; inset:0; background:${theme.border};
    border-radius:19px; border:1px solid ${theme.dim}; transition:.2s;
  }
  .ic-track::after {
    content:''; position:absolute; left:2px; top:2px;
    width:13px; height:13px; border-radius:50%;
    background:${theme.dim}; transition:.2s;
  }
  .ic-toggle input:checked + .ic-track { background:${theme.accent}22; border-color:${theme.accent}; }
  .ic-toggle input:checked + .ic-track::after { transform:translateX(17px); background:${theme.accent}; }
  .ic-log {
    background:${theme.bg}; border:1px solid ${theme.border}; border-radius:7px;
    padding:8px 10px; font-size:10px; height:70px; overflow-y:auto;
    display:flex; flex-direction:column; gap:2px;
  }
  .icl { color:${theme.accent}; }
  .icl.warn { color:#ffd700; }
  .icl.info { color:${theme.dim}; }
  #__ic_footer {
    border-top:1px solid ${theme.border}; padding:8px 14px;
    display:flex; justify-content:space-between; font-size:9px;
    color:${theme.dim}; border-radius:0 0 12px 12px; flex-shrink:0;
  }
  #__ic_status { transition:.3s; }
</style>

<div id="__ic_titlebar">
  <div id="__ic_title"><div id="__ic_dot"></div>IDLE CHEAT MENU</div>
  <div id="__ic_close">✕</div>
</div>

<div id="__ic_tabs">
  <div class="ic-tab ${game==='AD'?'active':''}" data-tab="ad">⚛ Antimatter Dims</div>
  <div class="ic-tab ${game==='ADR'?'active':''}" data-tab="adr">🕯 A Dark Room</div>
  <div class="ic-tab" data-tab="log">📋 Log</div>
</div>

<div id="__ic_body">

  <!-- ── ANTIMATTER DIMENSIONS ── -->
  <div class="ic-page ${game==='AD'?'active':''}" id="ic-page-ad">
    <div class="ic-section">// currency</div>
    <div class="ic-grid">
      <button class="ic-btn" id="ic_ad_am">⚛ +1e1000 Antimatter</button>
      <button class="ic-btn" id="ic_ad_ip">∞ +1e300 Inf Points</button>
      <button class="ic-btn" id="ic_ad_ep">⏳ +1e300 Et Points</button>
      <button class="ic-btn" id="ic_ad_rm">🌌 +1e6 Reality Mach</button>
    </div>
    <div class="ic-section">// dimensions & progression</div>
    <div class="ic-grid">
      <button class="ic-btn" id="ic_ad_dims">📐 Max All Dims</button>
      <button class="ic-btn" id="ic_ad_tick">⚡ Max Tickspeed</button>
      <button class="ic-btn" id="ic_ad_inf">∞ +1M Infinities</button>
      <button class="ic-btn" id="ic_ad_et">⏳ +1M Eternities</button>
    </div>
    <div class="ic-section">// resets & unlocks</div>
    <div class="ic-grid">
      <button class="ic-btn" id="ic_ad_crunch">💥 Big Crunch</button>
      <button class="ic-btn" id="ic_ad_eternity">🔁 Eternity Reset</button>
      <button class="ic-btn" id="ic_ad_ach">🏆 All Achievements</button>
      <button class="ic-btn" id="ic_ad_chal">✅ All Challenges</button>
    </div>
    <div class="ic-section">// debug</div>
    <div class="ic-grid">
      <button class="ic-btn wide" id="ic_ad_stats">📊 Print Stats to Console</button>
    </div>
    <div class="ic-section">// note</div>
    <div style="font-size:10px;color:${theme.dim};line-height:1.5;padding:4px 0;">
      Play at: <span style="color:${theme.accent}">ivark.github.io</span> &nbsp;|&nbsp; Open F12 console first to unlock secret achievement, then paste this script.
    </div>
  </div>

  <!-- ── A DARK ROOM ── -->
  <div class="ic-page ${game==='ADR'?'active':''}" id="ic-page-adr">
    <div class="ic-section">// instant give</div>
    <div class="ic-grid">
      <button class="ic-btn" id="ic_adr_res">🪵 All Resources ×10k</button>
      <button class="ic-btn" id="ic_adr_wep">⚔️ All Weapons ×100</button>
      <button class="ic-btn" id="ic_adr_bp">📋 All Blueprints</button>
      <button class="ic-btn" id="ic_adr_perks">⭐ All Perks</button>
    </div>
    <div class="ic-section">// stat boosts</div>
    <div class="ic-grid">
      <button class="ic-btn" id="ic_adr_hp">❤️ Max HP (999k)</button>
      <button class="ic-btn" id="ic_adr_bag">🎒 Max Bag (999k)</button>
      <button class="ic-btn" id="ic_adr_food">💧 No Food/Water Use</button>
      <button class="ic-btn" id="ic_adr_heal">💊 Super Heal Items</button>
    </div>
    <div class="ic-section">// automation</div>
    <div class="ic-grid">
      <div class="ic-row" style="grid-column:1/-1">
        <span>🔥 Auto Stoke Fire</span>
        <label class="ic-toggle"><input type="checkbox" id="ic_tog_stoke"><span class="ic-track"></span></label>
      </div>
      <div class="ic-row" style="grid-column:1/-1">
        <span>🪵 Auto Gather Wood</span>
        <label class="ic-toggle"><input type="checkbox" id="ic_tog_gather"><span class="ic-track"></span></label>
      </div>
      <div class="ic-row" style="grid-column:1/-1">
        <span>🪤 Auto Check Traps</span>
        <label class="ic-toggle"><input type="checkbox" id="ic_tog_traps"><span class="ic-track"></span></label>
      </div>
      <div class="ic-row" style="grid-column:1/-1">
        <span>⚔️ Auto Attack</span>
        <label class="ic-toggle"><input type="checkbox" id="ic_tog_attack"><span class="ic-track"></span></label>
      </div>
      <div class="ic-row" style="grid-column:1/-1">
        <span>💊 Auto Heal</span>
        <label class="ic-toggle"><input type="checkbox" id="ic_tog_heal"><span class="ic-track"></span></label>
      </div>
      <div class="ic-row" style="grid-column:1/-1">
        <span>🚀 Auto Upgrade Ship</span>
        <label class="ic-toggle"><input type="checkbox" id="ic_tog_ship"><span class="ic-track"></span></label>
      </div>
    </div>
    <div class="ic-section">// utility</div>
    <div class="ic-grid">
      <button class="ic-btn wide" id="ic_adr_death">⏱ Reset Death Cooldown</button>
    </div>
    <div class="ic-section">// note</div>
    <div style="font-size:10px;color:${theme.dim};line-height:1.5;padding:4px 0;">
      Play at: <span style="color:${theme.accent}">adarkroom.doublespeakgames.com</span><br>
      Automation cheats require the relevant section to be unlocked first.
    </div>
  </div>

  <!-- ── LOG ── -->
  <div class="ic-page" id="ic-page-log">
    <div class="ic-section">// activity log</div>
    <div class="ic-log" id="__ic_log">
      <div class="icl info">// cheat menu loaded — game: ${game === 'UNKNOWN' ? 'not detected (open on game page)' : game}</div>
    </div>
    <button class="ic-btn wide" id="ic_clearlog" style="margin-top:2px;">🗑 Clear Log</button>
  </div>

</div>
<div id="__ic_footer">
  <span>$SM · player · World · Currency</span>
  <span id="__ic_status">IDLE</span>
</div>
`;

  document.body.appendChild(root);

  // ── Log ───────────────────────────────────────────────────
  function log(msg, type) {
    const box = document.getElementById('__ic_log');
    const el = document.createElement('div');
    el.className = 'icl' + (type ? ' '+type : '');
    const ts = new Date().toLocaleTimeString('en',{hour12:false});
    el.textContent = `[${ts}] ${msg}`;
    box.appendChild(el);
    box.scrollTop = box.scrollHeight;
    flash();
  }
  function flash() {
    const s = document.getElementById('__ic_status');
    s.textContent = 'ACTIVE'; s.style.color = theme.accent;
    clearTimeout(s._t);
    s._t = setTimeout(() => { s.textContent='IDLE'; s.style.color=''; }, 1400);
  }

  // ── Tabs ──────────────────────────────────────────────────
  document.querySelectorAll('.ic-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.ic-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.ic-page').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('ic-page-'+tab.dataset.tab)?.classList.add('active');
    };
  });

  // ── AD buttons ───────────────────────────────────────────
  const adBtns = {
    ic_ad_am:      AD.addAntimatter,
    ic_ad_ip:      AD.addIP,
    ic_ad_ep:      AD.addEP,
    ic_ad_rm:      AD.addRM,
    ic_ad_dims:    AD.maxAllDims,
    ic_ad_tick:    AD.tickspeedMax,
    ic_ad_inf:     AD.addInfinities,
    ic_ad_et:      AD.addEternities,
    ic_ad_crunch:  AD.bigCrunch,
    ic_ad_eternity:AD.eternity,
    ic_ad_ach:     AD.unlockAllAchieves,
    ic_ad_chal:    AD.completeAllChallenges,
    ic_ad_stats:   AD.printStats,
  };
  Object.entries(adBtns).forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (el) el.onclick = () => {
      if (!isAD) { log('⚠ Open this on ivark.github.io first!', 'warn'); return; }
      try { fn(); } catch(e) { log('⚠ '+e.message, 'warn'); }
    };
  });

  // ── ADR buttons ──────────────────────────────────────────
  const adrBtns = {
    ic_adr_res:   ADR.giveResources,
    ic_adr_wep:   ADR.giveWeapons,
    ic_adr_bp:    ADR.giveBlueprints,
    ic_adr_perks: ADR.givePerks,
    ic_adr_hp:    ADR.maxHP,
    ic_adr_bag:   ADR.bigBag,
    ic_adr_food:  ADR.noFoodWater,
    ic_adr_heal:  ADR.superHeal,
    ic_adr_death: ADR.resetDeathTimer,
  };
  Object.entries(adrBtns).forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (el) el.onclick = () => {
      if (!isADR) { log('⚠ Open this on adarkroom.doublespeakgames.com first!', 'warn'); return; }
      try { fn(); } catch(e) { log('⚠ '+e.message, 'warn'); }
    };
  });

  // ── ADR toggles ──────────────────────────────────────────
  const adrToggles = {
    ic_tog_stoke:  ADR.toggleAutoStoke,
    ic_tog_gather: ADR.toggleAutoGather,
    ic_tog_traps:  ADR.toggleAutoTraps,
    ic_tog_attack: ADR.toggleAutoAttack,
    ic_tog_heal:   ADR.toggleAutoHeal,
    ic_tog_ship:   ADR.toggleAutoShip,
  };
  Object.entries(adrToggles).forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (el) el.onchange = () => {
      if (!isADR) { log('⚠ Open this on adarkroom.doublespeakgames.com first!', 'warn'); el.checked=false; return; }
      try { fn(); } catch(e) { log('⚠ '+e.message, 'warn'); el.checked=!el.checked; }
    };
  });

  // ── Log clear ────────────────────────────────────────────
  document.getElementById('ic_clearlog').onclick = () => {
    document.getElementById('__ic_log').innerHTML = '<div class="icl info">// log cleared</div>';
  };

  // ── Close ────────────────────────────────────────────────
  document.getElementById('__ic_close').onclick = () => {
    Object.values(_intervals).forEach(i => i && clearInterval(i));
    root.remove();
    console.log('[Cheats] Closed & cleaned up.');
  };

  // ── Drag ─────────────────────────────────────────────────
  let drag=false, ox=0, oy=0;
  document.getElementById('__ic_titlebar').addEventListener('mousedown', e => {
    drag=true; ox=e.clientX-root.getBoundingClientRect().left; oy=e.clientY-root.getBoundingClientRect().top;
  });
  document.addEventListener('mousemove', e => {
    if (!drag) return;
    root.style.right='auto'; root.style.left=(e.clientX-ox)+'px'; root.style.top=(e.clientY-oy)+'px';
  });
  document.addEventListener('mouseup', () => drag=false);

  // ── Auto-switch tab to detected game ────────────────────
  if (game !== 'UNKNOWN') {
    document.querySelector(`[data-tab="${game.toLowerCase()}"]`)?.click();
  }

  console.log(`%c[Idle Cheats] Loaded! Detected game: ${game}`, `color:${theme.accent};font-weight:bold`);
})();
