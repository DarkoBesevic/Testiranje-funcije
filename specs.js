/* 
ocekujemo da ce funkcija kojoj prosedimo niz brojeva vratiti samo parne brojeve iz niza  
*/

describe("Testiranje filter funkcije", function () {
    it("treba da vrati samo parne brojeve", function () {
        const niz = [56, 26, 0, 77, 39, 346, 85, 55, 234, 5651, 5687, 588];
        const niz1 = vratiParne(niz);
        let parni = true;
        for (let i = 0; i < niz1.length; i++) {
            if (niz1[i] % 2 == 1) {
                parni = false;
                break;
            }
        }
        expect(parni).toBe(true);
    })
})

/*
describe("Testiranje filter funkcije", function () {

    it("treba da vrati samo parne brojeve", function () {
        const rezultat = vratiParne([56, 26, 0, 77, 39, 346, 85, 55, 234, 5651, 5687, 588]);
        let nadjenNeparni = false;
        for (let i = 0; i < rezultat.length; i++) {
            if (rezultat[i] % 2 !== 0) {
                nadjenNeparni = true;
                break;
            }
        }
        expect(nadjenNeparni).toBe(false);
    })
})
*/

