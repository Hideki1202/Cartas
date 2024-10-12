import { Component } from '@angular/core';
import { randomInt } from 'node:crypto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido para 'styleUrls'
})
export class AppComponent {
  title = 'cartas';
  dicas: string = "dsdsadsadsadsa";
  titulo: string = "AAAAA";
  isVirado: boolean = false;

  fase1dicas = [
    {
        resposta: "Albert Einstein",
        dicafase: "Dica 1 (Fácil): Sou conhecido por uma teoria que mudou a forma como entendemos o tempo e o espaço.\n" +
                   "Dica 2 (Médio): Meu cabelo é icônico, quase tão famoso quanto minha fórmula mais conhecida.\n" +
                   "Dica 3 (Difícil): Nasci na Alemanha, mas vivi a maior parte da minha vida nos Estados Unidos, onde continuei meus estudos."
    },
    {
        resposta: "Isaac Newton",
        dicafase: "Dica 1 (Fácil): Desenvolvi as leis da gravitação universal.\n" +
                   "Dica 2 (Médio): Sou famoso por uma maçã que teria caído de uma árvore.\n" +
                   "Dica 3 (Difícil): Fui um matemático inglês e um dos maiores físicos da história."
    },
    {
        resposta: "Marie Curie",
        dicafase: "Dica 1 (Fácil): Fui a primeira pessoa a ganhar dois Prêmios Nobel em áreas diferentes.\n" +
                   "Dica 2 (Médio): Descobri os elementos rádio e polônio.\n" +
                   "Dica 3 (Difícil): Nasci na Polônia, mas desenvolvi a maior parte do meu trabalho na França."
    },
    {
        resposta: "Leonardo da Vinci",
        dicafase: "Dica 1 (Fácil): Sou conhecido por obras de arte icônicas como a Mona Lisa.\n" +
                   "Dica 2 (Médio): Além de pintor, fui inventor, cientista e engenheiro.\n" +
                   "Dica 3 (Difícil): Nasci na Itália no século XV e sou considerado o exemplo máximo de um 'homem do Renascimento'."
    },
    {
        resposta: "Charles Darwin",
        dicafase: "Dica 1 (Fácil): Sou conhecido por desenvolver a teoria da evolução.\n" +
                   "Dica 2 (Médio): Fiz uma famosa viagem nas ilhas Galápagos, que inspirou grande parte do meu trabalho.\n" +
                   "Dica 3 (Difícil): Meu livro 'A Origem das Espécies' causou uma revolução na biologia e no pensamento científico."
    },
    {
        resposta: "William Shakespeare",
        dicafase: "Dica 1 (Fácil): Sou considerado um dos maiores dramaturgos da história.\n" +
                   "Dica 2 (Médio): Escrevi peças famosas como 'Romeu e Julieta' e 'Hamlet'.\n" +
                   "Dica 3 (Difícil): Nasci em Stratford-upon-Avon, na Inglaterra, no século XVI."
    },
    {
        resposta: "Cleópatra",
        dicafase: "Dica 1 (Fácil): Fui a última governante do Egito antes de sua anexação por Roma.\n" +
                   "Dica 2 (Médio): Tive relações com dois grandes líderes romanos: Júlio César e Marco Antônio.\n" +
                   "Dica 3 (Difícil): Fui parte da dinastia ptolomaica, descendente de um dos generais de Alexandre, o Grande."
    }
];

fase2dicas= [
  {
      resposta: "Thomas Edison",
      dicafase: "Dica 1 (Fácil): Inventei a lâmpada incandescente.\n" +
                 "Dica 2 (Médio): Também sou conhecido por criar o fonógrafo.\n" +
                 "Dica 3 (Difícil): Fundei uma das primeiras empresas de fornecimento de eletricidade nos EUA."
  },
  {
      resposta: "Sigmund Freud",
      dicafase: "Dica 1 (Fácil): Sou o fundador da psicanálise.\n" +
                 "Dica 2 (Médio): Minha teoria envolve o inconsciente, o id, o ego e o superego.\n" +
                 "Dica 3 (Difícil): Fui um neurologista austríaco cujas ideias influenciaram profundamente a psicologia moderna."
  },
  {
      resposta: "Winston Churchill",
      dicafase: "Dica 1 (Fácil): Fui primeiro-ministro britânico durante a Segunda Guerra Mundial.\n" +
                 "Dica 2 (Médio): Minha oratória foi crucial para manter o moral britânico durante o conflito.\n" +
                 "Dica 3 (Difícil): Recebi o Prêmio Nobel de Literatura em 1953."
  },
  {
      resposta: "Ludwig van Beethoven",
      dicafase: "Dica 1 (Fácil): Fui um dos maiores compositores da música clássica.\n" +
                 "Dica 2 (Médio): Continuei a compor mesmo após perder a audição.\n" +
                 "Dica 3 (Difícil): Minhas sinfonias, especialmente a Nona, são famosas mundialmente."
  },
  {
      resposta: "Pablo Picasso",
      dicafase: "Dica 1 (Fácil): Fui um pintor espanhol famoso por ser cofundador do cubismo.\n" +
                 "Dica 2 (Médio): Uma de minhas obras mais famosas é 'Guernica', retratando os horrores da guerra.\n" +
                 "Dica 3 (Difícil): Tive uma carreira prolífica e criei mais de 20.000 obras de arte."
  }
];

fase3dicas  = [
  {
      resposta: "Mahatma Gandhi",
      dicafase: "Dica 1 (Fácil): Lidero a luta pela independência da Índia através da não-violência.\n" +
                 "Dica 2 (Médio): Minha famosa marcha de protesto é conhecida como 'Marcha do Sal'.\n" +
                 "Dica 3 (Difícil): Fui assassinado em 1948 por um extremista hindu."
  },
  {
      resposta: "Júlio César",
      dicafase: "Dica 1 (Fácil): Fui um general romano que se tornou ditador vitalício.\n" +
                 "Dica 2 (Médio): Fui assassinado nos Idos de Março.\n" +
                 "Dica 3 (Difícil): Meu nome originou o termo 'Czar' e 'Kaiser'."
  },
  {
      resposta: "Florence Nightingale",
      dicafase: "Dica 1 (Fácil): Sou conhecida como a fundadora da enfermagem moderna.\n" +
                 "Dica 2 (Médio): Ganhei fama por meu trabalho durante a Guerra da Crimeia.\n" +
                 "Dica 3 (Difícil): Sou conhecida como a 'Dama da Lâmpada' por atender soldados à noite."
  },
  {
      resposta: "Cristóvão Colombo",
      dicafase: "Dica 1 (Fácil): Sou conhecido por descobrir as Américas em 1492.\n" +
                 "Dica 2 (Médio): Fiz quatro viagens ao Novo Mundo, todas financiadas pela Espanha.\n" +
                 "Dica 3 (Difícil): Nasci em Gênova, na Itália, mas meu patrono foi a Rainha Isabel de Castela."
  },
  {
      resposta: "Marco Polo",
      dicafase: "Dica 1 (Fácil): Fui um explorador que viajou da Europa até a China.\n" +
                 "Dica 2 (Médio): Meus relatos de viagem inspiraram muitas explorações posteriores.\n" +
                 "Dica 3 (Difícil): Passei anos na corte de Kublai Khan, o imperador mongol."
  }
];

fase4dicas  = [
  {
      resposta: "George Washington",
      dicafase: "Dica 1 (Fácil): Fui o primeiro presidente dos Estados Unidos.\n" +
                 "Dica 2 (Médio): Lidero o Exército Continental durante a Guerra da Independência.\n" +
                 "Dica 3 (Difícil): Recusei ser rei e estabeleci o precedente de servir dois mandatos como presidente."
  },
  {
      resposta: "Joana d'Arc",
      dicafase: "Dica 1 (Fácil): Sou uma santa francesa e heroína da Guerra dos Cem Anos.\n" +
                 "Dica 2 (Médio): Aleguei ter sido guiada por visões divinas para liderar o exército francês.\n" +
                 "Dica 3 (Difícil): Fui queimada na fogueira aos 19 anos, acusada de heresia."
  },
  {
      resposta: "Albert Sabin",
      dicafase: "Dica 1 (Fácil): Desenvolvi a vacina oral contra a poliomielite.\n" +
                 "Dica 2 (Médio): Minha vacina ajudou a erradicar a pólio em várias partes do mundo.\n" +
                 "Dica 3 (Difícil): Nasci na Polônia, mas me tornei cidadão norte-americano."
  },
  {
      resposta: "Abraham Lincoln",
      dicafase: "Dica 1 (Fácil): Fui o 16º presidente dos Estados Unidos.\n" +
                 "Dica 2 (Médio): Lidero o país durante a Guerra Civil e aboli a escravidão.\n" +
                 "Dica 3 (Difícil): Fui assassinado por John Wilkes Booth em 1865 no Teatro Ford."
  },
  {
      resposta: "Vincent van Gogh",
      dicafase: "Dica 1 (Fácil): Sou um pintor pós-impressionista famoso por 'A Noite Estrelada'.\n" +
                 "Dica 2 (Médio): Sou conhecido tanto por minha arte quanto por cortar parte da minha orelha.\n" +
                 "Dica 3 (Difícil): Embora tenha produzido mais de 2.000 obras, vendi apenas uma pintura em vida."
  }
];

fase5dicas  = [
  {
      resposta: "Malala Yousafzai",
      dicafase: "Dica 1 (Fácil): Fui a pessoa mais jovem a receber o Prêmio Nobel da Paz.\n" +
                 "Dica 2 (Médio): Lutei pelo direito das meninas à educação no Paquistão.\n" +
                 "Dica 3 (Difícil): Sobrevivi a uma tentativa de assassinato pelo Talibã quando tinha 15 anos."
  },
  {
      resposta: "Nikola Tesla",
      dicafase: "Dica 1 (Fácil): Fui um dos maiores inventores e engenheiros elétricos da história.\n" +
                 "Dica 2 (Médio): Sou conhecido pelo meu trabalho com a corrente alternada (AC).\n" +
                 "Dica 3 (Difícil): Nasci na atual Croácia e muitas de minhas ideias visionárias foram além do meu tempo."
  },
  {
      resposta: "Rainha Vitória",
      dicafase: "Dica 1 (Fácil): Fui a monarca britânica que deu nome a uma era: a Era Vitoriana.\n" +
                 "Dica 2 (Médio): Casei-me com o príncipe Albert e tive nove filhos.\n" +
                 "Dica 3 (Difícil): Meu reinado, de 63 anos, foi o mais longo da história britânica até ser superado pela Rainha Elizabeth II."
  },
  {
      resposta: "Martin Luther King Jr.",
      dicafase: "Dica 1 (Fácil): Fui um líder dos direitos civis nos Estados Unidos.\n" +
                 "Dica 2 (Médio): Minha famosa fala 'Eu tenho um sonho' marcou a Marcha sobre Washington.\n" +
                 "Dica 3 (Difícil): Recebi o Prêmio Nobel da Paz em 1964 por meu trabalho contra a segregação racial."
  },
  {
      resposta: "Neil Armstrong",
      dicafase: "Dica 1 (Fácil): Fui o primeiro homem a pisar na Lua.\n" +
                 "Dica 2 (Médio): Minha famosa frase foi: 'Um pequeno passo para um homem, um salto gigante para a humanidade'.\n" +
                 "Dica 3 (Difícil): Fui comandante da missão Apollo 11 em 1969."
  }
];

