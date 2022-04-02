import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { get } from '../api/product';

const ProductDetail = () => {
    const [products, setProducts] = useState()
    const {id} = useParams()
    useEffect(() => {   
        const getPro = async () => {
            const {data} = await get(id);
            setProducts(data);
        }
        getPro()
    }, [])
  return (
        <div>
            {(products) ?
            // <div className="bg-white">
            //         <div className="pt-6">
            //         <nav aria-label="Breadcrumb">
            //             <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8" >
            //             <li>
            //                 <div className="flex items-center">
            //                 <NavLink to="/" className="mr-2 text-sm font-medium text-gray-900">
            //                     Trang chủ
            //                 </NavLink>
            //                 <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
            //                     <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            //                 </svg>
            //                 </div>
            //             </li>

            //             <li>
            //                 <div className="flex items-center">
            //                     Chi tiết sản phẩm
            //                 </div>
            //             </li>
            //             </ol>
            //         </nav>

            //         <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            //             <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            //             <img src={products.image} alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
            //             </div>
            //             <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            //             <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            //                 <img src={products.image} alt="Model wearing plain black basic tee." id="img-cart" className=" w-full h-full object-center object-cover" />
            //             </div>
            //             <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            //                 <img src={products.image} alt="Model wearing plain gray basic tee." className="w-full h-full object-center object-cover" />
            //             </div>
            //             </div>
            //             <input type="number" id="inputQty" name="" value="1" className="hidden"/>
            //             <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            //             <img src={products.image} alt="Model wearing plain white basic tee." className="w-full h-full object-center object-cover" />
            //             </div>
            //         </div>


            //         <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            //             <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            //             <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl" id="title-cart">
            //                 {products.name}
            //             </h1>
            //             </div>

            //             <div className="mt-4 lg:mt-0 lg:row-span-3">
            //             <h2 className="sr-only">Product information</h2>
            //             <p className="text-3xl text-gray-900">{products.price}</p>


            //             <div className="mt-6">
            //                 <h3 className="sr-only">Reviews</h3>
            //                 <div className="flex items-center">
            //                 <div className="flex items-center">
            //                     <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            //                     </svg>

            //                     <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            //                     </svg>

            //                     <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            //                     </svg>

            //                     <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            //                     </svg>

            //                     <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            //                     </svg>
            //                 </div>
            //                 <p className="sr-only">4 out of 5 stars</p>
            //                 <NavLink to={''} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 lượt xem</NavLink>
            //                 </div>
            //             </div>

            //                 <div>
            //                 <h3 className="text-sm text-gray-900 font-medium">Màu</h3>

            //                 <fieldset className="mt-4">
            //                     <legend className="sr-only">
            //                     Choose a color
            //                     </legend>
            //                     <div className="flex items-center space-x-3">
            //                     <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
            //                         <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label"/>
            //                         <p id="color-choice-0-label" className="sr-only">
            //                         White
            //                         </p>
            //                         <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
            //                     </label>

            //                     <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
            //                         <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label"/>
            //                         <p id="color-choice-1-label" className="sr-only">
            //                         Gray
            //                         </p>
            //                         <span aria-hidden="true" className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
            //                     </label>
            //                     <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
            //                         <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
            //                         <p id="color-choice-2-label" className="sr-only">
            //                         Black
            //                         </p>
            //                         <span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
            //                     </label>
            //                     </div>
            //                 </fieldset>
            //                 </div>

            //                 <div className="mt-10">
            //                 <div className="flex items-center justify-between">
            //                     <h3 className="text-sm text-gray-900 font-medium">Size</h3>
            //                     <NavLink to={''} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Kích thước</NavLink>
            //                 </div>

            //                 <fieldset className="mt-4">
            //                     <legend className="sr-only">
            //                     Choose a size
            //                     </legend>
            //                     <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">

                                
            //                         <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
            //                             <input type="radio" name="size-choice" id="size" value="X" className="sr-only" aria-labelledby="size-choice-1-label"/>
            //                             <p id="size-choice-1-label">X</p>
            //                             <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
            //                         </label>
            //                         <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
            //                             <input type="radio" name="size-choice" id="size" value="XL" className="sr-only" aria-labelledby="size-choice-1-label"/>
            //                             <p id="size-choice-1-label">XL</p>
            //                             <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
            //                         </label>
            //                         <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
            //                             <input type="radio" name="size-choice" id="size" value="XXL" className="sr-only" aria-labelledby="size-choice-1-label"/>
            //                             <p id="size-choice-1-label">XXL</p>
            //                             <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
            //                         </label>

                                
            //                     </div>
            //                 </fieldset>
            //                 </div>

            //                 <button type="submit" className="btnAddToCart mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ</button>
                        
            //             </div>

            //             <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            //             <div>
            //                 <h3 className="sr-only">Description</h3>

            //                 <div className="space-y-6">
            //                 <p className="text-base text-gray-900">Content Product</p>
            //                 </div>
            //             </div>

            //             <div className="mt-10">
            //                 <h3 className="text-sm font-medium text-gray-900">Nổi bật</h3>

            //                 <div className="mt-4">
            //                 <ul className="pl-4 list-disc text-sm space-y-2">
            //                     <li className="text-gray-400"><span className="text-gray-600">Cắt và may thủ công tại địa phương</span></li>

            //                     <li className="text-gray-400"><span className="text-gray-600">Được nhuộm bằng các màu độc quyền của chúng tôi</span></li>

            //                     <li className="text-gray-400"><span className="text-gray-600">Rửa trước &amp; thu nhỏ trước</span></li>

            //                     <li className="text-gray-400"><span className="text-gray-600">100% cotton siêu mềm</span></li>
            //                 </ul>
            //                 </div>
            //             </div>

            //             <div className="mt-10">
            //                 <h2 className="text-sm font-medium text-gray-900">Thông tin chi tiết</h2>

            //                 <div className="mt-4 space-y-6">
            //                 <p className="text-sm text-gray-600"></p>
            //                 </div>
            //             </div>
            //             </div>
            //         </div>
            //         </div>
            //     </div>


            <section className="w-full text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 object-cover" src={products.image} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{products.name}</h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                      <NavLink to={'#'} className="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </NavLink>
                      <NavLink to={'#'} className="ml-2 text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </NavLink>
                      <NavLink to={'#'} className="ml-2 text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </NavLink>
                    </span>
                  </div>
                  <p className="leading-relaxed">{products.description}</p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <div className="flex">
                      <span className="mr-3">Color</span>
                      <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                    <div className="flex ml-6 items-center">
                      <span className="mr-3">Size</span>
                      <div className="relative">
                        <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                          <option>SM</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900"></span>
                    <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

            : <h3>Không có sản phẩm</h3>}
    </div>
  )
}

export default ProductDetail