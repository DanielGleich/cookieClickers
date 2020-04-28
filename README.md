1. Schuljahr (Ausbildung als staatlich geprüfter informationstechnischer Assistent)   

Seitdem ich im Unterricht das onClick-Event kennengelernt habe, kamen mir eine Menge Ideen, die ich gerne in HTML/CSS/JS umsetzen wollte. Darunter gab es mehrere Versuche ein eigenen CookieClicker erstellen. Die alten Versionen sind mir gelungen, aber das Anlegen eines neues Upgrades war zu umständlich. Sobald ich im C/C++ Unterricht Klassen kennengelernt habe, habe ich mich informiert, ob es auch Klassen in JS gibt und das löste das Problem mit den Upgrades. 

Die Funktionen in text/main.js sind relativ simpel und garantieren die Funktion des CookieClickers ohne Upgrades.
In text/upgrade.js wird die Klasse "Upgrade" definiert. Im Konstruktur werden folgende Klassenattribute initialisiert:

name 		- Name des Upgrades
price 		- benötigte Anzahl an Cookies, um das Upgrade zu kaufen
clickValue 	- Diese Anzahl an Cookies kriegt man zusätzlich pro Klick, wenn das Upgrade gekauft ist
timeValue 	- Diese Anzahl an Cookies kriegt man pro Sekunde, wenn das Upgrade gekauft ist
count 		- Anzahl an gekauften Einheiten von diesem Typ

Mit der Methode view() wird das Upgrade-Klassenobjekt als Reihe in der Tabelle hinzugefügt.

Mit der Methode buy() wird das Upgrade gekauft.

Die Methode addClickListener() soll der Kauf-Button ein onClickEvent hinzufügen und damit soll die Methode buy() ausgeführt werden.

Zum Schluss der Datei wird ein Array "upgrades" initialisiert und dort werden all künfigten Upgrades eingebunden.

Cpc = Click per Cookie
Cps = Click per Second

Es besteht noch keine Methode, die der timeValue von Upgrades eine Funktion gibt und das Projekt ist daher noch nicht fertig und wird
in Zukunft beendet.