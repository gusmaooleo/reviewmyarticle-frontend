import { CongressModalities } from "@/types/congress";


export default function formatModality(mod?: CongressModalities) {
  switch(mod) {
    case "PRESENTIAL":
      return "Presencial";
    case "REMOTE":
      return "Remoto";
    case "SEMI-PRESENTIAL":
      return "Semi-presencial";
    default:
      return "Modalidade não especificada";
  }
}