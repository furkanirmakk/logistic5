import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HomeNavbar from "../Navbar/HomeNavbar";

interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Karayolu Taşımacılığı",
    description:
      "Uluslararası karayolu taşımacılığında güçlü iş ortaklarımız hızlı, güvenli ve en iyi fiyatlarla yüklerinizi komple, parsiyel, ithalat, ihracat karayolu taşımacılığı yapıyoruz. Ayrıca Belçika merkezimizden tüm Avrupa'ya 7/24 hızlı destek sağlıyoruz.",
    images: ["/assets/1.png"],
  },
  {
    id: 2,
    name: "Havayolu Taşımacılığı",
    description:
      "En iyi zamanlamayla ve en iyi fiyatlarla dünyanın her noktasına güçlü iş ortaklarımızla beraber hızlı ve kusursuz şekilde gönderilerinizin teslimatını yapıyoruz.",
    images: ["/assets/1.png"],
  },
  {
    id: 3,
    name: "Denizyolu Taşımacılığı",
    description:
      "Denizyolu taşımacılığında direkt hatlarla komple (FCL), parsiyel (LCL) yüklerinizi ucuz al ucuz sat fiyat politikamızla süreklilik sağlayarak standart, open top, refeer, flatrack, high cube ve tank konteyner taşıma sistemleriyle hızlı, güvenli teknolojik takip sistemlerini kullanarak 7/24 yükünüzü dilediğiniz zaman istediğiniz noktaya ulaştırıyoruz. Türkiye'deki her noktadan yüklerinizi tecrübeli kadromuzun direkt taşıyıcılardan ve armatörlerden aldığı ucuz fiyatlarla taşıyoruz. Özellikle Avrupa yüklemelerinde Antwerp (Anvers) limanındaki depomuzda tecrübeli kadromuzla elleçleme yaparak 7/24 bilgi akışıyla hızlı, güvenli şekilde yüklerinizin teslimini sağlıyoruz.",
    images: ["/assets/1.png"],
  },
  {
    id: 4,
    name: "Demiryolu Taşımacılığı",
    description:
      "Minimum hasar riski ve sabit sürelerle birçok Avrupa ülkesine demiryolu taşımacılığı yapıyoruz. Bu sayede ağırlığı yüksek yükleri uygun fiyatlı ve güvenilir bir şekilde teslimat noktasına ulaştırmış oluyoruz.",
    images: ["/assets/1.png"],
  },
  {
    id: 5,
    name: "Multimodel Taşımacılık",
    description:
      "Adresten adrese taşınacak yükleri denizyolu, karayolu, havayolu, demiryolu gibi çeşitli taşıma yöntemlerini kullanarak bir noktadan diğer noktaya ulaştırıyoruz. Yükleme, indirme, gümrükleme, sigortalama, elleçleme gibi işlemlerin tamamını üstleniyoruz. Hava koşulları, zaman, yükün içeriği gibi unsurları göz önünde bulundurup en iyi taşımacılık modelini seçiyoruz. Kimi zaman birden fazla modeli sırayla kullanıp yüklerimizi istenilen noktaya ulaştırıyoruz. Böylece müşterilerimize maksimum memnuniyeti sağlıyoruz.",
    images: ["/assets/1.png"],
  },
  {
    id: 6,
    name: "Fuar Taşımacılığı",
    description:
      "Ulusal ve uluslararası tüm fuar ve etkinlik projeleri için belge düzenleme, paketleme, gümrük işlemleri, uluslararası taşıma, gümrüklü veyagümrüksüz dahili taşıma, paket açma ve konumlandırma, elleçleme ve boş kap depolama gibi organizasyonların tüm aşamalarını eksiksiz ve zamanında yerine getiriyoruz.",
    images: ["/assets/1.png"],
  },
  {
    id: 7,
    name: "Proje Taşımacılığı",
    description:
      "Uzman kadromuz ve güçlü iş ortaklarımız ile müşterilerimize uygun çözümler üretiyoruz. Yüksek hacimli ürünleri ihtiyaca en uygun şekilde taşıyoruz. Fabrika, enerji santrali, boru hattı, rafineri, yakıt işleme tesisleri taşımacılığı gibi işlemleri müşteri memnuniyeti ve güvenilirlik ilkelerini göz önünde bulundurarak gerçekleştiriyoruz.",
    images: ["/assets/1.png"],
  },
  {
    id: 8,
    name: "MilkRun Taşımacılık",
    description:
      "Çeşitli noktalardan alınacak aynı veya farklı yükleri araçlarımıza yükleyip çeşitli noktalara ulaştırıyoruz. ",
    images: ["/assets/1.png"],
  },
  {
    id: 9,
    name: "Depolama Hizmetleri",
    description:
      "Avrupa yüklerinizi isteğinize bağlı olarak direkt adrese teslim etmek yerine Belçika Antwerp'teki 20.000 metrekare depomuzda depoluyoruz. İstediğiniz zaman Avrupa'da gönderim yapmak istediğiniz adrese yüklerinizin dilediğiniz kadarını ulaştırıyoruz. Potansiyel müşterileriniz için depomuzu showroom olarak kullanabilirsiniz.",
    images: ["/assets/1.png"],
  },
  {
    id: 10,
    name: "Sigorta Hizmetleri",
    description:
      "Taşıdığımız tüm yüklerin sigorta işlemlerini gerçekleştiriyoruz. Belçika depomuzdaki ürünleriniz için de sigorta işlemlerini gerçekleştirip ürünlerinizi sigortalı şekilde depoluyoruz.",
    images: ["/assets/1.png"],
  },
  {
    id: 11,
    name: "Gümrük Hizmetleri",
    description:
      "Alanında uzman tecrübeli kadromuzla lojistik süreçlerdeki tüm gümrük işlemlerini gerçekleştiriyoruz. Gümrük Tarife İstatistik Pozisyonu tespiti yapıyoruz, ön müsaadelerin alınmasında destek sağlıyoruz. Tüm süreçte bürokrasiye uygun şekilde çalışıyor ve müşterilerimize güvenilir bir hizmet sunuyoruz.",
    images: ["/assets/1.png"],
  },
  

  

  // Diğer ürünler...
];

const ServicesDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [animationClass, setAnimationClass] = useState<string>("");

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-500">Ürün bulunamadı!</h1>
      </div>
    );
  }

  return (
    <div>
      <HomeNavbar />
      <div className="p-4 sm:p-8 lg:p-16">
        <div className="flex items-center justify-center">
          <div className="w-32 h-1 bg-gray-800 ml-4 rounded"></div>
          <h1 className="text-4xl p-16 text-center font-bold text-gray-800 ">
            {product.name}
          </h1>
          <div className="w-32 h-1 bg-gray-800 mr-4 rounded"></div>
        </div>

        {/* Slayt gösterisi kısmı */}
        <div className="relative w-[100%] sm:w-[85%] md:w-[70%] xl:w-[60%] mx-auto">
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-300 border-2 border-gray-600">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className={`w-full h-auto object-cover rounded shadow image-transition ${animationClass}`}
              onAnimationEnd={() => setAnimationClass("")} // Animasyon tamamlandığında sınıfı temizle
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 p-6 mt-8 bg-gradient-to-r from-[#A8782E] via-[#D1A54C] to-[#D89A45] rounded-xl shadow-lg">
          {/* Ürün açıklaması */}
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-lg text-gray-800 mt-6 max-w-lg">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
