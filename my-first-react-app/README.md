- Početna stranica /
  Prikaži listu svih korisnika (link: /users)
  Ime svakog korisnika vodi na njegovu profil stranicu: /users/:userId

- Stranica profila korisnika /users/:userId
  Dohvati i prikaži detalje o korisniku: ime, email, kompanija itd.
  Ispod toga prikaži sve postove tog korisnika – naslov i kratak pregled
  Svaki post vodi na stranicu sa detaljima posta: /posts/:postId

- Stranica detalja posta /posts/:postId
  Prikaži naslov i telo posta
  Dohvati i prikaži sve komentare za taj post
  (API: /comments?postId=...)

- API krajnje tačke (endpoints):
  Korisnici: https://jsonplaceholder.typicode.com/users
  Postovi korisnika: https://jsonplaceholder.typicode.com/posts?userId={id}
  Post po ID-u: https://jsonplaceholder.typicode.com/posts/{id}
  Komentari za post: https://jsonplaceholder.typicode.com/comments?postId={id}
