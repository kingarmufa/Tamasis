'use strict';
const config = window.SCHOOL_CONFIG;
if (config) {
  const phone = document.querySelector('[data-contact="phone"]');
  phone.href = 'tel:' + config.phone;
  phone.querySelector('span').firstChild.textContent = config.phoneLabel;
  const email = document.querySelector('[data-contact="email"]');
  email.href = 'mailto:' + config.email;
  email.querySelector('span').firstChild.textContent = config.email;
  document.querySelector('#school-address').firstChild.textContent = config.address;
  document.querySelector('[data-contact="map"]').href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(config.mapQuery);
}
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
function closeMenu(){toggle.setAttribute('aria-expanded','false'); nav.classList.remove('open');toggle.setAttribute('aria-label','Buka menu');}
toggle.addEventListener('click', () => {const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Tutup menu':'Buka menu');nav.classList.toggle('open',open);});
nav.addEventListener('click', e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
const units = {
 tk: ['PENDIDIKAN ANAK USIA DINI','TK Swasta Tamansiswa','Awal perjalanan pendidikan untuk membangun rasa ingin tahu, mengenal lingkungan, dan menemukan kegembiraan dalam belajar.','✿','TK'],
 sma: ['PENDIDIKAN MENENGAH ATAS','SMA Swasta Tamansiswa','Langkah untuk memperluas wawasan, mengenali minat, dan mempersiapkan rencana pendidikan berikutnya.','✳','SMA'],
 ti: ['PENDIDIKAN MENENGAH KEJURUAN','SMK Swasta TI Taman Siswa','Kenali pilihan pendidikan kejuruan di SMK TI Taman Siswa. Tanyakan kompetensi keahlian yang tersedia langsung kepada sekolah.','⚙','SMK TI'],
 bm: ['PENDIDIKAN MENENGAH KEJURUAN','SMK Swasta Bisnis dan Manajemen Tamansiswa','Jelajahi pilihan pendidikan kejuruan di unit Bisnis dan Manajemen. Hubungi sekolah untuk informasi program keahlian yang berlaku.','◇','SMK Bisnis']
};
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectUnit(tab) {
 tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1;});
 const d=units[tab.dataset.unit];
 document.querySelector('#unit-panel').setAttribute('aria-labelledby',tab.id);
 ['#unit-level','#unit-title','#unit-description','#unit-icon'].forEach((s,i)=>document.querySelector(s).textContent=d[i]);
 document.querySelector('#ask-unit').textContent='Tanya tentang '+d[4]+' ↗';
 document.querySelector('#unit').selectedIndex=tabs.indexOf(tab);
}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectUnit(tab));tab.addEventListener('keydown',e=>{let index;if(e.key==='ArrowRight')index=(i+1)%tabs.length;else if(e.key==='ArrowLeft')index=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')index=0;else if(e.key==='End')index=tabs.length-1;else return;e.preventDefault();selectUnit(tabs[index]);tabs[index].focus();});});
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#interest-form').addEventListener('submit',e=>{
 e.preventDefault();const form=e.currentTarget;
 const name=form.elements.name.value.trim(), message=form.elements.message.value.trim();
 const status=document.querySelector('#form-status');
 if(!name||!message){status.textContent='Isi nama dan pesan dengan lengkap.';return;}
 const subject='Permintaan informasi — '+form.elements.unit.value;
 const body='Halo Taman Siswa Tebing Tinggi,\n\nNama: '+name+'\nUnit yang diminati: '+form.elements.unit.value+'\n\n'+message+'\n\nTerima kasih.';
 const url='mailto:'+(config?.email||'tamansiswatebingtt@gmail.com')+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
 window.location.href=url;
 status.textContent='Draf email telah disiapkan. Jika aplikasi email tidak terbuka, hubungi alamat email yang tercantum di samping.';
});
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.section-head,.values article,.about-copy,.faq-list').forEach(el=>{el.classList.add('reveal');observer.observe(el);});
}
