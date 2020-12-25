import HamianConfig from "./models/hamianConfig";
import HamianProfile from "./models/hamianProfile";
import Storage from './common/storage'
import style from './common/style'
import Service from "./common/service";

export {HamianConfig,HamianProfile};

export default class Hamian
{
    config:HamianConfig;
    profile!:HamianProfile;
    constructor(appId:string,serverUrl:string,botName:string)
    {
        this.config = new HamianConfig({appId,serverUrl,botName});
        this.createPopup();
    }
    createPopup()
    { 
        var  hamianModal=document.getElementById('hamianModal')
        if(hamianModal)return;
        var styleEl:HTMLStyleElement;
        styleEl = document.createElement('style')
        styleEl.type = 'text/css'
        styleEl.appendChild(document.createTextNode(style))
        document.head.appendChild(styleEl)

        var element=document.createElement('div');
        element.innerHTML=`
        <div id="hamianModal" class="hamain-modal" style="z-index: 99999999;"> 
        <div class="hamian-modal-container">
            <div class="hamian-close" onclick="(()=>{var modal_hamian = document.getElementById('hamianModal');modal_hamian.style.display = 'none';})()"></div>
            
            <div class="hamian-modal-content" id="hamianContent"/>
        </div>
        </div> 
        `;
        document.body.appendChild(element)
    }
    hide()
    {
        
        var modal_hamian = document.getElementById("hamianModal");
        if(modal_hamian!=null)
            modal_hamian.style.display = "none";  
    }
    show()
    {
        
        var modal_hamian = document.getElementById("hamianModal");
        if(modal_hamian!=null)
            modal_hamian.style.display = "block";  
    }
    getprofile() 
    { 
        var profile:HamianProfile=Storage.load('profile');
        console.log('-----')
        if(profile)
        {
            this.profile=profile;
            return profile;
        }
        else
        {
            this.logout();
        }
        return null
         
    }
    getRandom()
    {
        return Math.floor(Math.random()*100000)
    }
    logout()
    {
        Storage.save('profile',null);
    }
    runTransaction(walletId,transaction)
    {
        return new Promise(async(res,rej)=>{ 
            var url=this.config.serverUrl+'api/transactionRequest';
            var data=await Service.post(url,{walletId,transaction})
            var link='tg://resolve?domain='+this.config.botName+'&start=1_'+this.config.appId+'_'+data.response.data; 
 
            url=this.config.serverUrl+ 'api/submitTransaction?appId='+this.config.appId+'&id='+data.response.data;
            Service.getData(url)
            .then((data:any)=>{
                this.hide(); 
                res(data)
            })
            .catch((exp:any)=>{
                rej(exp)
            })
            var content = document.getElementById('hamianContent')
            if(content)
            content.innerHTML=`
            <div class="hamian-logo"></div>
            <div class="mamian-title">Confirm</div>
            <div class="mamian-description">Check the transaction data which will send to your telegram</div>
            <button class="hamian-open-button" onclick="window.open('` + link + `')">
                Send Transaction For Confirmation
            </button> 
            <div id="timer">
            </div>
            `;
            this.show();
        })

    }
    login()
    {
        return new Promise((res,rej)=>{
            var profile = Storage.load('profile');
            if(profile)
            {
                res(profile);
                return;
            }
            var random=this.getRandom(); 
            var link='tg://resolve?domain='+this.config.botName+'&start=0_'+this.config.appId+'_'+random;
            var url=this.config.serverUrl+ 'api/loginWithToken?appId='+this.config.appId+'&random='+random;
            Service.getData(url)
            .then((data:any)=>{
                this.hide();
                
                Storage.save('profile', data.response.data )
                res(data)
            })
            .catch((exp:any)=>{
                rej(exp)
            })
            var content = document.getElementById('hamianContent')
            if(content)
                content.innerHTML=`
                <div class="hamian-logo"></div>
                <div class="mamian-title">Login</div>
                <button class="hamian-open-button" onclick="window.open('` + link + `')">
                    Open Hamian Bot In Telegram
                </button> 
                <div id="timer">
                </div>
                `;
            this.show();
        })
    }
}