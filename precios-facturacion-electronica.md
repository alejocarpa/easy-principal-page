# Precios — Facturación electrónica DIAN

> **Fuente de verdad** para costos del proveedor y precios al cliente.
> Si el proveedor cambia tarifas, actualiza **solo este archivo**. Luego pide al agente que sincronice las páginas.

Última actualización: 2026-03-16  
Estrategia actual: **margen bajo (captación)** — aún sin base de clientes FE.

---

## Costos del proveedor (lo que EASY paga)

| Paquete | Emisiones / mes | Costo mensual | Costo anual (×12) |
|---------|-----------------|---------------|-------------------|
| FE 120  | 120             | $30.000       | $360.000          |
| FE 240  | 240             | $40.000       | $480.000          |
| FE 360  | 360             | $50.000       | $600.000          |

Notas del proveedor:
- El paquete anual se calcula como **mensual × 12** (sin descuento).
- El cupo es por mes (confirmar con el proveedor si sobrantes acumulan o no).

---

## Precios al cliente (lo que EASY cobra)

Add-on opcional para **EASY Business** y **EASY POS**.  
Si el cliente no necesita FE, contrata solo el plan de software.

| Paquete | Emisiones / mes | Precio mensual | Precio anual (×12) | Margen / mes | Margen / año |
|---------|-----------------|----------------|--------------------|--------------|--------------|
| FE 120  | 120             | **$35.000**    | **$420.000**       | $5.000       | $60.000      |
| FE 240  | 240             | **$45.000**    | **$540.000**       | $5.000       | $60.000      |
| FE 360  | 360             | **$59.000**    | **$708.000**       | $9.000       | $108.000     |

### Reglas comerciales

1. **FE anual = ×12.** No aplica “pagas 10, llevas 12” (el proveedor cobra 12 meses).
2. **Software anual** (Business / POS / School): sí aplica **pagas 10, llevas 12**.
3. FE es **add-on**: no está incluida en el precio base de los planes.
4. Paquete **recomendado** en la web: **FE 240**.
5. Emisiones extra (si se pasan del cupo): cotizar **$300–$350** por emisión (revisar al subir márgenes).

---

## Cómo se suma al plan de software (referencia)

Precio final = plan software + paquete FE elegido.

Ejemplos mensuales (con precios de software actuales):

| Plan software        | Sin FE    | + FE 120  | + FE 240  | + FE 360  |
|----------------------|-----------|-----------|-----------|-----------|
| POS Negocio          | $49.000   | $84.000   | $94.000   | $108.000  |
| POS Pro              | $89.000   | $124.000  | $134.000  | $148.000  |
| Business Emprendedor | $69.000   | $104.000  | $114.000  | $128.000  |
| Business Pyme        | $129.000  | $164.000  | $174.000  | $188.000  |
| Business Premium     | $219.000  | $254.000  | $264.000  | $278.000  |
| Combo Comercio       | $159.000  | $194.000  | $204.000  | $218.000  |

---

## Páginas a sincronizar cuando cambien estos precios

- `index.html` — bloque `#planes-fe`, extras y textos de precios
- `easy-business/index.html` — bloque `#planes-fe`, extras, FAQ y JSON-LD
- `easy-pos/index.html` — bloque `#planes-fe`, extras, FAQ y JSON-LD

---

## Historial de cambios

| Fecha      | Cambio                                      | Motivo                          |
|------------|---------------------------------------------|---------------------------------|
| 2026-03-16 | Precios cliente $35k / $45k / $59k          | Captación, margen bajo inicial  |
