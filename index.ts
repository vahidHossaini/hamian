import HamianConfig from "./models/hamianConfig";
import HamianProfile from "./models/hamianProfile";
import Storage from './common/storage'
export default class Hamian
{
    config:HamianConfig;
    profile:HamianProfile;
    constructor(appId:string,serverUrl:string,botName:string)
    {
        this.config = new HamianConfig({appId,serverUrl,botName});
    }
    createPopup()
    { 
        var element=document.createElement('div');
        element.innerHTML=`
            <div id="hamianModal" class="hamain-modal">
            
            <!-- Modal content -->
            <div class="hamian-modal-content">
                <span class="hamian-Close">&times;</span>
                <div id="hamianContent" style="margin-top: 30px;">
                </div>
            </div> 
            
            </div>
        `;
        document.body.appendChild(element)
    }
    hide()
    {
        
        var modal_hamian = document.getElementById("hamianModal");
        modal_hamian.style.display = "none";  
    }
    show()
    {
        
        var modal_hamian = document.getElementById("hamianModal");
        modal_hamian.style.display = "block";  
    }
    getprofile()
    { 
        var profile:HamianProfile=Storage.load('profile');
        if(profile && profile.appId==this.config.appId)
        {
            this.profile=profile;
        }
        else
        {
            this.logout();
        }
    }
    getRandom()
    {
        return Math.floor(Math.random()*100000)
    }
    logout()
    {
        Storage.save('profile',null);
    }

}