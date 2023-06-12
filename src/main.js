<<<<<<< HEAD
import arquivoJson from "./beatles_songs.json" assert { type: "json" };

function exibeJson() {

}

exibeJson();
=======
document.querySelector(".container__carousel__div")
    .addEventListener("wheel", e => {
        // console.log(e)
        if (e.deltaY > 0) {
            e.target.scrollBy(300, 0)
        } else {
            e.target.scrollBy(-300, 0)
        }
    })
>>>>>>> acc54bd (alterações prontas)
