/**
 * donors.ts
 * ──────────
 * Editá esta lista para agregar o actualizar donantes.
 * Después de cada cambio hacé: npm run build
 *
 * Campos:
 *   name   — nombre del donante (string)
 *   amount — monto donado en ARS (number, sin puntos ni $)
 *   date   — fecha en formato "DD/MM/AAAA" (string)
 *
 * Ejemplo para agregar uno nuevo:
 *   { name: "Juan",  amount: 5000,  date: "15/03/2026" },
 */

export interface Donor {
  name:   string;
  amount: number;
  date:   string;
}

export const donors: Donor[] = [
  // ── Agregá donantes acá abajo ──────────────────────────
  // { name: "Fulanito",  amount: 10000, date: "15/03/2026" },
  // { name: "Menganita", amount:  5000, date: "14/03/2026" },
  // ───────────────────────────────────────────────────────
  { name: "Leo", amount:  1000, date: "15/03/2026" }
];