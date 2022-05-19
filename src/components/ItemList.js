import Item from "./Item";
import { ProductsContainer } from './StyledComponents';

const ItemList = ({ items }) => {
    return (
        <ProductsContainer>
        {
            items.length > 0
			? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.cost} pictureUrl={item.image} stock={item.stock}/>)
			: <p style={{color:"red"}}>Cargando los mejores productos....</p>
        }
        </ProductsContainer>
    );
}

export default ItemList;