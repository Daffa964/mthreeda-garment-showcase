import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Shield, Award, Users, Factory } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Kualitas",
      description: "Komitmen menggunakan bahan terbaik dan standar jahitan tinggi untuk setiap produk yang kami hasilkan."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Kepercayaan", 
      description: "Membangun hubungan jangka panjang dengan klien melalui transparansi dan konsistensi kualitas."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Profesionalisme",
      description: "Melayani dengan dedikasi tinggi dari konsultasi, produksi, hingga pengiriman tepat waktu."
    }
  ];

  const milestones = [
    { year: "2008", event: "Berdirinya MThreeda Garment" },
    { year: "2012", event: "Ekspansi ke sektor pendidikan" },
    { year: "2016", event: "Partnership dengan institusi kesehatan" },
    { year: "2020", event: "Digitalisasi layanan dan katalog online" },
    { year: "2024", event: "500+ klien aktif di seluruh Indonesia" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">Tentang Kami</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            MThreeda Garment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sejak 2008, kami telah menjadi mitra terpercaya dalam menyediakan solusi seragam 
            berkualitas tinggi untuk berbagai sektor industri di Indonesia.
          </p>
        </div>

        {/* Company Description */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6 animate-slide-in">
            <h2 className="text-3xl font-bold font-poppins">Siapa Kami</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MThreeda Garment adalah penyedia jasa konveksi terpercaya yang mengkhususkan diri 
              dalam produksi seragam profesional. Dengan pengalaman lebih dari 15 tahun, kami 
              memahami kebutuhan spesifik setiap sektor industri.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Keunggulan kami terletak pada penggunaan bahan berkualitas tinggi, proses jahitan 
              yang rapi dan teliti, serta pelayanan yang profesional dari tahap konsultasi hingga 
              pengiriman produk jadi.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold">500+ Klien</span>
              </div>
              <div className="flex items-center gap-2">
                <Factory className="h-5 w-5 text-primary" />
                <span className="font-semibold">15+ Tahun</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold">ISO Certified</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-poppins">Misi Perusahaan</h2>
            <div className="bg-gradient-primary p-8 rounded-2xl text-white">
              <Target className="h-12 w-12 mb-4 text-secondary-light" />
              <p className="text-lg leading-relaxed">
                Memberikan solusi seragam terbaik untuk berbagai sektor dengan kualitas tinggi 
                dan desain elegan, serta membangun kepercayaan jangka panjang melalui pelayanan 
                yang konsisten dan profesional.
              </p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-4">
              Nilai-Nilai Perusahaan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fondasi yang kuat dalam setiap aspek bisnis kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Milestone penting dalam perjalanan MThreeda Garment
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-6 group">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                  {milestone.year}
                </div>
                <div className="flex-1 p-6 bg-accent rounded-lg">
                  <p className="text-lg font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment */}
        <div className="bg-gradient-subtle p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold font-poppins mb-6">Komitmen Kami</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Kami berkomitmen untuk terus berinovasi dalam teknologi produksi, meningkatkan kualitas layanan, 
            dan memperluas jangkauan untuk melayani lebih banyak klien di seluruh Indonesia. Kepuasan pelanggan 
            adalah prioritas utama dalam setiap aspek bisnis kami.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;