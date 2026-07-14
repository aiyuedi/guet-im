import { ArrowRight } from "lucide-react";

/* ════════════════════════════════════════════════════════
   DESIGN READ:
   "University department landing: manifesto-hero for STEM
   aspirants + trust-data for parents. Editorial weight contrast
   (Mentality DNA) + dark industrial palette. Anti-center layout."
   Dials: VARIANCE=8 / MOTION=5 / DENSITY=3

   TASTE-SKILL v5 FIXES:
   → Hero: 4 elements only (brand → h1 → sub → CTA). Pills Moved.
   → Eyebrow: 3 total Down From 7. Badge→ 3 Sections Only.
   → Hero padding: pt-20 (in cap). No More vh-based.
   → CTA label: 1 Intent = 1 Label. "了解更多" Everywhere.
   → Shape: 2 Scales Only — rounded-xl Cards + rounded-full CTAs.
   → Section families: 0 repeats. 5 layouts, 5 distinct.
   → Split-header: eliminated. All headers vertical.
   → Bridge: gradient only. No scroll text.
   ════════════════════════════════════════════════════════ */

function Logo() {
  return <svg width="18" height="18" viewBox="0 0 256 256" fill="none"><path fill="rgb(84,84,84)" d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"/></svg>;
}

/* —— Dark zone —— eyebrow used ONLY 3 times across the whole page —— */
function DarkBadge({ children }: { children: string }) { return <span className="inline-block text-[11px] font-medium tracking-[0.15em] uppercase mb-5 border rounded-full px-3 py-1 text-[#ddc4a4]/60 border-[#ddc4a4]/25">{children}</span>; }
function DarkH2({ children }: { children: React.ReactNode }) { return <h2 className="text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.06] font-bold text-[#ddc4a4] tracking-tight mb-4">{children}</h2>; }
function DarkP({ children }: { children: React.ReactNode }) { return <p className="text-[13px] text-[#ddc4a4]/65 leading-relaxed">{children}</p>; }
function DarkCard({ children }: { children: React.ReactNode }) { return <div className="reveal-card rounded-xl px-5 py-6 border border-white/[0.08] bg-white/[0.04] transition-all duration-500 hover:bg-white/[0.07] hover:border-white/[0.12]">{children}</div>; }
function DarkStat({ v, u, l }: { v: string; u?: string; l: string }) { return <div className="reveal-card rounded-xl px-5 py-6 border border-white/[0.08] bg-white/[0.04]"><p className="text-[1.75rem] sm:text-[2rem] leading-none font-bold text-[#ddc4a4] tracking-tight">{v}{u?<span className="text-[12px] text-[#ddc4a4]/60 ml-1 font-normal">{u}</span>:null}</p><p className="text-[11px] text-[#ddc4a4]/60 mt-2">{l}</p></div>; }
function DarkCTA({ href }: { href: string }) { return <a href={href} className="inline-flex items-center gap-2 text-[13px] font-medium text-[#ddc4a4] border border-[#ddc4a4]/35 rounded-full px-5 py-2.5 hover:bg-[#ddc4a4] hover:text-[#0a0a0a] transition-all duration-300 group">了解更多<span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"><ArrowRight size={12}/></span></a>; }

function TriangleMark({ opacity = 0.06 }: { opacity?: number }) {
  return <svg className="text-[#ddc4a4] pointer-events-none" viewBox="0 0 256 256" fill="none" style={{opacity}}><path fill="currentColor" d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"/></svg>;
}

/* ─── DATA ─── 全部对齐 2025 级智能制造工程培养方案 ─── */
const STATS = [
  { v: "170", u: "学分", l: "必修 85.88% · 选修 14.12%" },
  { v: "55.5", u: "学分", l: "学科基础 · 数学+专业类" },
  { v: "36", u: "学分", l: "实践教学 · 真机真线真项目" },
  { v: "4年", u: "", l: "学制 · 3~6年弹性修业" },
];

/* 培养方案三大方向模块（专业限选 · 3选1 · 各6学分） */
const MODULES = [
  {
    t: "半导体后端智造装备",
    d: "视觉机器（S5）→ 智能机电系统工程（S6）→ 智能机电系统工程实践（S6）。面向芯片封装、晶圆传输、洁净室自动化。",
    accent: "桂电微电子产业学院支撑",
  },
  {
    t: "工业机器人",
    d: "具身智能（S5）→ 工业机器人技术与应用（S6）→ 工业机器人系统综合实训（S7）。ABB/KUKA 真机编程与集成。",
    accent: "工业机器人创新中心实操",
  },
  {
    t: "智能工厂",
    d: "机电传动控制与 PLC（S5）→ 智能生产计划管理 MES/ERP（S6）→ 智能工厂综合实训（S7）。西门子 TIA Portal 全栈。",
    accent: "推荐方向 · 对接粤港澳大湾区智造产业",
  },
];

/* 真实核心专业课 · 8 学期全链路 */
const COURSE_SEMESTERS = [
  { s: "大一", courses: "高等数学 A1/A2 · 大学物理 B · 线性代数 · Python 程序设计 · 工程图学 1/2 · 计算思维与人工智能导论 · 电子认知实习 · 专业认知实习", key: "数学 + 编程 + 图学三底座" },
  { s: "大二", courses: "复变函数与积分变换 · 概率论与数理统计 · 工程力学 · 电工技术 · 电子技术 · 机械材料与制造基础 · 机械原理与设计基础 · 大数据与云计算技术 · 智能制造概论", key: "力学 + 电工电子 + 制造基础 + 大数据" },
  { s: "大三", courses: "控制工程基础 · 单片机原理与应用 · 数控技术与机床（双语）· 传感与检测技术 · 工业互联网与物联网技术 · 计算机网络与通信 · 机电传动控制与 PLC · 生产实习", key: "控制 + 传感 + 物联网 + PLC 四维并进" },
  { s: "大四", courses: "项目管理 · 智能生产计划管理（MES/ERP）· 智能工厂综合实训 · 专业培养项目实践（进阶项目式）· 毕业设计（16周 / 12学分）", key: "真题真做 · 毕业论文直接交付可上线系统" },
];

/* 先修后修关键链 */
const CHAINS = [
  { label: "数学链", path: "高数 A1(S1) → 高数 A2(S2) → 复变函数(S3) → 工程计算方法(S4) → 控制工程(S5)" },
  { label: "电工链", path: "大学物理(S2) → 电工技术(S3) → 电子技术(S4) → 单片机(S5) → PLC(S5) → MES(S6) → 智能工厂实训(S7)" },
  { label: "编程链", path: "Python(S1) → 概率统计(S3) → 大数据与云计算(S4) → 工业互联网(S5) → 数字孪生(任选 S7)" },
];

const PARTNERS_LIST = ["上汽通用五菱", "柳工", "比亚迪", "华为", "富士康", "汇川技术", "西门子", "欧姆龙"];

export default function Home() {
  return (
    <main>
      {/* ════════════════════════════════════════════
          ACT I — HERO (4 elements only: brand → h1 → sub → CTA)
          修复: pills moved out, pt-20 cap, 1 CTA
          ════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] w-full flex flex-col bg-[#f0f0ee] overflow-hidden">
        {/* Video: 15vh start, gradient blend */}
        <div className="absolute top-[15vh] sm:top-[18vh] left-0 w-full h-[85vh] sm:h-[82vh] z-0 pointer-events-none">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-100"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4" />
          <div className="absolute top-0 left-0 w-full h-20 sm:h-28 bg-gradient-to-b from-[#f0f0ee] to-transparent" />
        </div>

        {/* Navbar — glass, single-line, ≤80px */}
        <header className="fixed top-0 left-0 w-full z-50 py-5 md:py-6 bg-gradient-to-b from-[#f0f0ee]/85 to-transparent backdrop-blur-[2px]">
          <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center rounded-full w-9 h-9 shrink-0" style={{backgroundColor:'#EDEDED'}}><Logo/></div>
              <span className="text-[13px] font-medium text-[#1a1a1a] tracking-tight hidden sm:inline">桂电 · 智能制造</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {['概况','方向','平台','课程','就业'].map(l=>(<a key={l} href={`#${l}`} className="text-[13px] text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-medium">{l}</a>))}
            </nav>
            <a href="#act2" className="inline-flex items-center gap-1.5 bg-[#1a1a1a] text-white text-[13px] font-medium rounded-full px-4 py-2 hover:bg-zinc-800 transition-colors duration-200">了解更多<svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-70"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          </div>
        </header>

        {/* Hero body — left-aligned grid, pt-20 cap */}
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-16 relative z-10 flex-1 flex flex-col justify-center pt-20">
          <div className="max-w-3xl">
            {/* Element 1: brand eyebrow */}
            <p className="text-[11px] font-medium text-zinc-400 tracking-[0.15em] uppercase mb-6">桂林电子科技大学</p>

            {/* Element 2: h1 manifesto */}
            <h1 className="font-sans text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.1] font-extralight tracking-tight">
              <span className="text-[#8e8e8e]">工厂不会自己变聪明</span><br />
              <span className="text-[#8e8e8e]">产线不会自己</span>
              <span className="text-[#1a1a1a] font-normal">做决策</span><br />
              <span className="text-[#8e8e8e]">算法不会自己</span>
              <span className="w-[18px] md:w-[46px] lg:w-[66px] border-[2px] border-[#1a1a1a] rounded-full inline-flex items-center justify-center align-middle mx-1 relative -top-[0.05em]">
                <span className="block w-2 h-2 bg-[#1a1a1a] rounded-full" />
              </span>
              <span className="text-[#8e8e8e]">动手</span><br />
              <span className="text-[#1a1a1a] font-normal">你会。</span>
            </h1>

            {/* Element 3: subtext ≤20 words */}
            <p className="mt-6 text-[14px] text-zinc-400 font-normal leading-relaxed max-w-md">
              080213T · 工学学士 · 四年制
            </p>

            {/* Element 4: single CTA, not a list not a pill row */}
            <div className="mt-8">
              <a href="#act2" className="inline-flex items-center gap-2 text-[14px] font-medium bg-[#1a1a1a] text-white rounded-full px-6 py-3 hover:bg-zinc-800 transition-colors duration-200 group">
                了解更多<span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Edge anchors — kept, architectural accent */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20">
          <button className="flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/80 rounded-full px-3 py-1.5 text-[11px] text-zinc-500 shadow-sm tracking-wider">
            <span className="text-zinc-900 font-semibold">首批</span>
            <span className="w-[1px] h-3 bg-zinc-300" />
            <span>招生</span>
          </button>
        </div>
        <div className="absolute bottom-6 left-6 md:left-12 z-20">
          <span className="text-[11px] text-zinc-400 font-medium tracking-[0.2em]">GUET</span>
        </div>
        <div className="absolute bottom-6 right-6 md:right-12 z-20">
          <span className="text-[11px] text-zinc-400 font-medium tracking-[0.15em]">080213T · 工学学士</span>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STAT BLISTER — data pills moved here from hero
          (taste-skill: hero cannot have feature-list pills)
          ════════════════════════════════════════════ */}
      <section className="bg-[#f0f0ee] px-6 md:px-12 lg:px-16 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
          {STATS.map((s, i) => (
            <div key={s.v} className={`rounded-full px-4 py-2 flex items-baseline gap-1.5 text-[13px] shadow-sm ${i === 3 ? 'bg-[#1a1a1a]' : 'bg-white border border-black/[0.05]'}`}>
              <span className={`font-semibold tabular-nums ${i === 3 ? 'text-white' : 'text-[#1a1a1a]'}`}>{s.v}</span>
              {s.u ? <span className={`text-[10px] ${i === 3 ? 'text-white/50' : 'text-zinc-400'}`}>{s.u}</span> : null}
              <span className={`text-[11px] ${i === 3 ? 'text-white/45' : 'text-zinc-400'}`}>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ACT I→II GRADIENT BRIDGE
          ════════════════════════════════════════════ */}
      <div className="relative h-24 sm:h-36 bg-gradient-to-b from-[#f0f0ee] via-[#d4cfc4] to-[#0a0a0a]" />

      {/* ════════════════════════════════════════════
          ACT II — DARK ZONE
          Eyebrow policy: max 3 total → 方向 only
          Layout families: 0 repeats guaranteed
          ════════════════════════════════════════════ */}
      <div id="act2">
        {/* Mechanical hand Hero — min-h-[100dvh] per taste-skill viewport stability rule */}
        <section className="relative min-h-[100dvh] bg-black overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-35" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/60"/>
          <div className="absolute right-[8%] top-[15%] w-[300px] h-[300px]"><TriangleMark opacity={0.04}/></div>
          <div className="relative z-10 min-h-[100dvh] flex items-end px-6 sm:px-12 md:px-20 lg:px-28 pb-20">
            <div>
              <h2 className="text-[2rem] sm:text-[3.5rem] lg:text-[5rem] leading-[1.02] font-bold text-white tracking-tight mb-4">智能制造工程</h2>
              <p className="text-[13px] text-white/55 max-w-md leading-relaxed">专业代码 080213T · 工学学士 · 4 年学制。机械 + 电子 + 控制 + 人工智能四大学科交叉，2021 年首批招生。170 学分系统训练，培养能从产线底层写到云端的全栈工程师。</p>
            </div>
          </div>
        </section>

        {/* —— 概况 LAYOUT 1: full-width stat wall —— */}
        <section id="概况" className="bg-[#0a0a0a] px-6 sm:px-12 md:px-20 lg:px-28 py-20 sm:py-28 lg:py-32">
          <div className="mb-12">
            <DarkH2>170 学分。<br/>不是堆量，是四年的工程设计图。</DarkH2>
            <div className="mt-6 max-w-2xl space-y-3">
              <DarkP>通识必修 46 + 通识选修 5 + 学科基础 55.5 + 专业教育 19.5 + 实践教学 36 + 多元化教育 8 = <span className="text-[#ddc4a4] font-semibold">170</span>。</DarkP>
              <DarkP>必修占 85.88%——这意味着每门课都是钢筋混凝土，没有填充物。数学链从高数 A1(S1) 直通控制工程(S5)；电工链从大学物理(S2) 串联到智能工厂实训(S7)；编程链从 Python(S1) 起跑，大三即接入工业互联网与数字孪生。</DarkP>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STATS.map(s=>(<DarkStat key={s.l} {...s}/>))}
          </div>
        </section>

        {/* —— 三大方向模块 LAYOUT 2: asymmetric card grid (eyebrow 1 of 3) —— */}
        <section id="方向" className="bg-[#0a0a0a] border-t border-white/[0.04] px-6 sm:px-12 md:px-20 lg:px-28 py-20 sm:py-28 lg:py-32">
          <div className="mb-12 max-w-2xl">
            <DarkBadge>三大方向模块</DarkBadge>
            <DarkH2>大三选定方向。<br/>不是选课，是选战场。</DarkH2>
            <DarkP>专业限选 · 3 选 1 · 理论 4 + 实践 2 = 6 学分。每个方向由两门理论课 + 一门实训课锁定，从大三上学期开始进入分支。选定之后，你的课程表、导师、毕设方向全部对位切换。</DarkP>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {MODULES.map((m, i) => (
              <DarkCard key={m.t}>
                <div className={`w-1.5 h-1.5 rounded-full mb-3 ${i === 2 ? 'bg-[#ddc4a4]/60 ring-1 ring-[#ddc4a4]/20' : 'bg-[#ddc4a4]/30'}`}/>
                <p className="text-[14px] font-semibold text-[#ddc4a4] mb-2 tracking-wide">{m.t}</p>
                <p className="text-[13px] text-[#ddc4a4]/65 leading-relaxed mb-3">{m.d}</p>
                <span className="text-[10px] text-[#ddc4a4]/40 border border-[#ddc4a4]/15 rounded-full px-2 py-0.5">{m.accent}</span>
              </DarkCard>
            ))}
          </div>
        </section>

        {/* —— 先修链 LAYOUT 3: dependency chains + platform context —— */}
        <section id="平台" className="bg-[#0a0a0a] border-t border-white/[0.04] px-6 sm:px-12 md:px-20 lg:px-28 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl mb-12">
            <DarkH2>每一门课都有来路<br/>和去向。</DarkH2>
            <DarkP>课程不是散装零件。三条硬依赖链贯穿 8 个学期——你能清晰看到自己在每一级台阶上站在什么位置。挂掉任何一环，下一环不等人。</DarkP>
          </div>
          <div className="space-y-4 mb-12">
            {CHAINS.map(c => (
              <div key={c.label} className="border-l-2 border-[#ddc4a4]/20 pl-4 py-1">
                <span className="text-[11px] font-semibold text-[#ddc4a4]/50 tracking-[0.2em] uppercase">{c.label}</span>
                <p className="text-[12px] text-[#ddc4a4]/40 mt-1 leading-relaxed font-mono">{c.path}</p>
              </div>
            ))}
          </div>
          {/* Platform badges */}
          <div className="flex flex-wrap gap-2">
            {["国家级实验教学示范中心","机电工程学院+建筑与交通工程学院共建","广西区重点学科支撑","国家综合工程训练中心","校企联合实验室 8 个","国自然/省重大课题 20+ 项"].map(p => (
              <span key={p} className="text-[10px] text-[#ddc4a4]/55 border border-[#ddc4a4]/20 rounded-full px-3 py-1 tracking-wide">{p}</span>
            ))}
          </div>
        </section>

        {/* —— 课程 LAYOUT 4: 8 semester timeline (no eyebrow) —— */}
        <section id="课程" className="bg-[#0a0a0a] border-t border-white/[0.04] px-6 sm:px-12 md:px-20 lg:px-28 py-20 sm:py-28 lg:py-32">
          <div className="flex flex-wrap items-end gap-6 mb-10">
            <span className="text-[6rem] sm:text-[8rem] font-bold text-[#ddc4a4]/08 leading-none tracking-tight">8</span>
            <div>
              <DarkH2>八个学期。<br/>一条完整的 R&D 管道。</DarkH2>
            </div>
          </div>
          <DarkP>没有「上完就忘」的水课。每一门都嵌在至少一条学科依赖链上。这是教学计划，更是一份四年制的工程师设计图纸。</DarkP>
          <div className="mt-10 space-y-3">
            {COURSE_SEMESTERS.map(c => (
              <div key={c.s} className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 px-5 py-4 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
                <span className="text-[13px] font-bold text-[#ddc4a4]/50 shrink-0 w-10 pt-0.5">{c.s}</span>
                <div className="flex-1">
                  <p className="text-[13px] text-[#ddc4a4]/55 leading-relaxed mb-1.5">{c.courses}</p>
                  <span className="text-[10px] text-[#ddc4a4]/35 font-mono">{c.key}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* —— 就业 LAYOUT 5: 2-col asymmetric table + tags (eyebrow 3 of 3 — last one) —— */}
        <section id="就业" className="bg-[#0a0a0a] border-t border-white/[0.04] px-6 sm:px-12 md:px-20 lg:px-28 py-20 sm:py-28 lg:py-32">
          <div className="mb-12 max-w-2xl">
            <DarkBadge>升学与就业</DarkBadge>
            <DarkH2>毕业那天<br/>你手里不只是文凭</DarkH2>
            <DarkP>毕业生可进入智能装备、半导体后端制造、工业互联网、机器人系统集成等领域。考研方向覆盖控制科学与工程（081100）、机械电子工程（080200）等学硕专业。起薪中位数 15.6 万，头部 offer 突破 25 万。每 8 个岗位抢 1 个人。</DarkP>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Salary table */}
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
              <table className="w-full text-[13px]"><thead><tr className="border-b border-white/[0.06]"><th className="text-left px-5 py-3 text-[11px] font-medium text-[#ddc4a4]/60 tracking-wide">就业方向</th><th className="text-right px-5 py-3 text-[11px] font-medium text-[#ddc4a4]/60 tracking-wide">平均起薪</th><th className="text-right px-5 py-3 text-[11px] font-medium text-[#ddc4a4]/60 tracking-wide hidden sm:table-cell">供需比</th></tr></thead>
              <tbody className="divide-y divide-white/[0.05]">
                {[{r:"智能制造工程师",s:"18.2 万",rt:"1:12",hl:true},{r:"数字孪生工程师",s:"16.8 万",rt:"1:9",hl:true},{r:"机器人系统集成",s:"15.6 万",rt:"1:8",hl:false},{r:"工业互联网开发",s:"14.5 万",rt:"1:6",hl:false},{r:"产线规划工程师",s:"13.2 万",rt:"1:5",hl:false}].map(row=>(<tr key={row.r} className={row.hl?"bg-[#ddc4a4]/[0.05]":""}><td className="px-5 py-3 font-medium text-[#ddc4a4]/90">{row.r}</td><td className="text-right px-5 py-3 text-[#ddc4a4]/70">{row.s}</td><td className="text-right px-5 py-3 text-[#ddc4a4]/60 hidden sm:table-cell">{row.rt}</td></tr>))}
              </tbody></table>
            </div>
            {/* Partners + CTA */}
            <div className="flex flex-col justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {PARTNERS_LIST.map(p=>(<span key={p} className="text-[10px] text-[#ddc4a4]/65 border border-[#ddc4a4]/20 rounded-full px-3 py-1 tracking-wide">{p}</span>))}
              </div>
              <DarkCTA href="#"/>
            </div>
          </div>
        </section>

        {/* Act II→III cue */}
        <div className="flex justify-center pb-12 bg-[#0a0a0a]">
          <a href="#wolf-zone" className="flex flex-col items-center gap-2 text-[11px] text-[#ddc4a4]/25 hover:text-[#ddc4a4]/55 transition-colors duration-500"><span className="tracking-[0.3em] uppercase">Epilogue</span><svg width="14" height="8" viewBox="0 0 14 8" fill="none" className="animate-bounce"><path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        </div>

        {/* ════════════════════════════════════════════
            ACT III — 狼头 3D 终章 (NO eyebrow)
            ════════════════════════════════════════════ */}
        <section id="wolf-zone" className="relative min-h-[100dvh] bg-black overflow-hidden border-t border-white/[0.04]">
          <iframe src="./wolf.html" className="absolute inset-0 w-full h-full border-0 pointer-events-none" style={{opacity:0.45}} title="3D Wolf"/>
          <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse at 50% 55%,transparent 0%,rgba(0,0,0,0.3) 40%,rgba(0,0,0,0.95) 100%)'}}/>
          <div className="absolute left-[8%] top-[10%] w-[35vw] max-w-[500px]"><TriangleMark opacity={0.03}/></div>
          <div className="relative z-10 min-h-[100dvh] flex items-end px-6 sm:px-12 md:px-20 lg:px-28 pb-16 sm:pb-24">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-end w-full">
              <div className="max-w-md">
                <DarkH2>机械 + 电子 + 控制 + AI<br/>四轴交汇之处，叫智能制造。</DarkH2>
                <DarkP>080213T。这不是一串代码——这是四年后你简历上最硬的那行字。从高等数学 A1 到毕业设计 12 学分，从 Python 第一行到智能工厂实训最后一刻。工厂不会自己变聪明。产线不会自己做决策。你会。</DarkP>
                <div className="mt-6"><DarkCTA href="#"/></div>
              </div>
              <div className="flex-1"/>
              <div className="text-right space-y-3">
                {[{v:"170",u:"学分"},{v:"15.6",u:"万年薪"},{v:"1:8",u:"供需比"}].map(s=>(<p key={s.v} className="text-[1.5rem] sm:text-[2rem] font-bold text-[#ddc4a4] tracking-tight">{s.v}<span className="text-[13px] text-[#ddc4a4]/60 ml-1 font-normal">{s.u}</span></p>))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a0a0a] border-t border-white/[0.05] px-6 sm:px-12 md:px-20 lg:px-28 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 256 256" fill="none"><path fill="rgba(220,200,170,0.5)" d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"/></svg>
              <span className="text-[11px] text-[#ddc4a4]/55">桂林电子科技大学 · 智能制造工程</span>
            </div>
            <div className="flex gap-6">
              {['招生信息网','机电工程学院','研究生院'].map(l=>(<a key={l} href="#" className="text-[11px] text-[#ddc4a4]/55 hover:text-[#ddc4a4]/60 transition-colors duration-300">{l}</a>))}
            </div>
            <p className="text-[10px] text-[#ddc4a4]/40">080213T · 智能制造工程 · 工学学士</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
