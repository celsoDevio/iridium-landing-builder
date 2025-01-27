import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

interface SocialMediaProps {
  title: string;
  subtitle: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
}

export const SocialMedia = ({ title, subtitle, socialLinks }: SocialMediaProps) => {
  return (
    <section className="py-20 px-4 bg-secondary text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium inline-block">
            Redes Sociais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6">{title}</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center space-x-8"
        >
          {socialLinks.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-110"
            >
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <Facebook className="w-8 h-8 text-primary" />
              </div>
              <span className="block text-center mt-2 text-sm text-gray-300">Facebook</span>
            </a>
          )}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-110"
            >
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <Instagram className="w-8 h-8 text-primary" />
              </div>
              <span className="block text-center mt-2 text-sm text-gray-300">Instagram</span>
            </a>
          )}
          {socialLinks.youtube && (
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-110"
            >
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <Youtube className="w-8 h-8 text-primary" />
              </div>
              <span className="block text-center mt-2 text-sm text-gray-300">YouTube</span>
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-110"
            >
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <Twitter className="w-8 h-8 text-primary" />
              </div>
              <span className="block text-center mt-2 text-sm text-gray-300">Twitter</span>
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};