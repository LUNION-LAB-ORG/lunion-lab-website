'use client';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ServicesGrids = () => {
  const phoneNumber = "2250565508686";

  const services = [
    {
      title: "Transformation Digitale",
      image: "/assets/images/services/service1.png",
      description:
        "Passer à la vitesse supérieure avec le digital ! Nous transformons vos défis en opportunités grâce à des solutions technologiques sur mesure. Automatisation, outils connectés, innovation : tout ce qu'il faut pour booster votre performance, accélérer votre croissance et faire briller votre entreprise dans l'univers numérique."
    },
    {
      title: "Formation",
      image: "/assets/images/services/service2.jpg",
      description:
        "Faites monter vos équipes en compétences. Nos formations pratiques et interactives donnent à vos collaborateurs les compétences qu'il leur faut pour exceller. Stratégie digitale, marketing, design ou gestion de projet : nous transformons vos talents en experts capables de faire décoller votre activité."
    },
    {
      title: "UI/UX Design",
      image: "/assets/images/services/service3.png",
      description:
        "Des expériences qui séduisent, des interfaces qui convertissent. Nous créons des produits digitaux qui ne se contentent pas d'être beaux — ils sont pensés pour capter l'attention, faciliter l'usage et générer de vrais résultats. Offrez à vos utilisateurs une expérience mémorable et boostez vos performances en ligne."
    },
    {
      title: "Branding",
      image: "/assets/images/services/service4.png",
      description:
        "Créez une marque qui marque les esprits. Logo percutant, identité visuelle forte, univers cohérent : nous façonnons une image de marque qui attire, inspire et fidélise. Donnez vie à votre vision et laissez une empreinte durable dans l'esprit de vos clients."
    },
    {
      title: "Pitch présentation",
      image: "/assets/images/services/service5.png",
      description:
        "Vendez vos idées en un clin d'œil. Que ce soit pour convaincre des investisseurs, séduire un jury ou décrocher un contrat, nous concevons des présentations à fort impact. Storytelling percutant, design professionnel et messages clairs : vous avez tout pour captiver et convaincre dès la première slide."
    },
    {
      title: "Social Media",
      image: "/assets/images/services/service6.png",
      description:
        "Faites parler de vous sur les réseaux. Nous transformons vos réseaux sociaux en véritables leviers de croissance. Stratégies créatives, contenus engageants, campagnes ciblées : augmentez votre visibilité, créez une communauté fidèle et faites exploser vos résultats en ligne."
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes buttonPulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <span className="block w-full text-center sm:text-center lg:text-left text-base sm:text-lg lg:text-2xl px-4 sm:px-6 lg:px-0 mb-10">
          Nous sommes une équipe de talents de haut niveau qui fournit des solutions d&apos;entreprise à l&apos;échelle mondiale. Nous évoluons
          avec les progrès technologiques car nous croyons que notre technologie doit devenir votre innovation.
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 border border-lunion-light-gray/30 bg-card transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] animate-[fadeInUp_0.9s_ease_forwards]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-0 space-y-6">
                <div className="w-full h-40 bg-gradient-to-br rounded-xl flex items-center justify-end border border-lunion-light-gray/20 transform transition-all duration-500 hover:scale-110">
                  <Image src={service.image} alt="" width={200} height={200} />
                </div>

                <h3 className="text-2xl font-bold font-figtree bg-clip-text bg-gradient-to-r from-purple-600 to-gray-900 text-transparent text-lunion-purple">
                  {service.title}
                </h3>

                <p className="text-foreground/80 leading-relaxed text-sm">
                  {service.description}
                </p>

                <Link
                  href={`https://wa.me/${phoneNumber}?text=Bonjour, je souhaite en savoir plus sur : ${encodeURIComponent(
                    service.title
                  )}`}
                  target="_blank"
                  className="inline-block bg-primary text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-purple-800 animate-[buttonPulse_3s_ease-in-out_infinite]"
                >
                  En savoir plus
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrids;
