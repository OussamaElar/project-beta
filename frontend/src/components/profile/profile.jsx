import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import ProductListItems from './products_list_items'
import './profile.css'


const Profile = (props) => {
      const { fetchUserProducts, fetchUser ,products, user } = props;
      
      useEffect(() => {
            fetchUserProducts(props.match.params.id);
            fetchUser(props.match.params.id);
      }, [])
      

      return (
            <div className='profile-container'>
                  <div className='profile-nav'>
                        <ul className='profile-nav-ul'>
                              <div className='profile-pic-container'><img className='profile-pic' src={user.userImage}></img></div>
                              <li>{user.handle }</li>
                              <li>Account Details</li>
                              <li><Link to={`/newproduct`}>Create new Listing</Link></li>
                              <li>Order stats</li>
                        </ul>
                  </div>
                  <div className='container'>
                        
                        {products.map((product, i) => (
                              <ProductListItems product={product} key={i}/>
                        ))}
                        
                  </div>
            </div>
      )
}

export default Profile