"use client";

import React from "react";

import { useQuery } from "@tanstack/react-query";
import { IUtilisateursParams } from "../types/utilisateur.type";
import { utilisateursListQueryOption } from "./utilisateur-list.prefetch";
import { toast } from "@heroui/react";

//Hook pour récupérer les utilisateurs
export const useUtilisateursListQuery = (
  utilisateursParamsDTO: IUtilisateursParams
) => {
  const query = useQuery(utilisateursListQueryOption(utilisateursParamsDTO));

  // Gestion des erreurs dans le hook
  React.useEffect(() => {
    if (query.isError && query.error) {
      toast.danger("Erreur lors de la récupération des utilisateurs:", {
        description:
          query.error instanceof Error
            ? query.error.message
            : "Erreur inconnue",
      });
    }
  }, [query]);

  return query;
};
