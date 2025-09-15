import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih atas pesan Anda. Tim kami akan menghubungi Anda segera.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telepon",
      content: "+62 812-3456-7890",
      description: "Senin - Sabtu, 08:00 - 17:00 WIB"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "info@mthreedag.com",
      description: "Respons dalam 24 jam"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Alamat",
      content: "Jl. Raya Industri No. 123",
      description: "Semarang, Jawa Tengah 50264"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Jam Operasional",
      content: "Senin - Sabtu",
      description: "08:00 - 17:00 WIB"
    }
  ];

  const socialLinks = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      name: "WhatsApp",
      handle: "+62 812-3456-7890",
      url: "https://wa.me/6281234567890",
      color: "bg-green-500"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram",
      handle: "@mthreedag_official",
      url: "https://instagram.com/mthreedag_official",
      color: "bg-pink-500"
    }
  ];

  const services = [
    "Konsultasi desain seragam",
    "Survey dan pengukuran",
    "Pembuatan sample",
    "Produksi massal",
    "Quality control",
    "Pengiriman ke seluruh Indonesia"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">Hubungi Kami</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Mari Berdiskusi Tentang Kebutuhan Seragam Anda
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tim ahli kami siap membantu mewujudkan seragam impian perusahaan Anda. 
            Konsultasi gratis dan tanpa komitmen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold font-poppins mb-6">
                Kirim Pesan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nama Lengkap *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Masukkan email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Nomor Telepon *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Nama Perusahaan
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Masukkan nama perusahaan"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Pesan *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Jelaskan kebutuhan seragam Anda (jenis, jumlah, deadline, dll.)"
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full shadow-button group">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-poppins mb-6">
                Informasi Kontak
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                          <p className="font-medium mb-1">{info.content}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold font-poppins mb-4">
                Media Sosial
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={`${social.color} text-white p-3 rounded-lg`}>
                          {social.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">{social.name}</div>
                          <div className="text-sm text-muted-foreground">{social.handle}</div>
                        </div>
                        <Button variant="outline" size="sm">
                          <a href={social.url} target="_blank" rel="noopener noreferrer">
                            Kunjungi
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-gradient-subtle p-12 rounded-2xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-poppins mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Proses lengkap dari konsultasi hingga pengiriman
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <Card className="shadow-elegant overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-primary h-64 flex items-center justify-center text-white">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-secondary-light" />
                <h3 className="text-xl font-bold mb-2">Lokasi Workshop Kami</h3>
                <p className="text-primary-foreground/80">
                  Jl. Raya Industri No. 123, Semarang, Jawa Tengah
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;