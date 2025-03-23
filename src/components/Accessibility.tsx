import css from "./Accessibility.module.css";
import React, { useEffect, useState } from "react";

const Accessibility = () => {
const [s, setS] = useState({
    invertColors: true,
    monochrome: true,
    darkContrast: true,
    lightContrast: true,
    lowSaturation: true,
    highSaturation: true,
    highlightLinks: true,
    highlightHeadlines: true,
    screenReader: true,
    readingMode: true,
    contentScaling : 0,
    font: 16,
    lineHeight : 10,
    letterSpacing : 0,
})

useEffect(() => {
    // Dodanie globalnego event listenera

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        handleClick(e.currentTarget as HTMLElement);
      });
    });

    // Czyszczenie event listenerów przy unmount
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", (e) => {
          handleClick(e.currentTarget as HTMLElement);
        });
      });
    };
  }, []);

  useEffect(() => {
    const body = document.body;

    // Resetowanie klas
    body.classList.remove(
      'invert-colors',
      'monochrome',
      'dark-contrast',
      'light-contrast',
      'low-saturation',
      'high-saturation',
      'highlight-links',
      'highlight-headings',
      'screen-reader-mode',
      'reading-mode'
    );

    // Dodawanie odpowiednich klas do ciała strony
    if (s.invertColors) body.classList.add(css.invertColors);
    if (s.monochrome) body.classList.add(css.monochrome);
    if (s.darkContrast) body.classList.add(css.darkContrast);
    if (s.lightContrast) body.classList.add(css.lightContrast);
    if (s.lowSaturation) body.classList.add(css.lowSaturation);
    if (s.highSaturation) body.classList.add(css.highSaturation);
    if (s.highlightLinks) body.classList.add(css.highlightLinks);
    if (s.highlightHeadlines) body.classList.add(css.highlightHeadings);
    if (s.screenReader) body.classList.add(css.screenReaderMode);
    if (s.readingMode) body.classList.add(css.readingMode);

    // Zmiana powiększenia i rozmiaru czcionki
    body.style.zoom = `${s.contentScaling}`;
    body.style.fontSize = `${s.font}px`;
    body.style.lineHeight = `${s.lineHeight / 10}`;
    body.style.letterSpacing = `${s.letterSpacing}px`;
  }, [s])

    function handleClick(element: HTMLElement): React.MouseEventHandler<HTMLButtonElement> | undefined {
        console.log(element.ariaLabel)

        switch(element.ariaLabel) {
            case "Odwróć kolory": setS(prevState => ({ ...prevState, invertColors: !prevState.invertColors})); break;
            case "Monochromatyczny": setS(prevState => ({ ...prevState, monochrome: !prevState.monochrome})); break;
            case "Ciemny kontrast": setS(prevState => ({ ...prevState, darkContrast: !prevState.darkContrast})); break;
            case "Jasny kontrast": setS(prevState => ({ ...prevState, lightContrast: !prevState.lightContrast})); break;
            case "Niskie nasycenie": setS(prevState => ({ ...prevState, lowSaturation: !prevState.lowSaturation})); break;
            case "Wysokie nasycenie": setS(prevState => ({ ...prevState, highSaturation: !prevState.highSaturation})); break;
            case "Zaznacz linki": setS(prevState => ({ ...prevState, highlightLinks: !prevState.highlightLinks})); break;
            case "Zaznacz nagłówki": setS(prevState => ({ ...prevState, highlightHeadlines: !prevState.highlightHeadlines})); break;
            case "Czytnik ekranu": setS(prevState => ({ ...prevState, screenReader: !prevState.screenReader})); break;
            case "Tryb czytania": setS(prevState => ({ ...prevState, readingMode: !prevState.readingMode})); break;
            case "Powieksz stronę": setS(prevState => { if (prevState.contentScaling < 100) { return ({ ...prevState, contentScaling: prevState.contentScaling + 1}); } return prevState} ); break;
            case "Pomniejsz stronę": setS(prevState => { if (prevState.contentScaling > 0) { return ({ ...prevState, contentScaling: prevState.contentScaling - 1}); } return prevState} ); break;
            case "Zwiększ rozmiar czcionki": setS(prevState => { if (prevState.font < 100) { return ({ ...prevState, font: prevState.font + 1}); } return prevState} ); break;
            case "Zmniejsz rozmiar czcionki": setS(prevState => { if (prevState.font > 0) { return ({ ...prevState, font: prevState.font - 1}); } return prevState} ); break;
            case "Zwiększ wysokości linii": setS(prevState => { if (prevState.lineHeight < 100) { return ({ ...prevState, lineHeight: prevState.lineHeight + 1}); } return prevState} ); break;
            case "Zmniejsz wysokości linii": setS(prevState => { if (prevState.lineHeight > 0) { return ({ ...prevState, lineHeight: prevState.lineHeight - 1}); } return prevState} ); break;
            case "Zwiększ odstęp liter": setS(prevState => { if (prevState.letterSpacing < 100) { return ({ ...prevState, letterSpacing: prevState.letterSpacing + 1}); } return prevState} ); break;
            case "Zmniejsz odstęp liter": setS(prevState => { if (prevState.letterSpacing > 0) { return ({ ...prevState, letterSpacing: prevState.letterSpacing - 1}); } return prevState} ); break;
        }

        console.log(s);

        return;
    }

    return (
        <div className={css.mainDiv}>
		<ul className={css.mainUl}>
			<li>Kontrast</li>   
			<li>
				<button aria-label="Odwróć kolory">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<g fill="none" stroke="#fff" stroke-width="2">
							<circle cx="12" cy="12" r="12" stroke="none"></circle>
							<circle cx="12" cy="12" r="11" fill="none"></circle>
						</g>
						<path d="M0,12A12,12,0,0,1,12,0V24A12,12,0,0,1,0,12Z" fill="#fff"></path>
					</svg>
					<span >Odwróć kolory</span>
				</button>
			</li>
			<li >
				<button aria-label="Monochromatyczny">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<g fill="none" stroke="#fff" stroke-width="2">
							<circle cx="12" cy="12" r="12" stroke="none"></circle>
							<circle cx="12" cy="12" r="11" fill="none"></circle>
						</g>
						<line y2="21" transform="translate(12 1.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
						<path d="M5.853,7.267a12.041,12.041,0,0,1,1.625-1.2l6.3,6.3v2.829Z" transform="translate(-0.778 -4.278)" fill="#fff"></path>
						<path d="M3.2,6.333A12.006,12.006,0,0,1,4.314,4.622l9.464,9.464v2.829Z" transform="translate(-0.778)" fill="#fff"></path>
						<path d="M1.823,10.959a11.953,11.953,0,0,1,.45-2.378l11.506,11.5v2.829Z" transform="translate(-0.778)" fill="#fff"></path>
					</svg>
					<span >Monochromatyczny</span>
				</button>
			</li>
			<li >
				<button aria-label="Ciemny kontrast">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<path d="M12,27A12,12,0,0,1,9.638,3.232a10,10,0,0,0,14.13,14.13A12,12,0,0,1,12,27Z" transform="translate(0 -3.232)" fill="#fff"></path>
					</svg>
					<span >Ciemny kontrast</span>
				</button>
			</li>
			<li >
				<button aria-label="Jasny kontrast">
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
						<g transform="translate(7 7)" fill="none" stroke="#fff" stroke-width="2">
							<circle cx="9" cy="9" r="9" stroke="none"></circle>
							<circle cx="9" cy="9" r="8" fill="none"></circle>
						</g>
						<rect width="2" height="5" rx="1" transform="translate(15)" fill="#fff"></rect>
						<rect width="2" height="5" rx="1" transform="translate(26.607 3.979) rotate(45)" fill="#fff"></rect>
						<rect width="2" height="5" rx="1" transform="translate(32 15) rotate(90)" fill="#fff"></rect>
						<rect width="2" height="5" rx="1" transform="translate(28.021 26.607) rotate(135)" fill="#fff"></rect>
						<rect width="2" height="5" rx="1" transform="translate(15 27)" fill="#fff"></rect>
						<rect width="2" height="5" rx="1" transform="translate(7.515 23.071) rotate(45)" fill="#fff"></rect>
						<rect width="2" height="5" rx="1" transform="translate(5 15) rotate(90)" fill="#fff"></rect>
						<rect width="2" height="5" rx="1" transform="translate(8.929 7.515) rotate(135)" fill="#fff"></rect>
					</svg>
					<span >Jasny kontrast</span>
				</button>
			</li>
			
			<li >
				<button aria-label="Niskie nasycenie">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<g fill="none" stroke="#fff" stroke-width="2">
							<circle cx="12" cy="12" r="12" stroke="none"></circle>
							<circle cx="12" cy="12" r="11" fill="none"></circle>
						</g>
						<path d="M0,12A12,12,0,0,1,6,1.6V22.394A12,12,0,0,1,0,12Z" transform="translate(0 24) rotate(-90)" fill="#fff"></path>
					</svg>
					<span >Niskie nasycenie</span>
				</button>
			</li>
			<li >
				<button aria-label="Wysokie nasycenie">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<g fill="none" stroke="#fff" stroke-width="2">
							<circle cx="12" cy="12" r="12" stroke="none"></circle>
							<circle cx="12" cy="12" r="11" fill="none"></circle>
						</g>
						<path d="M0,12A12.006,12.006,0,0,1,17,1.088V22.911A12.006,12.006,0,0,1,0,12Z" transform="translate(0 24) rotate(-90)" fill="#fff"></path>
					</svg>
					<span >Wysokie nasycenie</span>
				</button>
			</li>
			<li >Tekst</li>
			<li >
				<button aria-label="Zaznacz linki">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="24" height="24" fill="none"></rect>
						<path d="M3.535,21.92a5.005,5.005,0,0,1,0-7.071L6.364,12.02a1,1,0,0,1,1.415,1.413L4.95,16.263a3,3,0,0,0,4.243,4.243l2.828-2.828h0a1,1,0,1,1,1.414,1.415L10.607,21.92a5,5,0,0,1-7.072,0Zm2.829-2.828a1,1,0,0,1,0-1.415L17.678,6.364a1,1,0,1,1,1.415,1.414L7.779,19.092a1,1,0,0,1-1.415,0Zm11.314-5.657a1,1,0,0,1,0-1.413l2.829-2.829A3,3,0,1,0,16.263,4.95L13.436,7.777h0a1,1,0,0,1-1.414-1.414l2.828-2.829a5,5,0,1,1,7.071,7.071l-2.828,2.828a1,1,0,0,1-1.415,0Z" transform="translate(-0.728 -0.728)" fill="#fff"></path>
					</svg>
					<span >Zaznacz linki</span>
				</button>
			</li>
			<li >
				<button aria-label="Zaznacz nagłówki">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<rect width="2" height="14" rx="1" transform="translate(5 5)" fill="#fff"></rect>
						<rect width="2" height="14" rx="1" transform="translate(10 5)" fill="#fff"></rect>
						<rect width="2" height="14" rx="1" transform="translate(17 5)" fill="#fff"></rect>
						<rect width="2" height="7" rx="1" transform="translate(12 11) rotate(90)" fill="#fff"></rect>
						<rect width="2" height="5" rx="1" transform="translate(19 5) rotate(90)" fill="#fff"></rect>
						<g fill="none" stroke="#fff" stroke-width="2">
							<rect width="24" height="24" rx="4" stroke="none"></rect>
							<rect x="1" y="1" width="22" height="22" rx="3" fill="none"></rect>
						</g>
					</svg>
					<span >Zaznacz nagłówki</span>
				</button>
			</li>
			<li >
				<button aria-label="Czytnik ekranu">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<g fill="none" stroke="#fff" stroke-width="2">
							<circle cx="12" cy="12" r="12" stroke="none"></circle>
							<circle cx="12" cy="12" r="11" fill="none"></circle>
						</g>
						<path d="M2907.964,170h1.91l1.369-2.584,2.951,8.363,2.5-11.585L2919,170h2.132" transform="translate(-2902.548 -158)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
					</svg>
					<span >Czytnik ekranu</span>
				</button>
			</li>
			<li >
				<button aria-label="Tryb czytania" data-label="Disable Read mode">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
						<g fill="none" stroke="#fff" stroke-width="2">
							<rect width="24" height="24" rx="4" stroke="none"></rect>
							<rect x="1" y="1" width="22" height="22" rx="3" fill="none"></rect>
						</g>
						<rect width="14" height="2" rx="1" transform="translate(5 7)" fill="#fff"></rect>
						<rect width="14" height="2" rx="1" transform="translate(5 11)" fill="#fff"></rect>
						<rect width="7" height="2" rx="1" transform="translate(5 15)" fill="#fff"></rect>
					</svg>
					<span >Tryb czytania</span>
				</button>
			</li>
			<li >Powiększenie</li>
			<li >
				<span >
					<button aria-label="Pomniejsz stronę">
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2">
							<g transform="translate(1 1)">
								<line x1="8" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
							</g>
						</svg>
					</button>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
						<g transform="translate(-843 -150)">
							<g transform="translate(843 150)" fill="none" stroke="#404042" stroke-width="2">
								<rect width="16" height="16" rx="4" stroke="none"></rect>
								<rect x="1" y="1" width="14" height="14" rx="3" fill="none"></rect>
							</g>
							<rect width="10" height="2" rx="1" transform="translate(846 157)" fill="#404042"></rect>
							<path d="M2.829-2029.464l-2.121-2.121a1,1,0,0,1-.289-.793,1,1,0,0,1,.289-.793l2.121-2.121a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414l-1.5,1.5,1.5,1.5a1,1,0,0,1,0,1.415,1,1,0,0,1-.707.293A1,1,0,0,1,2.829-2029.464Z" transform="translate(845.586 2190.378)" fill="#404042"></path>
							<path d="M2.829-2029.464l-2.121-2.121a1,1,0,0,1-.289-.793,1,1,0,0,1,.289-.793l2.121-2.121a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414l-1.5,1.5,1.5,1.5a1,1,0,0,1,0,1.415,1,1,0,0,1-.707.293A1,1,0,0,1,2.829-2029.464Z" transform="translate(856.414 -1874.379) rotate(180)" fill="#404042"></path>
						</g>
					</svg>
					<span >Skalowanie treści <span >{s.contentScaling}<span >%</span></span></span>
					<button aria-label="Powieksz stronę">
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
							<g transform="translate(1 1)">
								<line y2="8" transform="translate(4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
								<line x1="8" transform="translate(0 4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
							</g>
						</svg>
					</button>
				</span>
			</li>
			<li >
				<span>
					<button aria-label="Zmniejsz rozmiar czcionki">
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2">
							<g transform="translate(1 1)">
								<line x1="8" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
							</g>
						</svg>
					</button>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
						<text id="Aa" transform="translate(0 17)" fill="#404042" font-size="16" font-family="Roboto-Medium, Roboto" font-weight="500"><tspan x="0" y="0">Aa</tspan></text>
					</svg>
					<span >Czcionka <span >{s.font}<span >%</span></span></span>
					<button aria-label="Zwiększ rozmiar czcionki">
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
							<g transform="translate(1 1)">
								<line y2="8" transform="translate(4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
								<line x1="8" transform="translate(0 4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
							</g>
						</svg>
					</button>
				</span>
			</li>
			<li >
				<span>
					<button aria-label="Zmniejsz wysokości linii">
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2">
							<g transform="translate(1 1)">
								<line x1="8" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
							</g>
						</svg>
					</button>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
						<g transform="translate(-1178 -62)">
							<g>
								<rect width="10" height="2" rx="1" transform="translate(1184 66)" fill="#404042"></rect>
								<rect width="10" height="2" rx="1" transform="translate(1184 69)" fill="#404042"></rect>
								<rect width="5" height="2" rx="1" transform="translate(1184 72)" fill="#404042"></rect>
								<g transform="translate(1178 2098)" fill="#fff">
									<path d="M 5.000400066375732 -2020.499633789062 L 0.9998999834060669 -2020.499633789062 C 0.7242499589920044 -2020.499633789062 0.4999999701976776 -2020.724365234375 0.4999999701976776 -2021.00048828125 C 0.4999999701976776 -2021.276123046875 0.7242499589920044 -2021.500366210938 0.9998999834060669 -2021.500366210938 L 1.999799966812134 -2021.500366210938 L 2.499799966812134 -2021.500366210938 L 2.499799966812134 -2022.000366210938 L 2.499799966812134 -2034 L 2.499799966812134 -2034.5 L 1.999799966812134 -2034.5 L 0.9998999834060669 -2034.5 C 0.7242499589920044 -2034.5 0.4999999701976776 -2034.724243164062 0.4999999701976776 -2035 C 0.4999999701976776 -2035.275634765625 0.7242499589920044 -2035.499877929688 0.9998999834060669 -2035.499877929688 L 1.999799966812134 -2035.499877929688 L 3.999599933624268 -2035.499877929688 L 5.000400066375732 -2035.499877929688 C 5.276050090789795 -2035.499877929688 5.50029993057251 -2035.275634765625 5.50029993057251 -2035 C 5.50029993057251 -2034.724243164062 5.276050090789795 -2034.5 5.000400066375732 -2034.5 L 3.999599933624268 -2034.5 L 3.499599933624268 -2034.5 L 3.499599933624268 -2034 L 3.499599933624268 -2022.000366210938 L 3.499599933624268 -2021.500366210938 L 3.999599933624268 -2021.500366210938 L 5.000400066375732 -2021.500366210938 C 5.276050090789795 -2021.500366210938 5.50029993057251 -2021.276123046875 5.50029993057251 -2021.00048828125 C 5.50029993057251 -2020.724365234375 5.276050090789795 -2020.499633789062 5.000400066375732 -2020.499633789062 Z" stroke="none"></path>
									<path d="M 5.000400066375732 -2020.999633789062 L 5.000400066375732 -2021.000366210938 L 0.9998999834060669 -2020.999633789062 L 5.000400066375732 -2020.999633789062 M 5.000400066375732 -2019.999633789062 L 0.9998999834060669 -2019.999633789062 C 0.4472999572753906 -2019.999633789062 -3.471374654395731e-08 -2020.447875976562 -3.471374654395731e-08 -2021.00048828125 C -3.471374654395731e-08 -2021.552124023438 0.4472999572753906 -2022.000366210938 0.9998999834060669 -2022.000366210938 L 1.999799966812134 -2022.000366210938 L 1.999799966812134 -2034 L 0.9998999834060669 -2034 C 0.4472999572753906 -2034 -3.471374654395731e-08 -2034.447387695312 -3.471374654395731e-08 -2035 C -3.471374654395731e-08 -2035.552490234375 0.4472999572753906 -2035.999877929688 0.9998999834060669 -2035.999877929688 L 5.000400066375732 -2035.999877929688 C 5.55210018157959 -2035.999877929688 6.00029993057251 -2035.552490234375 6.00029993057251 -2035 C 6.00029993057251 -2034.447387695312 5.55210018157959 -2034 5.000400066375732 -2034 L 3.999599933624268 -2034 L 3.999599933624268 -2022.000366210938 L 5.000400066375732 -2022.000366210938 C 5.55210018157959 -2022.000366210938 6.00029993057251 -2021.552124023438 6.00029993057251 -2021.00048828125 C 6.00029993057251 -2020.447875976562 5.55210018157959 -2019.999633789062 5.000400066375732 -2019.999633789062 Z" stroke="none" fill="#404042"></path>
								</g>
							</g>
						</g>
					</svg>
					<span >Wysokość linii <span >{s.lineHeight}<span >%</span></span></span>
					<button aria-label="Zwiększ wysokości linii">
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
							<g transform="translate(1 1)">
								<line y2="8" transform="translate(4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
								<line x1="8" transform="translate(0 4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
							</g>
						</svg>
					</button>
				</span>
			</li>
			<li >
				<span>
					<button aria-label="Zmniejsz odstęp liter">
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2">
							<g transform="translate(1 1)">
								<line x1="8" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
							</g>
						</svg>
					</button>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
						<g transform="translate(-1209 -64)">
							<rect width="10" height="2" rx="1" transform="translate(1212 64)" fill="#404042"></rect>
							<rect width="10" height="2" rx="1" transform="translate(1212 67)" fill="#404042"></rect>
							<rect width="5" height="2" rx="1" transform="translate(1212 70)" fill="#404042"></rect>
							<g transform="translate(3245 78) rotate(-90)" fill="#fff">
								<path d="M 5.000400066375732 -2020.499633789062 L 0.9998999834060669 -2020.499633789062 C 0.7242499589920044 -2020.499633789062 0.4999999701976776 -2020.724365234375 0.4999999701976776 -2021.00048828125 C 0.4999999701976776 -2021.276123046875 0.7242499589920044 -2021.500366210938 0.9998999834060669 -2021.500366210938 L 1.999799966812134 -2021.500366210938 L 2.499799966812134 -2021.500366210938 L 2.499799966812134 -2022.000366210938 L 2.499799966812134 -2034 L 2.499799966812134 -2034.5 L 1.999799966812134 -2034.5 L 0.9998999834060669 -2034.5 C 0.7242499589920044 -2034.5 0.4999999701976776 -2034.724243164062 0.4999999701976776 -2035 C 0.4999999701976776 -2035.275634765625 0.7242499589920044 -2035.499877929688 0.9998999834060669 -2035.499877929688 L 1.999799966812134 -2035.499877929688 L 3.999599933624268 -2035.499877929688 L 5.000400066375732 -2035.499877929688 C 5.276050090789795 -2035.499877929688 5.50029993057251 -2035.275634765625 5.50029993057251 -2035 C 5.50029993057251 -2034.724243164062 5.276050090789795 -2034.5 5.000400066375732 -2034.5 L 3.999599933624268 -2034.5 L 3.499599933624268 -2034.5 L 3.499599933624268 -2034 L 3.499599933624268 -2022.000366210938 L 3.499599933624268 -2021.500366210938 L 3.999599933624268 -2021.500366210938 L 5.000400066375732 -2021.500366210938 C 5.276050090789795 -2021.500366210938 5.50029993057251 -2021.276123046875 5.50029993057251 -2021.00048828125 C 5.50029993057251 -2020.724365234375 5.276050090789795 -2020.499633789062 5.000400066375732 -2020.499633789062 Z" stroke="none"></path>
								<path d="M 5.000400066375732 -2020.999633789062 L 5.000400066375732 -2021.000366210938 L 0.9998999834060669 -2020.999633789062 L 5.000400066375732 -2020.999633789062 M 5.000400066375732 -2019.999633789062 L 0.9998999834060669 -2019.999633789062 C 0.4472999572753906 -2019.999633789062 -3.471374654395731e-08 -2020.447875976562 -3.471374654395731e-08 -2021.00048828125 C -3.471374654395731e-08 -2021.552124023438 0.4472999572753906 -2022.000366210938 0.9998999834060669 -2022.000366210938 L 1.999799966812134 -2022.000366210938 L 1.999799966812134 -2034 L 0.9998999834060669 -2034 C 0.4472999572753906 -2034 -3.471374654395731e-08 -2034.447387695312 -3.471374654395731e-08 -2035 C -3.471374654395731e-08 -2035.552490234375 0.4472999572753906 -2035.999877929688 0.9998999834060669 -2035.999877929688 L 5.000400066375732 -2035.999877929688 C 5.55210018157959 -2035.999877929688 6.00029993057251 -2035.552490234375 6.00029993057251 -2035 C 6.00029993057251 -2034.447387695312 5.55210018157959 -2034 5.000400066375732 -2034 L 3.999599933624268 -2034 L 3.999599933624268 -2022.000366210938 L 5.000400066375732 -2022.000366210938 C 5.55210018157959 -2022.000366210938 6.00029993057251 -2021.552124023438 6.00029993057251 -2021.00048828125 C 6.00029993057251 -2020.447875976562 5.55210018157959 -2019.999633789062 5.000400066375732 -2019.999633789062 Z" stroke="none" fill="#404042"></path>
							</g>
						</g>
					</svg>
					<span >Odstęp liter <span >{s.letterSpacing}<span >%</span></span></span>
					<button aria-label="Zwiększ odstęp liter">
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
							<g transform="translate(1 1)">
								<line y2="8" transform="translate(4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
								<line x1="8" transform="translate(0 4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
							</g>
						</svg>
					</button>
				</span>
			</li>
			<li >
				<button aria-label="Reset">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18">
						<path d="M9,18a.75.75,0,0,1,0-1.5,7.5,7.5,0,1,0,0-15A7.531,7.531,0,0,0,2.507,5.25H3.75a.75.75,0,0,1,0,1.5h-3A.75.75,0,0,1,0,6V3A.75.75,0,0,1,1.5,3V4.019A9.089,9.089,0,0,1,2.636,2.636,9,9,0,0,1,15.364,15.365,8.94,8.94,0,0,1,9,18Z" fill="#fff"></path>
					</svg>
					<span >Reset</span>
				</button>
			</li>
        </ul>
	</div>
    )
}

export default Accessibility;