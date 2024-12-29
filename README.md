# TypeScript

instalowanie pakietu

npm install typescript -g



Get-ExecutionPolicy

Set-ExecutionPolicy RemoteSigned

Set-ExecutionPolicy -Scope CurrentUser RemoteSigned

Get-ExecutionPolicy -Scope CurrentUser

npm install -g typescript

tsc main.ts
tsc main.ts -w

inicjonowanie 

tsc --init

wpliku tsconfig.json szykamy elementu Modules i zmieniemay "rootDir" na "./src" potem w sekcji Emit "outDir": "./built/js",

/* Language and Environment */
    "target": "es2016", 
będzie wtedy tworzyć javascript ze wszystkimi możliwościami możemy zminić to na strasze wersje 

i teraz żeby nie tworzyło nam elementów poza folderm src w tsconfig dodajemy obok  "compilerOptions": na sam koniec pliku
```
    },
    "include": [
        "src"
    ]
}
```
jeżeli nie lubimy jak są jakieś błędy w ts to nie będzie mógł się kompilować włączają tą opcję 
"noEmitOnError": true,

przez to nasz plik js nie zostanie rekonstruowany

tsc --noEmitOnError -w