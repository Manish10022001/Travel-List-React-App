import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackagingList from "./components/PackagingList";
import Stats from "./components/Stats";
import ConfirmModal from "./components/ConfirmModal"; 

function App() {
  const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false); //for confirm modal : last step

  function handleNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // function handleClearList() {
  //   const confirmed = window.confirm(
  //     "Are you sure you want to delete all list? 🤔"
  //   );
  //   if (confirmed) setItems([]);
  // }
  
  function handleClearList() {
    setShowModal(true); // SHOW MODAL instead of window.confirm
  }

  function confirmClearList() {
    setItems([]);
    setShowModal(false);
  }

  function cancelClearList() {
    setShowModal(false);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleNewItem} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
      {/* for confrimmodal jsx, trigger */}
       {showModal && (
        <ConfirmModal
          message="Are you sure you want to delete the entire list? 🤔"
          onConfirm={confirmClearList}
          onCancel={cancelClearList}
        />
       )}
    </div>
  );
}

export default App;
