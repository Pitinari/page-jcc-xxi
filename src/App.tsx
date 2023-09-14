import {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import "./App.css";
import { Landing } from "./components/Landing";
import { useAccordion } from "./useAccordion";
import {
  BiChevronDown,
  BiLogoInstagram,
  BiLogoYoutube,
  BiMailSend,
  BiSolidMap,
  BiSolidPhone,
} from "react-icons/bi";
import classNames from "classnames";
import logo from "../images/logo-footer.png";
import { useIntl } from "react-intl";

function Nav({ children }: PropsWithChildren) {
  return (
    <nav className="hidden md:contents">
      <ul className="contents">{children}</ul>
    </nav>
  );
}

function MobileNav({
  children,
  showHeader,
}: PropsWithChildren<{ showHeader: boolean }>) {
  const [ref, maxHeight, toggle] = useAccordion();

  return (
    <>
      <button
        className={`text-2xl md:hidden transition-transform ${maxHeight !== "0px" ? "rotate-180" : ""
          }`}
        onClick={toggle}
      >
        <BiChevronDown />
      </button>
      <nav
        ref={ref}
        style={{ maxHeight: !showHeader ? 0 : maxHeight }}
        className="w-full overflow-hidden duration-300 ease-in-out md:hidden transition-max-height"
      >
        <ul onClick={toggle} className="flex flex-col gap-5 p-5">
          {children}
        </ul>
      </nav>
    </>
  );
}

function CenterTitle({ children }: PropsWithChildren) {
  return <h1 className="text-2xl font-bold md:text-4xl">{children}</h1>;
}

function LeftTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="self-start text-2xl font-bold md:text-4xl">{children}</h1>
  );
}

const Section = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <section
        ref={ref}
        className="flex flex-col items-center justify-center gap-10 p-5 rounded shadow-lg md:p-10 scroll-m-16"
      >
        {children}
      </section>
    );
  }
);

function Text({ children }: PropsWithChildren) {
  return (
    <p className="font-light leading-relaxed text-justify md:text-center md:text-xl">
      {children}
    </p>
  );
}

function Link({ url, children }: PropsWithChildren<{ url?: string }>) {
  return (
    <a className="appearance-none cursor-pointer" href={url} target="_blank">
      {children}
    </a>
  );
}

function Grid3({ children }: PropsWithChildren) {
  return (
    <div className="grid content-center w-full grid-cols-1 gap-10 md:grid-cols-3 justify-items-center">
      {children}
    </div>
  );
}

function Day({
  number,
  date,
  children,
}: PropsWithChildren<{ number: string; date: string }>) {
  return (
    <div className="w-full">
      <h2 className="p-3 md:p-5 md:text-2xl">
        Día {number} - <span className="text-gray-500">{date}</span>
      </h2>
      {children}
    </div>
  );
}

