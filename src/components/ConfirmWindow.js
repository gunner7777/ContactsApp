import React from 'react';

const ConfirmWindow = (props) => {

  let block = props.isShow ?
    <div className="bg-modal">
      <div className="modal">
        <p>Delete contact?</p>
        <button
          className="button button-big modal__button"
          value="true"
          onClick={(e) => props.getConfirm(e.target.value)}>
          Yes
        </button>
        <button
          className="button button-big modal__button modal__button--negative"
          value="false"
          onClick={(e) => props.getConfirm(e.target.value)}>
          No
        </button>
      </div>
    </div> : "";
  return (
    <div>
    {block}
    </div>
  );
}

export default ConfirmWindow;