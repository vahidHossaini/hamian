export default class Service
{
  static getData(url:string):Promise<any>
  {
    return new Promise((res,rej)=>{
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            res(JSON.parse(this.responseText)) 
        }
        if (this.readyState == 4 && this.status != 200) {
          var err={}
          if(this.responseText)
            err=JSON.parse(this.responseText);
            rej(err); 
        }
      };
      xhttp.open("GET",url, true);
      xhttp.send();
    })
  }
  static post(url:string,body:any):Promise<any>
  {
    return new Promise((res,rej)=>{
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            res(JSON.parse(this.responseText)) 
        }
        if (this.readyState == 4 && this.status != 200) {
          var err={}
          if(this.responseText)
            err=JSON.parse(this.responseText);
            rej(err); 
        }
      };
      xhttp.open("POST",url, true);
      xhttp.send(JSON.stringify(body));
    })
  }
}