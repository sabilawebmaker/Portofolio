import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "2.500.000",
      description: "Perfect for simple landing pages",
      features: [
        "1-3 Halaman Website",
        "Responsive Design",
        "Basic SEO",
        "Contact Form",
        "Free Domain 1 Tahun",
        "Hosting 1 Tahun",
        "Revisi 2x",
      ],
      color: "from-primary to-primary/70",
      popular: false,
    },
    {
      name: "Standard",
      price: "5.000.000",
      description: "Great for business websites",
      features: [
        "5-8 Halaman Website",
        "Responsive Design",
        "Advanced SEO",
        "Contact & Booking Form",
        "Free Domain 1 Tahun",
        "Hosting 1 Tahun",
        "Admin Dashboard",
        "WhatsApp Integration",
        "Revisi 4x",
      ],
      color: "from-secondary to-accent",
      popular: true,
    },
    {
      name: "Premium",
      price: "10.000.000",
      description: "Full-featured web applications",
      features: [
        "10+ Halaman Website",
        "Responsive Design",
        "Premium SEO",
        "Complex Forms",
        "Free Domain 1 Tahun",
        "Premium Hosting 1 Tahun",
        "Advanced Admin Dashboard",
        "Payment Integration",
        "WhatsApp & Email Marketing",
        "Database Management",
        "Revisi Unlimited",
        "6 Bulan Maintenance",
      ],
      color: "from-accent to-secondary",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient mb-4">
            Pesan Website Sekarang
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`cyber-card relative ${
                plan.popular ? "ring-2 ring-primary shadow-2xl" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div
                className={`h-2 rounded-t-lg bg-gradient-to-r ${plan.color} mb-6`}
              />

              <h3 className="text-2xl font-orbitron font-bold text-center mb-2">
                {plan.name}
              </h3>
              <p className="text-center text-muted-foreground text-sm mb-6">
                {plan.description}
              </p>

              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-gradient mb-2">
                  Rp {plan.price}
                </div>
                <p className="text-muted-foreground text-sm">One-time payment</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 transition-opacity group`}
                size="lg"
                asChild
              >
                <a
                  href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan paket ${plan.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Pesan Sekarang
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
