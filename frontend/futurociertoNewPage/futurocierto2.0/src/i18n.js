/*import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/*i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next) // Enlaza i18next con React
  .init({
    debug: true,
    resources: {
      es: {
        translation: {
          "start_message": "Nadie se ha hecho pobre por dar!",
          "phone": "Telefono",
          "btn_donate": "Donar Ahora",
          "go_back": "Regresar",
          "50peso_message": "Tu solidaridad tranforma vida. 50 pesos para 50 Casas nos ayuda a seguir construyendo viviendas digna",
          "modal_box_title": "Hacer una Donación",
          "bank":"BANCO",
          "account":"CUENTA",
          "currency":"MONEDA",
          "btn_paypal": "Dona con PayPal",
          "btn_close": "Cerrar",
          "cause": "Causa",
          "cause_message": "Nuestra organización benéfica ayuda a aquellas personas que no tienen esperanza.",
          "how": "Como",
          "how_can_help": "¿Puedo ayudar?",
          "text_help": "Juntos podemos construir un mundo mejor. Cada donación, por pequeña que sea, marca una gran diferencia. ¡Únete a nosotros y sé parte del cambio!",
          "follow_social_network": "Siguiendo nuestra redes sociales",
          "volunter": "convitiendote en Voluntario",
          "gift": "Haciendo un regalo",
          "donate": "Donando",
          "collaborators" : "Colaboradores",
          "collaborators_text": "Nuestra organización benéfica ayuda a aquellas personas que no tienen esperanza.",
          "btn_more": "Ver Mas",
          "last_new" : "Utimas noticas y post de educación",
          "last_new_text" : "Cada acto de caridad es un peldaño hacia el cielo",
          "donors_say": "Dicen nuestros Donadores",
          "volunters_thanks": "Estamos realmente orgullosos de nuestros amables",
          "volunters": "voluntarios",
          "utils_link": "Enlaces Utiles",
          "donates": "Donaciones",
          
          

        },
      },
      en: {
        translation: {
          "start_message": "No one has ever gone poor from giving",
    "phone": "Phone",
    "btn_donate": "Donate Now",
    "go_back": "Go Back",
    "50peso_message": "Your solidarity transforms lives. 50 pesos for 50 houses helps us keep building dignified homes.",
    "modal_box_title": "Make a Donation",
    "bank": "BANK",
    "account": "ACCOUNT",
    "currency": "CURRENCY",
    "btn_paypal": "Donate with PayPal",
    "btn_close": "Close",
    "cause": "Cause",
    "cause_message": "Our charitable organization helps those who have lost hope.",
    "how": "How",
    "how_can_help": "Can I help?",
    "text_help": "Together we can build a better world. Every donation, no matter how small, makes a big difference. Join us and be part of the change!",
    "follow_social_network": "By following our social media",
    "volunter": "By becoming a Volunteer",
    "gift": "By giving a gift",
    "donate": "By donating",
    "collaborators": "Collaborators",
    "collaborators_text": "Our charitable organization helps those who have lost hope.",
    "btn_more": "See More",
    "last_new": "Latest news and educational posts",
    "last_new_text": "Every act of charity is a step closer to heaven",
    "donors_say": "What Our Donors Say",
    "volunters_thanks": "We are truly proud of our kind",
    "volunters": "volunteers",
    "utils_link": "Useful Links",
    "donates": "Donations",
        },
      },
    },
    fallbackLng: "es", // Idioma predeterminado
    interpolation: {
      escapeValue: false, // React ya maneja la sanitización
    },
  });

export default i18n;*/

