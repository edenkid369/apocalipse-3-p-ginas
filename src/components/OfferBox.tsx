import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Smartphone, MessageCircle, Wind, Palette, Music, BookOpen, XCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const benefits = [
  "A estrutura exata de como a realidade funciona (não teoria, estrutura operacional)",
  "O mecanismo completo que 99% não entende (sem palavrinhas bonitinhas)",
  "Mais de 77 erros brutais que mantêm você na prisão mesmo depois de \"despertar\"",
  "O reconhecimento direto de quem você realmente é (não como conceito, como experiência)",
  "Solução para qualquer área da sua vida (financeira, relacionamentos, saúde.)",
  "Auxílio e orientação espiritual diretamente no botão do app integrando o Whatsapp",
  "Comunidade Espiritual gratuita com Atualizações, Mensagens e Eventos Especiais",
  "Aplicativo Exclusivo direto na tela do seu celular",
];

const specialFeatures = [
  { icon: Wind, text: "FERRAMENTA DE CICLOS DE RESPIRAÇÃO (AMPLIFICADOR DE OXIGÊNIO)" },
  { icon: Music, text: "PLAYER DE MÚSICA AMBIENTE INTEGRADO" },
  { icon: Palette, text: "LEITURA ADAPTATIVA COM CORES VARIADAS" },
];

const notForYou = [
  "Quem quer ficar preso em técnicas, imagens, rituais ou religião",
  "Quem quer continuar buscando infinitamente",
  "Quem quer ficar \"vibrando alto\" e esperando o momento perfeito — o que era pra viver hoje já há muito tempo",
];

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

      {/* Benefits List */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="space-y-3 mb-8"
      >
        {benefits.map((benefit, index) => (
          <p key={index} className="flex items-start gap-3 text-lg">
            <span className="text-neon text-xl">✅</span>
            <span>{benefit}</span>
          </p>
        ))}
      </motion.div>

      {/* Special Features Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
      >
        {specialFeatures.map((feature, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-black via-card to-black border border-neon/40 rounded-xl p-6 text-center shadow-[0_0_20px_rgba(0,255,65,0.15)] hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-all duration-300 hover:scale-[1.02]"
          >
            <feature.icon className="w-10 h-10 text-neon mx-auto mb-4" />
            <p 
              className="text-neon font-bold text-sm tracking-wider leading-tight"
              style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
            >
              {feature.text}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Not For You Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.38 }}
        className="mb-10 p-6 border border-destructive/40 rounded-lg bg-destructive/5"
      >
        <h3 
          className="text-lg md:text-xl font-bold text-destructive mb-4 text-center tracking-wide"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
        >
          ⚠️ ESSE APP NÃO É PRA:
        </h3>
        <div className="space-y-3">
          {notForYou.map((item, index) => (
            <p key={index} className="flex items-start gap-3 text-foreground/80">
              <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
              <span>{item}</span>
            </p>
          ))}
        </div>
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
        <p className="text-foreground/90 text-center leading-relaxed mb-4">
          Isso <strong className="text-foreground">não deveria custar R$ 97</strong>, muito menos ser comparado a cursos de R$ 5 mil. 
          É algo <strong className="text-foreground">visceral</strong>, feito para quem <strong className="text-foreground">parou de fingir</strong> que já é algo. 
          Vou manter esta <strong className="text-gold">condição especial por tempo limitado</strong>, antes de tirar do ar.
        </p>
        <p className="text-foreground/90 text-center leading-relaxed">
          <strong className="text-foreground">Eu não sou GURU ou SUPER HERÓI.</strong> Eu sou alguém que <span className="text-neon font-bold">ACABA com a sua ilusão</span>. 
          Se você não está disposto a pagar <strong className="text-foreground">o preço de um lanche</strong> por isso, 
          desejo sinceramente <strong className="text-gold">boa sorte na sua busca infinita</strong>.
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
        <p className="text-muted-foreground line-through text-2xl md:text-3xl mb-2 text-red-400/70">
          de R$ 186,99
        </p>
        <p 
          className="text-gold font-bold text-2xl md:text-3xl mb-4 tracking-wider animate-pulse"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
        >
          ⚡ POR APENAS:
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
