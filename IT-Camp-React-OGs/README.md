1. Sa sledećim nizom korisnika:

const users = [
{ id: 1, name: "Ana Petrović", email: "ana.p@example.com", isActive: true },
{ id: 2, name: "Marko Jovanović", email: "marko.j@example.com", isActive: false },
{ id: 3, name: "Ivana Nikolić", email: "ivana.n@example.com", isActive: true },
{ id: 4, name: "Luka Savić", email: "luka.s@example.com", isActive: false },
{ id: 5, name: "Milica Stojanović", email: "milica.s@example.com", isActive: true },
];

2. Napravi sledeće komponente:
   a) UserList.jsx
   Prima ceo niz users preko props

Prikazuje sve korisnike kroz <UserCard user={user} />

b) UserCard.jsx
Prima jedan user objekat preko props

Prikazuje: Ime, Email, i Status korisnika (Aktivan / Nije aktivan)

UserCard komponenta je samo jedan od objekata u datom trenutku, dok UserList moze da ih izmapira
kao niz objekata. Na kraju u App.jsx treba da ima samo <UserList users={users} />

U UserList, ima jos jednu .map() koja prikazuje samo aktivne korisnike ispod glavne liste.
