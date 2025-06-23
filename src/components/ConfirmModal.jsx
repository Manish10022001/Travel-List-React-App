// components/ConfirmModal.js
//for clear all button


export default function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>{message}</p>
        <div className="buttons">
          <button className="confirm" onClick={onConfirm}>
            Yes
          </button>
          <button className="cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
