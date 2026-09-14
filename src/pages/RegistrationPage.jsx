import { useState } from 'react'
import { ArrowLeft, ArrowRight, AtSign, UserRound, Hash, School, BriefcaseBusiness, Check, ShieldCheck, ClipboardList } from 'lucide-react'
import { divisions } from '../data/divisions'
import { Field, Textarea } from '../components/Field'

const initial = { email:'', name:'', nim:'', className:'', major:'', divisionFirstChoice:'', divisionSecondChoice:'', motivation:'', organizationExperience:'', agreement:false }
export default function RegistrationPage({ onBack, onSubmit, submitError }) {
  const [form, setForm] = useState(initial); const [errors, setErrors] = useState({}); const [busy, setBusy] = useState(false)
  const update = (key, value) => setForm(f => ({...f, [key]:value}))
  const validate = () => {
    const e={};
    if(!/^\S+@\S+\.\S+$/.test(form.email)) e.email='Email tidak valid'
    ;[['name','Nama wajib diisi'],['nim','NIM wajib diisi'],['className','Kelas wajib diisi'],['major','Jurusan wajib diisi'],['divisionFirstChoice','Pilih divisi utama'],['divisionSecondChoice','Pilih divisi alternatif']].forEach(([k,m])=>{if(!form[k].trim())e[k]=m})
    if(form.divisionFirstChoice && form.divisionFirstChoice===form.divisionSecondChoice)e.divisionSecondChoice='Harus berbeda dari pilihan 1'
    if(form.motivation.trim().length<20)e.motivation='Minimal 20 karakter'
    if(!form.agreement)e.agreement='Centang pernyataan untuk melanjutkan'
    setErrors(e); return !Object.keys(e).length
  }
  const submit = async (ev) => { ev.preventDefault(); if(busy || !validate()) return; setBusy(true); try { const record=await onSubmit(form); onSubmit.setLast?.(record) } finally { setBusy(false) } }
  return <main className="min-h-screen bg-[#031521] px-5 pb-20 pt-[100px] lg:px-10"><div className="mx-auto max-w-4xl">
    <button onClick={onBack} className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"><ArrowLeft size={17}/> Kembali</button>
    <div className="mb-8"><span className="text-[10px] font-bold uppercase tracking-[.16em] text-blue-400">02 / FORMULIR PENDAFTARAN</span><h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">Buat langkah pertama kamu.</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">Isi data dengan benar. Pilihan divisi akan menjadi salah satu bahan pertimbangan dalam proses seleksi.</p></div>
    <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-[#0c1d29]/80 p-5 shadow-2xl backdrop-blur-xl md:p-8">
      <Section title="1. Identitas Mahasiswa" icon={UserRound}>
        <div className="grid gap-5 md:grid-cols-2"><Field label="Email" type="email" value={form.email} onChange={e=>update('email',e.target.value)} placeholder="nama@email.com" icon={AtSign} error={errors.email}/><Field label="Nama Lengkap" value={form.name} onChange={e=>update('name',e.target.value)} placeholder="Masukkan nama lengkap" icon={UserRound} error={errors.name}/><Field label="NIM" value={form.nim} onChange={e=>update('nim',e.target.value)} placeholder="Masukkan NIM" icon={Hash} error={errors.nim}/><Field label="Kelas" value={form.className} onChange={e=>update('className',e.target.value)} placeholder="Contoh: TI24G" icon={ClipboardList} error={errors.className}/><div className="md:col-span-2"><Field label="Jurusan" value={form.major} onChange={e=>update('major',e.target.value)} placeholder="Masukkan jurusan" icon={School} error={errors.major}/></div></div>
      </Section>
      <Section title="2. Preferensi Departemen & Divisi" icon={BriefcaseBusiness} subtitle="Pilihan 1 dan 2 harus berbeda.">
        <div className="grid gap-5 md:grid-cols-2">{[['divisionFirstChoice','Pilihan Divisi 1','Prioritas Utama'],['divisionSecondChoice','Pilihan Divisi 2','Alternatif']].map(([key,label,badge])=><div key={key} className="rounded-xl border border-white/5 bg-[#071a33]/70 p-5"><div className="mb-3 flex items-center justify-between"><span className="text-sm font-bold text-white">{label}</span><span className="text-[9px] font-bold uppercase tracking-[.14em] text-blue-300">{badge}</span></div><select value={form[key]} onChange={e=>update(key,e.target.value)} className={`w-full rounded-xl border bg-[#00101b] px-4 py-3.5 text-sm text-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 ${errors[key]?'border-rose-400/60':'border-[#164e86]'}`}><option value="">Pilih divisi...</option>{divisions.map(d=><option key={d.value} value={d.value} disabled={key==='divisionSecondChoice'&&d.value===form.divisionFirstChoice}>{d.label}</option>)}</select>{errors[key]&&<p className="mt-2 text-xs text-rose-300">{errors[key]}</p>}</div>)}</div>
      </Section>
      <Section title="3. Pernyataan & Rekam Jejak" icon={ClipboardList}>
        <div className="space-y-5"><div><Textarea label="Motivasi Masuk Kepengurusan" value={form.motivation} onChange={e=>update('motivation',e.target.value)} maxLength={500} placeholder="Ceritakan alasan kamu ingin bergabung dalam kepengurusan GANAS..." error={errors.motivation}/><div className="mt-1 text-right text-[10px] text-slate-500">{form.motivation.length} / 500</div></div><Textarea label="Pengalaman Organisasi" value={form.organizationExperience} onChange={e=>update('organizationExperience',e.target.value)} placeholder="Ceritakan pengalaman organisasi, kepanitiaan, komunitas, atau kegiatan lain yang pernah kamu ikuti..."/><p className="-mt-2 text-xs text-slate-500">Belum punya pengalaman organisasi? Tidak masalah. Ceritakan pengalaman kegiatan atau pengalaman lain yang relevan.</p></div>
      </Section>
      <label className="mt-2 flex cursor-pointer items-start gap-3 rounded-xl border border-white/5 bg-white/[.025] p-4"><input type="checkbox" checked={form.agreement} onChange={e=>update('agreement',e.target.checked)} className="mt-1 h-5 w-5 rounded border-[#164e86] bg-[#00101b] text-blue-600 focus:ring-blue-500/20"/><span className="text-sm leading-6 text-slate-300">Saya menyatakan bahwa data yang saya isi sudah benar.</span></label>{errors.agreement&&<p className="mt-2 text-xs text-rose-300">{errors.agreement}</p>}
      {submitError&&<div role="alert" className="mt-6 rounded-xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm leading-6 text-rose-200">{submitError}</div>}
      <button disabled={busy} className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-extrabold tracking-wide text-white shadow-[0_0_28px_rgba(59,130,246,.22)] transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60">{busy?<><span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"/> Sedang mengirim pendaftaran...</>:<>KIRIM PENDAFTARAN <ArrowRight size={18}/></>}</button>
      <div className="mt-5 flex items-center justify-center gap-2 text-center text-[10px] font-bold uppercase tracking-[.12em] text-slate-600"><ShieldCheck size={15}/> Data formulir diproses untuk kebutuhan Open Recruitment GANAS</div>
    </form>
  </div></main>
}
function Section({title,icon:Icon,subtitle,children}){return <section className="border-b border-white/10 py-7 first:pt-0 last:border-0"><div className="mb-5 flex items-start gap-3"><div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-300"><Icon size={17}/></div><div><h2 className="font-display text-base font-bold text-white">{title}</h2>{subtitle&&<p className="mt-1 text-xs text-slate-500">{subtitle}</p>}</div></div>{children}</section>}
