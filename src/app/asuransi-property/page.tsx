import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';

export const metadata: Metadata = {
  title: 'Asuransi Property & Rumah Jogja | Panduan Lengkap PAR & Kebakaran',
  description: 'Panduan lengkap Asuransi Rumah, Toko, dan Pabrik di Jogja. Pahami perbedaan Asuransi Kebakaran dan Property All Risk (PAR). Konsultan ahli 10 tahun.',
};

// Schema FAQ Property
const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa perbedaan Asuransi Kebakaran dan Property All Risk (PAR)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Asuransi Kebakaran (Fire Insurance) hanya menjamin risiko dasar seperti kebakaran, petir, dan ledakan. Sedangkan Property All Risk (PAR) menjamin semua risiko kerusakan fisik (All Risk) kecuali yang dikecualikan, serta bisa diperluas ke banjir, gempa, dan kerusuhan."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah Asuransi Property menjamin gempa bumi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Risiko gempa bumi tidak termasuk dalam jaminan standar (Standard Fire Policy). Namun, Anda bisa menambahkan perluasan gempa bumi (Earthquake) pada polis Property All Risk (PAR) dengan penambahan premi."
      }
    }
  ]
};

const PropertyInsurancePage = () => {
  const waNumber = "628131556592";
  const waMessage = "Halo, saya mau tanya soal Asuransi Property/Rumah di Jogja.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <>
      <Script
        id="faq-schema-property"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <div className="min-h-screen bg-white text-gray-800 font-sans">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Asuransi Property & Rumah Jogja
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Lindungi aset properti Anda dari risiko kebakaran, banjir, dan gempa. Panduan lengkap pilihan polis yang tepat.
            </p>
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-emerald-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
            >
              💬 Konsultasi Gratis
            </a>
          </div>
        </section>

        {/* Edukasi: Kebakaran vs PAR */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Pilih Perlindungan yang Tepat</h2>
            <p className="text-center text-gray-600 mb-10">Bingung pilih polis yang mana? Kenali dulu perbedaan dasarnya.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Edukasi: Kebakaran */}
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-800 mb-2">🔥 Asuransi Kebakaran (Basic)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Menjamin risiko dasar: <strong>Kebakaran, Petir, dan Ledakan</strong>. Serta kejatuhan pesawat terbang dan asap. Cocok untuk Anda yang menginginkan premi ekonomis dengan jaminan risiko utama.
                </p>
                <p className="text-gray-600 text-sm bg-orange-50 p-3 rounded">
                  <strong>Keterbatasan:</strong> Tidak menjamin banjir, gempa, atau kerusuhan kecuali diperluas (biasanya premi jadi tinggi jika di-extension satu-satu).
                </p>
              </div>

              {/* Edukasi: PAR */}
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-emerald-500">
                <h3 className="text-xl font-bold text-emerald-800 mb-2">🏘️ Property All Risk (PAR)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Menjamin <strong>semua risiko kerusakan fisik</strong> (All Risk) kecuali yang dikecualikan polis. Mencakup kebakaran, air hujan, banjir, badai, hingga kerusuhan.
                </p>
                <p className="text-gray-600 text-sm bg-emerald-50 p-3 rounded">
                  <strong>Keunggulan:</strong> Proteksi lebih komprehensif. Perluasan Gempa & Banjir bisa langsung diaktifkan. Ideal untuk rumah modern & ruko.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Produk Turunan (Internal Link) */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Layanan Produk Property</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Link ke Halaman Kebakaran */}
              <Link href="/asuransi-kebakaran" className="group border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300 block">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-emerald-600 transition">Asuransi Kebakaran</h3>
                <p className="text-gray-600 mb-4">
                  Proteksi dasar untuk rumah dan bangunan. Fokus pada jaminan kebakaran murni.
                </p>
                <span className="text-emerald-600 font-semibold text-sm">
                  Pelajari Asuransi Kebakaran →
                </span>
              </Link>

              {/* Link ke Halaman PAR */}
              <Link href="/asuransi-property-all-risk" className="group border-2 border-emerald-500 rounded-lg p-6 bg-emerald-50 hover:shadow-xl transition duration-300 block relative">
                <span className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">REKOMENDASI</span>
                <div className="text-4xl mb-4">🏘️</div>
                <h3 className="text-xl font-bold mb-3 text-emerald-700 group-hover:underline">Property All Risk (PAR)</h3>
                <p className="text-gray-600 mb-4">
                  Perlindungan menyeluruh untuk rumah tinggal, ruko, dan gedung perkantoran.
                </p>
                <span className="text-emerald-600 font-semibold text-sm">
                  Lihat Detail Polis PAR →
                </span>
              </Link>
              
              {/* Produk Lain */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-3 text-emerald-700">Industrial All Risk (IAR)</h3>
                <p className="text-gray-600 mb-4">Solusi terintegrasi untuk pabrik dan industri besar.</p>
                <a href={waLink} className="text-emerald-600 font-semibold text-sm">Tanya IAR via WA →</a>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Pertanyaan Seputar Property</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-bold text-gray-800 mb-2">Apa itu Nilai Pertanggungan?</h3>
                <p className="text-gray-600">Nilai Pertanggungan adalah nilai bangunan (tanpa tanah) yang diasuransikan. Sebaiknya berdasarkan <strong>Nilai Pasar Baru (Replacement Value)</strong> agar saat klaim dana cukup untuk membangun ulang.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-bold text-gray-800 mb-2">Apakah sewa rumah bisa diasuransikan?</h3>
                <p className="text-gray-600">Bisa. Penyewa bisa mengasuransikan isi rumah (Home Contents) dan renovasi yang ia buat, dengan bukti perjanjian sewa.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-emerald-900 text-white py-16 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Proteksi Properti Anda Sekarang</h2>
          <p className="mb-8 opacity-90">Jangan biarkan investasi Anda hilang seketika karena bencana.</p>
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
          >
            📥 Minta Penawaran Asuransi Property
          </a>
        </section>

      </div>
    </>
  );
};

export default PropertyInsurancePage;
