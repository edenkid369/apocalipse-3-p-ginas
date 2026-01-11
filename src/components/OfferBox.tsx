import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Smartphone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const OfferBox = () => {
  const [priceRevealed, setPriceRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

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

      {/* Problem Section - Before Price */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="mb-10 p-6 border border-gold/30 rounded-lg bg-black/40"
      >
        <h3 className="text-xl md:text-2xl font-bold text-gold mb-4 text-center">
          MAS TEM UM PROBLEMA
        </h3>
        <p className="text-foreground/90 text-center leading-relaxed">
          Isso não deveria custar R$ 97, muito menos ser comparado a cursos de R$ 5 mil. 
          É algo visceral, feito para quem parou de fingir que já é algo. 
          Vou manter esta condição especial por tempo limitado, antes de tirar do ar. 
          Eu não sou GURU ou SUPER HERÓI. Eu sou alguém que <span className="text-neon font-semibold">ACABA com a sua ilusão</span>. 
          Se você não está disposto a pagar o preço de um lanche por isso, 
          desejo sinceramente boa sorte na sua busca infinita.
        </p>
      </motion.div>

      {/* Timer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mb-6"
      >
        <p className="text-muted-foreground text-sm mb-2">Oferta expira em:</p>
        <div className="flex justify-center gap-2 text-3xl md:text-4xl font-bold text-neon font-mono">
          <span className="bg-black/60 px-3 py-2 rounded">{formatTime(timeLeft.minutes)}</span>
          <span className="animate-pulse">:</span>
          <span className="bg-black/60 px-3 py-2 rounded">{formatTime(timeLeft.seconds)}</span>
        </div>
      </motion.div>

      {/* Price Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45 }}
        className="text-center mb-8"
      >
        <p className="text-muted-foreground line-through text-3xl md:text-4xl mb-4 text-red-400/70">
          R$ 147
        </p>
        
        <AnimatePresence mode="wait">
          {!priceRevealed ? (
            <motion.button
              key="reveal-btn"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setPriceRevealed(true)}
              className="bg-gradient-to-r from-gold/80 to-amber-600/80 text-primary-foreground font-bold text-lg md:text-xl px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:from-gold hover:to-amber-500"
            >
              🔓 REVELAR DESCONTO
            </motion.button>
          ) : (
            <motion.div
              key="price-revealed"
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <p className="text-5xl md:text-6xl font-bold text-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                R$ 47
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                Apenas por tempo limitado
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* CTA Button - Only shows after price reveal */}
      <AnimatePresence>
        {priceRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <a
              href="https://pay.kiwify.com.br/4mr2HVX"
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-glow bg-gradient-to-r from-gold to-amber-500 text-primary-foreground font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-lg transition-all duration-300 hover:scale-105 inline-block text-center"
            >
              RECEBER DESCONTO AGORA
            </a>
          </motion.div>
        )}
      </AnimatePresence>

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
