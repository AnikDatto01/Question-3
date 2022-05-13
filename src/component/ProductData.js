import React , {  useState ,useEffect}  from 'react';

const data=[
    {
        name:"product A",
        price:300
    },
    {
        name:"product B",
        price:200
    },
    {
        name:"product C",
        price:700
    },
    {
        name:"product D",
        price:500
    },
    {
        name:"product E",
        price:650
    },
    {
        name:"product F",
        price:800
    },
]


const ProductData = () => {

    const[buttonView,setButtonView]=useState(true);
    const [listToRender,setListToRender]=useState(3)
useEffect(()=>{
    if(buttonView){
        setListToRender(Math.min(data.length,3))
    }else{
        setListToRender(data.length)
    }
},[buttonView])

    return (

        <div className="product_section">
           
            <div className='product-list'>
                {
                    data.slice(0,listToRender).map(item=>(
                        <div className='item' key={item.name}>
                            {item.name} : {item.price}
                        </div>
                    ))
                }
            </div>
            <button onClick={()=> setButtonView(!buttonView)}>{buttonView? 'View All' : 'Collapse'}</button>
        </div>
    )
}

export default ProductData
