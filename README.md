# Costco Price Calculator

## Descripción

La aplicación **Costco Price Calculator** te ayudará a calcular el precio publicado de los productos en la tienda de Costco utilizando el ticket de compra. 

A la aplicación no está en funcionamiento, hace falta la implementación:

1. Relación el archivo html con el estilo (CSS).
2. Relación el archivo html con la funcionalidad (JS).
3. Realizar los cálculos del subtotal, IVA y total en el archivo JS.
4. Almacenar en el local storage los últimos valores usados del porcentaje de Cash Discount e IVA.
5. Verificar la existencia en el local storage de los últimos valores usados de Cash Discont e IVA. En caso de existir establecer esos valores en los input.

## Características

- **Cálculo de Precio Final**: Introduce el precio indicado en el ticket y la aplicación calculará el precio final.
- **Descuento por Cupón**: Introduce el cupón de descuento publicado.
- **Descuento por Pago en Efectivo**: Introduce el descuento de aproximadamente 2.25% por pago en efectivo.

## Cómo Utilizar

1. **Introducir el Precio**: Ingresa el precio indicado en el ticket de compra.
2. **Introducir el Descuento de Cupón**: Ingresa el porcentaje del cupón de descuento del producto.
3. **Introducir el Descuento por Pago en Efectivo**: Ingresa el porcentaje por pago en efectivo.
4. **Introducir el IVA**: Ingresa el porcentaje de IVA aplicado en tu región.
5. **Calcular el Precio Final**: La aplicación calculará el precio final, aplicando el descuento por pago en efectivo.

## Descuento por Pago en Efectivo

El descuento por pago en efectivo es de aproximadamente 2.25%. Este descuento se aplica automáticamente al calcular el precio final del producto.

## Ejemplo

Si el precio indicado en el ticket es $175.50, el cálculo sería:

- Precio ticket: $175.50
- Cupón (0%): $0.00
- Descuento Efectivo (2.25%): $3.95
- IVA (16%): $27.45
- Precio final: $175.50 - $3.95 + $27.45 = $199.00 

## Solución

La solución del ejercicio está en el rama `develop` y lo podrás ver en https://costco-price.netlify.app
