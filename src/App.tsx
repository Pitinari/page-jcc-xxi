import { PropsWithChildren, forwardRef, useEffect, useRef, useState } from 'react';
import './App.css'
import { Landing } from './components/Landing'

function Nav({ children }: PropsWithChildren) {
  return (
    <nav className="contents">
      <ul className="contents">{children}</ul>
    </nav>
  );
}

function CenterTitle({ children }: PropsWithChildren) {
  return <h1 className="text-4xl font-bold">{children}</h1>;
}

function LeftTitle({ children }: PropsWithChildren) {
  return <h1 className="self-start text-4xl font-bold">{children}</h1>;
}

const Section = forwardRef<HTMLDivElement, PropsWithChildren>(({ children }, ref) => {
  return <section ref={ref} className="flex flex-col items-center justify-center gap-10 p-10 rounded shadow-lg scroll-m-16">{children}</section>;
});

function Text({ children }: PropsWithChildren) {
  return <p className="text-xl font-light leading-relaxed">{children}</p>;
}

function Link({ children }: PropsWithChildren) {
  return <span className="p-5 border border-black rounded-full">{children}</span>;
}

function Grid3({ children }: PropsWithChildren) {
  return <div className="grid content-center w-full grid-cols-3 gap-10 justify-items-center">{children}</div>;
}

function Day({ number, date, children }: PropsWithChildren<{ number: number; date: string }>) {
  return (
    <div className="w-full">
      <h2 className="p-5 text-2xl">
        Día {number} - <span className="text-gray-500">{date}</span>
      </h2>
      {children}
    </div>
  );
}

function Event({ time, title, speakers, gray, children }: PropsWithChildren<{ time: string; title: string; speakers?: string; gray?: boolean }>) {
  const [open, setOpen] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<string>("0px");

  const toggle = () => setOpen(open => !open);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current)
      setMaxHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [contentRef, open]);

  return (
    <div className="text-left border-t first:rounded-t last:rounded-b border-x last:border-b">

      <div className={`${gray ? "bg-gray-100" : "bg-white"} p-5 flex items-center justify-between ${children ? "cursor-pointer" : ""}`} onClick={toggle}>
        <h3>
          {title}
          {speakers && <p className="text-sm font-light text-gray-600">{speakers}</p>}
        </h3>
        {time}
      </div>

      {children && (
        <div className="overflow-hidden duration-300 ease-in-out transition-max-height" style={{ maxHeight }}>
          <div ref={contentRef} className="p-5 font-light text-blue-800 border-t bg-blue-50">
            {children}
          </div>
        </div>
      )}

    </div>
  );
}

function Title({ children }: PropsWithChildren) {
  return <h1 className="text-4xl">{children}</h1>;
}

function NavItem({ children, scroll }: PropsWithChildren<{ scroll: () => void }>) {
  return <li className="list-none transition-colors cursor-pointer hover:text-red-800" onClick={scroll}>{children}</li>;
}

