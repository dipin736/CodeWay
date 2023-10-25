let string=''
let buttons=document.querySelectorAll('.Button')

Array.from(buttons).forEach((Button)=>{
    Button.addEventListener('click',(e)=>{
            if(e.target.innerHTML == '='){
            string=eval(string);    
            document.querySelector('input').value=string

    }
    else if(e.target.innerHTML == 'C'){
            string=''   
            document.querySelector('input').value=string
    
    }
    else
    {
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string
    }

    })   

})