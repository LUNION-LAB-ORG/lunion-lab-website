import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  id: string; // ✅ Ajout de l'id pour la navigation
  title: string;
  color: string;
  logoSrc?: string;
  logoAlt?: string;
  iconComponent?: React.ReactNode;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  color,
  logoSrc,
  logoAlt,
  iconComponent,
  className = "",
}) => {
  return (
    <Link href={`/portfolio/${id}`} className="group">
      <div
        className={`relative flex h-[180px] flex-col overflow-hidden justify-between rounded-t-3xl rounded-br-3xl p-6 ${color} shadow-lg md:h-[220px] lg:h-[180px] ${className} cursor-pointer hover:shadow-xl transition-all`}
      >
        <h2 className="lg:text-md text-white font-semibold md:text-xl">
          {" "}
          Projet{" "}
          <span className="text-md text-white font-semibold md:text-xl">
            {title}
          </span>
        </h2>
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={logoAlt || title}
            width={70}
            height={70}
            className="absolute bottom-5 right-3 rounded-2xl translate-2 translate-y-6 -rotate-15"
          />
        ) : iconComponent ? (
          <div className="absolute bottom-5 right-5 h-[60px] w-[60px] rounded-full bg-white/20 p-2 flex items-center justify-center">
            {iconComponent}
          </div>
        ) : null}
      </div>
    </Link>
  );
};
