import MiddleEarthPeoples from "./MiddleEarthPeoples";

type HobbitType = 'pés-peludos' | 'grados' | 'cascalvas';

// sub class, herdando tudo o que "extende"
export default class Hobbit extends MiddleEarthPeoples {
  private _type: HobbitType;
  
  constructor(name: string, type: HobbitType) {
    // iniciaização da super classe! super call
    // super expect an argument, super = constructor from super class
    // super. | possíveis atributos ou métodos da super classe

    super(name);
    // super._name = name;
    super._languages = ['HObbitish'];
    super._skills = {
      stealth: 'Possuem, desde o início, a...',
      hairyFeet: 'Seus pés eram cobertos por...',
      braveness: 'Eram valentes quando em apuros...',
    };
    super._height = super.getRandomHeight(0.6, 1.2);

    this._type = type;
  }
}

const frodo = new Hobbit('Frodo', 'pés-peludos');

for (let i = 0; i < frodo.equipament.length; i += 1) {
  const equip = frodo.equipament[i];
  equip.use('corta');
}

/**
 * - Um Hobbit é um Povo da Terra Média: `MiddleEarthPeople`
    - Podem ser de três tipos:
        - pés-peludos, grados e cascalvas.
    - Falam Hobbitish
    - Tem as habilidades
        - **stealth**: Possuem, desde o início, a arte de desaparecer rápida e silencioEsamente…
        - **hairyFeet**: Seus pés eram cobertos por pêlos grossos e encaracolados, muito parecido com os que tinham na cabeça…
        - **braveness**: Eram valentes quando em apuros e se fosse preciso ainda sabiam manejar armas.
    - Tem uma altura entre 0.60cm e 1.2m
 */