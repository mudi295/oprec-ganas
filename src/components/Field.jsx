export function Field({ label, error, icon: Icon, ...props }) {
  return <label className="block">
    <span className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-100"><span>{label}</span>{error && <span className="text-xs font-medium text-rose-300">{error}</span>}</span>
    <div className="relative">
      {Icon && <Icon className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18}/>} 
      <input {...props} className={`w-full rounded-xl border bg-[#00101b] px-4 py-3.5 text-[15px] text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 ${Icon ? 'pl-11' : ''} ${error ? 'border-rose-400/60' : 'border-[#164e86]'}`} />
    </div>
  </label>
}
export function Textarea({ label, error, ...props }) {
  return <label className="block">
    <span className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-100"><span>{label}</span>{error && <span className="text-xs font-medium text-rose-300">{error}</span>}</span>
    <textarea {...props} className={`min-h-[130px] w-full resize-y rounded-xl border bg-[#00101b] px-4 py-3.5 text-[15px] text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 ${error ? 'border-rose-400/60' : 'border-[#164e86]'}`} />
  </label>
}
