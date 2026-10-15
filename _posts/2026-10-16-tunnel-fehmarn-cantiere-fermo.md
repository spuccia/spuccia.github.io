---
layout: single
title: "Un attacco informatico ferma il tunnel tra Danimarca e Germania. Anche i cantieri sono infrastrutture digitali"
date: 2026-10-16 09:00:00 +0100
categories: cybersecurity
share: true
published: false
read_time: true
header:
  image: /assets/tunnel-fehmarn/header.jpg
---

Nella notte tra l'11 e il 12 ottobre, la stessa dei frigoriferi francesi, un attacco informatico ha colpito Femern Link Contractors (FLC), il consorzio europeo che sta costruendo il tunnel sotto il Fehmarn Belt, il collegamento stradale e ferroviario tra Rødbyhavn in Danimarca e Puttgarden in Germania.
Il 13 ottobre Sund & Bælt, la società pubblica danese committente dell'opera, ha confermato che il suo appaltatore era stato "oggetto di un incidente informatico", senza aggiungere dettagli su sistemi coinvolti, entità del danno o responsabili.

Secondo il quotidiano locale Lolland-Falsters Folketidende, ripreso dall'agenzia Ritzau, gran parte della rete informatica del cantiere è stata spenta. Agli operai è stato chiesto di non collegarsi al Wi-Fi, di non accendere i computer e di non aprire le mail del consorzio. Le guardie non potevano usare i sistemi di controllo accessi, i dipendenti non riuscivano a registrare le ore di lavoro. Il problema si è esteso anche al mare: diverse navi hanno dovuto fermarsi perché avevano perso l'accesso agli strumenti digitali e ai dati di lavoro. Fonti polacche parlano di cantiere completamente fermo, con gru e piattaforme bloccate.

Non parliamo di un cantiere qualsiasi. Il tunnel sarà lungo 18 km, il più lungo tunnel sommerso al mondo, composto da 89 elementi in calcestruzzo posati sul fondale e collegati tra loro con l'ausilio di software dedicati. Il costo stimato è intorno ai 7 miliardi di euro, il consorzio impiega circa 2.800 persone di imprese danesi, tedesche, francesi, belghe e olandesi.

Il contesto danese è altrettanto significativo. Nelle stesse settimane il Paese ha subito il furto dei dati anagrafici di 8,8 milioni di persone, passato da una piccola società fornitrice in cui diversi account, compreso quello di amministratore, usavano la password "123456". Henning Mortensen, a capo del Consiglio danese per la sicurezza digitale, non ha escluso un collegamento con la guerra ibrida, e la ministra per la preparazione alle emergenze Lisbeth Bech-Nielsen ha convocato i partiti per discutere nuove misure di difesa cyber. Ad oggi però nessuno ha rivendicato l'attacco, e le autorità invitano alla cautela: "è troppo presto per trarre conclusioni".

Al di là di chi ci sia dietro, il caso mostra bene una cosa che tendiamo a dimenticare. Un cantiere moderno non è fatto solo di cemento e gru: badge, presenze, posizionamento delle navi, progetti, comunicazioni con i subappaltatori passano tutti dalla rete. Basta spegnere quella per fermare migliaia di persone e mezzi da milioni di euro.

Nel [thread di Hacker News](https://news.ycombinator.com/item?id=50074289) sull'attacco, oltre 130 commenti, la riflessione più condivisa è che Internet sia diventato da anni un singolo punto di guasto per tutto, dalla logistica agli impianti, e che ce ne stiamo accorgendo solo ora. C'è chi richiama i data center AWS colpiti in Bahrein e chi chiede apertamente se l'attacco al tunnel sia collegato a quello dei supermercati francesi, avvenuto la stessa notte: domanda legittima, a cui oggi nessuno è in grado di rispondere.
Un utente più scettico ricorda che dietro questi episodi spesso non c'è nessuna capacità straordinaria, ma il solito pannello esposto su Internet con credenziali di default. Un altro mette sul piatto la questione economica: il monitoraggio e il controllo da remoto fanno risparmiare, ma ogni sistema collegato va difeso e mantenuto nel tempo. Se il conto non torna, molti oggetti fisici finiranno per essere scollegati, o spostati su reti interne isolate.

Il caso danese ha più di un punto in comune con quello francese. Anche qui il bersaglio non è il committente pubblico, ma un'impresa della filiera. E anche qui la conseguenza è fisica: mezzi fermi, persone che non possono entrare, lavori sospesi.
È lo schema che vediamo ripetersi: il livello di sicurezza di un'opera è quello del soggetto meno protetto tra quelli che vi lavorano. In un grande cantiere sono decine, tra consorziate, subappaltatori, noleggiatori di mezzi, fornitori di software e di servizi di sorveglianza.

In Italia il tema è tutt'altro che lontano. Le grandi opere in corso, dal tunnel di base del Brennero ai cantieri finanziati dal PNRR, si reggono su consorzi e catene di subappalto lunghe, con sistemi digitali condivisi tra aziende diverse. La NIS2 chiede ai soggetti essenziali, tra cui chi gestisce le infrastrutture di trasporto, di governare anche la sicurezza dei propri fornitori. Nella pratica questa richiesta arriva fino all'impresa edile e all'installatore, che spesso non ha né un responsabile IT né un piano per quando la rete si spegne.

Anche qui la prevenzione passa da poche regole di base, applicate con costanza:

- separare la rete degli uffici da quella dei sistemi di cantiere: accessi, presenze, mezzi, sensori;
- prevedere procedure manuali di emergenza per far entrare le persone, registrare le presenze e mettere in sicurezza i mezzi quando i sistemi digitali non sono disponibili;
- inserire nei contratti di subappalto e di fornitura requisiti minimi di sicurezza e l'obbligo di segnalare tempestivamente gli incidenti;
- governare gli accessi remoti dei fornitori: chi entra, con quali credenziali, fino a quando;
- avere backup isolati e un piano di continuità operativa provato almeno una volta, non solo scritto.

Un vulnerability assessment periodico dice cosa è esposto e cosa va sistemato prima che lo trovi qualcun altro. La formazione di base di dipendenti e collaboratori resta indispensabile: in Danimarca la prima indicazione ai lavoratori è stata non aprire le mail e non collegarsi al Wi-Fi, segno che il canale di ingresso più probabile resta quello quotidiano.

I costi per queste misure sono contenuti, soprattutto se confrontati con quelli di un cantiere fermo. Ogni giorno di stop su un'opera da 7 miliardi vale molto più di qualsiasi budget di sicurezza ragionevole. Per le imprese della filiera, piccole e grandi, la sicurezza informatica sta diventando un requisito per lavorare, non un optional.
