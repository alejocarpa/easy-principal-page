# Precios EASY — Facturación electrónica, software y add-ons

> **Fuente de verdad** para costos del proveedor y precios al cliente.
> Si el proveedor cambia tarifas o defines nuevos precios, actualiza **solo este archivo**. Luego pide al agente que sincronice las páginas.

Última actualización: 2026-03-20  
Estrategia actual: **margen bajo (captación)** + **POS y Business al mismo precio**.

---

## Planes de software (POS y Business)

EASY POS y EASY Business cuestan **lo mismo** y comparten los **mismos módulos base**.  
La diferencia es la experiencia (mostrador/caja vs ERP/pedidos).

| Producto       | Precio mensual | Precio anual (10×) | Notas                          |
|----------------|----------------|--------------------|--------------------------------|
| EASY POS       | **$49.000**    | **$490.000**       | 15 días gratis                 |
| EASY Business  | **$49.000**    | **$490.000**       | Mismos módulos base que POS    |
| Combo Comercio | **$79.000**    | **$790.000**       | POS + Business (ahorra $19.000)|

### Módulos incluidos en el plan base ($49.000)

Clientes, productos, pedidos/cotizaciones, inventario, cartera, proveedores, informes, financiación, multisucursal/bodegas, facturas/tickets PDF.  
En POS: punto de venta + historial de turnos.

### Add-ons de software

| Add-on        | Precio mensual | Precio anual (10×) | Aplica a              |
|---------------|----------------|--------------------|-----------------------|
| Contabilidad  | **$29.000**    | **$290.000**       | Business y/o POS      |

Incluye (dentro del add-on Contabilidad): contabilidad, reportes contables, terceros, plan de cuentas.

---

## Costos del proveedor FE (lo que EASY paga)

| Paquete  | Emisiones / mes | Costo mensual | Costo anual (×12) |
|----------|-----------------|---------------|-------------------|
| FE 300   | 300             | $30.000       | $360.000          |
| FE 600   | 600             | $40.000       | $480.000          |
| FE 1000  | 1000            | $50.000       | $600.000          |
| FE 2000  | 2000            | $65.000       | $780.000          |

Notas del proveedor:
- El paquete anual se calcula como **mensual × 12** (sin descuento).
- El cupo es por mes (confirmar con el proveedor si sobrantes acumulan o no).

---

## Precios FE al cliente (lo que EASY cobra)

Add-on opcional para **EASY Business** y **EASY POS**.  
Si el cliente no necesita FE, contrata solo el plan de software.

| Paquete  | Emisiones / mes | Precio mensual | Precio anual (×12) | Margen / mes | Margen / año |
|----------|-----------------|----------------|--------------------|--------------|--------------|
| FE 300   | 300             | **$35.000**    | **$420.000**       | $5.000       | $60.000      |
| FE 600   | 600             | **$45.000**    | **$540.000**       | $5.000       | $60.000      |
| FE 1000  | 1000            | **$59.000**    | **$708.000**       | $9.000       | $108.000     |
| FE 2000  | 2000            | **$75.000**    | **$900.000**       | $10.000      | $120.000     |

### Reglas comerciales

1. **FE anual = ×12.** No aplica “pagas 10, llevas 12” (el proveedor cobra 12 meses).
2. **Software anual** (Business / POS / Contabilidad / School): sí aplica **pagas 10, llevas 12** (School mantiene su propia promo del 50% anual).
3. FE y Contabilidad son **add-ons**: no están incluidos en el precio base de $49.000.
4. Paquete FE **recomendado** en la web: **FE 600**.
5. Emisiones extra (si se pasan del cupo): cotizar **$300–$350** por emisión (revisar al subir márgenes).

---

## Cómo se suma al plan de software (referencia)

Precio final = plan software (+ Contabilidad) (+ paquete FE).

Ejemplos mensuales:

| Plan                         | Precio    |
|------------------------------|-----------|
| POS o Business               | $49.000   |
| POS o Business + Contabilidad| $78.000   |
| POS o Business + FE 300      | $84.000   |
| POS o Business + FE 600      | $94.000   |
| Combo Comercio               | $79.000   |
| Combo + Contabilidad         | $108.000  |
| Combo + FE 600               | $124.000  |

---

## Páginas a sincronizar cuando cambien estos precios

- `index.html` — resumen de soluciones, `#planes-pos`, `#planes-business`, `#planes-fe`, extras
- `easy-business/index.html` — plan, FE, extras, FAQ y JSON-LD
- `easy-pos/index.html` — plan, FE, extras, FAQ y JSON-LD

---

## Historial de cambios

| Fecha      | Cambio                                                                 | Motivo                                      |
|------------|------------------------------------------------------------------------|---------------------------------------------|
| 2026-03-16 | Precios cliente FE $35k / $45k / $59k (cupos 120/240/360)               | Captación, margen bajo inicial              |
| 2026-03-20 | Cupos proveedor 300/600/1000/2000; cliente $35/$45/$59/$75; POS=Business $49k; Contabilidad +$29k; Combo $79k | Competitividad y unificación de módulos |
