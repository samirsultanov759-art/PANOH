const PETS = [
  {
    id: 'pet-barbos', name: 'Barbos', speciesLabel: 'It', category: 'dog', breed: 'Oltin Retriver Aralash',
    age: '2 yosh', gender: 'Erkak', weight: '22 kg', location: 'Toshkent markazi',
    temperament: 'active', temperamentLabel: 'Quvnoq va mehribon', housing: 'yard', experience: 'beginner',
    kidFriendly: true, microchipped: true, passportFee: 350000, image: 'images/pet_dog_golden_1794756323085.jpg',
    shortDesc: 'Ertalabki sayrlarni va bolalar bilan o‘ynashni yaxshi ko‘radigan sodiq hamroh.',
    story: 'Barbos Toshkent chetidagi bog‘dan topilgan. U asosiy buyruqlarni tez o‘rganadi, bo‘yinbog‘da bemalol yuradi va boshqa hayvonlar bilan juda inoq.'
  },
  {
    id: 'pet-kumush', name: 'Kumush', speciesLabel: 'Mushuk', category: 'cat', breed: 'Britan Qisqa Junli',
    age: '1.5 yosh', gender: 'Urg‘ochi', weight: '4.1 kg', location: 'Chilonzor filiali',
    temperament: 'calm', temperamentLabel: 'Vazmin va sokin', housing: 'apartment', experience: 'beginner',
    kidFriendly: true, microchipped: true, passportFee: 280000, image: 'images/pet_cat_british_1794756323804.jpg',
    shortDesc: 'Kvartira hayotiga to‘liq moslashgan, toza va sokin oqshomlar hamrohi.',
    story: 'Kumush qum idishiga o‘rgatilgan, tirnoq charxlagichdan foydalanadi va divanda kitob o‘qib o‘tirganingizda yoningizda muloyim xirillab uxlashni yoqtiradi.'
  },
  {
    id: 'pet-olapar', name: 'Olapar', speciesLabel: 'Kuchukcha', category: 'dog', breed: 'Korgi-Teryer Aralash',
    age: '7 oylik', gender: 'Erkak', weight: '7.5 kg', location: 'Yunusobod filiali',
    temperament: 'active', temperamentLabel: 'Chaqqon va aqlli', housing: 'both', experience: 'beginner',
    kidFriendly: true, microchipped: true, passportFee: 320000, image: 'images/pet_dog_pup_1794756323767.jpg',
    shortDesc: 'Kichik o‘lchamli, kvartiraga ham qulay, o‘yinqaroq va juda tez o‘rganuvchi kuchukcha.',
    story: 'Olapar birinchi marta it boqmoqchi bo‘lganlar uchun ideal. U to‘p otib o‘ynashni sevadi, mebellarga zarar bermaydi va barcha yoshdagi mehmonlarni quvonch bilan kutib oladi.'
  },
  {
    id: 'pet-boron', name: 'Bo‘ron', speciesLabel: 'It', category: 'dog', breed: 'Sibir Haski Aralash',
    age: '3 yosh', gender: 'Erkak', weight: '26 kg', location: 'Mirzo Ulug‘bek filiali',
    temperament: 'active', temperamentLabel: 'Vazmin qo‘riqchi va sayrchi', housing: 'yard', experience: 'experienced',
    kidFriendly: true, microchipped: true, passportFee: 380000, image: 'images/pet_dog_husky_1794756718438.jpg',
    shortDesc: 'Uzoq piyoda yurishlarni yoqtiradigan, sadoqatli va diqqatli hamroh.',
    story: 'Bo‘ron sport bilan shug‘ullanadigan yoki hovlisi keng oilalar uchun ajoyib do‘st. Kinologlarimiz bilan asosiy intizom kursini muvaffaqiyatli tamomlagan.'
  },
  {
    id: 'pet-apelsin', name: 'Apelsin', speciesLabel: 'Mushukcha', category: 'cat', breed: 'Malla Tabby',
    age: '5 oylik', gender: 'Erkak', weight: '2.1 kg', location: 'Toshkent markazi',
    temperament: 'active', temperamentLabel: 'Qiziquvchan va erka', housing: 'both', experience: 'beginner',
    kidFriendly: true, microchipped: true, passportFee: 240000, image: 'images/pet_cat_ginger_1794756718286.jpg',
    shortDesc: 'Har bir quyosh nuridan quvonadigan, o‘yinqaroq va tez do‘stlashadigan malla mushukcha.',
    story: 'Apelsin kichik yoshidan odamlar mehrini ko‘rib o‘sgan. Uyumli, qum idishini darhol o‘rgangan va uyga iliq kayfiyat olib kiradi.'
  },
  {
    id: 'pet-lolo', name: 'Lolo', speciesLabel: 'Mushuk', category: 'cat', breed: 'Kaliko (Uch rangli)',
    age: '2.5 yosh', gender: 'Urg‘ochi', weight: '3.6 kg', location: 'Mirzo Ulug‘bek filiali',
    temperament: 'calm', temperamentLabel: 'Ehtiyotkor va nafis', housing: 'apartment', experience: 'experienced',
    kidFriendly: false, microchipped: true, passportFee: 250000, image: 'images/pet_cat_calico_1794756325316.jpg',
    shortDesc: 'Deraza tokchasida quyoshda isinishni yoqtiradigan aqlli va mustaqil mushuk.',
    story: 'Lolo sokin xonadonni afzal ko‘radi. Ishonch qozongach, egasining ortidan soya kabi yuradi va uyga o‘zgacha shinamlik olib kiradi.'
  },
  {
    id: 'pet-paxmoq', name: 'Paxmoq', speciesLabel: 'Quyon', category: 'rabbit', breed: 'Golland Lop (Shalpayquloq)',
    age: '10 oylik', gender: 'Erkak', weight: '1.8 kg', location: 'Toshkent markazi',
    temperament: 'calm', temperamentLabel: 'Yuvosh va qo‘lga o‘rgangan', housing: 'apartment', experience: 'beginner',
    kidFriendly: true, microchipped: false, passportFee: 190000, image: 'images/pet_rabbit_lop_1794756324593.jpg',
    shortDesc: 'Qo‘lda silashga o‘rgatilgan, sokin va barra sabzavotlarni sevuvchi mayin quyoncha.',
    story: 'Paxmoq maxsus qafas va keng xona sayrlariga o‘rgatilgan. Ovoz chiqarmaydi, shuning uchun ko‘p qavatli uylar va tinch muhit uchun juda qulay.'
  },
  {
    id: 'pet-quyosh', name: 'Quyosh', speciesLabel: 'Qush', category: 'bird', breed: 'Korella To‘tiqushi',
    age: '1 yosh', gender: 'Erkak', weight: '0.1 kg', location: 'Chilonzor filiali',
    temperament: 'active', temperamentLabel: 'Xushovoz va kirishimli', housing: 'apartment', experience: 'experienced',
    kidFriendly: true, microchipped: false, passportFee: 210000, image: 'images/pet_bird_cockatiel_1794756324612.jpg',
    shortDesc: 'Barmoqqa qo‘na oladigan, tongda yoqimli kuy chaluvchi qo‘lga o‘rgatilgan korella.',
    story: 'Quyosh markazimiz parvarishchilarining qo‘lida ulg‘aygan. Musiqa eshitganda boshini qimirlatib raqsga tushadi va egasining yelkasida o‘tirishni yoqtiradi.'
  }
];

