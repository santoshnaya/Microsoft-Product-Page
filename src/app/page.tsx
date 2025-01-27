import Hero from "./products/components/Hero"
import Header from "./products/components/Header"
import Transform from "./products/components/Transform"
import Discover from "./products/components/Discover"
import Employees from "./products/components/Employees"
import More from "./products/components/More"
import Price from "./products/components/Price"
import Organization from "./products/components/Organization"
import List from "./products/components/List"
import Choose from "./products/components/Choose"
import Last from "./products/components/Last"
const page = () => {
  return (
      <div>
          <Hero />
          <Header />
          <Transform />
          <Discover />
          <Employees />
      <More />
      <Price />
      <Organization />
      <List />
      <Choose />
      <Last/>
    </div>
  )
}
export default page