import { useEffect } from "react"

const Navbar = ({color}) => {


// Case1: Run on every render
useEffect(() => {
  alert("I will run on every render")
})

//Case2: Run only on first render
useEffect(() => {
  alert("I will run only on first render")
}, [])

  //Case3: Run only when certain value changes
useEffect(() => {
  alert("I am running because color was chaged")
}, [color])


//Example of cleanup function
// useEffect(() => {
//   alert("well come to the page, this is first render app.js")
//   return () => {
//     alert("componant was unmounted")
//   }
// }, [])



  return (
    <div>
      I am Navbar of {color} color
    </div>
  )
}

export default Navbar

