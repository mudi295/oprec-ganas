import { useState } from 'react'
import ProgressHeader from './components/ProgressHeader'
import LandingPage from './pages/LandingPage'
import RegistrationPage from './pages/RegistrationPage'
import SuccessPage from './pages/SuccessPage'
import DashboardPage from './pages/DashboardPage'
import { submitRegistration } from './services/registrationService'
import './index.css'

export default function App(){
 const initialPage = window.location.pathname === '/panitia' ? 'dashboard' : 'landing'
 const [page,setPage]=useState(initialPage); const [dashboardAuth,setDashboardAuth]=useState(false);
 const [record,setRecord]=useState(null); const [submitError,setSubmitError]=useState('')
 const step=page==='landing'?0:page==='registration'?1:page==='success'?2:1
 const handleSubmit=async(form)=>{setSubmitError(''); try { const r=await submitRegistration(form); setRecord(r); setPage('success'); window.scrollTo({top:0,behavior:'smooth'}); return r } catch (error) { setSubmitError(error?.message || 'Pendaftaran gagal dikirim. Silakan coba lagi.'); throw error }}
 if(page==='dashboard') return <DashboardGate onBack={()=>{setPage('landing');window.history.pushState({},'', '/')}}/>
 return <><ProgressHeader step={step}/>{page==='landing'&&<LandingPage onStart={()=>{setPage('registration');window.scrollTo(0,0)}}/>}{page==='registration'&&<RegistrationPage onBack={()=>{setSubmitError('');setPage('landing')}} onSubmit={handleSubmit} submitError={submitError}/>} {page==='success'&&record&&<SuccessPage record={record} onHome={()=>{setPage('landing');setRecord(null);window.scrollTo(0,0)}}/>}</>
}

function DashboardGate({onBack}){ const [authed,setAuthed]=useState(sessionStorage.getItem('ganas-panitia-auth')==='1'); const [password,setPassword]=useState(''); const expected=(import.meta.env.VITE_PANITIA_PASSWORD||'panitia2026').trim(); if(authed)return <DashboardPage onLogout={()=>{sessionStorage.removeItem('ganas-panitia-auth');setAuthed(false)}}/>; return <main className='grid min-h-screen place-items-center bg-[#031521] px-5'><div className='w-full max-w-md rounded-3xl border border-white/10 bg-[#0c1d29]/90 p-8 text-white shadow-2xl'><div className='mb-6 text-center'><h1 className='font-display text-2xl font-extrabold'>Akses Panitia</h1><p className='mt-2 text-sm text-slate-500'>Dashboard OPREC GANAS Nusa Putra 2026/2027</p></div><input type='password' value={password} onChange={e=>setPassword(e.target.value)} onKeyDown={e=>e.key==='Enter'&&password===expected&&(sessionStorage.setItem('ganas-panitia-auth','1'),setAuthed(true))} placeholder='Password panitia' className='w-full rounded-xl border border-white/10 bg-[#061725] px-4 py-3 text-sm outline-none focus:border-blue-500'/><button onClick={()=>password===expected?(sessionStorage.setItem('ganas-panitia-auth','1'),setAuthed(true)):alert('Password panitia salah.')} className='mt-4 w-full rounded-xl bg-blue-600 py-3.5 text-sm font-extrabold hover:bg-blue-500'>MASUK DASHBOARD</button><button onClick={onBack} className='mt-3 w-full py-2 text-sm text-slate-500 hover:text-white'>Kembali ke website</button></div></main> }
