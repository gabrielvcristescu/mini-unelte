# Surse, credite și proveniență

## Proiect

**Mini Unelte** este o colecție publică de 145 de unelte interactive și experimente web.

Selecție, direcție, testare și integrare: **Gabriel Valentin Cristescu**.  
Implementarea a fost realizată cu **asistență AI**.

Colecția combină:
- utilitare care implementează formule și algoritmi cunoscuți;
- simulatoare și demonstrații educaționale;
- instrumente care folosesc date publice;
- experimente audio, vizuale și interactive dezvoltate iterativ.

Versiunea publică este disponibilă la:

https://www.agassante.com/tools/

## Proiecte evidențiate

### Frequency Compression Lab

Experiment de procesare audio dezvoltat și testat de Gabriel Valentin Cristescu cu asistență AI.

Explorează metode cunoscute de compresie spectrală și transformare a frecvenței, într-un context legat de accesibilitatea auditivă.

### Time Stretch Comparison

Experiment comparativ dezvoltat și testat de Gabriel Valentin Cristescu cu asistență AI.

Prezintă și compară mai multe familii de algoritmi pentru modificarea duratei unui semnal audio fără simpla schimbare a vitezei de redare.

### Simulator calculator grafic

Simulator interactiv de calculator grafic realizat pentru browser.

### Șah

Implementare interactivă a unui joc de șah în browser, cu piese grafice provenite din setul Cburnett menționat mai jos.

---

# Biblioteci și componente terțe

## PrismJS

Folosit pentru evidențierea sintaxei în panourile de cod sursă afișate în paginile colecției.

Versiune distribuită: **PrismJS 1.30.0**  
Licență: **MIT**

Surse:

https://prismjs.com/  
https://github.com/PrismJS/prism

## Tone.js

Folosit de unele dintre instrumentele și experimentele audio.

Licență: **MIT**

Sursă:

https://github.com/Tonejs/Tone.js

## Piese de șah Cburnett

Autor: **Colin M. L. Burnett**

Fișierele utilizate în proiect includ:

```text
pieces/wK.svg
pieces/wQ.svg
pieces/wR.svg
pieces/wB.svg
pieces/wN.svg
pieces/wP.svg
pieces/bK.svg
pieces/bQ.svg
pieces/bR.svg
pieces/bB.svg
pieces/bN.svg
pieces/bP.svg
```

Setul este utilizat și de Lichess.

Sursă:

https://github.com/lichess-org/lila/tree/master/public/piece/cburnett

Repository-ul Lichess indică pentru setul `cburnett` licența **GPLv2+**.

Fișierele originale sunt asociate și cu Wikimedia Commons, unde pot exista informații suplimentare privind licențierea și atribuirea.

## Google Fonts

Mai multe pagini folosesc:

- **IBM Plex Sans**
- **JetBrains Mono**

Fonturile sunt încărcate prin Google Fonts și nu sunt redistribuite în repository.

Sursă:

https://fonts.google.com/

---

# Date publice și servicii externe

## OpenStreetMap / Nominatim

Folosit pentru geocodare, geocodare inversă și unele funcții geografice.

Datele OpenStreetMap sunt licențiate sub **ODbL 1.0** și necesită atribuire.

Serviciul public Nominatim are propria politică de utilizare.

Surse:

https://www.openstreetmap.org/copyright  
https://operations.osmfoundation.org/policies/nominatim/

## Open-Meteo

Folosit de unele unelte pentru:
- vreme;
- prognoză;
- elevație.

Open-Meteo publică datele API sub **CC BY 4.0**, cu cerință de atribuire.

Sursă:

https://open-meteo.com/en/license

## USGS Earthquake Hazards Program

`earthquakes.html` folosește fluxurile publice GeoJSON ale USGS pentru cutremure recente.

Sursă:

https://earthquake.usgs.gov/

## WhereTheISS.at

`iss.html` folosește API-ul public WhereTheISS.at pentru poziția curentă a Stației Spațiale Internaționale.

Sursă:

https://wheretheiss.at/

## Wikimedia Commons

`iss.html` folosește o hartă equirectangulară a lumii provenită din Wikimedia Commons.

Atribuirea și legătura către sursă sunt afișate în pagina uneltei.

Sursă:

https://commons.wikimedia.org/

## mledoze/countries

`countries.html` utilizează date din proiectul:

https://github.com/mledoze/countries

Licență: **ODbL-1.0**

## Open Food Facts

`food-facts.html` folosește API-ul public Open Food Facts.

Sursă:

https://world.openfoodfacts.org/

Datele și conținutul Open Food Facts rămân supuse condițiilor și licențelor proiectului.

## Wikipedia / Wikimedia

`wikipedia.html` folosește API-uri Wikipedia pentru căutare și rezumate.

Conținutul rămâne supus licențelor și cerințelor de atribuire ale proiectelor Wikimedia și ale paginilor sursă.

Sursă:

https://www.wikipedia.org/

## FlagCDN / Flagpedia

`quiz-flags.html` poate încărca imagini cu steaguri prin infrastructura FlagCDN / Flagpedia.

Sursă:

https://flagpedia.net/

---

# Despre algoritmi și formule

Numeroase unelte din colecție implementează formule, metode sau algoritmi standard, de exemplu:

- legea lui Ohm;
- formula lui Heron;
- ecuația de gradul al doilea;
- distanța Haversine;
- codarea Huffman;
- codarea Base64;
- SHA / hashing prin funcții disponibile în browser;
- conversii numerice și Unicode;
- transformări audio și spectrale;
- noțiuni de optică geometrică;
- formule pentru electronică, energie și acustică.

În aceste cazuri, ideile matematice și algoritmice sunt cunoștințe publice sau standarde cunoscute. Implementarea concretă din proiect a fost realizată și adaptată pentru colecția Mini Unelte.

---

# Asistență AI

O parte importantă a implementării a fost realizată cu **asistență AI**.

AI-ul a fost folosit ca instrument de dezvoltare pentru:
- generarea și reformularea codului;
- explorarea unor variante de implementare;
- depanare;
- refactorizare;
- adaptarea interfețelor;
- documentare tehnică;
- verificări și corecții iterative.

Selecția ideilor, direcția proiectului, evaluarea rezultatelor, testarea, alegerea variantelor și integrarea finală aparțin lui **Gabriel Valentin Cristescu**.

---

# Agassante

Mini Unelte este un proiect separat de **Agassante**.

Agassante este un proiect experimental de asistență pentru persoane nevăzătoare și cu deficiențe de vedere.

Mai multe informații:

https://www.agassante.com/

Instrumentele, prototipurile și experimentele interne direct legate de Agassante nu sunt incluse în repository-ul public Mini Unelte.

---

# Notă privind licențele

Codul original al colecției este publicat sub licența indicată în fișierul `LICENSE`.

Bibliotecile, seturile de date, fonturile, imaginile, API-urile și celelalte componente terțe își păstrează propriile licențe și condiții de utilizare.

Acest fișier urmărește să documenteze proveniența cunoscută a componentelor și serviciilor folosite de proiect.

Dacă o resursă externă este actualizată, mutată sau își schimbă licența, trebuie consultată sursa oficială corespunzătoare.

---

**Gabriel Valentin Cristescu**  
2026
