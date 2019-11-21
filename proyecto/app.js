var xhr = new XMLHttpRequest();

xhr.open('GET','consulta.php');
xhr.onload= function(){
  if(xhr.status == 200){
    var json = JSON.parse(xhr.responseText);

    for(i in json){
      console.log(json[i].id +" " +json[i].nombre 
        +" "+ json[i].correo);
    }
  }else{
    console.log("Existe un error: ")+ xhr.status;
  }
}
xhr.send();


/*
LINK CHIDO PARA CONECTAR PHP Y JAVASCRIPT

https://www.youtube.com/watch?v=ev9wASpNN9A

LINK CHIDO PARA CONECTAR MYSQL Y PHP

https://www.youtube.com/watch?v=9glSpdwygdk

LINK CHIDO PARA HACER CONSULTAS DE PHP A MYSQL

https://www.youtube.com/watch?v=kqJ5zANScEU


*/