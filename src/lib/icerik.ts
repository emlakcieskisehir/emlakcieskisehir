import { getCollection } from 'astro:content';
import { slugla } from './yardimci';
import ofisIlanlari from '../data/emlakjet-ofis-ilanlari.json';

export async function aktifIlanlar() {
  const elleEklenenler = await getCollection('ilanlar', ({ data, id }) => data.aktif && !id.startsWith('ornek-'));
  const elleEklenen = elleEklenenler
    .map((i) => ({ ...i, slug: slugla(i.id), kaynak: 'site' as const }));
  const ofisPortfoyu = ofisIlanlari.map((i, index) => ({
    id: `emlakjet-${i.id}`,
    slug: `${slugla(i.baslik)}-${i.id}`,
    kaynak: 'emlakjet' as const,
    data: {
      baslik: i.baslik,
      durum: i.durum,
      tip: i.tip,
      fiyat: i.fiyat,
      il: i.il,
      ilce: i.ilce,
      mahalle: i.mahalle,
      oda: i.oda,
      m2_brut: i.m2_brut,
      m2_net: i.m2_net,
      kat: i.kat,
      bina_yasi: undefined,
      isitma: undefined,
      ozellikler: [],
      kapak: i.image,
      galeri: i.galeri ?? [],
      sahibinden: i.url,
      one_cikan: index < 3,
      aktif: true,
      tarih: new Date(i.tarih),
    },
    ozet: i.ozet,
    aciklama: i.aciklama,
  }));
  return [...elleEklenen, ...ofisPortfoyu]
    .sort((a, b) => b.data.tarih.getTime() - a.data.tarih.getTime());
}

export async function rehberListesi() {
  const hepsi = await getCollection('rehberler');
  return hepsi
    .map((r) => ({ ...r, slug: slugla(r.id) }))
    .sort((a, b) => b.data.tarih.getTime() - a.data.tarih.getTime());
}
