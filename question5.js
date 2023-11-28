//Q5. Create and Invatory System in javaScript to manage products using prototypes.
//Implement a product constructor function that defines the property of a product such as name,
//category,price and stock. Develop an Inventory constructor function that initilazes an
//Empty invetary array. Extend the Investorty prototype with with a method addProduct
//that adds a valid Product object to the invetory and lags a confiramtion message
//Additionally, Impelment a method delete product that removes a Product from the invetory 
//by names and logs wheather the deletion was succesfull.


function Product(name,category,price,stock){
     this.name=name;
     this.category=category;
     this.price=price;
     this.stock=stock;
}

function Invatory(){
     this.product=[];
}

Invatory.prototype.addProduct=function(product){
     if(product instanceof Product){
          this.product.push(product);
          console.log(`Add Product ${product.name} to the Inventary`);
     }else{
          console.log(`Invalid product! Please provide a Valid Product`);
     }
}


Invatory.prototype.deleteProduct=function(productName){
     const index=this.product.findIndex(product => product.name === productName);

     if(index!== -1){
          this.product.splice(index,1);
          console.log(`Delete ${productName} from the invetory`);
     }else{
          console.log(`${productName} not found in the Inventory`);
     }
}

const inventory=new Invatory();

const product1=new Product('Laptop', 'Electronics', 700,800);
const product2=new Product('Books', 'Study', 300,289);

inventory.addProduct(product1);   //Add Product Laptop to the Inventary
inventory.addProduct(product2);  //Add Product Books to the Inventary


inventory.deleteProduct('Laptop');   //Delete laptop from the Invetory
inventory.addProduct(product1);     //Delete  Laptop to the inventary





