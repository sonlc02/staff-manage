import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Home() {
    // const [staff, setStaff] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get('https://64994bae79fbe9bcf83eecdc.mockapi.io/staffManagement');
    //             setStaff(res.data);

    //         } catch (err) {
    //             console.error("Error", err);
    //         }
    //     };
    //     fetchData();
    // },[])
    const [staff, setStaff] = useState([]);
    const baseUrl = `https://64994ec179fbe9bcf83ef4f0.mockapi.io/APIPE`
    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => setStaff(data))
            .catch(error => console.log(error.message));

    }, []);
    return (
        <div className='book-items container-fluid mt-5'>
                <div className='row'>
                    {staff.map(staffs => (
                        <div key={staffs.id} className='col-12 col-md-4'>
                            <div style={{ boxShadow: '5px 5px 8px black', borderRadius:'20px', margin: '0 10px 20px', backgroundColor:'rgba(255, 217, 102, 0.2'}} className='row my-5'>
                                <div className='item1 col-12 my-5'>
                                    <div className='row Item-inside'>
                                        <div className='col-12 col-md-4 img-div'>
                                            <img src={staffs.avatar} alt='bookPic' className='img-fluid' style={{ width:'220px', height: '250px', borderRadius:'20px' }} />
                                        </div>
                                        <div className='col-12 col-md-8'>
                                            <div className='main-title pt-4 pb-3'>
                                                <h2 style={{ fontSize: '22px', fontWeight: 'bold', textTransform: 'uppercase'}}>{staffs.name}</h2>
                                                <i style={{fontWeight:'bold', color:'red'}}>{staffs.age}</i>
                                                <h3 style={{ fontSize: '20px', fontWeight: '400', color: '#4db6ac' }}>{staffs.address}</h3>
                                            </div>
                                            <div className='menu-year-book'>
                                                <div style={{ marginBottom: '10px' }} className='year-book-divide d-flex justify-content-between'>                                     
                                                    <Link to={`/detail/${staffs.id}`}>
                                                        <button style={{ backgroundColor: '#4db6ac', border: 'none', marginRight:'30px'}} className='btn btn-primary'>Xem Thêm</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            )
}

export default Home