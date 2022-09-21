export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando protoType ${target.constructor.name} e adicionando
        getter para a propiedade ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`buscando elemento do Dom com o seletor ${seletor}
                para injetarem ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map