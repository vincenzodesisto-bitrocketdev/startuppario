Ecco una guida passo-passo su come contrbuire al progetto:

1. **Fork della Repository**
   - In alto a destra della pagina della repository, vedrai un pulsante "Fork". Cliccalo. Questo creerà una copia della repository nel tuo account GitHub.

4. **Clona la tua Fork**
   - Sul tuo fork, clicca sul pulsante "Code" e copia l'URL.
   - Apri il terminale o la riga di comando sul tuo computer e digita:
     ```
     git clone [URL]
     ```
     Dove `[URL]` è l'URL che hai copiato.

5. **Crea un Nuovo Branch**
   - Naviga nella directory clonata:
     ```
     cd [nome-della-repo]
     ```
   - Crea un nuovo branch:
     ```
     git checkout -b [nome-del-tuo-branch]
     ```

6. **Apporta le Modifiche**
   - Apporta le modifiche necessarie ai file.
   - Una volta terminato, salva le modifiche:
     ```
     git add .
     git commit -m "Descrizione delle modifiche apportate"
     ```

7. **Push sul tuo Fork**
   - Carica le tue modifiche sul tuo fork su GitHub:
     ```
     git push origin [nome-del-tuo-branch]
     ```

8. **Crea una Pull Request (PR)**
   - Vai alla pagina Github di [Startuppario](https://github.com/bitRocket-studio/startuppario).
   - Clicca su "New pull request".
   - Assicurati che il branch di base sia quello della repository originale e il branch di confronto sia il tuo branch.
   - Compila la descrizione della PR, spiegando le modifiche che hai apportato.
   - Clicca su "Create pull request".

9. **Attendi la Revisione**
   - I maintainer della repository originale esamineranno la tua PR. Potrebbero chiederti di apportare ulteriori modifiche o fornire chiarimenti.

10. **Merge o Chiusura**
   - Se la tua PR viene approvata, i maintainer la uniranno al codice principale. Se decidono di non accettarla, chiuderanno la PR, spesso fornendo una spiegazione.

11. **Mantieni il tuo Fork Aggiornato**
   - È una buona pratica mantenere il tuo fork sincronizzato con la repository originale. Puoi farlo configurando un upstream e facendo periodicamente un pull delle modifiche.

Ricorda sempre di leggere e seguire le linee guida per i contributori della repository.
