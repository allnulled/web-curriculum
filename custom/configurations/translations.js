angular.module("CVApp").config(["$translateProvider", function($translateProvider) {
		const es = {
				"Navegación": "Navegación",
				"Idioma": "Idioma",
				"Inicio": "Inicio",
				"Gracias": "Gracias",
				"Perfil": "Perfil",
				"Código libre": "Código",
				"Estudios": "Estudios",
				"Experiencia": "Experiencia",
				"Objetivos": "Objetivos",
				"Contacto": "Contacto",
				"Cierra": "Cierra",
				"Gracias por pasarte.": "Gracias por pasarte.",
				"Soy un desarrollador web.": "Soy un desarrollador web.",
				"Esto es un carrusel con imágenes y texto en el que me presento.": "Esto es un carrusel con imágenes y texto en el que me presento.",
				"Los animales me caen bien": "Los animales me caen bien",
				"El deporte es importante": "El deporte es importante",
				"Programemos nuestro futuro": "Programemos nuestro futuro",
				"Te invito a navegar por otras pestañas del menú y averiguar más sobre mí.": "Te invito a navegar por otras pestañas del menú y averiguar más sobre mí.",
				"En mi tiempo libre y cuando no tengo empleo, sigo desarrollando software por mi cuenta para la comunidad de Código Abierto.": "En mi tiempo libre y cuando no tengo empleo, sigo desarrollando software por mi cuenta para la comunidad de Código Abierto.",
				"Podrás encontrar mis proyectos de código abierto en:": "Podrás encontrar mis proyectos de código abierto en:",
				///////////////////////////////////
				"Formularios. Eventos. Cross-browser. Responsive. Estilos.": "Formularios. Eventos. Cross-browser. Responsive. Estilos.",
				"Lectura Excels. Generación PDF.": "Lectura Excels. Generación PDF.",
				"Scrum. Equipo de 8 personas. Posibilidad de trabajar desde casa.": "Scrum. Equipo de 8 personas. Posibilidad de trabajar desde casa.",
				"Interfaces. Consumo de servicios web. Mantenimiento.": "Interfaces. Consumo de servicios web. Mantenimiento.",
				"Queries. Mantenimiento.": "Queries. Mantenimiento.",
				"En cliente final.": "En cliente final.",
				"Interfaces. Widgets. Guía de estilos. Migración.": "Interfaces. Widgets. Guía de estilos. Migración.",
				"Servicios web. Trackeo de perfiles de redes sociales. Migración.": "Servicios web. Trackeo de perfiles de redes sociales. Migración.",
				"Canvan. Equipo de 5 personas.": "Canvan. Equipo de 5 personas.",
				"Interfaces. Widgets. Guía de estilos y SEO.": "Interfaces. Widgets. Guía de estilos y SEO.",
				"Servicios web. Consultas BBDD XML.": "Servicios web. Consultas BBDD XML.",
				"Canvan.": "Canvan.",
				"Interfaces. Widgets. Responsive. Servicios web.": "Interfaces. Widgets. Responsive. Servicios web.",
				"Servicios web. Plugins CMS. Temas CMS. Módulos ERP. Consultas. Actualización de datos. Resolución de bugs.": "Servicios web. Plugins CMS. Temas CMS. Módulos ERP. Consultas. Actualización de datos. Resolución de bugs.",
				"Colaboraciones puntuales.": "Colaboraciones puntuales.",
				"Servicios web.": "Servicios web.",
				"Reuniones periódicas en inglés con equipo de Boston, India y China.": "Reuniones periódicas en inglés con equipo de Boston, India y China.",
				"Aplicaciones web responsivas.": "Aplicaciones web responsivas.",
				"Documentación. Colaboración.": "Documentación. Colaboración.",
				"Scrum. Daily scrums en inglés con equipo de Sri Lanka.": "Scrum. Daily scrums en inglés con equipo de Sri Lanka.",
				///////////////////////////////////
				"Mis aspiraciones profesionales por orden de prioridad son:": "Mis aspiraciones profesionales por orden de prioridad son:",
				"Programación web fluída de cliente y servidor.": "Programación web fluída de cliente y servidor.",
				"Node.js es mi elección de back-end.": "Node.js es mi elección de back-end.",
				"React o Angular serían mi elección de front-end.": "React o Angular serían mi elección de front-end.",
				"Testeo, documentación y cobertura suficientes y fluídos.": "Testeo, documentación y cobertura suficientes y fluídos.",
				"Conseguir trabajar desde casa como opción.": "Conseguir trabajar desde casa como opción.",
				"Ir mejorando el sueldo.": "Ir mejorando el sueldo.",
				"Otras prestaciones.": "Otras prestaciones.",
				///////////////////////////////////
				"Desarrollado con": "Desarrollado con",
				"por un desarrollador web apasionado.": "por un desarrollador web apasionado.",
				"Puedes contactar conmigo por:": "Puedes contactar conmigo por:",
		}
		const ca = {
				"Navegación": "Navegació",
				"Idioma": "Idioma",
				"Inicio": "Inici",
				"Gracias": "Gràcies",
				"Perfil": "Perfil",
				"Código libre": "Codi",
				"Estudios": "Estudis",
				"Experiencia": "Experiència",
				"Objetivos": "Objectius",
				"Contacto": "Contacte",
				"Cierra": "Tanca",
				"Gracias por pasarte.": "Gràcies per passar't-hi.",
				"Soy un desarrollador web.": "Sóc un desenvolupador web.",
				"Esto es un carrusel con imágenes y texto en el que me presento.": "Això és un carrusel amb imatges i text en el que em presento.",
				"Los animales me caen bien": "Els animales em cauen bé",
				"El deporte es importante": "L'esport és important",
				"Programemos nuestro futuro": "Programem el nostre futur",
				"Te invito a navegar por otras pestañas del menú y averiguar más sobre mí.": "T'invito a clicar a les altres pestanyes del menú i esbrinar més sobre mi.",
				"En mi tiempo libre y cuando no tengo empleo, sigo desarrollando software por mi cuenta para la comunidad de Código Abierto.": "En el meu temps lliure i quan no tinc feina, continuo desenvolupant software pel meu compte per a la comunitat de Codi Obert.",
				"Podrás encontrar mis proyectos de código abierto en:": "Podràs trobar els meus projectes de codi obert a:",
				///////////////////////////////////
				"Formularios. Eventos. Cross-browser. Responsive. Estilos.": "Formularis. Events. PC, tablets i móbils. Responsiva. Estils.",
				"Lectura Excels. Generación PDF.": "Lectura Excels. Generació PDF.",
				"Scrum. Equipo de 8 personas. Posibilidad de trabajar desde casa.": "Scrum. Equip de 8 persones. Possibilitat de treballar desde casa.",
				"Interfaces. Consumo de servicios web. Mantenimiento.": "Interfícies. Consum de serveis web. Manteniment.",
				"Queries. Mantenimiento.": "Consultes SQL. Manteniment.",
				"En cliente final.": "En client final.",
				"Interfaces. Widgets. Guía de estilos. Migración.": "Interfícies. Widgets. Guia d'estils. Migració.",
				"Servicios web. Trackeo de perfiles de redes sociales. Migración.": "Serveis web. Rastreig de perfils de xarxes socials. Migració.",
				"Canvan. Equipo de 5 personas.": "Canvan. Equip de 5 persones.",
				"Interfaces. Widgets. Guía de estilos y SEO.": "Interfícies. Widgets. Guia d'estils i de posicionament web.",
				"Servicios web. Consultas BBDD XML.": "Serveis web. Consultes BBDD XML.",
				"Canvan.": "Canvan.",
				"Interfaces. Widgets. Responsive. Servicios web.": "Interfícies. Widgets. Responsiva. Serveis web.",
				"Servicios web. Plugins CMS. Temas CMS. Módulos ERP. Consultas. Actualización de datos. Resolución de bugs.": "Serveis web. Plugins CMS. Temes CMS. Mòduls ERP. Temes CMS. Mòduls ERP. Consultes. Actualizació de dades. Resolució de bugs.",
				"Colaboraciones puntuales.": "Colaboracions puntuals.",
				"Servicios web.": "Serveis web.",
				"Reuniones periódicas en inglés con equipo de Boston, India y China.": "Reunions periòdiques en anglès amb equip de Boston, Índia i Xina.",
				"Aplicaciones web responsivas.": "Aplicacions web responsives.",
				"Documentación. Colaboración.": "Documentació. Colaboració.",
				"Scrum. Daily scrums en inglés con equipo de Sri Lanka.": "Scrum. Daily scrums en anglés amb equip de Sri Lanka.",
				///////////////////////////////////
				"Mis aspiraciones profesionales por orden de prioridad son:": "Les meves aspiracions profesionals per ordre de prioritat són:",
				"Programación web fluída de cliente y servidor.": "Programació web fluida de client i servidor.",
				"Node.js es mi elección de back-end.": "Node.js és la meva elecció pel back-end.",
				"React o Angular serían mi elección de front-end.": "React o Angular serien la meva elecció pel front-end.",
				"Testeo, documentación y cobertura suficientes y fluídos.": "Testeig, documentació i covertura suficients i fluits.",
				"Conseguir trabajar desde casa como opción.": "Aconseguir treballar desde casa com a opció.",
				"Ir mejorando el sueldo.": "Anar millorant el sou.",
				"Otras prestaciones.": "Altres prestacions.",
				///////////////////////////////////
				"Desarrollado con": "Desenvolupat amb",
				"por un desarrollador web apasionado.": "per un desenvolupador web apassionat.",
				"Puedes contactar conmigo por:": "Pots contactar amb mi per:",
		}
		const en = {
				"Navegación": "Navigation",
				"Idioma": "Language",
				"Inicio": "Home",
				"Gracias": "Thank you",
				"Perfil": "Profile",
				"Código libre": "Code",
				"Estudios": "Studies",
				"Experiencia": "Experience",
				"Objetivos": "Goals",
				"Contacto": "Contact",
				"Cierra": "Close",
				"Gracias por pasarte.": "Thank you for coming.",
				"Soy un desarrollador web.": "I am a web developer.",
				"Esto es un carrusel con imágenes y texto en el que me presento.": "This is a carousel with images and text in which I introduce myself.",
				"Los animales me caen bien": "I feel simpathy towards animals",
				"El deporte es importante": "Sport is important",
				"Programemos nuestro futuro": "Let us program our future",
				"Te invito a navegar por otras pestañas del menú y averiguar más sobre mí.": "I invite you to explore the other tabs and to know more about me.",
				"En mi tiempo libre y cuando no tengo empleo, sigo desarrollando software por mi cuenta para la comunidad de Código Abierto.": "In my spare time and when I do not have a job, I keep developing software on my own for the Open Source community.",
				"Podrás encontrar mis proyectos de código abierto en:": "You can find my open source projects at:",
				///////////////////////////////////
				"Formularios. Eventos. Cross-browser. Responsive. Estilos.": "Forms. Events. PC, tablet i mobile. Responsive. Styles.",
				"Lectura Excels. Generación PDF.": "Excel reading. PDF generation.",
				"Scrum. Equipo de 8 personas. Posibilidad de trabajar desde casa.": "Scrum. Team of 8 people. Chance to work from home.",
				"Interfaces. Consumo de servicios web. Mantenimiento.": "Interfaces. Web service consumption. Maintenance.",
				"Queries. Mantenimiento.": "SQL queries. Maintenance.",
				"En cliente final.": "In final customer.",
				"Interfaces. Widgets. Guía de estilos. Migración.": "Interfaces. Widgets. Style guide. Migration.",
				"Servicios web. Trackeo de perfiles de redes sociales. Migración.": "Web services. Social network profile tracking. Migration.",
				"Canvan. Equipo de 5 personas.": "Canvan. Team of 5 people.",
				"Interfaces. Widgets. Guía de estilos y SEO.": "Interfaces. Widgets. Style guide and SEO.",
				"Servicios web. Consultas BBDD XML.": "Web services. XML queries.",
				"Canvan.": "Canvan.",
				"Interfaces. Widgets. Responsive. Servicios web.": "Interfaces. Widgets. Responsive. Web services.",
				"Servicios web. Plugins CMS. Temas CMS. Módulos ERP. Consultas. Actualización de datos. Resolución de bugs.": "Web services. CMS plugins and themes. ERP modules. Data updating. Bug resolutions.",
				"Colaboraciones puntuales.": "Punctual collaborations.",
				"Servicios web.": "Servicios web.",
				"Reuniones periódicas en inglés con equipo de Boston, India y China.": "Frequent meetings in English with a team located at Boston, India and China.",
				"Aplicaciones web responsivas.": "Responsive web applications.",
				"Documentación. Colaboración.": "Documentation. Colaboration.",
				"Scrum. Daily scrums en inglés con equipo de Sri Lanka.": "Scrum. Daily scrums in English with a team from Sri Lanka.",
				///////////////////////////////////
				"Mis aspiraciones profesionales por orden de prioridad son:": "My professional aspirations in order of priority are:",
				"Programación web fluída de cliente y servidor.": "Fluent client and server web programming.",
				"Node.js es mi elección de back-end.": "Node.js is my election for the back-end.",
				"React o Angular serían mi elección de front-end.": "React or Angular would be my election for the front-end.",
				"Testeo, documentación y cobertura suficientes y fluídos.": "Enough and fluent testing, documenting and covering.",
				"Conseguir trabajar desde casa como opción.": "To be able to work optionally from home.",
				"Ir mejorando el sueldo.": "To go improving my salary.",
				"Otras prestaciones.": "Other benefits.",
				///////////////////////////////////
				"Desarrollado con": "Developed with",
				"por un desarrollador web apasionado.": "by a passionate web developer.",
				"Puedes contactar conmigo por:": "You can get in touch with me by:",
		};
		$translateProvider.useSanitizeValueStrategy('sanitizeParameters')
		$translateProvider.translations("es", es);
		$translateProvider.translations("en", en);
		$translateProvider.translations("ca", ca);
		const lang = navigator.language.toLowerCase();
		if (lang.indexOf("ca") !== -1) {
				$translateProvider.preferredLanguage("ca");
		} else if (lang.indexOf("en") !== -1) {
				$translateProvider.preferredLanguage("en");
		} else if (lang.indexOf("es") !== -1) {
				$translateProvider.preferredLanguage("es");
		} else {
				$translateProvider.preferredLanguage("en");
		}

}]);