const CARE_KITS = [
  { id: 'kit-food', name: 'Boshlang‘ich ozuqa va keramika idishlar', price: 185000, suitableFor: 'Barcha turlar uchun' },
  { id: 'kit-bed', name: 'Ortopedik yotoqcha va tabiiy o‘yinchoq', price: 240000, suitableFor: 'It, mushuk va quyonlar uchun' },
  { id: 'kit-carrier', name: 'Xavfsiz ko‘chirish konteyneri', price: 290000, suitableFor: 'Mushuk, kichik it va quyonlar uchun' }
];

const SPONSOR_PLANS = [
  { id: 'spon-week', name: '1 haftalik ozuqa homiysi', description: 'Panohdagi bir jonivor uchun 7 kunlik sifatli oziq-ovqat va vitaminlar.', price: 120000, suitableFor: 'Masofaviy yordam · Foto hisobot bilan' },
  { id: 'spon-vet', name: 'To‘liq emlash va chip paketi', description: 'Yangi kelgan qutqarilgan hayvonni to‘liq tekshiruv va emlashdan o‘tkazish.', price: 260000, suitableFor: 'Tibbiy homiylik · Pasport raqami beriladi' },
  { id: 'spon-month', name: '1 oylik to‘liq vasiylik', description: 'Bir hayvonning oylik ozuqasi, parvarishi va kinolog mashg‘ulotlari.', price: 450000, suitableFor: 'VIP homiylik · Istalgan vaqt ziyorat' }
];

