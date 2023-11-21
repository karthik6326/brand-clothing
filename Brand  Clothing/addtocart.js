const product = [
    {
        id: 0,
        image: 'shirt1.png',
        title: 'Formal Shirt',
        price: 1099,
    },
    {
        id: 1,
        image: 'shirt2.png',
        title: 'shirt2',
        price: 3999,
    },
    {
        id:2,
        image:'shirt3.png',
        title: 'shirt3',
        price: 1099,
    },
    
    {
        id: 3,
        image: 'shirt4.png',
        title: 'shirt2',
        price: 2999,
    },
    
    {
        id: 4,
        image: 'shirt5.png',
        title: 'shirt2',
        price: 2100,
    },
    
    {
        id: 5,
        image: 'shirt6.png',
        title: 'shirt2',
        price: 1200,
    },
    {
        id: 6,
        image: 'shirt7.png',
        title: 'shirt2',
        price: 999,
    },
    {
        id: 7,
        image: 'shirt8.png',
        title: 'shirt2',
        price: 1049,
    },
    {
        id: 8,
        image: 'shirt9.png',
        title: 'shirt2',
        price: 1999,
    },
    
    {
        id: 9,
        image: 'blazer.png',
        title: 'shirt2',
        price: 2999,
    },
    
    {
        id: 10,
        image: 'chudi.png',
        title: 'shirt2',
        price: 1049,
    },
    
    {
        id: 11,
        image: 'gowns.png',
        title: 'shirt2',
        price: 4999,
    },
    
    {
        id: 12,
        image: 'half-saree.png',
        title: 'shirt2',
        price: 3899,
    },
    
    {
        id:13,
        image: 'kerala.png',
        title: 'shirt2',
        price: 1999,
    },
    
    {
        id: 14,
        image: 'wedding.png',
        title: 'shirt2',
        price: 24999,
    },
    
    {
        id: 15,
        image: 'skirt.png',
        title: 'shirt2',
        price: 1299,
    },
    
    {
        id: 16,
        image: 'slippers.png',
        title: 'shirt2',
        price: 1099,
    },

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
            <div class='img-box'>
            <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>` +
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join(' ')

    var cart =[];

    function addtocart(a){

        cart.push({...categories[a]});
        displaycart();
    }

    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }
    function displaycart(a){
        let j = 0, total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$" + 0 + ".00";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var{image, title, price} = items;
                total=total+price;
                document.getElementById("total").innerHTML = "$" + total +".00";
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                    <img class='rowing' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>` +
                    "<i class='fa-solid fa-trash'  onclick='delElement("+(j++)+")'></i></div>"
                );
            }).join(' ');
        }
    }