function App() {
    const infoRef = useRef<HTMLDivElement>(null);
    const cronogramaRef = useRef<HTMLDivElement>(null);
    const actividadesRef = useRef<HTMLDivElement>(null);
    const apoyoRef = useRef<HTMLDivElement>(null);

    const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
      if (ref.current)
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    // ! Not working. A possible solution is to attach a ref to
    // ! the Landing component and use that to scroll to the top
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <>
        <header className="sticky top-0 z-30 flex items-center h-16 text-xl text-gray-800 bg-white shadow gap-7 p-7">
          <Title>
            <NavItem scroll={() => scrollToTop()}>JCC 2023</NavItem>
          </Title>
          <Nav>
            <NavItem scroll={() => scrollTo(infoRef)}>Info</NavItem>
            <NavItem scroll={() => scrollTo(cronogramaRef)}>Cronograma</NavItem>
            <NavItem scroll={() => scrollTo(actividadesRef)}>Actividades</NavItem>
            <NavItem scroll={() => scrollTo(apoyoRef)}>Apoyo</NavItem>
          </Nav>
        </header>
        <Landing />
        <main className="flex flex-col max-w-screen-lg gap-5 py-5 m-auto text-center text-gray-800">
          <Section>
            <CenterTitle>Jornadas de Ciencias de la Computación</CenterTitle>
            <Text>
              Las Jornadas de Ciencias de la Computación vuelven los días 5, 6 y 7 de Octubre. Contaremos con la presencia de destacados expositores de
              distintas localidades argentinas, que están radicados en diferentes partes del mundo. Las charlas se realizarán en el salón de actos de la
              Facultad de Ciencias Exactas, Ingeniería y Agrimensura, además de actividades y talleres abiertos para todos los asistentes. También estaremos
              difundiendo más información en la cuenta de Instagram de las JCC.
            </Text>
            <div className="flex items-center gap-10 text-4xl">
              <Link>YT</Link>
              <Link>IG</Link>
            </div>
          </Section>
          <Section ref={infoRef}>
            <CenterTitle>Sobre las Jornadas</CenterTitle>
            <Text>
              Las Jornadas de Ciencias de la Computación son una iniciativa del Departamento de Ciencias de la Computación de la Facultad de Ciencias Exactas,
              Ingeniería y Agrimensura de la Universidad Nacional de Rosario, de carácter abierto y gratuito. El objetivo de las mismas es promover el contacto
              de los alumnos de la Facultad con investigadores y profesionales en temas relacionados con el ámbito de las ciencias de la computación. Al mismo
              tiempo, nos permite mantenernos actualizados sobre las tendencias en investigación y desarrollo de la región.
            </Text>
            <Text>
              Las JCC se llevaron a cabo por primera vez en noviembre del año 2000. Año tras año han participado decenas de personas provenientes de empresas de
              desarrollo de software local, estudiantes e investigadores de esta casa de estudios y de universidades destacadas de la zona, entre las cuales
              podemos mencionar a la Universidad Nacional de La Plata, la Universidad de Buenos Aires, la Universidad Nacional de Córdoba, la Universidad
              Nacional de Río Cuarto y la Universidad de la República (Montevideo-Uruguay). La realización de las JCC es un proceso que continúa año a año y
              constituye un logro significativo del cuerpo docente y estudiantil de la carrera Licenciatura en Ciencias de la Computación.
            </Text>
          </Section>
          <Section ref={cronogramaRef}>
            <LeftTitle>Cronograma</LeftTitle>
            <Day number={1} date="5 de Octubre">
              <Event time="12:15" title="Almuerzo" gray={true} />
              <Event time="12:45" title="Acto de apertura" />
              <Event time="13:00" title="Historia LCC y JCC" speakers="Mauro Jaskelioff y Raúl Kantor">
                En este panel recorreremos la historia de nuestra carrera, de la JCC y del DCC, contando anécdotas para que charlemos y hagamos un viaje al
                pasado.
              </Event>
            </Day>
            <Day number={2} date="6 de Octubre">
              <Event time="09:00" title="Taller de Programación Competitiva" speakers="Mariano Crosetti, Sebastián Mestre y Franco de Rico">
                Vamos a dar dos clases muy entretenidas de algoritmia y estructuras de datos:
                <br />
                • Clase de Grafos: DFS, BFS, Algoritmo de Tarjan para encontrar las componentes fuertemente conexas en un grafo dirigido. Luego de esta clase
                van a estar en condiciones de atacar el problema H del Torneo Argentino de Programación 2022: click aqui
                <br />• Clase de Strings: Hashing, Z Algorithm, KMP. Luego de esta clase van a estar en condiciones de atacar (por ejemplo) el problema de
                contar la cantidad de subcadenas que sean palíndromo en una cadena de caracteres dada: click aqui El taller se realiza en el Laboratorio 1er
                piso
              </Event>
            </Day>
          </Section>
          <Section ref={actividadesRef}>
            <LeftTitle>Actividades</LeftTitle>
            <Day number={1} date="5 de Octubre">
              <Event time="20:00" title="Fútbol Mixto">
                Vuelve el clásico futbol 5 de la LCC Ubicación: Instituto Politécnico Superior Gral. San Martín
              </Event>
            </Day>
          </Section>
          <Section ref={apoyoRef}>
            <CenterTitle>Patrocinadores</CenterTitle>
            <Grid3>
              <span>DeepAgro</span>
              <span>Grupo San Cristóbal</span>
              <span>Santa Fe</span>
              <span>NeuralSoft</span>
              <span>Trail of Bits</span>
              <span>Paddle</span>
            </Grid3>
          </Section>
          <Section>
            <CenterTitle>Auspiciantes</CenterTitle>
            <Grid3>
              <span>Conicet</span>
              <span>FCEIA</span>
              <span>UNR</span>
            </Grid3>
          </Section>
        </main>
        <footer className="flex flex-col items-center justify-center gap-5 p-5 text-center text-gray-800 bg-white border-t">
          <div className="flex items-center justify-between w-full">
            <div className="text-left">
              Licenciatura en Ciencias de la Computación <br />
              Facultad de Ciencias Exactas, <br />
              Ingeniería y Agrimensura Universidad Nacional de Rosario
            </div>
            <div className="text-right">
              Pellegrini 250, Rosario, Santa Fe, Argentina <br />
              (0341) 480-2649/60 <br />
              jcc@fceia.unr.edu.ar
            </div>
          </div>
          <div className="w-full pt-5 border-t">
            Otras ediciones - 2005 - 2006 - 2007 - 2008 - 2009 - 2010 - 2011 - 2012 - 2013 - 2014 - 2015 - 2016 - 2017 - 2018 - 2019 - 2020 - 2021 - 2023
          </div>
        </footer>
      </>
    );
}

export default App
