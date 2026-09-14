const SHEET_NAME = 'Pendaftaran';
const ADMIN_KEY = 'GANTI_DENGAN_ADMIN_KEY_RAHASIA';
const HEADERS = ['Timestamp','Nomor Pendaftaran','Email','Nama Lengkap','NIM','Kelas','Jurusan','Pilihan Divisi 1','Pilihan Divisi 2','Motivasi Masuk Kepengurusan','Pengalaman Organisasi','Status Seleksi','Catatan Panitia'];
const STATUSES = ['Baru','Seleksi Administrasi','Lolos','Tidak Lolos','Wawancara','Diterima'];

function json_(obj){ return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }
function sheet_(){ const ss=SpreadsheetApp.getActiveSpreadsheet(); let sh=ss.getSheetByName(SHEET_NAME); if(!sh) sh=ss.insertSheet(SHEET_NAME); if(sh.getLastRow()===0){sh.getRange(1,1,1,HEADERS.length).setValues([HEADERS]);sh.setFrozenRows(1);sh.getRange(1,1,1,HEADERS.length).setFontWeight('bold');} return sh; }
function doGet(e){ const p=e.parameter||{}; if(p.action==='list') return list_(p.key); return json_({ok:true,service:'GANAS OPREC 2026/2027'}); }
function doPost(e){ try{ const body=JSON.parse(e.postData?.contents||'{}'); if(body.action==='register') return register_(body); if(body.action==='updateStatus') return updateStatus_(body); return json_({ok:false,message:'Action tidak dikenal.'}); }catch(err){return json_({ok:false,message:err.message});} }
function register_(d){
 const required=['email','name','nim','className','major','divisionFirstChoice','divisionSecondChoice','motivation']; for(const k of required) if(!String(d[k]||'').trim()) throw new Error('Field '+k+' wajib diisi.');
 if(d.divisionFirstChoice===d.divisionSecondChoice) throw new Error('Pilihan divisi harus berbeda.');
 if(!/^\S+@\S+\.\S+$/.test(d.email)) throw new Error('Email tidak valid.');
 const lock=LockService.getScriptLock(); lock.waitLock(15000);
 try{ const sh=sheet_(); const rowCount=Math.max(0,sh.getLastRow()-1); const reg='GANAS-2026-'+String(rowCount+1).padStart(4,'0'); const now=new Date(); const values=[now,reg,safe_(d.email),safe_(d.name),safe_(d.nim),safe_(d.className),safe_(d.major),safe_(d.divisionFirstChoice),safe_(d.divisionSecondChoice),safe_(d.motivation),safe_(d.organizationExperience||''),'Baru','']; sh.appendRow(values); return json_({ok:true,record:recordFromRow_(values)}); } finally{lock.releaseLock();}
}
function list_(key){ if(key!==ADMIN_KEY) return json_({ok:false,message:'Akses dashboard ditolak.'}); const sh=sheet_(); const last=sh.getLastRow(); if(last<2)return json_({ok:true,records:[]}); const values=sh.getRange(2,1,last-1,HEADERS.length).getDisplayValues(); return json_({ok:true,records:values.map(recordFromRow_).reverse()}); }
function updateStatus_(d){ if(d.key!==ADMIN_KEY)return json_({ok:false,message:'Akses dashboard ditolak.'}); if(!STATUSES.includes(d.status))return json_({ok:false,message:'Status tidak valid.'}); const sh=sheet_(); const vals=sh.getRange(2,2,Math.max(0,sh.getLastRow()-1),1).getDisplayValues(); const idx=vals.findIndex(r=>r[0]===d.registrationNumber); if(idx<0)return json_({ok:false,message:'Pendaftar tidak ditemukan.'}); const row=idx+2; sh.getRange(row,12,1,2).setValues([[d.status,safe_(d.note||'')]]); const values=sh.getRange(row,1,HEADERS.length).getDisplayValues()[0]; return json_({ok:true,record:recordFromRow_(values)}); }
function recordFromRow_(r){ return {timestamp:r[0],registrationNumber:r[1],email:r[2],name:r[3],nim:r[4],className:r[5],major:r[6],divisionFirstChoice:r[7],divisionSecondChoice:r[8],motivation:r[9],organizationExperience:r[10],status:r[11]||'Baru',note:r[12]||''}; }
function safe_(v){ const s=String(v??'').trim(); return /^[=+\-@]/.test(s)?"'"+s:s; }
