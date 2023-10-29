export function pabloinjector(data) {
    let items = "";
  
    data.map((reloj) => {
      let template = `
      <div class="wrappercard">


      <img src="${reloj.img}"     alt='imagen' class="cardimg"/>

          <div class="info">

    <div class="marca">
      <h1 >Marca: ${reloj.marca}</h1> 
    </div>

  <div>
      <h2 class="wrapperinfo">Precio: ${reloj.precio}</h2>
      <h2 class="wrapperinfo">Modelo: ${reloj.modelo}</h2>
  </div>

  <div>    
      <h2 class="wrapperinfo">Tipo: ${reloj.tipo}</h2>
      <h2 class="wrapperinfo">Color:${reloj.color} </h2>
  </div>
</div>
</div>
              `;
  
      items += template;
    });
  
    return items;
  }
    

