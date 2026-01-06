
//  const products=[
//         {title: 'Cabbage', isFruit: false, id: 1},
//         {title: 'Garlic', isFruit: false, id: 2},
//         {title: 'Apple', isFruit: true, id: 3}
//       ];

// export default function ArrayProducts(){
//     const listItems = products.map((product)=>{
//        return ( 
//        <li 
//         key={product.id}
//         style={{
//             color:product.isFruit? 'magenta': 'darkgreen'
//         }}
//         >
//             {product.title}
//         </li>
//          )
//     })
//     return <ul>{listItems}</ul>

    
// }

    const products=[
        {title:'Cabbage', isFruit:false, id:1},
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 }
    ];
export default function ArrayProducts() {
    const listItems = products.map((product)=> (
        <li
            key={product.id}
            style={{
                color:product.isFruit ? 'yellow' :' black'
            }}
        >
            {product.title}
        </li>
    ))
    return (
        <ul>{listItems}</ul>    
    )
}