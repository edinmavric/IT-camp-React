_DOMACI_

Zadatak 1: Napraviti komponentu Card koja prima props:

title: string

description?: string (opciono)

onSelect: (id: number) => void

I prikazuje ih. Klikom na karticu, ispisuje u konzoli "Card selected with id: X".

---

Zadatak 2: stilizovati prethodnu Card komponentu Tailwind-om:

Kartica ima shadow-lg, rounded-xl, p-4, hover:scale-105.

Naslov (title) je boldovan i veći (text-xl font-bold).

Opis (description) je manji i sivi tekst (text-gray-600).

Klikabilna animacija na hover.

👉 Na kraju napravite grid sa 3 kartice u redu (grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4).
