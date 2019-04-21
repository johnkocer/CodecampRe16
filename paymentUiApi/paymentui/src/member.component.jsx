import React from 'react';
const MemberComponent = (props) => {
    return (
        <fieldset>
        <legend><span > Customer Info: </span></legend>
        <div  className="col col-sm">
          <div >
            <label>Member ID: </label> <span>{ props.member.id }</span>
          </div>
          <div>
            <label>Name: </label> <span> { props.member.fullName }</span>
          </div>
          <div>
            <label className="memberTH">Zip Code: </label>
            <span>{ props.member.zipCode }</span>
          </div>
        </div>
      </fieldset>
    )
}

export default MemberComponent;