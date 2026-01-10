import { motion } from 'framer-motion';
import { Shield, Smartphone, MessageCircle } from 'lucide-react';

const OfferBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="offer-box rounded-lg p-8 md:p-12 mt-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-3xl font-bold text-center mb-8"
      >
        <span className="text-gold">"A Realidade da Convicção Absoluta"</span>
        <br />
        <span className="text-foreground mt-2 block text-xl md:text-2xl">
          O Apocalipse de 3 Páginas
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="space-y-4 mb-8 text-lg"
      >
        <p className="flex items-start gap-3">
          <span className="text-neon text-xl">✅</span>
          <span>A estrutura exata de como a realidade funciona (não teoria, estrutura operacional)</span>
        </p>
        <p className="flex items-start gap-3">
          <span className="text-neon text-xl">✅</span>
          <span>O mecanismo completo que 99% não entende (sem palavrinhas bonitinhas)</span>
        </p>
        <p className="flex items-start gap-3">
          <span className="text-neon text-xl">✅</span>
          <span>Mais de 77 erros brutais que mantêm você na prisão mesmo depois de "despertar"</span>
        </p>
        <p className="flex items-start gap-3">
          <span className="text-neon text-xl">✅</span>
          <span>O reconhecimento direto de quem você realmente é (não como conceito, como experiência)</span>
        </p>
        <p className="flex items-start gap-3">
          <span className="text-neon text-xl">✅</span>
          <span>Solução para qualquer área da sua vida (financeira, relacionamentos, saúde.)</span>
        </p>
        <p className="flex items-start gap-3">
          <span className="text-neon text-xl">✅</span>
          <span>Auxílio e orientação espiritual diretamente no botão do app integrando o Whatsapp</span>
        </p>
        <p className="flex items-start gap-3">
          <span className="text-neon text-xl">✅</span>
          <span>Comunidade Espiritual gratuita com Atualizações, Mensagens e Eventos Especiais</span>
        </p>
        <p className="flex items-start gap-3">
          <span className="text-neon text-xl">✅</span>
          <span>Aplicativo Exclusivo direto na tela do seu celular</span>
        </p>
      </motion.div>

      {/* Price Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mb-8"
      >
        <p className="text-muted-foreground line-through text-xl mb-2">De R$ 97</p>
        <p className="text-4xl md:text-5xl font-bold text-gold">
          R$ 47
        </p>
        <p className="text-muted-foreground mt-2 text-sm">
          Apenas por tempo limitado
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex justify-center mb-8"
      >
        <a
          href="#"
          className="pulse-glow bg-gradient-to-r from-gold to-amber-500 text-primary-foreground font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-lg transition-all duration-300 hover:scale-105 inline-block text-center"
        >
          RECEBER DESCONTO AGORA
        </a>
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center gap-6 text-muted-foreground text-sm"
      >
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-neon" />
          <span>Pagamento Seguro</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-neon" />
          <span>Acesso Imediato via WhatsApp</span>
        </div>
        <div className="flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-neon" />
          <span>App Exclusivo</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OfferBox;
