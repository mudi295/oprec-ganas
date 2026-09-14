import { Check, CircleUserRound } from 'lucide-react'
import Logo from './Logo'

const steps = ['Cinematic Landing', 'Formulir Pendaftaran', 'Registrasi Berhasil']
export default function ProgressHeader({ step }) {
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#031521]/80 backdrop-blur-2xl">
    <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
      <Logo />
      <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[.035] p-1">
        {steps.map((label, i) => <div key={label} className={`flex items-center gap-2 rounded-full px-3 py-2 text-[11px] font-bold tracking-wide transition ${step === i ? 'bg-blue-600 text-white shadow-[0_0_22px_rgba(59,130,246,.28)]' : 'text-slate-400'}`}>
          <span className="grid h-5 w-5 place-items-center rounded-full border border-current text-[10px]">{i < step ? <Check size={12}/> : i + 1}</span>
          <span>{i + 1}. {label}</span>
        </div>)}
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-2 text-[10px] font-bold uppercase tracking-[.12em] text-emerald-300"><i className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"/> Oprec Active</span>
        <div className="grid h-9 w-9 place-items-center rounded-full bg-blue-100 text-[#20314b]"><CircleUserRound size={17}/></div>
      </div>
    </div>
  </header>
}