const CARE_STANDARDS = [
  {
    id: 'vet', title: 'Emlash va Pasport',
    headline: 'Har bir do‘stimiz xalqaro veterinariya protokoliga ko‘ra tekshiriladi',
    summary: 'Markazga kelgan har bir hayvon dastlab 10 kunlik karantin va chuqur laboratoriya tahlilidan o‘tadi. Faqat to‘liq sog‘lomlashgandan so‘ng katalogga joylanadi.',
    points: ['Quturish va asosiy yuqumli kasalliklarga qarshi kompleks vaksina', 'Ichki va tashqi parazitlardan 2 bosqichli xavfsiz tozalash', 'Barcha sanalar muhrlangan rasmiy veterinariya pasporti'],
    metricLabel: 'Tibbiy tekshiruv bosqichlari', metricValue: '12 ta'
  },
  {
    id: 'nutrition', title: 'Oziqlantirish Ratsioni',
    headline: 'Yoshi va vazniga mos muvozanatli tabiiy va gipoallergen ratsion',
    summary: 'Har bir hayvonning hazm qilish tizimi va jun sifatini tiklash uchun veterinariya diyetologi tomonidan alohida taomnoma tuziladi.',
    points: ['Don mahsulotlarisiz yuqori oqsilli premium granulalar', 'Har kuni yangilanadigan toza filtrlangan suv tizimi', 'Asrab oluvchi oilaga 7 kunlik o‘tish ozuqasi tavsiyasi'],
    metricLabel: 'Kunlik parvarish nazorati', metricValue: '24/7'
  },
  {
    id: 'behavior', title: 'Zoopsixologiya',
    headline: 'Ko‘chadan qutqarilgan jonivorlarning ishonchini qayta tiklash',
    summary: 'Kinolog va mushuk xulq-atvori bo‘yicha mutaxassislarimiz qo‘rquvni yengish, qum idishi va bo‘yinbog‘ odobini mehr bilan o‘rgatadi.',
    points: ['Shovqin, mehmonlar va bolalar bilan xavfsiz sotsializatsiya', 'Mebel va buyumlarga tegmaslik odatini shakllantirish', 'Asrab olgandan keyin 14 kun bepul kinolog maslahati'],
    metricLabel: 'Muvaffaqiyatli moslashuv', metricValue: '98.4%'
  },
  {
    id: 'chip', title: 'Mikrochip Kafolati',
    headline: 'Yo‘qolib qolishning oldini oluvchi zamonaviy raqamli identifikatsiya',
    summary: 'Itlar va mushuklar terisi ostiga og‘riqsiz joylashtiriladigan mikrochip egasining telefon raqamiga ulanadi.',
    points: ['15 xonali yagona xalqaro ISO raqami biriktirilishi', 'Istalgan veterinariya klinikasida skaner orqali aniqlanadi', 'Egalik huquqini rasmiy tasdiqlovchi elektron guvohnoma'],
    metricLabel: 'Chip ishlash muddati', metricValue: 'Umrbod'
  }
];

const FAQS = [
  { q: 'Asrab olish jarayoni qanday kechadi va hujjatlar bormi?', a: 'Siz yoqtirgan hayvonni savatga qo‘shib ariza yuborasiz. Mutaxassisimiz 2 soat ichida bog‘lanib markazimizda jonli uchrashuv belgilaydi. Shartnoma va xalqaro veterinariya pasporti rasmiylashtirilgach, do‘stingizni uyingizga olib ketasiz.' },
  { q: 'Nima uchun ramziy veterinariya badali mavjud?', a: 'Katalogdagi badal foyda olish uchun emas — u hayvonning to‘liq emlanishi, parazitlardan tozalanishi, mikrochip va pasport rasmiylashtirish xarajatlarining bir qismini qoplaydi hamda mas’uliyatli egadorlikni kafolatlaydi.' },
  { q: 'Agar uy hayvoni yangi muhitga ko‘nikolmasa nima bo‘ladi?', a: 'PANOH markazida 14 kunlik moslashuv davri amal qiladi. Kinolog va zoopsixologlarimiz bepul maslahat beradi; jiddiy moslasha olmaslik holatida hayvon markazga qaytib qabul qilinadi.' },
  { q: 'Boshqa viloyatlardan ham hayvon asrab olish mumkinmi?', a: 'Ha, Samarqand, Buxoro, Farg‘ona vodiysi va boshqa viloyatlardan ham ariza topshirishingiz mumkin. Tashish qutisi va yo‘l uchun veterinariya ma’lumotnomasi markazimiz tomonidan tayyorlab beriladi.' },
  { q: 'Uyda allaqachon mushuk yoki itim bo‘lsa, yangisi bilan chiqisha oladimi?', a: 'Katalogimizdagi har bir hayvon kartochkasida boshqa hayvonlar bilan munosabati aniq ko‘rsatilgan. Markazimizga mavjud uy hayvoningizni ham olib kelib, tanishtiruv sinovini o‘tkazishingiz mumkin.' }
];

const fmt = n => `${n.toLocaleString('uz-UZ')} so‘m`;
const PAW_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6.5" cy="9.5" r="2.1"/><circle cx="10.2" cy="6.2" r="2.1"/><circle cx="14.5" cy="6.4" r="2.1"/><circle cx="18" cy="10" r="2"/><path d="M12 11.2c-3.1 0-5.4 2.4-5.4 4.9 0 1.6 1.2 2.7 2.8 2.7 1.1 0 1.8-.4 2.6-.4s1.5.4 2.6.4c1.6 0 2.8-1.1 2.8-2.7 0-2.5-2.3-4.9-5.4-4.9z"/></svg>`;
const HEART_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.5s-7.5-4.7-9.2-9C1.6 8.3 3.7 5 7.2 5c2 0 3.7 1 4.8 2.6C13.1 6 14.8 5 16.8 5c3.5 0 5.6 3.3 4.4 6.5-1.7 4.3-9.2 9-9.2 9z"/></svg>`;
const SHIELD_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 3l7.5 3v5.5c0 4.8-3.2 8.9-7.5 10-4.3-1.1-7.5-5.2-7.5-10V6L12 3z"/><path d="M9 12.3l2 2 4-4.2"/></svg>`;
const CHECK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;

