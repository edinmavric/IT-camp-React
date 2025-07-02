/ - HomePage (dobrodošlica i linkovi ka drugim stranicama)
/students - Lista studenata
/courses - Lista kurseva
/about - O sajtu

1. Home stranica
   Kratka dobrodošlica.
   Navigacija do svih stranica.

2. Students stranica
   Import liste studenata (npr. ime, godina, smer, aktivan/neaktivan).
   Prikaz preko .map() kroz StudentCard komponentu.
   Napraviti filter() da se prikazuju samo aktivni studenti.
   Svaki student u props šalje ime, smer i godinu.

3. Courses stranica
   Lista kurseva (npr. naziv, predavač, broj bodova).
   Prikaz preko CourseCard komponente.
   Moguće koristiti filter() za prikaz kurseva iz određene oblasti (npr. samo frontend/backend).
   Dodati uslovno renderovanje (npr. ako nema kurseva – ispis “Nema kurseva”).

4. Layout komponenta
   Header sa Link navigacijom (Home | Students | Courses | About).
   Footer kao children koji se prikazuje svuda.
   Sadrži Outlet.
