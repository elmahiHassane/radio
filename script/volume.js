class volume{
    constructor(){
        this.file_audio=document.getElementById("file_audio");
        var volume=document.getElementById("volume");
        this.file_audio.volume=50/100;
        volume.addEventListener("change",()=>{
            this.file_audio.volume=volume.value / 100 ;
        });
    }
}
onload=new volume();