const loaderEl = document.getElementById('loader');
const loaderPct = document.getElementById('loaderPct');
const loaderBar = document.getElementById('loaderBar');
const loaderStage = document.getElementById('loaderStage');
const stages = ['Sanctuary bog‘i eshiklari ochilmoqda...', 'Tibbiy pasportlar va emlashlar tekshirilmoqda...', 'Sodiq do‘stlaringiz sizni kutmoqda...'];
const startTs = performance.now();
const closeLoader = () => {
  if (!loaderEl) return;
  loaderEl.classList.add('is-done');
  setTimeout(() => loaderEl.remove(), 750);
};
const animLoader = now => {
  const pct = Math.min(100, Math.round(((now - startTs) / 2300) * 100));
  if (loaderPct) loaderPct.textContent = `${pct}%`;
  if (loaderBar) loaderBar.style.width = `${pct}%`;
  if (loaderStage) loaderStage.textContent = pct < 38 ? stages[0] : pct < 78 ? stages[1] : stages[2];
  if (pct < 100 && loaderEl && !loaderEl.classList.contains('is-done')) requestAnimationFrame(animLoader);
};
requestAnimationFrame(animLoader);
setTimeout(closeLoader, 2450);
document.getElementById('skipLoader')?.addEventListener('click', closeLoader);

const scrollBar = document.getElementById('scrollProgress');
const heroParallax = document.getElementById('heroParallax');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollBar && max > 0) scrollBar.style.transform = `scaleX(${Math.min(1, window.scrollY / max)})`;
  if (heroParallax && window.scrollY < 900) heroParallax.style.transform = `translateY(${Math.round(window.scrollY * 0.07)}px)`;
}, { passive: true });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const marqueeItems = ['To‘liq tibbiy tekshiruv va emlash', '15 xonali ISO mikrochip', '14 kunlik uyda moslashuv kafolati', 'Bepul kinolog va zoopsixolog ko‘magi', 'Ochiq bog‘da jonli tanishuv'];
const marqueeTrack = document.getElementById('marqueeTrack');
if (marqueeTrack) {
  marqueeTrack.innerHTML = [...marqueeItems, ...marqueeItems].map(t => `<div class="marquee-item">${PAW_SVG}<span>${t}</span></div>`).join('');
}

let state = { category: 'all', temperament: 'all', search: '', basketPets: [], basketKits: [], adoptSent: false };
let calc = { species: 'dog', food: 'premium', vet: 'full' };
let match = { housing: 'apartment', activity: 'calm', exp: 'beginner' };
let activeStd = 'vet';

