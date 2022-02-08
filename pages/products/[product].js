/*
export const getStaticPaths = async () => {
    const res = await fetch('https://assessment-edvora.herokuapp.com');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(product => {
      return {
        params: { time: product.time }
      }
    })
    console.log(paths)
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const time = context.params.time;
    
    const res = await fetch('https://assessment-edvora.herokuapp.com/' + time);
    const data = await res.json();
  
    return {
      props: { product: data }
    }
  }
  
  const Details = ({ product }) => {
    return (
      <div>
        <h1>{ product.product_name }</h1>
        <p>{ product.brand_name }</p>
        <p>{ product.price }</p>
        <p>{ product.address }</p>
        <p>{ product.discription }</p>
        <img src={product.image}></img>
        
      </div>
    );
  }
  
  export default Details;*/