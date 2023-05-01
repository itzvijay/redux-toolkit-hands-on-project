import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components"; 
import {MdDeleteForever} from "react-icons/md"
import { removeUser } from "../store/slices/UserSlice";

const Wrapper = styled.section`
  /* add any styles you need here */
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .btn {
    display:flex;
    float:right;
    justify-content: space-between;
  }
.li-style{
  color:black; 
}
  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

const DisplayUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {  //using useSelector 
    console.log(state.users)
    return state.users;
  });
  console.log(data)

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id))
  }
  return (
    <Wrapper>
      {data.length > 0 ? (
        <ul>
          {data.map((user, id) => (
            <li key={id} className=".li-style">
              {user}
              <button className="btn btn-delete" onClick={() => handleRemoveUser(id)}>
                <MdDeleteForever className="delete-icon"/>
              </button>
              </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
  
};

export default DisplayUser;