const renderPets = () => {
  const grid = document.getElementById('petsGrid');
  const empty = document.getElementById('petsEmpty');
  const q = state.search.trim().toLowerCase();
  const list = PETS.filter(p => (state.category === 'all' || p.category === state.category)
    && (state.temperament === 'all' || p.temperament === state.temperament)
    && (!q || p.name.toLowerCase().includes(q) || p.breed.toLowerCase().includes(q) || p.speciesLabel.toLowerCase().includes(q)));
  if (!grid || !empty) return;
  if (!list.length) { grid.innerHTML = ''; empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  grid.innerHTML = list.map(p => {
    const inB = state.basketPets.some(x => x.id === p.id);
    return `<article class="pet-card">
      <div>
        <button type="button" class="pet-photo-btn" data-detail="${p.id}">
          <img src="${p.image}" alt="${p.name} — ${p.breed}" />
        </button>
        <div class="pet-body">
          <div class="pet-meta"><span>${p.speciesLabel}</span><span>·</span><span class="font-mono-num">${p.age}</span><span>·</span><span>${p.location}</span></div>
          <div class="pet-title-row"><h3>${p.name}</h3><span class="pet-gender">${p.gender}</span></div>
          <p class="pet-breed">${p.breed}</p>
          <p class="pet-desc">${p.shortDesc}</p>
        </div>
      </div>
      <div class="pet-foot">
        <div class="pet-health-row"><span class="pet-vax">${SHIELD_SVG}<span>Emlangan</span></span><span class="font-mono-num pet-fee">${fmt(p.passportFee)}</span></div>
        <div class="pet-btns">
          <button type="button" class="btn-card-sec" data-detail="${p.id}">Batafsil</button>
          <button type="button" class="btn-card-cta ${inB ? 'in-basket' : ''}" data-add="${p.id}"><span>${inB ? 'asrab olish' : 'Asrab olish '}</span></button>
        </div>
      </div>
    </article>`;
  }).join('');
  grid.querySelectorAll('[data-detail]').forEach(b => b.addEventListener('click', () => openPetModal(b.dataset.detail)));
  grid.querySelectorAll('[data-add]').forEach(b => b.addEventListener('click', () => togglePet(b.dataset.add, true)));
};

const openPetModal = id => {
  const p = PETS.find(x => x.id === id);
  const modal = document.getElementById('petModal');
  const box = document.getElementById('petModalContent');
  if (!p || !modal || !box) return;
  box.innerHTML = `
    <div class="modal-img-wrap"><img src="${p.image}" alt="${p.name}" /></div>
    <div class="modal-body">
      <div>
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;">
          <div>
            <p style="font-size:12px;font-weight:500;color:var(--accent-emerald);">${p.speciesLabel} · ${p.breed}</p>
            <h3 style="margin-top:4px;font-size:30px;font-weight:600;">${p.name}</h3>
          </div>
          <button id="closeModalBtn" type="button" style="padding:6px;border-radius:8px;border:1px solid var(--border-hair);background:#fff;cursor:pointer;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:16px;padding:12px 0;border-top:1px solid var(--bg-surface);border-bottom:1px solid var(--bg-surface);font-size:12px;">
          <div><span style="color:var(--ink-secondary);display:block;">Yoshi</span><strong class="font-mono-num">${p.age}</strong></div>
          <div><span style="color:var(--ink-secondary);display:block;">Vazni</span><strong class="font-mono-num">${p.weight}</strong></div>
          <div><span style="color:var(--ink-secondary);display:block;">Jinsi</span><strong>${p.gender}</strong></div>
        </div>
        <p style="margin-top:14px;font-size:14px;color:var(--ink-secondary);">${p.story}</p>
        <div style="margin-top:16px;display:flex;flex-direction:column;gap:8px;font-size:12px;">
          <div style="display:flex;align-items:center;gap:8px;"><span style="color:var(--accent-emerald);width:16px;height:16px;">${CHECK_SVG}</span><span>To‘liq emlangan va gijjadan tozalangan</span></div>
          <div style="display:flex;align-items:center;gap:8px;"><span style="color:var(--accent-emerald);width:16px;height:16px;">${CHECK_SVG}</span><span>${p.kidFriendly ? 'Bolalar bilan do‘stona munosabatda' : 'Tinch muhitdagi kattalar xonadoniga mos'}</span></div>
          <div style="display:flex;align-items:center;gap:8px;"><span style="color:var(--accent-emerald);width:16px;height:16px;">${CHECK_SVG}</span><span>${p.microchipped ? 'Shaxsiy mikrochip va pasport tayyor' : 'Veterinariya pasporti tayyor'}</span></div>
        </div>
      </div>
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--bg-surface);">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <span style="font-size:12px;color:var(--ink-secondary);">Pasport va emlash badali:</span>
          <strong class="font-mono-num" style="font-size:16px;">${fmt(p.passportFee)}</strong>
        </div>
        <button id="modalAddBtn" type="button" class="btn-card-cta" style="width:100%;margin-top:12px;padding:12px;font-size:14px;">Asrab olish savatiga qo‘shish</button>
      </div>
    </div>`;
  modal.classList.remove('hidden');
  document.getElementById('closeModalBtn')?.addEventListener('click', () => modal.classList.add('hidden'));
  document.getElementById('modalAddBtn')?.addEventListener('click', () => { togglePet(p.id, true); modal.classList.add('hidden'); });
};
document.getElementById('petModal')?.addEventListener('click', e => { if (e.target.id === 'petModal') e.currentTarget.classList.add('hidden'); });

const renderBasket = () => {
  const cnt = state.basketPets.length + state.basketKits.reduce((s, k) => s + k.qty, 0);
  const badge = document.getElementById('basketBadge');
  if (badge) badge.textContent = `(${cnt})`;
  const body = document.getElementById('basketBody');
  const form = document.getElementById('adoptForm');
  const totalEl = document.getElementById('basketTotal');
  if (!body || !form || !totalEl) return;

  const total = state.basketPets.reduce((s, p) => s + p.passportFee, 0) + state.basketKits.reduce((s, k) => s + k.kit.price * k.qty, 0);
  totalEl.textContent = fmt(total);

  let topHtml = '';
  if (state.adoptSent) {
    topHtml = `<div class="success-banner" style="margin-top:0;text-align:center;">
      <div class="success-title" style="justify-content:center;">${CHECK_SVG}<span>Arizangiz qabul qilindi</span></div>
      <p style="margin-top:8px;font-size:13px;color:var(--ink-secondary);">PANOH koordinatori uchrashuv vaqtini kelishish uchun 2 soat ichida qo‘ng‘iroq qiladi.</p>
    </div>`;
  } else if (!cnt) {
    topHtml = `<div style="padding:24px 0;text-align:center;">
      <svg viewBox="0 0 120 100" fill="none" style="width:104px;height:84px;margin:0 auto;color:#8ea595;"><rect x="22" y="34" width="76" height="50" rx="14" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 5"/><path d="M40 34L50 18M80 34L70 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="51" cy="54" r="3" fill="currentColor"/><circle cx="60" cy="49" r="3.2" fill="currentColor"/><circle cx="69" cy="54" r="3" fill="currentColor"/><path d="M60 58c-5 0-9 3.8-9 7.8 0 2.6 2 4.4 4.6 4.4 1.8 0 3-.7 4.4-.7s2.6.7 4.4.7c2.6 0 4.6-1.8 4.6-4.4 0-4-4-7.8-9-7.8z" fill="#D95D39" fill-opacity="0.85"/></svg>
      <p style="margin-top:10px;font-size:14px;font-weight:600;">Savatingiz hozircha bo‘sh</p>
      <p style="margin-top:4px;font-size:12px;color:var(--ink-secondary);">Katalogdan hayvon yoki quyidagi to‘plamni qo‘shing.</p>
    </div>`;
  } else {
    const pHtml = state.basketPets.map(p => `<div class="basket-row">
      <img src="${p.image}" alt="${p.name}" class="basket-thumb" />
      <div style="flex:1;min-width:0;">
        <h5 style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.name} (${p.speciesLabel})</h5>
        <p style="font-size:12px;color:var(--ink-secondary);">${p.breed}</p>
        <p class="font-mono-num" style="font-size:12px;font-weight:600;color:var(--accent-emerald);">${fmt(p.passportFee)}</p>
      </div>
      <button type="button" data-rm-pet="${p.id}" style="border:none;background:none;color:var(--accent-coral);font-size:12px;font-weight:600;cursor:pointer;">🗑️</button>
    </div>`).join('');
    const kHtml = state.basketKits.map(x => `<div class="basket-row">
      <div style="flex:1;min-width:0;">
        <h5 style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${x.kit.name}</h5>
        <p class="font-mono-num" style="font-size:12px;font-weight:600;color:var(--accent-emerald);">${fmt(x.kit.price)}</p>
      </div>
      <div class="qty-box">
        <button type="button" class="qty-btn" data-kit-dec="${x.kit.id}">-</button>
        <span class="font-mono-num" style="font-size:12px;font-weight:600;">${x.qty}</span>
        <button type="button" class="qty-btn" data-kit-inc="${x.kit.id}">+</button>
      </div>
    </div>`).join('');
    topHtml = `<div style="display:flex;flex-direction:column;gap:10px;">${pHtml}${kHtml}</div>`;
  }

  const kitsHtml = `<div style="border-top:1px solid var(--border-hair);padding-top:14px;">
    <p style="font-size:12px;font-weight:600;">Foydali parvarish to‘plamlari</p>
    <div style="margin-top:10px;display:flex;flex-direction:column;gap:8px;">
      ${CARE_KITS.map(k => `<div class="basket-row" style="justify-content:space-between;">
        <div style="min-width:0;">
          <p style="font-size:12px;font-weight:600;">${k.name}</p>
          <p style="font-size:11px;color:var(--ink-secondary);">${k.suitableFor}</p>
          <p class="font-mono-num" style="font-size:12px;font-weight:600;color:var(--accent-coral);margin-top:2px;">${fmt(k.price)}</p>
        </div>
        <button type="button" data-kit-add="${k.id}" style="padding:6px 10px;border-radius:8px;border:none;background:var(--bg-surface);font-size:11px;font-weight:600;cursor:pointer;flex-shrink:0;">+</button>
      </div>`).join('')}
    </div>
  </div>`;

  body.innerHTML = topHtml + kitsHtml;
  form.classList.toggle('hidden', cnt === 0 || state.adoptSent);

  body.querySelectorAll('[data-rm-pet]').forEach(b => b.addEventListener('click', () => togglePet(b.dataset.rmPet, false)));
  body.querySelectorAll('[data-kit-add]').forEach(b => b.addEventListener('click', () => adjustKit(b.dataset.kitAdd, 1, false)));
  body.querySelectorAll('[data-kit-inc]').forEach(b => b.addEventListener('click', () => adjustKit(b.dataset.kitInc, 1, false)));
  body.querySelectorAll('[data-kit-dec]').forEach(b => b.addEventListener('click', () => adjustKit(b.dataset.kitDec, -1, false)));
};

const togglePet = (id, open) => {
  state.adoptSent = false;
  const pet = PETS.find(p => p.id === id);
  if (!pet) return;
  const exists = state.basketPets.some(p => p.id === id);
  if (exists) {
    if (!open) state.basketPets = state.basketPets.filter(p => p.id !== id);
  } else {
    state.basketPets.push(pet);
  }
  renderPets();
  renderBasket();
  if (open) document.getElementById('basketDrawer')?.classList.remove('hidden');
};

const adjustKit = (id, delta, open) => {
  state.adoptSent = false;
  const kit = [...CARE_KITS, ...SPONSOR_PLANS].find(k => k.id === id);
  if (!kit) return;
  const item = state.basketKits.find(x => x.kit.id === id);
  if (!item && delta > 0) state.basketKits.push({ kit, qty: 1 });
  else if (item) {
    item.qty += delta;
    if (item.qty <= 0) state.basketKits = state.basketKits.filter(x => x.kit.id !== id);
  }
  renderBasket();
  if (open) document.getElementById('basketDrawer')?.classList.remove('hidden');
};

document.getElementById('openBasketBtn')?.addEventListener('click', () => document.getElementById('basketDrawer')?.classList.remove('hidden'));
document.getElementById('closeBasketBtn')?.addEventListener('click', () => document.getElementById('basketDrawer')?.classList.add('hidden'));
document.getElementById('basketDrawer')?.addEventListener('click', e => { if (e.target.id === 'basketDrawer') e.currentTarget.classList.add('hidden'); });
document.getElementById('adoptForm')?.addEventListener('submit', e => {
  e.preventDefault();
  state.adoptSent = true;
  state.basketPets = [];
  state.basketKits = [];
  e.target.reset();
  renderPets();
  renderBasket();
});

document.querySelectorAll('#catBar .cat-btn').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('#catBar .cat-btn').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  state.category = b.dataset.cat;
  renderPets();
}));
document.getElementById('searchInput')?.addEventListener('input', e => { state.search = e.target.value; renderPets(); });
document.getElementById('tempFilter')?.addEventListener('change', e => { state.temperament = e.target.value; renderPets(); });
document.getElementById('resetFilterBtn')?.addEventListener('click', () => {
  state.category = 'all'; state.temperament = 'all'; state.search = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('tempFilter').value = 'all';
  document.querySelectorAll('#catBar .cat-btn').forEach((x, i) => x.classList.toggle('active', i === 0));
  renderPets();
});

