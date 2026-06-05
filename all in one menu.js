(function () {
  if (document.getElementById('__inj')) return;

  // ════════════════════════════════════════════════════════════
  //  PASTE YOUR SCRIPTS HERE
  //  Each key must match a GAMES entry below
  // ════════════════════════════════════════════════════════════

  const SCRIPTS = {

    script1: function (javascript:(function%20()%20%7B%20if%20(document.getElementById('__cc-menu'))%20return%3B%20const%20G%20%3D%20()%20%3D%3E%20window.Game%3B%20const%20ok%20%3D%20()%20%3D%3E%20typeof%20window.Game%20!%3D%3D%20'undefined'%3B%20function%20status(msg%2C%20type)%20%7B%20const%20el%20%3D%20document.getElementById('__cc-status')%3B%20if%20(!el)%20return%3B%20el.textContent%20%3D%20msg%3B%20el.style.color%20%3D%20type%20%3D%3D%3D%20'err'%20%3F%20'%23e06c75'%20%3A%20type%20%3D%3D%3D%20'ok'%20%3F%20'%234caf7d'%20%3A%20'%239b8cff'%3B%20clearTimeout(el._t)%3B%20el._t%20%3D%20setTimeout(()%20%3D%3E%20%7B%20el.textContent%20%3D%20''%3B%20%7D%2C%202500)%3B%20%7D%20function%20need()%20%7B%20if%20(!ok())%20%7B%20status('Game%20not%20found%20%E2%80%94%20run%20this%20on%20Cookie%20Clicker!'%2C%20'err')%3B%20return%20false%3B%20%7D%20return%20true%3B%20%7D%20const%20style%20%3D%20document.createElement('style')%3B%20style.textContent%20%3D%20%60%20%23__cc-menu%20*%2C%20%23__cc-menu%20*%3A%3Abefore%2C%20%23__cc-menu%20*%3A%3Aafter%20%7B%20box-sizing%3A%20border-box%3B%20margin%3A%200%3B%20padding%3A%200%3B%20font-family%3A%20'Segoe%20UI'%2C%20sans-serif%3B%20%7D%20%23__cc-menu%20%7B%20position%3A%20fixed%3B%20top%3A%2060px%3B%20right%3A%2020px%3B%20z-index%3A%202147483647%3B%20width%3A%20310px%3B%20background%3A%20%23111%3B%20border%3A%201px%20solid%20%232a2a2a%3B%20border-radius%3A%2014px%3B%20box-shadow%3A%200%2020px%2060px%20rgba(0%2C0%2C0%2C0.85)%3B%20overflow%3A%20hidden%3B%20%7D%20%23__cc-header%20%7B%20background%3A%20%23181818%3B%20padding%3A%2010px%2014px%3B%20display%3A%20flex%3B%20align-items%3A%20center%3B%20justify-content%3A%20space-between%3B%20cursor%3A%20move%3B%20border-bottom%3A%201px%20solid%20%23222%3B%20%7D%20%23__cc-title%20%7B%20font-size%3A%2013px%3B%20font-weight%3A%20700%3B%20color%3A%20%23eee%3B%20letter-spacing%3A%200.4px%3B%20%7D%20%23__cc-hint%20%7B%20font-size%3A%2011px%3B%20color%3A%20%23555%3B%20background%3A%20%231e1e1e%3B%20border%3A%201px%20solid%20%232a2a2a%3B%20border-radius%3A%205px%3B%20padding%3A%202px%207px%3B%20%7D%20%23__cc-close%20%7B%20background%3A%20none%3B%20border%3A%20none%3B%20color%3A%20%23555%3B%20font-size%3A%2018px%3B%20cursor%3A%20pointer%3B%20padding%3A%200%200%200%208px%3B%20line-height%3A%201%3B%20%7D%20%23__cc-close%3Ahover%20%7B%20color%3A%20%23eee%3B%20%7D%20%23__cc-body%20%7B%20padding%3A%2012px%3B%20display%3A%20flex%3B%20flex-direction%3A%20column%3B%20gap%3A%2010px%3B%20max-height%3A%2080vh%3B%20overflow-y%3A%20auto%3B%20%7D%20%23__cc-body%3A%3A-webkit-scrollbar%20%7B%20width%3A%204px%3B%20%7D%20%23__cc-body%3A%3A-webkit-scrollbar-thumb%20%7B%20background%3A%20%23333%3B%20border-radius%3A%204px%3B%20%7D%20.cc-section%20%7B%20display%3A%20flex%3B%20flex-direction%3A%20column%3B%20gap%3A%206px%3B%20%7D%20.cc-label%20%7B%20font-size%3A%2010px%3B%20font-weight%3A%20700%3B%20letter-spacing%3A%201px%3B%20color%3A%20%23555%3B%20text-transform%3A%20uppercase%3B%20padding-bottom%3A%204px%3B%20border-bottom%3A%201px%20solid%20%231e1e1e%3B%20%7D%20.cc-row%20%7B%20display%3A%20flex%3B%20gap%3A%206px%3B%20align-items%3A%20center%3B%20%7D%20.cc-input%20%7B%20flex%3A%201%3B%20background%3A%20%230d0d0d%3B%20border%3A%201px%20solid%20%232a2a2a%3B%20border-radius%3A%207px%3B%20padding%3A%207px%2010px%3B%20font-size%3A%2012px%3B%20color%3A%20%23eee%3B%20outline%3A%20none%3B%20min-width%3A%200%3B%20%7D%20.cc-input%3Afocus%20%7B%20border-color%3A%20%237c6df0%3B%20%7D%20.cc-input%3A%3Aplaceholder%20%7B%20color%3A%20%23444%3B%20%7D%20.cc-btn%20%7B%20background%3A%20%231e1e1e%3B%20border%3A%201px%20solid%20%232a2a2a%3B%20border-radius%3A%207px%3B%20padding%3A%207px%2011px%3B%20font-size%3A%2012px%3B%20font-weight%3A%20600%3B%20color%3A%20%23bbb%3B%20cursor%3A%20pointer%3B%20white-space%3A%20nowrap%3B%20transition%3A%20background%200.12s%2C%20color%200.12s%2C%20border-color%200.12s%3B%20%7D%20.cc-btn%3Ahover%20%7B%20background%3A%20%232a2a2a%3B%20border-color%3A%20%23444%3B%20color%3A%20%23eee%3B%20%7D%20.cc-btn%3Aactive%20%7B%20transform%3A%20scale(0.97)%3B%20%7D%20.cc-btn.purple%20%7B%20background%3A%20%232a1f5e%3B%20border-color%3A%20%237c6df0%3B%20color%3A%20%23c4b8ff%3B%20%7D%20.cc-btn.purple%3Ahover%20%7B%20background%3A%20%233a2a7a%3B%20%7D%20.cc-btn.red%20%7B%20background%3A%20%232a1212%3B%20border-color%3A%20%23e06c75%3B%20color%3A%20%23f0a0a8%3B%20%7D%20.cc-btn.red%3Ahover%20%7B%20background%3A%20%233a1818%3B%20%7D%20.cc-btn.green%20%7B%20background%3A%20%230f2a1a%3B%20border-color%3A%20%234caf7d%3B%20color%3A%20%2380d4a8%3B%20%7D%20.cc-btn.green%3Ahover%20%7B%20background%3A%20%23183a24%3B%20%7D%20.cc-btn.full%20%7B%20width%3A%20100%25%3B%20%7D%20.cc-grid%20%7B%20display%3A%20grid%3B%20grid-template-columns%3A%201fr%201fr%3B%20gap%3A%206px%3B%20%7D%20%23__cc-status%20%7B%20font-size%3A%2011px%3B%20text-align%3A%20center%3B%20min-height%3A%2016px%3B%20color%3A%20%23555%3B%20transition%3A%20color%200.2s%3B%20%7D%20%60%3B%20document.head.appendChild(style)%3B%20const%20menu%20%3D%20document.createElement('div')%3B%20menu.id%20%3D%20'__cc-menu'%3B%20menu.innerHTML%20%3D%20%60%20%3Cdiv%20id%3D%22__cc-header%22%3E%20%3Cspan%20id%3D%22__cc-title%22%3E%F0%9F%8D%AA%20Cookie%20Clicker%20Cheats%3C%2Fspan%3E%20%3Cdiv%20style%3D%22display%3Aflex%3Balign-items%3Acenter%3Bgap%3A8px%3B%22%3E%20%3Cspan%20id%3D%22__cc-hint%22%3ECtrl%2BQ%3C%2Fspan%3E%20%3Cbutton%20id%3D%22__cc-close%22%3E%E2%9C%95%3C%2Fbutton%3E%20%3C%2Fdiv%3E%20%3C%2Fdiv%3E%20%3Cdiv%20id%3D%22__cc-body%22%3E%20%3C!--%20Cookies%20--%3E%20%3Cdiv%20class%3D%22cc-section%22%3E%20%3Cdiv%20class%3D%22cc-label%22%3ECookies%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22cc-row%22%3E%20%3Cinput%20class%3D%22cc-input%22%20id%3D%22cc-amt%22%20type%3D%22number%22%20placeholder%3D%22Amount%20e.g.%201000000000%22%20%2F%3E%20%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22cc-grid%22%3E%20%3Cbutton%20class%3D%22cc-btn%20purple%22%20id%3D%22cc-set%22%3ESet%20cookies%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%20purple%22%20id%3D%22cc-add%22%3EAdd%20cookies%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%20green%22%20id%3D%22cc-max%22%3EMax%20cookies%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%20red%22%20id%3D%22cc-zero%22%3ESet%20to%200%3C%2Fbutton%3E%20%3C%2Fdiv%3E%20%3C%2Fdiv%3E%20%3C!--%20Auto%20clicker%20--%3E%20%3Cdiv%20class%3D%22cc-section%22%3E%20%3Cdiv%20class%3D%22cc-label%22%3EAuto%20clicker%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22cc-row%22%3E%20%3Cinput%20class%3D%22cc-input%22%20id%3D%22cc-cps%22%20type%3D%22number%22%20placeholder%3D%22Clicks%20per%20second%20(e.g.%2050)%22%20%2F%3E%20%3Cbutton%20class%3D%22cc-btn%20green%22%20id%3D%22cc-ac-start%22%3EStart%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%20red%22%20id%3D%22cc-ac-stop%22%3EStop%3C%2Fbutton%3E%20%3C%2Fdiv%3E%20%3C%2Fdiv%3E%20%3C!--%20Buildings%20--%3E%20%3Cdiv%20class%3D%22cc-section%22%3E%20%3Cdiv%20class%3D%22cc-label%22%3EBuildings%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22cc-row%22%3E%20%3Cinput%20class%3D%22cc-input%22%20id%3D%22cc-bamt%22%20type%3D%22number%22%20placeholder%3D%22Amount%20per%20building%20(e.g.%20500)%22%20%2F%3E%20%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22cc-grid%22%3E%20%3Cbutton%20class%3D%22cc-btn%20purple%20full%22%20id%3D%22cc-buy-all%22%20style%3D%22grid-column%3Aspan%202%22%3EBuy%20all%20buildings%20(set%20amount)%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%20green%22%20id%3D%22cc-max-all%22%3EMax%20all%20(9999)%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%20red%22%20id%3D%22cc-reset-all%22%3EReset%20all%20to%200%3C%2Fbutton%3E%20%3C%2Fdiv%3E%20%3C%2Fdiv%3E%20%3C!--%20Upgrades%20--%3E%20%3Cdiv%20class%3D%22cc-section%22%3E%20%3Cdiv%20class%3D%22cc-label%22%3EUpgrades%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22cc-grid%22%3E%20%3Cbutton%20class%3D%22cc-btn%20green%20full%22%20id%3D%22cc-all-upgrades%22%20style%3D%22grid-column%3Aspan%202%22%3EUnlock%20all%20upgrades%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%20green%20full%22%20id%3D%22cc-all-achieve%22%20style%3D%22grid-column%3Aspan%202%22%3EUnlock%20all%20achievements%3C%2Fbutton%3E%20%3C%2Fdiv%3E%20%3C%2Fdiv%3E%20%3C!--%20Milk%20%26%20Prestige%20--%3E%20%3Cdiv%20class%3D%22cc-section%22%3E%20%3Cdiv%20class%3D%22cc-label%22%3EMilk%20%26%20Prestige%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22cc-row%22%3E%20%3Cinput%20class%3D%22cc-input%22%20id%3D%22cc-milk%22%20type%3D%22number%22%20placeholder%3D%22Milk%20value%20(0%E2%80%931)%22%20step%3D%220.01%22%20%2F%3E%20%3Cbutton%20class%3D%22cc-btn%20purple%22%20id%3D%22cc-set-milk%22%3ESet%20milk%3C%2Fbutton%3E%20%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22cc-row%22%3E%20%3Cinput%20class%3D%22cc-input%22%20id%3D%22cc-prestige%22%20type%3D%22number%22%20placeholder%3D%22Prestige%20level%22%20%2F%3E%20%3Cbutton%20class%3D%22cc-btn%20purple%22%20id%3D%22cc-set-prestige%22%3ESet%20prestige%3C%2Fbutton%3E%20%3C%2Fdiv%3E%20%3C%2Fdiv%3E%20%3C!--%20Multipliers%20--%3E%20%3Cdiv%20class%3D%22cc-section%22%3E%20%3Cdiv%20class%3D%22cc-label%22%3EMultipliers%20%26%20Speed%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22cc-grid%22%3E%20%3Cbutton%20class%3D%22cc-btn%20green%22%20id%3D%22cc-godmode%22%3ECookie%20godmode%20(x1000%20CpS)%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%20green%22%20id%3D%22cc-golden%22%3ESpawn%20golden%20cookie%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%20purple%22%20id%3D%22cc-lucky%22%3ETrigger%20luck%20bonus%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%20purple%22%20id%3D%22cc-frenzy%22%3ETrigger%20frenzy%3C%2Fbutton%3E%20%3C%2Fdiv%3E%20%3C%2Fdiv%3E%20%3C!--%20Season%20%2F%20buffs%20--%3E%20%3Cdiv%20class%3D%22cc-section%22%3E%20%3Cdiv%20class%3D%22cc-label%22%3ESeason%20%26%20Buffs%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22cc-grid%22%3E%20%3Cbutton%20class%3D%22cc-btn%22%20id%3D%22cc-s-christmas%22%3E%F0%9F%8E%84%20Christmas%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%22%20id%3D%22cc-s-halloween%22%3E%F0%9F%8E%83%20Halloween%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%22%20id%3D%22cc-s-valentines%22%3E%F0%9F%92%9D%20Valentines%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%22%20id%3D%22cc-s-easter%22%3E%F0%9F%90%A3%20Easter%3C%2Fbutton%3E%20%3C%2Fdiv%3E%20%3C%2Fdiv%3E%20%3C!--%20Misc%20--%3E%20%3Cdiv%20class%3D%22cc-section%22%3E%20%3Cdiv%20class%3D%22cc-label%22%3EMisc%3C%2Fdiv%3E%20%3Cdiv%20class%3D%22cc-grid%22%3E%20%3Cbutton%20class%3D%22cc-btn%20red%22%20id%3D%22cc-wipe%22%3EWipe%20save%20(hard%20reset)%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%22%20id%3D%22cc-save%22%3EForce%20save%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%22%20id%3D%22cc-nuke%22%3ECookie%20nuke%20(pop%20wrinklers)%3C%2Fbutton%3E%20%3Cbutton%20class%3D%22cc-btn%20green%22%20id%3D%22cc-sugar%22%3EMax%20sugar%20lumps%3C%2Fbutton%3E%20%3C%2Fdiv%3E%20%3C%2Fdiv%3E%20%3Cdiv%20id%3D%22__cc-status%22%3E%3C%2Fdiv%3E%20%3C%2Fdiv%3E%20%60%3B%20document.body.appendChild(menu)%3B%20let%20acInterval%20%3D%20null%3B%20function%20getAmt(id%2C%20fallback)%20%7B%20const%20v%20%3D%20parseFloat(document.getElementById(id).value)%3B%20return%20isNaN(v)%20%3F%20fallback%20%3A%20v%3B%20%7D%20document.getElementById('cc-set').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20const%20n%20%3D%20getAmt('cc-amt'%2C%200)%3B%20G().cookies%20%3D%20n%3B%20G().cookiesEarned%20%3D%20Math.max(G().cookiesEarned%2C%20n)%3B%20G().CalculateGains()%3B%20G().RefreshStore()%3B%20status(%60Cookies%20set%20to%20%24%7Bn.toLocaleString()%7D%60%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-add').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20const%20n%20%3D%20getAmt('cc-amt'%2C%200)%3B%20G().cookies%20%2B%3D%20n%3B%20G().cookiesEarned%20%2B%3D%20n%3B%20G().CalculateGains()%3B%20G().RefreshStore()%3B%20status(%60Added%20%24%7Bn.toLocaleString()%7D%20cookies%60%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-max').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20const%20big%20%3D%20999999999999999%3B%20G().cookies%20%3D%20big%3B%20G().cookiesEarned%20%3D%20big%3B%20G().CalculateGains()%3B%20G().RefreshStore()%3B%20status('Cookies%20maxed!'%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-zero').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20G().cookies%20%3D%200%3B%20G().CalculateGains()%3B%20G().RefreshStore()%3B%20status('Cookies%20set%20to%200'%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-ac-start').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20if%20(acInterval)%20clearInterval(acInterval)%3B%20const%20cps%20%3D%20getAmt('cc-cps'%2C%2020)%3B%20const%20delay%20%3D%20Math.max(10%2C%20Math.round(1000%20%2F%20cps))%3B%20acInterval%20%3D%20setInterval(()%20%3D%3E%20%7B%20if%20(ok())%20G().ClickCookie()%3B%20%7D%2C%20delay)%3B%20status(%60Auto%20clicker%3A%20%24%7Bcps%7D%20clicks%2Fsec%60%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-ac-stop').onclick%20%3D%20()%20%3D%3E%20%7B%20clearInterval(acInterval)%3B%20acInterval%20%3D%20null%3B%20status('Auto%20clicker%20stopped'%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-buy-all').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20const%20n%20%3D%20getAmt('cc-bamt'%2C%20100)%3B%20G().ObjectsById.forEach(b%20%3D%3E%20%7B%20b.amount%20%3D%20n%3B%20b.bought%20%3D%20n%3B%20%7D)%3B%20G().CalculateGains()%3B%20G().RefreshStore()%3B%20status(%60All%20buildings%20set%20to%20%24%7Bn%7D%60%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-max-all').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20G().ObjectsById.forEach(b%20%3D%3E%20%7B%20b.amount%20%3D%209999%3B%20b.bought%20%3D%209999%3B%20%7D)%3B%20G().CalculateGains()%3B%20G().RefreshStore()%3B%20status('All%20buildings%20maxed%20to%209999!'%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-reset-all').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20G().ObjectsById.forEach(b%20%3D%3E%20%7B%20b.amount%20%3D%200%3B%20b.bought%20%3D%200%3B%20%7D)%3B%20G().CalculateGains()%3B%20G().RefreshStore()%3B%20status('All%20buildings%20reset%20to%200'%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-all-upgrades').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20G().UpgradesById.forEach(u%20%3D%3E%20%7B%20G().Unlock(u.name)%3B%20u.bought%20%3D%201%3B%20%7D)%3B%20G().CalculateGains()%3B%20G().RefreshStore()%3B%20status('All%20upgrades%20unlocked!'%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-all-achieve').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20G().AchievementsById.forEach(a%20%3D%3E%20%7B%20if%20(!a.won)%20a.Won()%3B%20%7D)%3B%20status('All%20achievements%20unlocked!'%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-set-milk').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20const%20v%20%3D%20getAmt('cc-milk'%2C%201)%3B%20G().milkProgress%20%3D%20v%3B%20G().CalculateGains()%3B%20status(%60Milk%20set%20to%20%24%7Bv%7D%60%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-set-prestige').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20const%20v%20%3D%20getAmt('cc-prestige'%2C%201000)%3B%20G().prestige%20%3D%20v%3B%20G().CalculateGains()%3B%20status(%60Prestige%20set%20to%20%24%7Bv%7D%60%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-godmode').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20G().cookiesPs%20%3D%20G().cookiesPs%20*%201000%20%7C%7C%201e9%3B%20status('Godmode%3A%20CpS%20x1000!'%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-golden').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20const%20g%20%3D%20new%20G().goldenCookie.constructor()%3B%20G().shimmer(g)%3B%20status('Golden%20cookie%20spawned!'%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-lucky').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20G().cookies%20%2B%3D%20G().cookiesPs%20*%2060%20*%2020%3B%20G().cookiesEarned%20%2B%3D%20G().cookiesPs%20*%2060%20*%2020%3B%20G().CalculateGains()%3B%20status('Lucky%20bonus%20applied!'%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-frenzy').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20G().gainBuff('frenzy'%2C%2077%2C%207)%3B%20status('Frenzy%20triggered!%20(x7%20CpS%20for%2077s)'%2C%20'ok')%3B%20%7D%3B%20const%20seasons%20%3D%20%7B%20'cc-s-christmas'%3A%20'christmas'%2C%20'cc-s-halloween'%3A%20'halloween'%2C%20'cc-s-valentines'%3A%20'valentines'%2C%20'cc-s-easter'%3A%20'easter'%2C%20%7D%3B%20Object.entries(seasons).forEach((%5Bid%2C%20season%5D)%20%3D%3E%20%7B%20document.getElementById(id).onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20G().season%20%3D%20season%3B%20G().CalculateGains()%3B%20status(%60Season%20set%20to%20%24%7Bseason%7D!%60%2C%20'ok')%3B%20%7D%3B%20%7D)%3B%20document.getElementById('cc-wipe').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20if%20(confirm('Hard%20reset%20the%20game%3F%20This%20cannot%20be%20undone!'))%20%7B%20G().HardReset(2)%3B%20status('Game%20wiped!'%2C%20'ok')%3B%20%7D%20%7D%3B%20document.getElementById('cc-save').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20G().WriteSave(1)%3B%20status('Game%20saved!'%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-nuke').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20G().wrinklers.forEach(w%20%3D%3E%20%7B%20if%20(w.phase%20%3D%3D%3D%202)%20w.hp%20%3D%200%3B%20%7D)%3B%20status('Wrinklers%20nuked%20%E2%80%94%20cookies%20popped!'%2C%20'ok')%3B%20%7D%3B%20document.getElementById('cc-sugar').onclick%20%3D%20()%20%3D%3E%20%7B%20if%20(!need())%20return%3B%20G().lumpT%20%3D%20Date.now()%20-%201000%20*%2060%20*%2060%20*%2024%20*%20100%3B%20G().gainLumps(100)%3B%20status('Sugar%20lumps%20maxed!'%2C%20'ok')%3B%20%7D%3B%20document.getElementById('__cc-close').onclick%20%3D%20()%20%3D%3E%20%7B%20menu.style.display%20%3D%20'none'%3B%20%7D%3B%20document.addEventListener('keydown'%2C%20e%20%3D%3E%20%7B%20if%20(e.ctrlKey%20%26%26%20e.key%20%3D%3D%3D%20'q')%20%7B%20e.preventDefault()%3B%20menu.style.display%20%3D%20menu.style.display%20%3D%3D%3D%20'none'%20%3F%20'block'%20%3A%20'none'%3B%20%7D%20%7D)%3B%20const%20hdr%20%3D%20document.getElementById('__cc-header')%3B%20let%20drag%20%3D%20false%2C%20ox%20%3D%200%2C%20oy%20%3D%200%3B%20hdr.addEventListener('mousedown'%2C%20e%20%3D%3E%20%7B%20drag%20%3D%20true%3B%20const%20r%20%3D%20menu.getBoundingClientRect()%3B%20ox%20%3D%20e.clientX%20-%20r.left%3B%20oy%20%3D%20e.clientY%20-%20r.top%3B%20menu.style.transform%20%3D%20'none'%3B%20menu.style.top%20%3D%20r.top%20%2B%20'px'%3B%20menu.style.left%20%3D%20r.left%20%2B%20'px'%3B%20menu.style.right%20%3D%20'auto'%3B%20%7D)%3B%20document.addEventListener('mousemove'%2C%20e%20%3D%3E%20%7B%20if%20(drag)%20%7B%20menu.style.top%20%3D%20(e.clientY%20-%20oy)%20%2B%20'px'%3B%20menu.style.left%20%3D%20(e.clientX%20-%20ox)%20%2B%20'px'%3B%20%7D%20%7D)%3B%20document.addEventListener('mouseup'%2C%20()%20%3D%3E%20%7B%20drag%20%3D%20false%3B%20%7D)%3B%20%7D)()%3B) {
      // ── PASTE SCRIPT 1 HERE ───────────────────────────────


      // ─────────────────────────────────────────────────────
    },

    script2: function () {
      // ── PASTE SCRIPT 2 HERE ───────────────────────────────


      // ─────────────────────────────────────────────────────
    },

    script3: function () {
      // ── PASTE SCRIPT 3 HERE ───────────────────────────────


      // ─────────────────────────────────────────────────────
    },

    script4: function () {
      // ── PASTE SCRIPT 4 HERE ───────────────────────────────


      // ─────────────────────────────────────────────────────
    },

    script5: function () {
      // ── PASTE SCRIPT 5 HERE ───────────────────────────────


      // ─────────────────────────────────────────────────────
    },

    script6: function () {
      // ── PASTE SCRIPT 6 HERE ───────────────────────────────


      // ─────────────────────────────────────────────────────
    },

    script7: function () {
      // ── PASTE SCRIPT 7 HERE ───────────────────────────────


      // ─────────────────────────────────────────────────────
    },

    script8: function () {
      // ── PASTE SCRIPT 8 HERE ───────────────────────────────


      // ─────────────────────────────────────────────────────
    },

    script9: function () {
      // ── PASTE SCRIPT 9 HERE ───────────────────────────────


      // ─────────────────────────────────────────────────────
    },

    script10: function () {
      // ── PASTE SCRIPT 10 HERE ──────────────────────────────


      // ─────────────────────────────────────────────────────
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
        { key: 'script1',  icon: '🎮', label: 'cookie cliker'  },
        { key: 'script2',  icon: '🎮', label: 'Script 2'  },
        { key: 'script3',  icon: '🎮', label: 'Script 3'  },
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
