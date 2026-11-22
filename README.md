# emlakcieskisehir.com

Ertuğrul Aydın Emlak'ın web sitesi. [Astro](https://astro.build) ile yazıldı, Cloudflare Pages'te ücretsiz yayınlanır, içerik [Pages CMS](https://pagescms.org) panelinden düzenlenir.

- **İlk kurulum:** `KURULUM.md`
- **İlan ekleme (Ertuğrul Bey için):** `ILAN-EKLEME.md`

## Bilgisayarda çalıştırmak

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ klasörüne derler
```

## Nerede ne var

| Ne | Dosya |
|---|---|
| İlanlar | `src/content/ilanlar/*.md` |
| Rehber yazıları | `src/content/rehberler/*.md` |
| Telefon, adres, sosyal medya, form anahtarı | `src/data/ayarlar.json` |
| Ana sayfa metinleri, mahalleler, SSS | `src/data/anasayfa.json` |
| Hakkımda | `src/data/hakkimda.json` |
| Yorumlar | `src/data/yorumlar.json` |
| Fotoğraflar | `public/uploads/` |
| Renkler ve tasarım | `src/styles/global.css` (en üstteki değişkenler) |
| Panel ayarları | `.pages.yml` |

## Tasarım notları

- Sade, siyah-beyaz kişisel portfolyo düzeni: büyük ince "Merhaba", siyah-beyaz portre, bol boşluk.
- Tek yazı ailesi: Geist (başlıklar ince, metin normal). Font siteyle birlikte gelir, Google Fonts'a istek atılmaz.
- Renkler: siyah `#222222`, gri `#6b6b6b`, açık zemin `#f6f6f4`, beyaz. Portre fotoğrafları CSS ile siyah-beyaz gösterilir.