  async atribuirDicaFase1() {
    
    if (this.fase1dicas.length === 0){
      this.atualizarSemDicas()
    }else{
      const num = this.randomInteger(0,this.fase1dicas.length)
      await this.atualizarDica(this.fase1dicas[num]);

      this.fase1dicas = this.fase1dicas.filter(item => item.resposta !== this.fase1dicas[num].resposta)
      console.log(this.fase1dicas)   
     }
    
  }

  async atribuirDicaFase2() {
    if (this.fase2dicas.length === 0){
      this.atualizarSemDicas()
    }else{
      const num = this.randomInteger(0,this.fase2dicas.length)
      await this.atualizarDica(this.fase2dicas[num]);
      this.fase2dicas = this.fase2dicas.filter(item => item.resposta !== this.fase2dicas[num].resposta)
      console.log(this.fase2dicas)   
    }

  }

  async atribuirDicaFase3() {
    if (this.fase3dicas.length === 0){
      this.atualizarSemDicas()
    }else{
      const num = this.randomInteger(0,this.fase3dicas.length)
      await this.atualizarDica(this.fase3dicas[num]);
      this.fase3dicas = this.fase3dicas.filter(item => item.resposta !== this.fase3dicas[num].resposta)
      console.log(this.fase3dicas)   

    }
    
  }

