import{Navbar , Teamsection, Teamcard} from "./components/test"

function App(){

	const Employeesdata=[
		{id:1,
	     image:"https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg" ,
		 name:"Sarah Moamen",
		 title:"Web Developer",		 	
		},

		{id:2,
	     image:"https://i.pinimg.com/1200x/ed/6a/e9/ed6ae9e8e16362fe61ba02ffa1d877ca.jpg" ,
		 name:"Mark Brown",
		 title:"Marketing Manager",		 	
		},

		{id:3,
	     image:"https://i.pinimg.com/736x/6d/eb/86/6deb86e669d45537bb84933d55488b22.jpg" ,
		 name:"Leila Hassan",
		 title:"Senior Accountant",		 	
		},

		{id:4,
	     image:"https://i.pinimg.com/736x/7e/46/c6/7e46c6d2798eff446b365c5246f4c9ca.jpg" ,
		 name:"John Miller",
		 title:"Senior Manager",		 	
		},
	]

	return(
		<div>
		<Navbar></Navbar>
		<Teamsection></Teamsection>
		<Teamcard employee={Employeesdata}></Teamcard>
		</div>
	)

}

export default App