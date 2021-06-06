import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import {getAllUsers} from '../../../actions/auth'
import { getContacts} from '../../../actions/contact'
import {deleteContact} from '../../../actions/contact'

//material ui
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TextField from "@material-ui/core/TextField";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from  "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.info.light,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });




const AdminHome =({  deleteContact,getAllUsers,auth:{user,loading},users:{users} ,getContacts,contact:{contacts}}) => {

    const classes = useStyles();
   
    const [search, setSearch] = useState("");


    useEffect(()=>{
        getAllUsers()
        getContacts()
       },[getAllUsers,getContacts])

    return (
 <div>
        <div className=" w-full mx-auto pt-10">
        Welcome {user && user.userName}!
     
           </div>
           <div className="w-full px-4 md:px-0  text-gray-800 leading-normal">
           
       
           
           <div className="flex flex-wrap">
               <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                
                   <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                       <div className="flex flex-row items-center">
                           <div className="flex-shrink pr-4">
                               <div className="rounded p-3 bg-green-600"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                           </div>
                           <div className="flex-1 text-right md:text-center">
                               <h5 className="font-bold uppercase text-gray-400"><a href="/businessess">All Businesses</a> </h5>
                               <h3 className="font-bold text-3xl text-gray-600"><span className="text-green-500"><i className="fas fa-caret-up"></i></span></h3>
                           </div>
                       </div>
                   </div>
                 
               </div>
 
               <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                 
                   <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                       <div className="flex flex-row items-center">
                           <div className="flex-shrink pr-4">
                               <div className="rounded p-3 bg-blue-600"><i className="fas fa-briefcase  fa-2x fa-fw fa-inverse"></i></div>
                           </div>
                           <div className="flex-1 text-right md:text-center">
                               <h5 className="font-bold uppercase text-gray-400"><a href="/business/register">Register New Business</a></h5>
                               <h3 className="font-bold text-3xl text-gray-600"> <span className="text-blue-600"><i className="fas fa-caret-up"></i></span></h3>
                           </div>
                       </div>
                   </div>
                
               </div>
            
               <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                  
                  <div className="bg-gray-900 border border-gray-800 rounded shadow p-2">
                      <div className="flex flex-row items-center">
                          <div className="flex-shrink pr-4">
                              <div className="rounded p-3 bg-pink-600"><i className="fas fa-book fa-2x fa-fw fa-inverse"></i></div>
                          </div>
                          <div className="flex-1 text-right md:text-center">
                              <h5 className="font-bold uppercase text-gray-400"><a href="/appointments">All Appointments</a></h5>
                              <h3 className="font-bold text-3xl text-gray-600"> <span className="text-pink-600"><i className="fas fa-caret-up"></i></span></h3>
                          </div>
                      </div>
                  </div>
             
              </div>



           
           </div>


           </div>
<div>

      <TextField
      id="outlined-basic" label="Search" variant="outlined"
      style={{margin:'10px'}}
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

<TableContainer className='container-fluid flex-auto' component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User Id</StyledTableCell>
              <StyledTableCell >Name</StyledTableCell>
              <StyledTableCell >Email</StyledTableCell>
              <StyledTableCell >Role</StyledTableCell>
          
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .filter((item) => {
                if (search == '') {
                  return item;
                } else if (
                  item.userName.toString().toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <StyledTableRow key={item.userID}>
                    <StyledTableCell component="th" scope="row">
                      {item.userID}
                    </StyledTableCell>
                    <StyledTableCell>
                      {item.userName}
                    </StyledTableCell>
                    <StyledTableCell >
                      {item.email}
                    </StyledTableCell>
                    <StyledTableCell >
                      {item.userRole}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>


</div>




<div>
<TextField
      id="outlined-basic" label="Search" variant="outlined"
      style={{margin:'10px'}}
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />


<TableContainer className='container-fluid flex-auto' component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Contact Id</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Message</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts
              .filter((contact) => {
                if (search == '')  {
                  return contact;
                } else if (
                  contact.email.toString().toLowerCase().includes(search.toLowerCase())
                ) {
                  return contact;
                }
                

              })
              .map((contact) => {
                return (
                  <StyledTableRow key={contact.contactId}>
                    <StyledTableCell component="th" scope="row">
                      {contact.contactId}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {contact.fullName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {contact.email}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {contact.message}
                    </StyledTableCell>
                    <StyledTableCell align="right">
    <button onClick={()=>
      
      deleteContact(contact.contactId)
      
      
      } className='btn btn-red'>Delete</button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>



</div>












</div>
	
    )
}

AdminHome.propTypes = {
    auth:PropTypes.object.isRequired,
    getAllUsers:PropTypes.func.isRequired,
    getContacts:PropTypes.func.isRequired,
    deleteContact:PropTypes.func.isRequired
}
const mapStateToProps=state=>({
    auth:state.auth,
    users:state.users,
    contact:state.contact,

  
    })
export default connect(mapStateToProps,{getAllUsers,getContacts,deleteContact}) (AdminHome)
