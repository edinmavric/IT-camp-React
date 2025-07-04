TEHNIČKI ZAHTEVI
Koristi React Router (react-router-dom)

Kreirati sledeće stranice:

/ → Home stranica;

/destinations → Lista popularnih destinacija;

/offers → Lista aktuelnih letnjih ponuda;

/about → O agenciji;

Kreirati layout komponentu sa navigacijom.

Navigacija treba da ima linkove ka svim stranicama (koristi <Link>).

Layout treba da koristi Outlet da prikazuje sadržaj stranica.

Navigacija treba da se prikazuje svuda.

Na dnu svake stranice treba da bude footer sa imenom agencije.

Kreirati posebne komponente za prikaz podataka.

DestinationCard.jsx za prikaz jedne destinacije (prihvata name i country kao props).

OfferCard.jsx za prikaz jedne ponude (prihvata title i price kao props, ali koristi i children da se prikaže dodatna informacija o kategoriji).

Koristiti map() za prikaz liste podataka.

Prikazati listu destinacija i ponuda korišćenjem .map().

Koristiti filter() za selekciju podataka.

Prikazivati samo popularne destinacije.

Prikazivati samo letnje ponude.

Kondicioni rendering.

Ako nema rezultata (npr. ako filter ne vrati ništa), prikazati poruku: „Nema dostupnih ponuda.“

export const destinations = [
{ id: 1, name: \"Pariz\", country: \"Francuska\", popular: true },
{ id: 2, name: \"Barselona\", country: \"Španija\", popular: false },
{ id: 3, name: \"Rim\", country: \"Italija\", popular: true }
];

export const offers = [
{ id: 1, title: \"Letovanje u Grčkoj\", price: 450, category: \"leto\" },
{ id: 2, title: \"Zimovanje na Kopaoniku\", price: 600, category: \"zima\" },
{ id: 3, title: \"Prolećni city break\", price: 300, category: \"gradovi\" }
];

==========

Kada su gotovi, projekat treba da ispunjava sledeće:
Radi bez grešaka.

Navigacija vodi na prave stranice.

Prikaz liste radi uz map().

Prikaz samo selektovanih podataka uz filter().

Komponente pravilno koriste props.

Neka komponenta koristi i children.

404 stranica se prikazuje za nepostojeće rute.

Kod je pregledan i uredan.
