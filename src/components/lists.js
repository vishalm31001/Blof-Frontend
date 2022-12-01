import { useEffect, useState} from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from "@mui/material";
import { getUsers, deleteUser } from "../services/api";
import { Link } from 'react-router-dom';
import "./list.css";

const StyledTable = styled(Table)`
    width: 90%;
    margin: 5% auto 0 auto;
`;

const Thead = styled(TableRow)`
  background: #4e5180;
  & > th {
    color: #000000;
    font-size: 25px;
    font-family: "Brush Script MT", cursive;
  }
`;

const Tbody = styled(TableRow)`
    & > td {
        font-family: 'Brush Script MT', cursive;
        font-size: 20px;
    }
`;

const Lists = () =>{
    
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        getAllUser();
    }, []);

    const getAllUser = async ()=>{
        let response = await getUsers();
        console.log(response.data)
        setUsers(response.data)
    }
    
    const deleteUserDetails = async (id) =>{
        await deleteUser(id);
        getAllUser();
    }
    return (
      <div className="img2">
        <StyledTable>
          <TableHead>
            <Thead>
              <TableCell>Name</TableCell>
              <TableCell>Usrname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell></TableCell>
            </Thead>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <Tbody key={user._id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="success"
                      style={{ marginRight: 10 }}
                      component={Link}
                      to={`/edt/${user._id}`}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "red" }}
                      onClick={() => deleteUserDetails(user._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </Tbody>
              ))}
          </TableBody>
        </StyledTable>
      </div>
    );
}

export default Lists;