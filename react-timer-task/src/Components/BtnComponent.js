import React from 'react';

function BtnComponent(props) {
  const handleSubmit =()=>{

    let form_data =new FormData(document.getElementById("add_form"));
    var object = {};
    form_data.forEach((value, key) => object[key] = value);
    var json = JSON.stringify(object);
    console.log(json)
    console.log(props.list)
    let newArr=props.list
    newArr.push(object)
    props.updateList(newArr)
    document.getElementById('close_modal').click();
    document.getElementById("add_form").reset();
    // need to change update modal

  }
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
<button type="button" className="stopwatch-btn stopwatch-btn-yel" disabled  data-bs-toggle="modal" data-bs-target="#exampleModal"  >Save</button>


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
<button type="button" className="stopwatch-btn stopwatch-btn-yel" disabled  data-bs-toggle="modal" data-bs-target="#exampleModal"  >Save</button>

         

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

<button type="button" className="stopwatch-btn stopwatch-btn-yel"   data-bs-toggle="modal" data-bs-target="#exampleModal"  >Save</button>


        </div> : ""
      }



<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header d-flex justify-content-around ">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
        <button type="button" className="btn-close cross-btn" id='close_modal'  data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit} id='add_form'>
          <div className="mb-3 d-flex flex-column align-items-start">
            <label for="title" className="col-form-label">Timmer</label>
            <input type="text" readOnly className="form-control" id="time"  name='time' value={`${props.time.h==0?"00":props.time.h}:${props.time.m==0?"00":props.time.m}:${props.time.s==0?"00":props.time.s}:${props.time.ms}`}/>
          </div>
          <div className="mb-3 d-flex flex-column align-items-start">
            <label for="title" className="col-form-label">Title</label>
            <input type="text" className="form-control" name='title' id="title" />
          </div>
          <div className="mb-3 d-flex flex-column align-items-start">
            <label for="desc-text" className="col-form-label">Description</label>
            <textarea className="form-control" name='description' id="desc-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit"  onClick={handleSubmit} className="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default BtnComponent;