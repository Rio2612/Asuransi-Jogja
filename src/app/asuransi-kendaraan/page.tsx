import React from 'react';
import Head from 'next/head';

const VehicleInsurancePage = () => {
  // Konfigurasi Nomor WA
  const waNumber = "628131556592";
  const waMessage = "Halo, saya tertarik dengan Asuransi Kendaraan (Mobil/EV) di Jogja. Mohon infonya.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <>
      <Head>
        <title>Konsultan Asuransi Mobil & Listrik Jogja | Ahli Klaim 10 Tahun</title>
        <meta name="description" content="Jasa konsultan asuransi mobil dan mobil listrik di Jogja. Berpengalaman 10 tahun, fokus pendampingan klaim. Premi kompetitif, layanan transparan." />
      </Head>

      <div className="min-h-screen bg-white text-gray-800 font-sans">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Proteksi Kendaraan Anda dengan Ahlinya
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Jual beli polis mudah, didampingi konsultan berpengalaman 10 tahun di industri asuransi kerugian.
            </p>
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
            >
              📞 Chat via WhatsApp
            </a>
          </div>
        </section>

        {/* Why Me Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Kenapa Harus Saya?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hai, saya konsultan asuransi Anda di Jogja. Dengan <strong>pengalaman lebih dari 10 tahun di industri asuransi kerugian</strong>, saya memahami seluk beluk produk dan prosedur klaim yang rumit.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Saya menawarkan layanan berbeda: <strong>Titip Polis, Saya Urus Klaim.</strong> Anda tidak perlu bingung menghadapi prosedur yang ribet. Saat risiko terjadi, saya yang akan membantu koordinasi dari A sampai Z.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Layanan Produk Kami</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Product 1: Mobil Pribadi */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-xl font-bold mb-3 text-blue-700">Asuransi Mobil Pribadi</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>All Risk:</strong> Perlindungan total kerusakan ringan hingga berat & kehilangan.</li>
                  <li><strong>TLO:</strong> Opsi hemat untuk kerusakan berat/kehilangan.</li>
                  <li><strong>Perluasan:</strong> Banjir, gempa bumi, dan kerusuhan.</li>
                </ul>
              </div>

              {/* Product 2: Mobil Listrik (EV) - Highlighted */}
              <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50 hover:shadow-xl transition duration-300 relative">
                <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">TRENDING</span>
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3 text-blue-700">Asuransi Mobil Listrik (EV)</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Perlindungan khusus kendaraan listrik (Electric Vehicle).</li>
                  <li>Mencakup kerusakan baterai & sistem kelistrikan.</li>
                  <li>Jaminan instalasi charger (SPKLU).</li>
                </ul>
              </div>

              {/* Product 3: Armada */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold mb-3 text-blue-700">Asuransi Armada (Fleet)</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Solusi efisien untuk kendaraan operasional perusahaan.</li>
                  <li>Manajemen polis terintegrasi untuk rental & logistik.</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Alur Kerja Kami</h2>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex-1">
                <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-bold mb-2">Konsultasi</h4>
                <p className="text-gray-500 text-sm">Ceritakan kebutuhan via WhatsApp.</p>
              </div>
              <div className="flex-1">
                <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-bold mb-2">Penawaran</h4>
                <p className="text-gray-500 text-sm">Saya carikan polis terbaik dari rekanan ternama.</p>
              </div>
              <div className="flex-1">
                <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-bold mb-2">Proses Klaim</h4>
                <p className="text-gray-500 text-sm">Saat musibah, saya bantu koordinasi survey & bengkel.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Pertanyaan Umum (FAQ)</h2>
            
            <div className="space-y-6">
              
              {/* FAQ Mobil Listrik - Spesifik */}
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Bagaimana Premi Asuransi Mobil Listrik Dihitung?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Untuk mobil listrik, penawaran premi menggunakan <strong>Rate Batas Atas</strong> sesuai standar industri. Namun, terdapat komponen <strong>Own Risk (OR) sebesar Rp 500.000 per Kejadian</strong>. Ini berarti untuk kerusakan ringan, Anda menanggung biaya pertama sebesar 500rb, sisanya ditanggung asuransi. Ini membuat premi tetap kompetitif.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Apakah Bisa Klaim di Bengkel Langganan?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tergantung jenis polis (All Risk Comprehensive). Kami akan bantu jelaskan opsi polis yang memberikan kebebasan memilih bengkel langganan Anda di area Jogja.
                </p>
              </div>

               <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Apakah Harus Datang ke Kantor?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tidak perlu. Semua proses bisa dilakukan secara online via WhatsApp. Saya yang akan memastikan dokumen dan proses klaim Anda berjalan lancar tanpa ribet.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-blue-900 text-white py-16 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Siap Melindungi Mobil Anda?</h2>
          <p className="mb-8 opacity-90">Konsultasikan kebutuhan Anda sekarang, GRATIS!</p>
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg animate-pulse"
          >
            📥 Minta Penawaran via WhatsApp
          </a>
        </section>

      </div>
    </>
  );
};

export default VehicleInsurancePage;
