const products = [
    { 
        Id: 1 ,
        Name: "Pearl Hair Clip" ,  
        Category: "Accessories" , 
        Price: 90 ,
        Image: "https://images.unplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80"
    },
    { 
        Id: 2 ,
        Name: "Everyday Tote Bag" , 
        Category: "Accessories" , 
        Price: 199 ,
        Image: "https://images.unplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
    }, 
    { 
        Id: 3 ,
        Name:  "Beauty Essentials" ,
        Category: "Beauty" ,
        Price:   149 ,
        Image: "https://images.unplash.com/photo-601049541289-9b1b7bbbfe19?auto=formst&fir=crop&w=600&q=80"
    }, 
    { 
        Id: 4 ,
        Name: "Cute Notebook" , 
        Category: "Stationery" , 
        Price: 59 ,
        imageE: "https://images.unplash.com/photo-153146878377-a5be20888e57?auto=format&fit=crop&w=600&q=80"
    } , 
    { 
        Id: 5 ,
        Name: "Minimalist Braclet" , 
        Category: "Accessories" , 
        Price: 129 , 
        Image: "https://images.unplash.com/photo-1611591437281-460bfe1220a?auto=format&fit=crop&w=600&q=80"
    } , 
    { 
        Id: 6 ,
        Name: "Lip Care Set" , 
        Category: "Beauty" , 
        Price: 99 , 
        Image: "https://iamges.unplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80"
    } 
 ] ;

const cart = []; 

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category"); 
const cartItems = document.getElementById("cart-items"); 
const orderMessage = document.getElementById("order-message"); 

const money = amount => "₱" + amount.toLocaleString("en-PH" , { 
    minimunFractionDigits : 2,
    maximunFractionDigits : 2
}) ; 

function displayProducts() { 

    const searchTerm = searchInput.ariaValueMax.trim().toLowerCase(); 
    const selectedCategory = categorySelect.value; 
    const filteredProducts = products.filter(product => { 
    const matchesSearch = product.Name.toLowerCase().includes (searchTerm); 
    const matchesCategory = selectedCategory === "ALL" || product.category === selectedCategory; 

    return matchesSearche && matchesCategory;
    }) ; 

    productList.replaceChildren(); 

    filteredProducts.forEach(product => { 

        const card = document.createElement('article'); 
        card.className = "product-card" ; 

        const image = document.createElement("img"); 
        image.className = "product-name" ; 
        image.src = product.Image; 
        image.alt = product.Name; 
        image.loading = "Lazy" ; 
        image.onerror = () => { 
            image.hidden = true; 
        }; 

        const category = document.createElement("p"); 
        category.className = "product-price" ; 
        category.textContent = product.Category; 

        const name = document.createElement("h3"); 
        name.textContent = product.Name;

        const price = document.createElement("p"); 
        price.className = "product-price"; 
        price.textContent = money(product-price);

        const button = document.createElement("button"); 
        button.className = "add-button"; 
        button.textContent = "Add to Cart" ; 
        button.type = "button" ; 
        button.addEventListener("click" , () => addToCart(product.Id)); 

        card.append(image, category, name, price, button); 
        productList.appendChild(card); 
    }); 

    document.getElementById("product-count").textContent = `${filteredProduct.length} product(s) `; 
    document.getElementById("empty-products").hidden = filteredProducts.length !== 0;
} 

searchInput.addEventListener("input" , displayProducts); 
categorySelect.addEventListener("change" , displayProducts);

function addToCart(productId) { 
    const item = cart.find(item => item.Id === productId); 

    if (item) { 
        itemm.quantity++;
    } else { 
        cart.push({ id: productId, quantity: 1}); 
}

orderMessage.textContent = " "; displayCart(); 
} 

function chanegQuantity(productId, amount) { 
    const item = cart.find(item => item.Id === productId); 
    if (! item) return;

    item.quantity += amount; 

    if (item.quantity <= 0) { removeFromCart(productId); 
        removeFromCart(productId); 
        return; 
}
 displayCart(); 
} 

