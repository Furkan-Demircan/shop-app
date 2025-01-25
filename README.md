# Shop App

Shop App, kullanıcıların ürünleri kolayca inceleyip sepete ekleyebileceği ve satın alabileceği modern bir e-ticaret platformudur. Proje, ölçeklenebilirlik ve kullanıcı deneyimine odaklanılarak en güncel teknolojilerle geliştirilmeye devam edilmektedir.

[**Read this document in English**](./README.md)

## Özellikler

- **Frontend**: Dinamik ve ölçeklenebilir UI oluşturmak için Pug şablonları kullanılmıştır.
- **Backend**: Güçlü API'ler ve sunucu tarafı mantığı sağlamak için Node.js ile geliştirilmiştir.
- **Veritabanı**: MongoDB, hızlı ve güvenilir veri işlemleri için kullanılmıştır.

## Kullanılan Teknolojiler

- **Pug**: Frontend'de dinamik şablonlar oluşturmak için kullanılmıştır.
- **Node.js**: Backend çalışma ortamı olarak.
- **Express.js**: API oluşturma ve istekleri işlemek için framework.
- **MongoDB**: Kullanıcı ve ürün verilerini depolamak için NoSQL veritabanı.

## Gereksinimler

- **Node.js**: v14 veya üzeri
- **MongoDB**: Çalışan bir MongoDB örneği

## Kurulum

1. Depoyu klonlayın:
    ```bash
    git clone https://github.com/Furkan-Demircan/shop-app.git
    cd shop-app
    ```

2. Bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

3. Proje kök dizininde bir `.env` dosyası oluşturun ve aşağıdaki ortam değişkenlerini yapılandırın:
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/shop-app
    ```

4. Uygulamayı başlatın:
    ```bash
    npm start
    ```

5. Uygulamayı tarayıcınızda açın:
    ```
    http://localhost:3000
    ```

## Kullanım

1. Kullanıcılar, ana sayfada mevcut ürünleri inceleyebilir.
2. Ürünleri sepete ekleyip ödeme işlemine geçebilirler.
3. Yöneticiler ürünleri yönetebilir ve satış raporlarını görüntüleyebilir.

## Klasör Yapısı

- `views/`: Frontend için Pug şablonlarını içerir.
- `routes/`: Uygulamanın API rotalarını tanımlar.
- `models/`: Kullanıcı, ürün ve siparişler için MongoDB şemalarını içerir.
- `controllers/`: Kullanıcı isteklerini işlemek için iş mantığı.
- `public/`: CSS, görseller ve JavaScript dosyaları gibi statik varlıklar.

## Katkıda Bulunma

Katkılar memnuniyetle karşılanır! Lütfen katkıda bulunmadan önce bir konu açarak değişikliklerinizi tartışın.

1. Depoyu fork'layın.
2. Yeni bir dal oluşturun (`git checkout -b ozellik/yeni-ozellik`).
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni bir özellik ekle'`).
4. Dalınıza push yapın (`git push origin ozellik/yeni-ozellik`).
5. Bir pull isteği (PR) açın.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için [LICENSE](./LICENSE) dosyasına bakabilirsiniz.

## İletişim

Bu proje hakkında sorularınız veya önerileriniz için bizimle iletişime geçebilirsiniz:

- **E-posta**: goooglenudle@gmail.com
- **GitHub**: [Furkan-Demircan](https://github.com/Furkan-Demircan)

---

Keyifli alışverişler!
