// Get Stored Boxes
const getStoredBoxes =()=>{
  const storedBoxesStr = localStorage.getItem("OrderHistory");
  if(storedBoxesStr){
    const storedBoxes = JSON.parse(storedBoxesStr);
    return storedBoxes
  }
  return [];
  }

  // Add to Stored
  const addToStored =(id)=>{
  const storedBoxesData = getStoredBoxes();
  if(storedBoxesData.includes(id)){
    return true;
  }
  else{
    storedBoxesData.push(id);
    setToStorage(storedBoxesData);
    return false;
  }
  };
  
  // Set to Storage
  const setToStorage = (boxesData) => {
  const stringiFiedData = JSON.stringify(boxesData);
  localStorage.setItem("OrderHistory",stringiFiedData);
  }
  
  // Remove Data
  const removeBoxFromStored = (Id)=> 
  {
    const storedId = getStoredBoxes();
  
    const updatedIds = storedId.filter(id => id !== Id);
  
   setToStorage(updatedIds);
  }
  
  export {addToStored, getStoredBoxes, removeBoxFromStored};