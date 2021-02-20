
//AJAX con el objeto XMLHttpRequest a un archivo en formato JSON Local
(function(d){
    let $fragmento = d.createDocumentFragment(),
    xhr = new XMLHttpRequest(),
    $listaOrdenada = d.getElementById("lista-uno");

    xhr.open("GET","json/objetos.json");
    xhr.send();

    xhr.addEventListener("readystatechange",function(e){
        if(!(xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300)) return;
        
        let datos = JSON.parse(xhr.responseText).personas;
        datos.forEach((elem) => {
            let $li = d.createElement("li");
            $li.innerHTML = `${elem.id}, ${elem.nombres}, ${elem.apellidos}, ${elem.edad}, ${elem.estatura}, ${elem.estCivil}, ${elem.discapacidades}`;
            $fragmento.appendChild($li);
        });
        $listaOrdenada.appendChild($fragmento);
    });
})(document);

//AJAX con el objeto XMLHttpRequest a la API JSONPlaceholder
(function(d){
    
    let $fragmento = d.createDocumentFragment(),
        xhr = new XMLHttpRequest(), datos,
        $listaOrdenada = d.getElementById("lista-dos");

    xhr.open("GET" , "https://jsonplaceholder.typicode.com/users");
    xhr.send();

    xhr.addEventListener("readystatechange",(e) => {
        if(!(xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300)) return;

        datos = JSON.parse(xhr.responseText);
        
        datos.forEach((elem) => {
            let $li =  d.createElement("li");
            $li.innerHTML =`${elem.id} , ${elem.name} , ${elem.email}`;
            $fragmento.appendChild($li);
        });
        $listaOrdenada.appendChild($fragmento);
    });
    
})(document);

//AJAX con la API Fetch a un archivo en formato JSON Local (Utilizando promesas)
(function(d){
    let $fragmento = d.createDocumentFragment(),
    $lista = d.getElementById("lista-tres");
    
    fetch("json/objetos.json")
    .then((result) => {
        console.log(result);
        if(result.ok){
            return(result.json());
        }else{
            Promise.reject(result);            
        }
    })
    .then((json) => {
        console.log(json);
        
        let vecPersonas = json.personas;
        
        vecPersonas.forEach((elem) => {
            let $li = d.createElement("li");
            $li.innerHTML = `${elem.id}, ${elem.nombres}, ${elem.apellidos}, ${elem.edad}, ${elem.estatura}, ${elem.estCivil}, ${elem.discapacidades}`;
            $fragmento.appendChild($li);
        });
        $lista.appendChild($fragmento);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Este mensaje siempre se ejecutará");
    });
})(document);

//AJAX con la API Fetch a un archivo en formato JSON a la API JSONPlaceholder (Utiliando promesas)
(function(d){
    let $fragmento = d.createDocumentFragment(),
        $lista = d.getElementById("lista-cuatro");
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((result) => {
        console.log(result);
        if(result.ok){
            return(result.json());
        }else{
            Promise.reject(result);
        }
    })
    .then((json) => {
        console.log(json);
        let vecPersonas = json;
        vecPersonas.forEach((elem) => {
            let $li = d.createElement("li");
            $li.innerHTML = `${elem.id}, ${elem.name}, ${elem.username}, ${elem.email}`;
            $fragmento.appendChild($li);
        });
        $lista.appendChild($fragmento);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Este mensaje siempre se ejecutará");
    });
})(document);

//AJAX con la API Fetch a un archivo en formato JSON Local (Utilizando Async - await)
(function(d){
    let $fragmento = d.createDocumentFragment(),
        $listaOrdenada = d.getElementById("lista-cinco");

    async function getData(){
        try{
            let respuesta = await fetch("json/objetos.json");
            let datos = await respuesta.json();

            let personas = datos.personas;
            personas.forEach((elem) => {
                let $li = d.createElement("li");
                $li.innerHTML = `${elem.id}, ${elem.nombres}, ${elem.apellidos}, ${elem.edad}, ${elem.estatura}, ${elem.estCivil}, ${elem.discapacidades}`;
                $fragmento.appendChild($li);
            });
            $listaOrdenada.appendChild($fragmento);
        }catch(err){
            console.log("Error con la petición");
        }finally{
            console.log("Esto siempre se ejecutará");
        }
    }
    getData();
})(document);

