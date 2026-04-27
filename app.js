const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  nav.classList.toggle("is-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("is-active");
    nav.classList.remove("is-open");
  });
});

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealItems.forEach((item) => revealObserver.observe(item));
const openModalBtn = document.querySelector(".open-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const overlay = document.querySelector(".modal__overlay");

openModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
});

const closeModalFunc = () => {
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
};

closeModal.addEventListener("click", closeModalFunc);
overlay.addEventListener("click", closeModalFunc);

const carouselTrack = document.querySelector(".carousel-track");
const carouselPrev = document.querySelector(".carousel-btn-prev");
const carouselNext = document.querySelector(".carousel-btn-next");

if (carouselTrack && carouselPrev && carouselNext) {
  carouselNext.addEventListener("click", () => {
    carouselTrack.scrollBy({
      left: carouselTrack.clientWidth / 1.2,
      behavior: "smooth",
    });
  });

  carouselPrev.addEventListener("click", () => {
    carouselTrack.scrollBy({
      left: -carouselTrack.clientWidth / 1.2,
      behavior: "smooth",
    });
  });
}
const methodModal = document.querySelector(".method-modal");
const methodModalContent = document.getElementById("methodModalContent");
const methodButtons = document.querySelectorAll(".open-method-modal");
const methodClose = methodModal.querySelector(".modal__close");
const methodOverlay = methodModal.querySelector(".modal__overlay");

const modalData = {
  1: `
    <h3>Нейромеханіка як методика</h3>

    <p>Нейромеханіка — це сучасний функціональний підхід до роботи з тілом, який розглядає організм як єдину систему.</p>

    <p>Це означає, що біль, обмеження руху, напруження, порушення постави або зниження функції розглядаються не окремо, а як частина загальної роботи всього організму.</p>

    <p><strong>Ми оцінюємо:</strong></p>
    <ul class="simple-list">
      <li>як людина рухається</li>
      <li>як розподіляється навантаження</li>
      <li>які зони перевантажені</li>
      <li>де є компенсації</li>
      <li>як нервова система керує рухом</li>
      <li>чому тіло утримує проблему</li>
    </ul>

    <p>Нейромеханіка допомагає зрозуміти не лише де болить, а й чому це сталося, як це сформувалося і за рахунок чого організм утримує цю дисфункцію.</p>
  `,

  2: `
    <h3>Суть підходу</h3>

    <p>Завдання спеціаліста — не просто прибрати симптом, а зрозуміти, чому система була змушена його створити.</p>

    <p>Часто біль, спазм, обмеження руху, перекіс або порушення патерну — це спосіб організму тимчасово пристосуватися, утримати стійкість або зберегти функцію в змінених умовах.</p>

    <p>Будь-яка зміна в організмі має сенс.</p>

    <p><strong>Важливо зрозуміти:</strong></p>
    <ul class="simple-list">
      <li>як виник симптом</li>
      <li>для чого він з’явився</li>
      <li>яку функцію він допомагає тимчасово реалізувати</li>
      <li>яке перевантаження або нестабільність він компенсує</li>
    </ul>

    <p>Лише тоді можна перебудувати систему так, щоб потреба в цьому симптомі або в цій дисфункції поступово зникла.</p>
  `,

  3: `
    <h3>Як проходить робота</h3>

    <p>Робота в нейромеханіці будується за зрозумілою послідовною логікою:</p>

    <ul class="simple-list">
      <li>Функціональне тестування</li>
      <li>Аналіз руху, постави та компенсацій</li>
      <li>Пошук первинної причини і ключових зон перевантаження</li>
      <li>Вибір стратегії впливу і потрібних технік</li>
      <li>Перевірка змін після корекції</li>
      <li>Повторна інтеграція та закріплення результату через рух</li>
    </ul>

    <p>Ми не змушуємо тіло змінюватися силою.</p>
    <p>Ми створюємо умови, за яких система сама переходить до більш вигідного і більш функціонального способу роботи.</p>
  `,

  4: `
    <h3>Де застосовується</h3>

    <p>Метод застосовується не лише при болю або локальній дисфункції.</p>

    <p>Він корисний скрізь, де потрібно покращити функцію, рух, стійкість, адаптацію та якість життя.</p>

    <p><strong>Нейромеханіка застосовується при:</strong></p>
    <ul class="simple-list">
      <li>болю у спині, шиї, попереку</li>
      <li>проблемах із суглобами</li>
      <li>обмеженні рухливості</li>
      <li>м’язовому напруженні та спазмах</li>
      <li>головних болях</li>
      <li>порушенні постави</li>
      <li>наслідках травм</li>
      <li>хронічному болю</li>
      <li>порушенні рухових патернів</li>
      <li>спортивних перевантаженнях</li>
      <li>відновленні після навантажень</li>
      <li>ситуаціях, коли структурно все виглядає відносно нормально, але функція вже порушена</li>
    </ul>
  `,

  5: `
    <h3>Практичне значення методу</h3>

    <p>Нейромеханіка допомагає спеціалісту працювати:</p>

    <ul class="simple-list">
      <li>безпечно</li>
      <li>логічно</li>
      <li>фізіологічно</li>
      <li>більш точно</li>
      <li>з більш стійким результатом</li>
    </ul>

    <p>Це можливість поєднати діагностику, мануальну роботу, вправи та рух в одну зрозумілу систему.</p>
  `,

  6: `
    <h3>Висновок</h3>

    <p>Нейромеханіка — це підхід, у якому спеціаліст розуміє, як формується проблема і як допомогти організму відновити більш правильну функцію.</p>

    <p>Ми не змінюємо тіло силою.</p>
    <p>Ми створюємо умови, за яких система сама перебудовується.</p>
  `,
};

methodButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const id = btn.dataset.modal;
    methodModalContent.innerHTML = modalData[id];

    methodModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });
});

const closeMethodModal = () => {
  methodModal.classList.remove("is-open");
  document.body.style.overflow = "";
};

methodClose.addEventListener("click", closeMethodModal);
methodOverlay.addEventListener("click", closeMethodModal);

const programModal = document.querySelector(".program-modal");
const programModalContent = document.getElementById("programModalContent");
const programButtons = document.querySelectorAll(".open-program-modal");

const programData = {
  1: `
    <h3>СЕМІНАР 1</h3>
    <p><strong>«Нейромеханіка в постурології: основи функціонального тестування та мануальних корекцій»</strong></p>

    <p><strong>У чому суть модуля</strong></p>
    <p>Це базовий модуль, який формує фундамент усієї системи.</p>
    <p>Тут спеціаліст починає розуміти, що таке нейромеханіка, як формується рух, як нервова система керує функцією, як проводити функціональне тестування і як через постурологію, діалог з тілом та м’які мануальні корекції знаходити первинну причину порушення.</p>

    <p><strong>Що буде вивчатися</strong></p>
    <ul class="simple-list">
      <li>основи нейромеханіки та нейрофізіології руху</li>
      <li>розуміння того, що таке функція, дисфункція та функціональність руху</li>
      <li>роль нервової системи у формуванні руху</li>
      <li>сенсорно-пропріоцептивна система та її значення</li>
      <li>прикладна функціональна анатомія</li>
      <li>фасція як система передачі напруження та основа діалогу з тілом</li>
      <li>основи пальпації та сприйняття тканин</li>
      <li>основи постурології</li>
      <li>tensegrity, м’язові ланцюги, баланс структури</li>
      <li>функціональне тестування як основа діагностики</li>
      <li>аналіз руху у статиці та динаміці</li>
      <li>роль дихання у формуванні руху та стабільності</li>
      <li>робота з поперечними структурами та діафрагмами</li>
      <li>принципи постуральної корекції</li>
      <li>базові мануальні корекції через нервову систему</li>
    </ul>

    <p><strong>Що дасть модуль</strong></p>
    <p>Після семінару спеціаліст починає краще розуміти, як влаштований рух, як проводити функціональну діагностику, як бачити компенсації і як будувати первинну логіку корекції.</p>
  `,

  2: `
    <h3>СЕМІНАР 2</h3>
    <p><strong>«Фасціальні мануальні корекції у реабілітаційній нейромеханіці. Основи біодинаміки»</strong></p>

    <p><strong>У чому суть модуля</strong></p>
    <p>Цей модуль присвячений фасціальній системі та м’якій глибокій роботі з тканинами.</p>
    <p>Тут спеціаліст починає розуміти, як фасції беруть участь у формуванні напруження, болю, обмежень руху та хронічних компенсацій, і як через фасціальну роботу та біодинамічні підходи можна впливати на систему більш тонко та ефективно.</p>

    <p><strong>Що буде вивчатися</strong></p>
    <ul class="simple-list">
      <li>фасція як інтегративна та сенсорно-регуляторна система</li>
      <li>фасціальні напруження та їх вплив на рух</li>
      <li>фасціальний бар’єр і тканинний відгук</li>
      <li>сенсорна навігація та поглиблення пальпації</li>
      <li>модель 3T: tension, traction, torsion</li>
      <li>нейрофізіологія болю в контексті фасціальної системи</li>
      <li>BLT</li>
      <li>BFT</li>
      <li>BFT-fluid</li>
      <li>основи біодинаміки</li>
      <li>м’які фасціальні корекції без агресивного впливу</li>
      <li>робота з ключовими м’язовими зонами</li>
      <li>робота з вузлами та фасціальними площинами</li>
      <li>робота з діафрагмами</li>
      <li>робота з вісцеральною системою</li>
      <li>робота з грудною кліткою, тазом, кінцівками</li>
      <li>робота з рубцями, фіброзом та хронічними змінами</li>
      <li>вплив на тверду мозкову оболонку через фасціальну систему</li>
    </ul>

    <p><strong>Що дасть модуль</strong></p>
    <p>Після семінару спеціаліст отримує інструменти м’якої та глибокої роботи з тканинами, краще розуміє хронічні стани, напруження та обмеження, а також вчиться працювати з фасціальною системою як з частиною загальної регуляції організму.</p>
  `,

  3: `
    <h3>СЕМІНАР 3</h3>
    <p><strong>«Функціональні мануальні корекції у реабілітаційній нейромеханіці: прямий та непрямий підхід»</strong></p>

    <p><strong>У чому суть модуля</strong></p>
    <p>Цей модуль присвячений уже безпосередньо корекції функціональних порушень.</p>
    <p>Тут спеціаліст вчиться розуміти, коли працювати напряму, а коли використовувати непрямий підхід, як обирати тактику залежно від функції, компенсації та стану системи, і як відновлювати рух більш точно та усвідомлено.</p>

    <p><strong>Що буде вивчатися</strong></p>
    <ul class="simple-list">
      <li>поняття функції, дисфункції та нефункціонального руху</li>
      <li>компенсації та їх роль у розвитку порушення</li>
      <li>перехід функціонального порушення у структурні зміни</li>
      <li>роль нервової системи в утриманні патологічних патернів</li>
      <li>принципи діагностики регіонів тіла</li>
      <li>логіка: тест → аналіз → корекція → інтеграція</li>
      <li>прямий підхід</li>
      <li>непрямий підхід</li>
      <li>робота через бар’єр і робота від бар’єру</li>
      <li>вибір тактики залежно від клінічної ситуації</li>
      <li>м’язово-енергетичні техніки</li>
      <li>постізометрична релаксація</li>
      <li>робота з шийним регіоном</li>
      <li>робота з тазовим регіоном</li>
      <li>робота з великими суглобами</li>
      <li>робота з м’язовими масивами</li>
      <li>корекція функціональних патернів руху</li>
    </ul>

    <p><strong>Що дасть модуль</strong></p>
    <p>Після семінару спеціаліст починає краще обирати стратегію корекції, впевненіше працювати з функціональними порушеннями та точніше підбирати підхід залежно від конкретного завдання.</p>
  `,

  4: `
    <h3>СЕМІНАР 4</h3>
    <p><strong>«Нейромеханіка хребта та черепа: діагностика та функціональні мануальні корекції»</strong></p>

    <p><strong>У чому суть модуля</strong></p>
    <p>Це фінальний інтеграційний модуль.</p>
    <p>Тут усі раніше отримані знання об’єднуються в єдину систему, і спеціаліст починає працювати вже безпосередньо з хребтом, тазом, крижами, краніальними структурами та їх зв’язком із загальною функцією організму.</p>

    <p><strong>Що буде вивчатися</strong></p>
    <ul class="simple-list">
      <li>функціональна анатомія та біомеханіка хребта</li>
      <li>шийний, грудний і поперековий відділи</li>
      <li>закони Фрайєтта</li>
      <li>взаємозв’язок: хребет → таз → череп → постура</li>
      <li>роль твердої мозкової оболонки</li>
      <li>вплив краніальних структур на механіку хребта</li>
      <li>краніальні дисфункції та їх вплив на рух і поставу</li>
      <li>робота з хребтом як з функціональною системою</li>
      <li>робота з тазом і крижами</li>
      <li>робота із зоною C0–C2</li>
      <li>декомпресія крижів</li>
      <li>декомпресія потилиці</li>
      <li>намет мозочка</li>
      <li>виличні кістки</li>
      <li>діафрагма малого таза</li>
      <li>прямий і непрямий підхід у роботі з хребтом і краніальними структурами</li>
      <li>інтеграція хребта, таза, черепа і постави в єдину систему</li>
    </ul>

    <p><strong>Що дасть модуль</strong></p>
    <p>Після семінару спеціаліст отримує цілісну модель роботи з хребтом і краніальними структурами, вчиться бачити глибокі взаємозв’язки в організмі та вибудовувати системну корекцію вже на більш складному рівні.</p>
  `,
};

programButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    programModalContent.innerHTML = programData[btn.dataset.program];
    programModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });
});

programModal.querySelector(".modal__close").addEventListener("click", () => {
  programModal.classList.remove("is-open");
  document.body.style.overflow = "";
});

programModal.querySelector(".modal__overlay").addEventListener("click", () => {
  programModal.classList.remove("is-open");
  document.body.style.overflow = "";
});
const benefitsModal = document.querySelector(".benefits-modal");
const openBenefitsModal = document.querySelector(".open-benefits-modal");

if (benefitsModal && openBenefitsModal) {
  const closeBenefitsModal = () => {
    benefitsModal.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  openBenefitsModal.addEventListener("click", (e) => {
    e.preventDefault();
    benefitsModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });

  benefitsModal
    .querySelector(".modal__close")
    .addEventListener("click", closeBenefitsModal);

  benefitsModal
    .querySelector(".modal__overlay")
    .addEventListener("click", closeBenefitsModal);
}
