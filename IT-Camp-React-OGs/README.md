Napraviti React aplikaciju koja ima sledeće funkcionalnosti:

Deo 1: Unos korisnika
input za ime
radio dugmići za izbor: user ili admin
dugme “Dodaj korisnika”
nakon dodavanja, ime iz inputa se briše

Deo 2: Lista korisnika
prikaz svih dodatih korisnika u listi
admin korisnici su podebljani
svaki korisnik ima dugme "Obriši"
koristi id sa Date.now() za unikatnost

Deo 3: Uslovno prikazivanje
dugme “Prikaži/Sakrij korisnike”
koristi useState boolean za prikaz

Bonus izazov:
Dodati opciju “Obriši sve korisnike”.

---

Napraviti aplikaciju za upravljanje zadacima sa osnovnim i dodatnim funkcionalnostima koristeći useState.

Deo 1: Dodavanje zadataka
Input polje za unos teksta zadatka
Dugme “Dodaj zadatak”
Nakon dodavanja, input se briše
Svaki zadatak ima id (Date.now()), naziv, i status (zavrsen: false)

Deo 2: Lista zadataka
Prikaz svih zadataka kao lista
Svaki zadatak ima:
tekst zadatka
dugme “Obriši”
dugme “Završi” (koje menja status u zavrsen: true)
Ako je zadatak završen, tekst neka bude precrtan (textDecoration: 'line-through')

Deo 3: Prikaz opcija
Dugme: “Prikaži/Sakrij sve zadatke”
Dugme: “Obriši sve zadatke”
Brojač: "Ukupno: X / Završeno: Y"

Bonus funkcionalnosti (za naprednije)
Dodaj radio dugmiće za filter:
"Svi zadaci"
"Završeni"
"Nezavršeni"

Dodaj mogućnost editovanja teksta zadatka (klik na tekst da se pretvori u input)