//AJAX con la API Fetch a un archivo en formato JSON a la API JSONPlaceholder(Utilizando Async - await)
(function(d){
    let $fragmento = d.createDocumentFragment(),
        $listaOrdenada = d.getElementById("lista-seis");

    async function getData(){
        try{
            let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
            let personas = await respuesta.json();

            personas.forEach((elem) => {
                let $li = d.createElement("li");
                $li.innerHTML = `${elem.id}, ${elem.name}, ${elem.username}, ${elem.email}`;
                $fragmento.appendChild($li);
            });
            $listaOrdenada.appendChild($fragmento);
        }catch(err){
            console.log("Error con la petición");
        }finally{
            console.log("Esto siempre se ejecutará");
        }
    }
    getData();
})(document);

//AJAX con la librería Axios a un archivo en formato JSON Local (Utilizando promesas)
(function(d){
    let $fragmento = d.createDocumentFragment(),
        $listaOrdenada = d.getElementById("lista-siete");

    axios.get("json/objetos.json")
    .then((res) => {
        let personas = res.data.personas;

        personas.forEach((elem)=> {
            let $li = d.createElement("li");
            $li.innerHTML = `${elem.id}, ${elem.nombres}, ${elem.apellidos}, ${elem.edad}, ${elem.estatura}, ${elem.estCivil}, ${elem.discapacidades}`;
            $fragmento.appendChild($li);
        })
        $listaOrdenada.appendChild($fragmento);
    })
    .catch((err) => {
        console.log(err.response);
    })
    .finally(() => {
        console.log("esto siempre se ejecutará");
    });
})(document);

//AJAX con la librerìa Axios a un archivo en formato JSON a la API JSONPlaceholder(Utilizando promesas)
(function(d){
    let $fragmento = d.createDocumentFragment(),
    $listaOrdenada = d.getElementById("lista-ocho");
    
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        let personas = res.data;
        
        personas.forEach((elem)=> {
            let $li = d.createElement("li");
            $li.innerHTML = `${elem.id}, ${elem.name}, ${elem.username}, ${elem.email}`;
            $fragmento.appendChild($li);
        })
        $listaOrdenada.appendChild($fragmento);
    })
    .catch((err) => {
        console.log(err.response);
    })
    .finally(() => {
        console.log("esto siempre se ejecutará");
    })
})(document);

//AJAX con la librería Axios a un archivo en formato JSON Local (Utilizando Async - await)
(function(d){
    let $fragmento = d.createDocumentFragment(),
        $listaOrdenada = d.getElementById("lista-nueve");

    async function getData(){
        try{
            let respuesta = await axios.get("json/objetos.json");
            let personas = await respuesta.data.personas;

            personas.forEach((elem) => {
                let $li = d.createElement("li");
                $li.innerHTML = `${elem.id}, ${elem.nombres}, ${elem.apellidos}, ${elem.edad}, ${elem.estatura}, ${elem.estCivil}, ${elem.discapacidades}`;
                $fragmento.appendChild($li);
            });
            $listaOrdenada.appendChild($fragmento);
        }catch(err){
            console.log("Error con la petición");
        }finally{
            console.log("Esto siempre se ejecutará");
        }
    }
    getData();
})(document);

//AJAX con la librería Axios a un archivo en formato JSON a la API JSONPlaceholder(Utilizando Async - await)
(function(d){
    let $fragmento = d.createDocumentFragment(),
        $listaOrdenada = d.getElementById("lista-diez");

    async function getData(){
        try{
            let respuesta = await axios.get("https://jsonplaceholder.typicode.com/users");
            let personas = await respuesta.data;

            personas.forEach((elem) => {
                let $li = d.createElement("li");
                $li.innerHTML = `${elem.id}, ${elem.name}, ${elem.username}, ${elem.email}`;
                $fragmento.appendChild($li);
            });
            $listaOrdenada.appendChild($fragmento);
        }catch(err){
            console.log("Error con la petición");
        }finally{
            console.log("Esto siempre se ejecutará");
        }
    }
    getData();
})(document);


