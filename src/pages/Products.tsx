import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Heart, HardHat, Shield, Plane, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

import educationImage from "@/assets/education-uniforms.jpg";
import healthcareImage from "@/assets/healthcare-uniforms.jpg";
import industrialImage from "@/assets/industrial-uniforms.jpg";
import securityImage from "@/assets/security-uniforms.jpg";
import transportationImage from "@/assets/transportation-uniforms.jpg";
import hospitalityImage from "@/assets/hospitality-uniforms.jpg";

const Products = () => {
  const productCategories = [
    {
      id: "education",
      title: "Seragam Pendidikan",
      description: "Seragam sekolah, kampus, dan institusi pendidikan dengan desain modern dan bahan berkualitas.",
      image: educationImage,
      icon: <GraduationCap className="h-6 w-6" />,
      features: ["Bahan cotton combed", "Warna tidak luntur", "Nyaman digunakan", "Desain sesuai standar"],
      products: ["Seragam SD/SMP/SMA", "Seragam Mahasiswa", "Seragam Dosen & Guru", "Seragam Pramuka"]
    },
    {
      id: "healthcare",
      title: "Seragam Kesehatan", 
      description: "Seragam medis untuk rumah sakit, klinik, dan fasilitas kesehatan lainnya.",
      image: healthcareImage,
      icon: <Heart className="h-6 w-6" />,
      features: ["Anti-bakteri", "Mudah dicuci", "Tahan lama", "Standar medis"],
      products: ["Seragam Dokter", "Seragam Perawat", "Seragam Bidan", "Seragam Lab"]
    },
    {
      id: "industrial",
      title: "Seragam Industri & Proyek",
      description: "Seragam kerja untuk industri, pabrik, dan proyek konstruksi dengan standar keselamatan tinggi.",
      image: industrialImage,
      icon: <HardHat className="h-6 w-6" />,
      features: ["High-vis safety", "Tahan api", "Perlindungan maksimal", "Sertifikasi K3"],
      products: ["Wearpack", "Seragam Safety", "Coverall", "Seragam Teknisi"]
    },
    {
      id: "security",
      title: "Seragam Militer & Keamanan",
      description: "Seragam untuk personel keamanan, militer, dan penegak hukum.",
      image: securityImage,
      icon: <Shield className="h-6 w-6" />,
      features: ["Bahan tactical", "Tahan robek", "Fungsional", "Standar militer"],
      products: ["Seragam Security", "Seragam Polisi", "Seragam TNI", "Seragam Satpam"]
    },
    {
      id: "transportation",
      title: "Seragam Transportasi & Jasa",
      description: "Seragam untuk sektor transportasi, logistik, dan jasa pelayanan publik.",
      image: transportationImage,
      icon: <Plane className="h-6 w-6" />,
      features: ["Professional look", "Breathable fabric", "Easy care", "Corporate identity"],
      products: ["Seragam Pilot", "Seragam Masinis", "Seragam Driver", "Seragam Kurir"]
    },
    {
      id: "hospitality",
      title: "Seragam Hotel & Pariwisata",
      description: "Seragam elegan untuk industri perhotelan, restoran, dan pariwisata.",
      image: hospitalityImage,
      icon: <UtensilsCrossed className="h-6 w-6" />,
      features: ["Elegant design", "Stain resistant", "Comfortable fit", "Professional appeal"],
      products: ["Seragam Chef", "Seragam Waiter", "Seragam Housekeeping", "Seragam Reception"]
    }
  ];

  const otherProducts = [
    "T-Shirt Custom",
    "Polo Shirt",
    "Jaket Korporat", 
    "Topi & Caps",
    "Masker Custom",
    "Kemeja Formal",
    "Merchandise Perusahaan",
    "Aksesoris Uniform"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">Produk & Layanan</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Solusi Seragam Profesional
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kami melayani berbagai kebutuhan seragam untuk semua sektor industri 
            dengan kualitas terbaik dan desain yang profesional.
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-20 mb-20">
          {productCategories.map((category, index) => (
            <div key={category.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3 text-primary">
                  {category.icon}
                  <Badge variant="outline">{category.title}</Badge>
                </div>
                <h2 className="text-3xl font-bold font-poppins">{category.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Keunggulan Produk:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Jenis Produk:</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product, idx) => (
                      <Badge key={idx} variant="secondary">{product}</Badge>
                    ))}
                  </div>
                </div>

                <Button className="group">
                  <Link to="/contact" className="flex items-center">
                    Konsultasi Produk
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Card className="overflow-hidden shadow-elegant hover:shadow-card transition-all duration-300">
                  <img 
                    src={category.image} 
                    alt={`${category.title} - MThreeda Garment`}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Other Products */}
        <div className="bg-gradient-subtle p-12 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-poppins mb-4">Produk Lainnya</h2>
            <p className="text-lg text-muted-foreground">
              Selain seragam, kami juga menyediakan berbagai produk fashion korporat lainnya
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {otherProducts.map((product, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4">
                  <p className="font-medium">{product}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="shadow-button">
              <Link to="/catalog" className="flex items-center">
                Lihat Katalog Lengkap
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold font-poppins mb-6">
            Tidak Menemukan Yang Anda Cari?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kami menerima pesanan custom sesuai dengan kebutuhan spesifik perusahaan Anda. 
            Konsultasikan kebutuhan seragam Anda dengan tim ahli kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-button">
              <Link to="/contact" className="flex items-center">
                Konsultasi Custom
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link to="/testimonials">Lihat Testimoni</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
