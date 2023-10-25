¿Qué sucedio al usar async y await?
Al implementar async se puede manejar la app de una manera asincrona mientras que con el await espero que se resuelvan las promesas de add, delete, complete y listTask para que las operaciones se realicen en el orden correcto y que cualquier resultado o error se maneje adecuadamente.

¿Qué sucedio al usar el método then()?
Al usar el then () las promesas de add, delete, complete y listTask se ejecutan encadenadamente y en secuencia. Por lo que al usar el then () se aplica cuando la promesa anterior estuviese resuelta.

¿Qué diferencias encontraste entre async, await y el método then()?
-En primer lugar el codigo con async y await hacen que el codigo de cierta manera sea mas simple, limpio y ordenado.
-Con el then () el codigo de puede leer mas confuso y menos entendible porque requiere que el codigo sea mas extenso y propenso a errores.
