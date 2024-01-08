import React, { Component } from 'react'
import { IconSwitch } from './IconSwitch';

export default class Store extends Component {
    

    constructor(props) {
        super(props);
        this.onSwitch = this.onSwitch.bind(this);
    };

    state = {
        view: this.props.view,
    };

  onSwitch () {
        const switchTo = this.state.view === 'view-module' ? 'view-list' : 'view-module';
        console.log('Switched view to:', switchTo);
        this.setState((state) => ({view: switchTo}));
      }

  render() {
    console.log('prop view: ', this.state.view);
    const { products} = this.props;
    let key = 0;
    if (this.state.view === 'view-module') {
    return (
        <>
        <IconSwitch onSwitch={this.onSwitch} view="view_list"/>
        <div className='container view-module'>
        {products.map((product) => <div className='product-card' key={key++}>
            <div className='product-card-header'>
                <h1>{product.name}</h1>
                <p>{product.color}</p>
            </div>
            <div className='product-card-body'>
                <img className='img-module' src={product.img}/>
            </div>
            <div className='product-card-footer'>
                <p>${product.price}.00</p>
            </div>
            <button className='add-to-cart'>
            <p>add to cart</p>
        </button>
            
            </div>)}
      </div>
      </>
      
    )
  }

  return (
    <>
    <IconSwitch onSwitch={this.onSwitch} view="view_module"/>
    <div className='container view-list'>
    {products.map((product) => <div className='product-card-list' key={key++}>
       
            <img className='img-list' src={product.img}/>
       
        <div className='product-card-header'>
            <h3>{product.name}</h3>
        </div>
        <div className='color'>
        <p>{product.color}</p>
        </div>        
        <div className='product-card-price'>
            <p>${product.price}.00</p>
        </div>
        <button className='add-to-cart'>
            <p>add to cart</p>
        </button>
        
        </div>)}
  </div>
  </>
  
)


  };
};
