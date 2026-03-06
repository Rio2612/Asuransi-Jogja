import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Asuransi Teknik & Engineering Jogja | Proyek & Mesin',
  description: 'Asuransi CAR, EAR, dan Machinery Breakdown di Jogja. Lindungi proyek konstruksi dan mesin pabrik Anda. Konsultan berpengalaman 10 tahun siap bantu klaim.',
};

const EngineeringInsurancePage = () => {
  // Konfigurasi Nomor WA
  const waNumber = "628131556592";
  const waMessage = "Halo, saya mau tanya soal Asuransi Teknik/Engineering (Proyek/Mesin) di Jogja.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Proteksi Maksimal Proyek & Mesin Anda
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Asuransi Teknik untuk Konstruksi, Pemasangan, dan Kerusakan Mesin. Penanganan klaim teknis oleh ahli berpengalaman 10 tahun.
          </p>
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
          >
            🛠️ Konsultasi Proyek via WA
          </a>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-amber-500">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Butuh Ahli untuk Klaim Teknis?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Asuransi Teknik memiliki klausul yang rumit dan proses klaim yang memerlukan bukti teknis (surveyor, laporan kerusakan). Kesalahan administrasi bisa menyebabkan klaim ditolak.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan <strong>pengalaman lebih dari 10 tahun di asuransi kerugian</strong>, saya memahami betul seluk beluk *policy wording* teknik. Saya siap mendampingi kontraktor dan pabrik di Jogja untuk memastikan proyek dan mesin Anda benar-benar terlindungi.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Solusi Asuransi Teknik</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Product 1: CAR */}
            <div className="border-2 border-amber-500 rounded-lg p-6 bg-amber-50 hover:shadow-xl transition duration-300 relative">
              <span className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">KONTRAKTOR</span>
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3 text-amber-700">Contractor's All Risk (CAR)</h3>
              <p className="text-gray-600 mb-4">Perlindungan menyeluruh untuk proyek konstruksi bangunan, jalan, jembatan, dll.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Kerusakan pekerjaan akibat kecelakaan, kebakaran, pencurian.</li>
                <li>Tanggung jawab hukum terhadap pihak ketiga (Third Party Liability).</li>
                <li>Cocok untuk developer & kontraktor di Jogja.</li>
              </ul>
            </div>

            {/* Product 2: EAR */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-3 text-amber-700">Erection All Risk (EAR)</h3>
              <p className="text-gray-600 mb-4">Asuransi pemasangan mesin dan peralatan pabrik.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Risiko saat tahap instalasi, testing, & commissioning.</li>
                <li>Melindungi kerusakan mesin baru sebelum operasi.</li>
              </ul>
            </div>

            {/* Product 3: Machinery Breakdown */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-3 text-amber-700">Machinery Breakdown (MB)</h3>
              <p className="text-gray-600 mb-4">Asuransi kerusakan mesin untuk pabrik yang sudah beroperasi.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Kerusakan internal: short circuit, overheating, kegagalan mekanis.</li>
                <li>Menjamin kontinuitas produksi pabrik Anda.</li>
              </ul>
            </div>

             {/* Product 4: Electronic Equipment */}
             <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-3 text-amber-700">Electronic Equipment Policy</h3>
              <p className="text-gray-600 mb-4">Perlindungan khusus perangkat elektronik sensitif.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Komputer, server, mesin kasir, CCTV, mesin medis.</li>
                <li>Cover kerusakan listrik & kesalahan operasional.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Pertanyaan Teknis (FAQ)</h2>
          
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Apakah Asuransi CAR mencakup kesalahan desain?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Polis standar biasanya mengecualikan kesalahan desain (*Design Exclusion*). Namun, risiko kerusakan fisik akibat pelaksanaan konstruksi tetap tercover. Penting untuk membaca klausul *Exclusion* dengan teliti, di sinilah saya berperan menjelaskannya.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Apa itu Biaya Perbaikan Darurat (Expediting Expenses)?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dalam Asuransi Engineering, polis bisa diperluas untuk menanggung biaya tambahan seperti lembur kerja atau pengiriman suku cadang pesawat terbang (air freight) demi mempercepat perbaikan mesin. Saya akan bantu Anda memilih perluasan yang tepat.
              </p>
            </div>

             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Saya Kontraktor Kecil, Perlukah Asuransi Ini?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sangat perlu. Banyak proyek pemerintah atau swasta sekarang mewajibkan kontraktor memiliki asuransi CAR. Saya bisa bantu susun skema perlindungan yang sesuai dengan kontrak kerja Anda di Jogja.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-amber-900 text-white py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Proyek & Mesin Anda Aset Berharga</h2>
        <p className="mb-8 opacity-90">Konsultasikan risiko teknis Anda dengan ahlinya sekarang.</p>
        <a 
          href={waLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white text-amber-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
        >
          📥 Minta Penawaran Asuransi Teknik
        </a>
      </section>

    </div>
  );
};

export default EngineeringInsurancePage;
