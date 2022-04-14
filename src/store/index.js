import { createStore } from 'vuex';

//Modules Importation
import productsModule from './modules/products';
import cartModule from './modules/cart.js';

const store = createStore({
    modules: {
        prods: productsModule,
        cart: cartModule
    }
});

export default store;