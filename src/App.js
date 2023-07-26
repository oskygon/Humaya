
function MyButton() {
  return (
    <button>
      Soy un botón
    </button>
    <>
     <img
     className="avatar"
     src={user.imageUrl}
   />
   </>
    
  );
}

 


export default function MyApp() {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      
      <MyButton />
    </div>
  );
}
