Zadatak 1 – To-do aplikacija (osnovna)
Napraviti To-do aplikaciju koja ima sledeće funkcionalnosti:

Unos novog zadatka (tekstualni input)
Prikaz liste zadataka ispod inputa
Brisanje zadatka klikom na dugme „Obriši”
Dodati filter:
Prikaži sve
Prikaži samo završene
Prikaži samo nezavršene
Pomoć: svaki zadatak može da bude objekat sa id, tekst i završeno (true/false)
{
id: 1,
tekst: 'Uraditi domaći',
zavrseno: false
}

Zadatak 2 – Preuzimanje i prikaz korisnika sa API-ja
Napraviti komponentu koja:

Pri učitavanju stranice (mount) preuzima korisnike sa API-ja:
https://jsonplaceholder.typicode.com/users
Prikazuje imena korisnika u listi
Dodaje loading poruku dok se podaci preuzimaju
Ako dođe do greške, prikaži poruku o grešci
Pomoć: koristi useEffect za fetch i useState za korisnike, loading i grešku.

Zadatak 3 – Razumevanje useState i useEffect

Šta je useState, čemu služi, zašto ne možemo koristiti obične promenljive
Šta je useEffect, čemu služi, kada se izvršava i kako se koristi sa zavisnostima (dependencies)
Zašto ne bismo mogli da preuzimamo podatke bez useEffect-a
Kada se koristi useEffect, a kada samo useState