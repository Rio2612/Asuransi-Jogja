import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';

export const metadata: Metadata = {
  title: 'Asuransi Mobil Listrik (EV) Jogja | Premi & Klaim Terpercaya',
  description: 'Layanan Asuransi Mobil Listrik di Jogja. Proteksi baterai & kelistrikan. Penjelasan lengkap Rate Premi dan Own Risk (OR) Rp 500.000. Konsultan ahli 10 tahun.',
};

// Schema FAQ untuk Mobil Listrik
const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Berapa Own Risk (OR) untuk Asuransi Mobil Listrik?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Berbeda dengan mobil konvensional, Own Risk (OR) untuk mobil listrik umumnya ditetapkan sebesar Rp 500.000 per kejadian. Ini karena komponen dan teknologi perbaikan yang lebih spesifik."
      }
    },
    {
      "@type": "Question",
      "name": "Apa saja yang ditanggung Asuransi Mobil Listrik?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Asuransi EV menanggung kerusakan pada bodi kendaraan, serta komponen kelistrikan utama seperti Baterai (Li-ion), Inverter, dan Motor Penggerak Listrik. Beberapa polis juga menjamin instalasi charger."
      }
    }
  ]
};

const ElectricVehiclePage = () => {
  const waNumber = "628131556592";
  const waMessage = "Halo, saya mau tanya detail Asuransi Mobil Listrik (EV) di Jogja.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <>
      <Script
        id="faq-schema-ev"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <div className="min-h-screen bg-white text-gray-800 font-sans">
        
        {/* Breadcrumb Internal Link */}
        <div className="bg-gray-100 py-3 px-4 text-sm text-gray-600 border-b">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/asuransi-kendaraan" className="hover:text-blue-600">Asuransi Kendaraan</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Mobil Listrik (EV)</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Asuransi Mobil Listrik (EV) Jogja
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Proteksi khusus untuk kendaraan ramah lingkungan. Menjamin Baterai, Sistem Kelistrikan, dan Charger.
            </p>
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-cyan-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
            >
              ⚡ Minta Penawaran EV
            </a>
          </div>
        </section>

        {/* Edukasi: Kenapa Mobil Listrik Beda? */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Mengapa Mobil Listrik Butuh Perlindungan Khusus?</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Banyak pemilik mobil listrik yang salah kaprah mengasuransikan mobilnya seperti mobil bensin biasa. Padahal, risiko dan nilai komponennya sangat berbeda.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-cyan-500">
                <h3 className="text-xl font-bold mb-3 text-cyan-800">🔋 Risiko Baterai</h3>
                <p className="text-gray-600">
                  Baterai adalah jantung mobil listrik dengan nilai mencapai 40-50% harga mobil. Asuransi standar terkadang membatasi klaim untuk komponen ini. Polis EV kami memastikan baterai terlindungi penuh.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-cyan-500">
                <h3 className="text-xl font-bold mb-3 text-cyan-800">⚡ Risiko Kelistrikan</h3>
                <p className="text-gray-600">
                  Kerusakan pada inverter, motor listrik, atau sistem charging memerlukan teknisi spesialis. Biaya perbaikannya tinggi. Polis ini menjamin biaya perbaikan komponen kelistrikan canggih tersebut.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detail Premi & OR (Penting) */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-8 rounded-r-xl shadow-sm">
              <h2 className="text-2xl font-bold text-cyan-900 mb-6">Ketentuan Premi & Klaim Mobil Listrik</h2>
              
              <div className="space-y-6 text-gray-700">
                <div className="flex items-start">
                  <div className="bg-cyan-200 text-cyan-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-lg">Rate Premi (Batasa Atas)</h4>
                    <p className="text-sm mt-1">Untuk kendaraan listrik, premi dihitung menggunakan <strong>Rate Batas Atas</strong> yang ditetapkan oleh asosiasi asuransi. Ini memastikan cakupan proteksi yang maksimal sesuai nilai kendaraan tinggi.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-200 text-cyan-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-lg">Own Risk (OR) Rp 500.000</h4>
                    <p className="text-sm mt-1">Setiap klaim kerusakan, pemilik menanggung biaya sendiri (<strong>Own Risk</strong>) sebesar <strong>Rp 500.000 per kejadian</strong>. Nominal ini lebih tinggi dari mobil bensin mengingat kompleksitas perbaikan.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-200 text-cyan-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-lg">Pendampingan Klaim</h4>
                    <p className="text-sm mt-1">Saya akan mendampingi Anda saat surveyor memeriksa kerusakan komponen listrik, memastikan tidak ada item yang salah klasifikasi sehingga klaim disetujui dengan adil.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Pertanyaan Seputar Mobil Listrik</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-bold text-gray-800 mb-2">Apakah Premi Asuransi Mobil Listrik Lebih Mahal?</h3>
                <p className="text-gray-600">
                  Cenderung lebih tinggi karena nilai pertanggungan komponen (baterai) yang mahal dan ketersediaan bengkel spesialis yang lebih terbatas. Namun, proteksinya sebanding dengan nilai investasi Anda.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-bold text-gray-800 mb-2">Bagaimana Jika Terjadi Konsleting Saat Charging?</h3>
                <p className="text-gray-600">
                  Polis EV mencakup kerusakan akibat konsleting internal selama proses pengisian daya. Anda cukup membayar OR Rp 500.000, sisanya ditanggung asuransi.
                </p>
              </div>
              
              {/* Internal Link kembali ke Pilar Utama */}
              <p className="text-center text-gray-500 text-sm mt-8">
                Ingin melihat proteksi kendaraan lain? Kembali ke <Link href="/asuransi-kendaraan" className="text-blue-600 underline font-medium">Halaman Utama Asuransi Kendaraan</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-cyan-900 text-white py-16 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Jangan Biarkan Mobil Listrik Anda Tanpa Proteksi</h2>
          <p className="mb-8 opacity-90">Konsultasikan jenis polis EV yang paling tepat untuk Anda.</p>
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
          >
            📥 Chat via WhatsApp
          </a>
        </section>

      </div>
    </>
  );
};

export default ElectricVehiclePage;
