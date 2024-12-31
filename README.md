# TypeScript

Instalowanie pakietu
```
npm install typescript -g
```
jeżeli to samo to nie wystarczy to trzeba ustawić rozszerzenie.

### Ustawianie rozszerzenia TS na visual studio code
- Dla Admina:
```
Get-ExecutionPolicy

Set-ExecutionPolicy RemoteSigned
```
- Dla danego użytkownika
```
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned

Get-ExecutionPolicy -Scope CurrentUser
```
I przeładowanie zainstalowanego TS
```
npm install -g typescript
```

### Odpalenie konpilowania 
- Pojedyncze kompilowanie konkretnego pliku
```
tsc main.ts
```
- Włączenie trypu automatycznego konpilowania przy zapisuwaniu pliku
```
tsc main.ts -w
```

### Inicjonowanie pliku konfiguracyjnego TS
```
tsc --init
```
w pliku tsconfig.json szykamy elementu Modules i zmieniemay "rootDir" na "./src" potem w sekcji Emit "outDir": "./built/js",
```
"rootDir": "./src",

"outDir": "./build/js",

```
będzie wtedy tworzyć javascript ze wszystkimi możliwościami możemy zminić to na strasze wersje
```
/* Language and Environment */
    "target": "es2016", 
```

i teraz żeby nie tworzyło nam elementów poza folderm src w tsconfig dodajemy obok  "compilerOptions": na sam koniec pliku
```
    },
    "include": [
        "src"
    ]
}
```
jeżeli nie lubimy jak są jakieś błędy w ts to nie będzie mógł się kompilować włączają tą opcję w pliku
``` 
"noEmitOnError": true,
```
przez to nasz plik js nie zostanie rekonstruowany możemy też ręcznie przez konsole to zrobić
```
tsc --noEmitOnError -w
```