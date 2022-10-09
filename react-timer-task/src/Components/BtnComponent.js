import React from 'react';

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0) ?
        <div>
          <button className="stopwatch-btn stopwatch-btn-red"
            onClick={props.stop} disabled>Pause</button>
            <button className="stopwatch-btn stopwatch-btn-gre"
            onClick={props.start}>Start</button>
            <button className="stopwatch-btn stopwatch-btn-gre"
            onClick={props.resume}>Resume</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
            onClick={props.reset} disabled>Reset</button>


<button type="button" className="stopwatch-btn stopwatch-btn-yel" data-bs-toggle="modal" data-bs-target="#exampleModal"  disabled >Save</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header d-flex justify-content-around ">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
        <button type="button" className="btn-close cross-btn" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3 d-flex flex-column align-items-start">
            <label for="title" className="col-form-label">Title</label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="mb-3 d-flex flex-column align-items-start">
            <label for="desc-text" className="col-form-label">Description</label>
            <textarea className="form-control" id="desc-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
          
        </div> : ""
      }

      {(props.status === 1) ?
        <div>
       
        <button className="stopwatch-btn stopwatch-btn-gre"
          onClick={props.start} disabled>Start</button>
           <button className="stopwatch-btn stopwatch-btn-red"
          onClick={props.stop} >Pause</button>
        <button className="stopwatch-btn stopwatch-btn-yel"
          onClick={props.reset} >Reset</button>
          <button className="stopwatch-btn stopwatch-btn-gre"
            onClick={props.resume} disabled>Resume</button>


<button type="button" className="stopwatch-btn stopwatch-btn-yel" data-bs-toggle="modal" data-bs-target="#exampleModal"  >Save</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header d-flex justify-content-around ">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
        <button type="button" className="btn-close cross-btn" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3 d-flex flex-column align-items-start">
            <label for="title" className="col-form-label">Title</label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="mb-3 d-flex flex-column align-items-start">
            <label for="desc-text" className="col-form-label">Description</label>
            <textarea className="form-control" id="desc-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>

      </div> : ""
      }

      {(props.status === 2) ?
        <div>
           <button className="stopwatch-btn stopwatch-btn-red"
          onClick={props.stop} disabled >Pause</button>
          <button className="stopwatch-btn stopwatch-btn-gre"
            onClick={props.resume}>Resume</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
            onClick={props.reset}>Reset</button>
             <button className="stopwatch-btn stopwatch-btn-gre"
          onClick={props.start} disabled>Start</button>


<button type="button" className="stopwatch-btn stopwatch-btn-yel" data-bs-toggle="modal" data-bs-target="#exampleModal"  >Save</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header d-flex justify-content-around ">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
        <button type="button" className="btn-close cross-btn" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3 d-flex flex-column align-items-start">
            <label for="title" className="col-form-label">Title</label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="mb-3 d-flex flex-column align-items-start">
            <label for="desc-text" className="col-form-label">Description</label>
            <textarea className="form-control" id="desc-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>


        </div> : ""
      }



    </div>
  );
}

export default BtnComponent;