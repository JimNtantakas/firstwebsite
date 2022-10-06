let count=0;

function ADDER()
{
count++;
document.getElementById("count-el").innerText="numbers:"+count;
};

function REDUCER()
{
count--;
document.getElementById("count-el").innerText="numbers:"+count;
}

function RESET()
{
count=0;
document.getElementById("count-el").innerText="numbers:"+count;
}