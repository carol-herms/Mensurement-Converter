let metros = prompt ("Este é um conversor de medidas \nPrimeiro insira um valor em metros \n\n *somente numeros")


const choice = prompt ("Insira ABREVIADAMENTE qual a unidade de medida escolhida para a conversão: \nmm (millimeter) \ncm (centimeter) \ndm (decimeter) \ndam (dekameter) \nhm (hectometer) \nkm (kilometer)")

let mm = metros * 1000
let cm = metros * 100
let dm = metros * 10
let dam = metros / 10
let hm = metros / 100
let km = metros / 1000


switch (choice) {
    case "mm" :
        alert ( "the result is "  + mm + " mm ")
        break
    
    case "cm" :
        alert ( "the result is "  + cm + " cm ")
        break
        
    case "dm" :
        alert ( "the result is "  + dm + " dm ")
        break
        
    case "dam" :
        alert ( "the result is "  + dam + " dam ")
        break
        
    case "hm" :
        alert ( "the result is "  + hm + " hm ")
        break
        
    case "km" :
        alert ( "the result is "  + km + " dm ")
        break
        
    default  : alert ("*Invalid option*")

} 