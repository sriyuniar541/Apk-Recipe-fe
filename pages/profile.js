import Link from 'next/link'
import FotterP from '../componen/fotterP'
import Navbar from '../componen/Navbar'
import CardProfile from '../componen/cardProfile'


export async function getStaticProps() {
  const id = 1
  const res = await fetch(`http://localhost:4001/users/${id}`)
  const response = await res.json()
  const data = response.data[0]
  console.log(data)

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data,
    }
  }
}


const profile = ({ data }) => {
  return (
    <div>
      <Navbar />
      <><div className='container text-center' style={{ marginTop: '5%', marginBottom: '5%' }} key={data.id}>
        <img src={data.photo} alt='' style={{ borderRadius: '50%', width: '172px', height: '172px' }} />
        <Link href='/changeP'><button className='btn btn-outline-light' style={{ marginTop: '12%' }}><img src='/ed.png' alt='' /></button> </Link>
        <h6 className='mt-3' style={{ marginRight: '5%' }}>{data.name}</h6>
      </div>
        <div className='container'>
          {/* menu */}
          <ul className="nav nav-tabs">
              <li className="nav-item">
                  <Link href='/profile' className='px-3'>My Recipe</Link>
              </li>
              <li className="nav-item">
                  <Link href='/savedRecipe' className='px-3'>Saved Recipe</Link>
              </li>
              <li className="nav-item">
                  <Link href='/likedRecipe' className='px-3'>Liked Recipe</Link>
              </li>
          </ul>
        </div>
        <hr />
        <di v className='container'>
          <div className='row'>
            <CardProfile />
            <CardProfile />
          </div>
        </di>
      </>
      <FotterP />
    </div>
  )
}

export default profile






