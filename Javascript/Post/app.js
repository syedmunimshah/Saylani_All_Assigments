var backgroundImage="";
function post() {
    var Title = document.getElementById("Title");
    Title = Title.value;

    var describe = document.getElementById("describe");
    describe = describe.value;

    
    if (Title.trim() && describe.trim()) {


        var postdis = document.getElementById("postdis");

        postdis.innerHTML += `
  


  <div class="card mb-5" style="background-image: url(${backgroundImage});">
  <div class="card-header">
    @Post
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${Title}</p>
      <footer class="blockquote-footer">${describe}</footer>
    </blockquote>
  </div>
</div>

    `
    document.getElementById("Title").value="";
    document.getElementById("describe").value="";

    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Enter Title and Describtion!',

        })
    }


}

function SelectImage(Src){
    backgroundImage=Src;

    var bgimage=document.getElementsByClassName("bg-image");
    for(var i=0; i<bgimage.length; i++){
     bgimage[i].className="bg-image";
    }
    event.target.className+=" img-Select"
  
   

}