export default function Modal2({ 
  setEditOpen, 
  editTodo, 
  itemId, 
  setEditText 
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        backgroundColor: "rgb(0,0,0, 0.7)",
        zIndex: "1000",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "100px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          color: "black",
        }}
      >
        <div
          style={{
            color: "black",
            fontSize: "25px",
            marginBottom: "20px",
            fontFamily: "Poppins",
          }}
        >
          Deseja editar esse item?
        </div>

        <input 
            onChange={(e) => setEditText(e.target.value)}       
            style={{
              width: '100%',
              transform: 'translate(-15%, -45%)',
              color:'black',
              marginBottom:'8px',
              marginTop:'20px', 
              padding:'4%'
              }} 
              type='text' 
              placeholder='Colocar as descrições das tarefas aqui.' 
              required 
          />
          <br />

        <button
          onClick={() => {
            setEditOpen(null);
            editTodo(itemId);
          }}
          style={{
            fontFamily: "Poppins",
            padding: "7px 40px",
            backgroundColor: "#0C70F2",
            color: "white",
            borderRadius: "10px",
            fontSize: "20px",
            marginLeft: "17px",
            border: "none",
            cursor: "pointer",
          }}
          type="submit"
        >
          Sim
        </button>

        <button
          onClick={() => setEditOpen(null)}
          style={{
            fontFamily: "Poppins",
            padding: "7px 40px",
            backgroundColor: "white",
            color: "#0C70F2",
            borderRadius: "10px",
            fontSize: "20px",
            border: "1px solid black ",
            marginLeft: "26px",
            cursor: "pointer",
          }}
          type="submit"
        >
          Não
        </button>
      </div>
    </div>
  );
}
