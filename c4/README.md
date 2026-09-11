Etapi na razvoj (development stages) - toa vi se etapi od razvojot na edna aplikacija, sekoja od niv si ima svoja posebnna namena.

1. development (dev) - tuka lokalno gi razvivame aplikaciite
2. integration (testing) - tuka imame hostirana aplikacija sto e kako kopija na vistinskata aplikacija, na koja intenzivno testirame
*. staging (pre production) - ova vi e egzaktna kopija od production ( kako vistina bi izgledala aplikacijata na production), toa e posledna
generalna proba pred deployment na production
3. production - vistinskata aplikacija sto ja koristat vasite korisnici

Authentication (Avtentikacija) - treba toj sto go praka baranjeto (vo nasiot slucaj GET, POST, PUT, PATCH, DELETE) da go dokaze svojot identitet (deka stvarno e toj za koj sto se predstavuva)

Authorization (Avtorizacija) - toa vi e dozvola (otkako uspesno se avtenticirate) odnosno pristap da pristapite do resursite i dali toa ke vi bide odobreno ili ne, postojat
razlicni nivoa na avtorizacija (guest, regular user, admin ...)