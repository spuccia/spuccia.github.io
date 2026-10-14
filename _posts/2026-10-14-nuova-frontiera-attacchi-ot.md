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

Quello che è accaduto la notte del 12 ottobre in Francia, con l’attacco al
sistema di sbrinamento dei frigo di diverse catene di supermercati, apre un nuovo fronte nella lotta agli attacchi informatici. 

Non è la prima volta che una violazione dei sistemi informatici produce effetti “fisici” di portata nazionale passando da centraline elettroniche e digitali. Lo stesso schema potrebbe, almeno in linea teorica, essere applicabile alle pompe di un acquedotto, al riscaldamento di un ospedale, semafori, cancelli di un magazzino. qualsiasi sia l’oggetto fisico ad essere governato da un controller raggiungibile in rete è potenzialmente esposto a questo tipo di attacchi.

I controller colpiti in Francia, Danfoss e poi anche Copeland e Dixell secondo l'aggiornamento del CERT-FR, sono esattamente questo: dispositivi OT con un'interfaccia web, amministrati a distanza dai manutentori. Dixell, per inciso, è nata a Pieve d'Alpago, in provincia di Belluno: il problema tocca anche tecnologia progettata in Italia.

Non sorprende dunque l’allerta tempestiva diramata da Agenzia della Cybersicurezza Nazionale nel bollettino CSIRT del 13 ottobre che invita GDO, logistica alimentare e manutentori a verificare lo stato di sicurezza dei propri sistemi.

Quest’evento impone una importante riflessione e per una volta sposta il focus dall'IT all'OT, ovvero quei sistemi che controllano processi fisici, che ancora diffusamente vivono in reti separate e in mano ai tecnici degli impianti. L'avvento dell’IoT aveva già fatto intendere quale fosse la direzione, collegando a Internet sensori e centraline per comodità di gestione e manutenzione.

A fronte di questa esposizione pubblica dei sistemi il rischio reale è ancora largamente sottostimato, e il caso francese è emblematico in questo senso.
I dettagli tecnici erano pubblici da mesi. Ad agosto esperti di sicurezza avevano descritto vulnerabilità sui Danfoss AK-SM 800A un accesso di servizio nascosto che accetta un "codice del giorno" calcolato dalla sola data (CVE-2025-41450) e una command injection nella configurazione delle mail di allarme (CVE-2025-41451). Sui supervisori Copeland XWEB Pro aveva trovato 23 vulnerabilità, compresa una password di amministratore derivata da data e indirizzo MAC, e aveva mostrato un frigorifero con le ventole spente e il display fermo su una temperatura normale. 

Molti dei dispositivi colpiti sono fuori supporto da anni e restano raggiungibili da Internet: il 13 ottobre una ricerca su Shodan, il motore di ricerca dei dispositivi connessi, ne contava quasi 5.000 nel mondo, 2.911 in Francia. Per quei modelli, ha osservato Denis Calderone di Suzu Lab, non esiste una patch da installare: monitoraggio, segregazione e infine sostituzione.

Kevin Beaumont, tra le voci più seguite su Mastodon, nelle prime ore ha scritto che l'attacco era con molta probabilità opera di ragazzini annoiati piuttosto che manifestazione di guerra ibrida, criticando le ricostruzioni che imputavano l’evento a  sciami di agenti AI. Il giorno dopo ha ammesso di essere stato forse troppo sbrigativo, che per portare a compimento operazioni di questa portata qualche competenza serve. Resta il fatto che la soglia d'ingresso è bassa, e questo rende l'emulazione un rischio concreto.
Su Hacker News, in oltre 950 commenti, i contributi più interessanti vengono da chi questi impianti li gestisce. Il direttore IT di una catena di alimentari ha raccontato di aver ereditato controller con IP statici nella stessa rete degli uffici, perché il predecessore "pensava che le VLAN fossero spaventose". Un tecnico ha spiegato che scollegare tutto risolve poco: i cicli di sbrinamento vanno coordinati in rete per non sovraccaricare i compressori. La proposta più concreta è limitare i parametri modificabili da remoto e legare le operazioni pericolose a una “mediazione” fisica sul posto. Qualcuno ha anche richiamato il Cyber Resilience Act, che sposterà sui produttori la responsabilità degli aggiornamenti di sicurezza mancati.

L’allerta di ACN fornisce chiare indicazioni per la mitigazione di questi rischi. Il bollettino ricorda che una pagina di login o un certificato HTTPS non bastano a rendere sicuro un sistema esposto, che le VLAN senza filtraggio non separano nulla, che vanno cercati i router cellulari e le connessioni installate dai manutentori. E chiede di includere refrigerazione, climatizzazione e building management nei programmi di gestione delle vulnerabilità, da cui oggi restano quasi sempre fuori.

Qui sta la nuova frontiera. Le infrastrutture di un Paese comprendono ormai migliaia di oggetti fisici governati da centraline: celle frigorifere, impianti di climatizzazione, pompe, contatori, sistemi di accesso. Spesso sfuggono all'inventario IT e nessuno li aggiorna per decenni.
Per cominciare servono poche cose, fatte bene e con costanza: sapere quali controller ci sono e con quale firmware, togliere da Internet ciò che non deve starci, governare gli accessi remoti dei fornitori. 
Vulnerability assessment per capire cosa proteggere e di cosa preoccuparsi. L’immancabile formazione cyber di base ai dipendenti e collaboratori, per aumentare la consapevolezza e tutelare il business. I costi sono abbordabili e un investimento con budget minimo abbatte il rischio di diverse decine di punti percentuali. 