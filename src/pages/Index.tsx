import { useEffect, useState } from 'react';
import MatrixRain from '@/components/MatrixRain';
import TypewriterText from '@/components/TypewriterText';
import GlitchDivider from '@/components/GlitchDivider';
import AnimatedSection from '@/components/AnimatedSection';
import OfferBox from '@/components/OfferBox';
import demoVideo from '@/assets/demo-video.mp4';

const Index = () => {
  const [typewriterComplete, setTypewriterComplete] = useState(false);

  // Fallback: garante que o resto do texto aparece mesmo se o typewriter travar
  useEffect(() => {
    if (typewriterComplete) return;
    const t = window.setTimeout(() => setTypewriterComplete(true), 4500);
    return () => window.clearTimeout(t);
  }, [typewriterComplete]);
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MatrixRain />
      
      <main className="relative z-10 px-4 py-12 md:py-20">
        <article className="max-w-3xl mx-auto bg-black/75 backdrop-blur-sm rounded-lg px-6 md:px-12 py-8 md:py-12 text-lg md:text-xl leading-relaxed">
          
          {/* Opening - Typewriter Effect */}
          <header className="mb-12 md:mb-16">
            <h1 className="text-2xl md:text-4xl font-bold text-neon mb-8">
              <TypewriterText 
                text="VOCÊ É 0,5% DA POPULAÇÃO MUNDIAL."
                speed={60}
                onComplete={() => setTypewriterComplete(true)}
              />
            </h1>
          </header>

          <div
            className={`transition-opacity duration-700 ${typewriterComplete ? 'opacity-100' : 'opacity-0'}`}
          >
              <AnimatedSection>
                <p className="mb-6">
                  Eu sei exatamente por que você comentou <span className="text-gold font-semibold">"FIM"</span>.
                </p>
                <p className="mb-6">
                  Se você conheceu a espiritualidade agora, será um grande presente. Mas provavelmente é porque não foi ontem que você começou a buscar. Não é porque você tá começando agora a busca. É porque você já tentou tudo. E nada te deu o que prometeram. E é nobre da sua parte ter a honestidade necessária pra reconhecer isso. Mas você tem a honestidade para entender que <span className="text-neon font-semibold">você criou todo o seu engano?</span> Vou lhe explicar..
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  Você já leu Neville Goddard. Já aplicou SATS. Já repetiu afirmações até sua garganta doer. Já visualizou com emoção, já sentiu como se já tivesse, já vibrou alto, já alinhou chakras, já fez meditação guiada, já estudou Taoismo, Budismo, Kabbalah, Bashar, Abraham Hicks, Joe Dispenza, Hélio Couto, Vadim Zeland. Você conhece os conceitos. Você entende a teoria. Você até teve alguns resultados. Pequenos. Leves. <span className="text-gold font-semibold">Mas nada significativo.</span> Nada que mudasse sua vida de verdade. E o pior: o vazio ainda tá lá. O sofrimento ainda tá presente. E você continua buscando.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <p className="mb-6 text-xl md:text-2xl font-semibold text-neon">
                  Eu sei porque eu era você.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  Aos 16 anos, eu caí no buraco da espiritualidade. Passei no mínimo uns 4 anos lendo, praticando, consumindo tudo. Comprei curso, fiz terapia, fui em retiro, estudei textos sagrados, tentei alquimia, esoterismo, física quântica. Eu acreditei em cada palavra. Eu apliquei com disciplina. Eu tinha fé. E sabe o que eu consegui? Alguns resultados com muito esforço. Algumas coisas que pareciam funcionar por um tempo e depois voltavam. E uma sensação constante de que <span className="text-gold font-semibold">eu tava fazendo algo errado</span>. Porque se tanta gente falava que funcionava, se tantos gurus ensinavam, se tantos livros prometiam, por que comigo não funcionava?
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6 text-xl md:text-2xl font-semibold">
                  Até que um dia, no fundo do poço absoluto, eu entendi.
                </p>
                <p className="mb-6 text-2xl md:text-3xl font-bold text-neon">
                  Não era eu que tava errado. Era tudo que me ensinaram.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  E quando eu percebi isso, minha vida mudou da noite pro dia. Não porque eu encontrei a técnica certa. Não porque eu finalmente acreditei forte o suficiente. Não porque eu vibrei alto o bastante. Mas porque <span className="text-neon font-semibold">eu parei de buscar</span>. Não como uma técnica de desapego. Mas porque foi uma consequência da minha experiência de desgaste. Quando eu parei, tudo que eu sempre quis se manifestou naturalmente. Sem esforço. Sem técnica. Sem sofrimento.
                </p>
                <p className="mb-6">
                  E eu vou te contar exatamente o que eu descobri. Mas antes, você precisa entender uma coisa.
                </p>
              </AnimatedSection>

              <GlitchDivider />

              {/* Section 2 - A Mentira */}
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8">
                  A INDÚSTRIA ESPIRITUAL TE VENDEU UMA MENTIRA
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  O que eles chamam de "consciência" e "vibrar alto" não é consciência. É refinamento de ilusão. É você construindo uma versão mais sofisticada da mesma prisão mental de antes, só que agora com uma estética que parece libertadora. <span className="text-neon font-semibold">Acreditar que você "precisa se proteger de energias negativas" sem saber que você é o PRÓPRIO ATAQUE.</span>
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  Eles te ensinaram que consciência é um estado que você atinge. Que é algo que melhora com técnica, que evolui com prática, que se aprofunda com estudo. E você acreditou. Você mediu seu progresso. Você sentiu que estava evoluindo. Você comparou onde você tava antes com onde você tá agora e sentiu orgulho.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6 text-xl md:text-2xl font-semibold text-gold">
                  Mas consciência não evolui. Consciência não é um estado. Consciência é o que você já é. Sempre foi.
                </p>
                <p className="mb-6">
                  E tudo que você fez até agora foi negar isso. Porque toda técnica pressupõe que você não tem. Toda busca confirma que você não é. Todo esforço valida que você tá longe.
                </p>
                <p className="mb-6">
                  E enquanto você acredita nisso, você manifesta exatamente isso: <span className="text-neon font-semibold">falta</span>. (ou abundância de escassez.)
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  Eu sei que isso dói. Eu sei que você gastou dinheiro, tempo, energia. Eu sei que você acreditou de verdade. Eu sei porque eu também acreditei. Mas a verdade é que <span className="text-gold font-semibold">te venderam a prisão como se fosse a chave</span>. E você comprou. E agora você tá correndo na esteira faz anos, suando, se esforçando, e nunca sai do lugar. Porque a esteira foi feita pra isso.
                </p>
              </AnimatedSection>

              <GlitchDivider />

              {/* Section 3 - 99% */}
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8">
                  POR QUE 99% FRACASSAM (MESMO FAZENDO TUDO CERTO)
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  Existe algo que todos os sistemas espirituais compartilham: a ideia de progresso. Você começa em um ponto A (ignorância, baixa vibração, inconsciência) e progride até um ponto B (iluminação, alta vibração, consciência). É um modelo linear, mensurável, confortável para a mente. Seja através de orações, meditações, técnicas ou qualquer coisa que te estimule uma ideia de progresso.
                </p>
                <p className="mb-6 text-xl font-semibold text-neon">
                  E é completamente falso.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  Um desperto <span className="text-gold font-semibold">REAL</span> NUNCA, repito, NUNCA vai viver uma vida de progresso linear comum. Ele sempre tem uma evolução <span className="text-neon font-semibold">EXPONENCIAL</span>.
                </p>
                <p className="mb-6">
                  Porque consciência não evolui. O que evolui é a ilusão. A forma como você se identifica, os padrões mentais que você carrega, a narrativa que você constrói sobre si mesmo. Tudo isso evolui, melhora, se sofistica. Mas a consciência permanece exatamente igual. Sempre permaneceu.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  Meditação não "melhora a consciência". Afirmação não "eleva a vibração". Visualização não "atrai" nada. O que acontece é que você vai acumulando camadas de ilusões sofisticadas em volta da consciência. E a mente é tão sagaz que sem você perceber ela constrói toda uma persona camuflada. E em algum ponto, <span className="text-gold font-semibold">você confunde aquela sofisticação com consciência real</span>.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  Você sente paz mental mais profunda, estados alterados mais agradáveis, percepções mais refinadas. E acha que está acordado. <span className="text-neon font-semibold">Mas está apenas dormindo um sono mais bonito.</span> E quanto mais refinado você fica, mais difícil é perceber que ainda está dormindo. Porque a ilusão se torna mais confortável, mais plausível, mais "evoluída".
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  E a indústria espiritual lucra com isso. Quanto mais você acredita que consciência é um estado que você precisa alcançar, mais você consome. Mais técnicas, mais cursos, mais comunidade, mais validação de que você tá no caminho certo. É um loop perfeito de negócio e ilusão.
                </p>
                <p className="mb-6 text-xl font-semibold">
                  E 99% das pessoas estão presas ali, fingindo que estão acordadas enquanto dormem cada vez mais profundamente. Agora você está preso no arquétipo do <span className="text-gold">BUSCADOR ESPIRITUAL INFINITO</span>. E é isso que a realidade vai traduzir pra você. Mas agora que você tem a ciência disso, como você pode não falhar?
                </p>
              </AnimatedSection>

              <GlitchDivider />

              {/* Section 4 - A Saída */}
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold text-neon mb-8">
                  EU DESCOBRI A SAÍDA
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  E não foi através de técnica. Não foi através de estudo. Não foi através de evolução. Foi quando tudo que eu construí caiu. Quando eu não aguentava mais nenhuma promessa, nenhum guru, nenhuma técnica. Quando eu clamei pela verdade sentado no chão da minha casa, angustiado, exausto, derrotado.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-8 text-2xl md:text-3xl font-bold text-gold text-center">
                  Eu nunca precisei de nada disso.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  Toda a busca era a prisão. Todo o esforço era a confirmação da falta. Toda a técnica era a negação do que eu sempre fui.
                </p>
                <p className="mb-6">
                  E quando eu parei de negar, quando eu parei de buscar, quando eu simplesmente <span className="text-neon font-semibold">reconheci o que eu sempre fui</span>, tudo mudou. Minha vida virou. Dinheiro, relacionamentos, paz, clareza, inteligência. Tudo que eu tentei "manifestar" por 5 anos apareceu naturalmente em semanas.
                </p>
                <p className="mb-6">
                  Não porque eu mereci. Não porque eu evoluí. Mas porque <span className="text-gold font-semibold">eu parei de validar a falta</span>.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6 italic text-muted-foreground">
                  Algumas pessoas dizem que eu utilizo alguns conceitos que nunca viram na comunidade espiritual dentro do meu perfil e dizem: Onde você aprendeu isso?
                </p>
                <p className="mb-6">
                  E a resposta é que: <span className="text-neon font-semibold">Mesmo que vocês me pedissem muito, eu não iria dizer.</span> Porque eu conheço a mente de alguém que estuda espiritualidade a fundo, e sei que cada narrativa e conceitos simbólicos que são apresentados no caminhos de vocês, são utilizados pelas suas próprias mentes para escravizarem vocês mesmos. Agora se você acha que você precisa ficar ativando um arquétipo ou orando para algum Deus exterior, esse documento não é pra você. O meu trabalho é feito para pessoas honestas que querem viver a vida dos sonhos <span className="text-gold font-semibold">IMEDIATAMENTE</span>. E se você acha que isso é impossível pra você, também pode sair. Eu não ensino nada complicado, eu ensino a sua maior realização através da simplicidade.
                </p>
              </AnimatedSection>

              <GlitchDivider />

              {/* Section 5 - A Oferta */}
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8">
                  E AGORA EU VOU TE MOSTRAR COMO
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  No meu perfil todos os dias tem conteúdo suficiente pra você se realizar. De verdade. Mas eu sei como é difícil ter que percorrer essa jornada sozinho. Eu sei porque eu percorri. E eu sei que você não quer mais 5 anos de busca. Você não quer mais técnicas. Você não quer mais promessas vazias. Você não quer ficar dependendo de horas iguais ou esperança. Você quer <span className="text-neon font-semibold">CERTEZA</span>.
                </p>
                <p className="mb-6">
                  E a certeza é a Verdade. E você quer agora.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  Por isso eu criei algo que vai encerrar essa busca de uma vez por todas. E além dessa revelação, tenho um presente apenas pra quem está aqui.
                </p>
                <p className="mb-6">
                  Não é mais um livro de manifestação criado por CHAT GPT. Não é mais um curso de neurociência. Não é mais uma técnica. É um <span className="text-gold font-semibold">GUIA ABSOLUTO</span> em formato de <span className="text-neon font-semibold">APLICATIVO EXCLUSIVO</span> que contém:
                </p>
              </AnimatedSection>

              {/* Demo Video */}
              <AnimatedSection delay={0.15}>
                <div className="my-8 md:my-12">
                  <p className="text-center text-neon font-semibold text-lg md:text-xl mb-4">
                    VEJA O APLICATIVO EM AÇÃO:
                  </p>
                <div className="relative rounded-lg overflow-hidden border-2 border-neon/30 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
                    <video 
                      src={demoVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto max-h-[70vh] mx-auto"
                    >
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  </div>
                </div>
              </AnimatedSection>

              {/* Offer Box Component */}
              <OfferBox />

              <GlitchDivider />

              {/* Section 6 - Urgência */}
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8">
                  MAS TEM UM PROBLEMA
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6">
                  Eu não sei por quanto tempo vou manter isso disponível. Não porque eu quero criar escassez artificial. Mas porque a profundidade disso não cabe em produto comercial. Isso não é algo que eu deveria vender por R$ 97. Isso é algo que mestres cobram <span className="text-neon font-semibold">R$ 5 mil</span> pra ensinar (E a comunidade PAGA).
                </p>
                <p className="mb-6">
                  Mas eu quero que chegue em quem realmente precisa. Em quem tá exausto. Em quem já tentou tudo. Em quem tá pronto pra parar de fingir.
                </p>
                <p className="mb-6">
                  Então eu tô liberando agora, só pra quem leu até aqui por <span className="text-gold font-semibold text-2xl">R$ 47</span>. Mas só por tempo limitado. Porque em breve eu vou tirar do ar ou aumentar o preço. Não pra criar urgência. Mas porque isso não foi feito pra ser produto.
                </p>
              </AnimatedSection>


              <GlitchDivider />

              {/* Final Section */}
              <AnimatedSection>
                <p className="mb-6">
                  E se você tá lendo isso agora, <span className="text-gold font-semibold">não é coincidência</span>. Você não chegou aqui por acaso. Você comentou "FIM" porque algo dentro de você sabe que tá na hora de parar de buscar.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-6 text-xl font-semibold">
                  Então aqui está a escolha:
                </p>
                <p className="mb-6">
                  Você pode continuar correndo na esteira. Consumindo mais conteúdo. Tentando mais técnicas. Esperando que um dia, magicamente, tudo faça sentido.
                </p>
                <p className="mb-8 text-xl font-semibold text-neon">
                  Ou você pode descer da esteira agora. Reconhecer o que você sempre foi. E encerrar a busca de uma vez por todas. Sair do BUSCADOR INFINITO AGORA.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mb-8 text-lg text-center">
                  Então pega e toca aqui abaixo, que eu já vou enviar o seu login exclusivo diretamente no seu Whatsapp e te <span className="text-gold font-semibold">PARABENIZAR</span> pela sua Nova vida.
                </p>
              </AnimatedSection>

              {/* Final CTA */}
              <AnimatedSection delay={0.1}>
                <div className="text-center mb-12">
                  <a
                    href="#"
                    className="pulse-glow bg-gradient-to-r from-gold to-amber-500 text-primary-foreground font-bold text-xl md:text-2xl px-12 py-6 rounded-lg transition-all duration-300 hover:scale-105 inline-block"
                  >
                    RECEBER DESCONTO AGORA
                  </a>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Pagamento Seguro. Recebe o seu login imediato após confirmação.
                  </p>
                </div>
              </AnimatedSection>

              <GlitchDivider />

              {/* P.S Section */}
              <AnimatedSection>
                <p className="text-foreground text-base leading-relaxed">
                  <span className="text-gold font-bold text-lg">P.S:</span> Mesmo que você não compre agora, fica comigo. No meu perfil tem conteúdo que ninguém mais fala. Conteúdo que vai destruir ilusões, que vai te fazer questionar tudo, que vai te mostrar verdades que a indústria espiritual esconde. Eu não tô aqui pra vender curso. Eu tô aqui pra acabar com a busca. E se você acompanhar, você vai perceber que esse perfil é diferente de tudo que você já viu. <span className="text-neon font-bold">Mas se eu fosse você eu aproveitava esse cupom, porque vai acabar.</span>
                </p>
              </AnimatedSection>

          </div>

        </article>
      </main>
    </div>
  );
};

export default Index;
