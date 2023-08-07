export async function obtenerClientes(){

    const respuesta = await fetch(import.meta.env.VITE_API_URL)     //Obtenemos la URL mediante la variable guardada en nuestro .env
    const resultado = await respuesta.json()
    return resultado

}

export async function obtenerCliente(id){

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)     //Obtenemos la URL mediante la variable guardada en nuestro .env
    const resultado = await respuesta.json()
    return resultado

}

export async function agregarCliente(datos){
    try{
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json();
    }catch(error){
        console.log(error)
    }
}

export async function actualizarCliente(id, datos){
    try{
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {        //Pasamos el id por la url
            method: 'PUT',      //Metodo para Actualizar
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await respuesta.json();
    }catch(error){
        console.log(error)
    }
}

export async function eliminarCliente(id){
    try{
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {        //Pasamos el id por la url
            method: 'DELETE',      //Metodo para Actualizar
        })
        return await respuesta.json();
    }catch(error){
        console.log(error)
    }
}