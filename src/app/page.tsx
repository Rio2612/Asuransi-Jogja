import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white">

      {/* Header */}
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Konsultan Asuransi Jogja
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              Solusi perlindungan kendaraan, properti, proyek konstruksi,
              dan bisnis Anda di Yogyakarta dan seluruh Indonesia.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://wa.me/628123456789"
                className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                Konsultasi Gratis
              </a>

              <Link
                href="/produk-asuransi"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800"
              >
                Lihat Produk
              </Link>
            </div>
          </div>

          <div>
            <img
              src="/hero-insurance.jpg"
              alt="Asuransi Jogja"
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* TRUST SIGNAL */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold text-blue-700">10+</h3>
            <p>Tahun Pengalaman</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-700">500+</h3>
            <p>Klien Terlayani</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-700">20+</h3>
            <p>Produk Asuransi</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-700">24/7</h3>
            <p>Konsultasi WhatsApp</p>
          </div>

        </div>
      </section>

      {/* PRODUK ASURANSI */}
      <section className="py-24">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Produk Asuransi Unggulan
          </h2>

          <p className="text-center mt-4 text-gray-600">
            Pilihan perlindungan lengkap untuk kendaraan, properti,
            bisnis, dan proyek Anda.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            <Link
              href="/asuransi-motor-vehicle"
              className="border rounded-xl p-6 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                Motor Vehicle Insurance
              </h3>
              <p className="mt-3 text-gray-600">
                Perlindungan mobil, alat berat, excavator,
                bulldozer, crane, dan kendaraan operasional.
              </p>
            </Link>

            <Link
              href="/asuransi-properti"
              className="border rounded-xl p-6 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                Property Insurance
              </h3>
              <p className="mt-3 text-gray-600">
                Perlindungan rumah, gedung, gudang,
                dan aset properti dari risiko kerugian.
              </p>
            </Link>

            <Link
              href="/asuransi-engineering"
              className="border rounded-xl p-6 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                Engineering Insurance
              </h3>
              <p className="mt-3 text-gray-600">
                Asuransi proyek konstruksi,
                kontraktor, dan pekerjaan teknik.
              </p>
            </Link>

            <Link
              href="/asuransi-liability"
              className="border rounded-xl p-6 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                Liability Insurance
              </h3>
              <p className="mt-3 text-gray-600">
                Perlindungan tanggung jawab hukum
                terhadap pihak ketiga.
              </p>
            </Link>

            <Link
              href="/surety-bond"
              className="border rounded-xl p-6 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                Surety Bond
              </h3>
              <p className="mt-3 text-gray-600">
                Jaminan proyek untuk tender,
                pelaksanaan, dan pemeliharaan.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* PROBLEM SOLUTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-3xl font-bold">
              Masalah yang Sering Terjadi
            </h2>

            <ul className="mt-6 space-y-4 text-gray-600">
              <li>❌ Klaim asuransi sulit diproses</li>
              <li>❌ Agen tidak responsif</li>
              <li>❌ Produk terlalu banyak dan membingungkan</li>
              <li>❌ Premi tidak transparan</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Solusi dari Konsultan Asuransi Jogja
            </h2>

            <ul className="mt-6 space-y-4 text-gray-600">
              <li>✅ Konsultasi gratis</li>
              <li>✅ Pendampingan klaim</li>
              <li>✅ Pilihan perusahaan terbaik</li>
              <li>✅ Pelayanan personal</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <img
            src="/konsultan-asuransi.jpg"
            alt="Konsultan Asuransi Jogja"
            className="rounded-xl shadow-lg"
          />

          <div>

            <h2 className="text-3xl font-bold">
              Konsultan Asuransi Profesional di Jogja
            </h2>

            <p className="mt-6 text-gray-600">
              Kami membantu individu dan perusahaan mendapatkan
              perlindungan asuransi terbaik dari berbagai perusahaan
              asuransi terpercaya di Indonesia.
            </p>

            <p className="mt-4 text-gray-600">
              Dengan pengalaman lebih dari 10 tahun,
              kami menyediakan solusi asuransi kendaraan,
              properti, proyek konstruksi, dan bisnis.
            </p>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-800 text-white text-center">

        <h2 className="text-3xl font-bold">
          Konsultasikan Kebutuhan Asuransi Anda
        </h2>

        <p className="mt-4 text-blue-100">
          Hubungi kami untuk mendapatkan solusi perlindungan terbaik.
        </p>

        <a
          href="https://wa.me/628123456789"
          className="inline-block mt-8 bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold"
        >
          Hubungi via WhatsApp
        </a>

      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">

          <h2 className="text-3xl font-bold text-center">
            Pertanyaan yang Sering Diajukan
          </h2>

          <div className="mt-10 space-y-6">

            <div>
              <h3 className="font-semibold">
                Berapa biaya asuransi mobil di Jogja?
              </h3>
              <p className="text-gray-600">
                Premi asuransi mobil tergantung jenis kendaraan,
                nilai kendaraan, dan jenis perlindungan.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Apakah konsultasi asuransi gratis?
              </h3>
              <p className="text-gray-600">
                Ya, kami menyediakan konsultasi gratis
                untuk membantu memilih produk yang tepat.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Apakah bisa membantu proses klaim?
              </h3>
              <p className="text-gray-600">
                Kami membantu proses klaim agar lebih cepat
                dan sesuai dengan ketentuan polis.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}
