const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./imag/Pika.jpg");
        }
        else {
            return res.json();
        }
    }).then((data) => {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokenombre = data.species.name; 
            let poketipo =data.types[0].type.name;
            let pokemov = data.moves[0].move.name;     
            let pokehp = data.stats[0].base_stat;
            let pokeataque =data.stats[1].base_stat;
            let pokedefensa =data.stats[2].base_stat;

            const Name = document.getElementById("nombre");
            Name.innerHTML = (pokenombre);
            
                        
            const type = document.getElementById("tipo")
            type.innerHTML = (poketipo);
            
            const mov = document.getElementById("mov");
            mov.innerHTML=(pokemov);
            const HP = document.getElementById("hp");
            HP.innerHTML=(pokehp);
                               
            const attack = document.getElementById("ataque");
            attack.innerHTML=(pokeataque);
            const defending = document.getElementById("defensa");
            defending.innerHTML=(pokedefensa);
                        
        
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}


