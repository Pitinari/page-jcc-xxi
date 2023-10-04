window.schedule = [
  {
    dayId: "1",
    date: "4 de Octubre",
    talks: [
      {
        title: "Install Fest",
        hour: "10:00 - 12:00",
        shortDescription: "Juan Figueredo, Agustín Merino",
        description: "Nueva edición de la Install Fest! Trae tu compu al SUM para que le instalemos Linux!{br}Se va a llevar a cabo en el DCC (Departamento de Ciencias de la Computación)"
      },
      {
        title: "Almuerzo",
        hour: "12:00",
      },
      {
        title: "Acto de apertura",
        hour: "12:30",
        shortDescription: "Autoridades del DCC y la FCEIA",
      },
      {
        title: "Programación Imperativa Verificada con Pulse",
        hour: "13:00",
        shortDescription: "Guido Martínez",
        description:
          "Pulse es un nuevo lenguaje para programación imperativa (incluyendo paralela y concurrente) verificada, construído sobre el lenguaje funcional F*.{br}En esta charla voy a contar brevemente sobre su diseño, implementación, y mostraré algunos pequeños ejemplos de programas verificados.",
      },
      {
        title: "HPC en el sur global",
        hour: "14:00",
        shortDescription: "Nicolás Wolovick",
        description:
          "Aunque el título parece un oxímoron, desde el CCAD-UNC creemos que es posible tener HPC para y por nosotros.{br} En esta charla contaré lo que hacemos con el poquito presupuesto que tenemos, como lo estiramos hasta límites insospechados usando una combinación de prácticas de hardware y de software que para el norte global pasan a ser non-compliant.{br} Mostraré que un enfoque bottom-up dominado por la generación de demanda, puede ser la forma de salir de una falsa circularidad a la cual muchas veces se ata al HPC en el sur global ¿Qué fue primero la computadora o las/os usuarios?",
      },
      {
        title: "Cómo implementar el intérprete de un DSL embebido en Haskell",
        hour: "15:00",
        shortDescription: "Felipe Gorostiaga",
      },
      {
        title: "Coffee Break",
        hour: "16:00",
      },
      {
        title: "Docker 101 (Endava)",
        hour: "17:00",
        shortDescription: "Manuel Fernandez",
      },
      {
        title: "Panel: Por qué hacemos Programación Competitiva",
        hour: "18:00",
        shortDescription: "Matías Ramos - Carolina Lang - Agustín Gutierrez - Mariano Crosetti - Álvaro Carrera",
        description:
          "Panel con ex-participantes en competencias de programación de prestigio internacional. Divulgación y discusión de temáticas relacionadas - resolución de problemas, algoritmia, trabajo en equipo, experiencias fuera del país, etc.",
      },
      {
        title:
          "Grupos y Algebras de Lie aplicadas al modelado de la incertidumbre.",
        hour: "19:00",
        shortDescription: "Javier Gimenez",
        description:
          "Los Grupos y las Álgebras de Lie son herramientas poderosas y unificadas que permiten modelar de manera precisa la evolución de la incertidumbre en las estimaciones de la pose de un robot móvil. En esta charla introductoria y geométrica, se exploran conceptos de Grupos y Álgebras de Lie, demostrando cómo se aplican para mejorar la precisión en el modelado de la incertidumbre. Además, se presentan simulaciones que ilustran las potencialidades de estas herramientas en la práctica.",
      },
    ],
    activities: [
      {
        title: "Happy Hour",
        hour: "20:00",
        shortDescription:
          "Finalizamos el primer día con un Happy Hour en Beer Bros",
      },
    ],
  },
  {
    dayId: "2",
    date: "5 de Octubre",
    talks: [
      {
        title: "Taller: Combinatoria en programación competitiva",
        hour: "9:00 - 12:00",
        shortDescription: "Francesco Mozzatti y Matías Raimundez",
        description: "Laboratorio 1",
      },
      {
        title: "Almuerzo",
        hour: "12:00",
      },
      {
        title: "Grafos Basados en Conjuntos",
        hour: "13:00",
        shortDescription: "Denise Rut Marzorati",
        description:
          'Diversas ramas de la ciencia y de la técnica utilizan modelos matemáticos de los sistemas que estudian. Sobre estos modelos matemáticos se realizan simulaciones para analizar el comportamiento de dichos sistemas. Dado que estas técnicas son aplicadas a sistemas cada vez más complejos y grandes, permanentemente surgen nuevos desafíos.{br}{br} Los sistemas dinámicos continuos suelen ser representados mediante sistemas de ecuaciones diferenciales algebraicas (EDAs), y su simulación requiere de la resolución numérica de dichas ecuaciones, que puede hacerse a través de algoritmos específicos conocidos como solvers. Los solvers requieren que los sistemas de ecuaciones estén escritos y ordenados de cierta forma, que generalmente no coincide con la manera en la que un/una especialista describe los modelos. Para realizar la conversión necesaria se utilizan principalmente algoritmos de la Teoría de Grafos que conforman un "compilador de modelos".{br}{br} En esta charla, explicaremos cuáles son los algoritmos tradicionales que se utilizan para realizar este ordenamiento, y una breve introducción al enfoque de "Grafos Basados en Conjuntos" que busca resolver el problema para sistemas de gran escala.',
      },
      {
        title: "Generación Automática de Oráculos para Tests",
        hour: "14:00",
        shortDescription: "Facundo Molina",
        description:
          'Un aspecto crucial del proceso de desarrollo de software es decidir si el comportamiento del software es el esperado. Para ello, es necesario contar con una especificación del comportamiento esperado. El problema de producir una especificación (oráculo) que permita distinguir el comportamiento correcto/esperado del comportamiento incorrecto/inesperado, es conocido como el "problema del oráculo". La complejidad de este problema, sumado a que el software muchas veces carece de tales especificaciones, ha generado un interés cada vez mayor en la comunidad científica de ingeniería de software.{br}{br} En los últimos años, la creciente adopción de tecnologías basadas en aprendizaje automático, han permitido el desarrollo de novedosas técnicas para la generación automática de oráculos para testing. En esta charla, abordaremos el problema del oráculo en testing de software desde distintas perspectivas, y presentaremos algunos de los principales enfoques basados en aprendizaje automático, incluyendo computación evolutiva, redes neuronales y grandes modelos de lenguaje (LLMs).',
      },
      {
        title: "El rol de la Inteligencia Artificial en FastPrg: del paper a producción",
        hour: "15:00",
        shortDescription: "Lucas Biagetti - Juan Bossetti - Germán Frontalini - Dante Venini",
        description: 'En esta charla miembros del equipo de Innovación Tecnológica de NeuralSoft compartirán los desafíos que enfrentaron al incorporar a FastPrg los últimos avances en Inteligencia Artificial, cubriendo todo el proceso que implica pasar "del paper a producción".{br}{br}¿Qué es FastPrg?{br}FastPrg es la solución "No Code" de NeuralSoft que incluye un lenguaje de programación de dominio específico, creado exclusivamente para el desarrollo de software empresarial. FastPrg permite programar, sin escribir código, entre 20 y 50 veces más rápido que los lenguajes de programación convencionales.'
      },
      {
        title: "Coffee Break",
        hour: "16:00",
      },
      {
        title: "Panel: LCC en Rosario hoy.",
        hour: "17:00",
        shortDescription: "Pablo Racca",
        description:
          '1. Cómo dictar LCC hoy, en un contexto de falta de docentes, economía deprimida, fuga de cerebros, mercado hambriento por programadorxs.{br}{br}2. LCC en Rosario: ¿es LCC una carrera "situada" en su contexto territorial, dialoga con una ciudad sitiada, empobrecida, perdiendo fortaleza en sus distritos y cada vez más centralizada? ¿O vemos más una LCC-burbuja respecto a su ciudad?',
      },
      {
        title: "Los modos de existencia del software",
        hour: "18:00",
        shortDescription: "Javier Blanco",
        description:
          "La irrupción histórica del software como constitutivo de casi toda forma tecnológica multiplicó las posibilidades de invención y achicó drásticamente los tiempos y costos de desarrollo tecnológico. Una de las principales razones de esta transformación, aún en curso, es el vínculo causal que se establece entre lenguajes y mecanismos, no ya en clave descriptiva sino como parte integrada del funcionamiento, donde la intervención humana en tanto intérpretes de las descripciones o prescripciones lingüísticas se vuelve innecesaria e ineficiente.{br}{br} El marco general propuesto por Turing, apoyado en ideas de Gödel y acompañado por múltiples debates y desarrollos en la primera mitad del siglo XX, sigue siendo fundamental para comprender, analizar e inventar nuevas formas computacionales y ofrece orientaciones indispensables en cualquier trabajo especulativo acerca del inagotable universo computacional. Sin embargo, como bien señala Bernhard Rieder, en muchos casos la referencia a los trabajos fundacionales de la ciencia de la computación omite analizar el rico desarrollo de las tecnologías computacionales sobre todo a partir de la década de 1970, donde el software concreto cobra un interés en sí mismo, irreductible a los principios generales de la computación.{br}{br} Comprender las técnicas algorítmicas y la realización de sistemas computacionales complejos requiere herramientas conceptuales específicas. El profundo análisis de los objetos técnicos realizado por Gilbert Simondon en El modo de existencia de los objetos técnicos presenta varios atractivos para conceptualizar los programas concretos, pero también algunas inadecuaciones que requieren nuevas elaboraciones, en algunos casos implicando cambios teóricos profundos.",
      },
    ],
    activities: [
      {
        title: "Futbol Mixto",
        hour: "20:00",
        shortDescription: "Fútbol Mixto en Pichincha MULTIESPACIO DEPORTIVO",
        description:
          "Fútbol Mixto en Pichincha MULTIESPACIO DEPORTIVO desde las 20:00hs a las 22:00hs.{br}Hace {href} para anotarte",
        hrefUrl: "https://forms.gle/reinYnQv6wGDDDC98",
        hrefText: "click",
      },
      {
        title: "Noche de juegos de mesa",
        hour: "20:00",
        shortDescription: "Cerramos la noche con una noche de juegos de mesa.",
        description:
          'Club de Juegos Rosario invita a toda la comunidad de Ciencias Exactas a pasar una noche jugando juegos de mesa en "La Fortaleza" (Salta 2845). {br}Te esperamos el día jueves 5 de octubre desde las 20hs y hasta las 2am para que vengas a disfrutar de la ludoteca del club. {br}El salón cuenta con minimarket y cocina para que no te falte nada para pasar una noche genial.{br}Hace {href} para anotarte',
        hrefUrl: "https://forms.gle/XiVFm5L6VR7ZisDGA",
        hrefText: "click",
      },
    ],
  },
  {
    dayId: "3",
    date: "6 de Octubre",
    talks: [
      {
        title: "Taller práctico: Construyendo habilidades con inteligencia artificial",
        hour: "8:00 - 12:00",
        shortDescription: "Lucas Biagetti - Juan Bossetti - Germán Frontalini - Dante Venini",
        description: "Exploraremos cómo crear habilidades basadas en inteligencia artificial utilizando OpenLLaMA y BERT, para integrarlas rápidamente a un software de gestión.{br}{br}Los participantes resolverán problemas de distintos niveles de complejidad, que involucran modelos de lenguaje.{br}{br}Conocimientos requeridos: Python nivel básico.{br}{br}El taller lo llevará a cabo NueralSoft en el Laboratorio 1",
      },
      {
        title: "Almuerzo",
        hour: "12:00",
      },
      {
        title:
          "La lógica computacional de la física cuántica, el conectivo sup, y un cálculo lambda para ellos.",
        hour: "13:00",
        shortDescription: "Alejandro Díaz-Caro",
        description:
          'En lógica clásica, y más específicamente en Deducción Natural, si tenemos una prueba de la veracidad de A y otra de la veracidad de B, tenemos una prueba de A∧B (la conjunción de ambas). Por otro lado, si tenemos una prueba de A∨B (la disyunción de A y B), no sabemos si obtendremos una prueba de A o una de B. Por lo que a partir de A∨B sólo podremos concluir aquellas proposiciones para las cuales sea indistinto si lo verdadero es A o B.{br} Ninguno de estos dos conectivos (∧ y ∨) puede, desde un punto de vista filosófico, modelar lo que ocurre en una superposición cuántica. En una superposición cuántica podemos decir que la superposición de A y B, requiere que ambas, A y B sean verdaderas, pero a partir de la superposición de ellas, no sabemos si obtendremos una prueba de A o una de B. Por lo que a partir de la superposición de A y B sólo podremos concluir aquellas proposiciones para las cuales sea indistinto si lo verdadero es A o B.{br} En una serie de papers recientes definimos un nuevo conectivo lógico, ⊙ (léase "sup") que modela este comportamiento: tiene las reglas de introducción de la conjunción y las reglas de eliminación de la disyunción. Mostramos que la lógica definida con este conectivo tiene como pruebas (términos lambda) a los programas cuánticos, haciendo que la lógica-sup sea una lógica computacional de la física cuántica. En esta charla describiré una serie de trabajos recientes donde introducimos la lógica-sup y mostramos su utilidad en el diseño de lenguajes de programación para computación cuántica, a través de un cálculo lambda que tiene a dicha lógica como sus tipos. También daré algunas ideas de un trabajo más reciente sobre el modelo categórico detrás de este cálculo.',
      },
      {
        title:
          "Cómo utilizar Domain-Driven Design para Modularizar un Crypto Exchange.",
        hour: "14:00",
        shortDescription: "Federico Moya",
        description:
          'Recientemente se reavivó el debate microservicios vs monolíticos a partir de un {href} publicado por el equipo de ingeniería de Amazon Prime Video donde cuentan cómo lograron escalar el servicio de monitoreo de calidad, y a la vez reducir los costos de la infraestructura en un 90%, migrando de una arquitectura de microservicios a un sistema monolítico modular. Si bien el debate es interesante (y entretenido) en sí mismo, en esta ocasión propongo utilizarlo como disparador de otra discusión, más de fondo, relacionada con el diseño de sistemas complejos. El abordaje de estos sistemas requiere de algún tipo de modularización, el viejo principio de "divide y vencerás". Ahora bien ¿Qué criterio usamos para modularizar un sistema complejo? Domain Driven Design, un conjunto de principios y patrones para el diseño de sistemas complejos que pone al dominio en el centro de la escena, nos da algunas respuestas. En esta charla vamos a ver cómo podemos aplicar los conceptos de Domain-Driven Design para modularizar un caso particular de dominio complejo, un Crypto Exchange.',
        hrefText: "artículo",
        hrefUrl:
          "https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90",
      },
      {
        title:
          "Estimación de la incertidumbre en sistemas de Localización y Mapeo Simultáneo para robots móviles.",
        hour: "15:00",
        shortDescription: "Gastón Castro",
        description:
          "Una plataforma robótica móvil que debe operar en un entorno desconocido o impredecible requiere localizarse adecuadamente y, simultáneamente, construir una representación útil del entorno, con el fin de tomar decisiones lo suficientemente robustas para no comprometer la seguridad ni los recursos. Este problema se conoce como localización y mapeo simultáneos (Simultaneous Localization and Mapping, SLAM). La información recopilada por los sensores del robot acarrea ruido, el cual se traduce en pequeños errores que, en determinadas situaciones, pueden acumularse y disminuir la confianza en las estimaciones realizadas.{br} En esta charla se expondrán soluciones SLAM novedosas que se están desarrollando en el Laboratorio de Robótica del instituto CIFASIS (CONICET-UNR), con la capacidad de estimar consistentemente el grado de incertidumbre de la localización y el mapa.",
      },
      {
        title: "Coffee Break",
        hour: "16:00",
      },
      {
        title:
          '"Live coding". Lenguajes, técnicas y estéticas para una práctica performática de la programación.',
        hour: "17:00",
        shortDescription: "Luis Tamagnini",
        description:
          "Entendemos por “live coding” al acto de escribir y/o modificar el código fuente de un programa mientras éste está en ejecución. Esta práctica está generalmente asociada a la generación y presentación en vivo de contenido audiovisual, escribiendo código en un contexto de programación interactiva e improvisada. Sin embargo, estos conceptos y técnicas se aplican también en otras artes escénicas como la danza, poesía, sistemas lumínicos, y otras. El propósito de este texto es exponer algunos de los lenguajes y técnicas usadas en estas disciplinas y mostrar algunos ejemplos específicos de mi trabajo en computación musical y computación gráfica.",
      },
      {
        title: "Entrega de diplomas",
        hour: "18:00",
      },
    ],
    activities: [
      {
        title: "JodaCC",
        hour: "22:00",
        shortDescription: "Graduación de los alumnos y fiesta de cierre",
        description:
          "Fiesta de graduación en playa de la música, todos estan invitados. Hablanos a {href} para pedir tu entrada!",
        hrefText: "instagram",
        hrefUrl: "https://www.instagram.com/jccfceia",
      },
    ],
  },
];
