/**
 * 챗봇 시스템 프롬프트 — 페르소나 및 이력 지식
 */
const SYSTEM_PROMPT = `너는 이 포트폴리오 주인의 페르소나 비서야. 방문자에게 밝고 정중하게, 주인을 잘 아는 사람처럼 답해. 답은 5문장, 마크다운 기호(별표 등) 없이 평문으로만.
아래 이력 지식을 근거로 답하되, 지식에 없는 질문이 오면 아는 선에서 자연스럽게 답하고 "자세한 건 저에게 직접 물어보시는 게 정확해요. 연락처를 참고해 주세요!"로 부드럽게 연결해. 과장하거나 없는 경력을 만들어내지 마.

이력 지식: **1️⃣ 한 줄 소개**
비즈니스 현장을 데이터로 구체화하고, 불가능한 목표를 실제 계약으로 연결해 온 "문제 해결·사업 실행형" 인재, 백준입니다.

---

**2️⃣ 기본 정보**
| 구분 | 내용 |
|------|------|
| **소속** | 성균관대학교 경영학과 (현재 재학) |
| **전공** | 중국언어문화전공 → 경영학전공(이중전공) |
| **언어** | 영어 (TOEIC 915, 2006-2007 미국 유학) |
| **핵심 역량** | 프로젝트 매니지먼트, 데이터 분석, 비즈니스 모델링, 창업·산학 연계 |

---

**3️⃣ 경험 요약**

| 기간 | 역할 | 핵심 성과 |
|------|------|-----------|
| **2021.03-2021.12** | 한국외국어대 중국학대학 학생회 기획정책국 | 학내 정책 제안·교육 프로그램 기획에 참여, 학생 의견 반영 체계 구축 |
| **2024.08-2025.01** | 인액터스 32기 "식용곤충 그래놀라" 프로젝트 | 농촌진흥청 협력·텀블벅 펀딩 173% 달성, 제품화·시장 진입 전략 수립 |
| **2025.02-2026.02** | 전통시장 플랫폼(개인사업자 대표) | 통인시장과 1,000만원 규모 MOU 체결, B2G 모델 전환 성공 |
| **2025.08-2025.12** | 문화체육관광부 "누리살핌단" | 수도권 주요 관광지 실시간 모니터링·피드백 시스템 구축 |
| **2025.08-2025.12** | 통인시장 서포터즈 1기 운영 | 디지털 특성화·PB상품 개발, 시장 온라인 판매 채널 확대 |
| **2025.08-2025.12** | 한국IT경영학회(KUSITMS) 32기·교육기획팀 | LG 전자 직행 산학연계 총괄, 서비스 기획·프로토타입 완성 |
| **2025.06-2025.08** | 스위프 웹 10기·PLAZA | PM으로서 모임 코스 추천 AI 서비스 개발, 대상 수상 |
| **2025.08-2025.10** | 직행 산학프로젝트 | 회원가입 유도·온보딩을 통한 개인화 설계, 우수상 수상 |
| **2025.10-2026.09** | AI 사업계획서 플랫폼 "스타라이트" | PM, 서울시 기획봉사단 3기 진행, 최우수 아이디어 선정 |
| **2026.03-2026.07** | DDM 아기유니콘 4기 | 창업 정책 현장 취재·보도, 정책 이해도 향상 |
| **2026.04-2026.05** | 현대엔지니어링 산학프로젝트 | 전략 기획 담당, 하이퍼로컬 리츠·상권 투자 인사이트 플랫폼 개발, 대상 수상 |

---

**4️⃣ 강점 5가지 (이력 근거 포함)**

1. **사업·계약 체결 능력** – 전통시장 플랫폼과 1,000만원 규모 MOU 체결(2025-2026).
2. **데이터 기반 의사결정** – SQLD·ADSP 보유, 고객 여정 재설계로 비용 구조 83% 혁신(스타라이트 PM).
3. **프로젝트 매니지먼트 전문성** – 다수 PM 역할(스위프 웹, 직행 산학, 스타라이트 등)에서 대상·최우수·우수상 다수 획득.
4. **창업·산학 연계 경험** – 인액터스, 아기유니콘·DDM 등 창업 지원 프로그램 운영·정책 현장 취재, 실제 펀딩 173% 달성.
5. **국제·영어 역량** – 미국 유학(2006-2007) 및 TOEIC 915점(2024)으로 글로벌 커뮤니케이션 가능.

---

**5️⃣ 예상 질문과 답변**

| 질문 | 답변 |
|------|------|
| **Q1. 주요 프로젝트에서 어떤 구체적인 역할을 맡았고, 결과는 어땠나요?** | 전통시장 플랫폼에서는 개인사업자로 대표 역할을 수행해 통인시장과 1,000만원 규모 MOU를 체결했으며, AI 사업계획서 플랫폼 스타라이트에서는 PM으로서 서비스 흐름을 재설계해 비용 구조를 83% 절감했습니다. |
| **Q2. 데이터 분석 역량을 어떻게 활용하고 있나요?** | SQLD와 ADSP 자격을 보유하고, 고객 여정 데이터를 기반으로 비용·프로세스 혁신(스타라이트)과 펀딩 성공률(곤충 그래놀라) 등을 정량적으로 관리·분석했습니다. |
| **Q3. 창업·산학 연계 경험이 있나요?** | 인액터스와 DDM 아기유니콘에서 창업 정책 소개·현장 취재를 수행했으며, 식용곤충 그래놀라 프로젝트는 농촌진흥청 협력·텀블벅 펀딩 173% 달성, 실제 사업화까지 이어졌습니다. |
| **Q4. 언어 능력은 어느 정도이며, 국제 업무에 어떻게 도움이 되나요?** | TOEIC 915점(2024)과 미국 유학(2006-2007) 경험으로 영어 비즈니스 커뮤니케이션이 가능하며, LG 전자·한국IT경영학회 등 국제·학계 협업 프로젝트에 원활히 참여합니다. |
| **Q5. 앞으로 어떤 분야에 기여하고 싶나요?** | 대학생·사회초년생을 타깃으로 한 신한 슈퍼SOL 앱 보험 탭의 UX 개선을 통해 실질적인 사용 가치를 높이고, 데이터·디자인·사업 모델을 결합한 필수 플랫폼 도약에 기여하고자 합니다.`;

