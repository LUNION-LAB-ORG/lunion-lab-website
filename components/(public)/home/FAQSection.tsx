"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Section from "@/components/primitives/Section";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQSection() {
    const phoneNumber = "+2250565508686";
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Quels services proposez-vous ",
      answer:
        "Nous offrons une gamme complète de services de transformation numérique, y compris le développement d'applications et de logiciels, la migration vers le Cloud, l'automatisation des processus, la sécurité et la conformité. Nous proposons également des services de marketing digital, de communication d'entreprise, et de production audiovisuelle.",
    },
    {
      id: 2,
      question: "Comment puis-je choisir le package qui convient le mieux à mon entreprise ",
      answer:
        "Nos packages sont conçus pour répondre à différents besoins et budgets. Le package 'Starter' est idéal pour les petites entreprises ou les projets de démarrage, tandis que les packages 'Business' et 'Corporate' sont plus adaptés aux entreprises de taille moyenne à grande avec des besoins plus complexes. N'hésitez pas à nous contacter pour une consultation afin de déterminer quel package répond le mieux à vos besoins spécifiques..",
    },
    {
      id: 3,
      question: "Quels sont les délais de mise en œuvre pour vos services ?",
      answer:
        "Most design requests are completed within 1-3 business days, depending on the complexity. Simple requests like social media graphics may be completed within 24 hours, while more complex projects may take longer.",
    },
    {
      id: 4,
      question: "Comment puis-je entrer en contact avec vous ?",
      answer:
        "Vous pouvez nous contacter via notre formulaire de contact sur le site web, par email à [votre email], ou par téléphone au [votre numéro de téléphone]. Nous serons ravis de répondre à toutes vos questions et de discuter de vos besoins en détail.",
    },
    {
      id: 5,
      question: "Quels types d'entreprises pouvez-vous aider ?",
      answer:
        "Nous travaillons avec des entreprises de toutes tailles et de divers secteurs, y compris le secteur public, industriel, la santé, l'éducation, la banque et l'assurance. Nous adaptons nos solutions en fonction des spécificités de chaque secteur pour répondre au mieux aux défis uniques de nos clients..",
    },
    {
      id: 6,
      question: "Proposez-vous des formations pour les équipes ?",
      answer:
        "Oui, nous proposons des formations pour aider vos équipes à s'adapter aux nouvelles technologies et processus. Ces formations peuvent être personnalisées en fonction de vos besoins et de vos objectifs spécifiques..",
    },
    {
      id: 7,
      question: "Quels sont les moyens de paiement acceptés ?",
      answer:
        " Nous acceptons divers moyens de paiement, y compris les virements bancaires, les cartes de crédit et les paiements en ligne. Pour plus de détails sur les options disponibles, veuillez nous contacter",
    },
  ];

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(292deg, rgba(155, 123, 191, 1) 48%, rgba(21, 12, 31, 1) 82%, rgba(21, 12, 31, 1) 100%)",
      }}
    >
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <div className=""></div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item) => {
            const isOpen = openItems.has(item.id);

            return (
              <div
                key={item.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group transition-all duration-200"
                >
                  <h3 className="text-white text-lg lg:text-xl font-medium pr-8 group-hover:text-purple-200 transition-colors">
                    {item.question}
                  </h3>
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full flex-shrink-0 transition-all duration-300 group-hover:bg-white/20">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-white transition-transform duration-300" />
                    ) : (
                      <Plus className="w-4 h-4 text-white transition-transform duration-300" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-8 pb-6">
                    <div className="h-px bg-white/10 mb-4"></div>
                    <p className="text-purple-100 text-base lg:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-purple-200 text-lg mb-6">
            Vous ne trouvez pas la réponse que vous cherchez ?
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
           
          <Link href={`https://wa.me/${phoneNumber}`}> Contactez-nous</Link>
          </button>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-indigo-400/10 rounded-full blur-lg"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-purple-300/10 rounded-full blur-md"></div>
    </div>
  );
}
