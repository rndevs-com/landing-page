import Link from 'next/link'

const Statute = () => {
  return (
    <>
      <div className="text-center font-bold">
        <p className="text-xl">§ 1</p>
        <h3 className="text-xl">Definicje</h3>
      </div>
      <p>
        Pojęciom użytym w niniejszym Regulaminie nadaje się następujące
        znaczenia:
      </p>
      <ol className="space-y-5">
        <li>
          <strong>Newsletter</strong> – nieodpłatna usługa świadczona drogą
          elektroniczną przez Usługodawcę polegająca na wysyłaniu Usługobiorcy
          na podany adres e-mail informacji dotyczących odwórconego job boardu
          dla React Native Developerów
        </li>
        <li>
          <strong>Konsument​</strong> – konsument w rozumieniu art. 221 Kodeksu
          cywilnego;
        </li>
        <li>
          <strong>Serwis​</strong> – platforma internetowa{' '}
          <strong>rndevs</strong> prowadzona przez Usługodawcę pod następującą
          domeną:{' '}
          <Link
            href="/"
            className="text-[#61DAFB] hover:underline"
            target="_blank"
          >
            rndevs.com
          </Link>
          , za pośrednictwem której istnieje możliwość zapisania się do
          Newslettera;
        </li>
        <li>
          <strong>Usługodawca</strong> – Kamil Czech prowadzący działalność
          gospodarczą pod firmą MZ studiocode KAMIL CZECH ul. Spadochroniarzy
          104 Mszana Dolna 34730, NIP: 7372193430, kontakt:
          <a
            href="mailto:k.czech@rndevs.com"
            className="text-[#61DAFB] hover:underline pl-1"
          >
            k.czech@rndevs.com
          </a>
        </li>
        <li>
          <strong>Usługobiorca</strong> ten, kto zapisał się i korzysta z usługi
          Newslettera;
        </li>
        <li>
          <strong>Regulamin</strong> - niniejszy regulamin świadczenia usług
          drogą elektroniczną;
        </li>
        <li>
          <strong>Polityka Prywatności</strong> - odrębny dokument znajdujący
          się w Serwisie określający zasady przetwarzania danych osobowych przez
          Usługodawcę.
        </li>
      </ol>

      <div className="text-center font-bold">
        <p className="text-xl">§ 2</p>
        <h3 className="text-xl">Newsletter</h3>
      </div>
      <ol className="space-y-5">
        <li>
          Usługobiorca rozpoczyna korzystanie z Newslettera po wykonaniu łącznie
          następujących czynności:
          <ol className="pl-4 my-4">
            <li>podanie adresu e-mail,</li>
            <li>
              wyrażenie zgody na otrzymywanie korespondencji zawierającej
              informacje na temat Serwisu drogą elektroniczną,
            </li>
            <li>
              zapoznanie się z treścią i akceptacja Regulaminu i Polityki
              Prywatności.
            </li>
          </ol>
        </li>
        <li>
          Po wykonaniu czynności, o których mowa w ust. 1 powyżej, Usługodawca
          prześle Usługobiorcy wiadomość weryfikującą adres e-mail, a w niej
          link potwierdzający chęć zapisania się do usługi Newsletter’a. W
          momencie dokonania potwierdzenia zapisu przez Usługobiorcę (kliknięcie
          w link) zostaje zawarta umowa o świadczenie usługi Newslettera
        </li>
        <li>
          Warunkiem korzystania z Newslettera niezbędne jest posiadanie
          sprawnego technicznie urządzenia z dostępem do sieci Internet i
          aktualną wersją przeglądarki internetowej oraz aktywne konto e-mail.
          Usługodawca nie ponosi odpowiedzialności za problemy techniczne lub
          ograniczenia występujące w sprzęcie Usługobiorcy, które uniemożliwiają
          mu korzystanie z Newslettera.
        </li>
        <li>
          W wiadomościach wysyłanych Usługobiorcy w ramach Newslettera będzie
          znajdować się informacja o możliwości wypisania się z Newslettera wraz
          linkiem umożliwiającym rezygnację.
        </li>
        <li>
          Usługobiorca może zgłaszać Usługodawcy reklamacje dotyczące usługi
          Newsletter’a na adres e-mail:{''}
          <a
            href="mailto:k.czech@rndevs.com"
            className="text-[#61DAFB] hover:underline pl-1"
          >
            k.czech@rndevs.com
          </a>{' '}
          Usługodawca ustosunkuje się do reklamacji na podany w zgłoszeniu adres
          e-mail w terminie 14 dni od jej otrzymania.
        </li>
        <li>
          Usługobiorca może wypisać się z Newslettera w każdym momencie, bez
          podawania przyczyny i ponoszenia jakichkolwiek kosztów. W celu
          realizacji tego uprawnienia należy wysłać wiadomość na adres e-mail
          Usługodawcy:{''}
          <a
            href="mailto:k.czech@rndevs.com"
            className="text-[#61DAFB] hover:underline pl-1"
          >
            k.czech@rndevs.com
          </a>{' '}
          lub skorzystać z możliwości rezygnacji przy pomocy kliknięcia w link,
          o którym mowa w ust. 4 powyżej.
        </li>
        <li>
          Jeśli Usługobiorca zrezygnuje z Newslettera na zasadach określonych w
          ust. 6 powyżej umowa o świadczenie usługi Newslettera ulegnie
          rozwiązaniu.
        </li>
      </ol>

      <div className="text-center font-bold">
        <p className="text-xl">§ 3</p>
        <h3 className="text-xl">Prawo własność intelektualnej</h3>
      </div>
      <ol className="space-y-5">
        <li>
          Newsletter może zawierać treści chronione prawem własności
          intelektualnej.
        </li>
        <li>
          Usługodawca posiada wyłączne prawo do treści przesyłanych w
          Newsletterze. Żadne treści nie mogą być tym samym kopiowane,
          poprawiane, rozpowszechniane, pobierane, przekazywane, sprzedawane lub
          w inny sposób wykorzystywane w całości lub w części bez uprzedniej
          zgody Usługodawcy.
        </li>
      </ol>

      <div className="text-center font-bold">
        <p className="text-xl">§ 4</p>
        <h3 className="text-xl">Dane osobowe</h3>
      </div>
      <ol className="space-y-5">
        <li>
          Administratorem danych osobowych przekazanych przez Usługobiorcę
          podczas zapisywania się na korzystanie z Newslettera jest Usługodawca.
        </li>
        <li>
          Dane osobowe Usługobiorcy przetwarzane są w związku z realizacją umowy
          o świadczenie usługi Newslettera zgodnie z obowiązującymi przepisami w
          zakresie ochrony danych osobowych.
        </li>
        <li>
          Szczegółowe informacje dotyczące przetwarzania danych osobowych przez
          Usługodawcę zawiera{' '}
          <Link
            href="/privacy-policy"
            className="text-[#61DAFB] hover:underline"
          >
            Polityka prywatności
          </Link>
          .
        </li>
      </ol>

      <div className="text-center font-bold">
        <p className="text-xl">§ 5</p>
        <h3 className="text-xl">Postanowienia końcowe</h3>
      </div>
      <ol className="space-y-5">
        <li>
          Usługodawca ma prawo do zmiany niniejszego Regulaminu w związku z
          modernizacją usługi Newslettera czy zmianą przepisów prawa. Zmiana
          Regulaminu następuje poprzez umieszczenie zmienionej wersji Regulaminu
          na stronie Serwisu, a także przez przesłanie Usługobiorcy informacji o
          zmianie Regulaminu na co najmniej 14 dni przed planowanym dniem
          wejścia w życie zmian. Jeśli Usługobiorca nie sprzeciwi się zmianom do
          momentu ich wejścia w życie, przyjmuje się, że je akceptuje. Sprzeciw
          Usługobiorca może wysłać na adres e-mail Usługodawcy:
          <a
            href="mailto:k.czech@rndevs.com"
            className="text-[#61DAFB] hover:underline pl-1"
          >
            k.czech@rndevs.com
          </a>{' '}
          i skutkuje on rozwiązaniem umowy o świadczenie usługi Newslettera.
        </li>
        <li>
          Zakazane jest dostarczanie przez Usługobiorcę treści o charakterze
          bezprawnym.
        </li>
        <li>
          W sprawach nieuregulowanych w niniejszym Regulaminie zastosowanie mają
          powszechnie obowiązujące przepisy prawa polskiego, w szczególności
          przepisy Ustawy Kodeks cywilny i Ustawy o świadczeniu usług drogą
          elektroniczną.
        </li>
        <li>
          Usługobiorca będący Konsumentem ma prawo skorzystać z pozasądowych
          sposobów rozpatrywania reklamacji i dochodzenia roszczeń, w
          szczególności z pomocy miejskich (powiatowych) Rzeczników Konsumentów
          lub Europejskiej platformy internetowego rozstrzygania sporów (ODR)
          pomiędzy przedsiębiorcami a konsumentami dostępnej pod adresem:{' '}
          <a
            href="http://ec.europa.eu/consumers/odr"
            target="_blank"
            className="text-[#61DAFB] hover:underline"
          >
            http://ec.europa.eu/consumers/odr
          </a>
        </li>
      </ol>
    </>
  )
}

export default Statute
