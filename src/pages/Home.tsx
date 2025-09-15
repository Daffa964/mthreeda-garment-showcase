import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Award, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-uniforms.jpg";

const Home = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Kualitas Terjamin",
      description: "Menggunakan bahan berkualitas tinggi dengan jahitan rapi dan finishing sempurna."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Pelayanan Profesional", 
      description: "Tim berpengalaman siap membantu dari konsultasi hingga pengiriman."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Tepat Waktu",
      description: "Komitmen pengerjaan sesuai jadwal yang telah disepakati."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Desain Custom",
      description: "Menerima pesanan seragam dengan desain sesuai kebutuhan perusahaan."
    }
  ];

  const stats = [
    { number: "500+", label: "Klien Puas" },
    { number: "15+", label: "Tahun Pengalaman" },
    { number: "50K+", label: "Seragam Diproduksi" },
    { number: "99%", label: "Kepuasan Pelanggan" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold font-poppins text-white mb-6 leading-tight">
                MThreeda Garment
                <span className="block text-2xl lg:text-3xl font-normal text-secondary-light mt-2">
                  Partner Seragam Profesional Anda
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
                Penyedia jasa konveksi terpercaya dengan keunggulan bahan berkualitas, 
                jahitan rapi, dan pelayanan profesional untuk berbagai sektor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="shadow-button group">
                  <Link to="/contact" className="flex items-center">
                    Hubungi Kami
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/catalog">Lihat Katalog</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in">
              <img 
                src={heroImage} 
                alt="Koleksi Seragam Profesional MThreeda Garment" 
                className="w-full rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-foreground mb-4">
              Mengapa Memilih MThreeda Garment?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kepercayaan klien adalah prioritas utama kami dengan komitmen kualitas dan pelayanan terbaik.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold font-poppins mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-6">
              Siap Berpartner dengan Kami?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Konsultasikan kebutuhan seragam perusahaan Anda dengan tim ahli kami. 
              Dapatkan penawaran terbaik dan solusi yang tepat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-button">
                <Link to="/contact" className="flex items-center">
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/products">Lihat Produk Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;