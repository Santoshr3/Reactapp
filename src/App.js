import { HashRouter, Routes, Route, Link, } from "react-router-dom";

import User from "./basic/page1";
import Mybook from "./basic/page2";
import Myproduct from "./basic/page3";
import Mycompany from "./basic/page4";
import Mycustomer from "./basic/page5";
import Blogs from "./basic/page6";
import State1 from "./hooks/hook1";
import State2 from "./hooks/hook2";
import State3 from "./hooks/hook3";
import State4 from "./hooks/hook4";
function App() {
  return (
    
  <HashRouter>
    <table align="center" cellPadding="10">
      <tbody>
        <tr>
          <td><Link to="/user"> User </Link></td>
          <td><Link to="/book"> Books </Link></td>
          <td><Link to="/product"> Product </Link></td>
          <td><Link to="/company"> Company </Link></td>
          <td><Link to="/customer"> Customer </Link></td>
          <td><Link to="/blog"> Blogs </Link></td>
          <td><Link to="/hook1"> State1 </Link></td>
          <td><Link to="/hook2"> State2 </Link></td>
          <td><Link to="/hook3"> State3 </Link></td>
          <td><Link to="/hook4"> State4 </Link></td>

        </tr>
      </tbody>
    </table>

    <Routes>
      <Route exact path="/user" element={<User />} />
      <Route exact path="/book" element={<Mybook />} />
      <Route exact path="/product" element={<Myproduct />} />
      <Route exact path="/company" element={<Mycompany />} />
      <Route exact path="/customer" element={<Mycustomer />} />
      <Route exact path="/blog" element={<Blogs />} />
      <Route exact path="/hook1" element={<State1 />} />
      <Route exact path="/hook2" element={<State2 />} />
      <Route exact path="/hook3" element={<State3 />} />
      <Route exact path="/hook4" element={<State4 />} />
    </Routes>

    </HashRouter>
  );
}

export default App;
