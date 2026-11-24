import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const opsiyonelSayi = z.preprocess(
  (v) => (v === '' || v === null || v === undefined ? undefined : Number(v)),
  z.number().optional()
);
const opsiyonelYazi = z.preprocess(
  (v) => (v === null || v === undefined || v === '' ? undefined : String(v)),
  z.string().optional()
);
const liste = z.preprocess((v) => (Array.isArray(v) ? v.filter(Boolean) : []), z.array(z.string()));

const ilanlar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ilanlar' }),
  schema: z.object({
    baslik: z.string(),
    durum: z.string(),
    tip: z.string().default('Daire'),
    fiyat: opsiyonelSayi,
    ilce: z.string(),
    il: opsiyonelYazi,
    mahalle: opsiyonelYazi,
    oda: opsiyonelYazi,
    m2_brut: opsiyonelSayi,
    m2_net: opsiyonelSayi,
    kat: opsiyonelYazi,
    bina_yasi: opsiyonelYazi,
    isitma: opsiyonelYazi,
    ozellikler: liste,
    kapak: opsiyonelYazi,
    galeri: liste,
    sahibinden: opsiyonelYazi,
    one_cikan: z.boolean().nullish().transform((v) => !!v),
    aktif: z.boolean().nullish().transform((v) => v !== false),
    tarih: z.coerce.date(),
  }),
});

const rehberler = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/rehberler' }),
  schema: z.object({
    baslik: z.string(),
    ozet: z.string(),
    kategori: z.enum(['Bölge Rehberi', 'Bilgi Merkezi']).default('Bilgi Merkezi'),
    kapak: opsiyonelYazi,
    tarih: z.coerce.date(),
  }),
});

export const collections = { ilanlar, rehberler };