const updateBudget = () => {
  const baseFood = { dog: 360000, cat: 220000, rabbit: 140000, bird: 95000 };
  const food = Math.round(baseFood[calc.species] * (calc.food === 'premium' ? 1.4 : 1));
  const vet = calc.vet === 'full' ? (calc.species === 'dog' ? 160000 : 120000) : 65000;
  const hyg = calc.species === 'cat' ? 110000 : calc.species === 'dog' ? 95000 : 75000;
  const tot = food + vet + hyg;
  const fP = Math.round((food / tot) * 100), vP = Math.round((vet / tot) * 100), hP = 100 - fP - vP;
  document.getElementById('budgetTotal').textContent = fmt(tot);
  document.getElementById('lblFood').textContent = `Ozuqa (${fP}%)`;
  document.getElementById('valFood').textContent = fmt(food);
  document.getElementById('lblVet').textContent = `Profilaktika (${vP}%)`;
  document.getElementById('valVet').textContent = fmt(vet);
  document.getElementById('lblHyg').textContent = `Gigiyena (${hP}%)`;
  document.getElementById('valHyg').textContent = fmt(hyg);
  document.getElementById('donutFood').setAttribute('stroke-dashoffset', String(289 - (289 * fP) / 100));
  const dVet = document.getElementById('donutVet');
  dVet.setAttribute('stroke-dasharray', `${(289 * vP) / 100} 289`);
  dVet.setAttribute('stroke-dashoffset', String(-((289 * fP) / 100)));
};

