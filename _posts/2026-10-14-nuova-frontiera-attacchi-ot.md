---
layout: single
title:  "L'attacco ai frigoriferi francesi apre una nuova frontiera dell'(in)sicurezza informatica"
date:   2026-10-14 09:00:00 +0100
categories: cybersecurity
share: true
published: false
read_time: true
header:
  image: /assets/frigoriferi-supermercati/header.jpg
---

Nella notte tra l'11 e il 12 ottobre qualcuno ha forzato da remoto lo sbrinamento continuo dei banchi frigo di centinaia di supermercati francesi, portandoli fino a 50 °C. Nessun dato rubato, nessun riscatto: merce da buttare, qualche principio d'incendio, decine di milioni di euro di danni.
Per chi si occupa di sicurezza è un passaggio simbolico. Un attacco informatico ha prodotto un effetto fisico su scala nazionale passando da una centralina che regola la temperatura di un frigorifero. Lo stesso schema vale per le pompe di un acquedotto, il riscaldamento di un ospedale, i semafori, i cancelli di un magazzino: ovunque un oggetto fisico sia governato da un controller raggiungibile in rete.

### IT, OT, IoT: il confine che non c'è più
Per anni la sicurezza informatica ha protetto soprattutto l'IT: server, postazioni, dati. L'OT, cioè i sistemi che controllano processi fisici, viveva in reti separate e in mano ai tecnici degli impianti. L'IoT ha fatto saltare questa separazione, collegando a Internet sensori e centraline per comodità di gestione e manutenzione.
I controller colpiti in Francia, Danfoss e poi anche Copeland e Dixell secondo l'[aggiornamento del CERT-FR](https://www.cert.ssi.gouv.fr/alerte/CERTFR-2026-ALE-012/), sono esattamente questo: dispositivi OT con un'interfaccia web, amministrati a distanza dai manutentori. Dixell, per inciso, è nata a [Pieve d'Alpago, in provincia di Belluno](https://www.expoclima.net/aziende/1262/dixell-srl/profilo): il problema tocca anche tecnologia progettata in Italia.

I dettagli tecnici erano pubblici da mesi. Ad agosto Claroty aveva [descritto](https://claroty.com/team82/research/freeze-the-controller-defrost-the-food-uncovering-vulnerabilities-in-danfoss-refrigeration-controllers) sui Danfoss AK-SM 800A un accesso di servizio nascosto che accetta un "codice del giorno" calcolato dalla sola data (CVE-2025-41450) e una command injection nella configurazione delle mail di allarme (CVE-2025-41451). Sui supervisori Copeland XWEB Pro aveva trovato [23 vulnerabilità](https://cybersecuritynews.com/hackers-can-turn-off-refrigeration/), compresa una password di amministratore derivata da data e indirizzo MAC, e aveva mostrato un frigorifero con le ventole spente e il display fermo su una temperatura normale.
Molti dei dispositivi colpiti sono fuori supporto da anni e restano raggiungibili da Internet: il 13 ottobre una ricerca su Shodan [rilanciata su X](https://x.com/IntCyberDigest/status/2109932093807415532) ne contava quasi 5.000 nel mondo, 2.911 in Francia. Per quei modelli, ha [osservato](https://cybernews.com/security/copeland-dixell-cyberattack-french-supermarket-refrigeration/) Denis Calderone di Suzu Lab, non esiste una patch da installare: "you can only segment it, monitor it, or replace it".

### Cosa dice la community
Kevin Beaumont, tra le voci più seguite su Mastodon, nelle prime ore ha [scritto](https://cyberplace.social/@GossiTheDog/117429502412235079) che l'attacco era "easily scriptable" e più probabilmente opera di "a bored teen" che di uno Stato, criticando le ricostruzioni su sciami di agenti AI. Il giorno dopo ha ammesso di essere stato troppo sbrigativo: qualche competenza serve. Resta il fatto che la soglia d'ingresso è bassa, e questo rende l'emulazione un rischio concreto.

Su [Hacker News](https://news.ycombinator.com/item?id=50055304), in oltre 950 commenti, i contributi più utili vengono da chi questi impianti li gestisce. Il direttore IT di una catena di alimentari ha [raccontato](https://news.ycombinator.com/item?id=50066302) di aver ereditato controller con IP statici nella stessa rete degli uffici, perché il predecessore "pensava che le VLAN fossero spaventose". Un tecnico ha [spiegato](https://news.ycombinator.com/item?id=50068092) che scollegare tutto risolve poco: i cicli di sbrinamento vanno coordinati in rete per non sovraccaricare i compressori. La proposta più concreta è [limitare i parametri modificabili da remoto](https://news.ycombinator.com/item?id=50056469) e legare le operazioni pericolose a un interblocco fisico sul posto. Qualcuno ha anche richiamato il [Cyber Resilience Act](https://news.ycombinator.com/item?id=50057099), che sposterà sui produttori la responsabilità degli aggiornamenti di sicurezza mancati.

### L'allarme dell'ACN e il caso italiano
In Italia l'ACN ha reagito con tempestività. Il 13 ottobre il CSIRT Italia ha pubblicato un [bollettino a criticità alta](https://www.acn.gov.it/portale/w/misure-urgenti-di-verifica-e-mitigazione-per-operatori-della-distribuzione-alimentare-e-della-filiera-del-freddo) per GDO, logistica alimentare e manutentori, mentre il CERT-FR avvertiva che le campagne contro questi apparati sono "probabilmente ancora in corso".
Il bollettino va oltre la refrigerazione. Ricorda che una pagina di login o un certificato HTTPS non bastano a rendere sicuro un sistema esposto, che le VLAN senza filtraggio non separano nulla, che vanno cercati i router cellulari e le connessioni installate dai manutentori. E chiede di includere refrigerazione, climatizzazione e building management nei programmi di gestione delle vulnerabilità, da cui oggi restano quasi sempre fuori.

Qui sta la nuova frontiera. Le infrastrutture di un Paese comprendono ormai migliaia di oggetti fisici governati da centraline: celle frigorifere, impianti di climatizzazione, pompe, contatori, sistemi di accesso. Spesso appartengono al facility manager e all'installatore, sfuggono all'inventario IT e nessuno li aggiorna per vent'anni. Con la NIS2 molti operatori, compresa la distribuzione alimentare, sono già soggetti a obblighi di sicurezza, ma la domanda pratica resta aperta: chi è responsabile della sicurezza della centralina del frigorifero?

Per cominciare servono poche cose, fatte bene: sapere quali controller ci sono e con quale firmware, togliere da Internet ciò che non deve starci, governare gli accessi remoti dei fornitori, estendere il vulnerability assessment anche all'OT con le cautele che l'ACN raccomanda. In Francia è toccato ai frigoriferi. La prossima volta potrebbe toccare a qualcosa di più difficile da buttare via.
