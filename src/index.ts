import HamianConfig from "./models/hamianConfig";
import HamianProfile from "./models/hamianProfile";
import Storage from './common/storage'
import style from './common/style'
import Service from "./common/service";
import QRCode from 'qrcode'
export {HamianConfig,HamianProfile};

export default class Hamian
{
    config:HamianConfig;
    profile!:HamianProfile;
    constructor(appId:string,serverUrl:string,botName:string,useChainId:boolean,appTitle:string)
    {
        this.config = new HamianConfig({appId,serverUrl,botName,useChainId,appTitle});
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
            modal_hamian.style.display = "flex";  
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
            var profile=this.getprofile() 
            if(!profile)return;
            var data=await Service.post(url,{walletId,transaction,token:profile.token,appTitle:this.config.appTitle })
            var actionType='1';
            if(this.config.useChainId)
            {
                actionType='3'
            }
            var link='tg://resolve?domain='+this.config.botName+'&start='+actionType+'_'+this.config.appId+'_'+data.response.data+'_'+this.config.appTitle;; 
 
            url=this.config.serverUrl+ 'api/submitTransaction?appId='+this.config.appId+'&id='+data.response.data;
            Service.getData(url)
            .then((data:any)=>{
                this.hide(); 
                // res(data)
                if(data.response)
                { 
                    res(data)
                }
                else
                {
                    rej({message:data.error.message})
                }
            })
            .catch((exp:any)=>{
                this.hide(); 
                var message='Check your internet connection';
                if(exp.message)
                    message=exp.message
                rej({message})
            })
            var qr = await QRCode.toDataURL(link)
            var content = document.getElementById('hamianContent')
            if(content)
            content.innerHTML=`
            <div class="hamian-logo"></div>
            <div class="mamian-title">Confirm</div>
            <img src="`+qr+`" style="width: 100%;" />
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
        return new Promise(async(res,rej)=>{
            var profile = Storage.load('profile');
            if(profile)
            {
                res(profile);
                return;
            }
            var random=this.getRandom(); 
            
            var actionType='0';
            if(this.config.useChainId)
            {
                actionType='2'
            }
            var link='tg://resolve?domain='+this.config.botName+'&start='+actionType+'_'+this.config.appId+'_'+random+'_'+this.config.appTitle;
            var url=this.config.serverUrl+ 'api/loginWithToken?appId='+this.config.appId+'&random='+random;
            Service.getData(url)
            .then((data:any)=>{
                this.hide();
                if(data.response)
                {
                    Storage.save('profile', data.response.data )
                    res(data)
                }
                else
                {
                    rej({message:data.error.message})
                }
            })
            .catch((exp:any)=>{
                this.hide(); 
                var message='Check your internet connection';
                if(exp.message)
                    message=exp.message
                rej({message})
            })
            var qr = await QRCode.toDataURL(link)
            // .then(url => {
            //     console.log('link is', url)
            // })
            // .catch(err => {
            //     console.error('error link is',err)
            // })
            var content = document.getElementById('hamianContent')
            if(content)
                content.innerHTML=`
                <div class="hamian-logo"></div>
                <div class="mamian-title">Login</div>
                <img src="`+qr+`" style="width: 100%;" />
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