document.querySelectorAll('#calcSpeciesBtns button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('#calcSpeciesBtns button').forEach(x => x.classList.remove('active-dark'));
  b.classList.add('active-dark'); calc.species = b.dataset.val; updateBudget();
}));
document.querySelectorAll('#calcFoodBtns button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('#calcFoodBtns button').forEach(x => x.classList.remove('active-green'));
  b.classList.add('active-green'); calc.food = b.dataset.val; updateBudget();
}));
document.querySelectorAll('#calcVetBtns button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('#calcVetBtns button').forEach(x => x.classList.remove('active-green'));
  b.classList.add('active-green'); calc.vet = b.dataset.val; updateBudget();
}));

let matchedId = 'pet-kumush';
const updateMatcher = () => {
  let best = PETS[0], top = -1;
  PETS.forEach(p => {
    let sc = 62;
    if (p.housing === match.housing || p.housing === 'both') sc += 16;
    if (p.temperament === match.activity) sc += 14;
    if (p.experience === match.exp || match.exp === 'experienced') sc += 8;
    if (sc > top) { top = sc; best = p; }
  });
  const pct = Math.min(99, top);
  matchedId = best.id;
  document.getElementById('matchPetTitle').textContent = `${best.name} (${best.speciesLabel})`;
  document.getElementById('matchPctText').textContent = `${pct}%`;
  document.getElementById('matchCircle').setAttribute('stroke-dashoffset', String(163.36 - (163.36 * pct) / 100));
  document.getElementById('matchPetImg').src = best.image;
  document.getElementById('matchPetTemp').textContent = best.temperamentLabel;
  document.getElementById('matchPetStory').textContent = best.story;
};
document.querySelectorAll('#matchHouseBtns button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('#matchHouseBtns button').forEach(x => x.classList.remove('active-green'));
  b.classList.add('active-green'); match.housing = b.dataset.val; updateMatcher();
}));
document.querySelectorAll('#matchActBtns button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('#matchActBtns button').forEach(x => x.classList.remove('active-green'));
  b.classList.add('active-green'); match.activity = b.dataset.val; updateMatcher();
}));
document.querySelectorAll('#matchExpBtns button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('#matchExpBtns button').forEach(x => x.classList.remove('active-green'));
  b.classList.add('active-green'); match.exp = b.dataset.val; updateMatcher();
}));
document.getElementById('matchDetailBtn')?.addEventListener('click', () => openPetModal(matchedId));
document.getElementById('matchAddBtn')?.addEventListener('click', () => togglePet(matchedId, true));

