const init= () =>{
    const over = document.querySelectorAll('.drop');
    const downMenu = document.querySelectorAll('.down');
    const nodatacategory = document.querySelectorAll('.shopdown li');
    const newarrbtn = document.querySelector('.newtext a');
    let downHeight = [];
    
    for (let i=0; i<downMenu.length; i++){
        downHeight[i] = downMenu[i].clientHeight;
    }
    
    over.forEach(function ( obj,idx ) {
        const down = obj.querySelector('.down');
        
        down.style.height = '0';

        obj.addEventListener('mouseover', function(){
            down.style.height= downHeight[idx] + "px";
            
            down.style.opacity ='1';
            // if(this === over[1]){
                //     down.style.height='300px'
                // }
            });
            obj.addEventListener('mouseout', function(){
                down.style.height = '0';
                down.style.opacity='0';
                
            });
        

        });
    nodatacategory.forEach(function(obj){
        obj.addEventListener('click',function(e){

            if(obj == nodatacategory[0]){
                alert('상품이 존재하지 않습니다.');
            }else if(obj == nodatacategory[3]){
                alert('상품이 존재하지 않습니다.');
            }else if(obj == nodatacategory[4]){
                alert('상품이 존재하지 않습니다.');
            }
        });
    });
    if(newarrbtn){
        newarrbtn.addEventListener('click', function(){
            alert('상품이 존재하지 않습니다.');
        });
    }
}
init();
