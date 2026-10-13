---
layout: single
title: "In Francia attacco ai surgelatori. La sicurezza informatica per molte aziende è ancora un optional"
date: 2026-10-13 09:00:00 +0100
categories: cybersecurity
share: true
published: true
read_time: true
header:
  image: /assets/frigoriferi-supermercati/header.jpg
---

Nella notte tra l'11 e il 12 ottobre i sistemi di refrigerazione di centinaia di supermercati francesi, tra i quali Netto, Carrefour, Monoprix, sono stati violati da remoto. Gli attaccanti hanno forzato lo sbrinamento continuo dei banchi frigo, impostando una temperatura di 50 °C utilizzando delle tecniche specifiche per ritardare gli allarmi.
I punti vendita colpiti sono diverse centinaia, le perdite stimate per decine di milioni di euro. Casi simili sono stati segnalati in Spagna, Portogallo, Polonia, Germania e Belgio.

Nella serata del 13 ottobre l'Agenzia per la Cybersicurezza Nazionale, comprensibilmente preoccupata dal fenomeno, ha lanciato l'allerta anche nel nostro paese diffondendo un [bollettino a criticità alta](https://www.acn.gov.it/portale/w/misure-urgenti-di-verifica-e-mitigazione-per-operatori-della-distribuzione-alimentare-e-della-filiera-del-freddo) per la grande distribuzione e la filiera del freddo. ACN invita a verificare "installazioni obsolete, interfacce di amministrazione esposte direttamente su Internet e carenze nei meccanismi di autenticazione".

I dispositivi colpiti sono controller della marca danese Danfoss per la gestione dei frigoriferi di un negozio. Attraverso questi controller è possibile amministrare da remoto questi dispositivi. Come dichiarato dal produttore stesso, la maggior parte dei controller compromessi era fuori supporto e non riceveva più aggiornamenti di sicurezza da anni. Alcuni dispositivi erano già stati dichiarati End-Of-Life dal 2016, altri nel 2021. Lo scorso ottobre 2025 Danfoss aveva chiesto ai clienti di pianificarne la sostituzione, e gli stessi modelli avevano già subito attacchi in Russia e in Israele.

Un ricercatore di sicurezza, in una community cyber su Mastodon, ha riferito che molti di questi pannelli esposti avevano credenziali banali, l'utente era "admin" e la password coincideva con la data del giorno. Ad agosto Claroty aveva documentato un bypass di autenticazione e una command injection nel modello più recente, e aveva contato migliaia di interfacce raggiungibili da Internet. Il giorno dopo l'attacco Reuters ne ha trovato almeno 4.500 attraverso portali come Shogun e similari.

Mentre non è stata ancora confermata la causa della violazione, nè il threat actor, per Ken Munro di Pen Test Partners la questione è di "basic cyber hygiene". L'attacco è avvenuto sfruttando cattive pratiche e scarsa attenzione da parte dei gestori di tali sistemi.

Nel [thread di Hacker News](https://news.ycombinator.com/item?id=50055304) sull'attacco, quasi un migliaio di commenti, in tanti si sono chiesti perché un frigorifero debba stare in rete. Chi lavora nel settore ha spiegato che il monitoraggio remoto ha senso: sapere entro un'ora che una cella si è guastata permette di mandare un tecnico e salvare la merce. I guai iniziano quando online finiscono anche i comandi. Un utente ha distinto i sensori, che si possono esporre con qualche cautela, dagli attuatori, che vanno blindati perché le conseguenze sono fisiche.
Un altro ha ricordato che il direttore di un punto vendita lavora con margini intorno al 3% e spesso dipende da tecnologia gestita altrove o da un tecnico esterno. Lo ha confermato anche il CEO di Coopérative U: i negozi ricevono il sistema Danfoss tramite gli installatori. Così il livello di sicurezza finisce per essere quello del fornitore meno attento della catena.

Ad oggi nessun gruppo noto ha rivendicato l'attacco, analisti non escludono che siano stati "kids messing around" mentre altri collegano l'evento ai guasti simultanei dei freezer nelle basi militari statunitensi di fine agosto: il Dipartimento della Difesa ha avviato un'indagine, ma non ne ha confermato l'origine informatica.

Ad ogni modo il quadro generale appare oramai chiaro: le infrastrutture digitali sono diventate un bersaglio. In questi giorni l'Ucraina ha colpito con i droni tre data center Yandex, in risposta agli attacchi russi mentre nella guerra dell'Iran sono state colpite duramente strutture in Bahrein ed Emirati, in una escalation che minaccia cavi e data center dell'intera regione del Golfo.
Intanto la soglia d'ingresso si abbassa. Trovare dispositivi esposti e vulnerabilità note è alla portata di chiunque, e con l'intelligenza artificiale confezionare un attacco è un gioco da ragazzi. "Script kiddies are on LLM steroids now" recita un commento su Hacker News.

Sebbene la sicurezza informatica sia un affare complesso, la maggior parte degli attacchi si previene con poche regole applicate con costanza.

Un vulnerability assessment periodico dice cosa è esposto, cosa è obsoleto e cosa va aggiornato o sostituito. I costi sono abbordabili e spesso il rimedio è semplice: un aggiornamento, la sostituzione di un componente a fine vita, un pannello spostato dietro una VPN. I framework di sicurezza informatica tracciano già la via in scenari come questo:

- un inventario dei dispositivi con il loro stato di supporto;
- la rimozione dell'esposizione diretta su Internet;
- la separazione tra rete IT e sistemi OT;
- un piano di sostituzione dei dispositivi a fine vita.

Eppure tanti controlli industriali restano intatti dagli anni '90, perché "se funziona non si tocca". In Francia si è visto quanto costa questa filosofia.

Poi c'è la formazione di base per i dipendenti: riconoscere una mail o un SMS di phishing, verificare un link prima di cliccare e tutte le buone pratiche per la gestione delle password e degli accessi.
Bastano pochi principi chiari, ripassati con regolarità. Nel caso francese il phishing non ha avuto un ruolo, ma resta tra le prime cause di furto di credenziali. Un dipendente che non sa riconoscere una mail falsa espone l'intera azienda o un indotto milionario.

Infine maggiore attenzione ai fornitori, gli attacchi alla supply chain come questo qui francese si susseguono senza sosta. Chi accede da remoto ai vostri sistemi, con quali credenziali, il ciclo di vita di questi accessi.

Corsi di awareness e vulnerability assessment, un budget minimo per una azienda che vuole tutelare il suo business.
Per evitare una notte come quella francese servono pratiche di base, metodo e continuità.
