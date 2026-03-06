import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Asuransi Liability & Tanggung Jawab Publik Jogja',
  description: 'Lindungi bisnis Anda dari tuntutan hukum pihak ketiga. Jasa Asuransi Public Liability, Product Liability, dan Professional Indemnity di Jogja. Konsultan ahli 10 tahun.',
};

const LiabilityInsurancePage = () => {
  // Konfigurasi Nomor WA
  const waNumber = "628131556592";
  const waMessage = "Halo, saya mau tanya soal Asuransi Tanggung Jawab (Liability) untuk usaha saya di Jogja.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-700 to-gray-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Asuransi Tanggung Jawab (Liability) di Jogja
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Lindungi bisnis Anda dari risiko gugatan hukum dan kerugian pihak ketiga. Solusi aman untuk Hotel, Restoran, Pabrik, dan Penyedia Jasa.
          </p>
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
          >
            ⚖️ Konsultasi Risiko Bisnis
          </a>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-slate-500">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Proteksi Bisnis dari Risiko Hukum</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sebagai pemilik usaha, risiko "kecelakaan orang lain" di tempat Anda (slip & fall, keracunan makanan, kerusakan properti klien) bisa terjadi kapan saja. Tanpa Asuransi Liability, biaya ganti rugi dan pengacara bisa membengkak.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan <strong>pengalaman lebih dari 10 tahun di asuransi kerugian</strong>, saya akan membantu mengidentifikasi risiko hukum bisnis Anda dan menyusun skema perlindungan yang tepat.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Jenis Perlindungan Tanggung Jawab</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Product 1: Public Liability - Highlighted */}
            <div className="border-2 border-slate-500 rounded-lg p-6 bg-slate-50 hover:shadow-xl transition duration-300 relative">
              <span className="absolute top-0 right-0 bg-slate-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">WAJIB USAHA</span>
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-bold mb-3 text-slate-700">Public Liability (Tanggung Jawab Publik)</h3>
              <p className="text-gray-600 mb-4">Perlindungan dari tuntutan pihak ketiga atas kerusakan harta benda atau cedera tubuh.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Cocok untuk: Hotel, Restoran, Mall, Sekolah, Gedung Perkantoran.</li>
                <li>Contoh: Tamu hotel terpeleset di kamar mandi, pengunjung restoran keracunan.</li>
              </ul>
            </div>

            {/* Product 2: Product Liability */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-3 text-slate-700">Product Liability (Tanggung Jawab Produk)</h3>
              <p className="text-gray-600 mb-4">Jaminan kerugian akibat produk yang Anda jual cacat/berbahaya.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Cocok untuk: Produsen makanan, farmasi, elektronik.</li>
                <li>Contoh: Makanan kadaluarsa terjual, produk rusak melukai konsumen.</li>
              </ul>
            </div>

            {/* Product 3: Professional Indemnity */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold mb-3 text-slate-700">Professional Indemnity (Tanggung Jawab Profesional)</h3>
              <p className="text-gray-600 mb-4">Perlindungan atas kelalaian profesional dalam memberikan jasa.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Cocok untuk: Dokter, Konsultan, Arsitek, Akuntan, Pengacara.</li>
                <li>Contoh: Kesalahan desain arsitek menyebabkan bangunan retak.</li>
              </ul>
            </div>

             {/* Product 4: Workmen's Compensation */}
             <div className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">👷</div>
              <h3 className="text-xl font-bold mb-3 text-slate-700">Workmen's Compensation (PA Karyawan)</h3>
              <p className="text-gray-600 mb-4">Perlindungan tanggung jawab majikan terhadap karyawan akibat kecelakaan kerja.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Wajib untuk: Pabrik, konstruksi, dan usaha dengan tenaga kerja kasar.</li>
                <li>Cover: Biaya pengobatan, cacat, hingga meninggal dunia.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Pertanyaan Seputar Liability</h2>
          
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Apakah Usaha Kecil/Warung perlu Asuransi ini?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Risiko ada di mana saja. Untuk usaha kecil, minimal pertimbangkan <strong>Public Liability</strong> dengan nilai pertanggungan yang lebih kecil. Ini menjaga usaha Anda tidak bangkrut jika terjadi tuntutan besar dari pelanggan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Apakah sudah termasuk biaya pengacara?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ya, sebagian besar polis Liability mencakup <strong>biaya pertahanan hukum (defense costs)</strong> seperti biaya pengacara dan pengadilan, selama dalam batas limit pertanggungan. Saya akan jelaskan detail limitnya saat konsultasi.
              </p>
            </div>

             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Bagaimana jika tuntutan terjadi di tengah jalan?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Polis ini bersifat "Claims Made" atau "Occurrence" (tergantung jenisnya). Intinya, saya sebagai konsultan akan bantu komunikasi dengan *claim adjuster* untuk memastikan klaim tersebut sah dan prosesnya berjalan transparan.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-slate-900 text-white py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Jangan Biarkan Tuntutan Menghancurkan Bisnis Anda</h2>
        <p className="mb-8 opacity-90">Amankan reputasi dan finansial usaha Anda sekarang.</p>
        <a 
          href={waLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
        >
          📥 Minta Penawaran Liability Insurance
        </a>
      </section>

    </div>
  );
};

export default LiabilityInsurancePage;
