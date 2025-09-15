import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-poppins">MThreeda Garment</h3>
            <p className="text-sm text-primary-foreground/80">
              Partner terpercaya untuk kebutuhan seragam profesional dengan kualitas tinggi dan pelayanan terbaik.
            </p>
            <div className="flex space-x-3">
              <Button variant="secondary" size="sm" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="sm" className="p-2">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navigasi</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Beranda
              </Link>
              <Link to="/about" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Tentang Kami
              </Link>
              <Link to="/products" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Produk & Layanan
              </Link>
              <Link to="/catalog" className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Katalog
              </Link>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Produk Kami</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Seragam Pendidikan</p>
              <p>Seragam Kesehatan</p>
              <p>Seragam Industri</p>
              <p>Seragam Keamanan</p>
              <p>Seragam Transportasi</p>
              <p>Seragam Perhotelan</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-secondary" />
                <span>info@mthreedag.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <span>Jl. Raya Industri No. 123<br />Semarang, Jawa Tengah</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 MThreeda Garment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;