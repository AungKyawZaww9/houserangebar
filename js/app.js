const range = document.getElementById('range');
// console.log(range);

const house1 = document.querySelector('.house1');
// console.log(house1);

const house2 = document.querySelector('.house2');
// console.log(house2);

const house3 = document.querySelector('.house3');
// console.log(house3);

const price1 = document.getElementById('price1');
// console.log(price1);

const buy = document.getElementById('buy');
// console.log(buy);

const headdollor = document.getElementById('headdollor');
// console.log(headdollor)

const price = document.querySelector('.price');
// console.log(price);

range.addEventListener('input',(e)=>{
    // console.log("Hello");

    const value = +e.target.value * 10;
    // console.log(value);

    if(value === 20){
        console.log("grate");
        house1.style.display = "block";
        house2.style.display = "none";
        price.style.color = "yellow";

        // if(value === 500){
        //     house1.style.display = "none";
        //     // console.log("another one");
        // }

    }else if(value === 530){
        // console.log("good");
        house2.style.display = "block";
        house1.style.display = "none";
        house3.style.display = "none";
        price.style.color = "#ff6600";


    }else if(value === 1000){
        // console.log("no");
        house3.style.display = "block";
        house2.style.display = "none";
        price.style.color = "red";
    }

    // const rangewidth = getComputedStyle(e.target).getPropertyValue('width');
    // console.log(rangewidth);



    price1.innerText = `$${value}`;

    buy.addEventListener('click',(e)=>{
        // console.log("hello");
        // console.log(e.target);
        // console.log(value);
        headdollor.innerText = `$${value}`;
        headdollor.style.color = "red";
    })

});