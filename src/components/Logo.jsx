import { siteConfig } from '../config/siteConfig'

export default function Logo({ compact = false }) {
  return <div className="flex items-center gap-3">
    <img src={siteConfig.logoPath} alt="GANAS Nusa Putra" className="h-9 w-auto" />
    {!compact && <div className="hidden sm:flex flex-col leading-none">
      <span className="font-display font-extrabold tracking-tight text-white">GANAS</span>
      <span className="mt-1 text-[10px] font-bold tracking-[.22em] text-blue-300">NUSA PUTRA</span>
    </div>}
  </div>
}
