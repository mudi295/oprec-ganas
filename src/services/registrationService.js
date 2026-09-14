const STORAGE_KEY = 'ganas-oprec-last-registration'
const ENDPOINT = (import.meta.env.VITE_REGISTRATION_ENDPOINT || '').trim()

export async function submitRegistration(data) {
  if (!ENDPOINT) throw new Error('Endpoint Google Sheets belum dikonfigurasi. Isi VITE_REGISTRATION_ENDPOINT di file .env.')
  const payload = {
    action: 'register',
    email: data.email.trim(), name: data.name.trim(), nim: data.nim.trim(), className: data.className.trim(), major: data.major.trim(),
    divisionFirstChoice: data.divisionFirstChoice, divisionSecondChoice: data.divisionSecondChoice,
    motivation: data.motivation.trim(), organizationExperience: data.organizationExperience.trim(),
  }
  const controller = new AbortController(); const timeout = window.setTimeout(() => controller.abort(), 15000)
  try {
    const response = await fetch(ENDPOINT, { method:'POST', mode:'cors', headers:{'Content-Type':'text/plain;charset=utf-8'}, body:JSON.stringify(payload), signal:controller.signal })
    const result = await response.json()
    if (!result.ok) throw new Error(result.message || 'Pendaftaran gagal disimpan.')
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(result.record))
    return result.record
  } catch (error) {
    console.error(error)
    if (error?.name === 'AbortError') throw new Error('Pengiriman terlalu lama. Periksa koneksi internet lalu coba lagi.')
    if (error?.message?.includes('Failed to fetch')) throw new Error('Tidak dapat terhubung ke server pendaftaran. Pastikan URL Apps Script sudah benar dan deployment dapat diakses.')
    throw error
  } finally { window.clearTimeout(timeout) }
}
