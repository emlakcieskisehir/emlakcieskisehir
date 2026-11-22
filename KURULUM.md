# Kurulum (Furkan için)

## 1. Kodu GitHub'a koy
- Bu klasörün içeriğini mevcut reponun yerine yükle (`node_modules` ve `dist` klasörleri yüklenmez, `.gitignore` bunu zaten hallediyor).
- Test için koyduğun tek `index.html` dosyasını sil. Artık sayfaları Astro üretiyor.

## 2. Cloudflare build ayarları
Pages projesi → Settings → Builds:
- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Ortam değişkeni: `NODE_VERSION` = `22.23.5` (Astro 7 en az Node 22.23.4 istiyor; repodaki `.node-version` dosyası da bunu söylüyor)

Kaydet ve yeniden deploy et. Domain ayarları aynen kalıyor.

## 3. Yönetim paneli (Pages CMS)
1. https://app.pagescms.org adresine GitHub hesabınla giriş yap.
2. İstendiğinde Pages CMS GitHub uygulamasını bu repoya kur.
3. Repoyu seç; soldaki menüde İlanlar, Rehber yazıları, Site ayarları gibi bölümler görünecek (`.pages.yml` dosyası bunları belirliyor).
4. Ertuğrul Bey'i davet et: Pages CMS'te ortak çalışanlar (collaborators) **e-postayla** davet edilebiliyor, GitHub hesabı gerekmiyor.

Panelde yapılan her kayıt GitHub'a gider, Cloudflare siteyi 1-2 dakikada kendiliğinden günceller.

## 4. İletişim formu (Web3Forms, ücretsiz)
1. https://web3forms.com adresinde Ertuğrul Bey'in e-postasını gir, gelen "Access Key"i al.
2. Panel → Site ayarları → **Form anahtarı** alanına yapıştır.
Form mesajları o e-postaya düşer.

## 5. Yayından önce
- [ ] Örnek ilanları sil ya da "Yayında" kutusunu kapat (başlıklarında "(Örnek)" yazıyor).
- [ ] Örnek yorumları gerçek Google yorumlarıyla değiştir ya da sil.
- [ ] Ana sayfadaki rakamları (+10 yıl, +300 ev, 6 hafta) **gerçek** değerlerle değiştir. Uydurma rakam bırakma.
- [ ] Hakkımda fotoğrafını yükle (site otomatik siyah-beyaz gösterir; düz, açık renk bir arka plan en iyi sonucu verir).
- [ ] Telefon, adres, yetki belgesi no, sosyal medya linkleri.
- [ ] KVKK metnini bir hukukçuya kontrol ettir.
- [ ] Google Search Console'a siteyi ekle, `https://emlakcieskisehir.com/sitemap-index.xml` adresini gönder.
