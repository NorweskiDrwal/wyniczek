<template>
  <main id="wyniczki" class="fullscreen">
    <v-container fluid fill-height>
      <div id="service__figure"></div>
      <div id="service__wrap">
        <v-layout row wrap>
          <v-flex xs12 sm6 md3>
            <v-card class="service__card" id="jak-rozwiazac">
              <h1>Jak rozwiązać?</h1>
              <v-card-text>
                <h2>Prześlij nam zadanie, z&nbspktórym masz problem, a&nbspwyślemy Ci wytyczne jak prawidłowo je rozwiązać.</h2>
                <ul>Zawartość pakietu:
                  <li>prawidłowy wynik zadania</li>
                  <li>teoria pomocna przy rozwiązywaniu zadania</li>
                  <li>dostęp do bazy wiedzy</li>
                  <li>dostęp do podstawowych kalkulatorów</li>
                  <li>rozwiązanie wysyłamy w ciągu 12h</li>
                </ul>
                <p>Jeśli nie lubisz iść na łatwiznę i&nbspwolisz sam pokombinować nad rozwiązaniem, ale nie wiesz od czego zacząć, ten pakiet jest właśnie dla Ciebie!</p>
                <h3>Cena pakietu:<br><span>5 PLN</span><br>za zadanie</h3>
              </v-card-text>
              <v-card-actions>
                <v-btn block large>Dalej</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-card class="service__card" id="pod-nosek">
              <h1>Pod nosek</h1>
              <v-card-text>
                <h2>Przesyłasz nam zadanie, a my wysyłamy Ci gotowe rozwiązanie z wyjaśnieniam i teorią potrzebną do jego rozwiązania.</h2>
                <ul>Zawartość pakietu:
                  <li>prawidłowy wynik zadania i gotowe rozwiązanie</li>
                  <li>teoria pomocna przy rozwiązywaniu zadania</li>
                  <li>dostęp do bazy wiedzy</li>
                  <li>dostęp do kalkulatorów</li>
                  <li>rozwiązanie wysyłamy w ciągu 24h</li>
                </ul>
                <p>Jeśli matma nie jest Twoją mocną stroną, a&nbspprocenty kojarzą Cię się niejednoznacznie i&nbspna pewno nie z matematyką, skorzystaj z&nbsptej opcji!</p>
                <h3>Cena pakietu:<br><span>10 PLN</span><br>za zadanie</h3>
              </v-card-text>
              <v-card-actions>
                <v-btn block large>Dalej</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-card class="service__card" id="na-juz">
            <h1>"Na już"</h1>
              <v-card-text>
                <h2>Jest to turbo opcja pakietu "Pod nosek". Wysyłamy Ci gotowe rozwiązanie tego samego dnia*.</h2>
                <ul>Zawartość pakietu:
                  <li>prawidłowy wynik zadania i gotowe rozwiązanie</li>
                  <li>teoria pomocna przy rozwiązywaniu zadania</li>
                  <li>dostęp do bazy wiedzy</li>
                  <li>dostęp do kalkulatorów</li>
                  <li>rozwiązanie wysyłamy w ciągu 4h</li>
                </ul>
                <p>Gonią Cię terminy, masz do zrobienia <em><strong>różne ważne rzeczy</strong></em>, a zadanie z matmy jeszcze nie gotowe? Skorzystaj z tego pakietu i ciesz się wolnością!</p>
                <h3>Cena pakietu:<br><span>15 PLN</span><br>za zadanie</h3>
              </v-card-text>
            <v-card-actions>
              <v-btn block large>Dalej</v-btn>
            </v-card-actions>
            </v-card>
          </v-flex>
          
          <v-flex xs12 sm6 md3>
          <v-card class="service__card" id="subskrypcja">
            <h1>Subskrypcja</h1>
              <v-card-text>
                <h2>Opcja dla tych, którym często zdarza się "zapomnieć" o&nbspzadaniu z&nbspmatmy. Zaufaj nam - my nie zapominamy </h2>
                <ul>Zawartość pakietu:
                  <li>możesz nam wysłać 5 zadań w miesiącu</li>
                  <li>wszystkie rozwiązania dostajesz "Na już"</li>
                  <li>masz dostęp do zadań udostępnionych przez innych użytkowników</li>
                  <li>pomożemy z każdym problemem z matmy</li>
                </ul>
                <p>Gonią Cię terminy, masz do zrobienia <em><strong>różne ważne rzeczy</strong></em>, a zadanie z matmy jeszcze nie gotowe? Skorzystaj z tego pakietu i ciesz się wolnością!</p>
                <h3>Cena pakietu:<br><span>30 PLN</span><br>za miesiąc</h3>
              </v-card-text>
            <v-card-actions>
              <v-btn block large>Dalej</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
    </v-container>
  </main>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  .container {padding: 0;}

  #wyniczki {background: $blue;}

  #service__figure {
    background: $yellow;
    clip-path: polygon(0 0, 26% 0, 39% 100%, 0% 100%);
    height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
  }
 
  #service__wrap {
    width: 100vw;
  }

  .service__card {
    border: 3px solid #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 3px $purple;
    font-family: $text-font;
    margin: 5px 20px;

    text-align: center;

    h1 {font-size: 24px; margin-top: 10px; margin-bottom: 0;}
    h2 {color: #fff; font-size: 18px; padding: 0 15px 15px !important; text-align: justify;}
    ul {color: $yellow; font-size: 16px; padding-left: 15px; text-align: left;}
    li {margin: 0 15px;}
    p {color: #fff; font-size: 15px; padding: 15px 15px 0 !important; text-align: justify;}
    h3 {color: #fff;}
    span {font-size: 50px;}
    button {
      border: 3px solid #fff;
      border-radius: 10px;
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 2px;
    }
  }

  #jak-rozwiazac {
    background: $blue;

    h1, span {color: #fff;}
    h3 {color: $yellow;}
    button {background: $red; color: #fff;}
  }

  #pod-nosek {
    background: $red;

    h1, span {color: #fff;}
    h3 {color: $yellow;}
    button {background: $blue; color: #fff;}
  }

  #na-juz {
    background: $yellow;

    h1, h2, p, span {color: $purple;}
    ul, h3 {color: $red;}
    button {background: $purple; color: $yellow;}
  }

  #subskrypcja {
    background: $purple;

    h1, h2, p, span {color: $yellow;}
    ul {color: #fff;}
    button {background: $yellow; color: $purple;}
  }

</style>

