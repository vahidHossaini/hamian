export default class HamianConfig
{
  appId:string ='';
  serverUrl:string ='';
  botName:string ='';
  constructor(data:any={}){
    Object.assign(this,data);
  }
}