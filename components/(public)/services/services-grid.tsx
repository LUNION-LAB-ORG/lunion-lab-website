import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const ServicesGrids = () => {
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
        "Faites monter vos équipes en puissance. Nos formations pratiques et interactives donnent à vos collaborateurs les compétences qu'il leur faut pour exceller. Stratégie digitale, marketing, design ou gestion de projet : nous transformons vos talents en experts capables de faire décoller votre activité."
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
      <div className="max-w-7xl mx-auto">
        {/* Texte d'intro responsive */}
        <span className="block w-full text-center sm:text-center lg:text-left text-base sm:text-lg lg:text-2xl px-4 sm:px-6 lg:px-0 mb-10">
          Nous sommes une équipe de talents de haut niveau qui fournit des solutions d&apos;entreprise à l&apos;échelle mondiale. Nous évoluons
          avec les progrès technologiques car nous croyons que notre technologie doit devenir votre innovation.
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 border border-lunion-light-gray/30 hover:shadow-lg transition-all duration-300 bg-card">
              <CardContent className="p-0 space-y-6">
                {/* Image */}
                <div className="w-full h-40 bg-gradient-to-br rounded-xl flex items-center justify-end border border-lunion-light-gray/20">
                  <Image src={service.image} alt="" width={200} height={200} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-figtree bg-clip-text bg-gradient-to-r from-purple-600 to-gray-900 text-transparent text-lunion-purple">{service.title}</h3>

                {/* Description */}
                <p className="text-foreground/80 leading-relaxed text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrids;
