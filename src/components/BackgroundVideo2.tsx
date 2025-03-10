import React from "react";

const BackgroundVideo2 = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/hk-video.mp4" // Video dosyasının yolu
        autoPlay
        loop
        muted
      />
      {/* Video üzerine yazıyı ekliyoruz */}
      <div
        className="absolute top-1/2   transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-6  rounded-md max-w-lg shadow-lg 
sm:left-1/2 sm:-translate-x-1/2 md:left-1/3 lg:left-1/4"
      >
        <h1 className="text-2xl text-center font-bold mb-4">Hakkımızda</h1>
        <p className="text-center text-sm sm:text-sm md:text-md lg:text-lg leading-relaxed">
          Hoop Reis Logistics, 25 yıllık deneyimli yöneticileri ve dinamik
          ekibiyle güvenilirlik, iş ahlakı, kaliteli hizmet ve müşteri
          memnuniyetini esas alan bir iş ve çözüm ortağıdır. Belçika’daki 20.000
          m² depomuzda başlayan serüvenimizi Belçika, Almanya, Hollanda ve
          Fransa’daki başarılarımızın ardından Türkiye’ye taşıdık. Yükleme,
          taşıma, depolama ve showroom gibi lojistiğin her aşamasında yer
          alıyoruz. Müşterilerimizle iş birliği içinde, en iyi fiyat ve hizmeti
          sunarak operasyonlarımızı yürütüyoruz. Avrupa yüklerimiz için
          Belçika’daki profesyonel ekibimiz son teknoloji ekipmanlarla depolama
          ve showroom hizmetleri sağlıyor. Sürekli takip ve bilgi akışı ile
          yüklerimizin güvenliğini garanti altına alıyoruz. Yenilikçi, hızlı ve
          güvenilir çözümler üretiyor, klasik planlara bağlı kalmadan sektörde
          fark yaratıyoruz. Müşterilerimizi “biz ve onlar” olarak ayırmayıp,
          onların lojistik departmanı gibi çalışıyoruz. Motivasyonumuz
          sizlersiniz, bizleriz.
        </p>
      </div>
    </div>
  );
};

export default BackgroundVideo2;
