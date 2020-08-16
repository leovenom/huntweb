import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
  state = {
    products: [],
  };


  componentDidMount() {
    this.loadProducts();
  };

  loadProducts = async ()  => {
    const response = await api.get('/products');

    this.setState({ products: response.data.docs });
  };

  //escuta a variavel state.
  render() {
    const { products } = this.state

  return (
    <div className="product-list">
      <h1>Contagem de produtos { this.state.products.length } </h1>
      <br />
      { products.map(product => (
        <article key={ product._id  }>
          <strong>{ product.title }</strong>
          <p>{ product.description }</p>

          <a href="">Acessar</a>
        </article>
      ))}
    </div>
  );
}
}