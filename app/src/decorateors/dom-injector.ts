export function domInjector(seletor: string) {
    return function(
        target: any,
        propertyKey: string
    ) {
        console.log(`Modificando protoType ${target.constructor.name} e adicionando
        getter para a propiedade ${propertyKey}`)
        let elemento: HTMLElement;
        const getter = function() {
            if(!elemento){
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`buscando elemento do Dom com o seletor ${seletor}
                para injetarem ${propertyKey}`)
            }
            return elemento;
        }
        Object.defineProperty(
            target,
            propertyKey, 
            {get: getter}
        );
    }
}
