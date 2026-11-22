const harfler: Record<string, string> = { ç: 'c', ğ: 'g', ı: 'i', i̇: 'i', ö: 'o', ş: 's', ü: 'u', â: 'a', î: 'i', û: 'u' };

export function slugla(metin: string): string {
  return metin
    .toLocaleLowerCase('tr-TR')
    .split('')
    .map((h) => harfler[h] ?? h)
    .join('')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function fiyatYaz(fiyat?: number, durum?: string): string {
  if (!fiyat) return 'Fiyat için arayın';
  const s = new Intl.NumberFormat('tr-TR').format(fiyat) + ' ₺';
  return durum === 'Kiralık' ? `${s} / ay` : s;
}

export function tarihYaz(tarih: Date): string {
  return new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }).format(tarih);
}

export function telLink(tel: string): string {
  return 'tel:+' + tel.replace(/\D/g, '').replace(/^0/, '90');
}

export function waLink(numara: string, mesaj?: string): string {
  const n = numara.replace(/\D/g, '').replace(/^0/, '90');
  return `https://wa.me/${n}` + (mesaj ? `?text=${encodeURIComponent(mesaj)}` : '');
}
