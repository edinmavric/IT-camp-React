Napraviti aplikaciju koja omogućava korisniku da promeni jezik interfejsa (npr. en ili sr) koristeći React createContext i useContext.

Zahtevi:
Napraviti LanguageContext koji sadrži:
trenutni jezik (language)
funkciju za promenu jezika (setLanguage)
Obezbediti LanguageProvider komponentu koja će biti obavijač oko celog App-a i omogućiti pristup kontekstu.

Napraviti sledeće komponente:
Navbar: prikazuje poruku "Trenutni jezik: en/sr" i dugmad za promenu jezika (EN, SR)
HomePage: prikazuje poruku na jeziku koji je trenutno aktivan
Ako je en: "Welcome!"
Ako je sr: "Dobrodošli!"
Prilikom promene jezika iz Navbar-a, tekst u HomePage komponenti se automatski ažurira.