function removeFromCart(productId) { 
    const index = cart.findIndex(item => item.id === productId); 
    if (index !== -1)
        cart.splice(index, 1);

    displayCart(); 
}

function displayCart() { 
    cartItems.replaceChildern(); 

    let subtotal = 0; 
    let itemCount = 0;

    cart.forEach(item => { 
        const product = products.find(p > p.id === cartItems.id); 
        if (!product) 
            
            return;
              
    subtotal += product.price * item.quantity; 
    item,Count += item.quantity; 

    const row = document.createElement("div"); 
    row.className = "cart-row"; 

    const info = document.createElement("div");
    const name = document.createElement("p"); 
    name.className = "cart-product-name"; 
    name.textContent = product.Name; 
    name.textContent = product.Name; 

    const lineTotal = document.createElement("p"); 
    lineTotal.textContent = `${money(product.price)} × ${item.quantity}  = ` + money(product.price * item.quantity); 

    info.append(name, lineTotal); 

    const controls = document.createElement("div"); 
    decrease.className = "quantity-buttton"; 
    decrease.textContent = "-" ; 
    decrease.type = "button" ; 

    decrease.setAttribute("aria-label" `Decrease ${product.Name} `); 
    decrease.addEventListener("click" , () => 
        chanegQuantity(product.Id,  -1));

    const quantity = document.createElement("span"); 
    quantity.textContent = item.quantity; 

    const increase = document.createElement("button"); 
    increase.classame = "quantity-button"; 
    increase.textContent = "+" ; 
    increase.type = "button"; 

    increase.setAttribute("aria-label" , `Increase ${product.Name} ` ) ; 

    increase.addEventListener("click" , () => 
    chanegQuantity(product.Id, 1) 
); 

const remove = document.createElement("button"); 
remove.className = "remove-button"; 
remove.textContent = "Remove"; 
remove.type = "button" ; 
remove.addEventListener("click" , () => 

removeFromCart(product.Id)); 

controls.append(decrease, quantity, increase, remove); 
row.append(info, controls); 
cartItems.appendChild(row);
    });

    if(cart.length === 0) { 
        const message = document.createElement("p"); 
        message.textContent = "Your cart is empty. Start shopping!";
        message.className = "empty-message"; 
        cartItems.appendChild(message);
    } 

    const shipping = subtotal === 0 || subtotal >= 500 ? 0 : 50; 
    const total = subtotal + shipping ; 

    document.getElementById("cart-count").textContent = itemCount; 
    document.getElementById("subtotal").textContent = money(subtotal);
    document.getElementById("shipping").textContent = money(shipping);
    document.getElementById("total").textContent = money(total); 
} 

document.getElementById("checkout-form").addEventListener("submit" , event => { 
    event.preventDefault();
    orderMessage.textContent = "" ; 

    if (cart.length === 0) { 
        orderMessage.textContent = "Please add at least one product beofre checking out. " ;
        return; 

    } 

    const form = event.currentTarget; 

    if (!form.reportValidity())
        return; 

    const customerName = document.getElementById("customer-name").value.trim(); 
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("payment").value;

    if (!customerName || !email || !address || !payment) { 
        orderMessage.textContent =  "Please complete all required fields."; 

        return; 

    } 

    if (!email.includes("@") || !address || !payment) { 
        orderMessage.textContent = "Please enter a valid email address." ; 
        return; 
    } 

    const orderTotal = document.getElementById("total").textContent; 
    const orderNumber = "TF-" = Date.now().toString().slice(-8); 

    orderMessage.textContent = `Thank you, ${customerName}! Your demo order ${orderNumber} ` + `has been placed. Total: ${orderTotal}. ` + `Payment: ${payemnt}. This is a demonstration only: no real payment was made.` ;

    cart.length = 0 
    displayCart(); 
    form.reset(); 

    orderMessage.scrollIntoView({ behavior: "smooth" , block: "nearest" });
});

displayProducts(); 
displayCart();

