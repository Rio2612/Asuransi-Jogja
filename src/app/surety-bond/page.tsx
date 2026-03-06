import { Metadata } from 'next';
import React from 'react';

// Konfigurasi SEO spesifik untuk Surety Bond
export const metadata: Metadata = {
  title: 'Jasa Surety Bond Jogja | Jaminan Proyek & Kontraktor',
  description: 'Layanan penerbitan Surety Bond di Jogja (Bid Bond, Performance Bond, Maintenance Bond). Proses cepat, persyaratan mudah, didampingi konsultan ahli 10 tahun.',
  keywords: ['Surety Bond Jogja', 'Jaminan Proyek Yogyakarta', 'Performance Bond', 'Bank Garansi'], // Menambahkan keyword spesifik
};

const SuretyBondPage = () => {
  // Konfigurasi Nomor WA
  const waNumber = "628131556592";
  const waMessage = "Halo, saya mau tanya soal penerbitan Surety Bond/Jaminan Proyek di Jogja.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Jasa Penerbitan Surety Bond di Jogja
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Solusi jaminan proyek untuk kontraktor dan vendor. Proses cepat, tanpa agunan berat, didampingi ahli asuransi kerugian 10 tahun.
          </p>
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
          >
            📄 Ajukan Surety Bond Sekarang
          </a>
        </div>
      </section>

      {/* Why Me Section - Local SEO Focus */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-indigo-600">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Konsultan Jaminan Proyek Terpercaya di Jogja</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mencari <strong>Surety Bond di Jogja</strong> yang prosesnya cepat dan tidak ribet? Anda berada di tempat yang tepat. Saya menyediakan layanan penerbitan jaminan dari Asuransi Kredit (Surety) ternama.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan <strong>pengalaman lebih dari 10 tahun</strong>, saya memahami kebutuhan紧急 kontraktor. Saya bantu penyiapan dokumen administrasi agar persetujuan dari perusahaan asuransi bisa keluar dalam waktu singkat, sehingga proyek Anda tidak terhambat masalah jaminan.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Jenis Produk Surety Bond</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Product 1: Bid Bond */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">📬</div>
              <h3 className="text-xl font-bold mb-3 text-indigo-700">Bid Bond (Jaminan Penawaran)</h3>
              <p className="text-gray-600 mb-4">Jaminan bagi peserta lelang/tender agar tidak mengundurkan diri.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Diperlukan saat pendaftaran tender di LPSE atau instansi pemerintah.</li>
                <li>Nilai jaminan biasanya 1-3% dari nilai proyek.</li>
              </ul>
            </div>

            {/* Product 2: Performance Bond - Highlighted */}
            <div className="border-2 border-indigo-500 rounded-lg p-6 bg-indigo-50 hover:shadow-xl transition duration-300 relative">
              <span className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">TERPOPULER</span>
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3 text-indigo-700">Performance Bond (Jaminan Pelaksanaan)</h3>
              <p className="text-gray-600 mb-4">Jaminan bahwa pemenang tender akan melaksanakan pekerjaan sesuai kontrak.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Syarat mutlak penandatanganan kontrak (SPPJK).</li>
                <li>Nilai jaminan biasanya 5-10% dari nilai proyek.</li>
              </ul>
            </div>

            {/* Product 3: Advance Payment Bond */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">💵</div>
              <h3 className="text-xl font-bold mb-3 text-indigo-700">Advance Payment Bond (Jaminan Uang Muka)</h3>
              <p className="text-gray-600 mb-4">Jaminan pengembalian uang muka yang diberikan oleh proyek owner.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Digunakan jika kontraktor mendapat termin uang muka.</li>
                <li>Biasanya 10-20% dari nilai kontrak.</li>
              </ul>
            </div>

             {/* Product 4: Maintenance Bond */}
             <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-3 text-indigo-700">Maintenance Bond (Jaminan Pemeliharaan)</h3>
              <p className="text-gray-600 mb-4">Jaminan atas kerusakan/kecacatan pekerjaan selama masa pemeliharaan.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Biasanya berlaku setelah serah terima proyek.</li>
                <li>Nilai jaminan sekitar 5% dari nilai proyek.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section - SEO Critical */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Pertanyaan Seputar Surety Bond</h2>
          
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Apa bedanya Surety Bond dengan Bank Garansi?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fungsinya sama sebagai jaminan, namun <strong>Surety Bond diterbitkan oleh Perusahaan Asuransi</strong>. Prosesnya biasanya lebih cepat, persyaratan agunan (kolateral) lebih ringan dibanding Bank Garansi, dan biaya (biaya jaminan/fee) cenderung lebih kompetitif. Banyak kontraktor di Jogja sekarang beralih ke Surety Bond demi efisiensi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Apa saja dokumen yang diperlukan untuk mengajukan Surety Bond?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dokumen standar meliputi: Dokumen lelang (Undangan/SPJ), Akta Perusahaan, NPWP, Laporan Keuangan (Neraca/Rugi Laba), dan SIUP. Sebagai konsultan, saya akan bantu cek kelengkapan dokumen Anda agar prosesnya *smooth*.
              </p>
            </div>

             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Berapa lama proses penerbitan Surety Bond?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Jika dokumen lengkap, proses penilaian dan penerbitan polis bisa selesai dalam waktu <strong>1-3 hari kerja</strong>. Saya akan koordinasi intensif dengan perusahaan asuransi rekanan untuk memastikan kebutuhan mendesak Anda terpenuhi.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-indigo-900 text-white py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Butuh Jaminan Proyek Cepat & Aman?</h2>
        <p className="mb-8 opacity-90">Konsultasikan kebutuhan proyek Anda dengan ahlinya sekarang.</p>
        <a 
          href={waLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
        >
          📥 Chat WhatsApp untuk Penawaran
        </a>
      </section>

    </div>
  );
};

export default SuretyBondPage;
