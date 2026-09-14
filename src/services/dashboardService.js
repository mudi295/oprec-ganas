const ENDPOINT = (import.meta.env.VITE_REGISTRATION_ENDPOINT || '').trim()
const ADMIN_KEY = (import.meta.env.VITE_PANITIA_ADMIN_KEY || '').trim()

export async function getApplicants() {
  if (!ENDPOINT || !ADMIN_KEY) throw new Error('Konfigurasi dashboard belum lengkap. Isi VITE_REGISTRATION_ENDPOINT dan VITE_PANITIA_ADMIN_KEY.')
  const response = await fetch(`${ENDPOINT}?action=list&key=${encodeURIComponent(ADMIN_KEY)}`)
  const result = await response.json()
  if (!result.ok) throw new Error(result.message || 'Data pendaftar gagal diambil.')
  return result
}

export async function updateApplicantStatus(registrationNumber, status, note='') {
  if (!ENDPOINT || !ADMIN_KEY) throw new Error('Konfigurasi dashboard belum lengkap.')
  const response = await fetch(ENDPOINT, { method:'POST', headers:{'Content-Type':'text/plain;charset=utf-8'}, body:JSON.stringify({ action:'updateStatus', key:ADMIN_KEY, registrationNumber, status, note }) })
  const result = await response.json()
  if (!result.ok) throw new Error(result.message || 'Status gagal diperbarui.')
  return result.record
}
