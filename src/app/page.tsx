import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HEADER */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">
            Asuransi Jogja
          </h1>

          <nav className="flex gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/asuransi-motor-vehicle">Motor Vehicle</Link>
            <Link href="/asuransi-properti">Property</Link>
            <Link href="/asuransi-engineering">Engineering</Link>
            <Link href="/surety-bond">Surety Bond</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-4xl font-bold leading-tight">
              Konsultan Asuransi Jogja
            </h2>

            <p className="mt-6 text-blue-100">
              Solusi perlindungan kendaraan, properti,
              proyek konstruksi, dan bisnis Anda
              di Yogyakarta dan seluruh Indonesia.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://wa.me/628123456789"
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold"
              >
                Konsultasi Gratis
              </a>

              <Link
                href="/produk-asuransi"
                className="border border-white px-6 py-3 rounded-lg"
              >
                Lihat Produk
              </Link>

            </div>
          </div>

          <div>
            <img
              src="/hero-insurance.jpg"
              alt="Asuransi Jogja"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

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

      {/* PRODUK */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Produk Asuransi
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            <Link
              href="/asuransi-motor-vehicle"
              className="border p-6 rounded-xl hover:shadow"
            >
              <h3 className="font-semibold text-lg">
                Motor Vehicle Insurance
              </h3>
              <p className="text-gray-600 mt-2">
                Perlindungan mobil, alat berat,
                excavator, bulldozer, dan crane.
              </p>
            </Link>

            <Link
              href="/asuransi-properti"
              className="border p-6 rounded-xl hover:shadow"
            >
              <h3 className="font-semibold text-lg">
                Property Insurance
              </h3>
              <p className="text-gray-600 mt-2">
                Perlindungan rumah, gedung,
                gudang, dan aset properti.
              </p>
            </Link>

            <Link
              href="/asuransi-engineering"
              className="border p-6 rounded-xl hover:shadow"
            >
              <h3 className="font-semibold text-lg">
                Engineering Insurance
              </h3>
              <p className="text-gray-600 mt-2">
                Perlindungan proyek konstruksi
                dan pekerjaan teknik.
              </p>
            </Link>

            <Link
              href="/asuransi-liability"
              className="border p-6 rounded-xl hover:shadow"
            >
              <h3 className="font-semibold text-lg">
                Liability Insurance
              </h3>
              <p className="text-gray-600 mt-2">
                Perlindungan tanggung jawab hukum
                terhadap pihak ketiga.
              </p>
            </Link>

            <Link
              href="/surety-bond"
              className="border p-6 rounded-xl hover:shadow"
            >
              <h3 className="font-semibold text-lg">
                Surety Bond
              </h3>
              <p className="text-gray-600 mt-2">
                Jaminan proyek untuk tender
                dan pelaksanaan pekerjaan.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <img
            src="/konsultan-asuransi.jpg"
            alt="Konsultan Asuransi Jogja"
            className="rounded-xl"
          />

          <div>

            <h2 className="text-3xl font-bold">
              Konsultan Asuransi Profesional
            </h2>

            <p className="mt-6 text-gray-600">
              Kami membantu individu dan perusahaan
              mendapatkan perlindungan asuransi terbaik
              dari berbagai perusahaan asuransi terpercaya.
            </p>

            <p className="mt-4 text-gray-600">
              Dengan pengalaman lebih dari 10 tahun,
              kami melayani asuransi kendaraan,
              properti, dan proyek konstruksi.
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

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="font-bold text-white">
              Asuransi Jogja
            </h3>
            <p className="mt-3 text-sm">
              Konsultan asuransi kendaraan,
              properti, bisnis, dan proyek
              di Yogyakarta.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">
              Produk
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/asuransi-motor-vehicle">Motor Vehicle</Link></li>
              <li><Link href="/asuransi-properti">Property</Link></li>
              <li><Link href="/asuransi-engineering">Engineering</Link></li>
              <li><Link href="/surety-bond">Surety Bond</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white">
              Kontak
            </h3>
            <p className="mt-3 text-sm">
              WhatsApp: 0812-3456-789
            </p>
          </div>

        </div>
      </footer>

    </main>
  );
}
