import React from 'react';
import { MessageCircle, Facebook, CreditCard, Shield, Gamepad2, Coins, Users, Zap, Sparkles } from 'lucide-react';
import GameCard from './components/GameCard';
import PaymentMethod from './components/PaymentMethod';
import ServiceCard from './components/ServiceCard';
import PriceCard from './components/PriceCard';
import AccountCard from './components/AccountCard';

function App() {
  const games = [
    {
      name: "PUBG Mobile",
      image: "https://k.top4top.io/p_3347y7tq85.jpg",
      arabicName: "ببجي موبايل",
      route: "/pubg-mobile"
    },
    {
      name: "Free Fire",
      image: "https://f.top4top.io/p_3351uwab91.jpg",
      arabicName: "فري فاير",
      route: "/free-fire"
    },
    {
      name: "PES",
      image: "https://f.top4top.io/p_33516i8di1.jpg",
      arabicName: "بيس",
      route: "/pes"
    },
    {
      name: "Call of Duty",
      image: "https://h.top4top.io/p_3347sb11e2.jpg",
      arabicName: "كول اوف ديوتي",
      route: "/cod"
    },
    {
      name: "Roblox",
      image: "https://f.top4top.io/p_33516l4z21.png",
      arabicName: "روبلكس",
      route: "/roblox"
    },
    {
      name: "PUBG Korea",
      image: "https://k.top4top.io/p_3347y7tq85.jpg",
      arabicName: "ببجي الكورية",
      route: "/pubg-korea"
    },
    {
      name: "PUBG Lite",
      image: "https://i.top4top.io/p_33510hopp1.jpeg",
      arabicName: "ببجي لايت",
      route: "/pubg-lite"
    },
    {
      name: "Mobile Legends",
      image: "https://g.top4top.io/p_33479vj8z1.jpg",
      arabicName: "موبايل ليجند",
      route: "/mobile-legends"
    },
    {
      name: "Clash of Clans",
      image: "https://l.top4top.io/p_3351dhfyu1.jpg",
      arabicName: "كلاش اوف كلانس",
      route: "/clash-of-clans"
    }
  ];

  const gamePrices = [
    {
      game: "ببجي - شحن بالحساب (جميع الروابط)",
      image: "https://k.top4top.io/p_3347y7tq85.jpg", // يمكنك استبدال الرابط بصورة مناسبة للعبة
      prices: [
        { amount: "60 UC", price: "60 L.E" },
        { amount: "325 UC", price: "240 " },
        { amount: "660 UC", price: "450 " },
        { amount: "985 UC", price: "720 " },
        { amount: "1320 UC", price: "960 " },
        { amount: "1800 UC", price: "1250 " },
        { amount: "3850 UC", price: "2300 " },
        { amount: "8100 UC", price: "4400 " },
        { amount: "برايم عادي", price: "80 " },
        { amount: "برايم بلسّ", price: "400 " }
      ]
    },
    {
      game: "ببجي الكورية - شحن شدات (اكونت فقط)",
      image: "https://k.top4top.io/p_3347y7tq85.jpg", // يمكنك استبدال الرابط بصورة مناسبة للعبة
      prices: [
        { amount: "60 شدة", price: "75" },
        { amount: "190 شدة", price: "220 " },
        { amount: "310 شدة", price: "370" },
        { amount: "380 شدة", price: "420 " },
        { amount: "660 شدة", price: "600 " },
        { amount: "1800 شدة", price: "1500 " },
        { amount: "3850 شدة", price: "2750 " },
        { amount: "8100 شدة", price: "5200 " }
      ]
    },
    {
      game: "فري فاير - متاح كمية محدودة",
      image: "https://f.top4top.io/p_3351uwab91.jpg", // يمكنك استبدال الرابط بصورة مناسبة للعبة
      prices: [
        { amount: "310 ", price: "150 " },
        { amount: "800 ", price: "280 " },
        { amount: "1060 ", price: "550 " },
        { amount: "2120 ", price: "1080 " },
        { amount: "3300 ", price: "1630 " },
        { amount: "5600 ", price: "2500 " }
      ]
    },
    {
      game: "فري فاير - متاح كمية محدودة (بالحساب)",
      image: "https://f.top4top.io/p_3351uwab91.jpg", // يمكنك استبدال الرابط بصورة مناسبة للعبة
      prices: [
        { amount: "310 💎", price: "150 ج" },
        { amount: "800 💎", price: "280 ج" }, // تم تصحيح السعر من 28 إلى 280 بناءً على السياق
        { amount: "1060 💎", price: "550 ج" },
        { amount: "2120 💎", price: "1080 ج" },
        { amount: "3300 💎", price: "1630 ج" },
        { amount: "5600 💎", price: "2500 ج" }
      ]
    },
    {
      game: "Call of Duty Mobile",
      image: "https://h.top4top.io/p_3347sb11e2.jpg",
      prices: [
        { amount: "80 COD", price: "70 " },
        { amount: "440 COD", price: "270 " },
        { amount: "960 COD", price: "550 " },
        { amount: "2880 COD", price: "1350 " },
        { amount: "6250 COD", price: "2650 " },
        { amount: "14580 COD", price: "5200 " }
      ]
    },
    {
      game: "بيس (PES) - شحن سريع",
      image: "https://f.top4top.io/p_33516i8di1.jpg", // يمكنك استبدال الرابط بصورة مناسبة للعبة
      prices: [
        { amount: "550 كوين", price: "250 " },
        { amount: "1040 كوين", price: "450 " },
        { amount: "1590 كوين", price: "680 " },
        { amount: "2130 كوين", price: "900 " },
        { amount: "3250 كوين", price: "1300 " },
        { amount: "5700 كوين", price: "2150 " },
        { amount: "12800 كوين", price: "4300 " },
        { amount: "25600 كوين", price: "8500 " }
      ]
    },
    {
      game: "Roblox - خصومات شحن",
      image: "https://f.top4top.io/p_33516l4z21.png", // يمكنك استبدال الرابط بصورة مناسبة للعبة
      prices: [
        { amount: "400 عملة", price: "240 " },
        { amount: "800 عملة", price: "480 " },
        { amount: "1600 عملة", price: "960 " },
        { amount: "4000 عملة", price: "2350 " },
        { amount: "8000 عملة", price: "4600 " }
      ]
    },
    {
      game: "موبيل ليجند ID",
      image: "https://g.top4top.io/p_33479vj8z1.jpg", // يمكنك استبدال الرابط بصورة مناسبة للعبة
      prices: [
        { amount: "31 ", price: "55 " },
        { amount: "155 ", price: "275 " },
        { amount: "311", price: "350 " },
        { amount: "949 ", price: "1050 " },
        { amount: "1617 ", price: "1850 " }
      ]
    }
  ];

  const accounts = [
    {
      game: "PUBG Mobile",
      image: "https://k.top4top.io/p_3347y7tq85.jpg",
      details: [
        "مستوى الحساب 75",
        "جميع المواسم من S2",
        "سكنات نادرة",
        "معدل قتل 5.2"
      ],
      price: 1500,
      rating: 5
    },
    {
      game: "Free Fire",
      image: "https://f.top4top.io/p_3351uwab91.jpg",
      details: [
        "حساب قديم منذ 2019",
        "سكنات حصرية",
        "شخصيات مفتوحة",
        "رتبة ماستر"
      ],
      price: 800,
      rating: 4
    },
    {
      game: "Call of Duty Mobile",
      image: "https://h.top4top.io/p_3347sb11e2.jpg",
      details: [
        "مستوى 150",
        "أسلحة نادرة",
        "شخصيات مميزة",
        "رتبة ليجند"
      ],
      price: 1200,
      rating: 5
    }
  ];

  const services = [
    {
      title: "شحن الألعاب",
      description: "شحن رصيد وعملات لجميع الألعاب بأفضل الأسعار",
      icon: <Coins className="w-8 h-8 text-yellow-400" />
    },
    {
      title: "بيع وشراء الحسابات",
      description: "تداول آمن للحسابات مع ضمان كامل",
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      title: "دعم فني 24/7",
      description: "فريق دعم متخصص متواجد على مدار 24 ساعة",
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {
      title: "خدمات احترافية",
      description: "خدمات متكاملة لجميع احتياجات اللاعبين",
      icon: <Gamepad2 className="w-8 h-8 text-green-400" />
    }
  ];

  const handlePurchase = () => {
    window.open('https://wa.me/201012810150', '_blank');
  };

  return (
    <div className="min-h-screen gaming-pattern bg-fixed">
      {/* Navigation */}
      <nav className="glass-effect fixed w-full z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://g.top4top.io/p_3305tpau81.png" 
              alt="Masrawey Store" 
              className="h-10 w-10 rounded-full animate-float"
            />
            <span className="text-gradient text-xl font-bold">Masrawey Store</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/201012810150" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle size={20} className="animate-float" />
              تواصل معنا
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center pt-32 pb-16 px-4 relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="animate-float mb-8">
            <Sparkles className="w-16 h-16 text-gradient mx-auto" />
          </div>
          <h1 className="text-6xl font-black text-gradient mb-6 animate-pulse-slow">
            عالم الألعاب في مكان واحد
          </h1>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            نقدم لك أفضل الخدمات بأرخص الأسعار مع ضمان كامل وخدمة عملاء على مدار 24 ساعة
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.facebook.com/share/p/1FYS3EN8gn/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              <Shield size={20} className="animate-float" />
              ضمان المصداقية
            </a>
            <a 
              href="https://wa.me/201012810150"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-green-800 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle size={20} className="animate-float" />
              تواصل معنا
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-24 glass-effect">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gradient text-center mb-16">خدماتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Game Prices Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gradient text-center mb-16">أسعار الشحن</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gamePrices.map((game) => (
              <PriceCard
                key={game.game}
                game={game.game}
                prices={game.prices}
                image={game.image}
                onPurchase={handlePurchase}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Accounts Section */}
      <section className="py-24 glass-effect">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gradient text-center mb-16">حسابات للبيع</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accounts.map((account) => (
              <AccountCard
                key={account.game}
                {...account}
                onPurchase={handlePurchase}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gradient text-center mb-16">الألعاب المتوفرة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <GameCard
                key={game.name}
                name={game.name}
                arabicName={game.arabicName}
                image={game.image}
                onPurchase={handlePurchase}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-24 glass-effect">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gradient text-center mb-16">طرق الدفع</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PaymentMethod
              title="فودافون كاش"
              value="01012810150"
              icon={<CreditCard className="text-red-500" size={24} />}
            />
            <PaymentMethod
              title="اتصالات كاش"
              value="01125876656"
              icon={<CreditCard className="text-green-500" size={24} />}
            />
            <PaymentMethod
              title="انستا باي"
              value="sayedhapep@instapay"
              icon={<CreditCard className="text-blue-500" size={24} />}
            />
            <PaymentMethod
              title="تحويل بنكي"
              value="EG280005301000000310117901001"
              icon={<CreditCard className="text-yellow-500" size={24} />}
            />
            <PaymentMethod
              title="باينانس"
              value="ID: 714286143"
              icon={<CreditCard className="text-purple-500" size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-effect py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-4 mb-8">
            <img 
              src="https://g.top4top.io/p_3305tpau81.png" 
              alt="Masrawey Store" 
              className="h-16 w-16 rounded-full animate-float"
            />
            <h3 className="text-2xl font-bold text-gradient">Masrawey Store</h3>
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://www.facebook.com/share/p/1FYS3EN8gn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://wa.me/201012810150"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <MessageCircle size={24} />
            </a>
          </div>
          <p className="text-gray-400 mb-2">
            تم التطوير بواسطة{' '}
            <a 
              href="https://www.facebook.com/profile.php?id=100079615578194"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient hover:opacity-80 transition-opacity duration-300"
            >
              Luffy
            </a>
          </p>
          <p className="text-sm text-gray-500">جميع الحقوق محفوظة © 2024</p>
          <p className="text-sm text-gray-500">Powered by Luffy.Media</p>
        </div>
      </footer>
    </div>
  );
}

export default App;