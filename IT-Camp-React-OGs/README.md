Zadatak:

1. Početna stranica (Home)
Prikazuje listu postova (naslov + dugme „Detalji”)
Klikom na „Detalji” otvara se stranica sa prikazom detalja posta
Postovi se učitavaju pomoću useEffect (simulacija fetchovanja)
Klik na „Detalji” postavlja trenutni post u kontekst (nema useParams)

2. Detalji posta (Post Details)
Prikazuje naslov i sadržaj trenutno selektovanog posta iz PostContext
Ako nije izabran nijedan post, prikazuje poruku: “Nema odabranog posta”

3. Dodavanje novog posta (New Post)
Forma sa dva inputa: title i content
Prikaz unetog posta putem alert-a ili u konzoli
Bonus: dodati ga u listu postova (ako žele da vežbaju dalje)

4. Profil korisnika (Profile)
Prikazuje korisničko ime i email (iz UserContext)
Omogućava promenu imena (input + dugme za čuvanje)

Upustvo:
1. Kreirati UserContext:
Čuvati korisnika: { name: 'Ana', email: 'ana@email.com' }
Omogućiti menjanje imena kroz setUser

2. Kreirati PostContext:
Čuvati trenutno selektovani post: { id, title, content }
Funkcija setSelectedPost(post) se poziva iz Home komponente

3. Rute:
Koristiti BrowserRouter i definisati sledeće rute:
<Route path="/" element={<Home />} />
<Route path="/post" element={<PostDetails />} />
<Route path="/new" element={<NewPost />} />
<Route path="/profile" element={<Profile />} />

Lista komponenti:
Navbar.js
- Navigacija sa linkovima:
- Početna
- Novi post
- Profil

Home.js
- useEffect za simulaciju fetchovanja postova
- Lista postova + dugme „Detalji“
- Klik na „Detalji” → setSelectedPost(post) + navigacija na /post

PostDetails.js
- Prikaz podataka iz selectedPost (kroz useContext)
- Ako nema posta, prikazati: "Nema odabranog posta"

NewPost.js
- Forma sa dva inputa (naslov + sadržaj)
- Prikaz unetih podataka kroz alert() ili console.log()

Profile.js
- Prikaz korisničkog imena i email-a
- Omogućena promena imena

Bonus izazovi (opciono):
1. Dodajte localStorage za korisnika da se ime pamti pri refreshu
2. Omogućite dodavanje novog posta u Home.js (kao dodatnu funkcionalnost)
3. Dodajte context za temu (light/dark) i omogućite promenu teme u Navbar.js