  async atribuirDicaFase4() {
    if (this.fase4dicas.length === 0){
      this.atualizarSemDicas()
    }else{
      const num = this.randomInteger(0,this.fase4dicas.length)
      await this.atualizarDica(this.fase4dicas[num]);
      this.fase4dicas = this.fase4dicas.filter(item => item.resposta !== this.fase4dicas[num].resposta)
      console.log(this.fase4dicas)   


      
    }
    
  }

  async atribuirDicaFase5() {
    if (this.fase5dicas.length === 0){
      this.atualizarSemDicas()
    }else{
      const num = this.randomInteger(0,this.fase5dicas.length)
      await this.atualizarDica(this.fase5dicas[num]);
      this.fase5dicas = this.fase5dicas.filter(item => item.resposta !== this.fase5dicas[num].resposta)
      console.log(this.fase5dicas)   

    }
    
  }


  private async atualizarDica(faseDica:any) {
    // Se o componente está virado, desviramos ele
    if (this.isVirado) {
      await this.virar(); // Aguarda a animação de desvirar
    }

    // Atribuímos a nova dica
    this.dicas = faseDica.dicafase;
    this.titulo = faseDica.resposta;



    // Viramos novamente
    await this.virar(); // Aguarda a animação de virar
  }
  private async atualizarSemDicas() {
    // Se o componente está virado, desviramos ele
    if (this.isVirado) {
      await this.virar(); // Aguarda a animação de desvirar
    }

    // Atribuímos a nova dica
    this.dicas = "Acabaram as cartas dessa fase!"
    this.titulo = "Sem Cartas!"



    // Viramos novamente
    await this.virar(); // Aguarda a animação de virar
  }

  virar() {
    return new Promise<void>((resolve) => {
      this.isVirado = !this.isVirado; // Toggle the 'virado' state
      console.log("Virado: ", this.isVirado);

      // Simula a duração da animação (500ms)
      setTimeout(() => {
        resolve();
      }, 1000); // Duração da animação
    });
  }
  randomInteger(min: number, max: number): number {
    const range = max - min + 1;
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return min + (array[0] % range);
  }
  


}
