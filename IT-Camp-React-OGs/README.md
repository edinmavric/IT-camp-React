- 1: Prikaz jednog posta na osnovu ID-ja
  Napraviti komponentu koja prikazuje jedan post na osnovu ID-ja unetog u input polje.

API endpoint:
https://jsonplaceholder.typicode.com/posts/{id}

Input za ID posta
useEffect koji poziva API svaki put kad se ID promeni
Loading i error prikaz
Prikaz: title, body

---

- 2: Pretraga postova po title-u
  Napraviti komponentu koja omogućava korisniku da unese reč i filtrira postove čiji title sadrži tu reč (klijent-side filtracija nakon fetch-a).

API endpoint:
https://jsonplaceholder.typicode.com/posts

fetch svih postova samo jednom (na mount)
Input za tekst
Prikaz postova čiji title sadrži uneseni tekst (case-insensitive)
Prikaz titlova postova

---

- 3: Prikaz komentara po ID-u posta
  Napraviti komponentu u kojoj korisnik unosi ID posta, a aplikacija prikazuje sve komentare za taj post.

API endpoint:
https://jsonplaceholder.typicode.com/comments?postId={id}

Input za unos ID posta
Fetch komentara svaki put kad se ID promeni
Loading i error stanje
Prikaz komentara (name, email, body)
