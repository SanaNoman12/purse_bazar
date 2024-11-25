
import React from 'react';

const purses = () => {

  const purseData =[
    {id: 1, name:"Gucci Purse" , price:3000, description:'Stylish pink hard Stuff bag', image: '/1.png'},
    {id: 2, name:"Gray Perisian Purse" , price:2500, description:'Stylish gliter bag', image: '/2.png'},
    {id: 3, name:"Green Twin Purse" , price:4500, description:'Decent Green Two in one bag', image: '/3.png'},
    {id: 4, name:"Gucci" , price:3500, description:'Stylish Black bag', image: '/4.png'},
    {id: 5, name:"Twin color Purse" , price:3000, description:'Simple and decent', image: '/5.png'},
    {id: 6, name:"Royal Blue Purse" , price:1000, description:'Plane Two in one', image: '/6.png'},
    {id: 7, name:"Chanel maroon Purse" , price:9900, description:'Stylish perisian bag', image: '/7.png'},
    {id: 8, name:"Prada" , price:1999, description:'Stylish red Two in one bag', image: '/8.png'},
    {id: 9, name:"Chanel Legendry Purse" , price:1800, description:'Stylish Legendary perisian bag', image: '/9.png'}
  ]
  return (
    <div>
      <div className='purses'>
       {purseData.map((purse) => (
        <div key={purse.id} className='purse-card'>
            <img src={purse.image} alt={purse.name} />
            <h3>{purse.name}</h3>
            <p>{purse.description}</p>
            <div className='price'>${purse.price}</div>
            <button>Add to Cart</button>
        </div>
       )

       )

       }
      </div>
    </div>
  );
}

export default purses;
