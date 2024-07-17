import React from 'react';
import products from '../data/products.js';
import panierimg from "../assets/images/panier.jpg";


export default class Produits extends React.Component {
  constructor(props) {
    super(props);
    this.state={filtrer:'',
    selectProduis: [], 
    v:0,
    id:0,
  };
      
  }

// une méthode qui filtre les produits 
  filtreproduits =(event)=>{
    this.setState({filtrer:event.target.value});
  }
// *****************************
    
  render() {
    const { filtrer, selectProduis} = this.state;  
    const { v } = this.props;
    const { id } = this.props;
    const{quantite1} =this.props;
    console.log('le stock des produits:',quantite1);
    
    const produitsfiltrer = products.filter(product => product.name.toLowerCase().startsWith(filtrer.toLowerCase()));
    return (
      <div className='productList'>
        <h4>Boutique</h4>
        
        <div className='filter'><input id='filter' type="text" placeholder='filtrer les produits' value={filtrer} onChange={this.filtreproduits}   /></div>
        <div className='productsZone'>
           {produitsfiltrer.map((product) => (
             
              <div key={product.id} className='product'>
                
                  <div className='info'>
                      <div className='name'> {product.name}</div>
                      <div className='description'>{product.description}</div>
                      <div className='weight'>{product.weight}</div>
                    </div>
                  <div className='imageProduit'><img src={product.image} alt={product.name} /></div>
                  <div className='stock'>qté {quantite1.hasOwnProperty(product.id) ? quantite1[product.id] : product.stock}</div>
                  <div className='price'>{product.price}</div>
                  <img className='button' src={panierimg} alt=""  onClick={() => this.props.addToCart(product,product.id)}/>

              </div>
                  
            ))}
          </div>
          
         
          
          
      </div>

      
      
    );

  }
}
