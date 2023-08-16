import { PropsWithChildren } from 'react';
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

function Section({ children }: PropsWithChildren) {
  return <section className="flex flex-col items-center justify-center gap-10 p-10 rounded shadow-lg"> {children} </section>;
}

function Text({ children }: PropsWithChildren) {
  return <p className="text-xl font-light leading-relaxed">{children}</p>;
}

function Link({ children }: PropsWithChildren) {
  return <span className="p-5 border border-black rounded-full">{children}</span>;
}

function Grid3({ children }: PropsWithChildren) {
  return <div className="grid content-center w-full grid-cols-3 gap-10 justify-items-center">{children}</div>;
}

function App() {
    return (
      <>
        <header className="sticky top-0 z-30 flex items-center h-16 text-xl text-gray-800 bg-white shadow gap-7 p-7">
          <h1 className="text-4xl">JCC 2023</h1>
          <Nav>
            <li>Info</li>
            <li>Cronograma</li>
            <li>Actividades</li>
            <li>Apoyo</li>
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
          <Section>
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
          <Section>
            <LeftTitle>Cronograma</LeftTitle>
          </Section>
          <Section>
            <LeftTitle>Actividades</LeftTitle>
          </Section>
          <Section>
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
      </>
    );
}

export default App
