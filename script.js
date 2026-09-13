const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const before=['× Random posting','× Outdated graphics','× Inconsistent branding','× Weeks without content','× No clear strategy','× Low visibility'];
const after=['✓ Professional content','✓ Consistent branding','✓ Active social presence','✓ Strategic campaigns','✓ Strong calls-to-action','✓ A recognizable business'];
document.querySelectorAll('.compare-switch button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.compare-switch button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const data=btn.dataset.state==='before'?before:after;document.getElementById('compareList').innerHTML=data.map(x=>`<li>${x}</li>`).join('')}));
const menu=document.querySelector('.menu-btn');menu?.addEventListener('click',()=>{document.querySelector('.desktop-nav')?.classList.toggle('mobile-open')});

// BrandSpring project ordering / visibility.
// Party Tyme is the current lead project. Stephanie Brennan stays hidden until re-enabled.
const workGrid=document.querySelector('.work-grid');
if(workGrid){
  [...workGrid.querySelectorAll('.project')].forEach(project=>{
    if(/stephanie\s+brennan/i.test(project.textContent||'')) project.hidden=true;
  });
  if(!workGrid.querySelector('[data-project="party-tyme"]')){
    const partyTyme=document.createElement('article');
    partyTyme.className='project party-tyme-project';
    partyTyme.dataset.category='WEBSITES';
    partyTyme.dataset.project='party-tyme';
    partyTyme.innerHTML=`<a href="projects/party-tyme/" aria-label="Open the Party Tyme Amusements BrandSpring concept build" style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:28px;color:#fff;text-decoration:none;background:radial-gradient(circle at 72% 22%,rgba(255,212,59,.42),transparent 28%),radial-gradient(circle at 24% 30%,rgba(117,59,255,.65),transparent 35%),linear-gradient(145deg,#351457 0%,#151018 68%,#08080a 100%);overflow:hidden;border-radius:inherit"><span style="position:absolute;top:22px;left:24px;padding:8px 11px;border-radius:999px;background:#ffd43b;color:#351457;font-size:11px;font-weight:900;letter-spacing:.08em">NEW • CONCEPT BUILD</span><div style="font-size:11px;font-weight:800;letter-spacing:.16em;opacity:.8;margin-bottom:8px">FULL WEBSITE + OPERATIONS PLATFORM</div><h3 style="margin:0;font-size:clamp(28px,3vw,46px);line-height:.95">PARTY TYME<br>AMUSEMENTS</h3><p style="max-width:34ch;margin:12px 0 0;opacity:.82;font-size:13px;line-height:1.4">Website, complete attraction catalog, CRM, quoting, contracts, inventory and automation concept.</p></a>`;
    partyTyme.style.position='relative';
    partyTyme.style.minHeight='360px';
    workGrid.prepend(partyTyme);
  }
}

// Portfolio filters
const filterButtons=[...document.querySelectorAll('.filter button')];
const projects=[...document.querySelectorAll('.project[data-category]')];
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  filterButtons.forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  const wanted=button.textContent.trim();
  projects.forEach(project=>project.classList.toggle('is-hidden',wanted!=='ALL'&&project.dataset.category!==wanted));
}));

// Close mobile navigation after choosing a section
(document.querySelectorAll('.desktop-nav a')||[]).forEach(link=>link.addEventListener('click',()=>document.querySelector('.desktop-nav')?.classList.remove('mobile-open')));
