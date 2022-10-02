const redNeuronal = new brain.NeuralNetwork();
window.onload = iniciar;

function iniciar() {
    
    const datos = [
        {
            "input"  : {"R":199/255,"G":232/255,"B":255/255},
            "output" : {"claro":1}
        },
        {
            "input"  : {"R":0/255,"G":42/255,"B":81/255},
            "output" : {"oscuro":1}
        },
        {
            "input"  : {"R":244/255,"G":242/255,"B":140/255},
            "output" : {"claro":1}
        },
        {
            "input"  : {"R":40/255,"G":4/255,"B":84/255},
            "output" : {"oscuro":1}
        },
        {
            "input"  : {"R":60/255,"G":230/255,"B":89/255},
            "output" : {"claro":1}
        },
        {
            "input"  : {"R":0/255,"G":30/255,"B":51/255},
            "output" : {"oscuro":1}
        }
    ];

    redNeuronal.train(datos);
    
    getColor();

}

function getColor() {
    let color = document.getElementById("txtColor").value;
    let prediccion = document.getElementById("txtPrediccion")

    var red = parseInt(color[1]+color[2],16);
    var green = parseInt(color[3]+color[4],16);
    var blue = parseInt(color[5]+color[6],16);

    let resultado = brain.likely({"R":red/255,"G":green/255,"B":blue/255}, redNeuronal)
    prediccion.innerHTML = resultado

}