function Event({
  time,
  title,
  speakers,
  gray,
  children,
}: PropsWithChildren<{
  time: string;
  title: string;
  speakers?: string;
  gray?: boolean;
}>) {
  const [ref, maxHeight, toggle] = useAccordion();

  return (
    <div className="text-xs border-t md:text-left first:rounded-t last:rounded-b border-x last:border-b md:text-base">
      <div
        className={`${gray ? "bg-gray-100" : "bg-white"
          } p-3 md:p-5 gap-3 flex flex-wrap items-center justify-between ${children ? "cursor-pointer transition-colors hover:bg-slate-200" : ""
          }`}
        onClick={toggle}
      >
        <span>{title}</span>
        <span>{time}</span>
        {speakers && (
          <p className="w-full font-light text-left text-gray-600 md:text-sm">
            {speakers}
          </p>
        )}
      </div>

      {children && (
        <div
          className="overflow-hidden text-justify duration-300 ease-in-out transition-max-height md:text-left"
          style={{ maxHeight }}
        >
          <div
            ref={ref}
            className="p-5 font-light text-blue-800 border-t bg-blue-50"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function Title({ children }: PropsWithChildren) {
  return <h1 className="text-2xl md:text-4xl">{children}</h1>;
}

function NavItem({
  children,
  scroll,
}: PropsWithChildren<{ scroll: () => void }>) {
  return (
    <li
      className="list-none transition-colors cursor-pointer hover:text-red-800"
      onClick={scroll}
    >
      {children}
    </li>
  );
}

function FooterInfoRight({
  children,
  Icon,
}: PropsWithChildren<{ Icon: React.ReactNode }>) {
  return (
    <span className="flex items-center justify-end gap-3">
      {children}
      <span className="text-xl md:text-2xl">{Icon}</span>
    </span>
  );
}

function FloatingButton({
  onClick,
  show,
}: {
  onClick: () => void;
  show: boolean;
}) {
  return (
    <div
      className={classNames(
        "absolute top-full left-1/2 w-14 h-14 rounded-full bg-[#222222] transition-all hover:bg-[#555555] cursor-pointer duration-300 ease-in-out flex items-center justify-center"
      )}
      style={{
        transform: show ? `translate(-50%, -150%)` : `translate(-50%, 0)`,
      }}
      onClick={onClick}
    >
      <BiChevronDown className="w-4 h-4" stroke="#ffffff" fill="#ffffff" />
    </div>
  );
}

function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const cronogramaRef = useRef<HTMLDivElement>(null);
  const actividadesRef = useRef<HTMLDivElement>(null);
  const apoyoRef = useRef<HTMLDivElement>(null);
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const { formatMessage } = useIntl();

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    pageRef.current?.scroll({
      top: (ref.current?.offsetTop ?? 0) - 64,
      behavior: "smooth",
    });
  };

  // ! Not working. A possible solution is to attach a ref to
  // ! the Landing component and use that to scroll to the top
  const scrollToTop = () => {
    pageRef.current?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const currentPage = pageRef.current;
    if (currentPage) {
      currentPage.addEventListener("scroll", () => {
        if (currentPage.scrollTop > 0 && !showHeader) {
          setShowHeader(true);
        } else if (currentPage.scrollTop === 0 && showHeader) {
          setShowHeader(false);
        }
      });
    }
  }, [showHeader]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div ref={pageRef} className="w-full h-full overflow-y-scroll">
        <header
          className={classNames(
            "fixed w-full top-0 z-30 flex flex-wrap items-center justify-between text-gray-800 bg-white shadow min-h-[4rem] md:justify-start md:text-xl md:gap-7 px-7 py-5 duration-300 ease-in-out",
            !showHeader && "-translate-y-full"
          )}
        >
          <Title>
            <NavItem scroll={() => scrollToTop()}>JCC 2023</NavItem>
          </Title>
          <Nav>
            <NavItem scroll={() => scrollTo(infoRef)}>Info</NavItem>
            <NavItem scroll={() => scrollTo(cronogramaRef)}>Cronograma</NavItem>
            <NavItem scroll={() => scrollTo(actividadesRef)}>
              Actividades
            </NavItem>
            <NavItem scroll={() => scrollTo(apoyoRef)}>Apoyo</NavItem>
          </Nav>
          <MobileNav showHeader={showHeader}>
            <NavItem scroll={() => scrollTo(infoRef)}>Info</NavItem>
            <NavItem scroll={() => scrollTo(cronogramaRef)}>Cronograma</NavItem>
            <NavItem scroll={() => scrollTo(actividadesRef)}>
              Actividades
            </NavItem>
            <NavItem scroll={() => scrollTo(apoyoRef)}>Apoyo</NavItem>
          </MobileNav>
        </header>
        <Landing
          className="h-full pt-[4rem]"
          onAnimationEnds={() => {
            if (!showHeader) {
              setShowHeader(true);
              scrollTo(descRef);
            }
          }}
        />
        <main className="flex flex-col max-w-screen-lg gap-5 py-5 m-auto text-center text-gray-800">
          <Section ref={descRef}>
            <CenterTitle>Jornadas de Ciencias de la Computación</CenterTitle>
            <Text>
              Las Jornadas de Ciencias de la Computación vuelven los días 4, 5 y
              6 de Octubre. Contaremos con la presencia de destacados
              expositores de distintas localidades argentinas, que están
              radicados en diferentes partes del mundo. Las charlas se
              realizarán en el salón de actos de la Facultad de Ciencias
              Exactas, Ingeniería y Agrimensura, además de actividades y
              talleres abiertos para todos los asistentes. También estaremos
              difundiendo más información en la cuenta de Instagram de las JCC.
            </Text>
            <div className="flex items-center gap-20 text-4xl md:text-6xl">
              <span className="transition-colors hover:text-red-500">
                <Link url="https://www.youtube.com/channel/UC-CReVEx4-3AfJOH1Tr-udw">
                  <BiLogoYoutube />
                </Link>
              </span>
              <span className="transition-colors hover:text-pink-700">
                <Link url="https://www.instagram.com/jccfceia">
                  <BiLogoInstagram />
                </Link>
              </span>
            </div>
          </Section>
          <Section ref={infoRef}>
            <CenterTitle>Sobre las Jornadas</CenterTitle>
            <Text>
              Las Jornadas de Ciencias de la Computación son una iniciativa del
              Departamento de Ciencias de la Computación de la Facultad de
              Ciencias Exactas, Ingeniería y Agrimensura de la Universidad
              Nacional de Rosario, de carácter abierto y gratuito. El objetivo
              de las mismas es promover el contacto de los alumnos de la
              Facultad con investigadores y profesionales en temas relacionados
              con el ámbito de las ciencias de la computación. Al mismo tiempo,
              nos permite mantenernos actualizados sobre las tendencias en
              investigación y desarrollo de la región.
            </Text>
            <Text>
              Las JCC se llevaron a cabo por primera vez en noviembre del año
              2000. Año tras año han participado decenas de personas
              provenientes de empresas de desarrollo de software local,
              estudiantes e investigadores de esta casa de estudios y de
              universidades destacadas de la zona, entre las cuales podemos
              mencionar a la Universidad Nacional de La Plata, la Universidad de
              Buenos Aires, la Universidad Nacional de Córdoba, la Universidad
              Nacional de Río Cuarto y la Universidad de la República
              (Montevideo-Uruguay). La realización de las JCC es un proceso que
              continúa año a año y constituye un logro significativo del cuerpo
              docente y estudiantil de la carrera Licenciatura en Ciencias de la
              Computación.
            </Text>
          </Section>
          <Section ref={cronogramaRef}>
            <LeftTitle>Cronograma</LeftTitle>
            {/* <Grid3> */}
              {window.Schedule?.map((day) => (
                <Day number={day.dayId} date={day.date}>
                  {day.talks.map((talk) => (
                    <Event
                      time={talk.hour}
                      title={talk.title}
                      speakers={talk.shortDescription}
                    >
                      {talk.description &&  formatMessage({ id: day.dayId + talk.hour, defaultMessage: talk.description }, {
                        br: <br />,
                        href: (
                          <span className="underline transition-colors cursor-pointer"><Link
                          key={day.dayId + talk.hour}
                          url={talk.hrefUrl}
                        >{talk.hrefText}</Link></span>),
                      })}
                    </Event>
                  ))}
                </Day>
              ))}
            {/* </Grid3> */}
          </Section>
          <Section ref={actividadesRef}>
            <LeftTitle>Actividades</LeftTitle>
            <Grid3>
              {window.Schedule?.map((day) =>
                day.activities ? (
                  <Day number={day.dayId} date={day.date}>
                    {day.activities?.map((activity) => (
                      <Event
                        time={activity.hour}
                        title={activity.title}
                        speakers={activity.shortDescription}
                      >
                        {activity.href ? (
                          <Link url={activity.href}>
                            {activity.description}
                          </Link>
                        ) : (
                          activity.description
                        )}
                      </Event>
                    ))}
                  </Day>
                ) : undefined
              )}
            </Grid3>
          </Section>
          <Section ref={apoyoRef}>
            <CenterTitle>Patrocinadores</CenterTitle>
                        <Grid3>
              {window.Sponsors.map(sponsor => 
                <div className="flex flex-col items-center">
                  <img src={sponsor.logo} />
                  <label>{sponsor.name}</label>
                </div>  
              )}
            </Grid3>
          </Section>
          <Section>
            <CenterTitle>Auspiciantes</CenterTitle>
            {/*             <Grid3>
              <span>Conicet</span>
              <span>FCEIA</span>
              <span>UNR</span>
            </Grid3> */}
          </Section>
        </main>
        <footer className="flex flex-col items-center justify-center gap-5 p-5 text-xs text-center text-gray-800 bg-white border-t md:gap-7 md:p-7 md:text-base">
          <div className="flex flex-col items-center justify-between w-full gap-5 md:flex-row">
            <img className="w-32" src={logo} alt="Logo" />
            <div className="flex flex-col items-center flex-grow gap-3 md:items-start">
              <span>Licenciatura en Ciencias de la Computación</span>
              <span>
                Facultad de Ciencias Exactas, Ingeniería y Agrimensura
              </span>
              <span>Universidad Nacional de Rosario</span>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-end">
              <FooterInfoRight Icon={<BiSolidMap />}>
                Pellegrini 250, Rosario, Santa Fe, Argentina
              </FooterInfoRight>
              <FooterInfoRight Icon={<BiSolidPhone />}>
                (0341) 480-2649/60
              </FooterInfoRight>
              <FooterInfoRight Icon={<BiMailSend />}>
                jcc@fceia.unr.edu.ar
              </FooterInfoRight>
            </div>
          </div>
          <div className="w-full pt-5 font-bold border-t">
            Otras ediciones
            {Array.from(
              { length: new Date().getFullYear() - 2005 + 1 },
              (_, i) => 2005 + i
            ).map(
              (year) =>
                year !== 2023 && (
                  <>
                    {" - "}
                    <span className="underline transition-colors cursor-pointer hover:text-red-800">
                      <Link
                        key={year}
                        url={`https://jcc.dcc.fceia.unr.edu.ar/${year}`}
                      >
                        {year}
                      </Link>
                    </span>
                  </>
                )
            )}
          </div>
        </footer>
      </div>
      <FloatingButton onClick={() => scrollTo(descRef)} show={!showHeader} />
    </div>
  );
}

export default App;
