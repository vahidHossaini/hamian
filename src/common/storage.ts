export default class Storage
{
  static load(name:string):any
  {
    var data = window.localStorage.getItem(name);
    if(data)
    {
      return JSON.parse(data);
    }
    return null;
  }
  static save(name:string,data:any)
  {
    if(!data)
    {
      window.localStorage.removeItem(name);
    }
    else
    {
      window.localStorage.setItem(name,JSON.stringify(data)); 
    }
  }
}