const renderStandards = () => {
  const tabsEl = document.getElementById('stdTabs');
  const panelEl = document.getElementById('stdPanel');
  const cur = CARE_STANDARDS.find(x => x.id === activeStd) || CARE_STANDARDS[0];
  if (tabsEl) {
    tabsEl.innerHTML = CARE_STANDARDS.map(t => `<button type="button" class="std-tab ${t.id === activeStd ? 'active' : ''}" data-std="${t.id}">${t.title}</button>`).join('');
    tabsEl.querySelectorAll('[data-std]').forEach(b => b.addEventListener('click', () => { activeStd = b.dataset.std; renderStandards(); }));
  }
  if (panelEl) {
    panelEl.innerHTML = `<div>
      <h3>${cur.headline}</h3>
      <p>${cur.summary}</p>
      <ul class="std-points">${cur.points.map(pt => `<li><span class="std-check-dot">${CHECK_SVG}</span><span>${pt}</span></li>`).join('')}</ul>
    </div>
    <div class="std-metric-card">${SHIELD_SVG}<p class="font-mono-num std-metric-val">${cur.metricValue}</p><p class="std-metric-lbl">${cur.metricLabel}</p></div>`;
  }
};

const sponsorGrid = document.getElementById('sponsorGrid');
if (sponsorGrid) {
  sponsorGrid.innerHTML = SPONSOR_PLANS.map(sp => `<div class="sponsor-card">
    <div>
      <div class="icon-box coral">${HEART_SVG}</div>
      <p style="margin-top:20px;font-size:12px;font-weight:500;color:var(--accent-emerald);">${sp.suitableFor}</p>
      <h3 style="margin-top:4px;font-size:24px;font-weight:600;">${sp.name}</h3>
      <p style="margin-top:8px;font-size:14px;color:var(--ink-secondary);">${sp.description}</p>
    </div>
    <div style="margin-top:24px;padding-top:16px;border-top:1px solid var(--bg-surface);">
      <p class="font-mono-num" style="font-size:20px;font-weight:600;">${fmt(sp.price)}</p>
      <button type="button" class="btn-dark-full" data-spon="${sp.id}">Savatga qo‘shish</button>
    </div>
  </div>`).join('');
  sponsorGrid.querySelectorAll('[data-spon]').forEach(b => b.addEventListener('click', () => adjustKit(b.dataset.spon, 1, true)));
}

const faqList = document.getElementById('faqList');
if (faqList) {
  faqList.innerHTML = FAQS.map((f, i) => `<div class="faq-item ${i === 0 ? 'open' : ''}">
    <button type="button" class="faq-trigger"><span>${f.q}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button>
    <div class="faq-answer ${i === 0 ? '' : 'hidden'}">${f.a}</div>
  </div>`).join('');
  faqList.querySelectorAll('.faq-trigger').forEach(btn => btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const ans = item.querySelector('.faq-answer');
    const willOpen = ans.classList.contains('hidden');
    faqList.querySelectorAll('.faq-item').forEach(x => { x.classList.remove('open'); x.querySelector('.faq-answer').classList.add('hidden'); });
    if (willOpen) { item.classList.add('open'); ans.classList.remove('hidden'); }
  }));
}

const visitForm = document.getElementById('visitForm');
const visitSuccess = document.getElementById('visitSuccess');
visitForm?.addEventListener('submit', e => {
  e.preventDefault();
  visitForm.classList.add('hidden');
  visitSuccess?.classList.remove('hidden');
  visitForm.reset();
});
document.getElementById('visitResetBtn')?.addEventListener('click', () => {
  visitSuccess?.classList.add('hidden');
  visitForm?.classList.remove('hidden');
});

renderPets();
renderBasket();
updateBudget();
updateMatcher();
renderStandards();