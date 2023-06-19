let string = "";
let buttons = document.querySelectorAll(".btn");
console.log('button array',buttons);
Array.from(buttons).forEach(function(button){
    console.log(button);
    button.addEventListener('click' , function(e){
       try{
        if(e.target.innerHTML === '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML === 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML === '+/-'){
            if(string > 0){
                string = '-' + string;
                document.querySelector('input').value = string;
            }
            else{
                string = Math.abs(string);
                document.querySelector('input').value = string;
            }
       }
       else{
        string += e.target.innerHTML;
        document.querySelector('input').value = string;
    }
    }
    catch(error){
        string = "Invalid Input";   
        document.querySelector('input').value = string;
    } 
    })
})