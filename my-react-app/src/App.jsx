import Header from "./components/Header";
import Location from "./components/Location";
import data from "./data";
import pic from "./assets/colessum-roma.jpg"
import pic1 from "./assets/Eiffel-Tower-paris.jpg.webp"
import pic2 from "./assets/statue-of-liberty.jpeg"


function App() {
  const dataElements = data.map((datas)=>{
    return (
    <Location 
      key={datas.id}
      {...datas}
      />
    )
  })

  return(
    <>
    <Header />
    
    <main>
    {dataElements}
    </main>

 </>
  );
 
}

export default App