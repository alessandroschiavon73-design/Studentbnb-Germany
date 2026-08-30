document.addEventListener('DOMContentLoaded',()=>{
  const hero=document.querySelector('.home-hero .hero-copy');
  const brand=document.querySelector('.site-header .brand');if(brand)brand.setAttribute('aria-label','StudentBnB home');
  if(hero){
    document.title='StudentBnB — Temporäres Studentenwohnen | 1 Woche, 2 Wochen oder 1 Monat';
    const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Temporäre Studentenunterkunft in Wohnheimen, WGs und Studentenwohnungen. Finde ein Zimmer für eine Woche, zwei Wochen oder einen Monat für Erasmus, Praktikum, Kurse oder kurze Studienaufenthalte.');
    const h=hero.querySelector('h1'),p=hero.querySelector(':scope > p');hero.querySelectorAll('.studentbnb-tagline,.studentbnb-duration-options').forEach(el=>el.remove());
    if(h){h.innerHTML='Lebe für eine Weile mitten im <span>Studentenleben.</span>';const t=document.createElement('div');t.className='studentbnb-tagline';t.textContent='Dein temporäres Zuhause unter Studierenden.';h.before(t);}
    if(p){p.classList.add('studentbnb-concept');p.textContent='Finde ein Zimmer im Studentenwohnheim, in einer WG oder in einer Studentenwohnung für Erasmus, Praktikum, Kurse, Prüfungen oder ein paar Wochen in einer anderen Stadt.';const d=document.createElement('div');d.className='studentbnb-duration-options';d.innerHTML='<strong>1 Woche</strong><span>•</span><strong>2 Wochen</strong><span>•</span><strong>1 Monat</strong>';p.after(d);}
    const sh=hero.querySelector('.search-card h2');if(sh)sh.textContent='Wo möchtest du wohnen?';
  }
  const intl=document.querySelector('.footer-international > strong');if(intl)intl.textContent='Für längere Aufenthalte: CasaStudent';
  const copy=document.querySelector('.footer-bottom span:first-child');if(copy)copy.textContent='© 2026 StudentBnB';
  const login=document.querySelector('#login-title');if(login)login.textContent='Bei StudentBnB anmelden';
  const f=document.querySelector('.site-footer .container')||document.querySelector('footer');if(f&&!f.querySelector('.casastudent-family')){const b=document.createElement('div');b.className='casastudent-family';b.innerHTML='StudentBnB ist für temporäre Aufenthalte in der studentischen Gemeinschaft. Für ein längerfristiges Zuhause besuche <a href="https://casastudent.de/">CasaStudent ↗</a>.';f.appendChild(b)}
});
