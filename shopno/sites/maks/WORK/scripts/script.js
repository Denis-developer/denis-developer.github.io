function GOtask1()
{
    var string = document.task1.textfeld1.value;
    let array = string.split(' ');

    let max = array[0];
    var i = 0;
    for(i = 1; i < array.length; i++)
    {
        if(Math.abs(array[i]) > max)
        {
            max = array[i];
        }
    }

    document.task1.result.value = max;
}

function dayLeft(a, b)
{
    return Math.floor((a - b) / (864 * Math.pow(10, 5)));
}

function GOtask2()
{
    let now = new Date();
    let spring;
    let fall;

    if ((now.getMonth() > 2) || ((now.getMonth() == 2) && (now.getDate() > 22)))
    {
        spring = new Date((now.getFullYear() + 1), 2, 22);
    }
    else
    {
        spring = new Date(now.getFullYear(), 2, 22);
    }

    if ((now.getMonth() > 8) || ((now.getMonth() == 8) && (now.getDate() > 22)))
    {
        fall = new Date((now.getFullYear() + 1), 8, 22);
    }
    else
    {
        fall = new Date(now.getFullYear(), 8, 22);
    }
    
    document.task2.fall.value = dayLeft(fall, now);
    document.task2.spring.value = dayLeft(spring, now);   
}

function GOtask3()
{
    document.task3.text_1.value = "gagaga";
}

var slideIndex = 0;
var stopflag = false;

function GOtask4()
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) 
    {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    if(stopflag)
    {
         stopflag = false;
    }
    else
    {
        setTimeout(GOtask4, 1000);
    }
}
