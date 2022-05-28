import React, {useState} from 'react'
import { Button, DropdownItem, DropdownMenu, DropdownToggle, Media, Modal, Table, UncontrolledDropdown } from 'reactstrap';
// import {  } from 'react/cjs/react.production.min';

function CodeReview() {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='container'>
        <button
            className="btn-icon-clipboard"
            data-clipboard-text="fat-add"
            id="tooltip112280005"
            type="button"
            onClick={handleShow}
            data-toggle="modal" 
            data-target="#exampleModal"
        >
        <div>
            <i className="ni ni-fat-add" />
            <span>Code Review</span>
        </div>
        </button>


        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Commit list</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                
             <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <th scope="row">/argon/</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>
                  </tr>
                 
                </tbody>
              </Table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        </div>
    
  )
}

export default CodeReview