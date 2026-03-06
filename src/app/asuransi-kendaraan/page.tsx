import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';

export const metadata: Metadata = {
  title: 'Asuransi Mobil & Kendaraan Jogja | Panduan Lengkap All Risk & TLO',
  description: 'Panduan lengkap Asuransi Kendaraan di Jogja. Pahami perbedaan All Risk, TLO, dan Own Risk (OR). Konsultan ahli 10 tahun siap membantu klaim Anda.',
};

// Data untuk FAQ Schema (SEO Google)
const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa itu Asuransi All Risk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Asuransi All Risk (Comprehensive) adalah jenis pertanggungan yang menjamin kerugian sebagian atau seluruhnya akibat kecelakaan. Ini mencakup kerusakan ringan seperti baret, penyok, hingga kerusakan berat dan kehilangan."
      }
    },
    {
      "@type": "Question",
      "name": "Apa itu Asuransi TLO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TLO (Total Loss Only) adalah asuransi yang hanya menjamin kerugian jika kerusakan kendaraan mencapai lebih dari 75% dari nilai kendaraan atau jika kendaraan hilang/dicuri. Premi TLO lebih murah namun jaminannya terbatas."
      }
    },
    {
      "@type": "Question",
      "name": "Apa itu Own Risk (OR) dalam Asuransi Kendaraan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Own Risk (OR) adalah jumlah biaya yang harus ditanggung oleh pemilik kendaraan sendiri setiap kali terjadi klaim. Besarannya biasanya sekitar Rp 300.000 untuk mobil dan berbeda untuk mobil listrik (Rp 500.000)."
      }
    }
  ]
};

const VehicleInsurancePage = () => {
  const waNumber = "628131556592";
  const waMessage = "Halo, saya mau konsultasi soal Asuransi Kendaraan di Jogja.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <>
      {/* Script untuk FAQ Schema agar muncul di hasil pencarian Google */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <div className="min-h-screen bg-white text-gray-800 font-sans">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Asuransi Kendaraan Jogja: All Risk & TLO
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Pilih perlindungan yang tepat dengan bantuan konsultan ahli 10 tahun. Jangan beli asuransi sebelum Anda pahami perbedaannya.
            </p>
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
            >
              📞 Konsultasi Gratis
            </a>
          </div>
        </section>

        {/* Edukasi Dasar: All Risk vs TLO vs OR */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Panduan Memilih Asuransi Kendaraan</h2>
            <p className="text-center text-gray-600 mb-10">Sebagai konsumen cerdas, Anda wajib memahami tiga istilah dasar ini sebelum membeli polis.</p>
            
            <div className="space-y-8">
              
              {/* Penjelasan All Risk */}
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-2">1. Asuransi All Risk (Comprehensive)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Jenis asuransi ini memberikan jaminan paling luas. <strong>"All Risk"</strong> berarti menanggung semua risiko kerusakan, mulai dari yang ringan seperti baret penyok akibat kecelakaan kecil, hingga kerusakan berat dan kehilangan.
                </p>
                <p className="text-gray-600 text-sm bg-blue-50 p-3 rounded">
                  <strong>Cocok untuk:</strong> Mobil baru, mobil mewah, atau Anda yang ingin ketenangan pikiran total.
                </p>
              </div>

              {/* Penjelasan TLO */}
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-800 mb-2">2. Asuransi TLO (Total Loss Only)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Jenis ini menjamin kerugian jika kerusakan kendaraan <strong>sangat parah</strong> (biasanya biaya perbaikan mencapai 75% atau lebih dari nilai mobil) atau jika mobil hilang/dicuri. Kerusakan kecil seperti baret tidak ditanggung.
                </p>
                <p className="text-gray-600 text-sm bg-yellow-50 p-3 rounded">
                  <strong>Cocok untuk:</strong> Mobil bekas (second) berusia di atas 10 tahun atau mobil dengan nilai ekonomi rendah.
                </p>
              </div>

              {/* Penjelasan OR */}
              <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-2">3. Apa itu Own Risk (OR)?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Own Risk (OR)</strong> adalah biaya partisipasi wajib yang ditanggung oleh pemilik kendaraan setiap kali mengajukan klaim. Ini BUKAN potongan dari ganti rugi, melainkan biaya tambahan yang Anda bayar.
                </p>
                <p className="text-gray-600 text-sm bg-red-50 p-3 rounded">
                  <strong>Nominal Standar:</strong> Biasanya Rp 300.000 per kejadian untuk mobil bensin/diesel. Berbeda dengan Mobil Listrik yang biasanya Rp 500.000.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Produk & Internal Link */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Layanan Produk Kami</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Produk Turunan: Mobil Listrik (Internal Link) */}
              <Link href="/asuransi-mobil-listrik" className="group border-2 border-cyan-500 rounded-lg p-6 bg-cyan-50 hover:shadow-xl transition duration-300 relative block">
                <span className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">SPESIALIS</span>
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-700 group-hover:underline">Asuransi Mobil Listrik (EV)</h3>
                <p className="text-gray-600 mb-4">
                  Proteksi khusus untuk kendaraan listrik. Mencakup baterai & risiko kelistrikan.
                </p>
                <span className="text-cyan-600 font-semibold text-sm">
                  Lihat Detail Asuransi EV →
                </span>
              </Link>

              {/* Produk Lain */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-xl font-bold mb-3 text-blue-700">Asuransi Mobil Pribadi</h3>
                <p className="text-gray-600 mb-4">
                  Pilihan paket All Risk atau TLO untuk mobil pribadi Anda di Jogja.
                </p>
                <a href={waLink} className="text-blue-600 font-semibold text-sm">Tanya Premi via WA →</a>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section (Actual Content for Schema) */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Pertanyaan Umum</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-bold text-gray-800 mb-2">Apakah Premi All Risk jauh lebih mahal dari TLO?</h3>
                <p className="text-gray-600">Ya, premi All Risk memang lebih tinggi karena jaminannya jauh lebih luas. Namun, dengan risiko lalu lintas Jogja yang padat, All Risk seringkali lebih worth it dalam jangka panjang.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-bold text-gray-800 mb-2">Apakah bisa klaim di bengkel langganan sendiri?</h3>
                <p className="text-gray-600">Bisa, tergantung polis yang dipilih. Ada polis yang membatasi ke bengkel rekanan, ada juga yang memberikan kebebasan pilih bengkel (biasanya dengan penyesuaian premi). Saya akan bantu jelaskan opsi ini.</p>
              </div>
              
              {/* Internal Link ke Halaman Lain jika relevan */}
              <p className="text-center text-gray-500 text-sm mt-8">
                Butuh proteksi rumah? Cek halaman <Link href="/asuransi-property" className="text-emerald-600 underline">Asuransi Property</Link> kami.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-blue-900 text-white py-16 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Butuh Bantuan Memilih Polis yang Tepat?</h2>
          <p className="mb-8 opacity-90">Saya siap membantu kalkulasi premi dan menjelaskan manfaat polis secara detail.</p>
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
          >
            📥 Minta Penawaran via WhatsApp
          </a>
        </section>

      </div>
    </>
  );
};

export default VehicleInsurancePage;
