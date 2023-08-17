
var Bookmarkname = document.getElementById("BookmarkName");
var Bookmarksite = document.getElementById("Bookmarksite");
var Bookmarkcontainer=[];




function Bookmarksubmit(){

    if (validationinput()){
        var product = {
            name: BookmarkName.value,
            site:Bookmarksite.value,

        }
        Bookmarkcontainer.push(product)
        displaydata()
        cleardata()
    }
    else{
        window.alert("required field")
    }


 
}

   


function cleardata(){
    BookmarkName.value="",
    Bookmarksite.value=""
}


function displaydata(){
    temp="";
    for (var i = 0; i < Bookmarkcontainer.length;i++){
        temp+=`
        
        
         <tr>
            <td class="mr-5">${Bookmarkcontainer[i].name}</td>
            <td>
                <button class="btn btn-info">Visit</button>
            </td>
            <td>
                <button class="btn btn-danger" onclick="deletedata(${i})">delete</button>
            </td>
        </tr>
    
        
        
        `
    }
    document.getElementById("displaydata").innerHTML=temp
}





function validationinput() {

    if ( BookmarkName.value!=""&&Bookmarksite.value!=""){
        return true
    }
    else{
        return false
    }
    
}
 
function deletedata(index){
    Bookmarkcontainer.splice(index,1)
    displaydata( )
}