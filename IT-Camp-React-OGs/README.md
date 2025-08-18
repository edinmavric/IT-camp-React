OVAJ DOMACI ODRADITI SA AXIOS-OM
Domaci:

Početna stranica /

Prikaži listu svih korisnika (link: /users)

Ime svakog korisnika vodi na njegovu profil stranicu: /users/:userId

Forma za dodavanje korisnika (POST)

Dugme za brisanje korisnika (DELETE)

---

Stranica profila korisnika /users/:userId

Dohvati i prikaži detalje o korisniku: ime, email, kompanija itd.

Ispod toga prikaži sve postove tog korisnika – naslov i kratak pregled

Svaki post vodi na stranicu sa detaljima posta: /posts/:postId

Forma za dodavanje postova (POST)

Dugme za brisanje postova (DELETE)

---

Stranica detalja posta /posts/:postId

Prikaži naslov i telo posta

Dohvati i prikaži sve komentare za taj post (API: /comments?postId=...)

Forma za dodavanje komentara (POST)

Dugme za brisanje komentara (DELETE)

---

API krajnje tačke (endpoints):

Korisnici: https://jsonplaceholder.typicode.com/users

Postovi korisnika: https://jsonplaceholder.typicode.com/posts?userId={id}

Post po ID-u: https://jsonplaceholder.typicode.com/posts/{id}

Komentari za post: https://jsonplaceholder.typicode.com/comments?postId={id}

---

**PROJEKTI**:

Svi projekti ce imati autentikaciju sa localStorage-om ili sessionStorage-om (Zavisi od vrste projekta).

Svi projekti ce imati osnovnu strukturu sa navigacijom i stranicama koje su navedene ispod i dodatne stranice (po izboru).

Svi projekti ce pratiti najbolje prakse, kao u pisanju koda, tako i u organizaciji foldera i komponenti, itd...

Krajni rok za zavrsetak je 31. Avgust 2025.

---

1. Benjamin — Aplikacija za učenje jezika

   Naziv: LanguageLearner

   Opis: Napravi aplikaciju za učenje jezika. Korisnik može da bira jezik (npr. engleski, nemački, turski), a zatim da vidi lekcije podeljene po temama (pozdravi, brojevi, boje...). Svaka lekcija ima reči i test kviz na kraju.

   Struktura:

- /languages – lista jezika

- /languages/:languageId – lekcije izabranog jezika

- /languages/:languageId/lessons/:lessonId – detalji lekcije + kviz

- /practice – nasumična vežbanja (mix reči)

- /favorites – omiljene lekcije korisnika

- /profile – korisnikov napredak

---

2. Mustafa — Studentski portal

   Naziv: StudentConnect

   Opis: Web aplikacija za upravljanje studentskim životom: raspored predavanja, domaći zadaci, obaveštenja i forum za pitanja.

   Struktura:

- /schedule – nedeljni raspored

- /homeworks – lista domaćih zadataka

- /homeworks/:homeworkId – detalji domaćeg

- /forum – lista tema na forumu

- /forum/:topicId – poruke u okviru teme

- /notifications – sistemska i korisnička obaveštenja

- /profile/settings – korisnički podešavanja

---

3. Fatih — Aplikacija za recepte

   Naziv: CookMaster

   Opis: Korisnici mogu pregledati recepte, filtrirati po kategorijama, videti detalje i čuvati omiljene recepte. Takođe mogu dodati svoj recept.

   Struktura:

- /recipes – svi recepti

- /recipes/category/:categoryName – recepti po kategoriji (npr. doručak)

- /recipes/:recipeId – detalji recepta

- /add-recipe – forma za dodavanje recepta

- /favorites – omiljeni recepti

- /my-recipes – recepti koje je korisnik postavio

- /profile/edit – izmena korisničkog profila

---

4. Danel — Aplikacija za vežbanje i fitnes

   Naziv: FitTrack

   Opis: Aplikacija prikazuje vežbe po kategorijama, korisnik može kreirati plan treninga, pratiti napredak i unositi rezultate.

   Struktura:

- /workouts – svi treninzi

- /workouts/category/:category – treninzi po grupi mišića

- /workouts/:workoutId – detaljan prikaz treninga

- /my-plan – plan vežbanja korisnika

- /progress – grafikon napretka

- /goals – postavljanje i praćenje ciljeva

- /add-workout – dodavanje sopstvene rutine

---

5. Muhamed — Film baza sa ocenjivanjem

   Naziv: MovieMania

   Opis: Aplikacija za pregled i ocenjivanje filmova. Korisnici mogu ostavljati komentare i gledati ocene drugih.

   Struktura:

- /movies – svi filmovi

- /movies/genre/:genre – filmovi po žanru

- /movies/:movieId – detalji filma i komentari

- /reviews – recenzije koje je korisnik ostavio

- /top-rated – najbolje ocenjeni filmovi

- /watchlist – lista za gledanje

- /profile/settings – podešavanja korisnika

---

6. Alem — Turistički vodič kroz grad

   Naziv: CityGuide

   Opis: Interaktivna mapa i vodič kroz atrakcije, restorane i događaje u nekom gradu. Korisnici mogu dodavati mesta i ocenjivati ih.

   Struktura:

- /places – svi objekti

- /places/category/:category – atrakcije po tipu (npr. muzeji)

- /places/:placeId – detalji mesta

- /map – prikaz mapa sa pinovima

- /add-place – forma za dodavanje novog mesta

- /events – događaji u gradu

- /my-visits – mesta koja je korisnik posetio ili planira

---

7. Ensar — E-commerce demo sa korpom

   Naziv: ShopEasy

   Opis: Aplikacija sa proizvodima, detaljnim prikazima, mogućnošću dodavanja u korpu i jednostavnom kupovinom.

   Struktura:

- /products – svi proizvodi

- /products/category/:category – proizvodi po kategoriji

- /products/:productId – detalji proizvoda

- /cart – korpa korisnika

- /checkout – proces naručivanja

- /orders – lista prethodnih porudžbina

- /admin/products – (opciono) dodavanje proizvoda

---

8. Edin — Blog platforma sa korisnicima

   Naziv: MyBlog

   Opis: Višekorisnička blog platforma. Svaki korisnik može pisati postove, uređivati ih, komentarisati postove drugih i videti profil.

   Struktura:

- /posts – svi postovi

- /posts/tag/:tag – postovi po tagovima

- /posts/:postId – detalji posta + komentari

- /users/:userId – korisnikov profil i postovi

- /new-post – forma za pisanje posta

- /my-posts – svi moji postovi

- /drafts – nedovršeni postovi

---
