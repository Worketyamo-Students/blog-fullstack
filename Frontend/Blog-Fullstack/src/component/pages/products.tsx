

interface Iproducts {
    srcImage: string,
    profile: string,
    icon: string,
    icon2: string,
    title: string,
    date: string

}

function Products({srcImage, icon, icon2, profile, title, date}  : Iproducts) {
  return (
    <div className="w-full h-[55%] flex flex-col rounded-2xl shadow-2xl">

            <div className="flex-[2]">
                <img src={srcImage} alt=""  className="w-full h-full"/>
            </div>

            <div className="flex-1 flex">
                    <div className="flex-1 flex items-center justify-start gap-6 pl-[2rem]">

                             <img src={profile} alt="" className="cursor-pointer"/>       
                       
                        <div>
                            <h1 className="text-[2rem] font">{title}</h1>
                            <p className="text-[1.5rem] poppins text-gray-600">{date}</p>
                        </div>

                    

                    </div>

                    <div className="flex-1 flex items-center justify-end pr-[2rem] gap-7">
                    
                        <div><img src={icon} alt="" className="cursor-pointer"/></div>
                        <div><img src={icon2} alt="" className="cursor-pointer"/></div>

                    </div>


            </div>



    </div>
  )
}

export default Products
