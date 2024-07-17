import React from 'react';
import poubelle from '../assets/images/poubelle.jpg';
import products from '../data/products.js';



export default class Panier extends React.Component {
  constructor(props) {
    super(props); 
    this.gaucheRef = React.createRef();
    this.state = {
      total: 0,
      weight:0,
      quantite:{},
      quantite1:{},
      
      
       
      
    };
    

  }


  // *****************************

  // une methode qui change le stock dans le panier et le stock dans quantite1
  ChangeStock = (event, product) => {
    
    const quantite = event.target.value;
    this.setState(
      (prevState) => {
        
        return {
          quantite: {
            ...prevState.quantite,
            [product.id]:quantite,
          },
          quantite1: {
            ...prevState.quantite1,
            [product.id]: quantite,
          },
          
        };
      },
      () => { 
        this.handleUpdateStock(product, quantite);
        this.PriceAndWeight(this.state);
        
      }
    );
  };
  // *****************************

//une méthode qui met a jour le stock
  handleUpdateStock = (product, quantite) => {
    const { quantite: prevQuantite } = this.state;
    const updatedQuantite = { ...prevQuantite, [product.id]: quantite };
    this.setState({ quantite: updatedQuantite });
  
    this.props.updateStock(product, quantite);
  };
// *****************************

  //une methode qui calcule les prix et les poids
  PriceAndWeight(prevProps) {
    if (prevProps.selectProduis !== this.props.selectProduis) {
      let newPrice = 0;
      let newWeight = 0;
      this.props.selectProduis.forEach((product) => {
        const quantite = parseInt(this.state.quantite[product.id]) || 1;
        newPrice += quantite * product.price;
        newWeight += quantite * product.weight;
      });
      this.setState({ total: newPrice, weight: newWeight });
    }
  }
  // *****************************

  // une méthode qui assure les changements faitent par priceAndWeight 
  componentDidUpdate(prevProps) {
    this.PriceAndWeight(prevProps);
  }
  // *****************************



  render() {
  
    const { v} = this.props; 
    const{selectProduis} =this.props;  
    
    return (
      
      <div className='cart'>
        
        <h4>Panier</h4>
        <div className='total'> total commande :<div className='price'>{this.state.total} </div></div>
        <div className='weight'>{this.state.weight}</div>
        <div>
        
        {selectProduis.map((product) => (
           
           
           <div key={product.id} className='product'>
              <div className='info'>
              <div className='name'>{product.name}</div>
              
              </div>
  
            <div className='imageProduit'><img src={product.image} alt={product.name} /></div>
            <div className='stock'>
            <label htmlFor='stock'></label>
            <input
              type="number"
              id="stock"
              name="stock"
              min={1} 
              max={product.stock}
              value={(this.state.quantite[product.id] ||parseInt(1))}
              onChange={(e) => {
                this.ChangeStock(e, product);
              }}
              onKeyDown={(e) => {
                e.preventDefault()
              }}
              />
                  
            </div>

            <img
              className='button'
              src={poubelle}
              alt=''
              onClick={() => {
                this.props.removeFromCart(product.id);
                
              }}
            />

              </div>
              
              
          ))}
         
        </div>
        
      </div>    
    );
  }
}
