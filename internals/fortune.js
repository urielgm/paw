var fortunes = [
    "En todo tiempo ama el amigo",
    "Hijo de Irving que nace torcido",
    "El matrimonio es para aquellos que temen dormir solos",
    "Algunas veces el perder una batalla es una nueva forma de entender como ganar la guerra ",
    "Ningun hombre tiene suficiente memoria para ser un mentiroso exitoso",
    "Claro que quiero ser el hombre de tus sueños ... per para eso ya duermete mamacita"
    ];
    
function getIntRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports = {
    "getFortune" : function(cb){
        // Construyo objeto respuesta
        
        var selector = getIntRandomNumber(0,fortunes.length - 1);
        var fortuneMessage = fortunes[selector];
        var fortunePaperObject = {
            "paper" : fortuneMessage
        };
        cb(JSON.stringify(fortunePaperObject));
    }
};