  const hdr=document.querySelector('header');
  addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>40),{passive:true});
  const burger=document.querySelector('.burger'),menu=document.getElementById('mobileMenu');
  function toggleMenu(force){const open=force!==undefined?force:!menu.classList.contains('open');menu.classList.toggle('open',open);burger.classList.toggle('x',open);hdr.classList.toggle('menu-open',open);burger.setAttribute('aria-expanded',open);document.body.style.overflow=open?'hidden':'';}
  burger.addEventListener('click',()=>toggleMenu());
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>toggleMenu(false)));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  /* ---------- logo intro + underline draw (sequenced) ---------- */
  (function(){
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mark=document.getElementById('logoMark');
    const hl=document.querySelector('.hero h1 .hl');
    if(reduce){ if(hl) hl.classList.add('draw'); return; }
    if(mark){
      mark.classList.add('mark-intro');
      let drawn=false;
      const startDraw=()=>{ if(drawn) return; drawn=true; if(hl) hl.classList.add('draw'); };
      mark.addEventListener('animationend',startDraw,{once:true});
      setTimeout(startDraw,1100); // fallback in case animationend doesn't fire
    } else if(hl){
      hl.classList.add('draw');
    }
  })();

  /* ---------- i18n ---------- */
  const T={nl:{},en:{},fr:{}};
  document.querySelectorAll('[data-i18n]').forEach(el=>{T.nl[el.dataset.i18n]=el.innerHTML;});
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{T.nl[el.dataset.i18nPh]=el.getAttribute('placeholder');});
  document.querySelectorAll('[data-i18n-alt]').forEach(el=>{T.nl[el.dataset.i18nAlt]=el.getAttribute('alt');});
  document.querySelectorAll('[data-i18n-content]').forEach(el=>{T.nl[el.dataset.i18nContent]=el.getAttribute('content');});

  T.en={
    "docTitle":"Jasna@Work — Administrative support for entrepreneurs",
    "metaDesc":"Jasna@Work takes administrative chaos off entrepreneurs' hands: administration, planning, backoffice and follow-up. Self-employed since 2021, based in Schoten for the whole Antwerp area.",
    "nav.diensten":"Services","nav.aanpak":"Approach","nav.over":"About Jasna","nav.voorwie":"Who it's for","nav.contact":"Contact",
    "cta.header":"Book an intro call",
    "hero.kicker":"Admin, backoffice &amp; structure · Antwerp area",
    "hero.h1":"Let go.<br>Take hold.<br><span class=\"hl\">Trust it.</span>",
    "hero.lead":"You run the business. Jasna keeps your administration, planning and backoffice in order — so you get your time back for what truly matters to your business.",
    "hero.ctaPrimary":"Book a free consultation","hero.ctaGhost":"See the services",
    "hero.tick1":"Self-employed since 2021","hero.tick2":"10+ years of backoffice &amp; planning","hero.tick3":"Based in Schoten, serving the whole region",
    "hero.alt":"Hands on a laptop on a tidy white desk, with a pen and notebook",
    "hero.cardTitle":"Administrative chaos coordinator",
    "hero.cardText":"What you let go of, Jasna picks up. What matters to your business comes back to you, clear and simple.",
    "herken.kicker":"Sound familiar?",
    "herken.h2":"Your admin grows faster than your schedule allows.",
    "herken.big":"Naturally, you'd rather spend your time running your business than on admin. Yet it piles up: emails left unanswered, quotes sent too late, a schedule you only keep in your head.",
    "herken.quote":"“As an administrative chaos coordinator, I help you let go — and take back, or hand over to us, what really matters for your business.”",
    "chaos.1":"An inbox with hundreds of unread messages that still hide the important questions.",
    "chaos.2":"A schedule that exists only in your head — and grinds to a halt the moment you're unreachable.",
    "chaos.3":"Quotes and invoices that go out too late, and payments nobody follows up on.",
    "chaos.4":"Evenings and weekends spent on paperwork instead of on your clients — or your family.",
    "diensten.kicker":"Services",
    "diensten.h2":"Everything that keeps your business running,<br>without you having to chase it.",
    "diensten.lead":"From a few hours a week to a full backoffice: Jasna works to fit your business, remotely or on-site.",
    "svc1.h3":"Administration &amp; follow-up","svc1.p":"Your administration gets set up, maintained and followed up — so nothing falls through the cracks.",
    "svc1.ul":"<li>Processing incoming and outgoing administration</li><li>Invoicing, payments &amp; related follow-up</li><li>Bookkeeping preparation, aligned with your accountant</li>",
    "svc2.h3":"Planning &amp; backoffice","svc2.p":"A schedule that's accurate, assignments that get followed up, and a team that knows what needs to happen when.",
    "svc2.ul":"<li>Work and appointment scheduling</li><li>Follow-up of ongoing assignments</li><li>Structure in your daily processes</li>",
    "svc3.h3":"Quotes &amp; client follow-up","svc3.p":"From request to quote and further follow-up: clients get a timely answer and nothing is left hanging.",
    "svc3.ul":"<li>Drafting and sending quotes</li><li>Following up on enquiries and clients</li><li>Client contact on your behalf</li>",
    "svc4.h3":"Inbox &amp; calendar management","svc4.p":"A tidy inbox and a calendar that works for you instead of against you.",
    "svc4.ul":"<li>Sorting, answering and forwarding emails</li><li>Scheduling and confirming appointments</li><li>A weekly overview of what needs your attention</li>",
    "svc5.h3":"Order from chaos","svc5.p":"Backlogs cleared, systems set up, processes documented. As a one-off, or the start of an ongoing collaboration.",
    "svc5.ul":"<li>Catching up on overdue administration</li><li>Fine-tuning workflows and templates</li><li>Handed over cleanly to you and your team</li>",
    "svc6.h3":"Flexible, tailored","svc6.p":"A few hours a week, a temporary peak, or a fixed day: you decide how much you let go.",
    "svc6.ul":"<li>Remote or at your office</li><li>Scales with your workload</li><li>No staffing cost, but a fixed point of contact</li>",
    "aanpak.kicker":"Approach","aanpak.h2":"Here's how working with Jasna goes","aanpak.lead":"No complicated process. Three steps, at your pace.",
    "step1.h3":"Let go","step1.p":"Together we look at where your time goes today and what you can safely hand over. No obligation, in person or online.",
    "step2.h3":"Take hold","step2.p":"Jasna takes over the agreed tasks, brings structure where needed, and sets up a clear way of working that fits how you operate.",
    "step3.h3":"Trust it","step3.p":"Your administration runs smoothly, you get a clear overview of what matters — and you leave the rest, with peace of mind, to Jasna@Work.",
    "portrait.role":"Owner, Jasna@Work · Schoten","portrait.alt":"Jasna Hellemans, owner of Jasna@Work","badge.label":"self-employed since",
    "over.kicker":"About Jasna","over.h2":"Someone who knows how a backoffice really runs.",
    "over.lead":"Jasna is practical, structured and no-nonsense — with a sharp eye for what truly matters for your business. Before going self-employed, she built years of experience in backoffice, planning and sales at SMEs, and she brings that background into every collaboration.",
    "over.p2":"Engaged, and always no-judgement: whether your desk is a mess or perfectly organised, Jasna won't bat an eye. She brings structure where it's needed, or steps smoothly into a business that's already running well.",
    "over.linkedin":"View LinkedIn profile",
    "voorwie.kicker":"Who it's for","voorwie.h2":"For entrepreneurs who'd rather be entrepreneurs.",
    "voorwie.lead":"Jasna@Work works with self-employed professionals and SMEs who could use support in their administration and backoffice, and want someone helping keep an eye on the bigger picture.",
    "chip1":"Sole traders &amp; freelancers","chip2":"Tradespeople &amp; construction pros","chip3":"Manufacturing &amp; installation companies",
    "chip4":"Independent professionals","chip5":"Growing SMEs","chip6":"Businesses facing a temporary peak or absence",
    "contact.kicker":"Contact","contact.h2":"Ready to let go?",
    "contact.lead":"A first conversation is always without obligation. Together we'll look at what's on your plate and what Jasna@Work can take off it.",
    "info.locationLabel":"Schoten, Antwerp area","info.locationSub":"Remote or at your office",
    "info.responseLabel":"A quick, personal reply","info.responseSub":"On every request submitted through the form",
    "form.h3":"Book an introduction call","form.p":"Tell us briefly what's on your plate. Jasna will get in touch for a no-obligation chat.",
    "form.labelNaam":"Name","form.labelBedrijf":"Company","form.labelEmail":"Email","form.labelTel":"Phone","form.labelOnderwerp":"What can Jasna help you with?","form.labelBericht":"Message",
    "form.phNaam":"First and last name","form.phBedrijf":"Name of your business","form.phEmail":"you@company.com","form.phTel":"+32 …",
    "form.phBericht":"For example: I'm looking for someone for half a day a week for invoicing and planning…",
    "form.opt1":"Administration &amp; follow-up","form.opt2":"Planning &amp; backoffice","form.opt3":"Quotes &amp; sales support",
    "form.opt4":"Inbox &amp; calendar management","form.opt5":"Clearing a backlog","form.opt6":"Not sure yet — let's talk",
    "form.submit":"Send request","form.note":"Your details are only used to respond to your request.",
    "form.success":"Thank you! Your request has been sent — Jasna will contact you soon.",
    "form.error":"Something went wrong. Feel free to email us directly.",
    "footer.tagline":"Administrative support for entrepreneurs in the Antwerp area. Let go, take hold, trust it.",
    "footer.navTitle":"Navigation","footer.location":"Schoten, Belgium","footer.privacy":"Privacy policy","footer.cookies":"Cookie policy",
    "footer.copy":"© 2026 Jasna@Work — Jasna Hellemans. All rights reserved.","footer.by":"Website by",
    "cookie.text":"This website only uses necessary cookies and anonymous statistics to improve the site.",
    "cookie.more":"More info","cookie.accept":"Accept","cookie.necessary":"Necessary only"
  };

  T.fr={
    "docTitle":"Jasna@Work — Soutien administratif pour entrepreneurs",
    "metaDesc":"Jasna@Work prend en charge le chaos administratif des entrepreneurs : administration, planification, back-office et suivi. Indépendante depuis 2021, basée à Schoten pour toute la région d'Anvers.",
    "nav.diensten":"Services","nav.aanpak":"Approche","nav.over":"À propos","nav.voorwie":"Pour qui","nav.contact":"Contact",
    "cta.header":"Prise de contact",
    "hero.kicker":"Admin, back-office &amp; structure · région d'Anvers",
    "hero.h1":"Lâchez prise.<br>Reprenez le contrôle.<br><span class=\"hl\">Faites confiance.</span>",
    "hero.lead":"Vous entreprenez. Jasna garde votre administration, votre planification et votre back-office en ordre — pour que vous retrouviez du temps pour ce qui compte vraiment dans votre entreprise.",
    "hero.ctaPrimary":"Planifiez un entretien gratuit","hero.ctaGhost":"Voir les services",
    "hero.tick1":"Indépendante depuis 2021","hero.tick2":"Plus de 10 ans de back-office et planification","hero.tick3":"Basée à Schoten, pour toute la région",
    "hero.alt":"Mains sur un ordinateur portable sur un bureau blanc bien rangé, avec un stylo et un carnet",
    "hero.cardTitle":"Coordinatrice du chaos administratif",
    "hero.cardText":"Ce que vous lâchez, Jasna le reprend. Ce qui compte pour votre entreprise vous revient, clair et net.",
    "herken.kicker":"Ça vous parle ?",
    "herken.h2":"Votre administratif grandit plus vite que votre agenda ne le permet.",
    "herken.big":"Vous préférez naturellement consacrer votre temps à entreprendre plutôt qu'à l'administration. Pourtant, tout s'accumule : des e-mails en attente, des devis envoyés trop tard, un planning que vous gardez uniquement en tête.",
    "herken.quote":"« En tant que coordinatrice du chaos administratif, je vous aide à lâcher prise — et à reprendre, ou à nous confier, ce qui compte vraiment pour votre entreprise. »",
    "chaos.1":"Une boîte mail avec des centaines de messages non lus, parmi lesquels se cachent des questions importantes.",
    "chaos.2":"Un planning qui n'existe que dans votre tête — et qui s'arrête dès que vous êtes injoignable.",
    "chaos.3":"Des devis et factures envoyés trop tard, et des paiements que personne ne suit.",
    "chaos.4":"Des soirées et week-ends passés sur la paperasse plutôt qu'avec vos clients — ou votre famille.",
    "diensten.kicker":"Services",
    "diensten.h2":"Tout ce qui fait tourner votre entreprise,<br>sans que vous deviez tout gérer vous-même.",
    "diensten.lead":"De quelques heures par semaine à un back-office complet : Jasna s'adapte à votre entreprise, à distance ou sur place.",
    "svc1.h3":"Administration et suivi","svc1.p":"Votre administration est mise en place, tenue à jour et suivie — pour que rien ne reste en suspens.",
    "svc1.ul":"<li>Traitement de l'administration entrante et sortante</li><li>Facturation, paiements &amp; suivi associé</li><li>Préparation comptable, en concertation avec votre comptable</li>",
    "svc2.h3":"Planification et back-office","svc2.p":"Un planning fiable, des missions suivies de près et une équipe qui sait ce qui doit se passer et quand.",
    "svc2.ul":"<li>Planification du travail et des rendez-vous</li><li>Suivi des missions en cours</li><li>Structuration de vos processus quotidiens</li>",
    "svc3.h3":"Devis et suivi client","svc3.p":"De la demande au devis, jusqu'au suivi : vos clients reçoivent une réponse rapide et rien ne reste en suspens.",
    "svc3.ul":"<li>Rédaction et envoi des devis</li><li>Suivi des demandes et des clients</li><li>Contact client en votre nom</li>",
    "svc4.h3":"Gestion de boîte mail et d'agenda","svc4.p":"Une boîte mail bien rangée et un agenda qui travaille pour vous plutôt que contre vous.",
    "svc4.ul":"<li>Tri, réponse et transfert des e-mails</li><li>Planification et confirmation des rendez-vous</li><li>Aperçu hebdomadaire de ce qui requiert votre attention</li>",
    "svc5.h3":"De l'ordre dans le chaos","svc5.p":"Retard rattrapé, systèmes mis en place, processus documentés. En une seule fois, ou comme début d'une collaboration durable.",
    "svc5.ul":"<li>Rattrapage de l'administration en retard</li><li>Mise au point des méthodes de travail et modèles</li><li>Transmis clairement à vous et votre équipe</li>",
    "svc6.h3":"Flexible et sur mesure","svc6.p":"Quelques heures par semaine, un pic temporaire ou une journée fixe : c'est vous qui décidez de ce que vous lâchez.",
    "svc6.ul":"<li>À distance ou dans vos bureaux</li><li>Évolutif selon votre charge de travail</li><li>Aucun coût salarial, mais un interlocuteur fixe</li>",
    "aanpak.kicker":"Approche","aanpak.h2":"Voici comment se déroule la collaboration avec Jasna","aanpak.lead":"Pas de processus compliqué. Trois étapes, à votre rythme.",
    "step1.h3":"Lâcher prise","step1.p":"Nous regardons ensemble où passe votre temps aujourd'hui et ce que vous pouvez confier en toute confiance. Sans engagement, en personne ou en ligne.",
    "step2.h3":"Reprendre en main","step2.p":"Jasna reprend les tâches convenues, apporte de la structure là où c'est nécessaire et met en place une méthode de travail claire, adaptée à votre façon de fonctionner.",
    "step3.h3":"Faire confiance","step3.p":"Votre administration tourne, vous avez une vue claire sur l'essentiel — et vous confiez le reste, l'esprit tranquille, à Jasna@Work.",
    "portrait.role":"Gérante, Jasna@Work · Schoten","portrait.alt":"Jasna Hellemans, gérante de Jasna@Work","badge.label":"indépendante depuis",
    "over.kicker":"À propos de Jasna","over.h2":"Quelqu'un qui sait vraiment comment fonctionne un back-office.",
    "over.lead":"Jasna est pragmatique, structurée et sans chichis — avec un regard aiguisé sur ce qui compte vraiment pour votre entreprise. Avant de devenir indépendante, elle a acquis des années d'expérience en back-office, planification et vente au sein de PME, une expérience qu'elle met à profit dans chaque collaboration.",
    "over.p2":"Impliquée, et toujours sans jugement : que votre bureau soit en désordre ou parfaitement organisé, cela ne pose aucun problème à Jasna. Elle apporte de la structure là où c'est nécessaire, ou s'intègre facilement dans une entreprise qui tourne déjà bien.",
    "over.linkedin":"Voir le profil LinkedIn",
    "voorwie.kicker":"Pour qui","voorwie.h2":"Pour les entrepreneurs qui préfèrent entreprendre.",
    "voorwie.lead":"Jasna@Work travaille avec des indépendants et des PME qui ont besoin de soutien dans leur administration et leur back-office, et qui recherchent quelqu'un qui les aide à garder une vue d'ensemble.",
    "chip1":"Indépendants et micro-entreprises","chip2":"Artisans et professionnels du bâtiment","chip3":"Entreprises de production et d'installation",
    "chip4":"Professions libérales","chip5":"PME en croissance","chip6":"Entreprises confrontées à un pic ou une absence temporaire",
    "contact.kicker":"Contact","contact.h2":"Prêt(e) à lâcher prise ?",
    "contact.lead":"Un premier échange est toujours sans engagement. Nous examinons ensemble ce qui vous occupe et ce que Jasna@Work peut prendre en charge.",
    "info.locationLabel":"Schoten, région d'Anvers","info.locationSub":"À distance ou dans vos bureaux",
    "info.responseLabel":"Une réponse rapide et personnalisée","info.responseSub":"Pour toute demande envoyée via le formulaire",
    "form.h3":"Planifiez une prise de contact","form.p":"Décrivez brièvement ce qui vous occupe. Jasna vous recontactera pour un échange sans engagement.",
    "form.labelNaam":"Nom","form.labelBedrijf":"Entreprise","form.labelEmail":"E-mail","form.labelTel":"Téléphone","form.labelOnderwerp":"Avec quoi Jasna peut-elle vous aider ?","form.labelBericht":"Message",
    "form.phNaam":"Prénom et nom","form.phBedrijf":"Nom de votre entreprise","form.phEmail":"vous@entreprise.be","form.phTel":"+32 …",
    "form.phBericht":"Par exemple : je cherche quelqu'un une demi-journée par semaine pour la facturation et la planification…",
    "form.opt1":"Administration et suivi","form.opt2":"Planification et back-office","form.opt3":"Devis et support commercial",
    "form.opt4":"Gestion de boîte mail et d'agenda","form.opt5":"Rattraper un retard","form.opt6":"Pas encore sûr(e) — parlons-en",
    "form.submit":"Envoyer la demande","form.note":"Vos données ne sont utilisées que pour répondre à votre demande.",
    "form.success":"Merci ! Votre demande a été envoyée — Jasna vous recontactera rapidement.",
    "form.error":"Une erreur s'est produite. N'hésitez pas à nous écrire directement.",
    "footer.tagline":"Soutien administratif pour les entrepreneurs de la région d'Anvers. Lâchez prise, reprenez le contrôle, faites confiance.",
    "footer.navTitle":"Navigation","footer.location":"Schoten, Belgique","footer.privacy":"Politique de confidentialité","footer.cookies":"Politique de cookies",
    "footer.copy":"© 2026 Jasna@Work — Jasna Hellemans. Tous droits réservés.","footer.by":"Site web par",
    "cookie.text":"Ce site utilise uniquement des cookies nécessaires et des statistiques anonymes pour améliorer le site.",
    "cookie.more":"Plus d'infos","cookie.accept":"Accepter","cookie.necessary":"Nécessaires uniquement"
  };

  let currentLang='nl';
  function applyLang(lang){
    currentLang=lang;
    document.documentElement.lang=lang;
    const dict=T[lang]||T.nl;
    document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;el.innerHTML=(dict[k]!==undefined?dict[k]:T.nl[k]);});
    document.querySelectorAll('[data-i18n-ph]').forEach(el=>{const k=el.dataset.i18nPh;el.placeholder=(dict[k]!==undefined?dict[k]:T.nl[k]);});
    document.querySelectorAll('[data-i18n-alt]').forEach(el=>{const k=el.dataset.i18nAlt;el.alt=(dict[k]!==undefined?dict[k]:T.nl[k]);});
    document.querySelectorAll('[data-i18n-content]').forEach(el=>{const k=el.dataset.i18nContent;el.setAttribute('content',(dict[k]!==undefined?dict[k]:T.nl[k]));});
    document.querySelectorAll('.langsw button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  }
  document.querySelectorAll('.langsw button').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang)));

  const form=document.getElementById('contactForm');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const dict=T[currentLang]||T.nl;
    const note=form.querySelector('.form-note');
    const btn=form.querySelector('button[type="submit"]');
    const originalBtnText=btn.textContent;
    btn.disabled=true;
    note.classList.remove('success','error');
    const body=new URLSearchParams(new FormData(form)).toString();
    fetch('/', {
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body,
    }).then(res=>{
      if(!res.ok) throw new Error('Submit failed');
      form.reset();
      const successText=dict['form.success']||T.nl['form.success']||'Bedankt! Je aanvraag is verzonden — Jasna neemt binnenkort contact met je op.';
      note.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span>'+successText+'</span>';
      note.classList.add('success');
      btn.textContent=originalBtnText;
    }).catch(()=>{
      btn.disabled=false;
      btn.textContent=originalBtnText;
      note.textContent=dict['form.error']||T.nl['form.error']||'Er ging iets mis. Mail ons gerust rechtstreeks.';
      note.classList.add('error');
    });
  });
