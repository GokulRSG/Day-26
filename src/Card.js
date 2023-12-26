export function Card({courselist, Catagory}) {

  let newList = ()=> courselist.filter((catList)=>{
    console.log(Catagory)
    if(Catagory === "all")
    {
      return catList
    }
    else if(Catagory === "full stack"){
      return catList.catagory === "full stack";
    }
    else if(Catagory === "data science"){
      return catList.catagory === "data science";
    }
    else if(Catagory === "cyper sec"){
      return catList.catagory === "cyber security";
    }
    else if(Catagory === "career"){
      return catList.catagory === "career";
    }
    });

  return (
  
    <div className='card-section'>
      {newList().map((cource, index) =>(
        // <CartList key={index} cource={cource} ></CartList>  
        <div className='card'>
  <div className='img-head'>
    <img className='card-img' src={cource.image} />
  </div>
  <div className='card-head'>
    <div className='card-title'>
      <p>{cource.title}</p>
    </div>
    <div className='card-contend'>
      <p>{cource.contend}</p>
    </div>
    <a className='card-readmore' href="https://www.guvi.in/blog/guide-to-scalable-vector-graphics/">READ MORE » </a>
  </div>
  <div className='card-food'>
    <span className="card-post-date">{cource.date} </span>
    <span className="card-post-avatar">   No Comments </span>
  </div>
</div>
      ))}
      
    </div>
  );
}


