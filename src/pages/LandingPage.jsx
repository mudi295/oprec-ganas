import { ArrowRight, Volume2, VolumeX, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { siteConfig } from '../config/siteConfig'

export default function LandingPage({ onStart }) {
  const [muted, setMuted] = useState(true)
  return <main className="relative min-h-screen overflow-hidden bg-[#031521] pt-[76px]">
    <section className="relative flex min-h-[calc(100vh-76px)] items-center justify-center overflow-hidden">
      <video autoPlay muted={muted} loop playsInline poster={siteConfig.posterPath} className="absolute inset-0 h-full w-full object-cover brightness-[.72] contrast-105">
        <source src={siteConfig.videoPath} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,51,.93)_0%,rgba(3,21,33,.48)_45%,rgba(0,16,27,.97)_100%)]"/>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,102,217,.25),transparent_68%)]"/>
      <div className="grid-overlay absolute inset-0 opacity-[.045]"/>
      
      
      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center lg:px-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-[#071a33]/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-blue-200 shadow-[0_0_30px_rgba(59,130,246,.12)] backdrop-blur-xl"><i className="relative h-2 w-2 rounded-full bg-blue-400"><i className="absolute inset-0 animate-ping rounded-full bg-blue-400"/></i> Open Recruitment 2026–2027</div>
        <h1 className="font-display text-[clamp(2.4rem,6vw,5.5rem)] font-extrabold leading-[.98] tracking-[-.045em] text-white">Siap menjadi pengurus<br/><span className="text-gradient">GANAS Nusa Putra</span><br/>Periode 2026–2027?</h1>
        <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">Satu langkah untuk bertumbuh, berkontribusi, dan menjadi bagian dari gerakan mahasiswa yang berdampak.</p>
        <button onClick={onStart} className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-sm font-extrabold tracking-[.12em] text-white shadow-[0_0_35px_rgba(59,130,246,.3)] transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_42px_rgba(59,130,246,.45)]">DAFTAR <ArrowRight size={18} className="transition group-hover:translate-x-1"/></button>
        <div className="mt-12 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[.16em] text-slate-500"><span className="h-px w-10 bg-white/10"/> Open Recruitment resmi GANAS <span className="h-px w-10 bg-white/10"/></div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 animate-bounce text-slate-500"><ChevronDown size={18}/></div>
    </section>
  </main>
}
