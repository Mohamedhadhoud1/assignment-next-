import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Filters from '../comp/filers'
import { useState,useEffect,useRef } from 'react'
import useDeviceSize from '../comp/window'


export const getServerSideProps = async () => {
  const res = await fetch('https://assessment-edvora.herokuapp.com');
  const data = await res.json();

  return {
    props: { products: data }
  }
}

export default function Home({products}) {
  const [width, height] = useDeviceSize();
  const [productSelected,setProduct]=useState('')
  const [stateSelected,setState]=useState('')
  const [citySelected,setCity]=useState('')
  const [num,setnum]=useState(0)
  const [num2,setnum2]=useState(0)
  
  console.log(width)
    const filterdProducts=products.filter(product=>product.product_name==productSelected)
    const mappedProducts= productSelected==''? products : filterdProducts
    const filterdStates=mappedProducts.filter(product=>product.address.state==stateSelected)
    const mappedStates=stateSelected==''? mappedProducts : filterdStates
    const filterdCities=mappedStates.filter(product=>product.address.city==citySelected)
    const mappedCities=citySelected==''? mappedStates : filterdCities
  return (
    <div className='all'>
      <p className='p1'>Edvora</p>
      <div className='filters'>
        <p style={{fontSize:30,margin:0,color:"#A5A5A5"}}>Filters</p>
        <hr />
      <div>
         <select lable="ll" name="Products" defaultValue={productSelected} onChange={e=>{setProduct(e.target.value)}}>
           <option value='' key={'565'}>Products</option>
         {products.map((product)=>(
        <option key={product.time} value={product.product_name}>{product.product_name}</option>
         ))
         }
        </select>
      </div>
      <div>
         <select name="States" defaultValue={stateSelected} onChange={e=>{setState(e.target.value)}}>
         <option value='' key={'765'}>States</option>
         {mappedProducts.map((product)=>(
        <option key={product.time} value={product.address.state}>{product.address.state}</option>
         ))
         }
        </select>
      </div>
      <div>
         <select name="Cities" defaultValue={citySelected} onChange={e=>{setCity(e.target.value)}}>
         <option value='' key={'585'}>Cities</option>
         {mappedStates.map((product)=>(
        <option key={product.time} value={product.address.city}>{product.address.city}</option>
         ))
         }
        </select>
      </div>
      </div>



   <ul>
       
       {
       (productSelected=='' && stateSelected=='' && citySelected=='')?
       width>800 ?
       <div className='flex1'>
         
         <header>
         <p className='p11'>Edvora</p>
        <h1>Products</h1>
        <p className='p2'>Product Name</p><hr></hr>
      </header>
         <div className='flex2'>
         {num!=0? <div className="arrow left" onClick={()=>setnum(num-4)}></div>:null}
         {
          
       products.slice(num, num+4).map((product)=>(
        
       <div key={product.date+100} className='flex-container'>
        <li key={product.time}>
        
        <div className='row1'>
          <div className='p-name'><p className='p3'>{product.product_name}</p><br></br>
        <p>{ product.brand_name }</p><br></br>
        <p className='p3'>${ product.price }</p></div>
        
         <div className="product-image" style={{ width: 100, height: 100,backgroundSize: 'cover',backgroundPosition: 'center', backgroundImage: `url(${product.image})` }}></div>                    
        
        </div>
        <div className='row2' >
        Date:{ product.date.split('T')[0] }<br></br>
        City:{ product.address.city }<br></br>
        
        { product.discription }
        </div>
        
        </li>
        </div>
   
        ))
       }
      
       {num<products.length/2?<div className="arrow right" onClick={()=>setnum(num+4)}></div>:null}
       </div>
      <div>
      <p className='p2'>Product Name</p><hr></hr>
      </div>
      <div className='flex2'>
         {num2!=0? <div className="arrow left" onClick={()=>setnum2(num2-4)}></div>:null}
         {
             
       products.slice((products.length/2)+num2, (products.length/2)+num2+4).map((product)=>(
       
        
       <div key={product.date+5} className='flex-container'>
        <li key={product.time}>
        
        <div className='row1'>
        <div className='p-name'><p className='p3'>{product.product_name}</p><br></br>
        <p>{ product.brand_name }</p><br></br>
        <p className='p3'>${ product.price }</p></div>
        
         <div className="product-image" style={{ width: 100, height: 100,backgroundSize: 'cover',backgroundPosition: 'center', backgroundImage: `url(${product.image})` }}></div>                    
        
        </div>
        <div className='row2' >
        Date:{ product.date.split('T')[0] }<br></br>
        City:{ product.address.city }<br></br>
        
        { product.discription }
        </div>
        
        </li>
        </div>
   
        ))
       }
      
        {((products.length/2)+num2+4<products.length)?<div className="arrow right" onClick={()=>setnum2(num2+4)}></div>:null}
       </div>

       
        </div>
  :
  <div className='flex1'>
  <header>
  <p className='p11'>Edvora</p>
 <h1>Products</h1>
 <p className='p2'>Product Name</p><hr></hr>
</header>
  <div className='flex2'>
  {num!=0? <div className="arrow left" onClick={()=>setnum(num-4)}></div>:null}
  {
   
products.slice(num, num+4).map((product)=>(
 
<div key={product.date+555} className='flex-container'>
 <li key={product.time}>
 
 <div className='row1'>
   <div className='p-name'><p className='p3'>{product.product_name}</p><br></br>
 <p>{ product.brand_name }</p><br></br>
 <p className='p3'>${ product.price }</p></div>
 
  <div className="product-image" style={{ width: 100, height: 100,backgroundSize: 'cover',backgroundPosition: 'center', backgroundImage: `url(${product.image})` }}></div>                    
 
 </div>
 <div className='row2' >
 Date:{ product.date.split('T')[0] }<br></br>
 City:{ product.address.city }<br></br>
 
 { product.discription }
 </div>
 
 </li>
 </div>

 ))
}

{num+4<products.length?<div className="arrow right" onClick={()=>setnum(num+4)}></div>:null}
</div> 
</div>
      :
      <div className='flex1'>
 <header>
         <p className='p11'>Edvora</p>
        <h1>Products</h1>
        <p className='p2'>Product Name</p><hr></hr>
      </header>
      <p  className='p1' style={{display:mappedCities.length==0? "block":"none"}}>No Products Avilable</p>
      {console.log("Mapped",mappedCities.length)}
<div className='flex2'>
         {num!=0? <div className="arrow left" onClick={()=>setnum(num-4)}></div>:null}
         {
             
       mappedCities.slice(num, num+4).map((product)=>(
        
       <div key={product.date+555555}className='flex-container'>
        <li key={product.time}>
        
        <div className='row1'>
        <div className='p-name'><p className='p3'>{product.product_name}</p><br></br>
        <p>{ product.brand_name }</p><br></br>
        <p className='p3'>${ product.price }</p></div>
        
         <div className="product-image" style={{ width: 100, height: 100,backgroundSize: 'cover',backgroundPosition: 'center', backgroundImage: `url(${product.image})` }}></div>                    
        
        </div>
        <div className='row2' >
        Date:{ product.date.split('T')[0] }<br></br>
        City:{ product.address.city }<br></br>
        
        { product.discription }
        </div>
        
        </li>
        </div>
   
        ))
       }
      
       {num<mappedCities.length/2?<div className="arrow right" onClick={()=>setnum(num+4)}></div>:null}
      
       </div>
       <p className='p2'>Product Name</p><hr></hr>


       <div className='flex2'>
         {num2!=0? <div className="arrow left" onClick={()=>setnum2(num2-4)}></div>:null}
         {
             
       mappedCities.slice((mappedCities.length/2)+num2, (mappedCities.length/2)+num2+4).map((product)=>(
       
        
       <div key={product.date+85} className='flex-container'>
        <li key={product.time}>
        
        <div className='row1'>
        <div className='p-name'><p className='p3'>{product.product_name}</p><br></br>
        <p>{ product.brand_name }</p><br></br>
        <p className='p3'>${ product.price }</p></div>
        
         <div className="product-image" style={{ width: 100, height: 100,backgroundSize: 'cover',backgroundPosition: 'center', backgroundImage: `url(${product.image})` }}></div>                    
        
        </div>
        <div className='row2' >
        Date:{ product.date.split('T')[0] }<br></br>
        City:{ product.address.city }<br></br>
        
        { product.discription }
        </div>
        
        </li>
        </div>
   
        ))
       }
      
        {((mappedCities.length/2)+num2+4<mappedCities.length) || (mappedCities.length/2)-4==0 ?<div className="arrow right" onClick={()=>setnum2(num2+4)}></div>:null}
       </div>
        </div>
}  
    </ul>
    
    </div>
  )
}
