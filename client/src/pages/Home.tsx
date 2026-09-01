/**
 * Design note — Proposta Técnica Alcântaro: vinho estruturante, papel quente, painéis carvão e módulos precisos.
 * A narrativa é objetiva e sequencial, guiada pela apresentação de Compliance Trabalhista & LGPD validada pelo usuário.
 */
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  X,
} from "lucide-react";

const assets = {
  logoOnDark: "/manus-storage/AS_LogoHorizontalFundoEscuroPNG_7f5c8077.png",
  logoOnLight: "/manus-storage/AS_LogoHorizontalFundoClaroPNG_eba9e3cf.png",
  mark: "/manus-storage/AS_LogoSignPNG_557597fa.webp",
  portrait: "/manus-storage/cintia-professional-portrait_15018751.webp",
};

const navigation = [
  { label: "Atuação", href: "#atuacao" },
  { label: "Método", href: "#metodo" },
  { label: "Fundadora", href: "#fundadora" },
  { label: "Contato", href: "#contato" },
];

const areas = [
  {
    number: "01",
    title: "Compliance\ntrabalhista",
    text: "Estrutura para relações de trabalho, prevenção e gestão de riscos.",
    tone: "wine",
  },
  {
    number: "02",
    title: "Proteção de\ndados · LGPD",
    text: "Organização de práticas de privacidade e dados no ambiente de trabalho.",
    tone: "paper",
  },
  {
    number: "03",
    title: "Advocacia\nfull service",
    text: "Apoio jurídico integrado às necessidades da empresa.",
    tone: "paper",
  },
];

const steps = [
  { number: "1", title: "Diagnóstico", text: "Leitura inicial do cenário e das prioridades." },
  { number: "2", title: "Saneamento", text: "Organização dos pontos que pedem atenção." },
  { number: "3", title: "Políticas", text: "Estruturação de diretrizes e procedimentos." },
  { number: "4", title: "Treinamento", text: "Alinhamento de pessoas e práticas." },
  { number: "5", title: "Suporte contínuo", text: "Acompanhamento conforme o contexto evolui." },
];

const intersections = [
  "Dados de colaboradores",
  "Políticas e procedimentos",
  "Canal de denúncias",
  "Monitoramento e privacidade",
  "Relações de trabalho",
];

const cintiaCredentials = [
  "Inscrição ativa na OAB/SP",
  "Pós-graduação em Direito do Trabalho",
  "Compliance Trabalhista e gestão de pessoas",
];

const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de iniciar uma conversa com a Alcântaro Soares Advocacia.",
);
const whatsappUrl = `https://wa.me/5511964189875?text=${whatsappMessage}`;
const officeAddress =
  "Rua Henrique Sóter Fernandes, 47, sala 21, Itapecerica de Serra - SP, 06850-710";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Rua+Henrique+S%C3%B3ter+Fernandes%2C+47%2C+sala+21%2C+Itapecerica+de+Serra+-+SP%2C+06850-710";

