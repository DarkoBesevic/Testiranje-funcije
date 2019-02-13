// js from 1st class

// function sum(a, b) {
//     if (typeof a !== 'number' || typeof b !== "number") return NaN;
//     return (a * 1000000000000000 + b * 1000000000000000) / 1000000000000000;
// }
/*
 
const s= id => document.getElementById(id);

const knjige = [];

class Knjiga {
            
    constructor(naslov, autor, zanr) {
        this.naslov = naslov;
        this.autor = autor;
        this.zanr = zanr;
        this.datum = Date.now();
    }

}

function dodatiKnjigu(knjiga) {

    // for (let key in knjiga) {
    //     if (knjiga[key] === undefined) {

    //     }
    // }
    if("autor" in knjiga && "naslov" in knjiga && "zanr" in knjiga)
    knjige.push(knjiga);
}

function uklonitiKnjigu(naslov){
    const index=knjige.findIndex(x => x.naslov===naslov);
    knjige.splice(index,1);
}


s("dodati").addEventListener("click",function(){
const knjiga=new Knjiga(s("naslov").value,s("autor").value,s("zanr").value);
dodatiKnjigu(knjiga);
});
s("izbrisati").addEventListener("click",function(){
    uklonitiKnjigu(s("naslov").value);
   
    });*/
    const niz=[25,12,5,9,19,256,321,12288,3,17,0,19,26,27,137,132,136];
    let niz1=[];
    function vratiParne(niz){
        niz1=niz.filter(x => !(x%2));
        return niz1;
    }
    console.log(vratiParne(niz));