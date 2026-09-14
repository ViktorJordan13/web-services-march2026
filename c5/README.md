### Avtentikacija

    - Utrvduvanje na identitet, avtenticnost
    - Proces vo koj verificirame dali nekoj e toj sto tvrdi deka e.
    Primer:
        - verifikacija na licnost so pokazuvanje licna karta,
        - najava na fb so email i lozinka

### Avtorizacija

    - Dozvola, privilegija za izvrsuvanje na odredeni funkcii
    - Proces na verificiranje na korisnikot dali ima privilegii da pristapi do odredeni aplikacii, fajloi, mesta i slicno
    Primer:
    - Korisnikot moze da gi vidi svoite beleski vo telefonot, a za toa da go napravi mora prvo da go otkluci (so pin, pattern, finger id, face recognition ...)

### Multi-tenancy

    tenant - stanar, kirijas, zitel 
    multi-tenancy - Primer: grupa od poveke stanari, kade sto sekoj ima kluc od vleznata vrata ili garaza, no ne sekoj ima kluc od site stanovi vo zgradata.
    Na istiot nacin sekoj korisnik iako ja koristi istata aplikacija, moze da si gi gleda samo sopstvenite mejlovi i podatoci, drugite ne mozat da mu gi vidat, i toj ne moze niv

    - Multi-tenancy(Multi-korisnost) e arhitektura na software koja ovozmozuva poveke nezavisni korisnici ili organizacii da spodeluvaat ista aplikacija ili sistem, dodeka gi zadrzuva izoliranite podatoci i konfiguraciite. Toa obezbeduva efikasno spodeluvanje na resursi i prilagoduvanje na sekoj korisnik ili organizacija.

    Primer: 
    - Admin korisnikot ima pristap do poveke privilegii, dodeka obicniot korisnik ima pomalku.
    - Admin moze da ve blokira od koristenje na softverot, moze da vi stavi restrikcii za odredeni servisi vo zavisnost od kolku nekoj korisnik platil, kako se odnesuval i slicno.
    - Korisnik (user) - moze da napravi nov zapis, da go uredi, da go izbrise toj zapis ssto go kreiral vo svoe ime, ne vo ime na drug korisnik(ako jas se avtenticiram kako jas, i izbrisam nekoj zapis, sum go izbrisal vo moe ime, ne vo ime na drug korisnik).

### JWT - JSON Web Token

    - Se koristi za bezbedna komunikacija pomegu klient i server, kako JSON objekt
    - JWT e digitalno potpisan
    - Moze da koristi algoritmi kako HMAC ili HS256 za privatni klucevi
    - Ima javni klucevi kako RSA, ECDSA.
    - Struktura:
        Primer: xxxxx.yyyyyy.zzzzz
        1. Header
            - type of token
            - type of alhorhitm used
            Primer {"alg": "HS256", "typ": "JWT"}
        2. Payload
            - sodrzi claims. Claim vi e izjava na nekoj entitet (na primer user-korisnikot), isto taka sodrzi dopolnitelni podatoci
            Tri vidovi na claims:
            1. registered - vie mozete da gi vidite tie podatoci
            2. private - moze i da gi izmenuvate tie podatoci
            3. public - ne moze da vidite i da pristapite do niedni podatoci
            Primer: {
                    "sub": "1234567890",
                    "name": "John Doe",
                    "admin": true,
                    "iat": 1516239022
                    ...
            }
        3. Signature - go zema enkodiraniot HEADER, PAYLOAD i SECRET i pravi podpis na sledniot nacin:
            - HMACSHA256(base64urlEncode(Header) + "." + base64UrlEncode(Payload), SECRET)
            - Podpisot ni sluzi za da se osigurame deka originalnata poraka ne bila promeneta na pat kon krajniot korisnik

### Packets - moduli koi sto ke gi koristime
    - express
    - mongoose
    - node-input-validator
    - bcryptjs
    - jsonwebtoken
    - express-jwt