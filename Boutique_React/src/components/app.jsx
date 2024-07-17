import React from 'react';
import products from '../data/products.js';
import Panier from './panier.jsx';
import Produits from './produit.jsx';
import '../assets/style/app.css';
import '../assets/style/cart.css';
import '../assets/style/productList.css';
import '../assets/style/product.css';
/*
 define root component
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectProduis: [],
      v:0,
      products: products,
      quantite: {},
      quantite1: {},
      lastV: 0,
      
            
    };
  }
  // *****************************

  // une méthode qui ajoute le produit dans le panier en retirant 1 du stock et l'afficher dans la qté
  addProduitsToCart = (product, productId) => {
    const { selectProduis, quantite, quantite1 } = this.state;
    const isProductInCart = selectProduis.some((p) => p.id === productId);

    if (!isProductInCart) {
      products.forEach((product) => {
        this.state.quantite[product.id] = 1;
      });
    }

    const stockProduct = products.find((p) => p.id === productId);

    if (stockProduct) {
      const updatedProduct = { ...product, v: stockProduct.stock };
      const updatedQuantite = { ...quantite };
      const updatedQuantite1 = { ...quantite1 };
      const lastV = stockProduct.stock - quantite[productId];
      updatedQuantite[productId] = lastV;
      updatedQuantite1[productId] = lastV;

      this.setState((prevState) => ({
        selectProduis: [...prevState.selectProduis, updatedProduct],
        v: lastV,
        id: productId,
        quantite: updatedQuantite,
        quantite1: updatedQuantite1,
      }));
    }
  };
  
  // *****************************

// fonction pour supprimer le produit 
  removeFromCart = (productId) => {
    const { selectProduis, quantite, id, quantite1 } = this.state;
    const updatedProducts = selectProduis.filter((product) => product.id !== productId);
    const updatedQuantite = { ...quantite };
  
    if (productId === id) {
      products.forEach((product) => {
        this.state.quantite[productId ] = 1;
      });
      const stockProduct = products.find((p) => p.id === productId);
      if (stockProduct) {
        this.setV(stockProduct.stock);
        
      }
    }
  
    if (updatedQuantite.hasOwnProperty(productId)) {
      delete updatedQuantite[productId];
       
    }
    
  
    const updatedQuantite1 = { ...quantite1 };
    delete updatedQuantite1[productId];
    
    this.setState({
      selectProduis: updatedProducts,
      quantite: updatedQuantite,
      quantite1: updatedQuantite1,
    });
  };
// *****************************
  
// fonction qui ajoute le produit dans le tableau quantite1 pour que je puisse afficher la valeur du produit et la conserver 

  updateStock = (product, quantite) => {
    const { selectProduis, quantite1 } = this.state;
    let v;
    
    const updatedProducts = selectProduis.map((p) => {
      if (p.id === product.id) {
        if(this.removeFromCart(product.id)){
          quantite=1;
          v=p.v -quantite;
        }
        v = p.v - quantite;
      }
 
      return p;
    });
 
    const updatedQuantite1 = { ...quantite1 };
    updatedQuantite1[product.id] = v !== undefined ? v : quantite1[product.id]; 
  
    this.setV(v);
    this.setId(product.id);
  
    this.setState({
      selectProduis: updatedProducts,
      quantite1: updatedQuantite1, 
    });
  };
// *****************************

// une méthode qui récupère la valeur v
  setV = (v) => {  
    this.setState({ v ,lastV: v });

  }

// *****************************

// une méthode qui récupère l'id
  setId= (id) =>{
    this.setState({id});
  } 

// *****************************
 

  render() {
   const { selectProduis} = this.state;
   const { v } = this.state;
   const { id } = this.state;
   const { quantite } = this.state;
   const{quantite1} =this.state; 

   return (
<div>
  <Produits selectProduis={selectProduis} addToCart={this.addProduitsToCart} updateStock={this.updateStock} v={v}  id={id} quantite={quantite} quantite1={quantite1}/>
  <Panier selectProduis={selectProduis} updateStock={this.updateStock} addToCart={this.addProduitsToCart}  setV={this.setV} setId={this.setId} removeFromCart={this.removeFromCart} quantite1={quantite1}/>
</div>
    );
  }
}
