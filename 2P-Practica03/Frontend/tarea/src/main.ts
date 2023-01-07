import './style.css'
import axios from 'axios'
import { Propina } from './interfaces/IPropina';
const httpAxios =  axios.create({
  baseURL:'http://localhost:3000',
})

const app = document.querySelector<HTMLDivElement>('#app')!
//#region mapa de elementos
const etiqueta = document.createElement("label")
etiqueta.textContent="ID"
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta);
app.appendChild(input);
app.innerHTML += `
<label for ="idCliente">ID Cliente</label><input id="idCliente"/>
<label for ="idMesero">ID Mesero</label><input id="idMesero"/>
<label for ="fecha">Fecha propina</label><input id="fecha"/>
<label for ="hora">Hora propina</label><input id="hora"/>
<label for ="valor">Valor</label><input id="valor"/>
<button id="new" >Nuevo</button>
<button id="save" >Guardar</button>
<button id="query" >Consultar</button>
<button id="prueba" >Prueba</button>
<div id="body"/>
`
const newb = document.querySelector<HTMLButtonElement>('#new')!
const save = document.querySelector<HTMLButtonElement>('#save')!
const query = document.querySelector<HTMLButtonElement>('#query')!
const prueba = document.querySelector<HTMLButtonElement>('#prueba')!

const id = document.querySelector<HTMLInputElement>('#id')!
const idCliente = document.querySelector<HTMLInputElement>('#idCliente')!
const idMesero = document.querySelector<HTMLInputElement>('#idMesero')!
const status = document.querySelector<HTMLInputElement>('#status')!
const fecha = document.querySelector<HTMLInputElement>('#fecha')!
const hora = document.querySelector<HTMLInputElement>('#hora')!
const valor = document.querySelector<HTMLInputElement>('#valor')!
const stock = document.querySelector<HTMLInputElement>('#stock')!
const body = document.querySelector<HTMLDivElement>('#body')!
//#endregion

prueba.addEventListener('click', async() =>{
  const respPropinas = await (await httpAxios.get('/propinas')).data;
  console.log(respPropinas);
})

newb.addEventListener('click',()=>{
  idCliente.value=""
  idMesero.value=""
  fecha.value=""
  hora.value=""
  valor.value=""
  id.value=""
})

query.addEventListener('click', async ()=>{
    const respPropinas = await (await httpAxios.get('/propinas')).data;

    const tabla = document.createElement("table")
    tabla.id="tabla"
    tabla.border="1"

    for(const propina of respPropinas){
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${propina._id}" >${propina._id}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${propina.fechaPropina}`
      const celda3= row.insertCell()
      celda3.innerHTML=`${propina.horaPropina}`
      const celda4= row.insertCell()
      celda4.innerHTML=`${propina.valorPropina}`
    }
    body.innerHTML=``
    body.appendChild(tabla)
    document.querySelectorAll('.boton').forEach((ele:Element)=>{
      ele.addEventListener('click', async ()=>{
          const idx= (ele as HTMLButtonElement).value;
          const propina:Propina =  await (await httpAxios.get<Propina>(`/propinas/:${idx}`)).data;
          idCliente.value=propina.idCliente;
          idMesero.value=propina.idMesero;
          fecha.value=propina.fechaPropina;
          hora.value=propina.horaPropina;
          valor.value=propina.valorPropina;
          id.value= propina._id!;
      })
    })
})

save.addEventListener('click',async ()=>{
  const body:Propina = {
    idCliente: String(idCliente.value),
    idMesero: String(idMesero.value),
    fechaPropina: String(fecha.value),
    horaPropina: String(hora.value),
    valorPropina: String(valor.value)
  }
  const {data} = await httpAxios.post<Propina>(`/propinas`, body)
  console.log(`La propina ${data._id} fue grabado con éxito`);
  /*
  if (id.value.trim().length>0){      
    const resp: Propina = await (await httpAxios.put<Propina>(`/propinas/${id.value}`, data)).data
    console.log(resp)
    console.log(`La propina ${resp._id} fue modificado con éxito`);
    return;
  }
  try {
    const resp = await (await httpAxios.post(`/propinas`, data)).data
    console.log(`La propina ${resp._id} fue grabado con éxito`);
  } 
  catch (error) {
    if ( axios.isAxiosError(error) ){
      console.log(error );
    }
  }*/
})