/**
 * 포트폴리오 인터랙션 스크립트
 * - 다크모드 토글 (localStorage 저장)
 * - 스크롤 내비게이션 스타일
 * - 섹션 등장 애니메이션 (IntersectionObserver)
 * - 부드러운 스크롤 이동
 * - AI 챗봇
 */
(function () {
  'use strict';

  /* ===== DOM 요소 참조 ===== */
  const navbar = document.getElementById('navbar');
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.navbar__link');
  const revealElements = document.querySelectorAll('.reveal');
  const html = document.documentElement;

  const THEME_KEY = 'portfolio-theme';
  const NAV_OFFSET = 72;


  /* ===== 다크모드 토글 ===== */
  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
    localStorage.setItem(THEME_KEY, theme);
  }

  function toggleTheme() {
    const current = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  /* 페이지 로드 시 저장된 테마 적용 (깜빡임 방지) */
  applyTheme(getPreferredTheme());

  themeToggle.addEventListener('click', toggleTheme);


  /* ===== 스크롤 시 내비게이션 배경 처리 ===== */
  function handleNavbarScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();


  /* ===== 모바일 메뉴 토글 ===== */
  function closeMobileMenu() {
    navMenu.classList.remove('navbar__nav--open');
    menuToggle.classList.remove('navbar__menu-btn--open');
    menuToggle.setAttribute('aria-label', '메뉴 열기');
  }

  menuToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('navbar__nav--open');
    menuToggle.classList.toggle('navbar__menu-btn--open', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  });


  /* ===== 부드러운 스크롤 (내비 링크 + 로고 + 히어로 스크롤) ===== */
  function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      smoothScrollTo(href);
      closeMobileMenu();
    });
  });


  /* ===== 현재 섹션 내비게이션 활성 표시 ===== */
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    let currentId = '';

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - NAV_OFFSET - 40;
      if (window.scrollY >= sectionTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.toggle('navbar__link--active', link.getAttribute('href') === '#' + currentId);
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });


  /* ===== IntersectionObserver — 섹션 등장 효과 ===== */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    /* IntersectionObserver 미지원 브라우저: 즉시 표시 */
    revealElements.forEach(function (el) {
      el.classList.add('reveal--visible');
    });
  }

})();


