(() => {
  if (document.getElementById('__bm_ui')) {
    document.getElementById('__bm_ui').remove();
    return;
  }

  // ── Parse current GitHub repo from URL ──────────────────────────────────
  const match = location.pathname.match(/^\/([^/]+)\/([^/]+)/);
  if (!match) {
    alert('Open this on a GitHub repository page first.');
    return;
  }
  const [, owner, repo] = match;
  let branch = 'main';

  // ── Inject styles ────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.id = '__bm_style';
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Syne:wght@700;800&display=swap');

    #__bm_ui * { box-sizing: border-box; margin: 0; padding: 0; }

    #__bm_ui {
      position: fixed; top: 24px; right: 24px;
      width: 380px;
      background: #0d0d0f;
      border: 1px solid #222;
      border-radius: 14px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      color: #ccc;
      z-index: 2147483647;
      box-shadow: 0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset;
      overflow: hidden;
      animation: __bm_slidein 0.22s cubic-bezier(0.22,1,0.36,1);
    }
    @keyframes __bm_slidein {
      from { opacity: 0; transform: translateY(-12px) scale(0.97); }
      to   { opacity: 1; transform: none; }
    }

    #__bm_header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 16px 12px;
      background: #111113;
      border-bottom: 1px solid #1e1e22;
      cursor: grab;
    }
    #__bm_header:active { cursor: grabbing; }
    #__bm_logo {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 15px;
      color: #fff;
      letter-spacing: -0.3px;
    }
    #__bm_logo span { color: #f7c948; }
    #__bm_repo_badge {
      font-size: 10px;
      color: #555;
      background: #1a1a1e;
      border: 1px solid #2a2a2e;
      border-radius: 20px;
      padding: 2px 8px;
      max-width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    #__bm_close {
      cursor: pointer; color: #444; font-size: 16px;
      padding: 2px 5px; border-radius: 6px;
      transition: color 0.15s, background 0.15s;
      line-height: 1;
    }
    #__bm_close:hover { color: #fff; background: rgba(255,255,255,0.08); }

    #__bm_body { padding: 14px 16px; display: flex; flex-direction: column; gap: 12px; }

    #__bm_search_wrap { position: relative; }
    #__bm_search {
      width: 100%; padding: 8px 10px 8px 32px;
      background: #111113; border: 1px solid #222;
      border-radius: 8px; color: #ddd; font-family: inherit; font-size: 12px;
      outline: none; transition: border-color 0.15s;
    }
    #__bm_search:focus { border-color: #f7c948; }
    #__bm_search::placeholder { color: #3a3a3f; }
    #__bm_search_icon {
      position: absolute; left: 9px; top: 50%; transform: translateY(-50%);
      color: #3a3a3f; font-size: 14px; pointer-events: none;
    }

    #__bm_list_wrap {
      max-height: 200px; overflow-y: auto;
      border: 1px solid #1e1e22; border-radius: 8px;
      background: #0a0a0c;
    }
    #__bm_list_wrap::-webkit-scrollbar { width: 4px; }
    #__bm_list_wrap::-webkit-scrollbar-thumb { background: #2a2a2e; border-radius: 4px; }

    #__bm_list { list-style: none; }
    #__bm_list li {
      padding: 8px 12px;
      cursor: pointer;
      border-bottom: 1px solid #131316;
      display: flex; align-items: center; gap: 8px;
      transition: background 0.1s;
      color: #999;
    }
    #__bm_list li:last-child { border-bottom: none; }
    #__bm_list li:hover { background: #111113; color: #fff; }
    #__bm_list li.selected { background: #1a1800; color: #f7c948; border-left: 2px solid #f7c948; }
    #__bm_list li .li-icon { font-size: 13px; flex-shrink: 0; }
    #__bm_list li .li-path { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; }
    #__bm_list li .li-size { font-size: 10px; color: #3a3a3f; flex-shrink: 0; }

    #__bm_status {
      font-size: 11px; color: #555; padding: 6px 12px;
      text-align: center; border-bottom: 1px solid #131316;
    }

    #__bm_selected_info {
      background: #0f0f00;
      border: 1px solid #2a2500;
      border-radius: 8px;
      padding: 10px 12px;
      display: none;
      gap: 8px;
      flex-direction: column;
    }
    #__bm_selected_info.visible { display: flex; }
    #__bm_sel_name { color: #f7c948; font-weight: 600; font-size: 12px; }
    #__bm_sel_meta { font-size: 10px; color: #555; }

    #__bm_btn_convert {
      width: 100%; padding: 10px;
      background: #f7c948; border: none; border-radius: 8px;
      font-family: 'Syne', sans-serif; font-weight: 800;
      font-size: 13px; letter-spacing: 0.2px;
      color: #0d0d0f; cursor: pointer;
      transition: background 0.15s, transform 0.1s;
      display: none;
    }
    #__bm_btn_convert.visible { display: block; }
    #__bm_btn_convert:hover { background: #ffd84a; }
    #__bm_btn_convert:active { transform: scale(0.98); }
    #__bm_btn_convert:disabled { background: #3a3a1a; color: #666; cursor: not-allowed; }

    #__bm_result { display: none; flex-direction: column; gap: 10px; }
    #__bm_result.visible { display: flex; }

    #__bm_result_label {
      font-size: 10px; color: #555;
      text-transform: uppercase; letter-spacing: 1px;
    }

    /* ── Bookmarklet display: short fetch+eval string ── */
    #__bm_bookmarklet_wrap {
      position: relative;
      background: #060608;
      border: 1px solid #1e1e22;
      border-radius: 8px;
      padding: 10px 12px;
      word-break: break-all;
      font-size: 10px;
      color: #a0d0ff;
    }
    #__bm_bookmarklet_text { display: block; }

    #__bm_actions { display: flex; gap: 8px; }
    #__bm_btn_copy, #__bm_drag_target {
      flex: 1; padding: 8px;
      border-radius: 8px; border: 1px solid #222;
      font-family: inherit; font-size: 11px;
      cursor: pointer; text-align: center;
      transition: all 0.15s;
    }
    #__bm_btn_copy {
      background: #111113; color: #ccc;
    }
    #__bm_btn_copy:hover { background: #1a1a1e; color: #fff; border-color: #333; }
    #__bm_btn_copy.copied { background: #0a1f0a; color: #4caf50; border-color: #1a4a1a; }

    #__bm_drag_target {
      background: #0d0d18;
      color: #7070ff;
      border-color: #1a1a33;
      text-decoration: none;
      display: flex; align-items: center; justify-content: center; gap: 5px;
    }
    #__bm_drag_target:hover { background: #13132a; border-color: #2a2a55; }

    #__bm_loading {
      text-align: center; padding: 20px;
      color: #444; font-size: 11px;
      display: none;
    }
    #__bm_loading.visible { display: block; }
    @keyframes __bm_pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
    #__bm_loading span { animation: __bm_pulse 1.2s ease-in-out infinite; }

    #__bm_error {
      font-size: 11px; color: #f05; background: #1a000a;
      border: 1px solid #330010; border-radius: 8px;
      padding: 8px 12px; display: none;
    }
    #__bm_error.visible { display: block; }

    #__bm_footer {
      padding: 8px 16px;
      border-top: 1px solid #111113;
      font-size: 10px; color: #333; text-align: center;
    }
  `;
  document.head.appendChild(style);

  // ── Build HTML ───────────────────────────────────────────────────────────
  const ui = document.createElement('div');
  ui.id = '__bm_ui';
  ui.innerHTML = `
    <div id="__bm_header">
      <div id="__bm_logo">book<span>mark</span>let</div>
      <div id="__bm_repo_badge">${owner}/${repo}</div>
      <div id="__bm_close">✕</div>
    </div>
    <div id="__bm_body">
      <div id="__bm_search_wrap">
        <span id="__bm_search_icon">⌕</span>
        <input id="__bm_search" placeholder="filter files..." autocomplete="off" spellcheck="false">
      </div>
      <div id="__bm_list_wrap">
        <div id="__bm_status">fetching repo tree…</div>
        <ul id="__bm_list"></ul>
      </div>
      <div id="__bm_selected_info">
        <div id="__bm_sel_name"></div>
        <div id="__bm_sel_meta"></div>
      </div>
      <div id="__bm_loading"><span>building bookmarklet…</span></div>
      <div id="__bm_error"></div>
      <button id="__bm_btn_convert">⚡ Convert to Bookmarklet</button>
      <div id="__bm_result">
        <div id="__bm_result_label">bookmarklet (fetch + eval)</div>
        <div id="__bm_bookmarklet_wrap">
          <span id="__bm_bookmarklet_text"></span>
        </div>
        <div id="__bm_actions">
          <button id="__bm_btn_copy">📋 Copy</button>
          <a id="__bm_drag_target" href="#" draggable="true">🔖 drag to bookmarks</a>
        </div>
      </div>
    </div>
    <div id="__bm_footer">drag header to move · press again to close</div>
  `;
  document.body.appendChild(ui);

  // ── Element refs ─────────────────────────────────────────────────────────
  const $ = id => document.getElementById(id);
  const list        = $('__bm_list');
  const status      = $('__bm_status');
  const searchInput = $('__bm_search');
  const selectedInfo= $('__bm_selected_info');
  const selName     = $('__bm_sel_name');
  const selMeta     = $('__bm_sel_meta');
  const btnConvert  = $('__bm_btn_convert');
  const result      = $('__bm_result');
  const bmText      = $('__bm_bookmarklet_text');
  const btnCopy     = $('__bm_btn_copy');
  const dragTarget  = $('__bm_drag_target');
  const loading     = $('__bm_loading');
  const errorBox    = $('__bm_error');

  let allFiles = [];
  let selectedFile = null;
  let bookmarkletCode = '';

  // ── Close ────────────────────────────────────────────────────────────────
  $('__bm_close').onclick = () => { ui.remove(); style.remove(); };

  // ── Drag to move ─────────────────────────────────────────────────────────
  const header = $('__bm_header');
  let ox, oy, sx, sy;
  header.addEventListener('mousedown', e => {
    const r = ui.getBoundingClientRect();
    ox = r.left; oy = r.top; sx = e.clientX; sy = e.clientY;
    const move = me => {
      ox += me.clientX - sx; oy += me.clientY - sy;
      sx = me.clientX; sy = me.clientY;
      ui.style.right = 'auto'; ui.style.bottom = 'auto';
      ui.style.left = ox + 'px'; ui.style.top = oy + 'px';
    };
    const up = () => { removeEventListener('mousemove', move); removeEventListener('mouseup', up); };
    addEventListener('mousemove', move); addEventListener('mouseup', up);
  });

  // ── Fetch repo tree ───────────────────────────────────────────────────────
  async function fetchTree() {
    status.textContent = 'fetching repo info…';
    status.style.display = 'block';
    try {
      const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      });
      if (repoRes.status === 403) throw new Error('GitHub API rate limit or access denied.');
      if (repoRes.status === 404) throw new Error(`Repo "${owner}/${repo}" not found or private.`);
      if (!repoRes.ok) throw new Error(`GitHub API error: ${repoRes.status}`);

      const repoData = await repoRes.json();
      branch = repoData.default_branch || 'main';
      status.textContent = `fetching file tree (${branch})…`;

      const treeRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`, {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      });
      if (!treeRes.ok) throw new Error(`Tree fetch failed: ${treeRes.status}`);
      const treeData = await treeRes.json();

      allFiles = (treeData.tree || [])
        .filter(f => f.type === 'blob' && f.path.endsWith('.js'))
        .sort((a, b) => a.path.localeCompare(b.path));

      if (!allFiles.length) {
        status.textContent = `no .js files found in ${owner}/${repo}`;
        return;
      }
      status.style.display = 'none';
      renderList(allFiles);
    } catch(e) {
      status.textContent = '✖ ' + e.message;
      status.style.display = 'block';
    }
  }

  function renderList(files) {
    list.innerHTML = '';
    if (!files.length) {
      list.innerHTML = '<li style="color:#444;padding:12px;text-align:center">no matches</li>';
      return;
    }
    files.forEach(f => {
      const li = document.createElement('li');
      const sizeStr = f.size ? formatSize(f.size) : '';
      const parts = f.path.split('/');
      const filename = parts.pop();
      const dir = parts.length ? parts.join('/') + '/' : '';
      li.innerHTML = `
        <span class="li-icon">𝒋𝒔</span>
        <span class="li-path" title="${f.path}">
          <span style="color:#444">${dir}</span>${filename}
        </span>
        <span class="li-size">${sizeStr}</span>
      `;
      li.onclick = () => selectFile(f, li);
      list.appendChild(li);
    });
  }

  function formatSize(bytes) {
    if (bytes < 1024) return bytes + 'b';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + 'k';
    return (bytes / 1024 / 1024).toFixed(1) + 'M';
  }

  // ── Search ───────────────────────────────────────────────────────────────
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase();
    renderList(q ? allFiles.filter(f => f.path.toLowerCase().includes(q)) : allFiles);
  });

  // ── Select file ──────────────────────────────────────────────────────────
  function selectFile(file, li) {
    document.querySelectorAll('#__bm_list li').forEach(el => el.classList.remove('selected'));
    li.classList.add('selected');
    selectedFile = file;

    selName.textContent = file.path.split('/').pop();
    selMeta.textContent = file.path + (file.size ? ' · ' + formatSize(file.size) : '');
    selectedInfo.classList.add('visible');
    btnConvert.classList.add('visible');

    result.classList.remove('visible');
    errorBox.classList.remove('visible');
    bookmarkletCode = '';
  }

  // ── Convert — outputs short fetch+eval bookmarklet ───────────────────────
  btnConvert.addEventListener('click', async () => {
    if (!selectedFile) return;

    btnConvert.disabled = true;
    loading.classList.add('visible');
    result.classList.remove('visible');
    errorBox.classList.remove('visible');

    try {
      // Build the raw URL for this file
      const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${selectedFile.path}`;

      // The bookmarklet is just a short fetch+eval — no minification needed
      bookmarkletCode = `javascript:fetch('${rawUrl}').then(r=>r.text()).then(t=>eval(t))`;

      bmText.textContent = bookmarkletCode;
      dragTarget.href = bookmarkletCode;

      loading.classList.remove('visible');
      result.classList.add('visible');
    } catch(e) {
      loading.classList.remove('visible');
      errorBox.textContent = '✖ ' + e.message;
      errorBox.classList.add('visible');
    }

    btnConvert.disabled = false;
  });

  // ── Copy ─────────────────────────────────────────────────────────────────
  btnCopy.addEventListener('click', () => {
    if (!bookmarkletCode) return;
    navigator.clipboard.writeText(bookmarkletCode).then(() => {
      btnCopy.textContent = '✓ copied!';
      btnCopy.classList.add('copied');
      setTimeout(() => {
        btnCopy.textContent = '📋 Copy';
        btnCopy.classList.remove('copied');
      }, 2000);
    });
  });

  // ── Drag bookmarklet ─────────────────────────────────────────────────────
  dragTarget.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/uri-list', bookmarkletCode);
    e.dataTransfer.setData('text/plain', bookmarkletCode);
  });
  dragTarget.addEventListener('click', e => e.preventDefault());

  // ── Go ───────────────────────────────────────────────────────────────────
  fetchTree();
})();
