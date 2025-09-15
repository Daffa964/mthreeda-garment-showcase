import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, FileText, Image, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Catalog = () => {
  const catalogSections = [
    {
      title: "Katalog Seragam Pendidikan",
      description: "Koleksi lengkap seragam sekolah dan institusi pendidikan",
      pages: "24 halaman",
      items: "150+ desain",
      preview: "/api/placeholder/300/400"
    },
    {
      title: "Katalog Seragam Kesehatan",
      description: "Seragam medis dan paramedis dengan standar internasional",
      pages: "18 halaman", 
      items: "85+ desain",
      preview: "/api/placeholder/300/400"
    },
    {
      title: "Katalog Seragam Industri",
      description: "Seragam kerja dan safety wear untuk berbagai industri",
      pages: "32 halaman",
      items: "200+ desain",
      preview: "/api/placeholder/300/400"
    },
    {
      title: "Katalog Seragam Korporat",
      description: "Seragam formal untuk kantor dan institusi pemerintah",
      pages: "28 halaman",
      items: "120+ desain", 
      preview: "/api/placeholder/300/400"
    }
  ];

  const features = [
    "Spesifikasi bahan lengkap",
    "Panduan ukuran detail",
    "Pilihan warna tersedia",
    "Estimasi harga",
    "Waktu pengerjaan",
    "Minimum order quantity"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">Katalog Produk</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Katalog Digital MThreeda Garment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jelajahi koleksi lengkap seragam profesional kami melalui katalog digital 
            yang informatif dan mudah digunakan.
          </p>
        </div>

        {/* Main Catalog Download */}
        <div className="bg-gradient-primary p-12 rounded-2xl text-center text-white mb-16">
          <FileText className="h-16 w-16 mx-auto mb-6 text-secondary-light" />
          <h2 className="text-3xl font-bold font-poppins mb-4">
            E-Book Katalog Lengkap 2024
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Download katalog digital lengkap kami yang berisi semua produk seragam 
            dengan spesifikasi detail, panduan ukuran, dan informasi harga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-button group">
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download PDF (12.5 MB)
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Eye className="mr-2 h-5 w-5" />
              Preview Online
            </Button>
          </div>
        </div>

        {/* Catalog Sections */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-4">
              Katalog Per Kategori
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Akses katalog spesifik sesuai kebutuhan sektor industri Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {catalogSections.map((catalog, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="relative bg-gradient-subtle h-48 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{catalog.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{catalog.description}</p>
                  <div className="flex justify-between text-xs text-muted-foreground mb-4">
                    <span>{catalog.pages}</span>
                    <span>{catalog.items}</span>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-poppins">
              Apa Yang Ada di Katalog Kami?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Katalog MThreeda Garment dirancang untuk memberikan informasi lengkap 
              yang Anda butuhkan dalam memilih seragam yang tepat untuk organisasi Anda.
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-accent p-8 rounded-2xl">
            <Search className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4">Cari Produk Spesifik?</h3>
            <p className="text-muted-foreground mb-6">
              Tidak menemukan produk yang Anda cari di katalog? Kami melayani 
              pesanan custom sesuai kebutuhan Anda.
            </p>
            <Button className="w-full">
              <Link to="/contact">Konsultasi Custom Design</Link>
            </Button>
          </div>
        </div>

        {/* How to Order */}
        <div className="bg-gradient-subtle p-12 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Cara Memesan
            </h2>
            <p className="text-lg text-muted-foreground">
              Proses pemesanan yang mudah dan transparan
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Pilih Produk</h3>
              <p className="text-sm text-muted-foreground">Temukan seragam yang sesuai di katalog</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Konsultasi</h3>
              <p className="text-sm text-muted-foreground">Diskusi detail kebutuhan dengan tim kami</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Quotation</h3>
              <p className="text-sm text-muted-foreground">Terima penawaran harga dan timeline</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Produksi</h3>
              <p className="text-sm text-muted-foreground">Proses produksi dan pengiriman</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="shadow-button">
              <Link to="/contact" className="flex items-center">
                Mulai Konsultasi
                <Search className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;