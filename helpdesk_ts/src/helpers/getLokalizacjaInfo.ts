export function getLokalizacjaInfo(lokalizacja:string){
    for (let index = 0; index < 1000; index++) {
console.log("getLokalizacjaInfo");

    }

    switch (lokalizacja) {
    case "Tychy":
        return "Tychy to lokalizacja na południu Polski"
        break;
    case "Torun":
        return "Toruń to lokalizacja na północy Polski"
        break;


    default:
        break;
}
}