//COMPONENTES DEBEN SER NOMBRADOS POR PRIMERA LETRA EN MAYUSCULA
//VITE REQUIERE .JSX
//Un componente es una funcion

function Header(){ //Mismo nombre que en documento, requieres un return. Usando function declaration
    return (
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
            Seguimiento Pacientes {""}
            <span className= "text-indigo-600">Veterinaria</span>
        </h1>
    )
}

export default Header