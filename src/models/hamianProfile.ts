export default class HamianProfile
{
  firstName:string='';
  lastName:string='';
  phone:string='';
  wallet:any[]=[];
  constructor(data:any={}){
    Object.assign(this,data);
  }  
}