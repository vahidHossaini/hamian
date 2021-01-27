export default class HamianConfig
{
  appId:string ='';
  serverUrl:string ='';
  botName:string ='';
  useChainId:boolean=false;
  appTitle:string ='';
  constructor(data:any={}){
    Object.assign(this,data);
    if(!this.serverUrl)
      this.serverUrl='http://hamian.areaxapp.com/'
    if(!this.botName)
      this.botName='hamianwalletbot'
  }
}