let index = 0;

function slideshow() 
{
    let x = document.getElementsByClassName("facilitiespics");

    for (let i = 0; i < x.length; i++) 
    {
        x[i].style.display = "none";  
    }

    index++;

    if (index > x.length) 
    {
        index = 1
    } 

    x[index-1].style.display = "block";  

    setTimeout(slideshow, 2000);
}