function WhatsAppLink({
  children,
  className,
  label,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
  onClick?: () => void;
}) {
  return (
    <a
      className={className}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("has-motion");
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="site-shell">
      <header className={`topbar ${scrolled ? "topbar--scrolled" : ""}`}>
        <div className="topbar__inner page-shell">
          <a href="#inicio" className="brand" aria-label="Alcântaro Soares Advocacia — início">
            <img src={assets.logoOnDark} alt="Alcântaro Soares Advocacia" />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <WhatsAppLink className="nav-cta">
            Fale conosco <ArrowUpRight size={15} />
          </WhatsAppLink>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        <div className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}>
          <div className="page-shell mobile-nav__inner">
            <span className="mobile-nav__caption">Navegação</span>
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>{item.label}<ArrowUpRight size={17} />
              </a>
            ))}
            <WhatsAppLink className="mobile-nav__cta" onClick={() => setMenuOpen(false)}>
              Iniciar conversa <MessageCircle size={18} />
            </WhatsAppLink>
          </div>
        </div>
      </header>

      <main>
        <section className="cover" id="inicio" aria-labelledby="cover-title">
          <div className="cover__disc cover__disc--one" aria-hidden="true" />
          <div className="cover__disc cover__disc--two" aria-hidden="true" />
          <div className="cover__corner" aria-hidden="true" />
          <div className="page-shell cover__inner">
            <div className="cover__overline cover-appear">Proposta institucional · Alcântaro Soares Advocacia</div>
            <div className="cover__content">
              <div className="cover__main cover-appear cover-appear--one">
                <div className="section-bar section-bar--gold"><span>Compliance</span></div>
                <h1 id="cover-title">Compliance<br />Trabalhista <em>&amp; LGPD</em></h1>
                <p>Estrutura jurídica para decisões empresariais, relações de trabalho e proteção de dados.</p>
              </div>
              <div className="cover__panel cover-appear cover-appear--two">
                <span>Atuação</span>
                <p>Uma leitura integrada para organizações que precisam tratar riscos, pessoas e dados com clareza.</p>
                <WhatsAppLink className="button button--sand">
                  Iniciar conversa <ArrowUpRight size={17} />
                </WhatsAppLink>
              </div>
            </div>
            <div className="cover__footer cover-appear cover-appear--three">
              <span>Advocacia empresarial</span><i /><span>Prevenção de passivos</span><i /><span>Proteção de dados</span>
            </div>
          </div>
        </section>

        <section className="agenda" id="atuacao" aria-labelledby="agenda-title">
          <div className="page-shell agenda__inner">
            <div className="section-heading" data-reveal>
              <div className="section-bar"><span>01 · Atuação</span></div>
              <h2 id="agenda-title">O que orienta nossa <em>atuação.</em></h2>
              <p>Frentes jurídicas organizadas para conversar com a realidade da empresa.</p>
            </div>
            <div className="agenda__cards">
              {areas.map((area, index) => (
                <article className={`area-card area-card--${area.tone}`} key={area.number} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                  <div className="area-card__top"><span>{area.number}</span><ShieldCheck size={18} /></div>
                  <h3>{area.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                  <p>{area.text}</p>
                  <ChevronRight className="area-card__arrow" size={19} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="concept" aria-labelledby="concept-title">
          <div className="page-shell concept__inner">
            <div className="concept__copy" data-reveal>
              <div className="section-bar section-bar--gold"><span>02 · Perspectiva</span></div>
              <h2 id="concept-title">Conformidade não é um ponto de chegada. É uma forma de <em>organizar decisões.</em></h2>
              <p>O trabalho parte do contexto da empresa para estruturar práticas, prevenir passivos e apoiar a gestão.</p>
            </div>
            <aside className="concept__panel" data-reveal>
              <span className="concept__panel-label">Pilar · governança</span>
              <div>
                <b>Clareza</b>
                <p>Visão de prioridades e pontos de atenção.</p>
              </div>
              <div>
                <b>Estrutura</b>
                <p>Diretrizes que se conectam ao dia a dia.</p>
              </div>
              <div>
                <b>Continuidade</b>
                <p>Acompanhamento conforme o cenário evolui.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="method" id="metodo" aria-labelledby="method-title">
          <div className="page-shell method__inner">
            <div className="section-heading section-heading--compact" data-reveal>
              <div className="section-bar"><span>03 · Como funciona</span></div>
              <h2 id="method-title">Um percurso em <em>cinco etapas.</em></h2>
              <p>O fluxo abaixo organiza uma conversa de trabalho e pode ser ajustado à necessidade de cada empresa.</p>
            </div>
            <div className="method__steps">
              {steps.map((step, index) => (
                <article className="method-step" key={step.number} data-reveal style={{ transitionDelay: `${index * 65}ms` }}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="intersection" aria-labelledby="intersection-title">
          <div className="page-shell intersection__inner">
            <div className="intersection__intro" data-reveal>
              <div className="section-bar section-bar--gold"><span>04 · Integração</span></div>
              <h2 id="intersection-title">Onde o trabalho e a <em>LGPD</em> se encontram.</h2>
              <p>Privacidade, relações de trabalho e governança podem coexistir na mesma decisão.</p>
            </div>
            <div className="intersection__list" data-reveal>
              {intersections.map((item, index) => (
                <div key={item}><span>0{index + 1}</span><p>{item}</p><ChevronRight size={18} /></div>
              ))}
            </div>
          </div>
        </section>

        <section className="founder" id="fundadora" aria-labelledby="founder-title">
          <div className="page-shell founder__inner">
            <div className="founder__card" data-reveal="media">
              <div className="founder__portrait"><img src={assets.portrait} alt="Retrato profissional de Cintia Alves Soares" /></div>
              <div className="founder__card-meta"><img src={assets.mark} alt="" /><span>Alcântaro Soares</span></div>
            </div>
            <div className="founder__copy">
              <div className="section-bar" data-reveal style={{ transitionDelay: "20ms" }}><span>05 · Fundadora</span></div>
              <h2 id="founder-title" data-reveal style={{ transitionDelay: "75ms" }}>Cintia Alves Soares.</h2>
              <p className="founder__role" data-reveal style={{ transitionDelay: "125ms" }}>Fundadora</p>
              <p className="founder__summary" data-reveal style={{ transitionDelay: "165ms" }}>Advogada com inscrição ativa na OAB/SP e pós-graduação em Direito do Trabalho. Sua trajetória reúne atuação trabalhista, gestão de pessoas e compliance com foco na prevenção de riscos e na estruturação de práticas internas.</p>
              <ul className="founder__credentials" aria-label="Credenciais profissionais" data-reveal style={{ transitionDelay: "215ms" }}>
                {cintiaCredentials.map((credential) => <li key={credential}>{credential}</li>)}
              </ul>
              <a className="text-link" data-reveal style={{ transitionDelay: "265ms" }} href="https://www.linkedin.com/in/cintia-soares-581898a3/" target="_blank" rel="noreferrer">Perfil profissional <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="contact" id="contato" aria-labelledby="contact-title">
          <div className="page-shell contact__inner">
            <div className="contact__copy" data-reveal>
              <div className="section-bar section-bar--gold"><span>Contato</span></div>
              <h2 id="contact-title">Uma conversa pode ser o início de uma estrutura mais <em>clara.</em></h2>
            </div>
            <div className="contact__actions" data-reveal>
              <WhatsAppLink className="button button--sand"><MessageCircle size={18} /> Iniciar conversa <ArrowUpRight size={17} /></WhatsAppLink>
              <a href="mailto:contat@alcantarosoaresadv.com.br" className="contact__email"><Mail size={17} /> contat@alcantarosoaresadv.com.br</a>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppLink className="whatsapp-float" label="Iniciar uma conversa pelo WhatsApp">
        <MessageCircle size={25} strokeWidth={2.1} />
      </WhatsAppLink>

      <footer className="footer">
        <div className="page-shell footer__inner">
          <div className="footer__top">
            <img className="footer__logo" src={assets.logoOnDark} alt="Alcântaro Soares Advocacia" />
            <nav aria-label="Navegação do rodapé">{navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
            <div className="footer__socials">
              <a href="https://www.instagram.com/alcantaro.soares.advocacia/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
              <a href="https://www.facebook.com/61591049637249" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={17} /></a>
            </div>
          </div>
          <div className="footer__address">
            <span>Endereço</span>
            <a href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={17} /><span>{officeAddress}</span><ArrowUpRight size={16} /></a>
          </div>
          <div className="footer__lower"><span>© {new Date().getFullYear()} Alcântaro Soares Advocacia.</span><span>Compliance Trabalhista &amp; LGPD</span></div>
        </div>
      </footer>
    </div>
  );
}
