import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      "Nous serons bientôt de retour": "We will be back soon",
      "Nous effectuons des travaux de maintenance pour améliorer votre expérience.":"We carry out maintenance work to improve your experience.",
      "En attendant, vous pouvez nous laisser un message via le formulaire ci-dessous.":"In the meantime, you can leave us a message using the form below.",
      "Merci pour votre patience !":"Thanks for your patience !",
      "Nom et Prénoms":"Name and First Names",
      "Téléphone":"Phone",
      "Objet":"Object",
      "Envoyer":"Send"
    }
  },
  fr: {
    translation: {
      "Nous serons bientôt de retour": "Nous serons bientôt de retour",
      "Nous effectuons des travaux de maintenance pour améliorer votre expérience.":"Nous effectuons des travaux de maintenance pour améliorer votre expérience.",
      "En attendant, vous pouvez nous laisser un message via le formulaire ci-dessous.":"En attendant, vous pouvez nous laisser un message via le formulaire ci-dessous.",
      "Merci pour votre patience !":"Merci pour votre patience !",
      "Nom et Prénoms":"Nom et Prénoms",
      "Téléphone":"Téléphone",
      "Objet":"Objet",
      "Envoyer":"Envoyer"
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "fr",

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;