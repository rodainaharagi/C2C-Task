  export function Navbar(){
 
    return(
        <div>
        <nav style={{ display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            backgroundColor:"#233D4D",
            height:70, 
            borderRadius:10
            
            }}>
            <strong style={{display:"flex",
                fontSize:27,
                color:"white",
            }}>TeamHub</strong>

            <ul style={{ display:"flex" ,
             gap:20, 
             color:"White",
             fontSize:18

             }}>
              <li>Home</li>
              <li>contact</li>
              <li>Team</li>
            </ul>
        </nav>
      </div>  
    )
}


 export function Teamsection(){
    return( 
        <div style={{ display:"flex", 
        alignItems:"center",
        padding:50,
         flexDirection:"column",
        fontSize:20
         }}>
        <small>MEET OUR TEAM</small>
        <strong style={{fontSize:35}}>Our Creative Team</strong>
        <p>A team of talented minds working together 
            creating solutions that make an impact
        </p>
        </div>
    )
}

export function Teamcard({employee}){
 return(
      <div style={{
        display:"flex",
        alignContent:"space-between",
        justifyContent:"center",
        marginTop:90,
        gap:90,
        


      }}>
      {employee.map((item) => (
        <div key={item.id} style={{
        border:"2px,solid,#EFE9E3",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        borderRadius:60,
        height:290,
        width:500,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
        }}>
          <img src={item.image} alt={item.name} width="220"  style={{borderRadius:12}} />
          <strong>{item.name}</strong>
          <p>{item.title}</p>
        </div>
      ))}
    </div>

 )
}

