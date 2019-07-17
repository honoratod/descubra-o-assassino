import { Component } from '@angular/core';
import { InvestigacaoService } from "./services/investigacao.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [InvestigacaoService]
})
export class AppComponent {
  title = 'descubra-o-assassino';

  dadosCrime = {};
  qtdTentativas = 0;
  palpites = [];
  crimeSolucionado = false;

  constructor(
    private investigacaoService: InvestigacaoService
  ){}

  investigar() {
    this.investigacaoService.getTipoDocumentos()
      .subscribe(result => {
        this.dadosCrime = result.crime;
        this.qtdTentativas = result['qtd-tentativas'];
        this.palpites = result.palpites;
        this.crimeSolucionado = true;
      }, err => {
        console.log(err);
      });
  }

}
