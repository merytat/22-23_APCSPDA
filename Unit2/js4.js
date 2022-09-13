/* author: Mery Tellez
modified: Sep 13 2022
 */


function changeRow(){
    //replacing the html content of the row "myRow"
    document.getElementById("myRow").innerHTML =
        "<td> new Col 1 </td> <td> new Col 2 </td> <td> new Col 3 </td>";
}

function addRow(){
    //ADD more html to my element
    //+= ADDS more to the original value instead of replacing it
    document.getElementById("myTable").innerHTML += "<tr>" +
        "<td>row 2 col 1</td> <td>row 2 col 2</td> <td>row 2 col 3</td> </tr>";
}