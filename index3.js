let listeDeMotLevel1 = ["COLT", "WEST", "RANCH", "CLINT", "DJANGO", "SALOON", "FLECHE", "PRIME"]
let listeDeMotLevel2 = ["COWBOYS", "SHERIFS", "APACHES", "ARIZONA", "EASTWOOD", "SPAGETTI", "RESERVE"]
let listeDeMotLevel3 = ["DILIGENCE", "HOLLYWOOD", "CHEVAUCHEE", "REDEMPTION", "CHASSEURS", "WINCHESTER"]
let div1 = document.getElementById("div1")
let level1 = document.getElementById("level1")
let level2 = document.getElementById("level2")
let level3 = document.getElementById("level3")
let lettre = document.getElementById("lettre")
let note = document.getElementById("note")
note.textContent = ""
let user = document.getElementById("user")
let phrase = document.getElementById("phrase")
let final = document.getElementById("final")
lettre.style.visibility = "hidden"
let essai = 0


level1.addEventListener('mouseover', () => {
    note.textContent = "Mot de 4, 5 ou 6 lettres en 10 essais"
})
level1.addEventListener('mouseout', () => {
    note.textContent = ""
})
level2.addEventListener('mouseover', () => {
    note.textContent = "Mot de 7 ou 8 lettres en 12 essais"
})
level2.addEventListener('mouseout', () => {
    note.textContent = ""
})
level3.addEventListener('mouseover', () => {
    note.textContent = "Mot de 9 ou 10 lettres en 14 essais"
})
level3.addEventListener('mouseout', () => {
    note.textContent = ""
})


level1.addEventListener('click', () => {
    note.innerHTML = "Mot de 4, 5 ou 6 lettres en 10 essais"
    lettre.style.visibility = "visible"
    let motAleatoire = Math.floor(Math.random() * listeDeMotLevel1.length);
    let motADeviner = listeDeMotLevel1[motAleatoire];
    div1.innerHTML = "";
    for (let index = 0; index < motADeviner.length; index++) {
        div1.innerHTML += '_ '
    }
    user.addEventListener('keypress', (e) => {
        user.value = e.key;
        let resultat = false;
        // Remplace les underscores par la lettre saisie si elle est identique à une lettre du mot
        let underscores = div1.innerHTML.split(" ");
        for (let index = 0; index < motADeviner.length; index++) {
            if (user.value.toUpperCase() === motADeviner[index]) {
                underscores[index] = user.value.toUpperCase();
                resultat = true
            }
        }
        if (resultat === true) {
            phrase.textContent = 'YOU CAN DO IT!'
        } else {
            phrase.textContent = 'DON\'T GIVE UP!'
            essai++
            console.log(essai)
        }
        // Affiche le mot avec les underscores remplacés
        div1.innerHTML = underscores.join(" ");
        // tous les underscores ont été remplacés
        if (!div1.innerHTML.includes('_')) {
            phrase.textContent = ""
            final.textContent = 'AS DE LA GACHETTE!'; 
        }
        if (essai == 10) {
            final.innerHTML = `PERDU!<br><p>Le mot à trouver était ${motADeviner}</p>`  
        }
    })
    user.value = ""
    final.textContent = '';
    
})

level2.addEventListener('click', (e) => {
    lettre.style.visibility = "visible"
    let motAleatoire = Math.floor(Math.random() * listeDeMotLevel2.length);
    let motADeviner = listeDeMotLevel2[motAleatoire];
    div1.innerHTML = "";
    for (let index = 0; index < motADeviner.length; index++) {
        div1.innerHTML += "_ "
    }
    user.addEventListener('keypress', (e) => {
        user.value = e.key;
        let resultat = false
        // Remplace les underscores par la lettre saisie si elle est identique à une lettre du mot
        let underscores = div1.innerHTML.split(" ");
        for (let index = 0; index < motADeviner.length; index++) {
            if (user.value.toUpperCase() === motADeviner[index]) {
                underscores[index] = user.value.toUpperCase();
                resultat = true;
            }
        }
        if (resultat === true) {
            phrase.textContent = 'YOU CAN DO IT!'
        } else {
            phrase.textContent = 'DON\'T GIVE UP!'
            essai++
        }
        // Affiche le mot avec les underscores remplacés
        div1.innerHTML = underscores.join(" ")
        if (!div1.innerHTML.includes('_')) {
            phrase.textContent = " "
            final.textContent = 'AS DE LA GACHETTE!';
        }
        if (essai == 12) {
            final.innerHTML = `PERDU!<br><p>Le mot à trouver était ${motADeviner}</p>`
        }
    })
    user.value = ""
    final.textContent = '';
})
level3.addEventListener('click', (e) => {
    let motAleatoire = Math.floor(Math.random() * listeDeMotLevel3.length);
    let motADeviner = listeDeMotLevel3[motAleatoire];
    div1.innerHTML = "";
    for (let index = 0; index < motADeviner.length; index++) {
        div1.innerHTML += "_ "
    }
    lettre.style.visibility = "visible"
    user.addEventListener('keypress', (e) => {
        user.value = e.key;
        let resultat = false
        // Remplace les underscores par la lettre saisie si elle est identique à une lettre du mot
        let underscores = div1.innerHTML.split(" ");
        for (let index = 0; index < motADeviner.length; index++) {
            if (user.value.toUpperCase() === motADeviner[index]) {
                underscores[index] = user.value.toUpperCase();
                resultat = true
            }
        }
        if (resultat === true) {
            phrase.textContent = 'YOU CAN DO IT!'
        } else {
            phrase.textContent = 'DON\'T GIVE UP!'
            essai++
        }
        // Affiche le mot avec les underscores remplacés
        div1.innerHTML = underscores.join(" ");
        if (!div1.innerHTML.includes('_')) {
            phrase.textContent = " "
            final.textContent = 'AS DE LA GACHETTE!';
        }
        if (essai == 14) {
            final.innerHTML = `PERDU!<br><p>Le mot à trouver était ${motADeviner}</p>`
        }
    })
    user.value = ""
    final.textContent = '';
})




// <!-- la méthode split est utilisée pour découper les underscores du mot à deviner en un tableau, afin de pouvoir remplacer un underscore par la lettre saisie par l'utilisateur.

// Par exemple, si le mot à deviner est "HELLO" et que l'utilisateur a saisi la lettre "E", le tableau underscores contiendra ["_", "_", "E", "_", "_"]. L'index 2 du tableau est remplacé par la lettre "E", puis le tableau est converti en chaîne de caractères avec la méthode join et affiché dans la div div1. -->