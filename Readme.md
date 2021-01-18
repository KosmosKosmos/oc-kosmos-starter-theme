# Anleitung für dieses Theme
Dieses Starter-Thema verwendet die Frameworks [Vue](https://vuejs.org/v2/api/) und [UIkit](https://getuikit.com/docs/introduction).

## Nötige Plugins
Die für das Theme benötigten Plugins sind:
- [ ] Luketowers.Essentialvars
- [ ] ToughDeveloper.ImageResizer
- [ ] DasRoteQuadrat.BetterContentEditor
- [ ] Indikator.News
- [ ] JanVince.SmallContactForm

## Optionale Plugins
Sollte die Seite mehrsprachig verwendet werde, dann werden des weiteren folgende Plugins benötigt:
- [ ] RainLab.Translate
- [ ] RainLab.Pages
- [ ] Panakour.Translate

## Wichtige Ordern
Unter `partials/layout` befinden sich die allgemeinen Partials, die keinem Plugin sondern dem Theme zugeordnet sind.
Unter `src` sind alle Styles und alles Javascript zu finden, dass im Allgemeinen auf der Seite laufen soll…ansonsten lieber das Javascript in ein Plugin wandern lassen.

### OctoberCMS Ordner
Unter `assets` befinden sich alle für das Theme statisch eingebundenen Scripts, Styles und Bilder.
Unter `content` sind alle Inhalte zu finden, die letztendlich der Kunde auf seiner Seite selbständig (durch das Plugin DasRoteQuadrat.BetterContentEditor) geändert werden.
Unter `pages` befinden sich, wie der Name suggerieren lässt, die Seiten der Webseite.
Unter `layouts` befinden sich, wie der Name suggerieren lässt, die Layouts der Webseite.
Unter `meta` ist die Menüstruktur für das Kopf-/ und das Fusszeilen-Menü zu finden.

## Styles und Javascript
Um Styles und Javascript zu bauen muss man zunächst `npm install` ausführen danach stehen die Befehle `npm run watch` sowie `npm run build` zur Verfügung.

### Generieren der JS- und CSS-Dateien
Mit `npm run watch` werden die Styles und das Javascript so eingebunden, dass man an den Dateien Änderungen vornehmen kann und diese instantan im Browser aktualisiert werden.
Mit `npm run build` werden die js- und css-Dateien minifiziert. Dieser Schritt muss immer als Abschluss für eine Live-Installation ausgeführt werden, da dadurch die Dateigröße reduziert und die Dateiüberwachung entfernt wird.

### Styles-Hinweise
Die zugrunde liegende Sprache für das Style-Layout (UIkit) ist SCSS.
UIkit verwendet eine Variablen-Datei, die das Erscheinungsbild der Webseite definiert. Alle Anpassungen der Original-Datei (`node_modules/uikit/src/scss/variables-theme`) werden in der `_variables.scss` vorgenommen, indem man die Variablen überschriebt.
Die `main.scss` wird lediglich verwendet, um alle Style-Definition zusammenzuführen. Alle spezifischen Anpassungen erfolgen aus Übersichtsgründen in separate Dateien (z.B. blog.scss).
Alle eigenen Elemente sollten zunächst die UIkit-Variablen (z.B. Farben) verwenden, um das Erscheinungsbild einheitlich und einfach modifizierbar zu machen.

### Javascript-Hinweise
Sollten eigene Vue-Komponenten auf Javascript von UIkit zurückgreifen (z.B. Notifications einblenden), hat es sich als Vorteil erwiesen, dass man auf  `window.UIkit`  zurückgreift.
