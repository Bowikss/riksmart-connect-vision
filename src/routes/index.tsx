import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  ChevronRight,
  CloudCog,
  Cpu,
  Gauge,
  Menu,
  Network,
  Radio,
  Route as RouteIcon,
  ShieldCheck,
  Signal,
  SolarPanel,
  Sun,
  TrafficCone,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import logoAsset from "../assets/rik-logo.svg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RIK Serviss | Autonomous Smart Infrastructure" },
      { name: "description", content: "RIK builds autonomous, solar-powered IoT safety infrastructure for cities and road authorities." },
      { property: "og:title", content: "RIK Serviss | Autonomous Smart Infrastructure" },
      { property: "og:description", content: "Connected, solar-powered safety hardware and centralized monitoring for modern roads and cities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Platform", "platform"],
  ["First solution", "solution"],
  ["Applications", "applications"],
  ["Monitoring", "monitoring"],
] as const;

function AnchorButton({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return (
    <a href={href} className={secondary ? "button-secondary" : "button-primary"}>
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#top" className="brand" aria-label="RIK Serviss home">
          <img src={logoAsset.url} alt="RIK Serviss" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a href="#contact" className="header-cta">Start a conversation <ArrowRight size={16} /></a>
        <button className="menu-button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
          <a href="#contact" onClick={() => setOpen(false)}>Start a conversation</a>
        </nav>
      )}
    </header>
  );
}

