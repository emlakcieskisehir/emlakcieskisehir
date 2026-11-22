import { getCollection } from 'astro:content';
import { slugla } from './yardimci';

export async function aktifIlanlar() {
  const hepsi = await getCollection('ilanlar', ({ data }) => data.aktif);
  return hepsi
    .map((i) => ({ ...i, slug: slugla(i.id) }))
    .sort((a, b) => b.data.tarih.getTime() - a.data.tarih.getTime());
}

export async function rehberListesi() {
  const hepsi = await getCollection('rehberler');
  return hepsi
    .map((r) => ({ ...r, slug: slugla(r.id) }))
    .sort((a, b) => b.data.tarih.getTime() - a.data.tarih.getTime());
}