/* ===== AI 챗봇 ===== */
(function () {
  'use strict';

  const UPSTAGE_URL = 'https://api.upstage.ai/v1/chat/completions';
  const UPSTAGE_MODEL = 'solar-pro3';
  const API_KEY_STORAGE = 'upstage-api-key';
  const ERROR_MSG = '잠시 후 다시 시도해 주세요.';
  const INVALID_KEY_MSG = '키가 올바르지 않아요. 다시 질문하시면 새로 입력받을게요.';

  /* DOM 요소 */
  const chatbot = document.getElementById('chatbot');
  const chatbotFab = document.getElementById('chatbotFab');
  const chatbotPanel = document.getElementById('chatbotPanel');
  const chatbotClose = document.getElementById('chatbotClose');
  const chatbotMessages = document.getElementById('chatbotMessages');
  const chatbotLoading = document.getElementById('chatbotLoading');
  const chatbotForm = document.getElementById('chatbotForm');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotSend = document.getElementById('chatbotSend');

  /* API 대화 이력 (system + user/assistant) */
  const conversationHistory = [
    { role: 'system', content: SYSTEM_PROMPT }
  ];

  let isSending = false;


  /* ===== 패널 열기/닫기 ===== */
  function openChatbot() {
    chatbot.classList.add('chatbot--open');
    chatbotPanel.setAttribute('aria-hidden', 'false');
    chatbotInput.focus();
  }

  function closeChatbot() {
    chatbot.classList.remove('chatbot--open');
    chatbotPanel.setAttribute('aria-hidden', 'true');
  }

  chatbotFab.addEventListener('click', openChatbot);
  chatbotClose.addEventListener('click', closeChatbot);


  /* ===== 메시지 UI 추가 ===== */
  function appendMessage(text, type) {
    const div = document.createElement('div');
    div.className = 'chatbot__message chatbot__message--' + type;
    const p = document.createElement('p');
    p.textContent = text;
    div.appendChild(p);
    chatbotMessages.appendChild(div);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function setLoading(visible) {
    chatbotLoading.hidden = !visible;
    if (visible) {
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
  }

  function setInputDisabled(disabled) {
    chatbotInput.disabled = disabled;
    chatbotSend.disabled = disabled;
  }


  /* ===== 실행 환경 분기: file: vs 배포 ===== */
  function isLocalFile() {
    return location.protocol === 'file:';
  }


  /* ===== file: 환경 — localStorage 또는 prompt로 키 확보 ===== */
  function getStoredApiKey() {
    return localStorage.getItem(API_KEY_STORAGE);
  }

  function promptForApiKey() {
    const key = window.prompt('Upstage API 키를 붙여넣어 주세요 (up_으로 시작)');
    if (key && key.trim()) {
      localStorage.setItem(API_KEY_STORAGE, key.trim());
      return key.trim();
    }
    return null;
  }

  function clearStoredApiKey() {
    localStorage.removeItem(API_KEY_STORAGE);
  }


  /* ===== Upstage / 프록시 API 호출 ===== */
  async function callChatApi(messages) {
    if (isLocalFile()) {
      const apiKey = getStoredApiKey();
      if (!apiKey) return { error: true };

      const response = await fetch(UPSTAGE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + apiKey
        },
        body: JSON.stringify({ model: UPSTAGE_MODEL, messages })
      });

      if (response.status === 401 || response.status === 403) {
        clearStoredApiKey();
        return { invalidKey: true };
      }

      const data = await response.json();
      if (!response.ok) return { error: true, data };
      return { data };
    }

    /* 배포 환경: 같은 도메인 /api/chat 프록시 */
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });

    const data = await response.json();
    if (!response.ok) return { error: true, data };
    return { data };
  }


  /* ===== 응답에서 assistant 텍스트 추출 ===== */
  function extractReply(data) {
    return data.choices && data.choices[0] && data.choices[0].message
      ? data.choices[0].message.content
      : null;
  }


  /* ===== 메시지 전송 ===== */
  async function handleSend(text) {
    if (isSending || !text.trim()) return;

    const userText = text.trim();

    /* file: 환경 — 첫 질문 시점에 키 입력 */
    if (isLocalFile() && !getStoredApiKey()) {
      const key = promptForApiKey();
      if (!key) return;
    }

    appendMessage(userText, 'user');
    conversationHistory.push({ role: 'user', content: userText });

    isSending = true;
    setInputDisabled(true);
    setLoading(true);

    try {
      const result = await callChatApi(conversationHistory);

      if (result.invalidKey) {
        conversationHistory.pop();
        appendMessage(INVALID_KEY_MSG, 'error');
        return;
      }

      const reply = extractReply(result.data);
      if (result.error || !reply) {
        conversationHistory.pop();
        appendMessage(ERROR_MSG, 'error');
        return;
      }

      conversationHistory.push({ role: 'assistant', content: reply });
      appendMessage(reply, 'bot');
    } catch {
      conversationHistory.pop();
      appendMessage(ERROR_MSG, 'error');
    } finally {
      isSending = false;
      setInputDisabled(false);
      setLoading(false);
      chatbotInput.focus();
    }
  }


  /* ===== 폼 제출 이벤트 ===== */
  chatbotForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const text = chatbotInput.value;
    chatbotInput.value = '';
    handleSend(text);
  });

})();