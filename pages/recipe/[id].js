import Link from 'next/link'
import Footer from '../../componen/Footer'
import Navbar from '../../componen/Navbar'


export async function getServerSideProps(context) {
  try {
    const id = context.params.id
    const res = await fetch (`http://localhost:4001/recipe/${id}`)
    console.log(id)
    const response = await res.json()
    const data = response.data[0]
    console.log(data)
    return {
      props : {
        data
      }
    }
    
  } catch  (e) {
      console.log(e)
  }
}



const DetailRecipe = ({data}) => {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <><div className='text-center'>
            <h1 className='mb-4' style={{color:'#2E266F'}}>Loream Sandwich {data.title}</h1>
            <img src={data.photo} alt='' style={{width:'800px',height:'550px'}}/>
          </div><div className='col-11 offset-1 mt-5'>
              <h4>Ingredients </h4><ul>
                <li>{data.ingredients}</li>
                <li>2 tbsp mayonnaise</li> 
                <li>3 slices bread</li>
                <li>a little butter</li>
                <li>⅓ carton of cress</li>
                <li>2-3 slices of tomato or a lettuce leaf and a slice of ham or cheese</li>
                <li>crisps , to serve</li>
              </ul>
              <Link href='/detailVidio'><h4 className='mt-5'>Vidio Step</h4>
                  <img src='/vd.png' alt='' style={{ width: '20%' }} className='mb-3' /><br />
                  <img src='/vd.png' alt='' style={{ width: '20%' }} className='mb-3' /><br />
                  <img src='/vd.png' alt='' style={{ width: '20%' }} className='mb-3' />
              </Link>
              <div className='col-12 text-center'>
                <textarea className="form-control mb-3 border-white" id="exampleFormControlTextarea1" rows="10" placeholder='Comment :' style={{ backgroundColor: '#F6F5F4' }}></textarea>
                <button className='btn btn-warning text-white col-3'>Post</button>
              </div>
            </div></>
            <div className='container col-12 offset-1'>
              <div style={{ marginBottom: '20%', marginTop: '5%' }}>
                  <h4 className='mb-5'>Comment</h4>
                <div className='d-flex mb-5' style={{lineHeight:'20%'}}>
                    <img src='/lk.png' alt=''className='mb-3' style={{widows:'40%'}} />
                    <div className='mr-5' style={{marginLeft:'2%'}}>
                      <p st>Sri Yuniar</p>
                      <p>Nice recipe. simple and delicious, thankyou</p>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
        <Footer/>     
    </div>   
  )
}

export default DetailRecipe



  