function CityNetwork() {
  return (
    <div className="city-visual" aria-label="Diagram of the RIK connected infrastructure network">
      <div className="visual-toolbar"><span><i /> Network live</span><span>4 nodes connected</span></div>
      <svg viewBox="0 0 760 480" role="img" aria-label="Road infrastructure nodes connected to the RIK monitoring platform">
        <defs><filter id="glow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
        <path className="map-line faint" d="M0 100L170 165L335 80L500 150L760 55M0 350L180 260L390 360L590 240L760 320" />
        <path className="road" d="M-20 410C135 315 240 350 365 245C480 148 560 154 790 65" />
        <path className="road-dash" d="M-20 410C135 315 240 350 365 245C480 148 560 154 790 65" />
        <path className="signal-line" d="M145 326L370 237L585 147" />
        <path className="signal-line delay" d="M370 237L622 338" />
        {[[145,326],[370,237],[585,147],[622,338]].map(([x,y], i) => <g key={i} transform={`translate(${x} ${y})`}><circle className="node-pulse" r="22"/><circle className="node" r="8"/><circle className="node-core" r="3"/></g>)}
        <g transform="translate(322 188)"><rect className="hub" width="96" height="96" rx="16"/><path className="hub-mark" d="M34 25h28a4 4 0 0 1 4 4v24c0 12-9 19-18 23-9-4-18-11-18-23V29a4 4 0 0 1 4-4Z"/><text x="48" y="58" textAnchor="middle">R</text></g>
        <g className="car" transform="translate(208 307) rotate(-19)"><rect x="-25" y="-12" width="50" height="24" rx="7"/><circle cx="-15" cy="14" r="5"/><circle cx="15" cy="14" r="5"/></g>
        <g className="crossing" transform="translate(490 179) rotate(-32)">{[-36,-18,0,18,36].map(x => <rect key={x} x={x} y="-18" width="9" height="36" rx="2"/>)}</g>
      </svg>
      <div className="visual-label label-one"><Signal size={15}/><span>LoRa network<br/><b>Long-range connection</b></span></div>
      <div className="visual-label label-two"><Sun size={15}/><span>Autonomous power<br/><b>Solar + battery</b></span></div>
      <div className="visual-stat"><b>99.8%</b><span>fleet uptime</span></div>
    </div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span />{children}</div>;
}

const platformItems: Array<{ icon: LucideIcon; n: string; title: string; text: string }> = [
  { icon: Cpu, n: "01", title: "Edge sensing", text: "Purpose-built sensors detect events locally with speed and precision." },
  { icon: SolarPanel, n: "02", title: "Autonomous power", text: "Solar generation and managed batteries remove dependence on grid access." },
  { icon: Radio, n: "03", title: "LoRa connectivity", text: "Resilient, long-range communication designed for distributed infrastructure." },
  { icon: CloudCog, n: "04", title: "Central monitoring", text: "Every deployed asset reports health, events, and performance to one view." },
];

function PlatformSection() {
  return (
    <section id="platform" className="section platform-section">
      <div className="shell">
        <div className="section-heading split-heading">
          <div><Eyebrow>The RIK platform</Eyebrow><h2>One system.<br/>Four connected layers.</h2></div>
          <p>We unite rugged field hardware, autonomous energy, low-power connectivity, and fleet intelligence into one deployable platform.</p>
        </div>
        <div className="platform-grid">
          {platformItems.map(({icon: Icon, n, title, text}) => (
            <article className="platform-card" key={title}>
              <div className="card-top"><span>{n}</span><Icon /></div><h3>{title}</h3><p>{text}</p><div className="card-line" />
            </article>
          ))}
        </div>
        <div className="platform-flow" aria-label="RIK platform data flow">
          <span><Cpu/> Detect</span><ChevronRight/><span><Zap/> Act</span><ChevronRight/><span><Radio/> Connect</span><ChevronRight/><span><Activity/> Understand</span>
        </div>
      </div>
    </section>
  );
}

function CrossingVisual() {
  return (
    <div className="crossing-visual">
      <div className="scene-sky"><div className="sun"><Sun/></div><div className="signal-waves"><i/><i/><i/></div></div>
      <div className="scene-road">
        <div className="zebra">{Array.from({length: 7}).map((_,i)=><i key={i}/>)}</div>
        <div className="bollard left"><span/><b/></div><div className="bollard right"><span/><b/></div>
        <div className="pedestrian"><i/><b/><em/><strong/></div>
      </div>
      <div className="scene-caption"><span className="live-dot"/> ACTIVE EVENT <b>Pedestrian detected · Beacons engaged</b></div>
    </div>
  );
}

function SolutionSection() {
  return (
    <section id="solution" className="section solution-section">
      <div className="shell solution-grid">
        <div className="solution-copy">
          <Eyebrow light>Our first deployed solution</Eyebrow>
          <h2>A safer crossing that thinks for itself.</h2>
          <p className="lead">RIK’s smart pedestrian crossing detects people at the roadside, activates high-visibility warning signals, and reports every event—without trenching for power or data.</p>
          <ul className="check-list">
            <li><CheckCircle2/> Rapid installation with minimal civil works</li>
            <li><CheckCircle2/> Reliable operation through northern winters</li>
            <li><CheckCircle2/> Remote health and performance visibility</li>
          </ul>
          <AnchorButton href="#contact">Discuss a deployment <ArrowRight size={17}/></AnchorButton>
        </div>
        <div><CrossingVisual/><div className="metric-strip"><div><b>&lt; 1 sec</b><span>event response</span></div><div><b>24 / 7</b><span>remote visibility</span></div><div><b>0 m</b><span>power trenching</span></div></div></div>
      </div>
    </section>
  );
}

const applications = [
  { icon: TrafficCone, title: "Roadworks & temporary zones", text: "Rapid-deploy warning systems for changing road conditions." },
  { icon: RouteIcon, title: "Traffic flow intelligence", text: "Distributed sensing for better-informed mobility decisions." },
  { icon: ShieldCheck, title: "Perimeter & public safety", text: "Autonomous monitoring where wired infrastructure is impractical." },
  { icon: Gauge, title: "Environmental monitoring", text: "Remote measurement networks for air, noise, and local conditions." },
];

function ApplicationsSection() {
  return (
    <section id="applications" className="section applications-section"><div className="shell">
      <div className="section-heading"><Eyebrow>Designed to extend</Eyebrow><h2>One platform. More<br/>ways to make cities safer.</h2></div>
      <div className="applications-grid">
        {applications.map(({icon:Icon,title,text},i)=><article key={title} className="application-item"><span className="application-index">0{i+1}</span><div className="icon-box"><Icon/></div><h3>{title}</h3><p>{text}</p><ArrowRight className="application-arrow"/></article>)}
      </div>
    </div></section>
  );
}

function MonitoringSection() {
  return (
    <section id="monitoring" className="section monitoring-section"><div className="shell monitoring-grid">
      <div className="monitor-copy"><Eyebrow>Centralized intelligence</Eyebrow><h2>Know what’s happening.<br/>Before it becomes a problem.</h2><p>RIK Command brings every connected asset into one operational view—from battery health and signal quality to event history and maintenance needs.</p>
        <div className="monitor-points"><div><Activity/><span><b>Live fleet status</b>See every site at a glance</span></div><div><BatteryCharging/><span><b>Predictive maintenance</b>Act before service is interrupted</span></div><div><Network/><span><b>Evidence & reporting</b>Turn field activity into insight</span></div></div>
      </div>
      <div className="dashboard">
        <div className="dashboard-top"><span><i/> RIK COMMAND</span><span>LIVE</span></div>
        <div className="dashboard-body">
          <div className="dash-side"><i/><i/><i/><i/></div>
          <div className="dash-main">
            <div className="dash-title"><div><small>NETWORK OVERVIEW</small><b>Riga region</b></div><span>Last update: now</span></div>
            <div className="dash-stats"><div><span>ACTIVE DEVICES</span><b>48</b><em className="green">+2 this week</em></div><div><span>AVG. BATTERY</span><b>87%</b><em>Healthy</em></div><div><span>EVENTS TODAY</span><b>1,284</b><em>↑ 12%</em></div></div>
            <div className="dash-content"><div className="mini-map">{[[18,23],[35,57],[52,31],[70,68],[82,39]].map(([x,y],i)=><i key={i} style={{left:`${x}%`,top:`${y}%`}}/>)}<svg viewBox="0 0 300 130"><path d="M-10 100L70 58L120 78L200 25L310 62M20 0L75 52L110 140M180 0L205 30L250 140"/></svg></div><div className="sites"><span>SITE HEALTH</span>{["Brīvības iela","Dzirnavu iela","Jūrmalas gatve"].map((x,i)=><div key={x}><i className={i===2?"amber":""}/><b>{x}</b><em>{i===2?"Check":"Online"}</em></div>)}</div></div>
          </div>
        </div>
      </div>
    </div></section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section"><div className="shell contact-inner">
      <div><Eyebrow light>Build with RIK</Eyebrow><h2>Infrastructure should be<br/>intelligent by default.</h2></div>
      <div className="contact-action"><p>Let’s explore where autonomous, connected infrastructure can make the greatest difference in your network.</p><a href="mailto:info@rikserviss.lv" className="contact-link">info@rikserviss.lv <ArrowRight/></a></div>
    </div></section>
  );
}

function Footer() {
  return <footer><div className="shell footer-inner"><a href="#top"><img src={logoAsset.url} alt="RIK Serviss"/></a><p>Autonomous intelligence for safer infrastructure.</p><div>{nav.slice(0,3).map(([label,id])=><a key={id} href={`#${id}`}>{label}</a>)}</div><span>© {new Date().getFullYear()} RIK Serviss</span></div></footer>;
}

function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".section-heading, .platform-card, .application-item, .solution-copy, .crossing-visual, .monitor-copy, .dashboard").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <main id="top">
      <Header/>
      <section className="hero">
        <div className="hero-grid-bg"/><div className="shell hero-inner">
          <div className="hero-copy"><Eyebrow>Autonomous · Connected · Built for the real world</Eyebrow><h1>Infrastructure that<br/><span>sees, thinks</span> and acts.</h1><p>RIK builds autonomous, solar-powered safety systems that connect the physical world to one intelligent platform.</p><div className="hero-actions"><AnchorButton href="#platform">Explore the platform <ArrowRight size={17}/></AnchorButton><AnchorButton href="#solution" secondary>See our first solution</AnchorButton></div><div className="hero-proof"><span>BUILT FOR</span><b>Cities</b><i/> <b>Road authorities</b><i/> <b>Infrastructure operators</b></div></div>
          <CityNetwork/>
        </div><a href="#platform" className="scroll-cue"><span/> Scroll to explore</a>
      </section>
      <PlatformSection/><SolutionSection/><ApplicationsSection/><MonitoringSection/><ContactSection/><Footer/>
    </main>
  );
}