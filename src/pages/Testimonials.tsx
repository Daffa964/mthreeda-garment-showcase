import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Building, GraduationCap, Heart, Factory } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Wijaya",
      position: "Direktur RS Permata Hati",
      company: "RS Permata Hati Semarang",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Kualitas seragam medis dari MThreeda Garment sangat memuaskan. Bahan yang digunakan nyaman, tahan lama, dan sesuai standar kesehatan. Tim mereka sangat profesional dalam melayani kebutuhan rumah sakit kami.",
      category: "Kesehatan",
      icon: <Heart className="h-5 w-5" />
    },
    {
      name: "Budi Santoso, S.Pd",
      position: "Kepala Sekolah",
      company: "SMA Negeri 3 Semarang", 
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Sudah 3 tahun berlangganan seragam sekolah di MThreeda Garment. Kualitas jahitan rapi, warna tidak mudah pudar, dan harga yang kompetitif. Siswa-siswi kami merasa nyaman menggunakan seragam ini.",
      category: "Pendidikan",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      name: "Agus Prakoso",
      position: "Manager HRD",
      company: "PT Maju Jaya Industries",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Pelayanan yang luar biasa! Dari konsultasi, desain, hingga pengiriman semua berjalan lancar. Seragam safety yang kami pesan sesuai dengan standar K3 dan karyawan merasa aman bekerja.",
      category: "Industri",
      icon: <Factory className="h-5 w-5" />
    },
    {
      name: "Linda Sari",
      position: "General Manager",
      company: "Hotel Grand Semarang",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Desain seragam hotel yang elegan dan profesional. MThreeda Garment memahami kebutuhan industri hospitality kami. Hasil akhir sangat memuaskan dan meningkatkan citra hotel kami.",
      category: "Perhotelan",
      icon: <Building className="h-5 w-5" />
    },
    {
      name: "Rudi Hermawan",
      position: "Security Supervisor",
      company: "PT Secure Solutions",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Seragam security yang berkualitas dengan bahan yang kuat dan tahan lama. Design profesional dan fungsional untuk kebutuhan kerja di lapangan. Sangat recommended!",
      category: "Keamanan",
      icon: <Building className="h-5 w-5" />
    },
    {
      name: "Siti Nurhaliza",
      position: "Owner",
      company: "Warung Nasi Ibu Siti",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Meskipun usaha saya masih kecil, tim MThreeda Garment tetap melayani dengan baik. Seragam chef dan pelayan yang saya pesan berkualitas bagus dan harga terjangkau.",
      category: "UMKM",
      icon: <Building className="h-5 w-5" />
    }
  ];

  const stats = [
    { number: "500+", label: "Klien Puas", description: "Dari berbagai sektor industri" },
    { number: "98%", label: "Repeat Order", description: "Klien yang memesan kembali" },
    { number: "4.9/5", label: "Rating Kepuasan", description: "Berdasarkan survey pelanggan" },
    { number: "15+", label: "Tahun Pengalaman", description: "Melayani kebutuhan seragam" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">Testimoni Klien</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Apa Kata Klien Kami?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kepercayaan dan kepuasan klien adalah bukti nyata komitmen kami 
            dalam memberikan produk dan layanan terbaik.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold font-poppins text-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-6 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-4">
                  {testimonial.icon}
                  <Badge variant="outline" className="text-xs">
                    {testimonial.category}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Satisfaction */}
        <div className="bg-gradient-primary p-12 rounded-2xl text-center text-white mb-16">
          <h2 className="text-3xl font-bold font-poppins mb-6">
            Komitmen Kepuasan Pelanggan
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Setiap testimoni adalah motivasi bagi kami untuk terus memberikan yang terbaik. 
            Kepuasan Anda adalah prioritas utama dalam setiap aspek layanan kami.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">Kualitas Terjamin</div>
              <p className="text-primary-foreground/80 text-sm">
                Standar quality control ketat di setiap tahap produksi
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Layanan 24/7</div>
              <p className="text-primary-foreground/80 text-sm">
                Customer service siap membantu kapan saja
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Garansi Produk</div>
              <p className="text-primary-foreground/80 text-sm">
                Jaminan kualitas dan kepuasan setelah pembelian
              </p>
            </div>
          </div>
        </div>

        {/* Client Categories */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-poppins mb-6">
            Klien dari Berbagai Sektor
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Kami melayani kebutuhan seragam untuk berbagai industri
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Pendidikan", "Kesehatan", "Industri", "Perhotelan", "Keamanan", "UMKM"].map((sector, index) => (
              <Card key={index} className="p-4 text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-2">
                  <p className="font-medium text-sm">{sector}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-subtle p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold font-poppins mb-6">
            Bergabunglah dengan Klien Puas Kami
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rasakan sendiri kualitas produk dan layanan yang telah dipercaya 
            oleh ratusan klien di seluruh Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-button">
              Konsultasi Gratis
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              Lihat Katalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;