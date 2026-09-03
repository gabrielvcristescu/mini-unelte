# Mini Unelte

Colecție de mici unelte interactive și experimente web pentru calcul, text, audio, imagine, educație, jocuri și date publice.

**Versiune live:** https://www.agassante.com/tools/

## Despre proiect

**Mini Unelte** este o colecție de **145 de unelte interactive** care rulează direct în browser.

Colecția este selectată, testată și integrată de **Gabriel Valentin Cristescu**. Implementarea a fost realizată cu asistență AI.

Unele pagini sunt utilitare simple, altele sunt simulatoare, demonstrații educaționale sau experimente mai tehnice. Scopul colecției este să păstreze instrumentele mici ușor de deschis, ușor de înțeles și utilizabile fără instalare.

## Categorii

Colecția include unelte din mai multe domenii:

- conversii și calcul;
- electronică și hardware;
- geo și navigație;
- text și codificare;
- Morse, Braille și alfabet NATO;
- cifruri și criptare;
- imagine și culoare;
- audio și muzică;
- instrumente și sinteză;
- educație;
- jocuri și quiz-uri;
- date publice.

## Featured

Câteva dintre proiectele mai complexe sau mai vizuale sunt evidențiate în secțiunea **Featured**:

- **Frequency Compression Lab**
- **Time Stretch Comparison**
- **Simulator calculator grafic**
- **Șah**

## Cum funcționează

Majoritatea uneltelor:

- rulează complet local în browser;
- nu necesită cont;
- nu necesită instalare;
- nu trimit datele utilizatorului către un server;
- funcționează atât pe desktop, cât și pe mobil;
- au teme **light / dark**;
- permit afișarea codului sursă direct în pagină.

Unele unelte folosesc servicii publice pentru date în timp real, de exemplu pentru vreme, geocodare, cutremure, poziția Stației Spațiale Internaționale sau informații publice din alte surse.

## Rulare locală

Pentru majoritatea paginilor este suficient să clonezi repository-ul și să deschizi `index.html`.

```bash
git clone https://github.com/USERNAME/mini-unelte.git
cd mini-unelte
```

Apoi deschide `index.html` într-un browser modern.

Pentru paginile care folosesc API-uri publice sau funcții web care pot fi restricționate de browser atunci când sunt deschise direct din sistemul de fișiere, este recomandat un server local simplu:

```bash
python -m http.server 8000
```

și apoi:

```text
http://localhost:8000/
```

## Structură

Fișierele sunt intenționat păstrate cât mai independente.

Exemple:

```text
index.html
shared.css
theme.js
site.js
about.html
credits.html
CREDITS.md
LICENSE
*.html
pieces/
LICENSES/
```

Fiecare unealtă este, în general, o pagină HTML separată, cu JavaScript și CSS local acolo unde este necesar.

## Surse și licențe

Codul original al colecției este publicat sub licența **MIT**, cu excepția componentelor terțe care își păstrează propriile licențe.

Pentru biblioteci, seturi de date, API-uri, imagini și alte resurse externe, vezi:

- [`CREDITS.md`](CREDITS.md)
- [`credits.html`](credits.html)
- folderul [`LICENSES`](LICENSES)

Printre resursele folosite se află, în funcție de unealtă, proiecte și servicii precum PrismJS, Tone.js, OpenStreetMap, Open-Meteo, USGS, Open Food Facts, Wikipedia/Wikimedia și altele.

## Asistență AI

Implementarea mai multor unelte a fost realizată cu **asistență AI**, în cadrul unui proces iterativ de proiectare, testare, corectare și integrare.

Selecția ideilor, direcția proiectului, testarea, integrarea și deciziile privind comportamentul și interfața colecției aparțin lui **Gabriel Valentin Cristescu**.

## Agassante

Mini Unelte este un proiect separat de **Agassante**, un proiect experimental de asistență pentru persoane nevăzătoare și cu deficiențe de vedere.

Mai multe informații:

https://www.agassante.com

Instrumentele și prototipurile interne direct legate de Agassante nu sunt incluse în acest repository public.

## Autor

**Gabriel Valentin Cristescu**

2026
