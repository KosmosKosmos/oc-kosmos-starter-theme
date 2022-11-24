# Anleitung für dieses Theme
Dieses Starter-Thema verwendet die Frameworks [Vue](https://vuejs.org/v2/api/) und [UIkit](https://getuikit.com/docs/introduction). Zum Bauen der minifizierten Dateien kommt [Parcel](https://parceljs.org/) zum Einsatz

## Nötige Plugins
Die für das Theme benötigten Plugins sind:
- [ ] RainLab.Pages
- [ ] KosmosKosmos.Essentialvars
- [ ] KosmosKosmos.BetterContentEditor
- [ ] KosmosKosmos.Easyrechtssicher
- [ ] Offline.Gdpr [Doku](https://github.com/OFFLINE-GmbH/oc-gdpr-plugin)

## Optionale Plugins
Sollte die Seite mehrsprachig verwendet werde, dann werden des weiteren folgende Plugins benötigt:
- [ ] RainLab.Translate

## Wichtige Ordern
Unter `partials/components` befinden sich die allgemeinen Partials, die keinem Plugin sondern dem Theme zugeordnet sind.
Unter `src` sind alle UIKit-Anpassungen und alles Javascript zu finden, dass im Allgemeinen auf der Seite laufen soll…ansonsten lieber das Javascript in ein Plugin wandern lassen.

### OctoberCMS Ordner
Unter `assets` befinden sich alle für das Theme statisch eingebundenen Scripts, Styles, Bilder, Schriften, u.a.
Unter `content` sind alle Inhalte zu finden, die letztendlich der Kunde auf seiner Seite selbständig (durch das Plugin DasRoteQuadrat.BetterContentEditor) geändert werden.
Unter `pages` befinden sich, wie der Name suggerieren lässt, die Seiten der Webseite.
Unter `layouts` befinden sich, wie der Name suggerieren lässt, die Layouts der Webseite.
Unter `meta` ist die Menüstruktur für das Kopf-/ und das Fusszeilen-Menü zu finden.

## Styles und Javascript
Um Javascript zu bauen, muss man zunächst `npm install` ausführen danach stehen die Befehle `npm run watch` sowie `npm run build` zur Verfügung.

### Generieren der JS- und CSS-Dateien
Mit `npm run watch` werden die Styles und das Javascript so eingebunden, dass man an den Dateien Änderungen vornehmen kann und diese instantan im Browser aktualisiert werden.
Mit `npm run build` werden die js- und css-Dateien minifiziert. Dieser Schritt muss immer als Abschluss für eine Live-Installation ausgeführt werden, da dadurch die Dateigröße reduziert und die Dateiüberwachung entfernt wird.

### Styles-Hinweise
#### UIKit anpassen
Die zugrunde liegende Sprache für das Style-Layout (UIkit) ist SCSS.
UIkit verwendet eine Variablen-Datei, die das Erscheinungsbild der Webseite definiert. Alle Anpassungen der Original-Datei (`src/node_modules/uikit/src/scss/variables-theme`) werden in der `assets/styles/variables.scss` vorgenommen, indem man die Variablen überschriebt.
Die `src/uikit/uikit.scss` wird lediglich verwendet, um alle UIKit-Style-Definition zusammenzuführen. Der dafür nötige Befehl lautet: `npm run uikit-styles`.

#### Sonstige Styles anpassen
Alle anderen Style-Anpassungen erfolgen aus Übersichtsgründen in separaten Dateien (z.B. blog.scss) im Ordner `assets/styles` und werden in der `styles.scss` registriert.
Alle eigenen Elemente sollten zunächst die UIkit-Variablen (z.B. Farben) verwenden, um das Erscheinungsbild einheitlich und einfach modifizierbar zu machen.
