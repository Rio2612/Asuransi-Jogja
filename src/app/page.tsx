import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Konsultan Asuransi Jogja | Ahli Klaim & Asuransi Kerugian',
  description: 'Konsultan asuransi terpercaya di Jogja. Pengalaman 10 tahun di industri asuransi kerugian. Melayani Asuransi Kendaraan, Property, Teknik, Surety Bond, & Liability.',
};

const HomePage = () => {
  // Konfigurasi Nomor WA
  const waNumber = "628131556592";
  const waMessage = "Halo, saya mau konsultasi soal asuransi di Jogja.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  // Data Pilar Produk untuk Looping
  const products = [
    {
      title: "Asuransi Kendaraan",
      desc: "Mobil & Mobil Listrik (EV). Proteksi total dengan pendampingan klaim.",
      link: "/asuransi-kendaraan",
      color: "bg-blue-500",
      icon: "🚗"
    },
    {
      title: "Asuransi Property",
      desc: "Rumah, Toko, Kos-kosan, & Pabrik. Proteksi dari Kebakaran & Bencana.",
      link: "/asuransi-property",
      color: "bg-emerald-500",
      icon: "🏠"
    },
    {
      title: "Asuransi Teknik",
      desc: "Proyek Konstruksi (CAR) & Mesin Pabrik (Machinery Breakdown).",
      link: "/asuransi-teknik",
      color: "bg-amber-500",
      icon: "🏗️"
    },
    {
      title: "Surety Bond",
      desc: "Jaminan Proyek (Bid, Performance, Maintenance Bond) untuk Kontraktor.",
      link: "/surety-bond",
      color: "bg-indigo-500",
      icon: "📄"
    },
    {
      title: "Asuransi Liability",
      desc: "Tanggung Jawab Publik, Produk, & Profesional. Lindungi Bisnis Anda.",
      link: "/asuransi-liability",
      color: "bg-slate-600",
      icon: "⚖️"
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white py-24 px-4 relative overflow-hidden">
        {/* Background Pattern (Opsional) */}
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Konsultan Asuransi <br />
            <span className="text-blue-400">Terpercaya di Jogja</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Saya membantu Anda memilih perlindungan yang tepat dengan pendampingan klaim profesional. 
            Pengalaman <strong>10 Tahun</strong> di Industri Asuransi Kerugian.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-lg"
            >
              💬 Chat WhatsApp Sekarang
            </a>
            <a 
              href="#layanan" 
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300"
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Kenapa Memilih Saya?</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Banyak orang bingung beli asuransi karena takut klaimnya ditolak atau prosesnya ribet. 
            Sebagai konsultan independen, saya tidak hanya menjual polis, tapi juga menjamin <strong>pendampingan klaim</strong>. 
            Anda titip polis, saya yang urus saat musibah terjadi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-500">
              <h3 className="font-bold text-xl mb-2 text-blue-800">Ahli & Berpengalaman</h3>
              <p className="text-gray-500">Lebih dari 10 tahun mengelola risiko dan klaim asuransi kerugian.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-500">
              <h3 className="font-bold text-xl mb-2 text-blue-800">Fokus Lokal Jogja</h3>
              <p className="text-gray-500">Mengerti karakteristik risiko lokal, dari gempa hingga banjir, dan kebutuhan UMKM.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-500">
              <h3 className="font-bold text-xl mb-2 text-blue-800">Pendampingan Klaim</h3>
              <p className="text-gray-500">Menemani Anda dari laporan kejadian hingga dana ganti rugi cair.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Pillars Section */}
      <section id="layanan" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Layanan Perlindungan</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">Pilih kategori aset atau risiko yang ingin Anda lindungi.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item, index) => (
              <Link 
                href={item.link} 
                key={index}
                className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-1"
              >
                <div className={`h-2 ${item.color}`}></div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                  <div className="mt-4 text-blue-600 font-semibold text-sm flex items-center">
                    Pelajari Lebih Lanjut 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gray-900 text-white py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Masih Bingung Pilih Asuransi Mana?</h2>
        <p className="mb-8 opacity-90 max-w-xl mx-auto">Konsultasi gratis bersama saya. Ceritakan kebutuhan Anda, saya yang carikan solusi terbaiknya.</p>
        <a 
          href={waLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-lg animate-pulse"
        >
          📞 Hubungi Saya via WhatsApp
        </a>
      </section>

    </div>
  );
};

export default HomePage;
