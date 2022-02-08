/*import { getServerSideProps } from "../pages";

const Filters = (products) => {
    
    return ( 

        <div>
             <div>
         <select lable="ll" name="Products" defaultValue={productSelected} onChange={e=>{setProduct(e.target.value)}}>
           <option value=''>Products</option>
         {products.map((product)=>(
        <option key={product.time} value={product.product_name}>{product.product_name}</option>
         ))
         }
        </select>
      </div>
      <div>
         <select name="States" defaultValue={stateSelected} onChange={e=>{setState(e.target.value)}}>
         <option value=''>States</option>
         {mappedProducts.map((product)=>(
        <option key={product.time} value={product.address.state}>{product.address.state}</option>
         ))
         }
        </select>
      </div>
      <div>
         <select name="Cities" defaultValue={citySelected} onChange={e=>{setCity(e.target.value)}}>
         <option value=''>Cities</option>
         {mappedStates.map((product)=>(
        <option key={product.time} value={product.address.city}>{product.address.city}</option>
         ))
         }
        </select>
      </div>
        </div>
     );
}
 
export default Filters;*/