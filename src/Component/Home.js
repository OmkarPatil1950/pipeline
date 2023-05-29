import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import Corosol from "./CarouselComponent"
// const Example = [
//   {
//     id: 1,
//     name: 'Electronics',
//     href: '#',
//     imageSrc: '../images/homeapp.png',
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'Black',
//   },
//   {
//     id: 1,
//     name: 'Home Appliances',
//     href: '#',
//     imageSrc: '../images/electronics.png',
//     imageAlt: "Home Appliances",
//     price: '$35',
//     color: 'Black',
//   },
//   {
//     id: 1,
//     name: 'Fashion',
//     href: '#',
//     imageSrc: '../images/fashion.png',
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'Black',
//   },
//   {
//     id: 1,
//     name: 'super market',
//     href: '#',
//     imageSrc: '../images/supermarket.png',
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'Black',
//   },
//   {
//     id: 1,
//     name: 'Beauty',
//     href: '#',
//     imageSrc: '../images/Beuty.png',
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'Black',
//   },
//   // More products...
// ]


export default function Home() {
  const [Categories, setCategory] = useState([]);
  
 const navigate=useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/api/Categories")
      .then((res) => res.json())
      .then((result) => {
        setCategory(result);
        console.log(result)
      });
      console.log("----------------------")
    console.log(Categories);
  }, []);
  const handleClick=(category_Id)=>{
    navigate('/subcategory/'+category_Id)
  }
  return (
    <div>
      <Corosol/>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
           {Categories.map((val, ind) => (
            <div key={val.category_Id
            } className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
                <img
                  src={val.category_Img_Path
                  }
                  alt={val.category_Name}
                  className="h-fit w-fit object-cover object-center lg:h-fit lg:w-fit"
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={val.categoryId} onClick={() => handleClick(val.parentcategory_Id
)}>
                      <span aria-hidden="true" className="absolute inset-0" />
                       {val.category_Name} 
                    </a>
                  </h3>
                  {/* * subcategory={val.parentcategory_Id}
                      flag={val.flag}  */}
                </div>
              </div>
            </div>
          ))}

        
        </div>
      </div>
    </div>
    </div>
  )
}