/*import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      es: { translation: { "start_message": "Nadie se ha hecho pobre por dar!","phone":"Telefono:" } },
      en: { translation: { "start_message": "No one has ever gone poor from giving","phone":"Phone:" } },
    },
    fallbackLng: 'es', // Idioma predeterminado si no se detecta uno soportado
    detection: {
      order: ['navigator','querystring', 'cookie', 'localStorage', 'htmlTag'],
      caches: ['cookie', 'localStorage'], // Guardar el idioma detectado
    },
    interpolation: { escapeValue: false },
  });

export default i18n;*/

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      es: {
        translation: {
          "start_message": "Nadie se ha hecho pobre por dar!",
          "phone": "Telefono",
          "btn_donate": "Donar Ahora",
          "go_back": "Regresar",
          "50peso_message": "Tu solidaridad transforma vidas. 50 pesos para 50 Casas nos ayuda a seguir construyendo viviendas dignas",
          "days": "Dias",
          "hours": "Horas",
          "minutes": "Minutos",
          "seconds": "Segundos",
          "howCanHelpText": '"Transforma vidas construyendo hogares para quienes más lo necesitan. Contribuye como voluntario, dona materiales o aporta económicamente para apoyar nuestra misión de brindar un hogar digno a las familias."',
          "modal_box_title": "Hacer una Donación",
          "bank": "BANCO",
          "account": "CUENTA",
          "currency": "MONEDA",
          "btn_paypal": "Dona con PayPal",
          "btn_close": "Cerrar",
          "cause": "Causa",
          "our": 'Nuestra',
          "organitationUnderline": "organización benéfica",
          "cause_message": "ayuda a aquellas personas que no tienen esperanza.",
          "how": "Como",
          "how_can_help": "¿Puedo ayudar?",
          "how_can_help_full": "¿Cómo puedo ayudar?",
          "text_help": "Juntos podemos construir un mundo mejor. Cada donación, por pequeña que sea, marca una gran diferencia. ¡Únete a nosotros y sé parte del cambio!",
          "follow_social_network": "Siguiendo nuestras redes sociales",
          "volunter": "Convirtiéndote en Voluntario",
          "gift": "Haciendo un regalo",
          "donate": "Donando",
          "collaborators": "Colaboradores",
          "collaborators_text": "Nuestra organización benéfica ayuda a aquellas personas que no tienen esperanza.",
          "last_new_title": "Últimas noticia",
          "education_title": "Educación",
          "btn_more": "Ver Más",
          "news":"Noticias",
          "last":"Últimas",
          "last_new": "noticias y posts de educación",
          "last_new_text": "Cada acto de caridad es un peldaño hacia el cielo",
          "What": "Qué",
          "donors_say": "Dicen nuestros Donadores",
          "volunters_thanks": "Estamos realmente orgullosos de nuestros amables",
          "volunters": "voluntarios",
          "utils_link": "Enlaces Útiles",
          "donates": "Donasiones",
          "contact": "Contactanos",
          "whatWeDo": "¿Qué hacemos?",
          "build" : "Construir proyectos de viviendas.",
          "protect" : "Cuidar el medio ambiente a lo largo y ancho de nuestra isla.",
          "create" : "Creación de micro empresas para combatir el desempleo.",
          "house" : "Viviendas Dignas para los pobres.",
          "digitalLern" : "Alfabetización digital.",
          "major" : "Gran colecta anual nacional e internacional.",
          "available": "No hay datos disponibles",
          "home":"Inicio",
          "Published": "Publicada",
          "whoWeAre": "Quienes Somos",
          "textWhoWeAre": "En todo os he enseñado que, trabajando así, se debe ayudar a los necesitados, y recordar las palabras del Señor Jesús, que dijo: Más bienaventurado es dar que recibir",
          "makeDonation": "Hacer una Donación",
          "bank": "BANCO",
          "account": "CUENTA ",
          "currency ": "MONEDA ",
          "donateWithPayPal": "Donar con PayPal",
          "close": "Close",
          "less": "Ver menos",
          "next_event":"Próximo Evento"


          
        },
      },
      en: {
        translation: {
          "start_message": "No one has ever gone poor from giving",
          "phone": "Phone",
          "btn_donate": "Donate Now",
          "go_back": "Go Back",
          "50peso_message": "Your solidarity transforms lives. 50 pesos for 50 houses helps us keep building dignified homes.",
          "days": "Days",
          "hours": "Hours",
          "minutes": "Minutes",
          "seconds": "Seconds",
          "howCanHelpText": '"Change lives by building homes for those in need. Join us as a volunteer, donate materials, or contribute financially to help provide families with a safe and dignified place to call home."',
          "modal_box_title": "Make a Donation",
          "bank": "BANK",
          "account": "ACCOUNT",
          "currency": "CURRENCY",
          "btn_paypal": "Donate with PayPal",
          "btn_close": "Close",
          "cause": "Cause",
          "our": 'Our',
          "organitationUnderline": "charitable organization",
          "cause_message": "helps those who have lost hope.",
          "how": "How",
          "how_can_help": "Can I help?",
          "how_can_help_full": "How can I help?",
          "text_help": "Together we can build a better world. Every donation, no matter how small, makes a big difference. Join us and be part of the change!",
          "follow_social_network": "By following our social media",
          "volunter": "By becoming a Volunteer",
          "gift": "By giving a gift",
          "donate": "By donating",
          "collaborators": "Collaborators",
          "collaborators_text": "Our charitable organization helps those who have lost hope.",
          "last_new_title": "Last new",
          "education_title": "Education",
          "btn_more": "More",
          "news":"News",
          "last":"Last",
          "last_new": "Latest news and educational posts",
          "last_new_text": "Every act of charity is a step closer to heaven",
          "What": "What",
          "donors_say": "Our Donors Say",
          "volunters_thanks": "We are truly proud of our kind",
          "volunters": "volunteers",
          "utils_link": "Useful Links",
          "donates": "Donations",
          "contact": "Contact us",
          "whatWeDo": "What we do?",
          "build" : "Building housing projects.",
          "protect" : "Protecting the environment across our entire island.",
          "create" : "Creating micro-enterprises to combat unemployment.",
          "house" : "Dignified Housing for the Poor.",
          "DigitalLern" : "Digital Literacy.",
          "major" : "Major Annual National and International Fundraiser.",
          "available": "No data available.",
          "home":"Home",
          "Published": "Published",
          "whoWeAre": "Who we are",
          "textWhoWeAre": "I have shown you in every way that by working like this, we must help those in need, and remember the words of the Lord Jesus, who said: 'It is more blessed to give than to receive.",
          "makeDonation": "Make a donation",
          "bank": "BANK",
          "account": "ACCOUNT ",
          "currency ": "CURRENCY ",
          "donateWithPayPal": "Donate with PayPal",
          "close": "Close",
          "less": "Less",
          "next_event":"Next Event"

        
        },
      },
    },
    fallbackLng: 'es', // Idioma predeterminado si no se detecta uno soportado
    detection: {
      order: ['localStorage', 'cookie', 'navigator', 'querystring', 'htmlTag'],
      caches: ['localStorage', 'cookie'], // Guardar el idioma detectado
    },
    interpolation: { escapeValue: false }, // React ya maneja la sanitización
  });

export default i18n;

