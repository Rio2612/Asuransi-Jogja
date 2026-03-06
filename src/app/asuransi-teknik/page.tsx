import { Metadata } from 'next';
import React from 'react';

// Konfigurasi Metadata (SEO) untuk App Router
export const metadata: Metadata = {
  title: 'Asuransi Property & Rumah Jogja | Konsultan Ahli Klaim',
  description: 'Asuransi Rumah, Toko, dan Pabrik di Jogja. Lindungi aset dari kebakaran, banjir, dan gempa. Konsultan berpengalaman 10 tahun siap membantu klaim.',
};

const PropertyInsurancePage = () => {
  // Konfigurasi Nomor WA
  const waNumber = "628131556592";
  const waMessage = "Halo, saya mau tanya soal Asuransi Property/Rumah di Jogja.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Lindungi Properti Impian Anda
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Asuransi Rumah, Toko, dan Pabrik di Jogja. Penanganan klaim profesional oleh ahli berpengalaman 10 tahun.
          </p>
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
          >
            💬 Konsultasi Gratis via WA
          </a>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-emerald-600">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Ahli Asuransi Properti di Jogja</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Membeli asuransi properti itu mudah, tapi saat terjadi bencana (kebakaran/banjir), proses klaim seringkali memakan waktu dan ribet.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan <strong>pengalaman lebih dari 10 tahun di asuransi kerugian</strong>, saya tidak hanya menjual polis. Saya menawarkan jasa pendampingan klaim. Anda titip polis, saya yang urus saat musibah terjadi. Aset Anda terjaga, pikiran Anda tenang.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Jenis Proteksi Properti</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Product 1: Asuransi Kebakaran */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-700">Asuransi Kebakaran</h3>
              <p className="text-gray-600 mb-4">Perlindungan dasar dan wajib bagi setiap pemilik rumah atau bangunan.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Jaminan kerugian akibat kebakaran.</li>
                <li>Kerugian akibat petir dan ledakan.</li>
                <li>Jaminan kehilangan properti karena perbuatan jahat.</li>
              </ul>
            </div>

            {/* Product 2: Property All Risk (PAR) - Highlighted */}
            <div className="border-2 border-emerald-500 rounded-lg p-6 bg-emerald-50 hover:shadow-xl transition duration-300 relative">
              <span className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">REKOMENDASI</span>
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-700">Property All Risk (PAR)</h3>
              <p className="text-gray-600 mb-4">Perlindungan komprehensif "All Risk" untuk rumah & ruko modern.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Mencakup semua risiko kerusakan fisik.</li>
                <li>Bisa perluasan: <strong>Banjir, Gempa Bumi, & Huru-hara</strong>.</li>
                <li>Cocok untuk pemilik rumah kompleks perumahan elite.</li>
              </ul>
            </div>

            {/* Product 3: Industrial All Risk (IAR) */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-700">Industrial All Risk (IAR)</h3>
              <p className="text-gray-600 mb-4">Solusi terintegrasi untuk pabrik dan industri besar di Jogja.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Menggabungkan Property & Machinery Breakdown.</li>
                <li>Menjamin kontinuitas bisnis produksi.</li>
                <li>Survey risiko profesional.</li>
              </ul>
            </div>

             {/* Product 4: Isi Rumah */}
             <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">🛋️</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-700">Asuransi Isi Rumah</h3>
              <p className="text-gray-600 mb-4">Lindungi barang berharga di dalam rumah Anda.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Furniture, elektronik, & perhiasan.</li>
                <li>Ganti rugi kerusakan akibat kebakaran/pencurian.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Pertanyaan Seputar Property</h2>
          
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Apakah Asuransi Property mencakup Gempa Bumi?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Polis standar (Kebakaran) tidak mencakup gempa. Namun, untuk produk <strong>PAR (Property All Risk)</strong>, risiko Gempa Bumi, Tsunami, dan Banjir bisa ditambahkan sebagai perluasan (Extended Coverage). Mengingat Jogja rawa gempa, saya sangat menyarankan perluasan ini.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Bagaimana Cara Menghitung Nilai Pertanggungan?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nilai pertanggungan didasarkan pada <strong>Nilai Pasar Baru (Replacement Value)</strong> bangunan, bukan harga jual rumah (yang termasuk tanah). Saya akan membantu Anda mengkalkulasi nilai ini agar proporsi premi tepat dan menghindari Under Insurance saat klaim.
              </p>
            </div>

             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Saya Punya Kos-kosan, Asuransi Apa yang Cocok?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Untuk kos-kosan, kita bisa gunakan asuransi kebakaran dengan perluasan tanggung jawab publik (Public Liability) jika ada tamu/penyewa yang cidera di area kos. Saya bisa bantu custom paketnya.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-emerald-900 text-white py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Jangan Tunggu Musibah Datang</h2>
        <p className="mb-8 opacity-90">Amankan investasi properti Anda sekarang juga dengan konsultasi ahli.</p>
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
  );
};

export default PropertyInsurancePage;
